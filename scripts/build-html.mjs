/**
 * Ensambla index.html desde index.template.html sustituyendo
 * <!-- INCLUDE:ruta/relativa/desde/la/raíz.html --> por el contenido del archivo (recursivo).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const INCLUDE_RE = /<!--\s*INCLUDE:([^>]+?)\s*-->/g;

function readInclude(filePath) {
  const abs = path.join(root, filePath);
  if (!abs.startsWith(root) || !fs.existsSync(abs)) {
    throw new Error(`Include no encontrado o inválido: ${filePath}`);
  }
  let inner = fs.readFileSync(abs, "utf8");
  return expandIncludes(inner);
}

function expandIncludes(content) {
  return content.replace(INCLUDE_RE, (_, rawPath) => {
    const rel = rawPath.trim();
    return readInclude(rel);
  });
}

const templatePath = path.join(root, "index.template.html");
const outPath = path.join(root, "index.html");

const template = fs.readFileSync(templatePath, "utf8");
const output = expandIncludes(template);
fs.writeFileSync(outPath, output, "utf8");
console.log("Generado: index.html");

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const INCLUDE = /<!--\s*INCLUDE:([^>]+?)\s*-->/g;

function expand(html, seen = new Set()) {
  return html.replace(INCLUDE, (_, raw) => {
    const rel = raw.trim();
    const file = resolve(root, rel);
    if (seen.has(file)) {
      throw new Error(`INCLUDE circular: ${rel}`);
    }
    const next = new Set(seen);
    next.add(file);
    return expand(readFileSync(file, "utf8"), next);
  });
}

const pages = [
  ["partials/layout-index.html", "index.html"],
  ["partials/layout-resultados.html", "resultados.html"],
];

for (const [src, dest] of pages) {
  const html = expand(readFileSync(join(root, src), "utf8"));
  writeFileSync(join(root, dest), html);
  console.log(`wrote ${dest}`);
}

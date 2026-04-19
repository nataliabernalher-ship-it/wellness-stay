/**
 * Inserta HTML de parciales y devuelve un nodo para Storybook (HTML).
 */
export function htmlStory(html) {
  const trimmed = String(html).trim();
  const wrap = document.createElement("div");
  wrap.innerHTML = trimmed;
  if (wrap.children.length === 1) {
    return wrap.firstElementChild;
  }
  return wrap;
}

/** Resuelve <!-- INCLUDE:path --> con el contenido ya importado como string. */
export function applyIncludes(template, map) {
  return template.replace(/<!--\s*INCLUDE:([^>]+?)\s*-->/g, (_, raw) => {
    const key = raw.trim();
    if (!map[key]) {
      console.warn("[storybook] INCLUDE sin contenido:", key);
      return "";
    }
    return map[key];
  });
}

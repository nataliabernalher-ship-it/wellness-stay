import { escapeHtml } from "../html.js";

export function renderLink({
  text = "Texto de enlace",
  href = "#",
  muted = false,
} = {}) {
  const className = muted ? "link ws-link ws-link--muted" : "link ws-link";
  return `<a class="${className}" href="${escapeHtml(href)}">${escapeHtml(text)}</a>`;
}

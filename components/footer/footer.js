import { renderLink } from "../link/link.js";
import { escapeHtml } from "../html.js";

export function renderFooter({
  text = "Buscador de retiros de salud y bienestar.",
  links = [
    { text: "Cómo funciona", href: "#" },
    { text: "Políticas", href: "#" },
    { text: "Contacto", href: "#" },
  ],
} = {}) {
  const linkItems = links.map((link) => renderLink({ ...link, muted: true })).join("");
  return `
<footer id="ayuda" class="footer">
  <div class="container footer-inner">
    <div>
      <div class="brand brand-footer">
        <img class="brand-logo" src="./assets/logo.svg" alt="Retiro" width="175" height="47" decoding="async" />
      </div>
      <p class="footer-text">${escapeHtml(text)}</p>
    </div>
    <div class="footer-links" aria-label="Enlaces de ayuda">
      ${linkItems}
    </div>
  </div>
</footer>`.trim();
}

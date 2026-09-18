import { escapeHtml } from "../html.js";

const TYPES = ["cuadrado", "rectangulo", "alargado"];

export function renderImageGallery({
  title = "Here is the title",
  subtitle = "A subtext is written here",
  image = "mountain",
  href = "",
  label = "",
  type = "cuadrado",
} = {}) {
  const safeType = TYPES.includes(type) ? type : "cuadrado";
  const aria = label ? ` aria-label="${escapeHtml(label)}"` : "";
  const img = escapeHtml(image);
  const className = `ws-image-gallery ws-image-gallery--${safeType}`;
  const inner = `
  <div class="ws-image-gallery__media" aria-hidden="true"></div>
  <div class="ws-image-gallery__scrim" aria-hidden="true"></div>
  <div class="ws-image-gallery__content-card">
    <div class="ws-image-gallery__content">
      <h3 class="ws-image-gallery__title">${escapeHtml(title)}</h3>
      <p class="ws-image-gallery__subtitle">${escapeHtml(subtitle)}</p>
    </div>
  </div>`;

  if (href) {
    return `<a class="${className}" href="${escapeHtml(href)}" data-img="${img}"${aria}>${inner}</a>`;
  }

  return `<article class="${className}" data-img="${img}">${inner}</article>`;
}

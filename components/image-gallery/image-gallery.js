import { escapeHtml } from "../html.js";

export function renderImageGallery({
  title = "Retiros de Meditación",
  subtitle = "Ubicación del retiro",
  image = "mountain",
  href = "",
  label = "",
} = {}) {
  const aria = label ? ` aria-label="${escapeHtml(label)}"` : "";
  const img = escapeHtml(image);
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
    return `<a class="ws-image-gallery" href="${escapeHtml(href)}" data-img="${img}"${aria}>${inner}</a>`;
  }

  return `<article class="ws-image-gallery" data-img="${img}">${inner}</article>`;
}

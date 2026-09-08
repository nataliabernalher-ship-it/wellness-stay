import { escapeHtml } from "../html.js";

export function renderCard({
  title = "Nombre del retiro",
  location = "Ubicación del retiro",
  extra = "Texto extra",
  price = "0.000€",
  image = "mountain",
} = {}) {
  return `
<article class="ws-card">
  <div class="ws-card__media" aria-hidden="true" data-img="${escapeHtml(image)}"></div>
  <div class="ws-card__content glass glass--light">
    <h3 class="ws-card__title">${escapeHtml(title)}</h3>
    <p class="ws-card__location">${escapeHtml(location)}</p>
    <div class="ws-card__footer">
      <p class="ws-card__extra">${escapeHtml(extra)}</p>
      <p class="ws-card__price glass glass--light">${escapeHtml(price)}</p>
    </div>
  </div>
</article>`.trim();
}

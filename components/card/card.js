import { escapeHtml } from "../html.js";

function datasetAttrs(dataset = {}) {
  return Object.entries(dataset)
    .filter(([, value]) => value != null && value !== "")
    .map(([key, value]) => `data-${escapeHtml(key)}="${escapeHtml(value)}"`)
    .join(" ");
}

export function renderCard({
  title = "Nombre del alojamiento",
  location = "Ubicación",
  description = "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
  details = "Cancelacion gratuita",
  tag = "This is a tag",
  extra = "This is a tag",
  priceLabel = "1 noche desde",
  price = "124€",
  score = "9, 4",
  image = "mountain",
  showDescription = true,
  showDetails = true,
  showTags = true,
  dataset = {},
} = {}) {
  const attrs = datasetAttrs(dataset);
  const tagMarkup = showTags
    ? `<span class="ws-card__tag"><span class="ws-card__tag-icon" aria-hidden="true"></span>${escapeHtml(tag)}</span>`
    : "";
  const descriptionMarkup = showDescription
    ? `<p class="ws-card__description">${escapeHtml(description)}</p>`
    : "";
  const detailsMarkup = showDetails
    ? `<p class="ws-card__details">${escapeHtml(details)}</p>`
    : "";

  return `
<article class="ws-card"${attrs ? ` ${attrs}` : ""}>
  <div class="ws-card__media" data-img="${escapeHtml(image)}">
    <div class="ws-card__media-top">
      ${tagMarkup}
      <button class="ws-card__like" type="button" aria-label="Guardar"></button>
    </div>
    <span class="ws-card__dots" aria-hidden="true"></span>
  </div>
  <div class="ws-card__content">
    <div class="ws-card__top">
      <p class="ws-card__score"><span>${escapeHtml(score)}</span><span class="ws-card__score-icon" aria-hidden="true"></span></p>
      <h3 class="ws-card__title">${escapeHtml(title)}</h3>
      <p class="ws-card__location">${escapeHtml(location)}</p>
      ${descriptionMarkup}
      ${detailsMarkup}
    </div>
    <div class="ws-card__footer">
      <p class="ws-card__extra">${escapeHtml(extra)}</p>
      <p class="ws-card__price-group">
        <span class="ws-card__price-label">${escapeHtml(priceLabel)}</span>
        <span class="ws-card__price">${escapeHtml(price)}</span>
      </p>
    </div>
  </div>
</article>`.trim();
}

export function nightsLabel(nights) {
  const count = Number(nights);
  if (!count) return "1 noche desde";
  return `${count} ${count === 1 ? "noche" : "noches"} desde`;
}

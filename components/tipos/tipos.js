import { renderImageGallery } from "../image-gallery/image-gallery.js";
import { escapeHtml } from "../html.js";

export const RETREAT_TYPES = [
  { title: "Retiros de Yoga", subtitle: "Energía y flexibilidad", image: "yoga", href: "./resultados.html?tipo=yoga", label: "Retiros de Yoga" },
  { title: "Retiros de Meditación", subtitle: "Silencio y presencia", image: "meditation", href: "./resultados.html?tipo=meditacion", label: "Retiros de Meditación" },
  { title: "Retiros de Detox", subtitle: "Ligereza y descanso", image: "detox", href: "./resultados.html?tipo=detox", label: "Retiros de Detox" },
  { title: "Retiros de Naturaleza", subtitle: "Senderos y aire puro", image: "nature", href: "./resultados.html?tipo=naturaleza", label: "Retiros de Naturaleza" },
  { title: "Retiros de Spa", subtitle: "Cuerpo y recuperación", image: "spa", href: "./resultados.html?tipo=spa", label: "Retiros de Spa" },
  { title: "Retiros de Mindfulness", subtitle: "Foco y calma", image: "mindfulness", href: "./resultados.html?tipo=mindfulness", label: "Retiros de Mindfulness" },
];

export function renderRetreatTypes({
  heading = "Tipos de retiro",
  subtitle = "Explora por intención: movimiento, descanso, foco o transformación.",
  types = RETREAT_TYPES,
} = {}) {
  const tiles = types.map((type) => renderImageGallery(type)).join("");
  return `
<section id="tipos" class="section section-muted">
  <div class="container">
    <div class="section-head">
      <div>
        <h2>${escapeHtml(heading)}</h2>
        <p class="section-subtitle">${escapeHtml(subtitle)}</p>
      </div>
    </div>
    <div class="types">${tiles}</div>
  </div>
</section>`.trim();
}

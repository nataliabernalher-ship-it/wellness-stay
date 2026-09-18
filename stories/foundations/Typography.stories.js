import tokens from "../../tokens.json";
import "./foundations.css";

function el(html) {
  const wrap = document.createElement("div");
  wrap.innerHTML = html.trim();
  return wrap.firstElementChild;
}

const { fontFamily, fontSize, fontWeight } = tokens.typography;

export default {
  title: "Foundations/Typography",
  tags: ["autodocs"],
};

export const FamiliasYEscala = {
  name: "Familias y escala",
  render: () => {
    const sizes = Object.entries(fontSize)
      .map(
        ([k, v]) => `
      <div class="ws-fdn__type-row">
        <div class="ws-fdn__type-label">${k} · ${v}px</div>
        <div style="font-size:${v}px;font-family:var(--font-body);line-height:1.3;color:var(--text-display)">
          DM Sans — El retiro que tu cuerpo pide
        </div>
      </div>`
      )
      .join("");

    const html = `
      <div class="ws-fdn">
        <h2 class="ws-fdn__title">Typography</h2>
        <p class="ws-fdn__subtitle">Display: ${fontFamily.display} · Body: ${fontFamily.body} · Tracking display: -2%</p>

        <div class="ws-fdn__section">
          <h3>Display (Fraunces)</h3>
          <p style="font-family:var(--font-display);font-weight:700;font-size:clamp(28px,4vw,48px);line-height:1.15;letter-spacing:var(--letter-spacing-display);color:var(--text-display);margin:0">
            Encuentra tu retiro ideal
          </p>
        </div>

        <div class="ws-fdn__section">
          <h3>Body (DM Sans)</h3>
          <p style="font-family:var(--font-body);font-size:16px;line-height:1.6;color:var(--text-body);margin:0;max-width:52ch">
            Texto de cuerpo para búsquedas, descripciones y formularios. Filtra por destino, fechas y personas.
          </p>
        </div>

        <div class="ws-fdn__section">
          <h3>Escala de tamaños (tokens)</h3>
          ${sizes}
        </div>

        <div class="ws-fdn__section">
          <h3>Pesos (${Object.keys(fontWeight).join(", ")})</h3>
          <p style="font-family:var(--font-body);font-size:18px;margin:0 0 8px;font-weight:400;color:var(--text-display)">Regular 400</p>
          <p style="font-family:var(--font-body);font-size:18px;margin:0 0 8px;font-weight:500;color:var(--text-display)">Medium 500</p>
          <p style="font-family:var(--font-body);font-size:18px;margin:0 0 8px;font-weight:600;color:var(--text-display)">Semibold 600</p>
          <p style="font-family:var(--font-body);font-size:18px;margin:0 0 8px;font-weight:700;color:var(--text-display)">Bold 700</p>
          <p style="font-family:var(--font-body);font-size:18px;margin:0;font-weight:800;color:var(--text-display)">Black 800</p>
        </div>
      </div>`;
    return el(html);
  },
};

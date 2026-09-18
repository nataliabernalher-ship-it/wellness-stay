import tokens from "../../tokens.json";
import "./foundations.css";

function el(html) {
  const wrap = document.createElement("div");
  wrap.innerHTML = html.trim();
  return wrap.firstElementChild;
}

export default {
  title: "Foundations/Elevation",
  tags: ["autodocs"],
};

export const SombrasYFoco = {
  name: "Sombras y foco",
  render: () => {
    const shadows = Object.entries(tokens.shadow)
      .map(
        ([k]) => `
            <div>
              <div class="ws-fdn__shadow-box" style="box-shadow:var(--shadow-${k})"></div>
              <div class="ws-fdn__meta"><strong>shadow-${k}</strong>var(--shadow-${k})</div>
            </div>`
      )
      .join("");
    const html = `
      <div class="ws-fdn">
        <h2 class="ws-fdn__title">Elevation</h2>
        <p class="ws-fdn__subtitle">Escala de sombras de Figma y <code>--ring</code> (focus).</p>
        <div class="ws-fdn__section">
          <div class="ws-fdn__row" style="gap:var(--space-xl);align-items:flex-start;flex-wrap:wrap">
            ${shadows}
            <div>
              <div class="ws-fdn__shadow-box" style="box-shadow:var(--ring);border-color:var(--border-focus)"></div>
              <div class="ws-fdn__meta"><strong>ring</strong>var(--ring)</div>
            </div>
          </div>
        </div>
      </div>`;
    return el(html);
  },
};

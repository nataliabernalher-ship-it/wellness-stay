import tokens from "../../tokens.json";
import "./foundations.css";

function el(html) {
  const wrap = document.createElement("div");
  wrap.innerHTML = html.trim();
  return wrap.firstElementChild;
}

export default {
  title: "Foundations/Radius",
  tags: ["autodocs"],
};

export const Escala = {
  name: "Escala",
  render: () => {
    const entries = Object.entries(tokens.radius).sort(
      (a, b) => a[1] - b[1]
    );
    const cells = entries
      .map(
        ([k, v]) => `
      <div>
        <div class="ws-fdn__radius-box" style="border-radius:${v}px"></div>
        <div class="ws-fdn__meta"><strong>${k}</strong> ${v}px · var(--radius-${k})</div>
      </div>`
      )
      .join("");
    const html = `
      <div class="ws-fdn">
        <h2 class="ws-fdn__title">Radius</h2>
        <p class="ws-fdn__subtitle">Incluye <code>--radius-2xs</code>, <code>--radius-4</code> y <code>--radius-full</code> de Sizes en Foundations.</p>
        <div class="ws-fdn__section">
          <div class="ws-fdn__row" style="gap:var(--space-xl)">${cells}</div>
        </div>
      </div>`;
    return el(html);
  },
};

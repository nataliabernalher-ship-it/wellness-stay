import tokens from "../../tokens.json";
import "./foundations.css";

function el(html) {
  const wrap = document.createElement("div");
  wrap.innerHTML = html.trim();
  return wrap.firstElementChild;
}

export default {
  title: "Foundations/Spacing",
  tags: ["autodocs"],
};

export const Escala = {
  name: "Escala",
  render: () => {
    const entries = Object.entries(tokens.spacing).sort(
      (a, b) => a[1] - b[1]
    );
    const rows = entries
      .map(
        ([k, px]) => `
      <div class="ws-fdn__row" style="margin-bottom:12px;align-items:center">
        <div style="width:72px;font-size:12px;font-weight:600;color:var(--text-display)">${k}</div>
        <div style="width:48px;font-size:11px;color:var(--text-muted)">${px}px</div>
        <div class="ws-fdn__space-bar" style="width:${px}px" title="var(--space-${k})"></div>
      </div>`
      )
      .join("");
    const html = `
      <div class="ws-fdn">
        <h2 class="ws-fdn__title">Spacing</h2>
        <p class="ws-fdn__subtitle">Escala desde tokens (variables CSS <code style="font-size:12px">--space-*</code>).</p>
        <div class="ws-fdn__section">${rows}</div>
      </div>`;
    return el(html);
  },
};

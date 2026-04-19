import tokens from "../../tokens.json";
import "./foundations.css";

function el(html) {
  const wrap = document.createElement("div");
  wrap.innerHTML = html.trim();
  return wrap.firstElementChild;
}

export default {
  title: "Foundations/Layout",
  tags: ["autodocs"],
};

export const Contenedores = {
  name: "Contenedores y cards",
  render: () => {
    const { layout } = tokens;
    const html = `
      <div class="ws-fdn">
        <h2 class="ws-fdn__title">Layout</h2>
        <p class="ws-fdn__subtitle">Anchuras de referencia desde <code>tokens.json</code> (px).</p>
        <div class="ws-fdn__section">
          <h3>Container (breakpoints)</h3>
          <ul style="margin:0;padding-left:1.2rem;font-size:14px;line-height:1.8;color:var(--text-body)">
            <li><strong>mobile</strong> — ${layout.container.mobile}px</li>
            <li><strong>tablet</strong> — ${layout.container.tablet}px</li>
            <li><strong>desktop</strong> — ${layout.container.desktop}px</li>
          </ul>
        </div>
        <div class="ws-fdn__section">
          <h3>Card width</h3>
          <ul style="margin:0;padding-left:1.2rem;font-size:14px;line-height:1.8;color:var(--text-body)">
            <li><strong>mobile</strong> — ${layout.cardWidth.mobile}px</li>
            <li><strong>tablet</strong> — ${layout.cardWidth.tablet}px</li>
            <li><strong>desktop</strong> — ${layout.cardWidth.desktop}px</li>
          </ul>
        </div>
        <p class="ws-fdn__subtitle" style="margin-top:var(--space-xl)">La página usa <code>.container</code> con <code>width: min(1120px, …)</code> en <code>styles.css</code>.</p>
      </div>`;
    return el(html);
  },
};

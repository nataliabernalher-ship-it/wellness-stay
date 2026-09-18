import tokens from "../../tokens.json";
import "./foundations.css";

function el(html) {
  const wrap = document.createElement("div");
  wrap.innerHTML = html.trim();
  return wrap.firstElementChild;
}

export default {
  title: "Foundations/Grid",
  tags: ["autodocs"],
};

export const ContenedoresYGrids = {
  name: "Contenedores y grids",
  render: () => {
    const { layout } = tokens;
    const html = `
      <div class="ws-fdn">
        <h2 class="ws-fdn__title">Grid</h2>
        <p class="ws-fdn__subtitle">Anchuras de referencia desde <code>tokens.json</code> y grids usados en la web.</p>
        <div class="ws-fdn__section">
          <h3>Grid Foundations</h3>
          <ul style="margin:0;padding-left:1.2rem;font-size:14px;line-height:1.8;color:var(--text-body)">
            <li><strong>desktop</strong> — ${layout.grid.desktop.width}px · ${layout.grid.desktop.columns} columnas · gutter ${layout.grid.desktop.gutter}px</li>
            <li><strong>tablet</strong> — ${layout.grid.tablet.width}px · ${layout.grid.tablet.columns} columnas · gutter ${layout.grid.tablet.gutter}px</li>
            <li><strong>mobile</strong> — ${layout.grid.mobile.width}px · ${layout.grid.mobile.columns} columnas · gutter ${layout.grid.mobile.gutter}px</li>
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
        <div class="ws-fdn__section">
          <h3>Grids de página</h3>
          <ul style="margin:0;padding-left:1.2rem;font-size:14px;line-height:1.8;color:var(--text-body)">
            <li><code>.ws-card-grid</code> — 3 columnas; 2 desde 1024px; 1 desde 560px</li>
            <li><code>.types</code> — 3 columnas; 2 desde 1024px; 1 desde 560px</li>
            <li><code>.container</code> — <code>min(1280px, 100%)</code>, gutter 32px / 16px en &lt;768px</li>
          </ul>
        </div>
      </div>`;
    return el(html);
  },
};

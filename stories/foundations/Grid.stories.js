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
  parameters: {
    docs: {
      description: {
        component: `
Anchos de \`layout\` en \`tokens.json\` y grids de página existentes. Figma no publica un sistema de columnas aparte de container y cardWidth.

**Tokens:** container 375 / 768 / 1280, cardWidth 328 / 360 / 420.

**Grids de producto:** \`.ws-card-grid\` (3 columnas), \`.types\` (3 columnas). Breakpoints de página: 1024px, 860px, 560px.
`,
      },
    },
  },
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
          <h3>Container</h3>
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
        <div class="ws-fdn__section">
          <h3>Grids de página</h3>
          <ul style="margin:0;padding-left:1.2rem;font-size:14px;line-height:1.8;color:var(--text-body)">
            <li><code>.ws-card-grid</code> — 3 columnas; 2 desde 1024px; 1 desde 560px</li>
            <li><code>.types</code> — 3 columnas; 2 desde 1024px; 1 desde 560px</li>
            <li><code>.container</code> — <code>width: min(1120px, …)</code></li>
          </ul>
        </div>
      </div>`;
    return el(html);
  },
};

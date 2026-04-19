import "./foundations.css";

function el(html) {
  const wrap = document.createElement("div");
  wrap.innerHTML = html.trim();
  return wrap.firstElementChild;
}

export default {
  title: "Foundations/Glass",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Tokens de efecto cristal (blur, fondo, borde) usados por la utilidad `.glass`.",
      },
    },
  },
};

export const Variantes = {
  name: "Variantes glass",
  render: () => {
    const html = `
      <div class="ws-fdn" style="background:linear-gradient(135deg,var(--color-primary-100),var(--color-neutral-300));min-height:280px;border-radius:var(--radius-xs)">
        <h2 class="ws-fdn__title" style="color:var(--text-display)">Glass</h2>
        <p class="ws-fdn__subtitle" style="color:var(--text-body)">Comparación de <code>.glass</code>, <code>.glass--light</code> y <code>.glass--strong</code>.</p>
        <div class="ws-fdn__row" style="gap:var(--space-lg);align-items:stretch;flex-wrap:wrap">
          <div class="glass glass--light" style="padding:var(--space-lg);min-width:min(100%,220px);border-radius:var(--glass-radius-md)">
            <p style="margin:0;font-size:14px;font-weight:600;color:var(--text-inverse)">glass--light</p>
            <p style="margin:8px 0 0;font-size:12px;color:rgba(255,255,255,0.85)">Blur y fondo suaves.</p>
          </div>
          <div class="glass" style="padding:var(--space-lg);min-width:min(100%,220px);border-radius:var(--glass-radius-md)">
            <p style="margin:0;font-size:14px;font-weight:600;color:var(--text-inverse)">glass (default)</p>
            <p style="margin:8px 0 0;font-size:12px;color:rgba(255,255,255,0.85)">Balance medio.</p>
          </div>
          <div class="glass glass--strong" style="padding:var(--space-lg);min-width:min(100%,220px);border-radius:var(--glass-radius-md)">
            <p style="margin:0;font-size:14px;font-weight:600;color:var(--text-inverse)">glass--strong</p>
            <p style="margin:8px 0 0;font-size:12px;color:rgba(255,255,255,0.85)">Más blur y contraste.</p>
          </div>
        </div>
      </div>`;
    return el(html);
  },
};

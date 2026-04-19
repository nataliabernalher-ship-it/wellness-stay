import "./foundations.css";

function el(html) {
  const wrap = document.createElement("div");
  wrap.innerHTML = html.trim();
  return wrap.firstElementChild;
}

export default {
  title: "Foundations/Elevation",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Sombras y anillo de foco definidos en `:root` (`styles.css`).",
      },
    },
  },
};

export const SombrasYFoco = {
  name: "Sombras y foco",
  render: () => {
    const html = `
      <div class="ws-fdn">
        <h2 class="ws-fdn__title">Elevation</h2>
        <p class="ws-fdn__subtitle">--shadow-sm, --shadow-md y --ring (focus).</p>
        <div class="ws-fdn__section">
          <div class="ws-fdn__row" style="gap:var(--space-xl);align-items:flex-start">
            <div>
              <div class="ws-fdn__shadow-box" style="box-shadow:var(--shadow-sm)"></div>
              <div class="ws-fdn__meta"><strong>shadow-sm</strong>var(--shadow-sm)</div>
            </div>
            <div>
              <div class="ws-fdn__shadow-box" style="box-shadow:var(--shadow-md)"></div>
              <div class="ws-fdn__meta"><strong>shadow-md</strong>var(--shadow-md)</div>
            </div>
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

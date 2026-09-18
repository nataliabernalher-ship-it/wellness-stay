import tokens from "../../tokens.json";
import "./foundations.css";

function el(html) {
  const wrap = document.createElement("div");
  wrap.innerHTML = html.trim();
  return wrap.firstElementChild;
}

function scaleSection(title, scaleObj, prefix) {
  const keys = Object.keys(scaleObj).sort((a, b) => {
    const na = parseInt(a, 10);
    const nb = parseInt(b, 10);
    if (!Number.isNaN(na) && !Number.isNaN(nb)) return na - nb;
    return String(a).localeCompare(String(b));
  });
  const cells = keys
    .map((k) => {
      const hex = scaleObj[k];
      const name = `${prefix}-${k}`;
      return `<div class="ws-fdn__cell">
        <div class="ws-fdn__swatch" style="background-color:${hex}" title="${hex}"></div>
        <div class="ws-fdn__meta"><strong>${name}</strong>${hex}</div>
      </div>`;
    })
    .join("");
  return `<div class="ws-fdn__section"><h3>${title}</h3><div class="ws-fdn__grid">${cells}</div></div>`;
}

function semanticRow(label, cssVar, extraStyle = "") {
  return `<div class="ws-fdn__cell" style="min-width:140px">
    <div class="ws-fdn__swatch" style="background:var(${cssVar});${extraStyle}"></div>
    <div class="ws-fdn__meta"><strong>${label}</strong>${cssVar}</div>
  </div>`;
}

export default {
  title: "Foundations/Color",
  tags: ["autodocs"],
};

export const Paletas = {
  name: "Paletas",
  render: () => {
    const { colors } = tokens;
    const html = `
      <div class="ws-fdn">
        <h2 class="ws-fdn__title">Color</h2>
        <p class="ws-fdn__subtitle">Primary, secondary, neutra, acentos soft/strong y semánticos. Hex desde tokens.</p>
        ${scaleSection("Primary", colors.primary, "--color-primary")}
        ${scaleSection("Secondary", colors.secondary, "--color-secondary")}
        ${scaleSection("Neutral", colors.neutral, "--color-neutral")}
        ${scaleSection("Blue", colors.blue, "--color-blue")}
        ${scaleSection("Red", colors.red, "--color-red")}
        ${scaleSection("Green", colors.green, "--color-green")}
        ${scaleSection("Orange", colors.orange, "--color-orange")}
        <div class="ws-fdn__section">
          <h3>Texto (semántico)</h3>
          <div class="ws-fdn__grid" style="grid-template-columns:repeat(auto-fill,minmax(160px,1fr))">
            ${semanticRow("Display", "--text-display")}
            ${semanticRow("Body", "--text-body")}
            ${semanticRow("Muted", "--text-muted")}
            ${semanticRow("Inverse", "--text-inverse", "background:var(--text-inverse);border:1px solid var(--border-strong)")}
            ${semanticRow("Link", "--text-link")}
            ${semanticRow("Accent", "--text-accent")}
            ${semanticRow("Titles", "--text-titles")}
          </div>
        </div>
        <div class="ws-fdn__section">
          <h3>Fondo</h3>
          <div class="ws-fdn__grid" style="grid-template-columns:repeat(auto-fill,minmax(160px,1fr))">
            ${semanticRow("Primary", "--bg-primary")}
            ${semanticRow("Secondary", "--bg-secondary")}
            ${semanticRow("Tertiary", "--bg-tertiary")}
            ${semanticRow("Inverse", "--bg-inverse")}
            ${semanticRow("Accent", "--bg-accent")}
          </div>
        </div>
        <div class="ws-fdn__section">
          <h3>Borde</h3>
          <div class="ws-fdn__grid" style="grid-template-columns:repeat(auto-fill,minmax(160px,1fr))">
            ${semanticRow("Default", "--border-default")}
            ${semanticRow("Subtle", "--border-subtle")}
            ${semanticRow("Strong", "--border-strong")}
            ${semanticRow("Focus", "--border-focus")}
            ${semanticRow("Error", "--border-error")}
            ${semanticRow("Info", "--border-info")}
            ${semanticRow("Success", "--border-success")}
            ${semanticRow("Warning", "--border-warning")}
          </div>
        </div>
        <div class="ws-fdn__section">
          <h3>Icono</h3>
          <div class="ws-fdn__grid" style="grid-template-columns:repeat(auto-fill,minmax(160px,1fr))">
            ${semanticRow("Primary", "--icon-primary")}
            ${semanticRow("Inverse", "--icon-inverse", "background:var(--icon-inverse);border:1px solid var(--border-strong)")}
          </div>
        </div>
      </div>`;
    return el(html);
  },
};

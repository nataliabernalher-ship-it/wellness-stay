import footerHtml from "../../partials/site-footer.html?raw";
import { htmlStory } from "../helpers/render.js";

function withDevice(device = "desktop") {
  const widths = { desktop: 1278, tablet: 820, mobile: 360 };
  const width = widths[device] || widths.desktop;
  const html = footerHtml.replace(
    'class="footer"',
    `class="footer footer--${device}"`
  );
  return htmlStory(
    `<div style="width:${width}px;max-width:100%">${html}</div>`
  );
}

export default {
  title: "Sections/Footer",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => withDevice("desktop"),
};

export const Default = {
  name: "Default",
};

export const Desktop = {
  name: "Desktop",
  render: () => withDevice("desktop"),
};

export const Tablet = {
  name: "Tablet",
  render: () => withDevice("tablet"),
};

export const Mobile = {
  name: "Mobile",
  render: () => withDevice("mobile"),
};

export const Componente = {
  name: "Todas las variantes",
  render: () => {
    const cell = (device) =>
      `<div>
        <div style="font-size:11px;color:var(--text-muted);margin-bottom:8px">${device}</div>
        <div style="width:${device === "desktop" ? 1278 : device === "tablet" ? 820 : 360}px;max-width:100%">
          ${footerHtml.replace('class="footer"', `class="footer footer--${device}"`)}
        </div>
      </div>`;
    return htmlStory(`
      <div style="display:grid;gap:var(--space-xl);padding:var(--space-md);justify-items:start">
        ${cell("desktop")}
        ${cell("tablet")}
        ${cell("mobile")}
      </div>
    `);
  },
};

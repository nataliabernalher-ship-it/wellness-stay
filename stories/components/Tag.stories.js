import { renderTag } from "../../components/tag/tag.js";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Components/Tag",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    text: { control: "text" },
    type: { control: "select", options: ["color", "light", "icon", "oferta"] },
    size: { control: "select", options: ["big", "small"] },
  },
  args: {
    text: "This is a tag",
    type: "color",
    size: "big",
  },
  render: (args) => htmlStory(renderTag(args)),
};

export const Default = {
  name: "Default",
};

export const ColorBig = {
  name: "Color / big",
  args: { type: "color", size: "big" },
};

export const ColorSmall = {
  name: "Color / small",
  args: { type: "color", size: "small" },
};

export const LightBig = {
  name: "Light / big",
  args: { type: "light", size: "big" },
};

export const LightSmall = {
  name: "Light / small",
  args: { type: "light", size: "small" },
};

export const IconBig = {
  name: "Icon / big",
  args: { type: "icon", size: "big" },
};

export const IconSmall = {
  name: "Icon / small",
  args: { type: "icon", size: "small" },
};

export const OfertaBig = {
  name: "Oferta / big",
  args: { type: "oferta", size: "big", text: "20% Discount" },
};

export const OfertaSmall = {
  name: "Oferta / small",
  args: { type: "oferta", size: "small", text: "20% Discount" },
};

export const Componente = {
  name: "Todas las variantes",
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    const cell = (args) =>
      `<div style="min-height:28px;display:flex;align-items:center">${renderTag(args)}</div>`;
    const row = (size) =>
      [
        ["color", "This is a tag"],
        ["light", "This is a tag"],
        ["icon", "This is a tag"],
        ["oferta", "20% Discount"],
      ]
        .map(
          ([type, text]) => `<div>
          <div style="font-size:11px;color:var(--text-muted);margin-bottom:8px">${type}</div>
          ${cell({ type, size, text })}
        </div>`
        )
        .join("");
    return htmlStory(`
      <div style="display:grid;gap:var(--space-xl);padding:var(--space-md)">
        <div>
          <p style="margin:0 0 var(--space-sm);font-size:12px;font-weight:700;color:var(--text-display)">Big</p>
          <div style="display:grid;grid-template-columns:repeat(4,auto);gap:var(--space-md) var(--space-lg);align-items:end">${row("big")}</div>
        </div>
        <div>
          <p style="margin:0 0 var(--space-sm);font-size:12px;font-weight:700;color:var(--text-display)">Small</p>
          <div style="display:grid;grid-template-columns:repeat(4,auto);gap:var(--space-md) var(--space-lg);align-items:end">${row("small")}</div>
        </div>
      </div>
    `);
  },
};

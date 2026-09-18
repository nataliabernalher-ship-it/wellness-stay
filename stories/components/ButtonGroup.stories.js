import { renderButtonGroup } from "../../components/button-group/button-group.js";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Components/Button Group",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    device: { control: "select", options: ["desktop", "mobile"] },
    primaryLabel: { control: "text" },
    secondaryLabel: { control: "text" },
  },
  args: {
    device: "desktop",
    primaryLabel: "Primary button",
    secondaryLabel: "Secondary button",
  },
  render: (args) => htmlStory(renderButtonGroup(args)),
};

export const Default = {
  name: "Default",
};

export const Desktop = {
  name: "Desktop",
  args: { device: "desktop" },
};

export const Mobile = {
  name: "Mobile",
  args: { device: "mobile" },
};

export const Componente = {
  name: "Todas las variantes",
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    const cell = (args) =>
      `<div style="min-height:42px;display:flex;align-items:center">${renderButtonGroup(args)}</div>`;
    return htmlStory(`
      <div style="display:grid;gap:var(--space-xl);padding:var(--space-md)">
        <div>
          <p style="margin:0 0 var(--space-sm);font-size:12px;font-weight:700;color:var(--text-display)">Desktop</p>
          ${cell({ device: "desktop" })}
        </div>
        <div>
          <p style="margin:0 0 var(--space-sm);font-size:12px;font-weight:700;color:var(--text-display)">Mobile</p>
          ${cell({ device: "mobile" })}
        </div>
      </div>
    `);
  },
};

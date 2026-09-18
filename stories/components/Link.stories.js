import { renderLink } from "../../components/link/link.js";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Components/Link",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    text: { control: "text" },
    href: { control: "text" },
    device: { control: "select", options: ["desktop", "mobile"] },
    state: { control: "select", options: ["default", "hover"] },
  },
  args: {
    text: "This is a link",
    href: "#",
    device: "desktop",
    state: "default",
  },
  render: (args) => htmlStory(renderLink(args)),
};

export const Default = {
  name: "Default",
};

export const DesktopDefault = {
  name: "Desktop / default",
  args: { device: "desktop", state: "default" },
};

export const DesktopHover = {
  name: "Desktop / hover",
  args: { device: "desktop", state: "hover" },
};

export const MobileDefault = {
  name: "Mobile / default",
  args: { device: "mobile", state: "default" },
};

export const MobileHover = {
  name: "Mobile / hover",
  args: { device: "mobile", state: "hover" },
};

export const Componente = {
  name: "Todas las variantes",
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    const cell = (args) =>
      `<div style="min-height:24px;display:flex;align-items:center">${renderLink(args)}</div>`;
    const row = (device) =>
      [
        ["default", "Default"],
        ["hover", "Hover"],
      ]
        .map(
          ([state, label]) => `<div>
          <div style="font-size:11px;color:var(--text-muted);margin-bottom:8px">${label}</div>
          ${cell({ text: "This is a link", device, state })}
        </div>`
        )
        .join("");
    return htmlStory(`
      <div style="display:grid;gap:var(--space-xl);padding:var(--space-md)">
        <div>
          <p style="margin:0 0 var(--space-sm);font-size:12px;font-weight:700;color:var(--text-display)">Desktop</p>
          <div style="display:grid;grid-template-columns:repeat(2,auto);gap:var(--space-md) var(--space-lg);align-items:end">${row("desktop")}</div>
        </div>
        <div>
          <p style="margin:0 0 var(--space-sm);font-size:12px;font-weight:700;color:var(--text-display)">Mobile</p>
          <div style="display:grid;grid-template-columns:repeat(2,auto);gap:var(--space-md) var(--space-lg);align-items:end">${row("mobile")}</div>
        </div>
      </div>
    `);
  },
};

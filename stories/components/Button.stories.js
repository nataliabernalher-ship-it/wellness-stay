import { renderButton } from "../../components/button/button.js";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Components/Button",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text", description: "Texto del botón" },
    variant: { control: "select", options: ["primary", "secondary"] },
    size: { control: "select", options: ["small", "full"] },
    state: {
      control: "select",
      options: ["default", "hover", "focus", "pressed", "disabled"],
    },
    disabled: { control: "boolean" },
    icon: { control: "boolean" },
    href: { control: "text", description: "Si hay href, se renderiza un enlace" },
  },
  args: {
    label: "Primary button",
    variant: "primary",
    size: "small",
    state: "default",
    disabled: false,
    icon: false,
    href: "",
  },
  render: (args) =>
    htmlStory(
      `<div style="min-width:${args.size === "full" ? "320px" : "auto"};">${renderButton(args)}</div>`
    ),
};

export const Playground = {
  name: "Playground",
};

function stateStory(name, args) {
  return {
    name,
    args,
  };
}

const STATES = [
  ["default", "Default"],
  ["hover", "Hover"],
  ["pressed", "Selected"],
  ["disabled", "Disabled"],
];

export const Componente = {
  name: "Todas las variantes",
  render: () => {
    const cell = (args) =>
      `<div style="min-height:42px;display:flex;align-items:center">${renderButton(args)}</div>`;
    const row = (variant, icon, label) =>
      STATES.map(([state, statusLabel]) => {
        const disabled = state === "disabled";
        return `<div>
          <div style="font-size:11px;color:var(--text-muted);margin-bottom:8px">${statusLabel}</div>
          ${cell({ variant, icon, label, state, disabled })}
        </div>`;
      }).join("");
    return htmlStory(`
      <div style="display:grid;gap:var(--space-xl);padding:var(--space-md)">
        <div>
          <p style="margin:0 0 var(--space-sm);font-size:12px;font-weight:700;color:var(--text-display)">Primary</p>
          <div style="display:grid;grid-template-columns:repeat(4,auto);gap:var(--space-md) var(--space-lg);align-items:end">${row("primary", false, "Primary button")}</div>
        </div>
        <div>
          <p style="margin:0 0 var(--space-sm);font-size:12px;font-weight:700;color:var(--text-display)">Secondary</p>
          <div style="display:grid;grid-template-columns:repeat(4,auto);gap:var(--space-md) var(--space-lg);align-items:end">${row("secondary", false, "Secondary button")}</div>
        </div>
        <div>
          <p style="margin:0 0 var(--space-sm);font-size:12px;font-weight:700;color:var(--text-display)">IconButton</p>
          <div style="display:grid;grid-template-columns:repeat(4,auto);gap:var(--space-md) var(--space-lg);align-items:end">${row("primary", true, "Icon button")}</div>
        </div>
      </div>
    `);
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const PrimaryDefault = stateStory("Primary / default", {
  variant: "primary",
  label: "Primary button",
  state: "default",
});
export const PrimaryHover = stateStory("Primary / hover", {
  variant: "primary",
  label: "Primary button",
  state: "hover",
});
export const PrimarySelected = stateStory("Primary / selected", {
  variant: "primary",
  label: "Primary button",
  state: "pressed",
});
export const PrimaryDisabled = stateStory("Primary / disabled", {
  variant: "primary",
  label: "Primary button",
  state: "disabled",
  disabled: true,
});

export const SecondaryDefault = stateStory("Secondary / default", {
  variant: "secondary",
  label: "Secondary button",
  state: "default",
});
export const SecondaryHover = stateStory("Secondary / hover", {
  variant: "secondary",
  label: "Secondary button",
  state: "hover",
});
export const SecondarySelected = stateStory("Secondary / selected", {
  variant: "secondary",
  label: "Secondary button",
  state: "pressed",
});
export const SecondaryDisabled = stateStory("Secondary / disabled", {
  variant: "secondary",
  label: "Secondary button",
  state: "disabled",
  disabled: true,
});

export const IconDefault = stateStory("Icon / default", {
  variant: "primary",
  label: "Icon button",
  icon: true,
  state: "default",
});
export const IconHover = stateStory("Icon / hover", {
  variant: "primary",
  label: "Icon button",
  icon: true,
  state: "hover",
});
export const IconSelected = stateStory("Icon / selected", {
  variant: "primary",
  label: "Icon button",
  icon: true,
  state: "pressed",
});
export const IconDisabled = stateStory("Icon / disabled", {
  variant: "primary",
  label: "Icon button",
  icon: true,
  state: "disabled",
  disabled: true,
});

export const PrimaryFull = stateStory("Primary / full (web)", {
  variant: "primary",
  label: "Suscribirme",
  size: "full",
  state: "default",
});

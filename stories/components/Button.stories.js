import { renderButton } from "../../components/button/button.js";
import { htmlStory } from "../helpers/render.js";

const docs = {
  component: `
Figma \`Primary Buttons\` (15:1059) y \`Secondary Buttons\` (15:1072).

**Uso:** acciones principales y secundarias. \`small\` abraza el contenido; \`full\` ocupa el 100% del contenedor.

**Variantes:** primary, secondary.

**Estados (Figma):** default, hover, focus, pressed, disabled. No hay error ni loading.

**Tokens:** \`--color-primary-400/200/700\`, \`--color-neutral-700/500/200\`, \`--text-inverse\`, \`--radius-md\`, \`--space-md\`, \`--space-lg\`, \`--font-body\`, \`--ring\`.

**Huecos vs Figma:** small usa 16px (\`--font-size\` md en tokens; Figma 13px no está en tokens). \`full\` es \`width: 100%\` (Figma 520×50px). Disabled blanco sobre \`--color-neutral-200\` (contraste bajo, como Figma). No hay layouts mobile/tablet de Button en Figma.
`,
};

export default {
  title: "Components/Button",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: { description: { component: docs.component } },
  },
  argTypes: {
    label: { control: "text", description: "Texto del botón" },
    variant: { control: "select", options: ["primary", "secondary"] },
    size: { control: "select", options: ["small", "full"] },
    state: { control: "select", options: ["default", "hover", "focus", "pressed", "disabled"] },
    disabled: { control: "boolean" },
    href: { control: "text", description: "Si hay href, se renderiza un enlace" },
  },
  args: {
    label: "Button",
    variant: "primary",
    size: "small",
    state: "default",
    disabled: false,
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

export const PrimarySmallDefault = stateStory("Primary / small / default", {
  variant: "primary",
  size: "small",
  state: "default",
});
export const PrimarySmallHover = stateStory("Primary / small / hover", {
  variant: "primary",
  size: "small",
  state: "hover",
});
export const PrimarySmallFocus = stateStory("Primary / small / focus", {
  variant: "primary",
  size: "small",
  state: "focus",
});
export const PrimarySmallPressed = stateStory("Primary / small / pressed", {
  variant: "primary",
  size: "small",
  state: "pressed",
});
export const PrimarySmallDisabled = stateStory("Primary / small / disabled", {
  variant: "primary",
  size: "small",
  state: "disabled",
  disabled: true,
});

export const PrimaryFullDefault = stateStory("Primary / full / default", {
  variant: "primary",
  size: "full",
  state: "default",
});
export const PrimaryFullHover = stateStory("Primary / full / hover", {
  variant: "primary",
  size: "full",
  state: "hover",
});
export const PrimaryFullFocus = stateStory("Primary / full / focus", {
  variant: "primary",
  size: "full",
  state: "focus",
});
export const PrimaryFullPressed = stateStory("Primary / full / pressed", {
  variant: "primary",
  size: "full",
  state: "pressed",
});
export const PrimaryFullDisabled = stateStory("Primary / full / disabled", {
  variant: "primary",
  size: "full",
  state: "disabled",
  disabled: true,
});

export const SecondarySmallDefault = stateStory("Secondary / small / default", {
  variant: "secondary",
  size: "small",
  state: "default",
});
export const SecondarySmallHover = stateStory("Secondary / small / hover", {
  variant: "secondary",
  size: "small",
  state: "hover",
});
export const SecondarySmallFocus = stateStory("Secondary / small / focus", {
  variant: "secondary",
  size: "small",
  state: "focus",
});
export const SecondarySmallPressed = stateStory("Secondary / small / pressed", {
  variant: "secondary",
  size: "small",
  state: "pressed",
});
export const SecondarySmallDisabled = stateStory("Secondary / small / disabled", {
  variant: "secondary",
  size: "small",
  state: "disabled",
  disabled: true,
});

export const SecondaryFullDefault = stateStory("Secondary / full / default", {
  variant: "secondary",
  size: "full",
  state: "default",
});
export const SecondaryFullHover = stateStory("Secondary / full / hover", {
  variant: "secondary",
  size: "full",
  state: "hover",
});
export const SecondaryFullFocus = stateStory("Secondary / full / focus", {
  variant: "secondary",
  size: "full",
  state: "focus",
});
export const SecondaryFullPressed = stateStory("Secondary / full / pressed", {
  variant: "secondary",
  size: "full",
  state: "pressed",
});
export const SecondaryFullDisabled = stateStory("Secondary / full / disabled", {
  variant: "secondary",
  size: "full",
  state: "disabled",
  disabled: true,
});

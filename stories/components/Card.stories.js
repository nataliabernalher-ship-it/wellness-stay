import { renderCard } from "../../components/card/card.js";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Components/Card",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Figma \`card\` (79:4880).

**Uso:** resumen de un retiro (imagen, nombre, ubicación, extra y precio).

**Variantes / estados:** una sola variante visual. Figma no publica hover, focus, disabled, error ni loading.

**Tokens:** \`--radius-md\`, \`--space-md\`, \`--space-xs\`, \`--space-sm\`, \`--font-display\`, \`--font-body\`, \`--text-inverse\`, \`--color-neutral-300\`, \`--text-accent\`, \`--radius-xs\`, utilidad \`.glass\`.
`,
      },
    },
  },
  argTypes: {
    title: { control: "text" },
    location: { control: "text" },
    extra: { control: "text" },
    price: { control: "text" },
    image: {
      control: "select",
      options: ["mountain", "beach", "forest", "4", "yoga", "spa", "detox", "mindfulness"],
    },
  },
  args: {
    title: "Nombre del retiro",
    location: "Ubicación del retiro",
    extra: "Texto extra",
    price: "0.000€",
    image: "mountain",
  },
  render: (args) =>
    htmlStory(`<div style="width:416px;max-width:100%;">${renderCard(args)}</div>`),
};

export const Default = {
  name: "Default",
};

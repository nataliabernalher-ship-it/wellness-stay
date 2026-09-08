import { renderLink } from "../../components/link/link.js";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Components/Link",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
Enlace de texto del repositorio (\`components/link.css\`). No hay componente Link publicado en Figma.

**Uso:** navegación inline. \`muted\` para pies y textos secundarios.

**Variantes:** default (\`--text-link\`), muted (\`--text-body\`).

**Estados:** hover (subrayado en default; color display en muted). No hay focus/disabled/error/loading en el CSS verificado.

**Tokens:** \`--text-link\`, \`--text-body\`, \`--text-display\`.
`,
      },
    },
  },
  argTypes: {
    text: { control: "text" },
    href: { control: "text" },
    muted: { control: "boolean" },
  },
  args: {
    text: "Texto de enlace",
    href: "#",
    muted: false,
  },
  render: (args) =>
    htmlStory(`<p style="font-family:var(--font-body);margin:0;padding:var(--space-md);">${renderLink(args)}</p>`),
};

export const Default = {
  name: "Default",
  args: { muted: false },
};

export const Muted = {
  name: "Muted",
  args: {
    text: "Texto apagado",
    muted: true,
  },
};

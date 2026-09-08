import { renderFooter } from "../../components/footer/footer.js";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Sections/Footer",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Pie de página del sitio. No hay componente Footer publicado en Figma.

**Composición:** marca + **Link** muted para los enlaces de ayuda.

**Tokens:** \`--bg-primary\`, \`--border-default\`, \`--text-muted\`, Link muted.
`,
      },
    },
  },
  argTypes: {
    text: { control: "text" },
  },
  args: {
    text: "Buscador de retiros de salud y bienestar.",
  },
  render: (args) => htmlStory(renderFooter(args)),
};

export const Default = {
  name: "Default",
};

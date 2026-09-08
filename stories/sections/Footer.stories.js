import footerHtml from "../../partials/site-footer.html?raw";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Sections/Footer",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Pie de página del sitio (\`partials/site-footer.html\`). No hay componente Footer publicado en Figma.

**Composición:** marca + **Link** muted para los enlaces de ayuda.

**Tokens:** \`--bg-primary\`, \`--border-default\`, \`--text-muted\`, Link muted.
`,
      },
    },
  },
  render: () => htmlStory(footerHtml),
};

export const Default = {
  name: "Default",
};

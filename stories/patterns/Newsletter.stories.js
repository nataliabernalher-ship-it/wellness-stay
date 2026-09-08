import newsletterHtml from "../../partials/section-newsletter.html?raw";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Patterns/Newsletter Form",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Bloque de suscripción (\`partials/section-newsletter.html\`). No hay componente Newsletter publicado en Figma.

**Composición:** reutiliza **Button** primary/full. El campo email usa \`.field-input\` de página porque **Input no existe** en el DS.

**Estados:** no hay error/disabled/loading verificados para el formulario.

**Tokens:** \`.glass--strong\`, \`--text-inverse\`, \`--space-md\`, Button tokens.
`,
      },
    },
  },
  render: () => htmlStory(newsletterHtml),
};

export const Default = {
  name: "Default",
};

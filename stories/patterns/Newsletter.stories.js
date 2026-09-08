import { renderNewsletterBlock } from "../../components/newsletter/newsletter.js";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Patterns/Newsletter Form",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Bloque de suscripción del sitio. No hay componente Newsletter publicado en Figma.

**Composición:** reutiliza **Button** primary/full. El campo email usa \`.field-input\` de página porque **Input no existe** en el DS.

**Estados:** no hay error/disabled/loading verificados para el formulario.

**Tokens:** \`.glass--strong\`, \`--text-inverse\`, \`--space-md\`, Button tokens.
`,
      },
    },
  },
  argTypes: {
    title: { control: "text" },
    body: { control: "text" },
    placeholder: { control: "text" },
    submitLabel: { control: "text" },
  },
  args: {
    title: "Consejos wellness en tu inbox",
    body: "Ideas simples para dormir mejor, moverte con intención, comer más consciente y sostener hábitos que sí duran.",
    placeholder: "tu@email.com",
    submitLabel: "Suscribirme",
  },
  render: (args) => htmlStory(renderNewsletterBlock(args)),
};

export const Default = {
  name: "Default",
};

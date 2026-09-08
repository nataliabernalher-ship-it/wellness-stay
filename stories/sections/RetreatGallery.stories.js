import { renderRetreatTypes } from "../../components/tipos/tipos.js";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Sections/Retreat Gallery",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Galería de tipos de retiro de la home. No hay componente publicado en Figma.

**Composición:** grid de página + **Image Gallery** (una instancia por tipo).

**Responsive:** 3 columnas en desktop, 2 en \`max-width: 1024px\`, 1 en \`max-width: 560px\`.
`,
      },
    },
  },
  argTypes: {
    heading: { control: "text" },
    subtitle: { control: "text" },
  },
  args: {
    heading: "Tipos de retiro",
    subtitle: "Explora por intención: movimiento, descanso, foco o transformación.",
  },
  render: (args) => htmlStory(renderRetreatTypes(args)),
};

export const Default = {
  name: "Default",
};

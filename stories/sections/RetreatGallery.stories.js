import retreatGalleryHtml from "../../partials/section-tipos.html?raw";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Sections/Retreat Gallery",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Galería de tipos de retiro (\`partials/section-tipos.html\`). No hay componente publicado en Figma.

**Composición:** grid de página + **Image Gallery** (una instancia por tipo).

**Responsive:** 3 columnas en desktop, 2 en \`max-width: 1024px\`, 1 en \`max-width: 560px\`.
`,
      },
    },
  },
  render: () => htmlStory(retreatGalleryHtml),
};

export const Default = {
  name: "Default",
};

import { getHeroHtml } from "../helpers/heroExpanded.js";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Sections/Hero",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Hero de la home. No hay componente Hero publicado en Figma.

**Composición:** copy de página + patrón **Search Bar**.

**Responsive:** el grid del hero pasa a una columna en \`max-width: 1024px\` (\`styles.css\`). Figma no publica layouts mobile/tablet de este bloque.
`,
      },
    },
  },
  render: () => htmlStory(getHeroHtml()),
};

export const Default = {
  name: "Default",
};

import searchFormHtml from "../../components/search/search-form.html?raw";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Patterns/Search Bar",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Figma \`Search\` (21:753).

**Uso:** búsqueda de retiros (destino, fechas, personas).

**Composición:** el patrón incluye campos nativos de texto, fecha y select. **Input y Select no existen** como componentes del DS; no se extraen.

El CTA circular de buscar forma parte de este patrón, no del Button de Figma.

**Estados:** Figma no publica hover/focus/disabled/error/loading del Search como set.

**Tokens:** \`.glass\`, \`--font-display\`, \`--font-body\`, \`--text-inverse\`, \`--space-lg\`.
`,
      },
    },
  },
  render: () =>
    htmlStory(
      `<div class="container" style="padding:var(--space-lg);max-width:1120px;background:var(--bg-inverse);">${searchFormHtml}</div>`
    ),
};

export const Default = {
  name: "Default",
};

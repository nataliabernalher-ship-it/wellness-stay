import navigationHtml from "../../components/navigation/navigation.html?raw";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Patterns/Navigation",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Figma \`Navigation\` (21:750).

**Uso:** barra principal (logo, anfitrión, menú).

**Composición:** los enlaces de esta barra usan estilos propios de Navigation (\`ws-navigation__logo\`, \`ws-navigation__host\`), no el componente Link — el aspecto no coincide con \`ws-link\`.

**Estados:** Figma no publica un set de estados.

**Tokens:** \`.glass\`, \`--font-display\`, colores de navigation.css.
`,
      },
    },
  },
  render: () => htmlStory(navigationHtml),
};

export const Default = {
  name: "Default",
};

import cardHtml from "../components/card/card.html?raw";
import { htmlStory } from "./helpers/render.js";

function renderCard() {
  return htmlStory(
    `<div style="padding:var(--space-lg);"><div style="width:416px;max-width:100%;">${cardHtml}</div></div>`
  );
}

export default {
  title: "Wellness/Card",
  tags: ["autodocs"],
  render: renderCard,
  parameters: {
    docs: {
      description: {
        component:
          "Figma `card` (Foundations Wellness Stay, nodo 79:4880). Título y precio en Fraunces display/xs, ubicación muted y texto extra accent.",
      },
    },
  },
};

export const Retiro = {
  name: "Card de retiro",
};

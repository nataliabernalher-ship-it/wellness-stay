import cardsSectionHtml from "../components/card/cards-section.html?raw";
import { htmlStory } from "./helpers/render.js";

export default {
  title: "Wellness/Card",
  tags: ["autodocs"],
};

export const RetirosDestacados = {
  name: "Sección retiros (grid)",
  render: () => htmlStory(cardsSectionHtml),
};

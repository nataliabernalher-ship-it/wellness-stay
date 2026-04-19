import { htmlStory } from "./helpers/render.js";
import { getHeroHtml } from "./helpers/heroExpanded.js";

export default {
  title: "Wellness/Hero",
  tags: ["autodocs"],
};

export const ConBuscador = {
  name: "Hero con buscador",
  render: () => htmlStory(getHeroHtml()),
};

import { getHeroHtml } from "../helpers/heroExpanded.js";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Sections/Hero",
  tags: ["autodocs"],
  render: () => htmlStory(getHeroHtml()),
};

export const Default = {
  name: "Default",
};

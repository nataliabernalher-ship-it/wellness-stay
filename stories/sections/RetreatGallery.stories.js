import retreatGalleryHtml from "../../partials/section-tipos.html?raw";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Sections/Retreat Gallery",
  tags: ["autodocs"],
  render: () => htmlStory(retreatGalleryHtml),
};

export const Default = {
  name: "Default",
};

import sectionTiposHtml from "../partials/section-tipos.html?raw";
import { htmlStory } from "./helpers/render.js";

export default {
  title: "Wellness/Tipos",
  tags: ["autodocs"],
};

export const GridTipos = {
  name: "Tipos de retiro",
  render: () => htmlStory(sectionTiposHtml),
};

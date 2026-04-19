import siteFooterHtml from "../partials/site-footer.html?raw";
import { htmlStory } from "./helpers/render.js";

export default {
  title: "Wellness/Footer",
  tags: ["autodocs"],
};

export const Pie = {
  name: "Pie de página",
  render: () => htmlStory(siteFooterHtml),
};

import footerHtml from "../../partials/site-footer.html?raw";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Sections/Footer",
  tags: ["autodocs"],
  render: () => htmlStory(footerHtml),
};

export const Default = {
  name: "Default",
};

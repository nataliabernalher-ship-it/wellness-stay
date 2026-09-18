import newsletterHtml from "../../partials/section-newsletter.html?raw";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Patterns/Newsletter Form",
  tags: ["autodocs"],
  render: () => htmlStory(newsletterHtml),
};

export const Default = {
  name: "Default",
};

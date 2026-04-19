import sectionNewsletterHtml from "../partials/section-newsletter.html?raw";
import { htmlStory } from "./helpers/render.js";

export default {
  title: "Wellness/Newsletter",
  tags: ["autodocs"],
};

export const Bloque = {
  name: "Bloque newsletter",
  render: () => htmlStory(sectionNewsletterHtml),
};

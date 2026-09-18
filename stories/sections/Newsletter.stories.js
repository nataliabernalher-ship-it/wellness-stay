import newsletterHtml from "../../partials/section-newsletter.html?raw";
import newsletterFormHtml from "../../components/newsletter-form/newsletter-form.html?raw";
import { applyIncludes, htmlStory } from "../helpers/render.js";

export default {
  title: "Sections/Newsletter",
  tags: ["autodocs"],
  render: () =>
    htmlStory(
      applyIncludes(newsletterHtml, {
        "components/newsletter-form/newsletter-form.html": newsletterFormHtml,
      })
    ),
};

export const Default = {
  name: "Default",
};

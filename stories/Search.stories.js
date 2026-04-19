import searchFormHtml from "../components/search/search-form.html?raw";
import { htmlStory } from "./helpers/render.js";

export default {
  title: "Wellness/Search",
  tags: ["autodocs"],
};

export const Formulario = {
  name: "Formulario de búsqueda",
  render: () => {
    const el = htmlStory(
      `<div class="container" style="padding:24px;max-width:1120px;">${searchFormHtml}</div>`
    );
    return el;
  },
};

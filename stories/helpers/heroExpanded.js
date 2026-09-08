import heroHtml from "../../partials/section-hero.html?raw";
import searchFormHtml from "../../components/search/search-form.html?raw";
import { applyIncludes } from "./render.js";

const map = {
  "components/search/search-form.html": searchFormHtml,
};

export function getHeroHtml() {
  return applyIncludes(heroHtml, map);
}

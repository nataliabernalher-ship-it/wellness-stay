import navigationHtml from "../../components/navigation/navigation.html?raw";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Patterns/Navigation",
  tags: ["autodocs"],
  render: () =>
    htmlStory(
      `<header class="site-header site-header--over-media"><div class="site-header__wrap">${navigationHtml}</div></header>`
    ),
};

export const Default = {
  name: "Default",
};

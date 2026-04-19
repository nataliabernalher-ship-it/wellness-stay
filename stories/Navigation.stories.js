import navigationHtml from "../components/navigation/navigation.html?raw";
import { htmlStory } from "./helpers/render.js";

export default {
  title: "Wellness/Navigation",
  tags: ["autodocs"],
};

export const BarraPrincipal = {
  name: "Barra principal",
  render: () => htmlStory(navigationHtml),
};

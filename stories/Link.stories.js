import { htmlStory } from "./helpers/render.js";

export default {
  title: "Wellness/Link",
  tags: ["autodocs"],
};

export const Enlace = {
  name: "Enlace primario",
  render: () =>
    htmlStory(
      `<p style="padding:24px;font-family:var(--font-body, sans-serif);"><a class="ws-link" href="#">Texto de enlace</a></p>`
    ),
};

export const EnlaceMuted = {
  name: "Enlace muted",
  render: () =>
    htmlStory(
      `<p style="padding:24px;font-family:var(--font-body, sans-serif);"><a class="ws-link ws-link--muted" href="#">Texto apagado</a></p>`
    ),
};

import imageGalleryHtml from "../components/image-gallery/image-gallery.html?raw";
import { htmlStory } from "./helpers/render.js";

export default {
  title: "Wellness/ImageGallery",
  tags: ["autodocs"],
};

export const Cuadrada = {
  name: "Tarjeta cuadrada",
  render: () =>
    htmlStory(`<div style="padding:24px;max-width:480px;">${imageGalleryHtml}</div>`),
};

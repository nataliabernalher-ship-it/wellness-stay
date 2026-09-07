import imageGalleryHtml from "../components/image-gallery/image-gallery.html?raw";
import { htmlStory } from "./helpers/render.js";

export default {
  title: "Wellness/ImageGallery",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Figma `image_gallery` (Foundations Wellness Stay, nodo 79:4879). Título display/xs en Fraunces e ubicación text/md en DM Sans, centrados sobre la imagen.",
      },
    },
  },
};

export const Meditacion = {
  name: "Retiros de Meditación",
  render: () =>
    htmlStory(`<div style="padding:var(--space-lg);max-width:384px;">${imageGalleryHtml}</div>`),
};

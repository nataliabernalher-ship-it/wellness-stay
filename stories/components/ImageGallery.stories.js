import { renderImageGallery } from "../../components/image-gallery/image-gallery.js";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Components/Image Gallery",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    image: {
      control: "select",
      options: ["mountain", "yoga", "meditation", "detox", "nature", "spa", "mindfulness", "beach", "forest"],
    },
    href: { control: "text" },
  },
  args: {
    title: "Retiros de Meditación",
    subtitle: "Ubicación del retiro",
    image: "mountain",
    href: "",
  },
  render: (args) =>
    htmlStory(`<div style="padding:var(--space-lg);max-width:384px;">${renderImageGallery(args)}</div>`),
};

export const Default = {
  name: "Default",
};

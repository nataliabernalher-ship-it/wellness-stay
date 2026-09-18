import { renderCard } from "../../components/card/card.js";
import { htmlStory } from "../helpers/render.js";

const FIGMA_WIDTH = 342;

export default {
  title: "Components/Card",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: "text" },
    location: { control: "text" },
    description: { control: "text" },
    details: { control: "text" },
    tag: { control: "text" },
    extra: { control: "text" },
    priceLabel: { control: "text" },
    price: { control: "text" },
    score: { control: "text" },
    image: {
      control: "select",
      options: ["mountain", "beach", "forest", "4", "yoga", "spa", "detox", "mindfulness"],
    },
    showDescription: { control: "boolean" },
    showDetails: { control: "boolean" },
    showTags: { control: "boolean" },
  },
  args: {
    title: "Nombre del alojamiento",
    location: "Ubicación",
    description:
      "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    details: "Cancelacion gratuita",
    tag: "This is a tag",
    extra: "This is a tag",
    priceLabel: "1 noche desde",
    price: "124€",
    score: "9, 4",
    image: "mountain",
    showDescription: true,
    showDetails: true,
    showTags: true,
  },
  render: (args) =>
    htmlStory(`<div style="width:${FIGMA_WIDTH}px;max-width:100%;">${renderCard(args)}</div>`),
};

export const Default = {
  name: "Default",
};

export const SinDescripcion = {
  name: "Sin descripción",
  args: { showDescription: false },
};

export const SinDetalles = {
  name: "Sin detalles",
  args: { showDetails: false },
};

export const SinTags = {
  name: "Sin tags",
  args: { showTags: false },
};

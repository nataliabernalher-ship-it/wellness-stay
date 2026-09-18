import { renderImageGallery } from "../../components/image-gallery/image-gallery.js";
import { htmlStory } from "../helpers/render.js";

function withWidth(html, width) {
  return htmlStory(
    `<div style="width:${width}px;max-width:100%;padding:var(--space-md)">${html}</div>`
  );
}

const copy = {
  title: "Here is the title",
  subtitle: "A subtext is written here",
  image: "mountain",
};

export default {
  title: "Components/Image Gallery",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    type: {
      control: "select",
      options: ["cuadrado", "rectangulo", "alargado"],
    },
    title: { control: "text" },
    subtitle: { control: "text" },
    image: {
      control: "select",
      options: [
        "mountain",
        "yoga",
        "meditation",
        "detox",
        "nature",
        "spa",
        "mindfulness",
        "beach",
        "forest",
      ],
    },
    href: { control: "text" },
  },
  args: {
    type: "cuadrado",
    ...copy,
    href: "",
  },
  render: (args) => withWidth(renderImageGallery(args), 268),
};

export const Default = {
  name: "Default",
};

export const Cuadrado = {
  name: "Cuadrado",
  args: { type: "cuadrado" },
};

export const Rectangulo = {
  name: "Rectángulo",
  args: { type: "rectangulo" },
  render: (args) => withWidth(renderImageGallery(args), 368),
};

export const Alargado = {
  name: "Alargado",
  args: { type: "alargado" },
  render: (args) => withWidth(renderImageGallery(args), 368),
};

export const Componente = {
  name: "Todas las variantes",
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    const cell = (type, width) =>
      `<div style="width:${width}px;max-width:100%">${renderImageGallery({ ...copy, type })}</div>`;
    return htmlStory(`
      <div style="display:flex;flex-wrap:wrap;align-items:center;gap:var(--space-xl);padding:var(--space-md)">
        ${cell("cuadrado", 268)}
        ${cell("rectangulo", 368)}
        ${cell("alargado", 368)}
      </div>
    `);
  },
};

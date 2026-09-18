import { renderLink } from "../../components/link/link.js";
import { htmlStory } from "../helpers/render.js";

export default {
  title: "Components/Link",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    text: { control: "text" },
    href: { control: "text" },
    muted: { control: "boolean" },
  },
  args: {
    text: "Texto de enlace",
    href: "#",
    muted: false,
  },
  render: (args) =>
    htmlStory(`<p style="font-family:var(--font-body);margin:0;padding:var(--space-md);">${renderLink(args)}</p>`),
};

export const Default = {
  name: "Default",
  args: { muted: false },
};

export const Muted = {
  name: "Muted",
  args: {
    text: "Texto apagado",
    muted: true,
  },
};

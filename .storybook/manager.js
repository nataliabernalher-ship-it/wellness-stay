import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Wellness Stay",
    brandUrl: "./",
    brandImage: "/assets/brand-logo.svg",
    brandTarget: "_self",
  }),
  sidebar: {
    showRoots: true,
  },
});

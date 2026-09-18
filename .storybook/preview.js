import "../styles.css";
import "../css/index.css";
import "./preview.css";

/** @type { import('@storybook/html-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },

    layout: "fullscreen",

    options: {
      storySort: {
        order: [
          "Foundations",
          "Components",
          ["Button", "Button Group", "Link", "Input", "Tag", "Card", "Image Gallery"],
          "Patterns",
          "Sections",
          ["Hero", "Retreat Gallery", "Footer"],
        ],
      },
    },
  },
};

export default preview;

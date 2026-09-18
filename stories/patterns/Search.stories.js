import searchFormHtml from "../../components/search/search-form.html?raw";
import { htmlStory } from "../helpers/render.js";

function withDevice(html, { stacked = false, width } = {}) {
  const form = stacked ? html.replace('class="ws-search"', 'class="ws-search ws-search--stacked"') : html;
  const inner = `<div style="padding:var(--space-lg);background:var(--bg-secondary);">${form}</div>`;
  if (!width) return htmlStory(inner);
  return htmlStory(`<div style="width:${width}px;max-width:100%">${inner}</div>`);
}

export default {
  title: "Patterns/Search Bar",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  render: () => withDevice(searchFormHtml),
};

export const Desktop = {
  name: "Desktop",
};

export const Tablet = {
  name: "Tablet",
  render: () => withDevice(searchFormHtml, { stacked: true, width: 520 }),
};

export const Mobile = {
  name: "Mobile",
  render: () => withDevice(searchFormHtml, { stacked: true, width: 328 }),
};

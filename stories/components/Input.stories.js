import { renderInput } from "../../components/input/input.js";
import { htmlStory } from "../helpers/render.js";

function withWidth(html, width = 238) {
  return htmlStory(
    `<div style="padding:var(--space-md)">
      <div style="width:${width}px;max-width:100%">${html}</div>
    </div>`
  );
}

export default {
  title: "Components/Input",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    placeholder: { control: "text" },
    status: { control: "select", options: ["default", "filled", "error"] },
    showLabel: { control: "boolean" },
    type: { control: "text" },
  },
  args: {
    label: "Label",
    value: "",
    placeholder: "Text",
    status: "default",
    showLabel: true,
    type: "text",
  },
  render: (args) => withWidth(renderInput(args)),
};

export const Default = {
  name: "Default",
};

export const Filled = {
  name: "Filled",
  args: { status: "filled", value: "Text" },
};

export const Error = {
  name: "Error",
  args: { status: "error" },
};

export const AnchoFluido = {
  name: "Ancho fluido",
  parameters: {
    layout: "fullscreen",
  },
  render: (args) =>
    htmlStory(`
      <div style="padding:var(--space-md);width:100%;box-sizing:border-box">
        ${renderInput({ ...args, id: "ws-input-fluid" })}
      </div>
    `),
};

export const Componente = {
  name: "Todas las variantes",
  parameters: {
    layout: "fullscreen",
  },
  render: () => {
    const cell = (status, extra = {}) =>
      `<div>
        <div style="font-size:11px;color:var(--text-muted);margin-bottom:8px">${status}</div>
        ${renderInput({ label: "Label", placeholder: "Text", status, id: `ws-input-${status}`, ...extra })}
      </div>`;
    return htmlStory(`
      <div style="padding:var(--space-md)">
      <div style="display:grid;gap:var(--space-xl);width:238px;max-width:100%">
        ${cell("default")}
        ${cell("filled", { value: "Text" })}
        ${cell("error")}
      </div>
      </div>
    `);
  },
};

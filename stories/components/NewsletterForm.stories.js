import { renderNewsletterForm } from "../../components/newsletter-form/newsletter-form.js";
import { htmlStory } from "../helpers/render.js";

const WIDTHS = { desktop: 700, mobile: 328 };

function withDevice(args, device) {
  return htmlStory(
    `<div style="width:${WIDTHS[device]}px;max-width:100%;">${renderNewsletterForm({ ...args, device, id: `ws-newsletter-email-${device}` })}</div>`
  );
}

export default {
  title: "Components/Newsletter Form",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: { control: "text" },
    text: { control: "text" },
    placeholder: { control: "text" },
    buttonLabel: { control: "text" },
    device: { control: "select", options: ["desktop", "mobile"] },
  },
  args: {
    title: "Consejos wellness en tu inbox",
    text: "Ideas simples para dormir mejor, moverte con intención, comer más consciente y sostener hábitos que sí duran.",
    placeholder: "Email",
    buttonLabel: "Aceptar",
    device: "desktop",
  },
  render: (args) => withDevice(args, args.device),
};

export const Default = {
  name: "Default",
};

export const Desktop = {
  name: "Desktop",
  args: { device: "desktop" },
};

export const Mobile = {
  name: "Mobile",
  args: { device: "mobile" },
};

export const Componente = {
  name: "Todas las variantes",
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => {
    const cell = (device) =>
      `<div>
        <div style="font-size:11px;color:var(--text-muted);margin-bottom:8px">${device}</div>
        ${renderNewsletterForm({ ...args, device, id: `ws-newsletter-email-${device}` })}
      </div>`;
    return htmlStory(`
      <div style="display:grid;gap:var(--space-xl);padding:var(--space-md);justify-items:start">
        ${cell("desktop")}
        ${cell("mobile")}
      </div>
    `);
  },
};

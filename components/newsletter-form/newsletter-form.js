import { escapeHtml } from "../html.js";
import { renderInput } from "../input/input.js";
import { renderButton } from "../button/button.js";

const DEVICES = ["desktop", "mobile"];

export function renderNewsletterForm({
  title = "Consejos wellness en tu inbox",
  text = "Ideas simples para dormir mejor, moverte con intención, comer más consciente y sostener hábitos que sí duran.",
  placeholder = "Email",
  buttonLabel = "Aceptar",
  id = "ws-newsletter-email",
  device = "desktop",
} = {}) {
  const safeDevice = DEVICES.includes(device) ? device : "desktop";
  return `<form class="ws-newsletter-form ws-newsletter-form--${safeDevice}" action="#" method="post">
  <p class="ws-newsletter-form__title">${escapeHtml(title)}</p>
  <p class="ws-newsletter-form__text">${escapeHtml(text)}</p>
  <div class="ws-newsletter-form__row">
    ${renderInput({
      showLabel: false,
      type: "email",
      name: "email",
      id,
      placeholder,
      required: true,
      autocomplete: "email",
      inputmode: "email",
      ariaLabel: "Email",
    })}
    ${renderButton({
      label: buttonLabel,
      variant: "primary",
      type: "submit",
    })}
  </div>
</form>`;
}

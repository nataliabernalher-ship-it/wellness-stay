import { escapeHtml } from "../html.js";

const VARIANTS = ["primary", "secondary"];
const SIZES = ["small", "full"];
const STATES = ["default", "hover", "focus", "pressed", "disabled"];

export function renderButton({
  label = "Button",
  variant = "primary",
  size = "small",
  state = "default",
  disabled = false,
  href = "",
  type = "button",
} = {}) {
  const safeVariant = VARIANTS.includes(variant) ? variant : "primary";
  const safeSize = SIZES.includes(size) ? size : "small";
  const safeState = STATES.includes(state) ? state : "default";
  const isDisabled = Boolean(disabled) || safeState === "disabled";
  const className = [
    "btn",
    "ws-button",
    `btn-${safeVariant}`,
    `ws-button--${safeVariant}`,
    safeSize === "full" ? "btn-wide ws-button--full" : "ws-button--small",
    safeState !== "default" ? `ws-button--${safeState}` : "",
  ]
    .filter(Boolean)
    .join(" ");
  const text = escapeHtml(label);

  if (href && !isDisabled) {
    return `<a class="${className}" href="${escapeHtml(href)}">${text}</a>`;
  }

  const disabledAttr = isDisabled ? " disabled" : "";
  return `<button class="${className}" type="${escapeHtml(type)}"${disabledAttr}>${text}</button>`;
}

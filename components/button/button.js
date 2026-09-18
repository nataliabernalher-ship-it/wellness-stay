import { escapeHtml } from "../html.js";
import iconDesktop from "./assets/arrow-right-desktop.svg?raw";
import iconMobile from "./assets/arrow-right-mobile.svg?raw";

const VARIANTS = ["primary", "secondary"];
const SIZES = ["small", "full"];
const STATES = ["default", "hover", "focus", "pressed", "disabled"];

function iconMarkup() {
  return `<span class="ws-button__icon ws-button__icon--desktop" aria-hidden="true">${iconDesktop}</span><span class="ws-button__icon ws-button__icon--mobile" aria-hidden="true">${iconMobile}</span>`;
}

export function renderButton({
  label = "Button",
  variant = "primary",
  size = "small",
  state = "default",
  disabled = false,
  href = "",
  type = "button",
  icon = false,
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
    icon ? "ws-button--icon" : "",
    safeState !== "default" ? `ws-button--${safeState}` : "",
  ]
    .filter(Boolean)
    .join(" ");
  const content = `${escapeHtml(label)}${icon ? iconMarkup() : ""}`;

  if (href && !isDisabled) {
    return `<a class="${className}" href="${escapeHtml(href)}">${content}</a>`;
  }

  const disabledAttr = isDisabled ? " disabled" : "";
  return `<button class="${className}" type="${escapeHtml(type)}"${disabledAttr}>${content}</button>`;
}

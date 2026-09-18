import { escapeHtml } from "../html.js";
import { renderButton } from "../button/button.js";

const DEVICES = ["desktop", "mobile"];

export function renderButtonGroup({
  device = "desktop",
  primaryLabel = "Primary button",
  secondaryLabel = "Secondary button",
  label = "",
} = {}) {
  const safeDevice = DEVICES.includes(device) ? device : "desktop";
  const className = [
    "ws-button-group",
    safeDevice === "mobile" ? "ws-button-group--mobile" : "",
  ]
    .filter(Boolean)
    .join(" ");
  const labelled = label
    ? ` aria-label="${escapeHtml(label)}"`
    : "";

  return `<div class="${className}" role="group"${labelled}>${renderButton({
    label: primaryLabel,
    variant: "primary",
  })}${renderButton({
    label: secondaryLabel,
    variant: "secondary",
  })}</div>`;
}

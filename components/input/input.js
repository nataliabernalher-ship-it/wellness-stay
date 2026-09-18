import { escapeHtml } from "../html.js";

const STATUSES = ["default", "filled", "error"];

export function renderInput({
  label = "Label",
  value = "",
  placeholder = "Text",
  status = "default",
  showLabel = true,
  type = "text",
  name = "",
  id = "",
} = {}) {
  const safeStatus = STATUSES.includes(status) ? status : "default";
  const filledValue = safeStatus === "filled" && !value ? "Text" : value;
  const className = [
    "ws-input",
    safeStatus === "error" ? "ws-input--error" : "",
    safeStatus === "filled" ? "ws-input--filled" : "",
  ]
    .filter(Boolean)
    .join(" ");
  const fieldId = id ? escapeHtml(id) : "";
  const nameAttr = name ? ` name="${escapeHtml(name)}"` : "";
  const idAttr = fieldId ? ` id="${fieldId}"` : "";
  const labelMarkup = showLabel
    ? `<span class="ws-input__label">${escapeHtml(label)}</span>`
    : "";
  const field = `<input class="ws-input__field" type="${escapeHtml(type)}"${nameAttr}${idAttr} value="${escapeHtml(filledValue)}" placeholder="${escapeHtml(placeholder)}" />`;

  if (showLabel) {
    return `<label class="${className}">${labelMarkup}${field}</label>`;
  }

  return `<div class="${className}">${field}</div>`;
}

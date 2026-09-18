import { escapeHtml } from "../html.js";

const TYPES = ["color", "light", "icon", "oferta"];
const SIZES = ["big", "small"];

export function renderTag({
  text,
  type = "color",
  size = "big",
} = {}) {
  const safeType = TYPES.includes(type) ? type : "color";
  const safeSize = SIZES.includes(size) ? size : "big";
  const label =
    text ?? (safeType === "oferta" ? "20% Discount" : "This is a tag");
  const icon =
    safeType === "icon"
      ? `<span class="ws-tag__icon" aria-hidden="true"></span>`
      : "";
  const className = ["ws-tag", `ws-tag--${safeType}`, `ws-tag--${safeSize}`].join(
    " "
  );

  return `<span class="${className}">${icon}${escapeHtml(label)}</span>`;
}

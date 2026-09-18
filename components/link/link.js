import { escapeHtml } from "../html.js";

const STATES = ["default", "hover"];
const DEVICES = ["desktop", "mobile"];

export function renderLink({
  text = "This is a link",
  href = "#",
  muted = false,
  state = "default",
  device = "desktop",
} = {}) {
  const safeState = STATES.includes(state) ? state : "default";
  const safeDevice = DEVICES.includes(device) ? device : "desktop";
  const className = [
    "link",
    "ws-link",
    muted ? "ws-link--muted" : "",
    safeState === "hover" ? "ws-link--hover" : "",
    safeDevice === "mobile" ? "ws-link--mobile" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return `<a class="${className}" href="${escapeHtml(href)}">${escapeHtml(text)}</a>`;
}

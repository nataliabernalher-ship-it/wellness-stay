const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)");
let ticking = false;

function getPins() {
  return document.querySelectorAll("[data-tipos-scroll]");
}

function maxTranslate(track, row) {
  return Math.max(0, row.scrollWidth - track.clientWidth);
}

function centerOffset(track) {
  return Math.max(0, (window.innerHeight - track.offsetHeight) / 2);
}

function updatePinHeights() {
  getPins().forEach((pin) => {
    const track = pin.querySelector("[data-tipos-track]");
    const row = pin.querySelector("[data-tipos-row]");
    if (!track || !row) return;

    if (REDUCED.matches) {
      pin.style.height = "";
      pin.style.removeProperty("--types-sticky-top");
      return;
    }

    const max = maxTranslate(track, row);
    const offset = centerOffset(track);
    pin.style.setProperty("--types-sticky-top", `${offset}px`);
    pin.style.height = `${track.offsetHeight + max}px`;
  });
}

function progressFor(pin, track) {
  const rect = pin.getBoundingClientRect();
  const travel = pin.offsetHeight - track.offsetHeight;
  if (travel <= 0) return 0;
  const start = centerOffset(track);
  const scrolled = Math.min(Math.max(start - rect.top, 0), travel);
  return scrolled / travel;
}

function applyTransforms() {
  getPins().forEach((pin) => {
    const track = pin.querySelector("[data-tipos-track]");
    const row = pin.querySelector("[data-tipos-row]");
    if (!track || !row) return;

    if (REDUCED.matches) {
      row.style.transform = "";
      return;
    }

    const max = maxTranslate(track, row);
    row.style.transform = `translate3d(${-(progressFor(pin, track) * max)}px, 0, 0)`;
  });
}

function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    applyTransforms();
    ticking = false;
  });
}

function onResize() {
  updatePinHeights();
  applyTransforms();
}

function start() {
  updatePinHeights();
  applyTransforms();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onResize);
  if (typeof REDUCED.addEventListener === "function") {
    REDUCED.addEventListener("change", onResize);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}

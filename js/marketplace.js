const MONTHS = ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"];

function parseDate(value) {
  if (!value) return null;
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function nightsBetween(start, end) {
  const from = parseDate(start);
  const to = parseDate(end);
  if (!from || !to) return null;
  const diff = Math.round((to - from) / 86400000);
  return diff > 0 ? diff : null;
}

function formatDay(value) {
  const date = parseDate(value);
  if (!date) return "";
  return `${date.getDate()} ${MONTHS[date.getMonth()]}`;
}

function plural(count, singular, pluralLabel) {
  return `${count} ${count === 1 ? singular : pluralLabel}`;
}

function readParams(form) {
  const params = new URLSearchParams(window.location.search);
  const setValue = (name) => {
    const field = form.elements.namedItem(name);
    if (!field || params.get(name) == null) return;
    field.value = params.get(name);
  };

  setValue("donde");
  setValue("llegada");
  setValue("salida");
  setValue("personas");
  setValue("tipo");
  setValue("duracion");
  setValue("precio");
  setValue("orden");
}

function syncHiddenFilters(form, tipo, duracion, precio) {
  form.elements.namedItem("tipo").value = tipo;
  form.elements.namedItem("duracion").value = duracion;
  form.elements.namedItem("precio").value = precio;
}

function writeUrl(form) {
  const data = new FormData(form);
  const params = new URLSearchParams();
  for (const [key, value] of data.entries()) {
    const trimmed = String(value).trim();
    if (!trimmed) continue;
    if (key === "orden" && trimmed === "relevancia") continue;
    params.set(key, trimmed);
  }
  const next = params.toString();
  const url = next ? `${window.location.pathname}?${next}` : window.location.pathname;
  window.history.replaceState({}, "", url);
}

function matchesDuration(nights, duracion) {
  if (!duracion) return true;
  if (duracion === "corta") return nights <= 3;
  if (duracion === "media") return nights >= 4 && nights <= 5;
  if (duracion === "larga") return nights >= 6;
  return true;
}

function matchesPrice(price, precio) {
  if (!precio) return true;
  if (precio === "hasta-350") return price <= 350;
  if (precio === "350-500") return price > 350 && price <= 500;
  if (precio === "mas-500") return price > 500;
  return true;
}

function sortCards(grid, orden) {
  const cards = [...grid.querySelectorAll(".ws-card")];
  cards.sort((a, b) => {
    const priceA = Number(a.dataset.price);
    const priceB = Number(b.dataset.price);
    const nightsA = Number(a.dataset.nights);
    const nightsB = Number(b.dataset.nights);
    if (orden === "precio-asc") return priceA - priceB;
    if (orden === "precio-desc") return priceB - priceA;
    if (orden === "duracion") return nightsA - nightsB;
    return Number(a.dataset.order) - Number(b.dataset.order);
  });
  cards.forEach((card) => grid.appendChild(card));
}

function applyFilters({ form, grid, empty, countEl, summaryEl }) {
  const donde = String(form.elements.namedItem("donde").value || "")
    .trim()
    .toLowerCase();
  const llegada = form.elements.namedItem("llegada").value;
  const salida = form.elements.namedItem("salida").value;
  const personas = Number(form.elements.namedItem("personas").value) || 0;
  const tipo = form.elements.namedItem("tipo").value;
  const duracion = form.elements.namedItem("duracion").value;
  const precio = form.elements.namedItem("precio").value;
  const orden = form.elements.namedItem("orden").value;
  const stayNights = nightsBetween(llegada, salida);

  const cards = [...grid.querySelectorAll(".ws-card")];
  let visible = 0;

  cards.forEach((card) => {
    const location = (card.dataset.location || "").toLowerCase();
    const type = card.dataset.type;
    const nights = Number(card.dataset.nights);
    const price = Number(card.dataset.price);
    const guests = Number(card.dataset.guests);
    let show = true;

    if (donde && !location.includes(donde)) show = false;
    if (personas && guests < personas) show = false;
    if (tipo && type !== tipo) show = false;
    if (stayNights && nights > stayNights) show = false;
    if (!matchesDuration(nights, duracion)) show = false;
    if (!matchesPrice(price, precio)) show = false;

    card.hidden = !show;
    if (show) visible += 1;
  });

  sortCards(grid, orden);
  grid.hidden = visible === 0;
  empty.hidden = visible !== 0;

  const whereLabel = donde
    ? form.elements.namedItem("donde").value.trim()
    : "todos los destinos";
  const dateLabel =
    llegada && salida ? ` · ${formatDay(llegada)} – ${formatDay(salida)}` : "";
  const peopleLabel = personas ? ` · ${plural(personas, "persona", "personas")}` : "";

  countEl.textContent = plural(visible, "retiro disponible", "retiros disponibles");
  summaryEl.textContent = `en ${whereLabel}${dateLabel}${peopleLabel}`;
}

function todayIso() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${now.getFullYear()}-${month}-${day}`;
}

function initMarketplace() {
  const form = document.querySelector("[data-marketplace-form]");
  const grid = document.querySelector("[data-results-grid]");
  const empty = document.querySelector("[data-results-empty]");
  const countEl = document.querySelector("[data-results-count]");
  const summaryEl = document.querySelector("[data-results-summary]");
  if (!form || !grid || !empty || !countEl || !summaryEl) return;

  readParams(form);

  const llegada = form.elements.namedItem("llegada");
  const salida = form.elements.namedItem("salida");
  const minDate = todayIso();
  llegada.min = minDate;
  salida.min = llegada.value || minDate;

  const chips = [...document.querySelectorAll("[data-filter-tipo]")];
  const activeTipo = form.elements.namedItem("tipo").value;
  chips.forEach((chip) => {
    const isAll = chip.hasAttribute("data-filter-all");
    const pressed = isAll ? activeTipo === "" : chip.dataset.filterTipo === activeTipo;
    chip.setAttribute("aria-pressed", pressed ? "true" : "false");
  });

  const durationInput = document.querySelector(`[name="filtro-duracion"][value="${form.elements.namedItem("duracion").value}"]`);
  if (durationInput) durationInput.checked = true;
  const priceInput = document.querySelector(`[name="filtro-precio"][value="${form.elements.namedItem("precio").value}"]`);
  if (priceInput) priceInput.checked = true;

  const state = { form, grid, empty, countEl, summaryEl };
  const refresh = () => {
    applyFilters(state);
    writeUrl(form);
  };

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const value = chip.dataset.filterTipo || "";
      const isAll = chip.hasAttribute("data-filter-all");
      const next = isAll ? "" : chip.getAttribute("aria-pressed") === "true" ? "" : value;
      chips.forEach((item) => {
        const pressed = item.hasAttribute("data-filter-all")
          ? next === ""
          : item.dataset.filterTipo === next && next !== "";
        item.setAttribute("aria-pressed", pressed ? "true" : "false");
      });
      form.elements.namedItem("tipo").value = next;
      refresh();
    });
  });

  document.querySelectorAll("[name='filtro-duracion']").forEach((input) => {
    input.addEventListener("change", () => {
      form.elements.namedItem("duracion").value = input.value;
      refresh();
    });
  });

  document.querySelectorAll("[name='filtro-precio']").forEach((input) => {
    input.addEventListener("change", () => {
      form.elements.namedItem("precio").value = input.value;
      refresh();
    });
  });

  form.elements.namedItem("orden").addEventListener("change", refresh);
  form.elements.namedItem("donde").addEventListener("input", refresh);
  form.elements.namedItem("personas").addEventListener("change", refresh);
  form.elements.namedItem("salida").addEventListener("change", refresh);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    refresh();
  });
  llegada.addEventListener("change", () => {
    salida.min = llegada.value || minDate;
    if (salida.value && llegada.value && salida.value < llegada.value) salida.value = llegada.value;
    refresh();
  });

  const moreBtn = document.querySelector("[data-more-filters]");
  const panel = document.querySelector("[data-more-panel]");
  if (moreBtn && panel) {
    moreBtn.addEventListener("click", () => {
      const open = panel.hasAttribute("hidden");
      panel.toggleAttribute("hidden", !open);
      moreBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", (event) => {
      if (panel.hasAttribute("hidden")) return;
      if (panel.contains(event.target) || moreBtn.contains(event.target)) return;
      panel.hidden = true;
      moreBtn.setAttribute("aria-expanded", "false");
    });
  }

  document.querySelector("[data-reset]")?.addEventListener("click", () => {
    form.reset();
    form.elements.namedItem("tipo").value = "";
    form.elements.namedItem("duracion").value = "";
    form.elements.namedItem("precio").value = "";
    chips.forEach((chip, index) => chip.setAttribute("aria-pressed", index === 0 ? "true" : "false"));
    document.querySelector("[name='filtro-duracion'][value='']").checked = true;
    document.querySelector("[name='filtro-precio'][value='']").checked = true;
    llegada.min = minDate;
    salida.min = minDate;
    refresh();
  });

  syncHiddenFilters(
    form,
    form.elements.namedItem("tipo").value,
    form.elements.namedItem("duracion").value,
    form.elements.namedItem("precio").value
  );
  refresh();
}

document.addEventListener("DOMContentLoaded", initMarketplace);

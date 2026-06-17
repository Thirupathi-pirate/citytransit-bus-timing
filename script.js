// ============================================================
// Aruvi — App Logic
// ============================================================

let timeWindow = 180;

document.addEventListener("DOMContentLoaded", () => {
  renderHeader(BUS_DATA.station, BUS_DATA.platform);
  renderAlerts(BUS_DATA.alerts);
  applyFilters();
  renderSchedules(BUS_DATA.schedules);
  renderTimeWindowUI();
});

// --- Render helpers ---

function renderHeader(station, platform) {
  const el = document.getElementById("stationInfo");
  if (el) el.textContent = station + " \u2022 " + platform;
}

function applyFilters() {
  const all = BUS_DATA.routes;
  const filtered = all.filter(r => r.arrivalMinutes <= timeWindow);
  renderArrivals(filtered);
}

function renderArrivals(routes) {
  const grid = document.getElementById("arrivalsGrid");
  if (!grid) return;
  grid.innerHTML = routes.map((r, i) => {
    const isDue = r.arrival === "Due Now";
    const timeClass = isDue ? "bus-pulse" : "";
    return `<div class="arrival-card bg-surface-container rounded-2xl border border-outline-variant overflow-hidden hover:border-${r.color}/50 transition-all cursor-pointer group animate-fade-up" style="animation-delay:${0.05 * i}s" data-route="${r.section}" data-status="${r.status}" data-from="${r.from}" data-to="${r.to}">
      <div class="h-1.5 bg-${r.color}"></div>
      <div class="p-5">
        <div class="flex items-center justify-between mb-2">
          <h3 class="font-semibold text-on-surface text-base md:text-lg">${r.name}</h3>
          <div class="${isDue ? 'bg-primary/15 text-primary' : 'bg-surface-container-highest text-on-surface'} font-bold text-sm px-4 py-2 rounded-xl flex items-center gap-2 ${timeClass}">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${r.arrival}
          </div>
        </div>
        <p class="text-sm md:text-base text-on-surface-variant font-medium mb-1">${r.from} → ${r.to}</p>
        ${r.via ? `<p class="text-xs text-on-surface-variant">Via ${r.via}</p>` : ''}
      </div>
    </div>`;
  }).join("");
  const empty = document.getElementById("arrivalsEmpty");
  if (empty) {
    empty.classList.toggle("hidden", routes.length > 0);
  }
}

function renderSchedules(schedules) {
  const tbody = document.getElementById("scheduleBody");
  if (!tbody) return;
  tbody.innerHTML = schedules.map(s => {
    const isCancelled = s.status === "cancelled";
    return `<tr class="schedule-row bg-surface-container hover:bg-surface-container-high transition-colors${isCancelled ? ' opacity-60' : ''}" data-route="${s.route}">
      <td class="px-5 py-4 text-sm">${s.route}</td>
      <td class="px-5 py-4"><span class="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-surface-container-high text-on-surface text-xs font-semibold border border-outline-variant">${s.operator}</span></td>
      <td class="px-5 py-4 font-mono text-sm font-bold${isCancelled ? ' text-outline line-through' : ''}">${s.time}</td>
      <td class="px-5 py-4"><span class="flex items-center gap-2 text-xs"><span class="w-2 h-2 rounded-full bg-tertiary"></span><span class="text-tertiary">On-time</span></span></td>
    </tr>`;
  }).join("");
  document.getElementById("scheduleCount").textContent = "Showing 1-" + schedules.length + " of " + schedules.length + " services";
}

function renderAlerts(alerts) {
  const container = document.getElementById("alertContainer");
  if (!container) return;
  if (!alerts || alerts.length === 0) { container.innerHTML = ""; return; }
  container.innerHTML = alerts.map(a => `
    <div class="bg-error-container/10 border border-error/20 rounded-xl px-5 py-4 flex items-center gap-4">
      <svg class="w-5 h-5 text-error flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
      <div class="text-sm text-on-error-container"><span class="font-bold">Service Alert:</span> ${a}</div>
    </div>`).join("");
}

// --- Time window preference ---

function renderTimeWindowUI() {
  const container = document.getElementById("timeWindowPref");
  if (!container) return;
  const opts = [
    { label: "1h", value: 60 },
    { label: "2h", value: 120 },
    { label: "3h", value: 180 },
    { label: "4h", value: 240 },
    { label: "All", value: Infinity },
  ];
  container.innerHTML = opts.map(o =>
    `<button class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${timeWindow === o.value ? 'bg-primary/15 text-primary border-primary/40' : 'bg-surface-container-high text-on-surface-variant border-outline-variant hover:bg-surface-container-highest hover-glow'}" onclick="setTimeWindow(${o.value})">${o.label}</button>`
  ).join("");
}

function setTimeWindow(mins) {
  if (timeWindow === mins) return;
  timeWindow = mins;
  renderTimeWindowUI();
  applyFilters();
}

// --- Dropdown ---

function toggleDropdown(id) {
  const menu = document.getElementById(id + "Menu");
  if (!menu) return;
  const isOpen = menu.classList.contains("open");
  document.querySelectorAll(".dropdown-menu.open").forEach(m => {
    if (m.id !== id + "Menu") m.classList.remove("open");
    const btn = m.parentElement?.querySelector("button");
    if (btn) btn.classList.remove("dropdown-open");
  });
  menu.classList.toggle("open", !isOpen);
  const btn = menu.parentElement?.querySelector("button");
  if (btn) btn.classList.toggle("dropdown-open", !isOpen);
}

function selectDropdown(id, el, label) {
  const btn = document.querySelector(`#${id}Dropdown button`);
  if (btn) btn.innerHTML = label + '<svg class="w-4 h-4 text-outline ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
  document.querySelectorAll(`#${id}Menu .dropdown-item`).forEach(i => i.classList.remove("selected"));
  el.classList.add("selected");
  document.getElementById(id + "Menu").classList.remove("open");
  if (id === "route" || id === "status") filterArrivals();
  if (id === "scheduleRoute") filterScheduleRoute();
}

// --- From / To custom dropdowns ---

function selectFrom(value) {
  const label = document.getElementById("fromStopLabel");
  if (!label) return;
  label.textContent = value;
  document.querySelectorAll("#fromStopMenu .dropdown-item").forEach(i => {
    i.classList.toggle("selected", i.dataset.value === value);
  });
  const menu = document.getElementById("fromStopMenu");
  menu.classList.remove("open");
  const btn = menu.parentElement?.querySelector("button");
  if (btn) btn.classList.remove("dropdown-open");
}

function selectTo(value) {
  const label = document.getElementById("toStopLabel");
  if (!label) return;
  label.textContent = value;
  document.querySelectorAll("#toStopMenu .dropdown-item").forEach(i => {
    i.classList.toggle("selected", i.dataset.value === value);
  });
  const menu = document.getElementById("toStopMenu");
  menu.classList.remove("open");
  const btn = menu.parentElement?.querySelector("button");
  if (btn) btn.classList.remove("dropdown-open");
}

document.addEventListener("click", function(e) {
  document.querySelectorAll(".dropdown-menu.open").forEach(menu => {
    if (!menu.parentElement.contains(e.target)) {
      menu.classList.remove("open");
      const btn = menu.parentElement?.querySelector("button");
      if (btn) btn.classList.remove("dropdown-open");
    }
  });
});

// --- Filtering ---

function filterArrivals() {
  const routeVal = document.querySelector("#routeMenu .dropdown-item.selected")?.dataset?.value || "all";
  const statusVal = document.querySelector("#statusMenu .dropdown-item.selected")?.dataset?.value || "all";
  document.querySelectorAll(".arrival-card").forEach(card => {
    const r = card.dataset.route, s = card.dataset.status;
    card.style.display = (routeVal === "all" || r === routeVal) && (statusVal === "all" || s === statusVal) ? "" : "none";
  });
}

function filterSchedule() {
  const query = document.getElementById("scheduleSearch").value.toLowerCase();
  document.querySelectorAll(".schedule-row").forEach(row => {
    row.style.display = row.textContent.toLowerCase().includes(query) ? "" : "none";
  });
}

function filterScheduleRoute() {
  const val = document.querySelector("#scheduleRouteMenu .dropdown-item.selected")?.dataset?.value || "all";
  document.querySelectorAll(".schedule-row").forEach(row => {
    row.style.display = val === "all" || row.dataset.route === val ? "" : "none";
  });
}

// --- Nav bar active indicator ---

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function(e) {
      document.querySelectorAll(".nav-link").forEach(l => {
        l.classList.remove("text-primary", "border-b-2", "border-primary");
        l.classList.add("text-on-surface-variant");
      });
      this.classList.remove("text-on-surface-variant");
      this.classList.add("text-primary");
      document.getElementById("mobileNav")?.classList.add("hidden");
    });
  });
});

// --- Mobile nav ---

function toggleMobileNav() {
  document.getElementById("mobileNav").classList.toggle("hidden");
}

// --- Smooth navbar on scroll ---

let navTick;
document.addEventListener("scroll", () => {
  cancelAnimationFrame(navTick);
  navTick = requestAnimationFrame(() => {
    document.querySelector(".glass-nav").classList.toggle("scrolled", window.scrollY > 40);
  });
}, { passive: true });

// --- Plan Route ---

function planRoute() {
  const from = document.getElementById("fromStopLabel")?.textContent;
  const to = document.getElementById("toStopLabel")?.textContent;
  if (!from || !to) return;

  document.querySelectorAll(".arrival-card").forEach(card => {
    card.style.display = (from === to || (card.dataset.from === from && card.dataset.to === to)) ? "" : "none";
  });

  document.getElementById("arrivals")?.scrollIntoView({ behavior: "smooth" });
}

// --- Swap locations ---

function swapLocations() {
  const fromLabel = document.getElementById("fromStopLabel");
  const toLabel = document.getElementById("toStopLabel");
  const btn = document.querySelector(".swap-btn");
  if (!fromLabel || !toLabel) return;
  const tmp = fromLabel.textContent;
  selectFrom(toLabel.textContent);
  selectTo(tmp);
  btn.classList.add("swapped");
  setTimeout(() => btn.classList.remove("swapped"), 400);
}

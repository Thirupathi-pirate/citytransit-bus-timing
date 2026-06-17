// ============================================================
// Aruvi — App Logic
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  renderArrivals(BUS_DATA.routes);
  renderSchedules(BUS_DATA.schedules);
  renderAlerts(BUS_DATA.alerts);
  renderHeader(BUS_DATA.station, BUS_DATA.platform);
});

// --- Render helpers ---

function renderHeader(station, platform) {
  const el = document.getElementById("stationInfo");
  if (el) el.textContent = station + " \u2022 " + platform;
}

function renderArrivals(routes) {
  const grid = document.getElementById("arrivalsGrid");
  if (!grid) return;
  grid.innerHTML = routes.map((r, i) => {
    const statusLabel = statusText(r.status);
    const statusDot = statusDotClass(r.status);
    const isDue = r.arrival === "Due Now";
    const timeClass = isDue ? "bus-pulse" : "";
    return `<div class="arrival-card bg-surface-container rounded-2xl border border-outline-variant overflow-hidden hover:border-${r.color}/50 transition-all cursor-pointer group animate-fade-up" style="animation-delay:${0.05 * i}s" data-route="${r.id}" data-status="${r.status}">
      <div class="h-1.5 bg-${r.color}"></div>
      <div class="p-5">
        <div class="flex items-start justify-between mb-3">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 rounded-xl bg-${r.color}/20 flex items-center justify-center border border-${r.color}/30">
              <span class="text-lg font-bold text-${r.color}">${r.number}</span>
            </div>
            <div>
              <h3 class="font-semibold text-on-surface">${r.name}</h3>
              <p class="text-xs text-on-surface-variant">${r.stop}</p>
            </div>
          </div>
          <svg class="w-5 h-5 text-on-surface-variant group-hover:text-${r.color} transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="14" rx="2" ry="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="7" y1="3" x2="7" y2="10"/><line x1="12" y1="3" x2="12" y2="10"/><line x1="17" y1="3" x2="17" y2="10"/><circle cx="7" cy="20" r="1.5" fill="currentColor" stroke="none"/><circle cx="17" cy="20" r="1.5" fill="currentColor" stroke="none"/></svg>
        </div>
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 text-xs">
            <span class="w-2 h-2 rounded-full ${statusDot}"></span>
            <span class="${statusTextClass(r.status)} font-medium">${statusLabel}</span>
          </div>
          <div class="${isDue ? 'bg-primary/15 text-primary' : 'bg-surface-container-highest text-on-surface'} font-bold text-sm px-4 py-2 rounded-xl flex items-center gap-2 ${timeClass}">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            ${r.arrival}
          </div>
        </div>
      </div>
    </div>`;
  }).join("");
}

function renderSchedules(schedules) {
  const tbody = document.getElementById("scheduleBody");
  if (!tbody) return;
  tbody.innerHTML = schedules.map(s => {
    const isCancelled = s.status === "cancelled";
    const isDelayed = s.status === "delayed";
    return `<tr class="schedule-row bg-surface-container hover:bg-surface-container-high transition-colors${isCancelled ? ' opacity-60' : ''}">
      <td class="px-5 py-4">${s.stop}</td>
      <td class="px-5 py-4"><span class="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg ${badgeClass(s.route)} text-xs font-semibold">${s.route}</span></td>
      <td class="px-5 py-4 font-mono text-sm font-bold${isCancelled ? ' text-outline line-through' : ''}">${s.time}</td>
      <td class="px-5 py-4"><span class="flex items-center gap-2 text-xs"><span class="w-2 h-2 rounded-full ${statusDotClass(s.status)}"></span>${isDelayed ? '<span class="text-error">+4 min delayed</span>' : isCancelled ? '<span class="text-error">Cancelled</span>' : '<span class="text-tertiary">On-time</span>'}</span></td>
    </tr>`;
  }).join("");
  document.getElementById("scheduleCount").textContent = `Showing 1-${schedules.length} of ${schedules.length} stops`;
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

// --- Helpers ---

function statusText(status) {
  const m = { ontime: "On-time", delayed: "Delayed", cancelled: "Cancelled", due: "Due Now" };
  return m[status] || status;
}

function statusDotClass(status) {
  const m = { ontime: "bg-tertiary", delayed: "bg-error", cancelled: "bg-error", due: "bg-primary" };
  return m[status] || "bg-outline";
}

function statusTextClass(status) {
  const m = { ontime: "text-tertiary", delayed: "text-error", cancelled: "text-error", due: "text-primary" };
  return m[status] || "text-on-surface-variant";
}

function badgeClass(route) {
  const m = { Express: "bg-primary/15 text-primary", Local: "bg-outline/15 text-outline border border-outline/30", Rapid: "bg-secondary/15 text-secondary" };
  return m[route] || "bg-outline/15 text-outline";
}

// --- Dropdown ---

function toggleDropdown(id) {
  const menu = document.getElementById(id + "Menu");
  if (!menu) return;
  const isOpen = menu.classList.contains("open");
  document.querySelectorAll(".dropdown-menu.open").forEach(m => { if (m.id !== id + "Menu") m.classList.remove("open"); });
  menu.classList.toggle("open", !isOpen);
}

function selectDropdown(id, el, label) {
  const btn = document.querySelector(`#${id}Dropdown button`);
  if (btn) btn.innerHTML = label + '<svg class="w-4 h-4 text-outline ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>';
  document.querySelectorAll(`#${id}Menu .dropdown-item`).forEach(i => i.classList.remove("selected"));
  el.classList.add("selected");
  document.getElementById(id + "Menu").classList.remove("open");
  if (id === "route" || id === "status") filterArrivals();
}

document.addEventListener("click", function(e) {
  document.querySelectorAll(".dropdown-menu.open").forEach(menu => {
    if (!menu.parentElement.contains(e.target)) menu.classList.remove("open");
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

// --- Nav bar active indicator ---

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function(e) {
      document.querySelectorAll(".nav-link").forEach(l => {
        l.classList.remove("text-primary", "border-b-2", "border-primary");
        l.classList.add("text-on-surface-variant");
      });
      this.classList.remove("text-on-surface-variant");
      this.classList.add("text-primary", "border-b-2", "border-primary");
      document.getElementById("mobileNav")?.classList.add("hidden");
    });
  });
});

// --- Mobile nav ---

function toggleMobileNav() {
  document.getElementById("mobileNav").classList.toggle("hidden");
}

// --- Swap locations ---

function swapLocations() {
  const from = document.getElementById("fromInput");
  const to = document.getElementById("toInput");
  const btn = document.querySelector(".swap-btn");
  if (!from || !to) return;
  const tmp = from.value;
  from.value = to.value;
  to.value = tmp;
  btn.classList.add("swapped");
  setTimeout(() => btn.classList.remove("swapped"), 400);
}

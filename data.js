// ============================================================
// ARUVI — Ayarkunnam Bus Timetable
// Source: Ayarkunnam Bus Stand timetable board
// ============================================================

// --- Parse "H.mm am/pm" to minutes since midnight ---
function parseTime(s) {
  const parts = s.trim().split(/[.\s]+/);
  if (parts.length < 3) return 0;
  let h = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10);
  const ampm = parts[2].toLowerCase();
  if (ampm === "pm" && h !== 12) h += 12;
  if (ampm === "am" && h === 12) h = 0;
  return h * 60 + m;
}

function minutesFromNow(timeStr) {
  const now = new Date();
  const nowMin = now.getHours() * 60 + now.getMinutes();
  let diff = parseTime(timeStr) - nowMin;
  if (diff < 0) diff += 1440;
  return diff;
}

function nextDeparture(services) {
  let best = null, bestMin = Infinity;
  for (const s of services) {
    const m = minutesFromNow(s.t);
    if (m < bestMin) { bestMin = m; best = s; }
  }
  return best ? { ...best, mins: bestMin } : null;
}

// --- Raw timetable data (4 sections) ---

const SECTIONS = [
  {
    id: "kottayam",
    name: "Ayarkunnam → Kottayam",
    via: "Via Eranthal / Manarkad",
    color: "primary",
    total: 38,
    services: [
      "6.28 am", "SNT", "Eranthal",
      "7.10 am", "TMS", "Manarkad",
      "7.25 am", "Thumpi", "Eranthal",
      "7.45 am", "Pulladan", "Manarkad",
      "7.55 am", "ATS", "Eranthal",
      "8.10 am", "ATS", "Eranthal",
      "8.25 am", "SNT", "Eranthal",
      "8.45 am", "Pulladan", "Manarkad",
      "9.10 am", "TMS", "Manarkad",
      "9.20 am", "Thumpi", "Eranthal",
      "9.40 am", "Pulladan", "Manarkad",
      "9.55 am", "ATS", "Eranthal",
      "10.10 am", "ATS", "Eranthal",
      "10.30 am", "SNT", "Eranthal",
      "10.45 am", "Pulladan", "Manarkad",
      "11.20 am", "Thumpi", "Eranthal",
      "11.40 am", "TMS", "Manarkad",
      "11.55 am", "ATS", "Eranthal",
      "12.10 pm", "Pulladan", "Manarkad",
      "12.30 pm", "ATS", "Eranthal",
      "12.55 pm", "Pulladan", "Manarkad",
      "1.10 pm", "Thumpi", "Eranthal",
      "1.30 pm", "SNT", "Eranthal",
      "2.00 pm", "TMS", "Manarkad",
      "2.20 pm", "Pulladan", "Manarkad",
      "2.35 pm", "ATS", "Eranthal",
      "2.50 pm", "ATS", "Eranthal",
      "3.05 pm", "Pulladan", "Manarkad",
      "3.15 pm", "Thumpi", "Eranthal",
      "3.35 pm", "SNT", "Eranthal",
      "3.55 pm", "TMS", "Manarkad",
      "4.25 pm", "ATS", "Eranthal",
      "4.40 pm", "Pulladan", "Manarkad",
      "4.50 pm", "ATS", "Eranthal",
      "5.15 pm", "Pulladan", "Manarkad",
      "5.35 pm", "SNT", "Eranthal",
      "5.50 pm", "Thumpi", "Eranthal",
      "6.10 pm", "TMS", "Manarkad",
    ],
  },
  {
    id: "inbound",
    name: "Towards Ayarkunnam",
    via: "From Kottayam / Various",
    color: "secondary",
    total: 54,
    services: [
      "7.05 am", "Thumpi", "",
      "7.25 am", "Pulladan", "",
      "7.35 am", "Sangam", "Kuroppas – Pambady",
      "8.05 am", "SNT", "",
      "8.15 am", "Pulladan", "",
      "8.17 am", "Kattuveettil", "Manarkad – Puthupally",
      "8.40 am", "TMS", "",
      "8.50 am", "Thumpi", "",
      "8.55 am", "Immanuvel", "Kuroppas – Pambady",
      "9.15 am", "Pulladan", "",
      "9.30 am", "ATS", "",
      "9.40 am", "ATS", "",
      "10.05 am", "SNT", "",
      "10.20 am", "Pulladan", "",
      "10.45 am", "Kattuveettil", "Manarkad – Puthupally",
      "10.55 am", "Thumpi", "",
      "11.05 am", "Sangam", "Kuroppas – Pambady",
      "11.10 am", "TMS", "",
      "11.25 am", "ATS", "",
      "11.45 am", "Pulladan", "",
      "12.10 pm", "ATS", "",
      "12.30 pm", "Pulladan", "",
      "12.45 pm", "Thumpi", "",
      "12.55 pm", "Immanuvel", "Kuroppas – Pambady",
      "1.00 pm", "SNT", "",
      "1.30 pm", "TMS", "",
      "1.45 pm", "Pulladan", "",
      "2.00 pm", "ATS", "",
      "2.15 pm", "ATS", "",
      "2.17 pm", "Kattuveettil", "Manarkad – Puthupally",
      "2.25 pm", "Pulladan", "",
      "2.40 pm", "Thumpi", "",
      "2.50 pm", "Sangam", "Kuroppas – Pambady",
      "3.05 pm", "SNT", "",
      "3.20 pm", "Immanuvel", "",
      "3.35 pm", "TMS", "",
      "4.05 pm", "ATS", "",
      "4.15 pm", "Pulladan", "",
      "4.30 pm", "ATS", "",
      "4.43 pm", "Kattuveettil", "Manarkad – Puthupally",
      "4.45 pm", "Pulladan", "",
      "5.15 pm", "SNT", "",
      "5.20 pm", "Immanuvel", "Kuroppas – Pambady",
      "5.25 pm", "Thumpi", "",
      "5.45 pm", "TMS", "",
      "6.05 pm", "ATS", "",
      "6.15 pm", "Pulladan", "",
      "6.30 pm", "Sangam", "Kuroppas",
      "6.35 pm", "ATS", "",
      "6.45 pm", "Pulladan", "",
      "7.05 pm", "SNT", "",
      "7.05 pm", "Kattuveettil", "Manarkad Junction",
      "7.20 pm", "Thumpi", "",
      "7.45 pm", "TMS", "",
    ],
  },
  {
    id: "ettumanoor",
    name: "Ayarkunnam → Ettumanoor",
    via: "Via Peruvar / Thirikodd",
    color: "secondary",
    total: 21,
    services: [
      "6.14 am", "Thandra", "Peruvar",
      "6.30 am", "Sangam", "Peruvar",
      "7.00 am", "Thandra", "Peruvar",
      "7.05 am", "Kattuveettil", "Thirikodd",
      "7.50 am", "Immanuvel", "Thirikodd",
      "9.00 am", "Sangam", "Peruvar (side road)",
      "9.45 am", "Kattuveettil", "Thirikodd",
      "10.05 am", "Thandra", "Peruvar",
      "10.50 am", "Immanuvel", "Thirikodd",
      "11.25 am", "Thandra", "Peruvar",
      "12.30 pm", "Kattuveettil", "Thirikodd",
      "12.45 pm", "Sangam", "Peruvar",
      "2.05 pm", "Thandra", "Peruvar",
      "2.10 pm", "Immanuvel", "Thirikodd",
      "3.28 pm", "Thandra", "Peruvar",
      "3.35 pm", "Kattuveettil", "Thirikodd",
      "4.00 pm", "Immanuvel", "Thirikodd",
      "5.00 pm", "Sangam", "Peruvar",
      "5.27 pm", "Thandra", "Peruvar",
      "5.56 pm", "Thandra", "Peruvar",
      "6.00 pm", "Kattuveettil", "Thirikodd",
    ],
  },
  {
    id: "puthupally",
    name: "Ayarkunnam → Puthupally",
    via: "Via Manarkad – Palli side road",
    color: "outline",
    total: 12,
    services: [
      "7.05 am", "Thandra", "Channaserry",
      "8.17 am", "Kattuveettil", "Puthupally",
      "8.35 am", "Malikakavu", "",
      "10.45 am", "Kattuveettil", "Puthupally",
      "10.50 am", "Thandra", "Channaserry",
      "12.38 pm", "Thandra", "Malikakavu",
      "2.17 pm", "Kattuveettil", "Puthupally",
      "2.50 pm", "Thandra", "Channaserry",
      "4.20 pm", "Thandra", "Puthupally",
      "4.43 pm", "Kattuveettil", "Puthupally",
      "6.38 pm", "Thandra", "Channaserry",
      "7.08 pm", "Thandra", "Malikakavu",
    ],
  },
];

// --- Flatten services into { t, op, via } objects ---
function expandSection(section) {
  const result = [];
  for (let i = 0; i < section.services.length; i += 3) {
    result.push({ t: section.services[i], op: section.services[i + 1], via: section.services[i + 2] });
  }
  return result;
}

// --- Build routes (4 cards) ---
function getRouteCards() {
  return SECTIONS.map((sec, idx) => {
    const svcs = expandSection(sec);
    const next = nextDeparture(svcs);
    const isDue = next && next.mins <= 2;
    return {
      id: sec.id,
      number: "",
      name: sec.name,
      type: "Express",
      color: sec.color,
      stop: sec.via + " \u2022 " + sec.total + " services",
      status: isDue ? "due" : "ontime",
      arrival: next ? (isDue ? "Due Now" : formatTime(next.t)) : "No services",
      arrivalMinutes: next ? next.mins : 9999,
      delay: 0,
      _nextOp: next ? next.op : "",
    };
  });
}

function formatTime(s) {
  const p = s.trim().split(/[.\s]+/);
  return p[0] + ":" + p[1] + " " + p[2].toUpperCase();
}

// --- Build full schedule (125 rows) ---
function getFullSchedule() {
  const rows = [];
  SECTIONS.forEach(sec => {
    const svcs = expandSection(sec);
    svcs.forEach(sv => {
      rows.push({
        route: sec.name,
        operator: sv.op,
        time: formatTime(sv.t),
        via: sv.via,
        status: "ontime",
        routeId: sec.id,
      });
    });
  });
  return rows;
}

const BUS_DATA = {
  get routes() { return getRouteCards(); },
  get schedules() { return getFullSchedule(); },
  alerts: [
    "Ayarkunnam Bus Stand operates daily from 6:00 AM to 8:00 PM. 125 total services across 4 routes.",
    "Operators: SNT \u00B7 TMS \u00B7 ATS \u00B7 Thumpi \u00B7 Pulladan \u00B7 Immanuvel \u00B7 Kattuveettil \u00B7 Sangam \u00B7 Thandra \u00B7 Malikakavu",
  ],
  station: "Ayarkunnam Bus Stand",
  platform: "Kottayam District",
};

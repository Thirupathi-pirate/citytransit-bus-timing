// ============================================================
// ARUVI — Ayarkunnam Bus Timetable
// Source: Ayarkunnam Bus Stand timetable board
// ============================================================

const TIMETABLE_DATA = {
  station: "Ayarkunnam Bus Stand",
  platform: "Kottayam District",

  // --- Outbound services FROM Ayarkunnam ---
  outbound: [
    // Ayarkunnam → Kottayam (via Eranthal / Manarkad)
    { time: "6:28", ampm: "AM", operator: "SNT", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "7:10", ampm: "AM", operator: "TMS", dest: "Kottayam", via: "Manarkad", routeId: "ktym" },
    { time: "7:25", ampm: "AM", operator: "Thumpi", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "7:45", ampm: "AM", operator: "Pulladan", dest: "Kottayam", via: "Manarkad", routeId: "ktym" },
    { time: "7:55", ampm: "AM", operator: "ATS", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "8:10", ampm: "AM", operator: "ATS", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "8:25", ampm: "AM", operator: "SNT", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "8:45", ampm: "AM", operator: "Pulladan", dest: "Kottayam", via: "Manarkad", routeId: "ktym" },
    { time: "9:10", ampm: "AM", operator: "TMS", dest: "Kottayam", via: "Manarkad", routeId: "ktym" },
    { time: "9:20", ampm: "AM", operator: "Thumpi", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "9:40", ampm: "AM", operator: "Pulladan", dest: "Kottayam", via: "Manarkad", routeId: "ktym" },
    { time: "9:55", ampm: "AM", operator: "ATS", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "10:10", ampm: "AM", operator: "ATS", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "10:30", ampm: "AM", operator: "SNT", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "10:45", ampm: "AM", operator: "Pulladan", dest: "Kottayam", via: "Manarkad", routeId: "ktym" },
    { time: "11:20", ampm: "AM", operator: "Thumpi", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "11:40", ampm: "AM", operator: "TMS", dest: "Kottayam", via: "Manarkad", routeId: "ktym" },
    { time: "11:55", ampm: "AM", operator: "ATS", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "12:10", ampm: "PM", operator: "Pulladan", dest: "Kottayam", via: "Manarkad", routeId: "ktym" },
    { time: "12:30", ampm: "PM", operator: "ATS", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "12:55", ampm: "PM", operator: "Pulladan", dest: "Kottayam", via: "Manarkad", routeId: "ktym" },
    { time: "1:10", ampm: "PM", operator: "Thumpi", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "1:30", ampm: "PM", operator: "SNT", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "2:00", ampm: "PM", operator: "TMS", dest: "Kottayam", via: "Manarkad", routeId: "ktym" },
    { time: "2:20", ampm: "PM", operator: "Pulladan", dest: "Kottayam", via: "Manarkad", routeId: "ktym" },
    { time: "2:35", ampm: "PM", operator: "ATS", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "2:50", ampm: "PM", operator: "ATS", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "3:05", ampm: "PM", operator: "Pulladan", dest: "Kottayam", via: "Manarkad", routeId: "ktym" },
    { time: "3:15", ampm: "PM", operator: "Thumpi", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "3:35", ampm: "PM", operator: "SNT", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "3:55", ampm: "PM", operator: "TMS", dest: "Kottayam", via: "Manarkad", routeId: "ktym" },
    { time: "4:25", ampm: "PM", operator: "ATS", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "4:40", ampm: "PM", operator: "Pulladan", dest: "Kottayam", via: "Manarkad", routeId: "ktym" },
    { time: "4:50", ampm: "PM", operator: "ATS", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "5:15", ampm: "PM", operator: "Pulladan", dest: "Kottayam", via: "Manarkad", routeId: "ktym" },
    { time: "5:35", ampm: "PM", operator: "SNT", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "5:50", ampm: "PM", operator: "Thumpi", dest: "Kottayam", via: "Eranthal", routeId: "ktym" },
    { time: "6:10", ampm: "PM", operator: "TMS", dest: "Kottayam", via: "Manarkad", routeId: "ktym" },

    // Ayarkunnam → Ettumanoor (via Peruvar / Thirikodd)
    { time: "6:14", ampm: "AM", operator: "Thandra", dest: "Thandra / Ettumanoor", via: "Peruvar", routeId: "ettumanoor" },
    { time: "6:30", ampm: "AM", operator: "Sangam", dest: "Ettumanoor", via: "Peruvar", routeId: "ettumanoor" },
    { time: "7:00", ampm: "AM", operator: "Thandra", dest: "Thandra / Ettumanoor", via: "Peruvar", routeId: "ettumanoor" },
    { time: "7:05", ampm: "AM", operator: "Kattuveettil", dest: "Ettumanoor", via: "Thirikodd", routeId: "ettumanoor" },
    { time: "7:50", ampm: "AM", operator: "Immanuvel", dest: "Ettumanoor", via: "Thirikodd", routeId: "ettumanoor" },
    { time: "9:00", ampm: "AM", operator: "Sangam", dest: "Ettumanoor", via: "Peruvar", routeId: "ettumanoor" },
    { time: "9:45", ampm: "AM", operator: "Kattuveettil", dest: "Ettumanoor", via: "Thirikodd", routeId: "ettumanoor" },
    { time: "10:05", ampm: "AM", operator: "Thandra", dest: "Thandra / Ettumanoor", via: "Peruvar", routeId: "ettumanoor" },
    { time: "10:50", ampm: "AM", operator: "Immanuvel", dest: "Ettumanoor", via: "Thirikodd", routeId: "ettumanoor" },
    { time: "11:25", ampm: "AM", operator: "Thandra", dest: "Thandra / Ettumanoor", via: "Peruvar", routeId: "ettumanoor" },
    { time: "12:30", ampm: "PM", operator: "Kattuveettil", dest: "Ettumanoor", via: "Thirikodd", routeId: "ettumanoor" },
    { time: "12:45", ampm: "PM", operator: "Sangam", dest: "Ettumanoor", via: "Peruvar", routeId: "ettumanoor" },
    { time: "2:05", ampm: "PM", operator: "Thandra", dest: "Thandra / Ettumanoor", via: "Peruvar", routeId: "ettumanoor" },
    { time: "2:10", ampm: "PM", operator: "Immanuvel", dest: "Ettumanoor", via: "Thirikodd", routeId: "ettumanoor" },
    { time: "3:28", ampm: "PM", operator: "Thandra", dest: "Thandra / Ettumanoor", via: "Peruvar", routeId: "ettumanoor" },
    { time: "3:35", ampm: "PM", operator: "Kattuveettil", dest: "Ettumanoor", via: "Thirikodd", routeId: "ettumanoor" },
    { time: "4:00", ampm: "PM", operator: "Immanuvel", dest: "Ettumanoor", via: "Thirikodd", routeId: "ettumanoor" },
    { time: "5:00", ampm: "PM", operator: "Sangam", dest: "Ettumanoor", via: "Peruvar", routeId: "ettumanoor" },
    { time: "5:27", ampm: "PM", operator: "Thandra", dest: "Thandra / Ettumanoor", via: "Peruvar", routeId: "ettumanoor" },
    { time: "5:56", ampm: "PM", operator: "Thandra", dest: "Thandra / Ettumanoor", via: "Peruvar", routeId: "ettumanoor" },
    { time: "6:00", ampm: "PM", operator: "Kattuveettil", dest: "Ettumanoor", via: "Thirikodd", routeId: "ettumanoor" },

    // Ayarkunnam → Puthupally / Channaserry / Malikakavu
    { time: "7:05", ampm: "AM", operator: "Thandra", dest: "Channaserry", via: "Manarkad", routeId: "puthupally" },
    { time: "8:17", ampm: "AM", operator: "Kattuveettil", dest: "Puthupally", via: "Manarkad", routeId: "puthupally" },
    { time: "8:35", ampm: "AM", operator: "Malikakavu", dest: "Malikakavu", via: "Manarkad", routeId: "puthupally" },
    { time: "10:45", ampm: "AM", operator: "Kattuveettil", dest: "Puthupally", via: "Manarkad", routeId: "puthupally" },
    { time: "10:50", ampm: "AM", operator: "Thandra", dest: "Channaserry", via: "Manarkad", routeId: "puthupally" },
    { time: "12:38", ampm: "PM", operator: "Thandra", dest: "Malikakavu", via: "Manarkad", routeId: "puthupally" },
    { time: "2:17", ampm: "PM", operator: "Kattuveettil", dest: "Puthupally", via: "Manarkad", routeId: "puthupally" },
    { time: "2:50", ampm: "PM", operator: "Thandra", dest: "Channaserry", via: "Manarkad", routeId: "puthupally" },
    { time: "4:20", ampm: "PM", operator: "Thandra", dest: "Puthupally", via: "Manarkad", routeId: "puthupally" },
    { time: "4:43", ampm: "PM", operator: "Kattuveettil", dest: "Puthupally", via: "Manarkad", routeId: "puthupally" },
    { time: "6:38", ampm: "PM", operator: "Thandra", dest: "Channaserry", via: "Manarkad", routeId: "puthupally" },
    { time: "7:08", ampm: "PM", operator: "Thandra", dest: "Malikakavu", via: "Manarkad", routeId: "puthupally" },
  ],

  // --- Inbound services TOWARDS Ayarkunnam ---
  inbound: [
    { time: "7:05", ampm: "AM", operator: "Thumpi", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "7:25", ampm: "AM", operator: "Pulladan", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "7:35", ampm: "AM", operator: "Sangam", dest: "Ayarkunnam", via: "Kuroppas – Pambady", routeId: "inbound" },
    { time: "8:05", ampm: "AM", operator: "SNT", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "8:15", ampm: "AM", operator: "Pulladan", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "8:17", ampm: "AM", operator: "Kattuveettil", dest: "Ayarkunnam", via: "Manarkad – Puthupally", routeId: "inbound" },
    { time: "8:40", ampm: "AM", operator: "TMS", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "8:50", ampm: "AM", operator: "Thumpi", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "8:55", ampm: "AM", operator: "Immanuvel", dest: "Ayarkunnam", via: "Kuroppas – Pambady", routeId: "inbound" },
    { time: "9:15", ampm: "AM", operator: "Pulladan", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "9:30", ampm: "AM", operator: "ATS", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "9:40", ampm: "AM", operator: "ATS", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "10:05", ampm: "AM", operator: "SNT", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "10:20", ampm: "AM", operator: "Pulladan", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "10:45", ampm: "AM", operator: "Kattuveettil", dest: "Ayarkunnam", via: "Manarkad – Puthupally", routeId: "inbound" },
    { time: "10:55", ampm: "AM", operator: "Thumpi", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "11:05", ampm: "AM", operator: "Sangam", dest: "Ayarkunnam", via: "Kuroppas – Pambady", routeId: "inbound" },
    { time: "11:10", ampm: "AM", operator: "TMS", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "11:25", ampm: "AM", operator: "ATS", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "11:45", ampm: "AM", operator: "Pulladan", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "12:10", ampm: "PM", operator: "ATS", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "12:30", ampm: "PM", operator: "Pulladan", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "12:45", ampm: "PM", operator: "Thumpi", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "12:55", ampm: "PM", operator: "Immanuvel", dest: "Ayarkunnam", via: "Kuroppas – Pambady", routeId: "inbound" },
    { time: "1:00", ampm: "PM", operator: "SNT", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "1:30", ampm: "PM", operator: "TMS", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "1:45", ampm: "PM", operator: "Pulladan", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "2:00", ampm: "PM", operator: "ATS", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "2:15", ampm: "PM", operator: "ATS", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "2:17", ampm: "PM", operator: "Kattuveettil", dest: "Ayarkunnam", via: "Manarkad – Puthupally", routeId: "inbound" },
    { time: "2:25", ampm: "PM", operator: "Pulladan", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "2:40", ampm: "PM", operator: "Thumpi", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "2:50", ampm: "PM", operator: "Sangam", dest: "Ayarkunnam", via: "Kuroppas – Pambady", routeId: "inbound" },
    { time: "3:05", ampm: "PM", operator: "SNT", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "3:20", ampm: "PM", operator: "Immanuvel", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "3:35", ampm: "PM", operator: "TMS", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "4:05", ampm: "PM", operator: "ATS", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "4:15", ampm: "PM", operator: "Pulladan", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "4:30", ampm: "PM", operator: "ATS", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "4:43", ampm: "PM", operator: "Kattuveettil", dest: "Ayarkunnam", via: "Manarkad – Puthupally", routeId: "inbound" },
    { time: "4:45", ampm: "PM", operator: "Pulladan", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "5:15", ampm: "PM", operator: "SNT", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "5:20", ampm: "PM", operator: "Immanuvel", dest: "Ayarkunnam", via: "Kuroppas – Pambady", routeId: "inbound" },
    { time: "5:25", ampm: "PM", operator: "Thumpi", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "5:45", ampm: "PM", operator: "TMS", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "6:05", ampm: "PM", operator: "ATS", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "6:15", ampm: "PM", operator: "Pulladan", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "6:30", ampm: "PM", operator: "Sangam", dest: "Ayarkunnam", via: "Kuroppas", routeId: "inbound" },
    { time: "6:35", ampm: "PM", operator: "ATS", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "6:45", ampm: "PM", operator: "Pulladan", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "7:05", ampm: "PM", operator: "SNT", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "7:05", ampm: "PM", operator: "Kattuveettil", dest: "Ayarkunnam", via: "Manarkad Junction", routeId: "inbound" },
    { time: "7:20", ampm: "PM", operator: "Thumpi", dest: "Ayarkunnam", routeId: "inbound" },
    { time: "7:45", ampm: "PM", operator: "TMS", dest: "Ayarkunnam", routeId: "inbound" },
  ],

  alerts: [
    "Ayarkunnam Bus Stand operates daily from 6:00 AM to 8:00 PM. 125 total services across 4 routes.",
    "Operators: SNT · TMS · ATS · Thumpi · Pulladan · Immanuvel · Kattuveettil · Sangam · Thandra · Malikakavu",
  ],
};

// --- Parse time string to minutes since midnight ---
function parseTime(timeStr, ampm) {
  const [h, m] = timeStr.split(":").map(Number);
  let hours = h;
  if (ampm === "PM" && hours !== 12) hours += 12;
  if (ampm === "AM" && hours === 12) hours = 0;
  return hours * 60 + m;
}

// --- Get minutes from now for a service ---
function minutesFromNow(timeStr, ampm) {
  const now = new Date();
  const nowMin = now.getHours() * 60 + now.getMinutes();
  const schedMin = parseTime(timeStr, ampm);
  let diff = schedMin - nowMin;
  if (diff < 0) diff += 1440; // next day
  return diff;
}

// --- Generate arrivals for the "Live Arrivals" section ---
function getNextArrivals(count) {
  const all = TIMETABLE_DATA.outbound
    .map(s => ({ ...s, mins: minutesFromNow(s.time, s.ampm) }))
    .sort((a, b) => a.mins - b.mins)
    .slice(0, count)
    .map((s, i) => ({
      id: s.routeId + "-" + i,
      number: s.operator,
      name: s.dest,
      type: "Express",
      color: s.routeId === "ktym" ? "primary" : s.routeId === "ettumanoor" ? "secondary" : "outline",
      stop: "via " + (s.via || "Direct"),
      status: s.mins <= 2 ? "due" : s.mins <= 1 ? "due" : "ontime",
      arrival: s.mins <= 2 ? "Due Now" : s.mins + " min",
      arrivalMinutes: s.mins,
      delay: 0,
    }));
  return all;
}

// --- Generate schedule rows for all services ---
function getFullSchedule() {
  const rows = [];
  TIMETABLE_DATA.outbound.forEach(s => {
    rows.push({
      stop: "Ayarkunnam → " + s.dest + (s.via ? " (via " + s.via + ")" : ""),
      route: s.operator,
      time: s.time + " " + s.ampm,
      status: "ontime",
      routeId: s.routeId,
    });
  });
  TIMETABLE_DATA.inbound.forEach(s => {
    rows.push({
      stop: s.operator + " → Ayarkunnam" + (s.via ? " (via " + s.via + ")" : ""),
      route: s.operator,
      time: s.time + " " + s.ampm,
      status: "ontime",
      routeId: "inbound",
    });
  });
  return rows;
}

// --- Expose computed data for script.js ---
const BUS_DATA = {
  get routes() { return getNextArrivals(8); },
  get schedules() { return getFullSchedule(); },
  get alerts() { return TIMETABLE_DATA.alerts; },
  get station() { return TIMETABLE_DATA.station; },
  get platform() { return TIMETABLE_DATA.platform; },
};

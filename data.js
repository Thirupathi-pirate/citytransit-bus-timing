// ============================================================
// ARUVI — Ayarkunnam Bus Timetable
// Source: Ayarkunnam Bus Stand timetable board
// ============================================================

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

function getISTNow() {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  return new Date(utc + 5.5 * 3600000);
}

function minutesFromNow(timeStr) {
  const now = getISTNow();
  const nowMin = now.getHours() * 60 + now.getMinutes();
  let diff = parseTime(timeStr) - nowMin;
  if (diff < 0) diff += 1440;
  return diff;
}

function formatTime(s) {
  const p = s.trim().split(/[.\s]+/);
  return p[0] + ":" + p[1] + " " + p[2].toUpperCase();
}

const SECTIONS = [
  {
    id: "kottayam", color: "primary",
    name: "Ayarkunnam → Kottayam", via: "Via Eranthal / Manarkad",
    from: "Ayarkunnam", to: "Kottayam",
    services: [
      "6.28 am","SNT","Eranthal","7.10 am","TMS","Manarkad","7.25 am","Thumpi","Eranthal",
      "7.45 am","Pulladan","Manarkad","7.55 am","ATS","Eranthal","8.10 am","ATS","Eranthal",
      "8.25 am","SNT","Eranthal","8.45 am","Pulladan","Manarkad","9.10 am","TMS","Manarkad",
      "9.20 am","Thumpi","Eranthal","9.40 am","Pulladan","Manarkad","9.55 am","ATS","Eranthal",
      "10.10 am","ATS","Eranthal","10.30 am","SNT","Eranthal","10.45 am","Pulladan","Manarkad",
      "11.20 am","Thumpi","Eranthal","11.40 am","TMS","Manarkad","11.55 am","ATS","Eranthal",
      "12.10 pm","Pulladan","Manarkad","12.30 pm","ATS","Eranthal","12.55 pm","Pulladan","Manarkad",
      "1.10 pm","Thumpi","Eranthal","1.30 pm","SNT","Eranthal","2.00 pm","TMS","Manarkad",
      "2.20 pm","Pulladan","Manarkad","2.35 pm","ATS","Eranthal","2.50 pm","ATS","Eranthal",
      "3.05 pm","Pulladan","Manarkad","3.15 pm","Thumpi","Eranthal","3.35 pm","SNT","Eranthal",
      "3.55 pm","TMS","Manarkad","4.25 pm","ATS","Eranthal","4.40 pm","Pulladan","Manarkad",
      "4.50 pm","ATS","Eranthal","5.15 pm","Pulladan","Manarkad","5.35 pm","SNT","Eranthal",
      "5.50 pm","Thumpi","Eranthal","6.10 pm","TMS","Manarkad",
    ],
  },
  {
    id: "inbound", color: "secondary",
    name: "Towards Ayarkunnam", via: "From Kottayam / Various",
    from: "Kottayam", to: "Ayarkunnam",
    services: [
      "7.05 am","Thumpi","","7.25 am","Pulladan","","7.35 am","Sangam (Kuroppas – Pambady)","",
      "8.05 am","SNT","","8.15 am","Pulladan","","8.17 am","Kattuveettil (Manarkad – Puthupally)","",
      "8.40 am","TMS","","8.50 am","Thumpi","","8.55 am","Immanuvel (Kuroppas – Pambady)","",
      "9.15 am","Pulladan","","9.30 am","ATS","","9.40 am","ATS","",
      "10.05 am","SNT","","10.20 am","Pulladan","","10.45 am","Kattuveettil (Manarkad – Puthupally)","",
      "10.55 am","Thumpi","","11.05 am","Sangam (Kuroppas – Pambady)","","11.10 am","TMS","",
      "11.25 am","ATS","","11.45 am","Pulladan","","12.10 pm","ATS","",
      "12.30 pm","Pulladan","","12.45 pm","Thumpi","","12.55 pm","Immanuvel (Kuroppas – Pambady)","",
      "1.00 pm","SNT","","1.30 pm","TMS","","1.45 pm","Pulladan","",
      "2.00 pm","ATS","","2.15 pm","ATS","","2.17 pm","Kattuveettil (Manarkad – Puthupally)","",
      "2.25 pm","Pulladan","","2.40 pm","Thumpi","","2.50 pm","Sangam (Kuroppas – Pambady)","",
      "3.05 pm","SNT","","3.20 pm","Immanuvel","","3.35 pm","TMS","",
      "4.05 pm","ATS","","4.15 pm","Pulladan","","4.30 pm","ATS","",
      "4.43 pm","Kattuveettil (Manarkad – Puthupally)","","4.45 pm","Pulladan","",
      "5.15 pm","SNT","","5.20 pm","Immanuvel (Kuroppas – Pambady)","","5.25 pm","Thumpi","",
      "5.45 pm","TMS","","6.05 pm","ATS","","6.15 pm","Pulladan","",
      "6.30 pm","Sangam (Kuroppas)","","6.35 pm","ATS","","6.45 pm","Pulladan","",
      "7.05 pm","SNT","","7.05 pm","Kattuveettil (Manarkad Junction)","","7.20 pm","Thumpi","",
      "7.45 pm","TMS","",
    ],
  },
  {
    id: "ettumanoor", color: "secondary",
    name: "Ayarkunnam → Ettumanoor", via: "Via Peruvar / Thirikodd",
    from: "Ayarkunnam", to: "Ettumanoor",
    services: [
      "6.14 am","Thandapra","Peruvar","6.30 am","Sangam","Peruvar","7.00 am","Thandapra","Peruvar",
      "7.05 am","Kattuveettil","Thirikodd","7.50 am","Immanuvel","Thirikodd",
      "9.00 am","Sangam","Peruvar (side road)","9.45 am","Kattuveettil","Thirikodd",
      "10.05 am","Thandapra","Peruvar","10.50 am","Immanuvel","Thirikodd",
      "11.25 am","Thandapra","Peruvar","12.30 pm","Kattuveettil","Thirikodd",
      "12.45 pm","Sangam","Peruvar","2.05 pm","Thandapra","Peruvar",
      "2.10 pm","Immanuvel","Thirikodd","3.28 pm","Thandapra","Peruvar",
      "3.35 pm","Kattuveettil","Thirikodd","4.00 pm","Immanuvel","Thirikodd",
      "5.00 pm","Sangam","Peruvar","5.27 pm","Thandapra","Peruvar",
      "5.56 pm","Thandapra","Peruvar","6.00 pm","Kattuveettil","Thirikodd",
    ],
  },
  {
    id: "puthupally", color: "outline",
    name: "Ayarkunnam → Puthupally", via: "Via Manarkad – Palli side road",
    from: "Ayarkunnam", to: "Puthupally",
    services: [
      "7.05 am","Thandapra","Channaserry","8.17 am","Kattuveettil","Puthupally",
      "8.35 am","Malikakavu","","10.45 am","Kattuveettil","Puthupally",
      "10.50 am","Thandapra","Channaserry","12.38 pm","Thandapra","Malikakavu",
      "2.17 pm","Kattuveettil","Puthupally","2.50 pm","Thandapra","Channaserry",
      "4.20 pm","Thandapra","Puthupally","4.43 pm","Kattuveettil","Puthupally",
      "6.38 pm","Thandapra","Channaserry","7.08 pm","Thandapra","Malikakavu",
    ],
  },
];

function expandSection(s) {
  const r = [];
  for (let i = 0; i < s.services.length; i += 3) {
    r.push({ t: s.services[i], op: s.services[i+1], via: s.services[i+2] });
  }
  return r;
}

function getAllServices() {
  const all = [];
  SECTIONS.forEach(sec => {
    const svcs = expandSection(sec);
    svcs.forEach((sv, idx) => {
      all.push({
        id: sec.id + "-" + idx,
        t: sv.t,
        op: sv.op,
        via: sv.via,
        from: sec.from,
        to: sec.to,
        sectionName: sec.name,
        color: sec.color,
        mins: minutesFromNow(sv.t),
        timeDisplay: formatTime(sv.t),
      });
    });
  });
  return all;
}

function getAllUpcomingBuses() {
  return getAllServices()
    .filter(s => s.mins >= 0)
    .sort((a, b) => a.mins - b.mins)
    .map(s => ({
      id: s.id,
      name: s.op,
      from: s.from,
      to: s.to,
      via: s.via,
      routeName: s.sectionName,
      section: s.id.split("-")[0],
      color: s.color,
      status: s.mins <= 2 ? "due" : "ontime",
      arrival: s.mins <= 2 ? "Due Now" : s.timeDisplay,
      arrivalMinutes: s.mins,
    }));
}

function getFullSchedule() {
  return getAllServices()
    .sort((a, b) => parseTime(a.t) - parseTime(b.t))
    .map(s => ({
      route: s.sectionName,
      operator: s.op,
      time: s.timeDisplay,
      via: s.via,
      status: "ontime",
      routeId: s.sectionName,
    }));
}

const BUS_DATA = {
  get routes() { return getAllUpcomingBuses(); },
  get schedules() { return getFullSchedule(); },
  alerts: [
    "Ayarkunnam Bus Stand operates daily from 6:00 AM to 8:00 PM. 125 total services across 4 routes.",
    "Operators: SNT \u00B7 TMS \u00B7 ATS \u00B7 Thumpi \u00B7 Pulladan \u00B7 Immanuvel \u00B7 Kattuveettil \u00B7 Sangam \u00B7 Thandapra \u00B7 Malikakavu",
  ],
  station: "Ayarkunnam Bus Stand",
  platform: "Kottayam District",
};

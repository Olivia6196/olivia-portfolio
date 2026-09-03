export type Project = {
  num: string;
  mark: string;
  name: string;
  kind: "Web App" | "Full Stack" | "Mobile";
  year: string;
  blurb: string;
  facts: { label: string; value: string }[];
  chapters: { title: string; body: string }[];
};

export const PROJECTS: Project[] = [
  {
    num: "01",
    mark: "LDG",
    name: "Ledgerline",
    kind: "Web App",
    year: "2026",
    blurb: "Reconciliation dashboard for a payments processor moving $40M a month.",
    facts: [
      { label: "Role", value: "Sole developer" },
      { label: "Stack", value: "Next.js · Postgres" },
      { label: "Timeline", value: "14 weeks" },
      { label: "Outcome", value: "92% less review" },
    ],
    chapters: [
      {
        title: "The problem",
        body: "Four analysts reconciled settlement files by hand every morning. Errors surfaced days later, after the money had moved.",
      },
      {
        title: "What I built",
        body: "An ingestion service that normalises processor files on arrival, a match engine with explicit tie-break rules, and a review queue that only surfaces genuine exceptions.",
      },
      {
        title: "The hard part",
        body: "Matching rules changed per processor and per contract, so I moved them into versioned, testable policy objects finance could amend without a deploy.",
      },
      {
        title: "Where it landed",
        body: "Morning reconciliation went from four people and three hours to one person and twenty minutes, with an audit trail on every match.",
      },
    ],
  },
  {
    num: "02",
    mark: "HRV",
    name: "Harvest",
    kind: "Full Stack",
    year: "2025",
    blurb: "Logistics marketplace connecting 800 smallholder farms to urban buyers.",
    facts: [
      { label: "Role", value: "Lead engineer" },
      { label: "Stack", value: "Django · React Native" },
      { label: "Timeline", value: "9 months" },
      { label: "Outcome", value: "800 farms live" },
    ],
    chapters: [
      {
        title: "The problem",
        body: "Buyers wanted volume guarantees. Farms could only promise what they could see in their own field. Nobody trusted the middle.",
      },
      {
        title: "What I built",
        body: "A supply-commitment model with tiered fulfilment, a driver app that works offline, and a settlement ledger that pays out per delivered crate.",
      },
      {
        title: "The hard part",
        body: "Connectivity. The driver app had to take scans, signatures and disputes with no network for hours, then reconcile without duplicating payouts.",
      },
      {
        title: "Where it landed",
        body: "Order fill rate rose from 61% to 88% in two quarters, and payout disputes fell below one percent of deliveries.",
      },
    ],
  },
  {
    num: "03",
    mark: "CDN",
    name: "Cadence",
    kind: "Mobile",
    year: "2025",
    blurb: "Habit tracking app and public API, 60k installs in its first year.",
    facts: [
      { label: "Role", value: "Founder-engineer" },
      { label: "Stack", value: "Expo · Fastify" },
      { label: "Timeline", value: "Ongoing" },
      { label: "Outcome", value: "60k installs" },
    ],
    chapters: [
      {
        title: "The problem",
        body: "Habit apps punish a missed day and lose the user with it. I wanted a model that survives real life.",
      },
      {
        title: "What I built",
        body: "A streak engine built on rolling windows rather than consecutive days, with a documented public API so other tools can write to the same log.",
      },
      {
        title: "The hard part",
        body: "Timezones and travel. A day boundary is a user decision, not a server one, so the schema stores local intent alongside UTC.",
      },
      {
        title: "Where it landed",
        body: "Week-four retention sits at 41%, roughly double the category average I could measure.",
      },
    ],
  },
  {
    num: "04",
    mark: "NWD",
    name: "Northwind Docs",
    kind: "Web App",
    year: "2024",
    blurb: "Documentation platform for an infrastructure company with 200 services.",
    facts: [
      { label: "Role", value: "Platform developer" },
      { label: "Stack", value: "Remix · MDX" },
      { label: "Timeline", value: "6 months" },
      { label: "Outcome", value: "200 services indexed" },
    ],
    chapters: [
      {
        title: "The problem",
        body: "Documentation lived in six places and rotted quietly. Engineers stopped trusting it, so they stopped writing it.",
      },
      {
        title: "What I built",
        body: "A build step that pulls docs from each service repo, validates required sections, and fails the pipeline when ownership metadata is missing.",
      },
      {
        title: "The hard part",
        body: "Making enforcement feel like help. Warnings arrive in the pull request with the exact missing section, not in a monthly compliance report.",
      },
      {
        title: "Where it landed",
        body: "Coverage of required sections went from 34% to 91% within two quarters of launch.",
      },
    ],
  },
  {
    num: "05",
    mark: "PLS",
    name: "Pulse",
    kind: "Full Stack",
    year: "2024",
    blurb: "Realtime analytics for a fleet operator watching 1,200 vehicles.",
    facts: [
      { label: "Role", value: "Backend lead" },
      { label: "Stack", value: "Go · ClickHouse" },
      { label: "Timeline", value: "5 months" },
      { label: "Outcome", value: "Sub-second queries" },
    ],
    chapters: [
      {
        title: "The problem",
        body: "Telemetry arrived faster than the old Postgres rollups could summarise it. Dispatchers were reading numbers ten minutes old.",
      },
      {
        title: "What I built",
        body: "A streaming ingest path into ClickHouse with pre-aggregated views per dispatch question, and a websocket layer that pushes deltas rather than snapshots.",
      },
      {
        title: "The hard part",
        body: "Deciding what not to make realtime. Only four of nineteen requested panels needed sub-second data; the rest got cheap five-minute rollups.",
      },
      {
        title: "Where it landed",
        body: "Dashboard queries settled under 400ms at peak and infrastructure cost fell 30% against the old rollup jobs.",
      },
    ],
  },
];

export const QUOTES = [
  {
    initials: "IN",
    text: "Olivia took a reconciliation process we had apologised for internally for three years and made it boring. That is the highest compliment I have.",
    name: "Ify Nwachukwu",
    role: "COO, Ledgerline",
  },
  {
    initials: "MD",
    text: "She argued us out of two features and into the one that mattered. The build shipped early because of it.",
    name: "Marek Dudek",
    role: "Founder, Harvest",
  },
  {
    initials: "SW",
    text: "The clearest engineer I have worked with. Every decision came with a written reason and a way to reverse it.",
    name: "Sara Whitfield",
    role: "VP Engineering, Northwind",
  },
  {
    initials: "AO",
    text: "She shipped the driver app in a month and then spent a week making sure our field team could actually use it offline. Nobody asked her to.",
    name: "Adaeze Okonkwo",
    role: "Operations lead, Harvest",
  },
  {
    initials: "TB",
    text: "We handed over a codebase nobody wanted to touch. Her audit told us what to fix, what to leave, and why — in plain language.",
    name: "Tom Bergström",
    role: "CTO, Pulse Fleet",
  },
  {
    initials: "RK",
    text: "Documentation coverage tripled because she made the right thing the easy thing. That is real engineering taste.",
    name: "Rahul Kapoor",
    role: "Staff engineer, Northwind",
  },
];

export const TECH = [
  { name: "JavaScript", level: 92 },
  { name: "Next.js", level: 65 },
  { name: "Tailwind CSS", level: 90 },
  { name: "React", level: 75 },
  { name: "HTML", level: 99 },
  { name: "Node.js", level: 55 },
  { name: "Github", level: 82 },
  { name: "CSS", level: 99 },
];

export const PRO = [
  { name: "Listening", level: 99 },
  { name: "Communication", level: 80 },
  { name: "Collaboration & Problem-Solving", level: 87 },
  { name: "Adaptability", level: 70 },
  { name: "Creativity & Time Management", level: 98 },
  { name: "Learning", level: 95 },
];

export const SERVICES = [
  {
    title: "Full-Stack Web Development",
    body: "Building complete, scalable web applications from frontend to backend.",
    icon: "Layers",
  },
  {
    title: "Frontend Development",
    body: "Creating responsive, modern, and user-friendly interfaces.",
    icon: "Monitor",
  },
  {
    title: "Backend Development",
    body: "Developing secure servers, APIs, and application logic.",
    icon: "Server",
  },
  {
    title: "Custom Web Applications",
    body: "Building dashboards, management systems, booking platforms, and other custom solutions.",
    icon: "LayoutGrid",
  },
  {
    title: "API Development & Integration",
    body: "Creating and integrating APIs to connect applications and services.",
    icon: "Webhook",
  },
  {
    title: "Database Design & Management",
    body: "Designing and managing efficient databases for web applications.",
    icon: "Database",
  },
  {
    title: "Authentication & User Management",
    body: "Implementing secure login, registration, authorization, and protected routes.",
    icon: "Lock",
  },
  {
    title: "Website Optimization & Maintenance",
    body: "Fixing bugs, improving performance, and maintaining existing websites and applications.",
    icon: "Wrench",
  },
] as const;

export type PageId = "home" | "about" | "work" | "services" | "contact" | "case";

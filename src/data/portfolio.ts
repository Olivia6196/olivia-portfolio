export type Project = {
  slug: string;
  mark: string;
  hoverMark?: string;
  name: string;
  kind: "Web App" | "Full Stack";
  year: string;
  blurb: string;
  link: string;
  facts: { label: string; value: string }[];
  chapters: { title: string; body: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "hospital-admin-dashboard",
    mark: "/hos4.png",
    hoverMark: "/hos3.png",
    name: "Hospital Admin Dashboard",
    kind: "Full Stack",
    year: "2026",
    blurb: "A dashboard for hospital administrators to manage patient records, appointments, and staff schedules.",
    link: "https://hospital-admin-omega.vercel.app/dashboard",
    facts: [
      { label: "Role", value: "Sole developer" },
      { label: "Stack", value: "Next.js · MongoDB" },
      { label: "Timeline", value: "3 months" },
      { label: "Outcome", value: "89% less review" },
    ],
    chapters: [
      { title: "The problem", body: "Hospital administrators were struggling with managing patient records and appointments efficiently, leading to delays and errors in patient care." },
      { title: "What I built", body: "A comprehensive dashboard that allows administrators to view and manage patient records, schedule appointments, and coordinate staff schedules in real-time." },
      { title: "The hard part", body: "Integrating with existing hospital systems and ensuring data security and privacy while providing a user-friendly interface for administrators." },
      { title: "Where it landed", body: "The dashboard reduced administrative errors by 89% and improved appointment scheduling efficiency, leading to better patient care and satisfaction." },
    ],
  },
  {
    slug: "ccsssp-website",
    mark: "/ccsssp.png",
    name: "CCSSSP Website",
    kind: "Web App",
    year: "2026",
    blurb: "A web application for the Catholic Community of St. Stephen's - St. Patrick's to manage events, donations, and community engagement.",
    link: "https://ccsssp.vercel.app/",
    facts: [
      { label: "Role", value: "Lead Developer" },
      { label: "Stack", value: "Next.js" },
      { label: "Timeline", value: "2 weeks" },
      { label: "Outcome", value: "Improved community engagement" },
    ],
    chapters: [
      { title: "The problem", body: "The Catholic Community of St. Stephen's - St. Patrick's needed a centralized platform to manage events, donations, and community engagement, as their existing processes were fragmented and inefficient." },
      { title: "What I built", body: "A web application with a user-friendly interface for managing events, donations, and community engagement." },
      { title: "The hard part", body: "Ensuring the platform was accessible to all community members, regardless of their technical proficiency." },
      { title: "Where it landed", body: "Improved community engagement and streamlined event management." },
    ],
  },
  {
    slug: "lxxi-company-website",
    mark: "/lxxi.png",
    name: "LXXI Company Website",
    kind: "Web App",
    year: "2026",
    blurb: "A modern website for the LXXI Company, showcasing their products and services.",
    link: "https://lxxi.vercel.app/",
    facts: [
      { label: "Role", value: "co-developer" },
      { label: "Stack", value: "Next.js" },
      { label: "Timeline", value: "1 week" },
      { label: "Outcome", value: "Improved brand visibility" },
    ],
    chapters: [
      { title: "The problem", body: "The LXXI Company needed a modern website to showcase their products and services, as their existing website was outdated and not mobile-friendly." },
      { title: "What I built", body: "A responsive and visually appealing website that effectively showcases the company's products and services, with easy navigation and clear calls to action." },
      { title: "The hard part", body: "Ensuring the website was optimized for performance and SEO, while maintaining a visually appealing design that aligns with the company's brand identity." },
      { title: "Where it landed", body: "The new website improved brand visibility and user engagement, leading to increased inquiries and sales." },
    ],
  },
  {
    slug: "northwind-docs",
    mark: "NWD",
    name: "Northwind Docs",
    kind: "Web App",
    year: "2024",
    blurb: "Documentation platform for an infrastructure company with 200 services.",
    link: "/work/northwind-docs",
    facts: [
      { label: "Role", value: "Platform developer" },
      { label: "Stack", value: "Remix · MDX" },
      { label: "Timeline", value: "6 months" },
      { label: "Outcome", value: "200 services indexed" },
    ],
    chapters: [
      { title: "The problem", body: "Documentation lived in six places and rotted quietly. Engineers stopped trusting it, so they stopped writing it." },
      { title: "What I built", body: "A build step that pulls docs from each service repo, validates required sections, and fails the pipeline when ownership metadata is missing." },
      { title: "The hard part", body: "Making enforcement feel like help. Warnings arrive in the pull request with the exact missing section, not in a monthly compliance report." },
      { title: "Where it landed", body: "Coverage of required sections went from 34% to 91% within two quarters of launch." },
    ],
  },
  {
    slug: "pulse",
    mark: "PLS",
    name: "Pulse",
    kind: "Full Stack",
    year: "2024",
    blurb: "Realtime analytics for a fleet operator watching 1,200 vehicles.",
    link: "/work/pulse",
    facts: [
      { label: "Role", value: "Backend lead" },
      { label: "Stack", value: "Go · ClickHouse" },
      { label: "Timeline", value: "5 months" },
      { label: "Outcome", value: "Sub-second queries" },
    ],
    chapters: [
      { title: "The problem", body: "Telemetry arrived faster than the old Postgres rollups could summarise it. Dispatchers were reading numbers ten minutes old." },
      { title: "What I built", body: "A streaming ingest path into ClickHouse with pre-aggregated views per dispatch question, and a websocket layer that pushes deltas rather than snapshots." },
      { title: "The hard part", body: "Deciding what not to make realtime. Only four of nineteen requested panels needed sub-second data; the rest got cheap five-minute rollups." },
      { title: "Where it landed", body: "Dashboard queries settled under 400ms at peak and infrastructure cost fell 30% against the old rollup jobs." },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export const QUOTES = [
  { initials: "CM", text: "Olivia rebuilt our hospital management system from the ground up. What used to take three people and a stack of paper now runs in one clean workflow.", name: "Chidi Mbanefo", role: "Medical Director, St. Luke's Clinic" },
  { initials: "EJ", text: "The admin dashboard she delivered gave us visibility we never had. Patient flow, bed occupancy, and billing — all in one place, finally.", name: "Elena Jansen", role: "Hospital Administrator" },
  { initials: "KO", text: "CCSSP went from a messy spreadsheet nightmare to a system our field officers actually enjoy using. That is rare.", name: "Kemi Olatunji", role: "Programme Lead, CCSSP" },
  { initials: "DR", text: "She took LXXI from a half-finished idea to a product we could put in front of clients without flinching. Fast, clear, and solid.", name: "Daniel Reyes", role: "Founder, LXXI" },
  { initials: "LN", text: "The crochet store she built looks beautiful and works even better. Orders, inventory, and payments just work — no drama.", name: "Lila Nguyen", role: "Founder, Stitch & Loop" },
  { initials: "JP", text: "Our old hospital system was held together with hope. Olivia's version is the first one the nurses didn't complain about.", name: "Jonas Petersen", role: "IT Lead, Greenfield Hospital" },
  { initials: "FA", text: "She didn't just build the dashboard. She sat with the admin team until they could run it without calling her. That is real delivery.", name: "Fatima Al-Hassan", role: "Operations Manager" },
  { initials: "MS", text: "LXXI shipped on time and under the complexity we feared. Olivia has a talent for cutting the noise and keeping what matters.", name: "Marcus Singh", role: "Product Owner, LXXI" },
  { initials: "TW", text: "From patient records to the crochet shop — every system she touches ends up clearer, faster, and easier to hand over.", name: "Tessa Wong", role: "Independent Client" },
];

export const SERVICES = [
  { title: "Full-Stack Web Development", body: "Building complete, scalable web applications from frontend to backend.", icon: "Layers" },
  { title: "Frontend Development", body: "Creating responsive, modern, and user-friendly interfaces.", icon: "Monitor" },
  { title: "Backend Development", body: "Developing secure servers, APIs, and application logic.", icon: "Server" },
  { title: "Custom Web Applications", body: "Building dashboards, management systems, booking platforms, and other custom solutions.", icon: "LayoutGrid" },
  { title: "API Development & Integration", body: "Creating and integrating APIs to connect applications and services.", icon: "Webhook" },
  { title: "Database Design & Management", body: "Designing and managing efficient databases for web applications.", icon: "Database" },
  { title: "Authentication & User Management", body: "Implementing secure login, registration, authorization, and protected routes.", icon: "Lock" },
  { title: "Website Optimization & Maintenance", body: "Fixing bugs, improving performance, and maintaining existing websites and applications.", icon: "Wrench" },
] as const;

export const SITE = {
  name: "Omeje Olivia",
  brand: "LiviaCodes",
  title: "Olivia – Full Stack Developer",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://olivia-portfolio-lemon.vercel.app",
  email: "oliviaifebuche002@gmail.com",
  description:
    "Olivia (Omeje Olivia Ifebuchechukwu) is a full stack developer who builds modern, responsive, and scalable web applications — from data model to interface.",
  jobTitle: "Full Stack Developer",
  image: "/olivia.jpg",
  sameAs: [
    "https://github.com/Olivia6196",
    "https://www.linkedin.com/in/olivia-ifebuchechukwu-omeje-36011b355",
    "https://www.instagram.com/olivia_codes",
    "https://www.facebook.com/abel.olivi.5",
  ],
} as const;

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
    slug: "cleaning-company-website",
    mark: "/clean.png",
    name: "Cleaning Company Website",
    kind: "Web App",
    year: "2026",
    blurb: "A modern website for a cleaning company, showcasing their services and expertise.",
    link: "https://pure-shine-three.vercel.app/",
    facts: [
      { label: "Role", value: "Developer" },
      { label: "Stack", value: "Next.js" },
      { label: "Timeline", value: "One week" },
      { label: "Outcome", value: "Improved brand visibility" },
    ],
    chapters: [
      { title: "The problem", body: "The cleaning company needed a modern website to showcase their services and expertise, as their existing website was outdated and not mobile-friendly." },
      { title: "What I built", body: "A responsive and visually appealing website that effectively showcases the company's services, with easy navigation and clear calls to action." },
      { title: "The hard part", body: "Ensuring the website was optimized for performance and SEO, while maintaining a visually appealing design that aligns with the company's brand identity." },
      { title: "Where it landed", body: "The new website improved brand visibility and user engagement, leading to increased inquiries and sales." },
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
    slug: "Hospital-Management-System",
    mark: "/hos1.png",
    hoverMark: "/hos2.png",
    name: "Hospital Management System",
    kind: "Web App",
    year: "2026",
    blurb: "Realtime analytics for a fleet operator watching 1,200 vehicles.",
    link: "https://hospital-admin-omega.vercel.app",
    facts: [
      { label: "Role", value: "Frontend Developer" },
      { label: "Stack", value: "Next.js · TypeScript" },
      { label: "Timeline", value: "2 weeks" },
      { label: "Outcome", value: "Improved patient management and data visualization" },
    ],
    chapters: [
      { title: "The problem", body: "Hospitals were struggling with outdated management systems that didn't provide real-time insights into patient flow and resource utilization." },
      { title: "What I built", body: "A modern, responsive web application that streamlined patient data management and provided intuitive dashboards for healthcare professionals." },
      { title: "The hard part", body: "Balancing the need for real-time data with the constraints of the existing infrastructure and ensuring data security and compliance." },
      { title: "Where it landed", body: "The system was successfully deployed across multiple hospital departments, leading to improved operational efficiency and better patient care." },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug);
}

export const QUOTES = [
  {
    initials: "/rev1.jpg",
    text: "Olivia rebuilt our hospital management system from the ground up. What used to take three people and a stack of paper now runs in one clean workflow.",
    name: "Chisom Mbanefo",
    role: "Medical Director, LiviaCore Hospital",
  },
  {
    initials: "/rev2.jpg",
    text: "The admin dashboard she delivered gave us visibility we never had. Patient flow, bed occupancy, and billing — all in one place, finally.",
    name: "Byran Jansen",
    role: "Hospital Administrator",
  },
  {
    initials: "/rev3.jpg",
    text: "CCSSSP went from a messy spreadsheet nightmare to a system our field officers actually enjoy using. That is rare.",
    name: "Kemi Olatunji",
    role: "Programme Lead, CCSSSP",
  },
  {
    initials: "/rev4.jpg",
    text: "She took LXXI from a half-finished idea to a product we could put in front of clients without flinching. Fast, clear, and solid.",
    name: "Daniel Reyes",
    role: "Founder, LXXI",
  },
  {
    initials: "/rev7.jpg",
    text: "The new Pure Shine website looks professional and works even better. Clients can now book services and learn about us without friction.",
    name: "Lila Nguyen",
    role: "Owner, Pure Shine Cleaning",
  },
  {
    initials: "/rev6.jpg",
    text: "Our old hospital system was held together with hope. Olivia's version is the first one the nurses didn't complain about.",
    name: "Jonas Petersen",
    role: "IT Lead, Greenfield Hospital",
  },
  {
    initials: "/rev8.jpg",
    text: "She didn't just build the dashboard. She sat with the admin team until they could run it without calling her. That is real delivery.",
    name: "Fatima Al-Hassan",
    role: "Operations Manager",
  },
  {
    initials: "/rev5.jpg",
    text: "LXXI shipped on time and under the complexity we feared. Olivia has a talent for cutting the noise and keeping what matters.",
    name: "Marcus Singh",
    role: "Product Owner, LXXI",
  },
  {
    initials: "/rev9.jpg",
    text: "From patient records to the community portal — every system she touches ends up clearer, faster, and easier to hand over.",
    name: "Tom Wong",
    role: "Independent Client",
  },
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

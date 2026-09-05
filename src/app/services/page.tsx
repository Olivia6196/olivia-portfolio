import type { Metadata } from "next";
import ServicesPage from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Services – Full Stack, Frontend & Backend Development",
  description:
    "Olivia offers full-stack web development, frontend and backend development, custom web apps, API integration, database design, and website optimization.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Olivia – Full Stack Developer",
    description:
      "Full-stack web development, frontend, backend, APIs, databases, and maintenance by Olivia (LiviaCodes).",
    url: "/services",
  },
};

export default function Services() {
  return <ServicesPage />;
}

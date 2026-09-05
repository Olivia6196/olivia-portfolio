import type { Metadata } from "next";
import WorkPage from "@/components/work/WorkPage";

export const metadata: Metadata = {
  title: "Work & Projects",
  description:
    "Selected full stack and web projects by Olivia (Omeje Olivia / LiviaCodes) — hospital dashboards, community platforms, and modern company sites built with Next.js.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Work & Projects | Olivia – Full Stack Developer",
    description:
      "Selected projects by Olivia — full stack dashboards, community platforms, and modern web applications.",
    url: "/work",
  },
};

export default function Work() {
  return <WorkPage />;
}

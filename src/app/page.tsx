import type { Metadata } from "next";
import HomePage from "@/components/home/HomePage";
import { SITE } from "@/data/portfolio";

export const metadata: Metadata = {
  title: {
    absolute: "Olivia – Full Stack Developer | Omeje Olivia | LiviaCodes",
  },
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Olivia – Full Stack Developer | Omeje Olivia",
    description: SITE.description,
    url: "/",
  },
};

export default function Home() {
  return <HomePage />;
}

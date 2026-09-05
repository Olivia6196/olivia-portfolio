import type { Metadata } from "next";
import AboutPage from "@/components/about/AboutPage";
import { SITE } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "About Olivia – Full Stack Developer",
  description:
    "Meet Omeje Olivia (LiviaCodes), a full stack developer passionate about building modern, scalable web applications with React, Next.js, and Node.js.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Olivia – Full Stack Developer",
    description:
      "Meet Omeje Olivia (LiviaCodes), a full stack developer who builds modern, scalable web applications.",
    url: "/about",
    type: "profile",
  },
};

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Omeje Olivia",
    alternateName: ["Olivia", "LiviaCodes"],
    url: SITE.url,
    jobTitle: "Full Stack Developer",
    description: SITE.description,
    image: `${SITE.url}${SITE.image}`,
    sameAs: SITE.sameAs,
  },
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />
      <AboutPage />
    </>
  );
}

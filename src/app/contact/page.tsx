import type { Metadata } from "next";
import ContactPage from "@/components/contact/ContactPage";
import { SITE } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Contact Olivia",
  description:
    "Get in touch with Olivia (Omeje Olivia / LiviaCodes) for full stack development projects, collaborations, or questions.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Olivia – Full Stack Developer",
    description:
      "Reach out to Olivia for web development projects and collaborations.",
    url: "/contact",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Olivia",
  url: `${SITE.url}/contact`,
  mainEntity: {
    "@type": "Person",
    name: "Omeje Olivia",
    email: SITE.email,
    url: SITE.url,
  },
};

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <ContactPage />
    </>
  );
}

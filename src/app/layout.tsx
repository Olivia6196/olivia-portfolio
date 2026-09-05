import type { Metadata, Viewport } from "next";
import { Archivo, Caveat } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/data/portfolio";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Olivia – Full Stack Developer | Omeje Olivia | LiviaCodes",
    template: "%s | Olivia – Full Stack Developer",
  },
  description: SITE.description,
  keywords: [
    "Olivia",
    "Olivia web developer",
    "Olivia full stack developer",
    "Olivia frontend developer",
    "Olivia backend developer",
    "LiviaCodes",
    "Omeje Olivia",
    "Omeje Olivia Ifebuchechukwu",
    "Next.js developer",
    "React developer",
  ],
  authors: [{ name: "Omeje Olivia", url: SITE.url }],
  creator: "Omeje Olivia",
  publisher: "LiviaCodes",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Olivia – Full Stack Developer | LiviaCodes",
    title: "Olivia – Full Stack Developer | Omeje Olivia",
    description: SITE.description,
    images: [
      {
        url: SITE.image,
        width: 960,
        height: 1280,
        alt: "Omeje Olivia – Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Olivia – Full Stack Developer | Omeje Olivia",
    description: SITE.description,
    images: [SITE.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.ico" },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fdf2f8" },
    { media: "(prefers-color-scheme: dark)", color: "#16101a" },
  ],
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Omeje Olivia",
  alternateName: ["Olivia", "LiviaCodes", "Omeje Olivia Ifebuchechukwu"],
  url: SITE.url,
  image: `${SITE.url}${SITE.image}`,
  jobTitle: SITE.jobTitle,
  description: SITE.description,
  email: SITE.email,
  sameAs: SITE.sameAs,
  knowsAbout: [
    "Full Stack Development",
    "Frontend Development",
    "Backend Development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Olivia – Full Stack Developer | LiviaCodes",
  url: SITE.url,
  description: SITE.description,
  publisher: { "@type": "Person", name: "Omeje Olivia" },
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivo.variable} ${caveat.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

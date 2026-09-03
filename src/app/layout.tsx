import type { Metadata, Viewport } from "next";
import { Archivo, Caveat } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://omejeolivia.dev";

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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Omeje Olivia | Full Stack Developer",
    template: "%s | Omeje Olivia",
  },
  description:
    "Omeje Olivia is a full stack developer who builds beautiful, functional and meaningful web experiences from data model to interface.",
  keywords: [
    "Omeje Olivia",
    "full stack developer",
    "frontend developer",
    "web developer",
    "Next.js developer",
  ],
  authors: [{ name: "Omeje Olivia", url: siteUrl }],
  creator: "Omeje Olivia",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Omeje Olivia Portfolio",
    title: "Omeje Olivia | Full Stack Developer",
    description:
      "Full stack developer building thoughtful, reliable digital experiences.",
    images: [{ url: "/olivia.jpg", width: 560, height: 700, alt: "Omeje Olivia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omeje Olivia | Full Stack Developer",
    description:
      "Full stack developer building thoughtful, reliable digital experiences.",
    images: ["/olivia.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#fdf2f8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivo.variable} ${caveat.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Omeje Olivia",
              url: siteUrl,
              jobTitle: "Full Stack Developer",
              description: metadata.description,
              image: `${siteUrl}/olivia.jpg`,
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}

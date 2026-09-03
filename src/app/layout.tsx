import type { Metadata } from "next";
import { Archivo, Caveat } from "next/font/google";
import "./globals.css";

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
  title: "Omeje Olivia — Full Stack Developer",
  description:
    "Full stack developer who turns ideas into beautiful, functional and meaningful web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${archivo.variable} ${caveat.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

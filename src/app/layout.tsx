import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/Header";
import { SiteFooter } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "AsianCommunity.AI — Building safety, belonging, and prosperity for the AAPI community",
    template: "%s — AsianCommunity.AI",
  },
  description:
    "AsianCommunity.AI serves the 25 million Asian Americans and Pacific Islanders across the country through research, storytelling, and AI-powered resources that advance safety, belonging, and prosperity.",
  metadataBase: new URL("https://asiancommunity.ai"),
  openGraph: {
    title: "AsianCommunity.AI",
    description:
      "Building safety, belonging, and prosperity for the 25 million AAPIs across America.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CAVOK — The Modern Digital Pilot Logbook for iOS",
  description:
    "Log flights in seconds, track currency automatically, and export professional PDF logbooks. The free pilot logbook app for student pilots through airline captains. FAA & EASA compatible.",
  keywords: [
    "pilot logbook",
    "digital logbook",
    "flight log app",
    "pilot logbook app",
    "aviation logbook",
    "EASA logbook",
    "FAA logbook",
    "flight hours tracker",
    "pilot currency tracker",
    "pilot logbook iOS",
  ],
  metadataBase: new URL("https://cavok.app"),
  openGraph: {
    title: "CAVOK — The Modern Digital Pilot Logbook",
    description:
      "Log flights in seconds. Track currency automatically. Export beautiful PDF logbooks.",
    url: "https://cavok.app",
    siteName: "CAVOK",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CAVOK — The Modern Digital Pilot Logbook",
    description: "The pilot logbook app that finally gets it right.",
    images: ["/og-image.png"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://cavok.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "CAVOK",
              operatingSystem: "iOS",
              applicationCategory: "UtilitiesApplication",
              description:
                "The modern digital pilot logbook. Log flights in seconds, track currency automatically, and export professional PDF logbooks.",
              offers: [
                {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  name: "Free",
                },
                {
                  "@type": "Offer",
                  price: "4.99",
                  priceCurrency: "USD",
                  name: "Pro Monthly",
                  billingPeriod: "month",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "850",
                bestRating: "5",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "greek"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://speedboys.gr"),
  title: "SpeedBoys | Logistics Διανομών Θεσσαλονίκη",
  description:
    "SpeedBoys delivers modern logistics for restaurants and riders in Thessaloniki. Delivery Thessaloniki and \u03b4\u03b9\u03b1\u03bd\u03bf\u03bc\u03ae \u0398\u03b5\u03c3\u03c3\u03b1\u03bb\u03bf\u03bd\u03af\u03ba\u03b7 solutions for growth.",
  keywords: [
    "SpeedBoys",
    "SpeedBoys deliver",
    "Thessaloniki delivery",
    "delivery Thessaloniki",
    "Thessaloniki food delivery",
    "\u03b4\u03b9\u03b1\u03bd\u03bf\u03bc\u03ae \u0398\u03b5\u03c3\u03c3\u03b1\u03bb\u03bf\u03bd\u03af\u03ba\u03b7",
    "\u03bd\u03c4\u03b5\u03bb\u03af\u03b2\u03b5\u03c1\u03b9 \u0398\u03b5\u03c3\u03c3\u03b1\u03bb\u03bf\u03bd\u03af\u03ba\u03b7",
    "fleet outsourcing Greece",
    "rider jobs Thessaloniki",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "el-GR": "/",
    },
  },
  openGraph: {
    title: "SpeedBoys - Συνεργάτης Διανομών Θεσσαλονίκη",
    description:
      "Εξωτερικεύστε τον στόλο σας και αναπτύξτε τις διανομές στη Θεσσαλονίκη με το SpeedBoys.",
    url: "/",
    type: "website",
    locale: "el_GR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "SpeedBoys | Logistics Διανομών Θεσσαλονίκη",
    description:
      "Σύγχρονα logistics διανομών και outsourcing στόλου για εστιατόρια και riders στη Θεσσαλονίκη.",
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
  other: {
    "geo.region": "GR-54",
    "geo.placename": "Thessaloniki",
    ICBM: "40.6401,22.9444",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SpeedBoys",
  url: "https://speedboys.gr",
  email: "hello@speedboys.gr",
  areaServed: "Thessaloniki",
  knowsLanguage: ["en", "el"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SpeedBoys",
  url: "https://speedboys.gr",
  inLanguage: ["el"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}


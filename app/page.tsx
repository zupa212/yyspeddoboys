import type { Metadata } from "next";
import Link from "next/link";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIsSection } from "@/components/sections/WhatIsSection";
import { WhySection } from "@/components/sections/WhySection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ShowcaseSection } from "@/components/sections/ShowcaseSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { SplitCTASection } from "@/components/sections/SplitCTASection";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "SpeedBoys Delivery Thessaloniki | \u03b4\u03b9\u03b1\u03bd\u03bf\u03bc\u03ae \u0398\u03b5\u03c3\u03c3\u03b1\u03bb\u03bf\u03bd\u03af\u03ba\u03b7",
  description:
    "SpeedBoys delivers bilingual (English + Greek) logistics services in Thessaloniki for restaurants and riders.",
  keywords: [
    "Thessaloniki delivery",
    "delivery Thessaloniki",
    "\u03b4\u03b9\u03b1\u03bd\u03bf\u03bc\u03ae \u0398\u03b5\u03c3\u03c3\u03b1\u03bb\u03bf\u03bd\u03af\u03ba\u03b7",
    "\u03bd\u03c4\u03b5\u03bb\u03af\u03b2\u03b5\u03c1\u03b9 \u0398\u03b5\u03c3\u03c3\u03b1\u03bb\u03bf\u03bd\u03af\u03ba\u03b7",
    "SpeedBoys Thessaloniki",
  ],
  alternates: {
    canonical: "/",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SpeedBoys",
  url: "https://speedboys.gr",
  email: "hello@speedboys.gr",
  areaServed: [
    {
      "@type": "City",
      name: "Thessaloniki",
      sameAs: "https://en.wikipedia.org/wiki/Thessaloniki",
    },
  ],
  serviceType: [
    "Thessaloniki delivery logistics",
    "Fleet outsourcing",
    "\u03b4\u03b9\u03b1\u03bd\u03bf\u03bc\u03ae \u0398\u03b5\u03c3\u03c3\u03b1\u03bb\u03bf\u03bd\u03af\u03ba\u03b7",
  ],
  inLanguage: ["en", "el"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <HeroSection />
      <WhatIsSection />
      <WhySection />
      <HowItWorksSection />
      <ShowcaseSection />
      <TrustSection />
      <SplitCTASection />
      <FAQSection />
      <section className="sr-only" aria-label="SEO internal links">
        <h2>Thessaloniki Delivery Services</h2>
        <ul>
          <li>
            <Link href="/thessaloniki-delivery">Thessaloniki Delivery</Link>
          </li>
          <li>
            <Link href="/restaurant-delivery-thessaloniki">Restaurant Delivery Thessaloniki</Link>
          </li>
          <li>
            <Link href="/fleet-outsourcing-thessaloniki">Fleet Outsourcing Thessaloniki</Link>
          </li>
          <li>
            <Link href="/driver-jobs-thessaloniki">Driver Jobs Thessaloniki</Link>
          </li>
        </ul>
      </section>
    </>
  );
}

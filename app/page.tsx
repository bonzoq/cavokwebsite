import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { LogbookShowcase } from "@/components/sections/LogbookShowcase";
import { Features } from "@/components/sections/Features";
import { Statistics } from "@/components/sections/Statistics";
import { Aircraft } from "@/components/sections/Aircraft";
import { CurrencyTracker } from "@/components/sections/CurrencyTracker";
import { FlightMap } from "@/components/sections/FlightMap";
import { Export } from "@/components/sections/Export";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { DownloadCTA } from "@/components/sections/DownloadCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <LogbookShowcase />
      <Features />
      <Statistics />
      <Aircraft />
      <CurrencyTracker />
      <FlightMap />
      <Export />
      <Pricing />
      <Testimonials />
      <FAQ />
      <DownloadCTA />
    </>
  );
}

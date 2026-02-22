"use client";

import { motion } from "framer-motion";
import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { SITE_CONFIG } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

const particles = [
  { size: 4, x: "10%", y: "20%", delay: 0, duration: 6 },
  { size: 3, x: "25%", y: "70%", delay: 1, duration: 8 },
  { size: 5, x: "75%", y: "15%", delay: 2, duration: 7 },
  { size: 3, x: "85%", y: "60%", delay: 0.5, duration: 9 },
  { size: 4, x: "50%", y: "80%", delay: 1.5, duration: 6.5 },
  { size: 2, x: "15%", y: "50%", delay: 3, duration: 8 },
  { size: 3, x: "60%", y: "30%", delay: 2.5, duration: 7.5 },
  { size: 2, x: "90%", y: "40%", delay: 1, duration: 9.5 },
];

export function DownloadCTA() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-bg-primary via-aviation-blue-dark/30 to-bg-primary text-center overflow-hidden">
      {/* Background decoration - floating particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-aviation-blue-light/20"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold">
            <span className="gradient-text">Ready for clearer skies?</span>
          </h2>
        </FadeIn>

        <SlideUp delay={0.15}>
          <p className="text-lg text-text-secondary mt-6 max-w-xl mx-auto">
            Join thousands of pilots who&apos;ve upgraded their logbook. Download
            CAVOK for free.
          </p>
        </SlideUp>

        <SlideUp delay={0.3}>
          <div className="mt-8 flex justify-center">
            <AppStoreBadge href={SITE_CONFIG.appStoreUrl} size="lg" />
          </div>
        </SlideUp>

        <SlideUp delay={0.4}>
          <p className="text-sm text-text-tertiary mt-4">
            Available on iPhone and iPad &middot; Requires iOS 17+
          </p>
        </SlideUp>
      </div>
    </section>
  );
}

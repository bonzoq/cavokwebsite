"use client";

import { motion } from "framer-motion";
import { Star, Apple, ChevronRight, Plus } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { SITE_CONFIG } from "@/lib/constants";

const floatingCards = [
  { label: "Total Hours", value: "1,247:30", className: "top-4 -right-4 lg:-right-8" },
  { label: "PIC", value: "892:15", className: "top-1/2 -left-8 lg:-left-16 -translate-y-1/2" },
  { label: "Night", value: "203:40", className: "bottom-16 -right-2 lg:-right-10" },
];

const flightEntries = [
  { route: "KJFK \u2192 KLAX", date: "Feb 18, 2026", time: "5:32" },
  { route: "KLAX \u2192 KSFO", date: "Feb 15, 2026", time: "1:28" },
  { route: "KSFO \u2192 KDEN", date: "Feb 12, 2026", time: "2:45" },
  { route: "KDEN \u2192 KORD", date: "Feb 10, 2026", time: "2:18" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-bg-primary via-aviation-blue-dark/20 to-bg-primary">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_1px_at_24px_24px,rgba(255,255,255,0.03)_1px,transparent_0)] bg-[length:48px_48px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-aviation-blue/5 rounded-full blur-[120px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side */}
          <div className="lg:w-7/12 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge glow>
                <span className="mr-1.5">{"\u2708\uFE0F"}</span>
                Built by pilots, for pilots
              </Badge>
            </motion.div>

            <motion.h1
              className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight text-white mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Your digital logbook,
              <br />
              clear as <span className="gradient-text-blue">CAVOK</span>
            </motion.h1>

            <motion.p
              className="text-lg lg:text-xl text-text-secondary max-w-xl mt-6 mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
            >
              Log flights in seconds. Track currency automatically. Export
              beautiful PDF logbooks. The pilot logbook app that finally gets it
              right.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a
                href={SITE_CONFIG.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-aviation-blue to-aviation-blue-light text-white font-semibold rounded-full hover:brightness-110 transition-all btn-shimmer text-lg"
              >
                <Apple className="w-5 h-5" />
                Download Free
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all text-lg"
              >
                See Features
                <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mt-8 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
            >
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber text-amber"
                  />
                ))}
                <span className="text-sm text-text-secondary ml-1.5">
                  4.9 on the App Store
                </span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <span className="text-sm text-text-secondary">
                Trusted by 10,000+ pilots
              </span>
            </motion.div>
          </div>

          {/* Right side - Phone mockup */}
          <div className="lg:w-5/12 mt-12 lg:mt-0 flex justify-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              {/* Blue glow behind phone */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(30,111,217,0.15),transparent_70%)]" />

              {/* Phone - smaller on mobile, tilt on desktop */}
              <div className="block lg:hidden">
                <PhoneMockup className="w-[240px] h-[490px]">
                  <MockLogbookScreen />
                </PhoneMockup>
              </div>
              <div className="hidden lg:block">
                <PhoneMockup tilt>
                  <MockLogbookScreen />
                </PhoneMockup>
              </div>

              {/* Floating stat cards - desktop only */}
              {floatingCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  className={`absolute hidden lg:block glass-card rounded-xl px-4 py-3 text-sm ${card.className}`}
                  initial={{
                    opacity: 0,
                    x: index === 1 ? -20 : 20,
                    y: index === 0 ? -20 : index === 2 ? 20 : 0,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -8, 0],
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.8 + index * 0.15 },
                    x: { duration: 0.5, delay: 0.8 + index * 0.15, type: "spring" },
                    y: {
                      repeat: Infinity,
                      duration: 3 + index,
                      ease: "easeInOut",
                      delay: 1.5 + index * 0.15,
                    },
                  }}
                >
                  <div className="text-text-tertiary text-xs">{card.label}</div>
                  <div className="font-mono text-white font-semibold">
                    {card.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MockLogbookScreen() {
  return (
    <div className="w-full h-full bg-[#0F172A] text-white flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 pt-14 pb-3">
        <h2 className="font-heading text-lg font-bold">Logbook</h2>
        <div className="w-7 h-7 rounded-full bg-aviation-blue flex items-center justify-center">
          <Plus className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Flight entries */}
      <div className="flex-1 px-5 space-y-0">
        {flightEntries.map((entry, i) => (
          <div
            key={i}
            className={`flex items-center justify-between py-3.5 ${
              i < flightEntries.length - 1 ? "border-b border-white/5" : ""
            }`}
          >
            <div>
              <div className="font-mono text-sm text-white">{entry.route}</div>
              <div className="text-xs text-text-tertiary mt-0.5">
                {entry.date}
              </div>
            </div>
            <div className="font-mono text-sm text-aviation-blue-light">
              {entry.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

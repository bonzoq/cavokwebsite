"use client";

import { Timer, ClipboardList, WifiOff, ChevronRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

const flightEntries = [
  { route: "KJFK \u2192 EGLL", date: "Feb 18, 2026", aircraft: "B738", time: "7:25" },
  { route: "EGLL \u2192 LFPG", date: "Feb 14, 2026", aircraft: "A320", time: "1:15" },
  { route: "LFPG \u2192 LEMD", date: "Feb 11, 2026", aircraft: "A320", time: "2:05" },
  { route: "LEMD \u2192 KJFK", date: "Feb 8, 2026", aircraft: "B738", time: "8:40" },
  { route: "KJFK \u2192 KORD", date: "Feb 5, 2026", aircraft: "C172", time: "2:15" },
];

const highlights = [
  {
    title: "Log in 30 Seconds",
    description:
      "Smart defaults, airport autocomplete, and one-tap aircraft selection. Adding a flight is faster than filling out a paper logbook.",
    icon: Timer,
  },
  {
    title: "Every Detail Captured",
    description:
      "PIC, SIC, dual, night, IFR, cross-country, approaches, landings, crew, remarks, signatures \u2014 nothing is missed.",
    icon: ClipboardList,
  },
  {
    title: "Works Offline",
    description:
      "Log flights from anywhere. CAVOK syncs automatically when you\u2019re back online.",
    icon: WifiOff,
  },
];

export function LogbookShowcase() {
  return (
    <section id="logbook" className="py-24 lg:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title="A logbook that works the way you fly"
            subtitle="Whether you're a student pilot or an airline captain, CAVOK adapts to your needs"
          />
        </FadeIn>

        <SlideUp delay={0.2} className="flex justify-center mt-16">
          <PhoneMockup>
            <MockLogbookList />
          </PhoneMockup>
        </SlideUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          {highlights.map((item, index) => (
            <FadeIn key={item.title} delay={0.1 * index} direction="up">
              <div className="glass-card rounded-2xl p-6 text-center h-full">
                <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-br from-aviation-blue to-aviation-blue-light flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-white mt-4">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function MockLogbookList() {
  return (
    <div className="w-full h-full bg-[#0F172A] text-white flex flex-col">
      {/* Top bar */}
      <div className="px-5 pt-14 pb-3">
        <h2 className="font-heading text-lg font-bold">Logbook</h2>
      </div>

      {/* Flight entries */}
      <div className="flex-1 px-5">
        {flightEntries.map((entry, i) => (
          <div
            key={i}
            className={`flex items-center justify-between py-3 ${
              i < flightEntries.length - 1 ? "border-b border-white/5" : ""
            }`}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm text-white">
                  {entry.route}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-xs text-text-tertiary">{entry.date}</span>
                <span className="text-xs text-text-tertiary">{"\u00B7"}</span>
                <span className="text-xs text-text-tertiary font-mono">
                  {entry.aircraft}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm text-aviation-blue-light">
                {entry.time}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-text-tertiary" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

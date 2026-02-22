"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import FadeIn from "@/components/animations/FadeIn";

const stats = [
  { target: 10000, suffix: "+", label: "Pilots" },
  { target: 500000, suffix: "+", label: "Flights Logged" },
  { target: 120, suffix: "+", label: "Countries" },
];

export function TrustedBy() {
  return (
    <section className="bg-bg-secondary/50 border-y border-white/5 py-12">
      <FadeIn className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-8 md:gap-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white">
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-sm text-text-secondary mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

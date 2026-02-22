"use client";

import { Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

const subStats = [
  { value: "892:15", label: "PIC Time" },
  { value: "203:40", label: "Night Time" },
  { value: "156:20", label: "IFR Time" },
];

const pills = ["142 Airports", "23 Countries", "8 Aircraft Types"];

const bulletPoints = [
  "Filter by any time period \u2014 last 90 days, this year, or your entire career",
  "Break down hours by aircraft, category, role, or condition",
  "Track your progress toward personal goals and milestones",
];

export function Statistics() {
  return (
    <section id="statistics" className="py-24 lg:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title="Know your numbers"
            subtitle="Insights that paper logbooks can't give you"
          />
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mt-16">
          {/* Left - Phone mockup */}
          <div className="lg:w-1/2 flex justify-center">
            <SlideUp delay={0.2}>
              <PhoneMockup>
                <MockStatisticsScreen />
              </PhoneMockup>
            </SlideUp>
          </div>

          {/* Right - Stats */}
          <div className="lg:w-1/2">
            <FadeIn delay={0.3} direction="left">
              <div className="text-center lg:text-left">
                {/* Main counter */}
                <div>
                  <div className="text-5xl md:text-6xl font-bold text-white">
                    <AnimatedCounter target={1247} suffix=":30" />
                  </div>
                  <div className="text-lg text-text-secondary mt-1">
                    Total Hours
                  </div>
                </div>

                {/* Sub-stat counters */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
                  {subStats.map((stat, index) => (
                    <FadeIn key={stat.label} delay={0.4 + index * 0.1} direction="up">
                      <div>
                        <div className="text-2xl font-bold font-mono text-white">
                          {stat.value}
                        </div>
                        <div className="text-sm text-text-secondary">
                          {stat.label}
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>

                {/* Stat pills */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-8">
                  {pills.map((pill) => (
                    <span
                      key={pill}
                      className="glass-card rounded-full px-4 py-2 text-sm text-text-secondary"
                    >
                      {pill}
                    </span>
                  ))}
                </div>

                {/* Bullet points */}
                <div className="mt-8 space-y-3">
                  {bulletPoints.map((point) => (
                    <div
                      key={point}
                      className="flex gap-3 text-text-secondary text-sm"
                    >
                      <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function MockStatisticsScreen() {
  return (
    <div className="w-full h-full bg-[#0F172A] text-white flex flex-col">
      {/* Title */}
      <div className="px-5 pt-14 pb-3">
        <h2 className="font-heading text-lg font-bold">Statistics</h2>
      </div>

      {/* Total hours */}
      <div className="px-5 py-3 text-center">
        <div className="text-3xl font-bold font-mono">1,247:30</div>
        <div className="text-xs text-text-tertiary mt-0.5">Total Flight Time</div>
      </div>

      {/* Donut chart */}
      <div className="flex justify-center py-4">
        <div className="relative w-[120px] h-[120px]">
          <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
            {/* Background circle */}
            <circle
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="16"
            />
            {/* Day arc */}
            <circle
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="#1E6FD9"
              strokeWidth="16"
              strokeDasharray="220 301.6"
              strokeLinecap="round"
            />
            {/* Night arc */}
            <circle
              cx="60"
              cy="60"
              r="48"
              fill="none"
              stroke="#4A9AF5"
              strokeWidth="16"
              strokeDasharray="80 301.6"
              strokeDashoffset="-220"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[10px] text-text-tertiary">Day / Night</span>
          </div>
        </div>
      </div>

      {/* Bar chart */}
      <div className="px-5 py-3">
        <div className="flex items-end justify-between gap-2 h-[60px]">
          {[65, 40, 85, 55, 70, 30].map((height, i) => (
            <div
              key={i}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-aviation-blue to-aviation-blue-light"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between mt-1">
          {["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"].map((month) => (
            <span key={month} className="text-[8px] text-text-tertiary flex-1 text-center">
              {month}
            </span>
          ))}
        </div>
      </div>

      {/* Mini stats */}
      <div className="px-5 py-3 mt-auto mb-4">
        <div className="text-center text-xs text-text-tertiary">
          142 Airports {"\u00B7"} 23 Countries {"\u00B7"} 8 Types
        </div>
      </div>
    </div>
  );
}

"use client";

import { CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { CURRENCY_RULES } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";

const currencyItems = [
  {
    title: "Day VFR Passenger",
    status: "Current",
    color: "bg-success",
    textColor: "text-success",
    progress: 100,
    detail: "3/3 landings",
  },
  {
    title: "Night VFR Passenger",
    status: "Current",
    color: "bg-success",
    textColor: "text-success",
    progress: 100,
    detail: "3/3 full-stop landings",
  },
  {
    title: "IFR Currency",
    status: "Expiring Soon",
    color: "bg-warning",
    textColor: "text-warning",
    progress: 40,
    detail: "Expires in 45 days",
  },
  {
    title: "Flight Review",
    status: "Current",
    color: "bg-success",
    textColor: "text-success",
    progress: 75,
    detail: "Valid until Dec 2026",
  },
  {
    title: "Medical Certificate",
    status: "Current",
    color: "bg-success",
    textColor: "text-success",
    progress: 85,
    detail: "Valid until Sep 2027",
  },
];

export function CurrencyTracker() {
  return (
    <section className="py-24 lg:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title="Stay current. Stay confident."
            subtitle="Automatic currency tracking so you never have to count landings again"
          />
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mt-16 max-w-7xl mx-auto">
          {/* Left - Phone mockup */}
          <div className="lg:w-1/2 flex justify-center">
            <FadeIn direction="right" delay={0.2}>
              <PhoneMockup>
                <MockCurrencyScreen />
              </PhoneMockup>
            </FadeIn>
          </div>

          {/* Right - Currency rules */}
          <div className="lg:w-1/2">
            <FadeIn direction="left" delay={0.3}>
              <div className="space-y-4">
                {CURRENCY_RULES.map((rule) => (
                  <div key={rule.label} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                    <span className="text-white font-medium">{rule.label}</span>
                    <span className="text-text-secondary text-sm">
                      ({rule.detail})
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <p className="text-lg text-text-secondary italic">
                  &ldquo;CAVOK scans your logbook and calculates everything
                  automatically. You just fly.&rdquo;
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function MockCurrencyScreen() {
  return (
    <div className="w-full h-full bg-[#0F172A] text-white flex flex-col">
      {/* Title */}
      <div className="px-5 pt-14 pb-3">
        <h2 className="font-heading text-lg font-bold">Currency</h2>
      </div>

      {/* Currency cards */}
      <div className="flex-1 px-4 space-y-2.5 pb-4">
        {currencyItems.map((item) => (
          <div
            key={item.title}
            className="rounded-xl bg-white/5 px-4 py-3"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-medium text-white">
                {item.title}
              </span>
              <div className="flex items-center gap-1.5">
                <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                <span className={`text-[10px] font-medium ${item.textColor}`}>
                  {item.status}
                </span>
              </div>
            </div>
            <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
              <div
                className={`h-full rounded-full ${item.color}`}
                style={{ width: `${item.progress}%` }}
              />
            </div>
            <div className="text-[10px] text-text-tertiary mt-1">
              {item.detail}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

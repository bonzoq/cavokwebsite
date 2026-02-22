"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { PRICING_PLANS, SITE_CONFIG } from "@/lib/constants";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title="Simple pricing. Generous free tier."
            subtitle="Start for free. Upgrade when you're ready."
          />
        </FadeIn>

        {/* Billing toggle */}
        <FadeIn delay={0.1}>
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center rounded-full bg-white/5 border border-white/10 p-1">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  !isAnnual
                    ? "bg-aviation-blue text-white"
                    : "text-text-secondary hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
                  isAnnual
                    ? "bg-aviation-blue text-white"
                    : "text-text-secondary hover:text-white"
                }`}
              >
                Annual
                <span className="text-[10px] font-bold bg-gradient-to-r from-amber to-amber-light text-bg-primary rounded-full px-2 py-0.5">
                  Save 33%
                </span>
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-3xl mx-auto">
          {/* Free card */}
          <SlideUp delay={0.2}>
            <Card className="h-full flex flex-col">
              <h3 className="font-heading text-2xl font-bold text-white">
                {PRICING_PLANS.free.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white font-mono">
                  {PRICING_PLANS.free.price}
                </span>
                <span className="text-text-secondary text-sm">
                  /{PRICING_PLANS.free.period}
                </span>
              </div>

              <div className="border-t border-white/10 my-6" />

              <div className="space-y-3 flex-1">
                {PRICING_PLANS.free.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-text-secondary shrink-0 mt-0.5" />
                    <span className="text-sm text-text-secondary">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={SITE_CONFIG.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full text-center border border-white/20 rounded-full py-3 text-white font-medium hover:bg-white/5 transition-colors"
              >
                {PRICING_PLANS.free.cta}
              </a>
            </Card>
          </SlideUp>

          {/* Pro card */}
          <SlideUp delay={0.3}>
            <div className="relative">
              {/* Most Popular badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10 bg-gradient-to-r from-amber to-amber-light text-bg-primary text-xs font-bold rounded-full px-3 py-1">
                Most Popular
              </div>

              <Card highlighted className="h-full flex flex-col">
                <h3 className="font-heading text-2xl font-bold text-white">
                  {PRICING_PLANS.pro.name}
                </h3>

                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white font-mono">
                    {isAnnual
                      ? PRICING_PLANS.pro.priceYearly
                      : PRICING_PLANS.pro.priceMonthly}
                  </span>
                  <span className="text-text-secondary text-sm">
                    /{isAnnual ? "yr" : "mo"}
                  </span>
                </div>

                {isAnnual && (
                  <p className="text-sm text-success mt-1">
                    Save $19.89/year vs monthly
                  </p>
                )}

                <div className="border-t border-white/10 my-6" />

                <div className="space-y-3 flex-1">
                  {PRICING_PLANS.pro.features.map((feature, index) => (
                    <div key={feature} className="flex items-start gap-3">
                      {index === 0 ? (
                        <span className="text-sm text-aviation-blue-light font-medium">
                          {feature}
                        </span>
                      ) : (
                        <>
                          <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          <span className="text-sm text-text-secondary">
                            {feature}
                          </span>
                        </>
                      )}
                    </div>
                  ))}
                </div>

                <a
                  href={SITE_CONFIG.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full text-center bg-gradient-to-r from-aviation-blue to-aviation-blue-light rounded-full py-3 text-white font-semibold hover:brightness-110 transition-all btn-shimmer"
                >
                  {PRICING_PLANS.pro.cta}
                </a>

                <p className="text-xs text-text-tertiary text-center mt-3">
                  Cancel anytime. No questions asked.
                </p>
              </Card>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import FadeIn from "@/components/animations/FadeIn";

const exportFeatures = [
  "Official EASA and FAA logbook format PDFs",
  "Full CSV export compatible with Excel and Google Sheets",
  "Import from ForeFlight, LogTen Pro, or any CSV",
  "Your data is always yours",
];

const easaColumns = ["Date", "Dep", "Arr", "Type", "Reg", "SE", "ME", "PIC", "SIC"];
const faaColumns = ["Date", "Type", "From", "To", "Ldg", "Inst", "Night", "XC", "PIC"];

const easaRows = [
  ["02/18", "KJFK", "KLAX", "B738", "N321", "—", "5:32", "5:32", "—"],
  ["02/15", "KLAX", "KSFO", "C172", "N45P", "1:28", "—", "1:28", "—"],
  ["02/12", "KSFO", "KDEN", "PA28", "N78R", "2:45", "—", "2:45", "—"],
];

const faaRows = [
  ["02/18", "B738", "JFK", "LAX", "1", "0.0", "2.1", "5.5", "5:32"],
  ["02/15", "C172", "LAX", "SFO", "1", "0.0", "0.0", "1.5", "1:28"],
  ["02/12", "PA28", "SFO", "DEN", "1", "1.2", "0.0", "2.7", "2:45"],
];

export function Export() {
  return (
    <section className="py-24 lg:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title="Print-ready. Interview-ready."
            subtitle="Your logbook, your way. Export in any format you need."
          />
        </FadeIn>

        <div className="flex flex-col lg:flex-row items-center gap-12 mt-16 max-w-6xl mx-auto">
          {/* Left - Mock PDF previews */}
          <div className="lg:w-1/2 flex justify-center">
            <FadeIn direction="right" delay={0.2}>
              <div className="relative w-[340px] h-[320px] sm:w-[400px] sm:h-[350px]">
                {/* Back card - EASA */}
                <div className="absolute top-4 left-4 right-0 bottom-0 bg-white/5 border border-white/10 rounded-xl p-5 transform rotate-3">
                  <div className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-3">
                    EASA Format
                  </div>
                  <div className="overflow-hidden rounded-lg border border-white/10">
                    <table className="w-full text-[8px] sm:text-[9px]">
                      <thead>
                        <tr className="border-b border-white/10">
                          {easaColumns.map((col) => (
                            <th
                              key={col}
                              className="px-1.5 py-1.5 text-text-tertiary font-medium text-left"
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {easaRows.map((row, i) => (
                          <tr
                            key={i}
                            className="border-b border-white/5"
                          >
                            {row.map((cell, j) => (
                              <td
                                key={j}
                                className="px-1.5 py-1 text-text-secondary font-mono"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Front card - FAA */}
                <div className="absolute top-0 left-0 right-4 bottom-4 bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm">
                  <div className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-3">
                    FAA Format
                  </div>
                  <div className="overflow-hidden rounded-lg border border-white/10">
                    <table className="w-full text-[8px] sm:text-[9px]">
                      <thead>
                        <tr className="border-b border-white/10">
                          {faaColumns.map((col) => (
                            <th
                              key={col}
                              className="px-1.5 py-1.5 text-text-tertiary font-medium text-left"
                            >
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {faaRows.map((row, i) => (
                          <tr
                            key={i}
                            className="border-b border-white/5"
                          >
                            {row.map((cell, j) => (
                              <td
                                key={j}
                                className="px-1.5 py-1 text-text-secondary font-mono"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right - Feature bullets */}
          <div className="lg:w-1/2">
            <FadeIn direction="left" delay={0.3}>
              <div className="space-y-4">
                {exportFeatures.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="rounded-full bg-aviation-blue/20 p-1 shrink-0">
                      <Check className="w-4 h-4 text-aviation-blue-light" />
                    </div>
                    <span className="text-text-secondary leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

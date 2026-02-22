"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import FadeIn from "@/components/animations/FadeIn";

const airports = [
  { cx: 180, cy: 120, label: "JFK" },
  { cx: 130, cy: 135, label: "LAX" },
  { cx: 340, cy: 115, label: "LHR" },
  { cx: 360, cy: 125, label: "FRA" },
  { cx: 430, cy: 170, label: "DXB" },
  { cx: 520, cy: 160, label: "BKK" },
  { cx: 570, cy: 140, label: "NRT" },
  { cx: 155, cy: 145, label: "DEN" },
  { cx: 350, cy: 155, label: "CAI" },
  { cx: 560, cy: 225, label: "SYD" },
];

const routes = [
  { from: airports[0], to: airports[2] },
  { from: airports[0], to: airports[1] },
  { from: airports[2], to: airports[3] },
  { from: airports[3], to: airports[4] },
  { from: airports[4], to: airports[5] },
  { from: airports[5], to: airports[6] },
  { from: airports[1], to: airports[7] },
  { from: airports[2], to: airports[8] },
  { from: airports[5], to: airports[9] },
];

function getArcPath(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): string {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  const curveOffset = dist * 0.25;
  const controlX = midX;
  const controlY = midY - curveOffset;
  return `M ${x1} ${y1} Q ${controlX} ${controlY} ${x2} ${y2}`;
}

export function FlightMap() {
  return (
    <section className="py-24 lg:py-32 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeader
            title="See where you've been"
            subtitle="Every departure, every arrival, every route — beautifully visualized on an interactive map."
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="max-w-5xl mx-auto mt-16">
            <div className="glass-card rounded-2xl border border-white/10 overflow-hidden relative">
              <svg
                viewBox="0 0 700 320"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Glow filter */}
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  {/* Route gradient */}
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1E6FD9" />
                    <stop offset="100%" stopColor="#4A9AF5" />
                  </linearGradient>

                  {/* Airport pulse */}
                  <radialGradient id="airportGlow">
                    <stop offset="0%" stopColor="#4A9AF5" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#4A9AF5" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Dark background */}
                <rect width="700" height="320" fill="#0B1120" />

                {/* Grid lines for subtle texture */}
                <g opacity="0.03" stroke="white" strokeWidth="0.5">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <line
                      key={`h-${i}`}
                      x1="0"
                      y1={i * 24}
                      x2="700"
                      y2={i * 24}
                    />
                  ))}
                  {Array.from({ length: 30 }).map((_, i) => (
                    <line
                      key={`v-${i}`}
                      x1={i * 24}
                      y1="0"
                      x2={i * 24}
                      y2="320"
                    />
                  ))}
                </g>

                {/* Simplified continent outlines */}
                <g fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1">
                  {/* North America */}
                  <path d="M 100,70 L 120,65 140,60 160,55 180,60 200,55 210,65 205,80 195,95 190,110 185,120 175,130 165,140 155,150 145,155 130,150 120,140 115,130 108,120 102,100 98,85 Z" />
                  {/* South America */}
                  <path d="M 185,185 L 195,180 210,185 220,200 225,220 220,240 210,260 200,270 190,265 180,250 175,230 178,210 182,195 Z" />
                  {/* Europe */}
                  <path d="M 310,65 L 330,60 350,55 370,60 380,65 375,75 365,85 355,95 345,100 335,95 325,85 315,75 Z" />
                  {/* Africa */}
                  <path d="M 320,120 L 340,115 360,120 375,140 380,165 375,190 365,210 350,225 335,230 320,220 310,200 305,175 310,150 315,135 Z" />
                  {/* Asia */}
                  <path d="M 390,55 L 420,50 460,45 500,50 540,55 560,60 570,75 565,90 555,100 540,110 520,115 500,120 480,125 460,130 440,125 420,115 405,100 395,85 Z" />
                  {/* Australia */}
                  <path d="M 530,210 L 555,205 580,210 590,225 585,245 570,255 550,255 535,245 530,230 Z" />
                </g>

                {/* Filled continent shapes (very subtle) */}
                <g fill="rgba(255,255,255,0.02)">
                  <path d="M 100,70 L 120,65 140,60 160,55 180,60 200,55 210,65 205,80 195,95 190,110 185,120 175,130 165,140 155,150 145,155 130,150 120,140 115,130 108,120 102,100 98,85 Z" />
                  <path d="M 185,185 L 195,180 210,185 220,200 225,220 220,240 210,260 200,270 190,265 180,250 175,230 178,210 182,195 Z" />
                  <path d="M 310,65 L 330,60 350,55 370,60 380,65 375,75 365,85 355,95 345,100 335,95 325,85 315,75 Z" />
                  <path d="M 320,120 L 340,115 360,120 375,140 380,165 375,190 365,210 350,225 335,230 320,220 310,200 305,175 310,150 315,135 Z" />
                  <path d="M 390,55 L 420,50 460,45 500,50 540,55 560,60 570,75 565,90 555,100 540,110 520,115 500,120 480,125 460,130 440,125 420,115 405,100 395,85 Z" />
                  <path d="M 530,210 L 555,205 580,210 590,225 585,245 570,255 550,255 535,245 530,230 Z" />
                </g>

                {/* Flight route arcs */}
                <g filter="url(#glow)">
                  {routes.map((route, i) => (
                    <path
                      key={`route-${i}`}
                      d={getArcPath(
                        route.from.cx,
                        route.from.cy,
                        route.to.cx,
                        route.to.cy
                      )}
                      fill="none"
                      stroke="url(#routeGradient)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      opacity="0.6"
                    >
                      <animate
                        attributeName="opacity"
                        values="0.3;0.7;0.3"
                        dur={`${3 + i * 0.5}s`}
                        repeatCount="indefinite"
                      />
                    </path>
                  ))}
                </g>

                {/* Airport dots */}
                {airports.map((airport, i) => (
                  <g key={`airport-${i}`}>
                    {/* Outer glow */}
                    <circle
                      cx={airport.cx}
                      cy={airport.cy}
                      r="8"
                      fill="url(#airportGlow)"
                    >
                      <animate
                        attributeName="r"
                        values="6;10;6"
                        dur="3s"
                        repeatCount="indefinite"
                        begin={`${i * 0.3}s`}
                      />
                      <animate
                        attributeName="opacity"
                        values="0.3;0.6;0.3"
                        dur="3s"
                        repeatCount="indefinite"
                        begin={`${i * 0.3}s`}
                      />
                    </circle>
                    {/* Center dot */}
                    <circle
                      cx={airport.cx}
                      cy={airport.cy}
                      r="2.5"
                      fill="#4A9AF5"
                    />
                  </g>
                ))}
              </svg>

              {/* Stats overlay bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm border-t border-white/10 px-6 py-3">
                <div className="flex items-center justify-center gap-4 md:gap-8 text-sm">
                  <span className="text-text-secondary">
                    <span className="font-mono font-semibold text-white">142</span>{" "}
                    airports
                  </span>
                  <span className="text-white/20">&middot;</span>
                  <span className="text-text-secondary">
                    <span className="font-mono font-semibold text-white">23</span>{" "}
                    countries
                  </span>
                  <span className="text-white/20">&middot;</span>
                  <span className="text-text-secondary">
                    <span className="font-mono font-semibold text-white">287,000</span>{" "}
                    nm flown
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

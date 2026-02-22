"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";

const aircraftTypes = [
  { name: "Cessna 172", hours: "342:15" },
  { name: "Piper PA-28", hours: "128:30" },
  { name: "Boeing 737", hours: "456:00" },
  { name: "Airbus A320", hours: "320:45" },
];

export function Aircraft() {
  return (
    <section className="py-24 lg:py-32 bg-bg-tertiary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <span className="text-aviation-blue-light text-sm font-medium tracking-wider uppercase">
            Aircraft Fleet
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-4">
            Every aircraft. Every detail.
          </h2>
          <p className="text-text-secondary text-lg mt-4 max-w-2xl mx-auto">
            From Cessna 172s to Boeing 737s — manage your fleet with type
            ratings, specs, photos, and per-aircraft statistics.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
          {aircraftTypes.map((aircraft, index) => (
            <motion.div
              key={aircraft.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="glass-card rounded-xl p-4 text-center"
            >
              {/* Aircraft silhouette placeholder */}
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-aviation-blue/10 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-aviation-blue-light"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
                </svg>
              </div>
              <div className="font-heading font-semibold text-white text-sm">
                {aircraft.name}
              </div>
              <div className="font-mono text-aviation-blue-light text-xs mt-1">
                {aircraft.hours}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

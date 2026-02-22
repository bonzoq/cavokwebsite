"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface FlightPathSVGProps {
  className?: string;
}

export default function FlightPathSVG({ className }: FlightPathSVGProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Position the airplane along the path based on draw progress
  const airplaneX = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const airplaneY = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute inset-0 h-[200px] w-full ${className ?? ""}`}
    >
      <svg
        viewBox="0 0 1200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="flightPathGradient"
            x1="0%"
            y1="100%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#1E6FD9" stopOpacity={0.2} />
            <stop offset="100%" stopColor="#4A9AF5" stopOpacity={0.2} />
          </linearGradient>
        </defs>

        {/* Flight route arc: gentle bezier from bottom-left to top-right */}
        <motion.path
          d="M0 180 C300 160, 500 40, 800 30 C950 25, 1100 20, 1200 15"
          stroke="url(#flightPathGradient)"
          strokeWidth={2}
          strokeLinecap="round"
          fill="none"
          style={{ pathLength }}
        />

        {/* Dashed trail for subtle depth */}
        <motion.path
          d="M0 180 C300 160, 500 40, 800 30 C950 25, 1100 20, 1200 15"
          stroke="url(#flightPathGradient)"
          strokeWidth={1}
          strokeDasharray="6 8"
          fill="none"
          style={{ pathLength }}
        />
      </svg>

      {/* Airplane icon that follows the path endpoint */}
      <motion.div
        className="absolute"
        style={{
          left: useTransform(airplaneX, (v) => `${v}%`),
          top: useTransform(airplaneY, (v) => `${v}%`),
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="-rotate-45"
          style={{ opacity: pathLength }}
        >
          <path
            d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z"
            fill="#4A9AF5"
            fillOpacity={0.6}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}

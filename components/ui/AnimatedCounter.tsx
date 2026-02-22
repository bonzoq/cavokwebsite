"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useTransform, animate, motion } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => {
    return formatNumber(Math.round(latest));
  });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, target, {
        duration,
        ease: "easeOut",
      });
    }
  }, [isInView, motionValue, target, duration]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

function formatNumber(num: number): string {
  return num.toLocaleString("en-US");
}

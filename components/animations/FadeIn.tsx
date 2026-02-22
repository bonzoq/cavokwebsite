"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
}

function getInitialOffset(direction?: Direction): { x: number; y: number } {
  switch (direction) {
    case "up":
      return { x: 0, y: 30 };
    case "down":
      return { x: 0, y: -30 };
    case "left":
      return { x: -30, y: 0 };
    case "right":
      return { x: 30, y: 0 };
    default:
      return { x: 0, y: 0 };
  }
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction,
  className,
}: FadeInProps) {
  const { x, y } = getInitialOffset(direction);

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

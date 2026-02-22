"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SlideUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function SlideUp({
  children,
  delay = 0,
  duration = 0.5,
  className,
}: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        duration,
        delay,
        bounce: 0.3,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

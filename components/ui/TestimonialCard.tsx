"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  hours: string;
  index: number;
}

export function TestimonialCard({
  quote,
  name,
  title,
  hours,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="glass-card rounded-2xl p-6"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-amber text-amber"
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-text-secondary italic leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div>
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-text-tertiary">
          {title} &middot; {hours}
        </p>
      </div>
    </motion.div>
  );
}

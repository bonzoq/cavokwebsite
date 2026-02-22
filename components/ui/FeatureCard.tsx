"use client";

import { motion } from "framer-motion";
import {
  Plane,
  BarChart3,
  ShieldCheck,
  PlaneTakeoff,
  Globe,
  FileText,
  FolderLock,
  Download,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card } from "./Card";

const iconMap: Record<string, LucideIcon> = {
  Plane,
  BarChart3,
  ShieldCheck,
  PlaneTakeoff,
  Globe,
  FileText,
  FolderLock,
  Download,
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

export function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
  const Icon = iconMap[icon] || Plane;

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
    >
      <Card hover>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-aviation-blue to-aviation-blue-light">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="mt-4 font-heading text-lg font-semibold text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>
      </Card>
    </motion.div>
  );
}

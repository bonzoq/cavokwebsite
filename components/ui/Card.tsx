import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  highlighted?: boolean;
  className?: string;
}

export function Card({ children, hover, highlighted, className }: CardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6",
        hover &&
          "glass-card-hover transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(30,111,217,0.15)]",
        highlighted && "animated-border",
        className
      )}
    >
      {children}
    </div>
  );
}

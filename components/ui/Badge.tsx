import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  glow?: boolean;
  className?: string;
}

export function Badge({ children, glow, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-sm",
        glow && "shadow-[0_0_15px_rgba(30,111,217,0.3)]",
        className
      )}
    >
      {children}
    </span>
  );
}

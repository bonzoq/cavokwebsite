import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const variantClasses: Record<string, string> = {
  primary:
    "bg-gradient-to-r from-aviation-blue to-aviation-blue-light text-white hover:brightness-110 btn-shimmer",
  secondary:
    "border border-white text-white hover:bg-white/10",
  ghost:
    "text-text-secondary hover:text-white",
};

const sizeClasses: Record<string, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-2.5 text-base gap-2",
  lg: "px-8 py-3.5 text-lg gap-2.5",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  href,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full cursor-pointer",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {icon && <span className="shrink-0">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </button>
  );
}

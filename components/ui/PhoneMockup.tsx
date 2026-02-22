import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  children: React.ReactNode;
  tilt?: boolean;
  className?: string;
}

export function PhoneMockup({ children, tilt, className }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative w-[280px] h-[572px]",
        tilt && "transform rotate-[5deg]",
        className
      )}
    >
      {/* Outer frame */}
      <div className="absolute inset-0 rounded-[3rem] bg-[#1a1a1a] shadow-2xl" />

      {/* Inner screen area */}
      <div className="absolute inset-[4px] rounded-[2.5rem] overflow-hidden bg-bg-primary">
        {/* Dynamic Island */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-10 w-[90px] h-[28px] bg-black rounded-full" />

        {/* Screen content */}
        <div className="relative w-full h-full overflow-hidden">
          {children}
        </div>
      </div>

      {/* Side button accents */}
      <div className="absolute top-[120px] -right-[2px] w-[3px] h-[40px] bg-[#2a2a2a] rounded-r-sm" />
      <div className="absolute top-[90px] -left-[2px] w-[3px] h-[28px] bg-[#2a2a2a] rounded-l-sm" />
      <div className="absolute top-[130px] -left-[2px] w-[3px] h-[50px] bg-[#2a2a2a] rounded-l-sm" />
      <div className="absolute top-[190px] -left-[2px] w-[3px] h-[50px] bg-[#2a2a2a] rounded-l-sm" />
    </div>
  );
}

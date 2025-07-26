import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "whatsapp" | "social";
  className?: string;
  disabled?: boolean;
}

export const LinkButton = ({ 
  href, 
  children, 
  icon, 
  variant = "primary",
  className,
  disabled = false
}: LinkButtonProps) => {
  const handleClick = () => {
    if (!disabled) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-primary text-white hover:scale-105 hover:shadow-premium border border-brand-primary/20 glass relative overflow-hidden group shadow-soft";
      case "secondary":
        return "bg-gradient-secondary text-white hover:scale-105 hover:shadow-premium border border-brand-secondary/20 glass relative overflow-hidden group shadow-soft";
      case "whatsapp":
        return "bg-gradient-to-r from-green-500 to-green-600 text-white hover:scale-105 hover:shadow-deep border border-green-400/20 glass relative overflow-hidden group shadow-soft";
      case "social":
        return "bg-gradient-accent text-white hover:scale-105 hover:shadow-premium border border-brand-primary/20 glass relative overflow-hidden group shadow-soft";
      default:
        return "bg-gradient-primary text-white hover:scale-105 hover:shadow-premium glass shadow-soft";
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        "w-full h-14 text-base font-semibold rounded-xl transition-all duration-300",
        "flex items-center justify-center gap-3",
        "backdrop-blur-sm hover:backdrop-blur-md",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500",
        "active:scale-95",
        getVariantStyles(),
        disabled && "opacity-60 cursor-not-allowed hover:scale-100",
        className
      )}
    >
      {icon && (
        <span className="text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </span>
      )}
      <span className="relative z-10 font-semibold tracking-wide">
        {children}
      </span>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-2 left-4 w-1 h-1 bg-white/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-3 right-6 w-1 h-1 bg-white/30 rounded-full animate-ping animation-delay-200"></div>
      </div>
    </Button>
  );
};
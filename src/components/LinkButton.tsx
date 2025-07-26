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
        return "bg-gradient-primary text-foreground hover:scale-105 hover:shadow-glow border-2 border-brand-gold/30 glass-strong relative overflow-hidden group";
      case "secondary":
        return "bg-gradient-secondary text-foreground hover:scale-105 hover:shadow-premium border-2 border-brand-green/30 glass relative overflow-hidden group";
      case "whatsapp":
        return "bg-gradient-to-r from-green-500 to-green-600 text-white hover:scale-105 hover:shadow-deep border-2 border-green-400/30 glass-strong relative overflow-hidden group";
      case "social":
        return "bg-gradient-accent text-foreground hover:scale-105 hover:shadow-premium border-2 border-brand-orange/30 glass relative overflow-hidden group";
      default:
        return "bg-gradient-primary text-foreground hover:scale-105 hover:shadow-glow glass-strong";
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={disabled}
      className={cn(
        "w-full h-16 text-lg font-semibold rounded-2xl transition-all duration-500",
        "flex items-center justify-center gap-3",
        "backdrop-blur-md hover:backdrop-blur-lg",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent",
        "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
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
      <span className="relative z-10 font-bold tracking-wide">
        {children}
      </span>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-2 left-4 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-3 right-6 w-1 h-1 bg-white/40 rounded-full animate-ping animation-delay-200"></div>
        <div className="absolute top-4 right-8 w-0.5 h-0.5 bg-white/50 rounded-full animate-ping animation-delay-400"></div>
      </div>
    </Button>
  );
};
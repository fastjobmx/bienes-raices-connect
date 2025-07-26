import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary" | "whatsapp" | "social";
  className?: string;
}

export const LinkButton = ({ 
  href, 
  children, 
  icon, 
  variant = "primary",
  className 
}: LinkButtonProps) => {
  const handleClick = () => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-gradient-primary text-foreground hover:scale-105 shadow-premium border-2 border-brand-gold/20";
      case "secondary":
        return "bg-gradient-secondary text-foreground hover:scale-105 shadow-soft border-2 border-brand-green/20";
      case "whatsapp":
        return "bg-gradient-to-r from-green-500 to-green-600 text-white hover:scale-105 shadow-soft border-2 border-green-400/20";
      case "social":
        return "bg-gradient-accent text-foreground hover:scale-105 shadow-soft border-2 border-brand-orange/20";
      default:
        return "bg-gradient-primary text-foreground hover:scale-105 shadow-premium";
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={cn(
        "w-full h-16 text-lg font-semibold rounded-2xl transition-all duration-300 hover:shadow-premium",
        "flex items-center justify-center gap-3",
        "backdrop-blur-sm hover:backdrop-blur-md",
        getVariantStyles(),
        className
      )}
    >
      {icon && <span className="text-2xl">{icon}</span>}
      <span>{children}</span>
    </Button>
  );
};
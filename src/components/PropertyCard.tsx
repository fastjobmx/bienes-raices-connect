import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  name: string;
  href: string;
  className?: string;
}

export const PropertyCard = ({ name, href, className }: PropertyCardProps) => {
  const handleClick = () => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card
      onClick={handleClick}
      className={cn(
        "p-5 cursor-pointer transition-all duration-300 hover:scale-102",
        "bg-white/90 border border-brand-primary/10",
        "hover:shadow-premium hover:shadow-glow",
        "glass-strong relative overflow-hidden group shadow-soft",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-brand-primary/5 before:to-transparent",
        "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-500",
        "active:scale-95",
        className
      )}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-primary/8 to-transparent rounded-full -translate-y-12 translate-x-12 group-hover:scale-110 transition-transform duration-300"></div>
      
      <div className="flex items-center justify-between relative z-10">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-brand-primary transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground group-hover:text-brand-accent/70 transition-colors duration-300">
            Ver detalles del lote
          </p>
        </div>
        <div className="text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 filter group-hover:drop-shadow-md">
          🏡
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-3 left-6 w-1 h-1 bg-brand-primary/40 rounded-full animate-ping"></div>
      </div>
    </Card>
  );
};
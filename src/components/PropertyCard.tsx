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
        "p-6 cursor-pointer transition-all duration-500 hover:scale-105",
        "bg-gradient-secondary border-2 border-brand-green/30",
        "hover:shadow-premium hover:shadow-glow",
        "glass relative overflow-hidden group",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        "before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        "active:scale-95",
        className
      )}
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-brand-green/10 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-125 transition-transform duration-500"></div>
      
      <div className="flex items-center justify-between relative z-10">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-brand-green-dark transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
            Ver detalles del lote
          </p>
        </div>
        <div className="text-3xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 filter group-hover:drop-shadow-lg">
          🏡
        </div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-3 left-6 w-1 h-1 bg-brand-green/60 rounded-full animate-ping"></div>
        <div className="absolute bottom-4 right-8 w-0.5 h-0.5 bg-brand-green/40 rounded-full animate-ping animation-delay-300"></div>
      </div>
    </Card>
  );
};
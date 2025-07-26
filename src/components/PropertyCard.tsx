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
        "p-6 cursor-pointer transition-all duration-300 hover:scale-105",
        "bg-gradient-secondary border-2 border-brand-green/20",
        "shadow-soft hover:shadow-premium",
        "backdrop-blur-sm hover:backdrop-blur-md",
        "group",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">
            Ver detalles del lote
          </p>
        </div>
        <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
          🏡
        </div>
      </div>
    </Card>
  );
};
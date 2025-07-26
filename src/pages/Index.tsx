import { LinkButton } from "@/components/LinkButton";
import { PropertyCard } from "@/components/PropertyCard";

const Index = () => {
  const properties = [
    {
      name: "La Floresta",
      href: "https://acaciasbienesraices.rapidsitepro.com/propiedad/la-floresta"
    },
    {
      name: "Bosques de Alkalí", 
      href: "https://acaciasbienesraices.rapidsitepro.com/propiedad/bosques-de-alkali"
    },
    {
      name: "Reservas del Edén",
      href: "https://acaciasbienesraices.rapidsitepro.com/propiedad/reservas-del-eden"
    },
    {
      name: "Sábana Real",
      href: "https://acaciasbienesraices.rapidsitepro.com/propiedad/sabana-real"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      <div className="container max-w-md mx-auto px-6 py-8">
        {/* Header with Logo */}
        <div className="text-center mb-8">
          <div className="relative mb-6">
            <img 
              src="/lovable-uploads/e4bef0bd-01c6-4cae-b5af-c8066db30272.png" 
              alt="A.N Bienes Raíces - Inversiones de los llanos"
              className="w-32 h-32 mx-auto object-contain animate-float"
            />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            A.N Bienes Raíces
          </h1>
          <p className="text-lg text-muted-foreground">
            Inversiones de los llanos
          </p>
        </div>

        {/* Main Website Link */}
        <div className="mb-8">
          <LinkButton 
            href="https://acaciasbienesraices.rapidsitepro.com/"
            variant="primary"
            icon="🌐"
          >
            Visitar Página Web
          </LinkButton>
        </div>

        {/* Properties Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4 text-center">
            Lotes en Venta
          </h2>
          <div className="space-y-4">
            {properties.map((property, index) => (
              <PropertyCard
                key={index}
                name={property.name}
                href={property.href}
              />
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4 text-center">
            Síguenos
          </h2>
          <div className="space-y-4">
            <LinkButton 
              href="https://www.facebook.com/profile.php?id=100087360983830"
              variant="social"
              icon="📘"
            >
              Facebook
            </LinkButton>
            
            <LinkButton 
              href="#"
              variant="social"
              icon="📷"
              className="opacity-75 cursor-not-allowed"
            >
              Instagram (Próximamente)
            </LinkButton>
            
            <LinkButton 
              href="#"
              variant="social"
              icon="🎵"
              className="opacity-75 cursor-not-allowed"
            >
              TikTok (Próximamente)
            </LinkButton>
          </div>
        </div>

        {/* WhatsApp Contacts */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4 text-center">
            Contáctanos por WhatsApp
          </h2>
          <div className="space-y-4">
            <LinkButton 
              href="https://wa.me/573227597180"
              variant="whatsapp"
              icon="📱"
            >
              +57 322 759 7180
            </LinkButton>
            
            <LinkButton 
              href="https://wa.me/573132574573"
              variant="whatsapp"
              icon="📱"
            >
              +57 313 257 4573
            </LinkButton>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2024 A.N Bienes Raíces</p>
          <p>Inversiones de los llanos</p>
        </div>
      </div>
    </div>
  );
};

export default Index;

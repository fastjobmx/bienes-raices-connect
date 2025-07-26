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
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-gold/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-40 right-16 w-48 h-48 bg-brand-green/5 rounded-full blur-xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-orange/5 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container max-w-md mx-auto px-6 py-12 relative z-10">
        {/* Header with Logo */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img 
              src="/lovable-uploads/e4bef0bd-01c6-4cae-b5af-c8066db30272.png" 
              alt="A.N Bienes Raíces - Inversiones de los llanos"
              className="w-36 h-36 mx-auto object-contain animate-float relative z-10 filter drop-shadow-xl"
            />
          </div>
          <h1 className="text-3xl font-black text-foreground mb-3 bg-gradient-primary bg-clip-text text-transparent animate-scale-in stagger-delay-1">
            A.N Bienes Raíces
          </h1>
          <p className="text-xl text-muted-foreground font-semibold animate-fade-in-up stagger-delay-2">
            Inversiones de los llanos
          </p>
          <div className="mt-4 w-24 h-1 bg-gradient-primary mx-auto rounded-full animate-scale-in stagger-delay-3"></div>
        </div>

        {/* Main Website Link */}
        <div className="mb-12 animate-fade-in-up stagger-delay-4">
          <LinkButton 
            href="https://acaciasbienesraices.rapidsitepro.com/"
            variant="primary"
            icon="🌐"
          >
            Visitar Página Web
          </LinkButton>
        </div>

        {/* Properties Section */}
        <div className="mb-12 animate-fade-in-up stagger-delay-5">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-foreground mb-2">
              🏘️ Lotes en Venta
            </h2>
            <p className="text-muted-foreground">
              Encuentra tu terreno ideal
            </p>
          </div>
          <div className="space-y-5">
            {properties.map((property, index) => (
              <div key={index} className={`animate-slide-in-left stagger-delay-${index + 1}`}>
                <PropertyCard
                  name={property.name}
                  href={property.href}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="mb-12">
          <div className="text-center mb-8 animate-fade-in-up">
            <h2 className="text-2xl font-black text-foreground mb-2">
              📱 Síguenos
            </h2>
            <p className="text-muted-foreground">
              Mantente conectado con nosotros
            </p>
          </div>
          <div className="space-y-5">
            <div className="animate-slide-in-left stagger-delay-1">
              <LinkButton 
                href="https://www.facebook.com/profile.php?id=100087360983830"
                variant="social"
                icon="📘"
              >
                Facebook
              </LinkButton>
            </div>
            
            <div className="animate-slide-in-left stagger-delay-2">
              <LinkButton 
                href="#"
                variant="social"
                icon="📷"
                disabled={true}
              >
                Instagram (Próximamente)
              </LinkButton>
            </div>
            
            <div className="animate-slide-in-left stagger-delay-3">
              <LinkButton 
                href="#"
                variant="social"
                icon="🎵"
                disabled={true}
              >
                TikTok (Próximamente)
              </LinkButton>
            </div>
          </div>
        </div>

        {/* WhatsApp Contacts */}
        <div className="mb-12">
          <div className="text-center mb-8 animate-fade-in-up">
            <h2 className="text-2xl font-black text-foreground mb-2">
              💬 Contáctanos por WhatsApp
            </h2>
            <p className="text-muted-foreground">
              Estamos aquí para ayudarte
            </p>
          </div>
          <div className="space-y-5">
            <div className="animate-slide-in-left stagger-delay-1">
              <LinkButton 
                href="https://wa.me/573227597180"
                variant="whatsapp"
                icon="📱"
              >
                +57 322 759 7180
              </LinkButton>
            </div>
            
            <div className="animate-slide-in-left stagger-delay-2">
              <LinkButton 
                href="https://wa.me/573132574573"
                variant="whatsapp"
                icon="📱"
              >
                +57 313 257 4573
              </LinkButton>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-muted-foreground animate-fade-in-up glass p-6 rounded-2xl border border-white/20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-brand-gold">✨</span>
            <p className="font-semibold">© 2024 A.N Bienes Raíces</p>
            <span className="text-brand-gold">✨</span>
          </div>
          <p className="text-xs">Inversiones de los llanos</p>
        </div>
      </div>
    </div>
  );
};

export default Index;

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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-white via-brand-light/20 to-brand-secondary/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-brand-primary/8 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 right-16 w-48 h-48 bg-brand-secondary/8 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-primary/6 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container max-w-lg mx-auto px-6 py-8 relative z-10">
        {/* Header with Logo */}
        <div className="text-center mb-10 animate-fade-in-up">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-brand-primary/10 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <img 
              src="/lovable-uploads/e4bef0bd-01c6-4cae-b5af-c8066db30272.png" 
              alt="A.N Bienes Raíces - Inversiones de los llanos"
              className="w-32 h-32 mx-auto object-contain animate-float relative z-10 filter drop-shadow-lg"
            />
          </div>
          <h1 className="text-3xl font-bold text-brand-accent mb-3 animate-scale-in stagger-delay-1">
            A.N Bienes Raíces
          </h1>
          <p className="text-lg text-brand-primary font-medium animate-fade-in-up stagger-delay-2">
            Inversiones de los llanos
          </p>
          <div className="mt-4 w-20 h-0.5 bg-brand-primary mx-auto rounded-full animate-scale-in stagger-delay-3"></div>
        </div>

        {/* Main Website Link */}
        <div className="mb-10 animate-fade-in-up stagger-delay-4">
          <LinkButton 
            href="https://acaciasbienesraices.rapidsitepro.com/"
            variant="primary"
            icon="🌐"
          >
            Visitar Página Web
          </LinkButton>
        </div>

        {/* Properties Section */}
        <div className="mb-10 animate-fade-in-up stagger-delay-5">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-brand-accent mb-2">
              🏘️ Lotes en Venta
            </h2>
            <p className="text-brand-primary/80">
              Encuentra tu terreno ideal
            </p>
          </div>
          <div className="space-y-4">
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
        <div className="mb-10">
          <div className="text-center mb-6 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-brand-accent mb-2">
              📱 Síguenos
            </h2>
            <p className="text-brand-primary/80">
              Mantente conectado con nosotros
            </p>
          </div>
          <div className="space-y-4">
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
        <div className="mb-10">
          <div className="text-center mb-6 animate-fade-in-up">
            <h2 className="text-2xl font-bold text-brand-accent mb-2">
              💬 Contáctanos por WhatsApp
            </h2>
            <p className="text-brand-primary/80">
              Estamos aquí para ayudarte
            </p>
          </div>
          <div className="space-y-4">
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
        <div className="text-center text-sm text-brand-primary/70 animate-fade-in-up glass-strong p-5 rounded-xl border border-brand-primary/10 shadow-soft">
          <div className="flex items-center justify-center gap-2 mb-1">
            <span className="text-brand-primary">✨</span>
            <p className="font-semibold text-brand-accent">© 2025 A.N Bienes Raíces</p>
            <span className="text-brand-primary">✨</span>
          </div>
          <p className="text-xs text-brand-primary/60">Inversiones de los llanos</p>
        </div>
      </div>
    </div>
  );
};

export default Index;

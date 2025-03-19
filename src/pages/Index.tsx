
import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import CTAButton from "@/components/CTAButton";
import { Clock, Shield, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet";

const Index = () => {
  const affiliateLink = "https://example.com/affiliate";
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Husrenovation.dk – Få gratis tilbud på renovering i dag!</title>
        <meta name="description" content="Få gratis og uforpligtende tilbud på husrenovering fra godkendte håndværkere i Danmark. Spar tid og penge på dit renoveringsprojekt." />
      </Helmet>

      <HeroSection
        title="Renover dit hus med de bedste håndværkere i Danmark"
        subtitle="Vi hjælper dig med at finde de rette eksperter til dit projekt, så du kan spare både tid og penge"
        ctaText="Få dine gratis tilbud"
        ctaLink={affiliateLink}
        backgroundImage="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Hvorfor vælge husrenovation.dk?
            </h2>
            <p className="text-xl text-gray-700">
              Vi gør det nemt og sikkert at finde de bedste håndværkere til dit renoveringsprojekt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Clock}
              title="Hurtige og nemme tilbud"
              description="Modtag op til 3 gratis og uforpligtende tilbud fra professionelle håndværkere i dit område på få minutter."
            />
            <FeatureCard
              icon={Shield}
              title="Professionelle og pålidelige håndværkere"
              description="Alle vores partnere er nøje udvalgt og kvalitetssikret for at sikre den bedste service til vores kunder."
            />
            <FeatureCard
              icon={Sparkles}
              title="Spar tid og penge"
              description="Med flere konkurrerende tilbud kan du sammenligne priser og finde den bedste løsning til dit budget."
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div 
                  className="h-64 md:h-full bg-cover bg-center" 
                  style={{ backgroundImage: "url(https://images.unsplash.com/photo-1518736346281-74648b872adb?q=80&w=1974&auto=format&fit=crop)" }}
                ></div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Har dit tag brug for renovering?
                  </h3>
                  <p className="text-gray-700 mb-8">
                    Vi hjælper dig med at finde de bedste tilbud på tagrenovering fra godkendte håndværkere i dit område.
                  </p>
                  <div>
                    <CTAButton href="/tagrenovering" variant="secondary">
                      Læs mere om tagrenovering
                    </CTAButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-blue text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klar til at komme i gang med dit projekt?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Få gratis og uforpligtende tilbud fra professionelle håndværkere i dit område i dag
          </p>
          <CTAButton 
            href={affiliateLink} 
            className="bg-white text-brand-blue hover:bg-gray-100"
          >
            Få dine gratis tilbud nu
          </CTAButton>
        </div>
      </section>
    </>
  );
};

export default Index;

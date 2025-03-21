import { useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import TrustSignals from "@/components/TrustSignals";
import PartnerSection from "@/components/PartnerSection";
import { Helmet } from "react-helmet";

const Tagrenovering = () => {
  const affiliateLink = "https://www.partner-ads.com/dk/c/p/53649/b/25692/https://www.3byggetilbud.dk/tilbud/tagrenovering/";
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Tagrenovering i Danmark – Tips til tagprojekt 2025</title>
        <meta name="description" content="Find kvalificerede tageksperter i dit lokalområde. Få vejledning om materialer, priser og løsninger til dit tagrenoveringsprojekt fra erfarne fagfolk." />
        <meta name="keywords" content="tagrenovering, nyt tag, tagarbejde, tagudskiftning, tagreparation, tageksperter, tagløsninger" />
      </Helmet>

      <div className="pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Affiliate Partner Logo */}
            <div className="mb-10 flex justify-center">
              <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                <img 
                  src="/lovable-uploads/a2dc3d3c-2ffd-4a00-967d-a9fb7dc4591e.png" 
                  alt="3byggetilbud.dk" 
                  className="h-24 md:h-28 w-auto transform hover:scale-105 transition-transform duration-300"
                />
              </a>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in">
              Få 3 Gratis Tilbud på Tagrenovering i Dag!
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Leder du efter en pålidelig løsning til tagrenovering? 
              Vi hjælper dig med at finde de bedste håndværkere i dit område. 
              Spar tid og penge ved at modtage 3 gratis og uforpligtende tilbud fra professionelle firmaer.
            </p>
            
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CTAButton href={affiliateLink} size="lg" className="w-full md:w-auto animate-pulse-soft">
                Bestil 3 uforpligtende tilbud
              </CTAButton>
            </div>
            
            {/* Partner Section */}
            <PartnerSection city="Danmark" affiliateLink={affiliateLink} />
            
            <div className="mb-16">
              <TrustSignals />
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Hvorfor renovere dit tag?
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Et velfungerende tag er afgørende for at beskytte dit hjem mod vind og vejr. Med tiden kan selv de bedste tage blive beskadiget af Danmarks omskiftelige vejrforhold, hvilket kan føre til problemer som fugt, skimmel og i værste fald strukturelle skader.
                </p>
                <p>
                  Ved at renovere dit tag i tide kan du:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Forhindre dyre og omfattende skader på dit hus</li>
                  <li>Øge værdien af din bolig ved salg</li>
                  <li>Reducere dine energiomkostninger med bedre isolering</li>
                  <li>Forbedre husets udseende og generelle tilstand</li>
                  <li>Forebygge problemer med fugt og skimmelsvamp</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Tegn på at dit tag trænger til renovering
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Det kan være svært at vide, hvornår dit tag har brug for renovering. Her er nogle tegn, du bør være opmærksom på:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tagsten eller -plader der er knækkede, skæve eller mangler</li>
                  <li>Fugt eller vandskader på loftet eller i tagkonstruktionen</li>
                  <li>Misfarvninger eller skimmel på vægge eller loft</li>
                  <li>Tagrender der er tilstoppede eller beskadigede</li>
                  <li>Stigende energiregninger, som kan skyldes dårlig tagisolering</li>
                  <li>Tagets alder - de fleste tage har en levetid på 20-50 år afhængigt af materialet</li>
                </ul>
                <p>
                  Hvis du bemærker et eller flere af disse problemer, er det tid til at overveje en tagrenovering. Vores netværk af professionelle håndværkere kan hjælpe dig med at vurdere tilstanden af dit tag og anbefale den bedste løsning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Forskellige typer af tagrenovering
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Nyt tag</h3>
                <p className="text-gray-700">
                  Udskiftning af hele taget er nødvendigt, når skaderne er omfattende eller taget er meget gammelt. Det giver mulighed for at opdatere til nye, mere energieffektive materialer.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Delvis udskiftning</h3>
                <p className="text-gray-700">
                  Hvis kun dele af taget er beskadiget, kan det være tilstrækkeligt at udskifte de berørte områder for at spare tid og penge.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Reparation</h3>
                <p className="text-gray-700">
                  Mindre problemer som enkelte ødelagte tagsten eller mindre lækager kan ofte løses med simple reparationer uden at udskifte hele taget.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vedligeholdelse</h3>
                <p className="text-gray-700">
                  Regelmæssig vedligeholdelse som rensning af tagrender, fjernelse af mos og alger, samt inspektion kan forlænge tagets levetid betydeligt.
                </p>
              </div>
            </div>
            
            <div className="bg-brand-lightBlue rounded-xl p-8 text-center mb-12 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Usikker på hvad dit tag har brug for?
              </h3>
              <p className="text-gray-700 mb-6">
                Vores erfarne håndværkere kan hjælpe dig med at vurdere tagets tilstand og anbefale den rette løsning for dit hjem.
              </p>
              <CTAButton href={affiliateLink} variant="primary">
                Bestil 3 uforpligtende tilbud
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-8 border border-brand-blue shadow-md">
              <div className="flex flex-col md:flex-row items-center mb-6">
                <a href="https://www.partner-ads.com/dk/klikbanner.php?partnerid=53649&bannerid=25692" target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/lovable-uploads/a2dc3d3c-2ffd-4a00-967d-a9fb7dc4591e.png" 
                    alt="3byggetilbud.dk" 
                    className="h-16 w-auto mb-4 md:mb-0 md:mr-6"
                  />
                </a>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-left">
                  Danmarks største formidler af byggeopgaver
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  <a href="https://www.partner-ads.com/dk/klikbanner.php?partnerid=53649&bannerid=25692" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-semibold">3byggetilbud.dk</a> formidler årligt mellem 70.000 og 100.000 bygge- og renoveringsprojekter og er dermed Danmarks klart største formidler af byggeopgaver.
                </p>
                <p>
                  Hos <a href="https://www.partner-ads.com/dk/klikbanner.php?partnerid=53649&bannerid=25692" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-semibold">3byggetilbud.dk</a> kan private boligejere, erhvervsdrivende og boligforeninger indhente 3 tilbud på ethvert byggeprojekt eller renoveringsopgave. 
                </p>
                <p>
                  <a href="https://www.partner-ads.com/dk/klikbanner.php?partnerid=53649&bannerid=25692" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-semibold">3byggetilbud.dk</a> har et landsdækkende netværk af flere tusinde håndværkerfirmaer og har været i branchen for formidling af byggeopgaver siden år 2000.
                </p>
              </div>
              
              <div className="mt-6 text-center">
                <CTAButton href={affiliateLink} variant="primary">
                  Få 3 gratis og uforpligtende tilbud
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="py-20 bg-cover bg-center shadow-inner" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(14, 165, 233, 0.85), rgba(14, 165, 233, 0.9)), url(https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?q=80&w=2070&auto=format&fit=crop)", 
          backgroundSize: "cover"
        }}
      >
        <div className="container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klar til at få tilbud på dit tagprojekt?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Det tager kun få minutter at få 3 gratis tilbud fra kvalificerede håndværkere i dit område
          </p>
          <CTAButton 
            href={affiliateLink} 
            size="lg"
            className="bg-white text-brand-blue hover:bg-gray-100 animate-pulse-soft shadow-lg"
          >
            Bestil 3 uforpligtende tilbud
          </CTAButton>
        </div>
      </section>
    </>
  );
};

export default Tagrenovering;

import { useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import TrustSignals from "@/components/TrustSignals";
import PartnerSection from "@/components/PartnerSection";
import { Helmet } from "react-helmet";

const Facaderenovering = () => {
  const affiliateLink = "https://www.3byggetilbud.dk/tilbud/facaderenovering/";
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Facaderenovering i Danmark – Tips til husfacaden 2025</title>
        <meta name="description" content="Find specialiserede facadeeksperter i dit lokalområde. Lær om materialer, isoleringsløsninger og vedligeholdelse for en flot og holdbar husfacade." />
        <meta name="keywords" content="facaderenovering, renovering af facade, facadearbejde, pudsning af facade, maling af facade, facadeisolering, murværk, facaderenovering pris" />
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
              Få 3 Gratis Tilbud på Facaderenovering i Dag!
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Er din husfacade klar til en fornyelse? Vi hjælper dig med at finde de bedste håndværkere til facaderenovering i dit område. 
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
                Hvorfor renovere din husfacade?
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Din husfacade er ikke bare husets ansigt udadtil, men også den første forsvarslinje mod vind og vejr. Med tiden kan selv de stærkeste facader blive udsat for slitage, som kan føre til fugtproblemer, skimmelsvamp og i værste fald strukturelle skader på bygningen.
                </p>
                <p>
                  Ved at renovere din facade i tide kan du:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Øge boligens værdi og forbedre dens udseende</li>
                  <li>Forebygge fugtproblemer og skimmelsvamp</li>
                  <li>Reducere dine varmeregninger med bedre isolering</li>
                  <li>Beskytte murværket mod yderligere nedbrydning</li>
                  <li>Forlænge bygningens levetid betydeligt</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Tegn på at din facade trænger til renovering
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Det kan være svært at vide, hvornår det er tid til at renovere facaden. Her er nogle advarselstegn, du bør være opmærksom på:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Revner eller huller i murværket eller pudsen</li>
                  <li>Afskallet maling eller puds</li>
                  <li>Fugtpletter på indvendige vægge</li>
                  <li>Misfarvninger eller algevækst på facaden</li>
                  <li>Porøst eller smuldrende murværk</li>
                  <li>Kolde vægge og træk indenfor</li>
                </ul>
                <p>
                  Bemærker du et eller flere af disse tegn, er det tid til at overveje en facaderenovering. Vores netværk af erfarne håndværkere kan hjælpe dig med at vurdere facadens tilstand og anbefale den bedste løsning for netop dit hus.
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
              Forskellige typer facaderenovering
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Murværksreparation</h3>
                <p className="text-gray-700">
                  Udbedring af revner, udskiftning af løse eller beskadigede mursten, og omfugning for at sikre murværkets integritet og forhindre fugtindtrængning.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pudsning og maling</h3>
                <p className="text-gray-700">
                  Fornyelse af facadens udseende med ny puds og maling, der både beskytter murværket og giver huset et friskt udseende.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Facadeisolering</h3>
                <p className="text-gray-700">
                  Forbedring af husets energieffektivitet med udvendig isolering, der reducerer varmetab og giver bedre indeklima.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Facadebeklædning</h3>
                <p className="text-gray-700">
                  Montering af ny facadebeklædning som træ, skifer eller fibercementplader, der giver huset et helt nyt udtryk og beskytter mod vejrliget.
                </p>
              </div>
            </div>
            
            <div className="bg-brand-lightBlue rounded-xl p-8 text-center mb-12 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Usikker på hvad din facade har brug for?
              </h3>
              <p className="text-gray-700 mb-6">
                Få en professionel vurdering fra lokale eksperter. Det er gratis og uforpligtende!
              </p>
              <CTAButton href={affiliateLink} className="md:w-auto">
                Indhent gratis tilbud nu
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Fordele ved professionel facaderenovering
            </h2>
            
            <div className="space-y-6 text-gray-700 mb-12">
              <p>
                Facaderenovering er et omfattende arbejde, der kræver både faglig viden og erfaring. Her er nogle grunde til at vælge professionelle håndværkere til opgaven:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ekspertise og erfaring</h3>
                  <p>
                    Professionelle håndværkere har den nødvendige viden om materialer, teknikker og bygningsregler til at udføre arbejdet korrekt.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Langtidsholdbare resultater</h3>
                  <p>
                    En professionelt udført facaderenovering holder typisk længere og giver bedre beskyttelse mod vejr og vind.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Værdiskabende investering</h3>
                  <p>
                    En flot og velholdt facade kan øge din boligs værdi betydeligt og gøre den mere attraktiv ved et eventuelt salg.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Sikkerhed og garanti</h3>
                  <p>
                    Professionelle håndværkere er forsikrede og tilbyder typisk garanti på deres arbejde, så du er sikret ved eventuelle problemer.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Klar til at forny din husfacade?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Få uforpligtende tilbud fra op til 3 professionelle håndværkere i dit område
              </p>
              <CTAButton href={affiliateLink} size="lg">
                Få gratis tilbud nu
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Facaderenovering; 
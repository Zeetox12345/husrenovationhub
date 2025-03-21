import { useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import TrustSignals from "@/components/TrustSignals";
import PartnerSection from "@/components/PartnerSection";
import { Helmet } from "react-helmet";
import { Container } from "@/components/ui/container";

const TagrenoveringEsbjerg = () => {
  const affiliateLink = "https://www.partner-ads.com/dk/c/p/53649/b/25692/https://www.3byggetilbud.dk/tilbud/tagrenovering/";
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Tagrenovering i Esbjerg – Tips til tagløsninger 2025</title>
        <meta name="description" content="Professionel tagrenovering i Esbjerg udført af erfarne tageksperter. Få skræddersyet rådgivning om tagtyper, vedligeholdelse og vejrbestandige løsninger." />
        <meta name="keywords" content="tagrenovering esbjerg, tag esbjerg, tagarbejde esbjerg, tagudskiftning esbjerg, tagreparation esbjerg" />
        <link rel="canonical" href="https://renoverbolig.dk/tagrenovering-esbjerg" />
      </Helmet>

      <div className="pt-24 md:pt-32 pb-16 md:pb-20">
        <Container>
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
              Få 3 Gratis Tilbud på Tagrenovering i Esbjerg!
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Leder du efter en pålidelig løsning til tagrenovering i Esbjerg? 
              Vi hjælper dig med at finde de bedste håndværkere i Esbjerg og omegn. 
              Spar tid og penge ved at modtage 3 gratis og uforpligtende tilbud fra professionelle firma i Esbjerg.
            </p>
            
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CTAButton href={affiliateLink} size="lg" className="w-full md:w-auto animate-pulse-soft">
                Bestil 3 uforpligtende tilbud i Esbjerg
              </CTAButton>
            </div>

            {/* Partner Section */}
            <PartnerSection city="Esbjerg" affiliateLink={affiliateLink} />

            {/* Trust Signals */}
            <TrustSignals />
          </div>
        </Container>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Hvorfor renovere dit tag i Esbjerg?
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Et velfungerende tag er afgørende for at beskytte dit hjem mod vind og vejr. I Esbjerg, hvor vestenvinden og det barske Vesterhavs-klima ofte sætter bygninger på prøve, er et robust tag ekstra vigtigt.
                </p>
                <p>
                  Ved at renovere dit tag i Esbjerg kan du:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Forhindre dyre og omfattende skader på dit hus i det udfordrende vestkystklima</li>
                  <li>Øge værdien af din bolig på det voksende esbjerggensiske boligmarked</li>
                  <li>Reducere dine energiomkostninger med bedre isolering – særligt vigtigt i det blæsende vestjyske klima</li>
                  <li>Forbedre husets udseende og generelle tilstand</li>
                  <li>Forebygge problemer med fugt og skimmelsvamp, som kan forårsages af Esbjergs kystnære beliggenhed</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Særlige forhold ved tagrenovering i Esbjerg
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Tagrenovering i Esbjerg har nogle særlige forhold, du bør være opmærksom på:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Byggetilladelser og godkendelser fra Esbjerg Kommune kan være nødvendige, særligt i bevaringsværdige områder</li>
                  <li>Kystnære områder er særligt udsatte for saltholdig luft og stærke vestenvinde, hvilket stiller særlige krav til tagmaterialer</li>
                  <li>Lokale bygningsreglementer kan stille specifikke krav til materialevalg og udførelse</li>
                  <li>Områder som Hjerting, Sædding og Gjesing har forskellige bygningsstile, der kræver forskellige tagløsninger</li>
                  <li>Esbjergs maritime og industrielle historie betyder, at mange huse har særlige tagkonstruktioner, der kræver ekspertise</li>
                </ul>
                <p>
                  Vores netværk af erfarne taghåndværkere i Esbjerg kender de lokale forhold og kan hjælpe dig med at navigere gennem disse udfordringer.
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
              Populære tagtyper i Esbjerg
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tegltag</h3>
                <p className="text-gray-700">
                  Teglsten er meget udbredt i Esbjerg, særligt i de ældre kvarterer. De er holdbare, æstetisk tiltalende og har god modstandskraft mod det hårde vestkyst-klima.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cementtagsten</h3>
                <p className="text-gray-700">
                  Cementtagsten er populære i Esbjerg på grund af deres holdbarhed over for det saltholdige miljø. De er robuste, prismæssigt attraktive og vejrbestandige.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Eternittag</h3>
                <p className="text-gray-700">
                  Eternittag er udbredt i Esbjergs nyere boligområder. Moderne eternitplader er fri for asbest, lette og modstandsdygtige over for det barske vestjyske vejr.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Metaltag</h3>
                <p className="text-gray-700">
                  Metaltage vinder frem i Esbjerg, særligt til nybyggeri. De er ekstremt holdbare over for vind og vejr, lette og har lang levetid selv i det udfordrende kystmiljø.
                </p>
              </div>
            </div>
            
            <div className="bg-brand-lightBlue rounded-xl p-8 text-center mb-12 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Usikker på hvilken tagløsning der passer til din bolig i Esbjerg?
              </h3>
              <p className="text-gray-700 mb-6">
                Vores erfarne håndværkere i Esbjerg kan hjælpe dig med at vurdere tagets tilstand og anbefale den rette løsning for dit hjem.
              </p>
              <CTAButton href={affiliateLink} variant="primary">
                Bestil 3 uforpligtende tilbud i Esbjerg
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Find de bedste håndværkere til tagrenovering i Esbjerg
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                At finde kvalificerede håndværkere i Esbjerg kan være en udfordring. Her er nogle fordele ved at bruge vores service:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vi samarbejder kun med erfarne, certificerede og anmeldelsesverificerede håndværkere i Esbjerg-området</li>
                <li>Alle tilbud er skræddersyet til dit specifikke projekt og dine behov</li>
                <li>Du sparer tid ved ikke selv at skulle kontakte og indhente tilbud fra forskellige firmaer</li>
                <li>Vores håndværkere har specifik erfaring med vestjyske bygninger og lokale byggereglementer</li>
                <li>Gennemsigtighed i priserne gør det nemt for dig at sammenligne og vælge det bedste tilbud</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="py-20 bg-cover bg-center shadow-inner" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(14, 165, 233, 0.85), rgba(14, 165, 233, 0.9)), url(https://images.unsplash.com/photo-1622030411594-c280b198319f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80)", 
          backgroundSize: "cover"
        }}
      >
        <div className="container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klar til at få tilbud på dit tagprojekt i Esbjerg?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Det tager kun få minutter at få 3 gratis tilbud fra kvalificerede håndværkere i Esbjerg og omegn
          </p>
          <CTAButton 
            href={affiliateLink} 
            size="lg"
            className="bg-white text-brand-blue hover:bg-gray-100 animate-pulse-soft shadow-lg"
          >
            Bestil 3 uforpligtende tilbud i Esbjerg
          </CTAButton>
        </div>
      </section>
    </>
  );
};

export default TagrenoveringEsbjerg; 
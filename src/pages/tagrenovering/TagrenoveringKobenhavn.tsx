import { useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import TrustSignals from "@/components/TrustSignals";
import PartnerSection from "@/components/PartnerSection";
import { Helmet } from "react-helmet";
import { Container } from "@/components/ui/container";

const TagrenoveringKobenhavn = () => {
  const affiliateLink = "https://www.3byggetilbud.dk/tilbud/tagrenovering/";
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Tagrenovering i København – Tips til tagarbejde 2025</title>
        <meta name="description" content="Kvalificeret tagrenovering i København udført af certificerede tageksperter. Få professionel rådgivning om materialevalg, holdbarhed og energioptimering." />
        <meta name="keywords" content="tagrenovering københavn, tag københavn, tagarbejde københavn, tagudskiftning københavn, tagreparation københavn" />
        <link rel="canonical" href="https://husrenovation.dk/tagrenovering-kobenhavn" />
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
              Få 3 Gratis Tilbud på Tagrenovering i København!
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Leder du efter en pålidelig løsning til tagrenovering i hovedstaden? 
              Vi hjælper dig med at finde de bedste håndværkere i København og omegn. 
              Spar tid og penge ved at modtage 3 gratis og uforpligtende tilbud fra professionelle firma i København.
            </p>
            
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CTAButton href={affiliateLink} size="lg" className="w-full md:w-auto animate-pulse-soft">
                Bestil 3 uforpligtende tilbud i København
              </CTAButton>
            </div>

            {/* Partner Section */}
            <PartnerSection city="København" affiliateLink={affiliateLink} />

            {/* Trust Signals */}
            <TrustSignals />
          </div>
        </Container>
      </div>

      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Hvorfor renovere dit tag i København?
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Et velfungerende tag er afgørende for at beskytte dit hjem mod vind og vejr. I en storby som København, hvor bygninger ofte er ældre og udsættes for forurening og vejrpåvirkninger, er regelmæssig tagrenovering særligt vigtigt.
                </p>
                <p>
                  Ved at renovere dit tag i København kan du:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Forhindre dyre og omfattende skader på dit hus i den dyre hovedstadsregion</li>
                  <li>Øge værdien af din bolig på det attraktive københavnske boligmarked</li>
                  <li>Reducere dine energiomkostninger med bedre isolering – vigtigt i ældre københavnske bygninger</li>
                  <li>Forbedre husets udseende og generelle tilstand</li>
                  <li>Forebygge problemer med fugt og skimmelsvamp, som kan være udbredt i ældre københavnske ejendomme</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Særlige forhold ved tagrenovering i København
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Tagrenovering i København har nogle særlige forhold, du bør være opmærksom på:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Byggetilladelser og godkendelser fra Københavns Kommune kan være nødvendige, især for fredede bygninger eller ejendomme i bevaringsværdige områder</li>
                  <li>Lokale bygningsreglementer kan stille særlige krav til materialevalg og udførelse</li>
                  <li>I tæt bebyggede områder kan adgangsforhold være en udfordring, hvilket kræver specialudstyr og erfaring</li>
                  <li>Vejrforhold i hovedstadsområdet, herunder saltholdig luft fra havnen, kan påvirke valg af tagmaterialer</li>
                  <li>Ældre københavnske ejendomme kan have særlige konstruktioner, der kræver ekspertise</li>
                </ul>
                <p>
                  Vores netværk af erfarne taghåndværkere i København kender de lokale forhold og kan hjælpe dig med at navigere gennem disse udfordringer.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Populære tagtyper i København
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tegltag</h3>
                <p className="text-gray-700">
                  Teglsten er meget udbredt i København, især på ældre ejendomme. De er holdbare, æstetisk tiltalende og passer godt til byens historiske arkitektur.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Eternittag</h3>
                <p className="text-gray-700">
                  Mange københavnske huse har eternittag, som er lette og vedligeholdelsesvenlige. Moderne eternitplader er fri for asbest og miljøvenlige.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Grønne tage</h3>
                <p className="text-gray-700">
                  I tråd med Københavns fokus på bæredygtighed bliver grønne tage stadig mere populære. De forbedrer isolering, absorberer regnvand og bidrager til biodiversitet.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kobbertag</h3>
                <p className="text-gray-700">
                  Kobbertage ses ofte på prominente bygninger i København. De er ekstremt holdbare, ældes smukt og giver bygningen et eksklusivt udtryk.
                </p>
              </div>
            </div>
            
            <div className="bg-brand-lightBlue rounded-xl p-8 text-center mb-12 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Usikker på hvilken tagløsning der passer til din københavnske bolig?
              </h3>
              <p className="text-gray-700 mb-6">
                Vores erfarne håndværkere i København kan hjælpe dig med at vurdere tagets tilstand og anbefale den rette løsning for dit hjem.
              </p>
              <CTAButton href={affiliateLink} variant="primary">
                Bestil 3 uforpligtende tilbud i København
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Find de bedste håndværkere til tagrenovering i København
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                At finde kvalificerede håndværkere i København kan være en udfordring, især i perioder med høj byggeaktivitet. Her er nogle fordele ved at bruge vores service:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vi samarbejder kun med erfarne, certificerede og anmeldelsesverificerede håndværkere i København</li>
                <li>Alle tilbud er skræddersyet til dit specifikke projekt og dine behov</li>
                <li>Du sparer tid ved ikke selv at skulle kontakte og indhente tilbud fra forskellige firmaer</li>
                <li>Vores håndværkere har specifik erfaring med københavnske bygninger og lokale byggereglementer</li>
                <li>Gennemsigtighed i priserne gør det nemt for dig at sammenligne og vælge det bedste tilbud</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section 
        className="py-20 bg-cover bg-center shadow-inner" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(14, 165, 233, 0.85), rgba(14, 165, 233, 0.9)), url(https://images.unsplash.com/photo-1536895058696-a69b1c7ba34f?q=80&w=2070&auto=format&fit=crop)", 
          backgroundSize: "cover"
        }}
      >
        <Container className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klar til at få tilbud på dit tagprojekt i København?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Det tager kun få minutter at få 3 gratis tilbud fra kvalificerede håndværkere i København og omegn
          </p>
          <CTAButton 
            href={affiliateLink} 
            size="lg"
            className="bg-white text-brand-blue hover:bg-gray-100 animate-pulse-soft shadow-lg"
          >
            Bestil 3 uforpligtende tilbud i København
          </CTAButton>
        </Container>
      </section>
    </>
  );
};

export default TagrenoveringKobenhavn; 
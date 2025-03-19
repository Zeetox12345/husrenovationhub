import { useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import TrustSignals from "@/components/TrustSignals";
import { Helmet } from "react-helmet";

const TagrenoveringKolding = () => {
  const affiliateLink = "https://example.com/affiliate/tag/kolding";
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Tagrenovering i Kolding – Få 3 gratis tilbud på nyt tag</title>
        <meta name="description" content="Få 3 gratis tilbud på tagrenovering fra professionelle håndværkere i Kolding. Sammenlign priser og kvalitet uden forpligtelser." />
        <meta name="keywords" content="tagrenovering kolding, tag kolding, tagarbejde kolding, tagudskiftning kolding, tagreparation kolding" />
        <link rel="canonical" href="https://husrenovation.dk/tagrenovering-kolding" />
      </Helmet>

      <div className="pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Affiliate Partner Logo */}
            <div className="mb-10 flex justify-center">
              <img 
                src="/lovable-uploads/a2dc3d3c-2ffd-4a00-967d-a9fb7dc4591e.png" 
                alt="3byggetilbud.dk" 
                className="h-24 md:h-28 w-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in">
              Få 3 Gratis Tilbud på Tagrenovering i Kolding!
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Leder du efter en pålidelig løsning til tagrenovering i Kolding? 
              Vi hjælper dig med at finde de bedste håndværkere i Kolding og omegn. 
              Spar tid og penge ved at modtage 3 gratis og uforpligtende tilbud fra professionelle firmaer i Sydjylland.
            </p>
            
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CTAButton href={affiliateLink} size="lg" className="w-full md:w-auto animate-pulse-soft">
                Bestil 3 uforpligtende tilbud i Kolding
              </CTAButton>
            </div>
            
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
                Hvorfor renovere dit tag i Kolding?
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Et velfungerende tag er afgørende for at beskytte dit hjem mod vind og vejr. I Kolding, hvor klimaet er påvirket af byens placering ved Kolding Fjord og det omskiftelige vejr i trekantsområdet, er et robust tag særligt vigtigt.
                </p>
                <p>
                  Ved at renovere dit tag i Kolding kan du:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Forhindre dyre og omfattende skader på dit hus i det sydjyske klima</li>
                  <li>Øge værdien af din bolig på det dynamiske boligmarked i Kolding</li>
                  <li>Reducere dine energiomkostninger med bedre isolering – vigtigt for både de ældre huse i centrum og nyere boliger i forstæderne</li>
                  <li>Forbedre husets udseende og generelle tilstand</li>
                  <li>Forebygge problemer med fugt og skimmelsvamp, som kan være et problem i det fugtige klima nær fjorden</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Særlige forhold ved tagrenovering i Kolding
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Tagrenovering i Kolding har nogle særlige forhold, du bør være opmærksom på:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Byggetilladelser og godkendelser fra Kolding Kommune kan være nødvendige, især i bevaringsværdige områder som den historiske bykerne</li>
                  <li>Lokale bygningsreglementer kan stille særlige krav til materialevalg og udførelse</li>
                  <li>Koldings bakker og kuperede terræn kan påvirke tagkonstruktioner og afvandingssystemer</li>
                  <li>Kystnære områder ved Kolding Fjord er særligt udsatte for vind og saltholdig luft</li>
                  <li>Områder som Dalby, Vonsild, Seest og Bramdrupdam har forskellige hustyper, der kræver forskellige tagløsninger</li>
                </ul>
                <p>
                  Vores netværk af erfarne taghåndværkere i Kolding kender de lokale forhold og kan hjælpe dig med at navigere gennem disse udfordringer.
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
              Populære tagtyper i Kolding
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tegltag</h3>
                <p className="text-gray-700">
                  Teglsten er meget udbredt i Kolding, særligt i den historiske bykerne og ældre villakvarterer. De er holdbare, æstetisk tiltalende og passer godt til byens arkitektur.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Eternittag</h3>
                <p className="text-gray-700">
                  Eternittag ses ofte i parcelhuskvarterer i Kolding. Moderne versioner er miljøvenlige, lette og kræver minimal vedligeholdelse, hvilket gør dem populære ved renovering.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Betontagsten</h3>
                <p className="text-gray-700">
                  Betontagsten er populære i nyere boligområder i Kolding på grund af deres holdbarhed, forskellige farvemuligheder og gode pris-kvalitetsforhold.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tagpap</h3>
                <p className="text-gray-700">
                  Tagpap anvendes ofte til flade tage og er en robust løsning for moderne bygninger og erhvervsejendomme i Kolding. Det er vandtæt, holdbart og relativt let at vedligeholde.
                </p>
              </div>
            </div>
            
            <div className="bg-brand-lightBlue rounded-xl p-8 text-center mb-12 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Usikker på hvilken tagløsning der passer til din bolig i Kolding?
              </h3>
              <p className="text-gray-700 mb-6">
                Vores erfarne håndværkere i Kolding kan hjælpe dig med at vurdere tagets tilstand og anbefale den rette løsning for dit hjem.
              </p>
              <CTAButton href={affiliateLink} variant="primary">
                Bestil 3 uforpligtende tilbud i Kolding
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Find de bedste håndværkere til tagrenovering i Kolding
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                At finde kvalificerede håndværkere i Kolding kan være en udfordring. Her er nogle fordele ved at bruge vores service:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vi samarbejder kun med erfarne, certificerede og anmeldelsesverificerede håndværkere i Kolding-området</li>
                <li>Alle tilbud er skræddersyet til dit specifikke projekt og dine behov</li>
                <li>Du sparer tid ved ikke selv at skulle kontakte og indhente tilbud fra forskellige firmaer</li>
                <li>Vores håndværkere har specifik erfaring med sydjyske bygninger og lokale byggereglementer</li>
                <li>Gennemsigtighed i priserne gør det nemt for dig at sammenligne og vælge det bedste tilbud</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="py-20 bg-cover bg-center shadow-inner" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(14, 165, 233, 0.85), rgba(14, 165, 233, 0.9)), url(https://images.unsplash.com/photo-1595877244574-e90ce41ce089?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80)", 
          backgroundSize: "cover"
        }}
      >
        <div className="container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klar til at få tilbud på dit tagprojekt i Kolding?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Det tager kun få minutter at få 3 gratis tilbud fra kvalificerede håndværkere i Kolding og omegn
          </p>
          <CTAButton 
            href={affiliateLink} 
            size="lg"
            className="bg-white text-brand-blue hover:bg-gray-100 animate-pulse-soft shadow-lg"
          >
            Bestil 3 uforpligtende tilbud i Kolding
          </CTAButton>
        </div>
      </section>
    </>
  );
};

export default TagrenoveringKolding; 
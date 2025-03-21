import { useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import TrustSignals from "@/components/TrustSignals";
import PartnerSection from "@/components/PartnerSection";
import { Helmet } from "react-helmet";
import { Container } from "@/components/ui/container";

const TagrenoveringAarhus = () => {
  const affiliateLink = "https://www.partner-ads.com/dk/c/p/53649/b/25692/https://www.3byggetilbud.dk/tilbud/tagrenovering/";
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Tagrenovering i Aarhus – Tips til nyt tag 2025</title>
        <meta name="description" content="Professionel tagrenovering i Aarhus af erfarne tagspecialister. Få vejledning om materialer, løsninger og priser til din tagudskiftning eller -reparation." />
        <meta name="keywords" content="tagrenovering aarhus, tag aarhus, tagarbejde aarhus, tagudskiftning aarhus, tagreparation aarhus" />
        <link rel="canonical" href="https://renoverbolig.dk/tagrenovering-aarhus" />
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
              Få 3 Gratis Tilbud på Tagrenovering i Aarhus!
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Leder du efter en pålidelig løsning til tagrenovering i Aarhus? 
              Vi hjælper dig med at finde de bedste håndværkere i Aarhus og omegn. 
              Spar tid og penge ved at modtage 3 gratis og uforpligtende tilbud fra professionelle firma i Aarhus.
            </p>
            
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CTAButton href={affiliateLink} size="lg" className="w-full md:w-auto animate-pulse-soft">
                Bestil 3 uforpligtende tilbud i Aarhus
              </CTAButton>
            </div>

            {/* Partner Section */}
            <PartnerSection city="Aarhus" affiliateLink={affiliateLink} />

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
                Hvorfor renovere dit tag i Aarhus?
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Et velfungerende tag er afgørende for at beskytte dit hjem mod vind og vejr. I Aarhus, hvor vejret kan være særligt udfordrende med kraftig vind fra Aarhus Bugt og hyppige nedbørsperioder, er et robust tag ekstra vigtigt.
                </p>
                <p>
                  Ved at renovere dit tag i Aarhus kan du:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Forhindre dyre og omfattende skader på dit hus i det attraktive aarhusianske boligmarked</li>
                  <li>Øge værdien af din bolig - særligt værdifuldt i en universitetsby med stor efterspørgsel</li>
                  <li>Reducere dine energiomkostninger med bedre isolering – vigtigt i både ældre villaer og nyere byggeri</li>
                  <li>Forbedre husets udseende og generelle tilstand</li>
                  <li>Forebygge problemer med fugt og skimmelsvamp, som kan være udbredt i det fugtige østjyske klima</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Særlige forhold ved tagrenovering i Aarhus
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Tagrenovering i Aarhus har nogle særlige forhold, du bør være opmærksom på:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Byggetilladelser og godkendelser fra Aarhus Kommune kan være nødvendige, især i bevaringsværdige områder som Frederiksbjerg, Latinerkvarteret eller Trøjborg</li>
                  <li>Lokale bygningsreglementer kan stille særlige krav til materialevalg og udførelse</li>
                  <li>Kystnære områder som Risskov, Egå og Skæring kan være særligt udsatte for hård vind og salt fra havet</li>
                  <li>Byens ældre bygninger i centrum kan have særlige tagkonstruktioner, der kræver ekspertise</li>
                  <li>Områder som fx Højbjerg, Viby og Åbyhøj har mange forskellige hustyper, der kræver forskellige tagløsninger</li>
                </ul>
                <p>
                  Vores netværk af erfarne taghåndværkere i Aarhus kender de lokale forhold og kan hjælpe dig med at navigere gennem disse udfordringer.
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
              Populære tagtyper i Aarhus
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tegltag</h3>
                <p className="text-gray-700">
                  Teglsten er meget udbredt i Aarhus, særligt i de ældre kvarterer. De er holdbare, æstetisk tiltalende og passer godt til mange huse i området.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Eternittag</h3>
                <p className="text-gray-700">
                  Mange parcelhuse i Aarhus' forstæder har eternittag, som er lette og vedligeholdelsesvenlige. Moderne eternitplader er fri for asbest og miljøvenlige.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Grønne tage</h3>
                <p className="text-gray-700">
                  I tråd med Aarhus' fokus på at være en bæredygtig by bliver grønne tage stadig mere populære, særligt i nybyggeri og ved Aarhus Ø og Dokk1-området.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tagpap</h3>
                <p className="text-gray-700">
                  Tagpap er særligt populært til flade tage og er en holdbar og økonomisk løsning, som mange vælger i Aarhus, især til tilbygninger og carporte.
                </p>
              </div>
            </div>
            
            <div className="bg-brand-lightBlue rounded-xl p-8 text-center mb-12 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Usikker på hvilken tagløsning der passer til dit hus i Aarhus?
              </h3>
              <p className="text-gray-700 mb-6">
                Vores erfarne håndværkere i Aarhus kan hjælpe dig med at vurdere tagets tilstand og anbefale den rette løsning for dit hjem.
              </p>
              <CTAButton href={affiliateLink} variant="primary">
                Bestil 3 uforpligtende tilbud i Aarhus
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Find de bedste håndværkere til tagrenovering i Aarhus
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Med den høje byggeaktivitet i Aarhus kan det være en udfordring at finde gode håndværkere. Her er nogle fordele ved at bruge vores service:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vi samarbejder kun med erfarne, certificerede og anmeldelsesverificerede håndværkere i Aarhus-området</li>
                <li>Alle tilbud er skræddersyet til dit specifikke projekt og dine behov</li>
                <li>Du sparer tid ved ikke selv at skulle kontakte og indhente tilbud fra forskellige firmaer</li>
                <li>Vores håndværkere har specifik erfaring med aarhusianske bygninger og lokale byggereglementer</li>
                <li>Gennemsigtighed i priserne gør det nemt for dig at sammenligne og vælge det bedste tilbud</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="py-20 bg-cover bg-center shadow-inner" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(14, 165, 233, 0.85), rgba(14, 165, 233, 0.9)), url(https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)", 
          backgroundSize: "cover"
        }}
      >
        <div className="container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klar til at få tilbud på dit tagprojekt i Aarhus?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Det tager kun få minutter at få 3 gratis tilbud fra kvalificerede håndværkere i Aarhus og omegn
          </p>
          <CTAButton 
            href={affiliateLink} 
            size="lg"
            className="bg-white text-brand-blue hover:bg-gray-100 animate-pulse-soft shadow-lg"
          >
            Bestil 3 uforpligtende tilbud i Aarhus
          </CTAButton>
        </div>
      </section>
    </>
  );
};

export default TagrenoveringAarhus; 
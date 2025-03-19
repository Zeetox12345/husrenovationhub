import { useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import TrustSignals from "@/components/TrustSignals";
import { Helmet } from "react-helmet";

const TagrenoveringRanders = () => {
  const affiliateLink = "https://example.com/affiliate/tag/randers";
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Tagrenovering i Randers – Få 3 gratis tilbud på nyt tag</title>
        <meta name="description" content="Få 3 gratis tilbud på tagrenovering fra professionelle håndværkere i Randers. Sammenlign priser og kvalitet uden forpligtelser." />
        <meta name="keywords" content="tagrenovering randers, tag randers, tagarbejde randers, tagudskiftning randers, tagreparation randers" />
        <link rel="canonical" href="https://husrenovation.dk/tagrenovering-randers" />
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
              Få 3 Gratis Tilbud på Tagrenovering i Randers!
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Leder du efter en pålidelig løsning til tagrenovering i Randers? 
              Vi hjælper dig med at finde de bedste håndværkere i Randers og omegn. 
              Spar tid og penge ved at modtage 3 gratis og uforpligtende tilbud fra professionelle firmaer i Østjylland.
            </p>
            
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CTAButton href={affiliateLink} size="lg" className="w-full md:w-auto animate-pulse-soft">
                Bestil 3 uforpligtende tilbud i Randers
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
                Hvorfor renovere dit tag i Randers?
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Et velfungerende tag er afgørende for at beskytte dit hjem mod vind og vejr. I Randers, hvor vejret kan være varierende og byen ofte oplever både regn og blæst fra Randers Fjord, er et robust tag særlig vigtigt for din bolig.
                </p>
                <p>
                  Ved at renovere dit tag i Randers kan du:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Forhindre dyre og omfattende skader på dit hus i det østjyske vejrlig</li>
                  <li>Øge værdien af din bolig på det attraktive randrussianske boligmarked</li>
                  <li>Reducere dine energiomkostninger med bedre isolering – vigtig for både ældre huse i Randers centrum og nyere villakvarterer</li>
                  <li>Forbedre husets udseende og generelle tilstand</li>
                  <li>Forebygge problemer med fugt og skimmelsvamp, især i byens ældre ejendomme</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Særlige forhold ved tagrenovering i Randers
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Tagrenovering i Randers har nogle særlige forhold, du bør være opmærksom på:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Byggetilladelser og godkendelser fra Randers Kommune kan være nødvendige, især i bevaringsværdige områder som den historiske bykerne</li>
                  <li>Lokale bygningsreglementer kan stille særlige krav til materialevalg og udførelse</li>
                  <li>Byens blandede arkitektur, fra historiske ejendomme i centrum til nyere villakvarterer, kræver forskellige tilgange til tagrenovering</li>
                  <li>Nærheden til Randers Fjord og Gudenåen betyder, at mange områder i byen kan have højere luftfugtighed</li>
                  <li>Områder som Vorup, Hornbæk og Kristrup har forskellige hustyper, der kræver specialiserede tagløsninger</li>
                </ul>
                <p>
                  Vores netværk af erfarne taghåndværkere i Randers kender de lokale forhold og kan hjælpe dig med at navigere gennem disse udfordringer.
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
              Populære tagtyper i Randers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tegltag</h3>
                <p className="text-gray-700">
                  Teglsten er meget udbredt i Randers, særligt på byens ældre ejendomme og i den historiske bykerne. De er holdbare, æstetisk tiltalende og passer perfekt til byens arkitektoniske arv.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Eternittag</h3>
                <p className="text-gray-700">
                  Eternittag ses ofte i Randers' parcelhuskvarterer fra 1960'erne og 1970'erne. Moderne eternitplader er asbestfrie, miljøvenlige og kræver minimal vedligeholdelse.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Betontagsten</h3>
                <p className="text-gray-700">
                  Betontagsten er populære i nyere boligområder i Randers på grund af deres holdbarhed, forskellige farvemuligheder og attraktive pris-kvalitet forhold.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tagpap</h3>
                <p className="text-gray-700">
                  Tagpap anvendes ofte til flade tage og er en robust løsning for moderne bygninger og tilbygninger i Randers. Det er vandtæt, holdbart og relativt let at vedligeholde.
                </p>
              </div>
            </div>
            
            <div className="bg-brand-lightBlue rounded-xl p-8 text-center mb-12 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Usikker på hvilken tagløsning der passer til din bolig i Randers?
              </h3>
              <p className="text-gray-700 mb-6">
                Vores erfarne håndværkere i Randers kan hjælpe dig med at vurdere tagets tilstand og anbefale den rette løsning for dit hjem.
              </p>
              <CTAButton href={affiliateLink} variant="primary">
                Bestil 3 uforpligtende tilbud i Randers
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Find de bedste håndværkere til tagrenovering i Randers
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                At finde kvalificerede håndværkere i Randers kan være en udfordring. Her er nogle fordele ved at bruge vores service:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vi samarbejder kun med erfarne, certificerede og anmeldelsesverificerede håndværkere i Randers-området</li>
                <li>Alle tilbud er skræddersyet til dit specifikke projekt og dine behov</li>
                <li>Du sparer tid ved ikke selv at skulle kontakte og indhente tilbud fra forskellige firmaer</li>
                <li>Vores håndværkere har specifik erfaring med randrussianske bygninger og lokale byggereglementer</li>
                <li>Gennemsigtighed i priserne gør det nemt for dig at sammenligne og vælge det bedste tilbud</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section 
        className="py-20 bg-cover bg-center shadow-inner" 
        style={{ 
          backgroundImage: "linear-gradient(rgba(14, 165, 233, 0.85), rgba(14, 165, 233, 0.9)), url(https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)", 
          backgroundSize: "cover"
        }}
      >
        <div className="container text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klar til at få tilbud på dit tagprojekt i Randers?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Det tager kun få minutter at få 3 gratis tilbud fra kvalificerede håndværkere i Randers og omegn
          </p>
          <CTAButton 
            href={affiliateLink} 
            size="lg"
            className="bg-white text-brand-blue hover:bg-gray-100 animate-pulse-soft shadow-lg"
          >
            Bestil 3 uforpligtende tilbud i Randers
          </CTAButton>
        </div>
      </section>
    </>
  );
};

export default TagrenoveringRanders; 
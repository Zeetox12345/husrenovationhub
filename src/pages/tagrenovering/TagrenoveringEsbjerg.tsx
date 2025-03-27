import { useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import { Helmet } from "react-helmet";

const TagrenoveringEsbjerg = () => {
  const affiliateLink = "https://www.partner-ads.com/dk/c/p/53649/b/25692/https://www.3byggetilbud.dk/tilbud/tagrenovering/";
  const city = "Esbjerg";
  const cityLowercase = "esbjerg";
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Nyt tag Esbjerg 2025 - Den komplette guide til tagrenovering</title>
        <meta name="description" content={`Få indsigt i priser og muligheder for tagrenovering i ${city}. Komplet guide til tagtyper, vedligeholdelse og valg af professionelle tageksperter i ${city}.`} />
        <meta name="keywords" content={`tagrenovering ${cityLowercase}, nyt tag ${cityLowercase}, tagarbejde ${cityLowercase}, tagudskiftning ${cityLowercase}, tagreparation ${cityLowercase}, tageksperter ${cityLowercase}`} />
        <link rel="canonical" href={`https://husrenovationhub.dk/tagrenovering-${cityLowercase}`} />
      </Helmet>

      {/* Full-width hero section with image background */}
      <div className="relative w-full h-[500px] mb-10">
        {/* Hero image */}
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/lovable-uploads/roof.jpg" 
            alt={`Tagrenovering i ${city}`}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        </div>
        
        {/* Content overlay */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4 max-w-4xl">
            Hvad koster et nyt tag i {city}? Komplet guide til tagrenovering i 2025
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Table of contents - redesigned */}
          <div className="mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-100 p-3 border-b border-gray-200">
              <details className="cursor-pointer group">
                <summary className="text-lg font-semibold text-gray-900 flex items-center">
                  <span>Indholdsfortegnelse</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 pt-2">
                  <a href="#intro" className="text-brand-blue hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Introduktion
                  </a>
                  <a href="#pris" className="text-brand-blue hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Hvad koster et nyt tag i {city}?
                  </a>
                  <a href="#tagtyper" className="text-brand-blue hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Populære tagtyper i {city}
                  </a>
                  <a href="#lokaleforhold" className="text-brand-blue hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Særlige forhold i {city}
                  </a>
                  <a href="#haandvaerkere" className="text-brand-blue hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                    </svg>
                    Find håndværkere i {city}
                  </a>
                </div>
              </details>
            </div>
          </div>
            
          <div id="intro" className="text-xl text-gray-700 mb-8 animate-fade-in space-y-4" style={{ animationDelay: "0.2s" }}>
            <p>
              En tagrenovering er ofte et af de mest omfattende projekter, du kan kaste dig ud i som boligejer i {city}.
            </p>
            <p>
              Ikke alene kan prisen let overstige 100.000 kroner for en gennemsnitlig familiebolig, men processen indebærer også en række valg om både materialer, isoleringsmuligheder og æstetik, der skal tage højde for det barske vestjyske klima med kraftig vind og salt fra Nordsøen.
            </p>
            <p>
              Alligevel kan tagrenoveringen hurtigt vise sig at være en fornuftig investering for {city}-boligejere, da den både reducerer varmeregningen og øger boligens samlede værdi på det vestjyske boligmarked.
            </p>
          </div>
          
          {/* Redesigned partner section with CTA buttons */}
          <div className="mb-12 bg-gray-50 rounded-lg overflow-hidden shadow-lg">
            <div className="flex flex-col md:flex-row">
              {/* Partner info column */}
              <div className="md:w-1/2 p-6 flex flex-col justify-between bg-gradient-to-br from-white to-gray-100">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Få gratis rådgivning og 3 tilbud på nyt tag</h3>
                  <p className="text-gray-700 mb-4">Vi anbefaler vores samarbejdspartner <a href={affiliateLink} className="text-brand-blue font-semibold hover:underline">3byggetilbud.dk</a></p>
                </div>
                
                <div className="mb-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">3 gratis tilbud fra forskellige tagfirmaer i {city}</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">Erfaren partner med over 700.000 formidlede opgaver</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm">100% uforpligtende med hurtig respons</span>
                    </li>
                  </ul>
                </div>
                
                <CTAButton href={affiliateLink} size="lg" className="w-full animate-pulse-soft shadow-md">
                  Få 3 gratis tilbud på nyt tag
                </CTAButton>
              </div>
              
              {/* Partner image column - simplified to only show the image with logo */}
              <div className="md:w-1/2 relative">
                <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <img 
                    src="/lovable-uploads/3byggetilbudbillede.jpg" 
                    alt={`Tagrenovering i ${city}`}
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="pris" className="py-2 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Hvad koster et nyt tag i {city}?
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  I {city} ligger prisen for et nyt tag typisk mellem 700 og 2.300 kr. pr. m², afhængigt af tagtype og kompleksitet. De vestjyske priser ligger ofte lidt lavere end i hovedstadsområdet, men der skal tages særligt hensyn til de hårde vejrforhold, som stiller ekstra krav til materialer og montering.
                </p>
                
                <p>
                  På grund af {city}s kystnære beliggenhed og udsathed for kraftige vinde fra Nordsøen, er det særligt vigtigt at investere i holdbare og vindresistente tagløsninger, der kan modstå det barske vestkystklima.
                </p>
                
                {/* Pricing table adjusted for city */}
                <div className="overflow-x-auto my-8">
                  <table className="min-w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-700 text-white">
                      <tr>
                        <th className="py-3 px-4 text-left">Tagtype</th>
                        <th className="py-3 px-4 text-left">Kvadratmeterpris i {city}</th>
                        <th className="py-3 px-4 text-left">Levetid</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">Tegltag</td>
                        <td className="py-3 px-4">1.700-2.300 kr.</td>
                        <td className="py-3 px-4">60-100 år</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">Betontagsten</td>
                        <td className="py-3 px-4">1.600-2.100 kr.</td>
                        <td className="py-3 px-4">30-50 år</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">Tagpap</td>
                        <td className="py-3 px-4">1.200-1.500 kr.</td>
                        <td className="py-3 px-4">20-40 år</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">Eternittag</td>
                        <td className="py-3 px-4">800-1.200 kr.</td>
                        <td className="py-3 px-4">20-40 år</td>
                      </tr>
                      <tr className="border-b border-gray-200 hover:bg-gray-50">
                        <td className="py-3 px-4 font-medium">Stålpladetag</td>
                        <td className="py-3 px-4">700-1.000 kr.</td>
                        <td className="py-3 px-4">40-50 år</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City-specific section: Populære tagtyper */}
      <section id="tagtyper" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Populære tagtyper i {city}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Eternittag</h3>
                <p className="text-gray-700">
                  Eternittage er meget udbredte i {city} og omegn, særligt i parcelhuskvarterer som Rørkjær, Jerne og Sædding. Moderne eternitplader er robuste over for både vind og salt fra Nordsøen, og kræver minimal vedligeholdelse, hvilket er ideelt for det krævende vestkystklima.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tegltag</h3>
                <p className="text-gray-700">
                  Tegltage findes på mange ældre bygninger i {city}s historiske centrum og i kvarterer som Strandby og dele af Østerbyen. De er ekstremt holdbare over for vejr og vind og giver husene et klassisk udseende, der harmonerer med byens maritime historie.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Stålpladetag</h3>
                <p className="text-gray-700">
                  Stålpladetage vinder frem i {city}, særligt i industriområder og på nyere byggerier. De er lette, vindresistente og har god modstandsdygtighed over for det salte miljø ved vestkysten. Særligt populære i områder som Østhavnen og ved erhvervsbyggeri.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Betontagsten</h3>
                <p className="text-gray-700">
                  Betontagsten er populære i nyere byggeri i {city}, for eksempel i Gjesing og Sønderris. De er holdbare, vindresistente og kommer i mange forskellige farver og stilarter, der passer godt til områdets moderne arkitektur.
                </p>
              </div>
            </div>
            
            <div className="bg-brand-lightBlue rounded-xl p-8 text-center mb-12 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Usikker på hvilken tagløsning der passer til din bolig i {city}?
              </h3>
              <p className="text-gray-700 mb-6">
                Vores erfarne tageksperter i {city} kan hjælpe dig med at vurdere tagets tilstand og anbefale den rette løsning for dit hjem, uanset om du bor i centrum, Hjerting eller Sædding.
              </p>
              <CTAButton href={affiliateLink} variant="primary" trackConversion={true}>
                Få 3 gratis tilbud fra lokale tageksperter
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* City-specific section: Særlige forhold */}
      <section id="lokaleforhold" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Særlige forhold ved tagrenovering i {city}
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Tagrenovering i {city} har nogle særlige forhold, du bør være opmærksom på:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Den kystnære beliggenhed ved Nordsøen betyder, at tage i {city} er særligt udsatte for saltholdige vinde, som stiller ekstra krav til materialevalg</li>
                  <li>Det barske vestjyske klima med kraftige storme, særligt om efteråret og vinteren, kræver ekstra solid fastgørelse af tagdækningen</li>
                  <li>Byggetilladelser og godkendelser fra {city} Kommune kan være nødvendige, især i bevaringsværdige områder i den gamle bykerne</li>
                  <li>Industriområder som havnen har ofte andre krav til tagkonstruktioner end boligområder som Hjerting eller Sædding</li>
                  <li>Energioptimering er vigtig i {city}, hvor det vindblæste klima stiller høje krav til isolering for at holde varmeregningen nede</li>
                </ul>
                <p>
                  Vores netværk af erfarne taghåndværkere i {city} kender de lokale forhold og kan hjælpe dig med at navigere gennem disse udfordringer med både kommunen og valg af materialer, der kan modstå det barske vestjyske klima.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City-specific section: Find håndværkere */}
      <section id="haandvaerkere" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Find de bedste håndværkere til tagrenovering i {city}
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                At finde kvalificerede håndværkere i {city} kan være en udfordring, især i perioder med høj byggeaktivitet i byen og omegn. Her er nogle fordele ved at bruge vores service:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Vi samarbejder kun med erfarne, certificerede og anmeldelsesverificerede håndværkere i {city} og omegn</li>
                <li>Alle tilbud er skræddersyet til dit specifikke projekt og dine behov</li>
                <li>Du sparer tid ved ikke selv at skulle kontakte og indhente tilbud fra forskellige firmaer</li>
                <li>Vores håndværkere har specifik erfaring med vestjyske bygninger og lokale forhold</li>
                <li>Gennemsigtighed i priserne gør det nemt for dig at sammenligne og vælge det bedste tilbud</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 border border-brand-blue shadow-md mt-8">
              <div className="flex flex-col md:flex-row items-center mb-6">
                <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
                  <img 
                    src="/lovable-uploads/a2dc3d3c-2ffd-4a00-967d-a9fb7dc4591e.png" 
                    alt="3byggetilbud.dk" 
                    className="h-16 w-auto mb-4 md:mb-0 md:mr-6"
                  />
                </a>
                <h3 className="text-2xl md:text-2xl font-bold text-gray-900 text-center md:text-left">
                  Danmarks største formidler af byggeopgaver
                </h3>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-semibold">3byggetilbud.dk</a> formidler årligt mellem 70.000 og 100.000 bygge- og renoveringsprojekter og er dermed Danmarks klart største formidler af byggeopgaver - også i {city} og hele Sydvestjylland.
                </p>
                <p>
                  Hos <a href={affiliateLink} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-semibold">3byggetilbud.dk</a> kan private boligejere, erhvervsdrivende og boligforeninger i {city} indhente 3 tilbud på enhver tagrenovering - fra mindre projekter i Jerne til omfattende renoveringer i Hjerting. 
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
            Klar til at få tilbud på dit tagprojekt i {city}?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Det tager kun få minutter at få 3 gratis tilbud fra kvalificerede håndværkere i {city} og omegn
          </p>
          <CTAButton 
            href={affiliateLink} 
            size="lg"
            className="bg-white text-brand-blue hover:bg-gray-100 animate-pulse-soft shadow-lg"
            trackConversion={true}
          >
            Få 3 gratis tilbud på nyt tag
          </CTAButton>
        </div>
      </section>
    </>
  );
};

export default TagrenoveringEsbjerg; 
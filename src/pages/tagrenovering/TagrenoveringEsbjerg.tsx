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
        <title>Nyt tag {city} 2025 - Den komplette guide til tagrenovering</title>
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
              Ikke alene kan prisen let overstige 100.000 kroner i {city}-området, men processen indebærer også en række valg om både materialer, isoleringsmuligheder og æstetik, der passer til den vestjyske byggestil.
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
                  I {city} ligger prisen for et nyt tag typisk mellem 700 og 2.300 kr. pr. m², afhængigt af tagtype og kompleksitet. Lokale forhold i Vestjylland kan påvirke prisen, da transportomkostninger, lokale byggetilladelser og arbejdslønnen kan variere.
                </p>
                
                <p>
                  På grund af {city}s kystnære beliggenhed og udfordringer fra den kraftige vestenvind vælger mange boligejere her at investere i holdbare tagløsninger, der er tilpasset de lokale vejrforhold.
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
                        <td className="py-3 px-4 font-medium">Ståltag</td>
                        <td className="py-3 px-4">700-1.000 kr.</td>
                        <td className="py-3 px-4">40-50 år</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                {/* Image section after pricing table */}
                <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/lovable-uploads/tagrenovering.webp" 
                      alt={`Tagrenovering i ${city}`}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/lovable-uploads/roof.jpg" 
                      alt={`Tagtyper i ${city}`}
                      className="w-full h-auto"
                    />
                  </div>
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tegltag</h3>
                <p className="text-gray-700">
                  Tegltage er meget udbredte i {city}, især på ældre ejendomme i centrum og Hjerting. De er holdbare, æstetisk tiltalende og passer godt til den vestjyske arkitektur. Med en levetid på 60-100 år er de en solid investering.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Eternittag</h3>
                <p className="text-gray-700">
                  Mange boliger i {city}s forstadsområder som Jerne og Sædding har eternittag, som er lette og vedligeholdelsesvenlige. Moderne eternitplader er fri for asbest og passer godt til områdets nyere byggerier.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ståltag</h3>
                <p className="text-gray-700">
                  I {city} er ståltage blevet mere populære, især i nybyggeri og ved renovering af sommerhuse langs kysten. De er vindresistente, lette at installere og har en god holdbarhed i det kystnære klima med salt i luften.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tagpap</h3>
                <p className="text-gray-700">
                  I {city} bruges tagpap ofte på flade tage og i havneområdet. Det er en økonomisk løsning, der fungerer godt i byens maritime klima, og som let kan vedligeholdes og repareres ved behov.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* City-specific section: Særlige forhold */}
      <section id="lokaleforhold" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Særlige forhold for tagrenovering i {city}
            </h2>
            
            <div className="space-y-8 text-gray-700">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Kystnært klima</h3>
                <p>
                  {city}s beliggenhed nær Nordsøen betyder, at tage her udsættes for et maritimt klima med salt i luften og ofte kraftig vind. Dette stiller særlige krav til materialevalg og montering for at sikre lang holdbarhed.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Arkitektoniske hensyn</h3>
                <p>
                  I {city}s ældre kvarterer, især i centrum og havneområdet, er der ofte bevaringsværdige bygninger med særlige krav til tagmaterialer og -udformning. Her kan det være nødvendigt at tage hensyn til lokale bevaringsplaner.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vind og vejrforhold</h3>
                <p>
                  Den kraftige vestenvind, der ofte rammer {city}, kan påvirke tagets holdbarhed. Derfor er det vigtigt at vælge materialer og løsninger, der kan modstå kraftig vind, og sikre at tagsten og -plader fastgøres forsvarligt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="tjekstand" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Sådan tjekker du tagets stand i {city}
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                I {city}s kystnære klima med salt i luften og ofte kraftig vind fra Nordsøen er regelmæssig inspektion af dit tag særligt vigtigt. Her er, hvad du bør holde øje med:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Indvendige tegn</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fugtpletter i loftet eller på vægge</li>
                    <li>Dagslys der trænger gennem taget på loftet</li>
                    <li>Træk eller kulde fra loftet</li>
                    <li>Skimmelsvamp eller muglugt (mere udbredt i det kystnære klima)</li>
                  </ul>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Udvendige tegn</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Løse, knækkede eller manglende tagsten/tagplader (særligt efter storme)</li>
                    <li>Korrosion på metaltagdele (accelereres af saltholdigt miljø)</li>
                    <li>Nedslidte eller revnede tætningslister</li>
                    <li>Revnede eller tærede tagrender og nedløbsrør</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Professionel inspektion</h3>
                <p className="mb-4">
                  På grund af de hårde vejrforhold i {city} anbefales det at få en professionel taginspektion mindst én gang årligt, gerne efter vintersæsonen, hvor taget ofte er udsat for de hårdeste belastninger.
                </p>
                <p>
                  Mange tagfirmaer i {city} tilbyder gratis tageftersyn, hvor de kan opdage problemer, før de udvikler sig til omfattende og dyre skader.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="utaetheder" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Typiske skader og utætheder på tage i {city}
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Det maritime klima i {city} med kraftig vind, salt i luften og skiftende vejrforhold stiller særlige krav til tagkonstruktionen. Her er nogle af de hyppigste problemer, vi ser på tage i området:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Stormskader</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Den kraftige vestenvind fra Nordsøen kan løfte tagsten eller tagplader, særligt på ældre tage i områder som Hjerting og Sædding.</li>
                    <li>Selv mindre skader kan hurtigt udvikle sig til større problemer, hvis de ikke udbedres.</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Korrosion og nedbrydning</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Saltholdigt miljø i {city} accelererer korrosion på metalkomponenter i tagkonstruktionen.</li>
                    <li>Beslag, inddækninger og tagrender af metal er særligt udsatte og kan fejle før tid.</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Utætte inddækninger</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Inddækninger omkring skorstene, ovenlys og andre gennembrydninger i taget er sårbare over for {city}s barske vejr.</li>
                    <li>Den konstante påvirkning fra vind og vejr kan med tiden nedbryde tætningsmaterialer.</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Mangelfuld ventilation</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Høj luftfugtighed fra havet kombineret med utilstrækkelig ventilation i tagkonstruktionen kan føre til kondensproblemer.</li>
                    <li>Dette ses ofte i boliger i {city}s kystnære områder og kan medføre råd og svamp i tagkonstruktionen.</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-brand-lightBlue rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Forebyggelse er bedre end reparation</h3>
                <p className="mb-4">
                  I {city}s barske kystklima er forebyggende vedligeholdelse af taget særligt vigtigt. Regelmæssige eftersyn og hurtig udbedring af mindre problemer kan forlænge tagets levetid betragteligt og spare dig for store udgifter på længere sigt.
                </p>
                <CTAButton href={affiliateLink} className="w-full md:w-auto">
                  Find tageksperter i {city}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="isolering" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Isolering af taget i {city} - Spar på varmeregningen
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                God tagisolering er særligt vigtig i {city}, hvor den kraftige vind fra Nordsøen kan give en betydelig afkølingseffekt på boligen. Ved at efterisolere dit tag kan du:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Reducere varmeregningen med op til 30%</li>
                <li>Forbedre boligens indeklima og komfort</li>
                <li>Beskytte tagkonstruktionen mod fugtproblemer</li>
                <li>Øge boligens værdi på det vestjyske boligmarked</li>
              </ul>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Isoleringstyper særligt egnede til {city}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Mineraluldsisolering</h4>
                    <p className="text-sm">
                      God til {city}s klima, da den er brandsikker og har gode lydreducerende egenskaber, hvilket er en fordel i områder med kraftig vind.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Papiruld</h4>
                    <p className="text-sm">
                      Miljøvenlig løsning med gode fugtregulerende egenskaber, hvilket er ideelt til {city}s variable luftfugtighed i kystnære områder.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">PIR/PUR-isolering</h4>
                    <p className="text-sm">
                      Højisolerende skumpaneler med god modstandsevne over for fugt - ideel til kystnære områder i {city} som Sædding og Hjerting.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Løs letklinker</h4>
                    <p className="text-sm">
                      God til flade tage, som findes på mange nyere bygninger i {city}, da de både isolerer og kan hjælpe med dræning.
                    </p>
                  </div>
                </div>
              </div>
              
              <p>
                Ved valg af isoleringsløsning til din bolig i {city} er det vigtigt at tage højde for lokale vejrforhold. En fagperson med kendskab til de lokale forhold kan hjælpe dig med at vælge den optimale løsning.
              </p>
              
              <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tilskudsmuligheder i {city}</h3>
                <p className="mb-4">
                  {city} Kommune har periodevis særlige energitilskud, og der findes også nationale ordninger gennem energiselskaberne, hvor du kan få tilskud til tagisolering og andre energibesparende foranstaltninger.
                </p>
                <p>
                  En lokal tagekspert kan guide dig gennem tilskudsmulighederne og sikre, at du får alle de tilskud, du er berettiget til.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="loveregler" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Love og regler ved tagrenovering i {city}: Hvad skal du være opmærksom på?
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Når du renoverer dit tag i {city}, er der en række regler og bestemmelser, du skal være opmærksom på. Her er en oversigt over de vigtigste:
              </p>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Bygningsreglement og energikrav</h3>
                <p className="mb-4">
                  Det gældende bygningsreglement stiller krav til energieffektiviteten. Ved større tagrenovationer i {city} skal taget typisk efterisoleres til en U-værdi på højst 0,15 W/m²K, medmindre det ikke er rentabelt.
                </p>
                <p>
                  I {city}s kystnære klima med betydelig afkølingseffekt fra vinden er god isolering særligt vigtig og næsten altid rentabel.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lokalplaner og bevaringsværdige bygninger</h3>
                <p className="mb-4">
                  {city} har områder med særlige arkitektoniske krav, især i de ældre bydele og i nærheden af havnen. Hvis din ejendom ligger i et bevaringsværdigt område, kan der være specifikke krav til tagmaterialer og udformning.
                </p>
                <p className="mb-4">
                  Du kan tjekke, om din ejendom er omfattet af en lokalplan med særlige bestemmelser på {city} Kommunes hjemmeside eller ved at kontakte kommunens byggesagsafdeling.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Vindpåvirkning og konstruktionsstabilitet</h3>
                <p className="mb-4">
                  På grund af den kraftige vindpåvirkning i {city} stiller bygningsreglementet særlige krav til tagkonstruktionens stabilitet og fastgørelse. Dette gælder særligt i de kystnære områder, hvor vinden kan være ekstra kraftig.
                </p>
                <p>
                  Sørg for at din taghåndværker er bekendt med og følger de særlige krav til vindlastberegninger og fastgørelse, der gælder i {city}.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Byggetilladelse</h3>
                <p className="mb-4">
                  Du skal søge om byggetilladelse hos {city} Kommune, hvis du:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Ændrer tagmaterialet (f.eks. fra tegl til eternit)</li>
                  <li>Ændrer taghældningen</li>
                  <li>Etablerer nye kviste eller ovenlysvinduer</li>
                  <li>Foretager konstruktionsmæssige ændringer</li>
                </ul>
                <p>
                  I {city} kan behandlingstiden for byggetilladelser variere, så det er vigtigt at indsende ansøgningen i god tid før planlagt projektstart.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Servitutter</h3>
                <p className="mb-4">
                  Især i nyere boligområder i {city} som Sønderris, Hjerting Strandby og Kvaglund kan der være tinglyst servitutter, der stiller krav til tagmaterialer, farver og udformning.
                </p>
                <p>
                  Disse servitutter kan findes i ejendommens dokumenter i tingbogen eller ved at kontakte den lokale grundejerforening.
                </p>
              </div>
              
              <p className="mt-6">
                Det er altid en god idé at konsultere med en erfaren taghåndværker, der kender til de lokale forhold og regler i {city}, før du påbegynder dit tagrenoveringsprojekt. De kan hjælpe dig med at navigere gennem reglerne og sikre, at dit projekt overholder alle krav.
              </p>
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
      
      {/* Find håndværkere section */}
      <section id="haandvaerkere" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Find de rette tageksperter i {city}
            </h2>
            
            <div className="space-y-6 text-gray-700 mb-8">
              <p>
                At vælge den rette tagekspert i {city} er afgørende for et vellykket resultat. Look for håndværkere med specialviden om lokale forhold og erfaring med de typiske tagtyper i området.
              </p>
              
              <p>
                Vi anbefaler altid at indhente flere tilbud, tjekke referencer og sikre, at håndværkeren har den nødvendige erfaring med netop din type tag og de særlige forhold, der gælder i {city}.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sådan får du de bedste tilbud i {city}</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-blue mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Beskriv dit projekt så detaljeret som muligt</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-blue mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Spørg ind til erfaring med lignende projekter i {city}-området</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-blue mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Tjek referencer og anmeldelser fra tidligere kunder</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-blue mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Sammenlign mindst 3 forskellige tilbud</span>
                </li>
              </ul>
              
              <div className="mt-8">
                <CTAButton href={affiliateLink} size="lg" className="w-full">
                  Få 3 gratis tilbud på tagrenovering i {city}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TagrenoveringEsbjerg; 
import { useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import TrustSignals from "@/components/TrustSignals";
import PartnerSection from "@/components/PartnerSection";
import { Helmet } from "react-helmet";

const TagrenoveringKobenhavn = () => {
  const affiliateLink = "https://www.partner-ads.com/dk/c/p/53649/b/25692/https://www.3byggetilbud.dk/tilbud/tagrenovering/";
  const city = "København";
  const cityLowercase = "kobenhavn";
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Nyt tag i {city} 2025 - Den komplette guide til tagrenovering</title>
        <meta name="description" content={`Få indsigt i priser, materialer og lovkrav ved tagrenovering i ${city}. Komplet guide til tagtyper, vedligeholdelse og valg af professionelle tageksperter i ${city}.`} />
        <meta name="keywords" content={`tagrenovering ${cityLowercase}, nyt tag ${cityLowercase}, tagarbejde ${cityLowercase}, tagudskiftning ${cityLowercase}, tagreparation ${cityLowercase}, tageksperter ${cityLowercase}, tagløsninger ${cityLowercase}`} />
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
            Hvad koster et nyt tag i {city}? Komplet guide til tagrenovering for alle tagtyper i 2025
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
                  <a href="#kvadratmeterpris" className="text-brand-blue hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Kvadratmeterpriser i {city}
                  </a>
                  <a href="#prisafgoer" className="text-brand-blue hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Hvad afgør prisen?
                  </a>
                  <a href="#vaelg-tag" className="text-brand-blue hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    Tagbelægningens bæreevne
                  </a>
                  <a href="#tjekstand" className="text-brand-blue hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Tjek af tagets stand
                  </a>
                  <a href="#utaetheder" className="text-brand-blue hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                    Skader og utætheder
                  </a>
                  <a href="#isolering" className="text-brand-blue hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                    Isolering af taget
                  </a>
                  <a href="#loveregler" className="text-brand-blue hover:underline flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                    </svg>
                    Love og regler i {city}
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
              Ikke alene kan prisen let overstige 100.000 kroner, men processen indebærer også en række valg om både materialer, isoleringsmuligheder og æstetik, der er relevante for boligejere i {city}.
            </p>
            <p>
              Alligevel kan tagrenoveringen hurtigt vise sig at være en fornuftig investering for husejere i {city}, da den både reducerer varmeregningen og øger boligens samlede værdi på det lokale boligmarked.
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
                    alt={`Tagrenovering i ${city} med 3byggetilbud.dk`} 
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
              
              <div id="kvadratmeterpris" className="space-y-6 text-gray-700">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  Nyt tag i {city}: Hvad koster det pr. kvadratmeter?
                </h3>
                
                <p>
                  Erfaringer fra tidligere projekter i {city} viser, at et nyt tag typisk koster mellem 700 og 2.300 kr. pr. m². Prisen varierer dog baseret på flere vigtige faktorer, blandt andet:
                </p>
                
                <ul className="list-disc pl-6 space-y-2">
                  <li>Valg af tagbelægning (f.eks. tegl, beton eller tagpap) der passer til {city}s klima</li>
                  <li>Tagkonstruktionens stand (er der behov for ekstra reparation eller forstærkning?)</li>
                  <li>Tagets kompleksitet (forskellige vinkler, kviste, skotrender osv.)</li>
                </ul>
                
                <p>
                  Nedenfor finder du et overblik over erfaringsmæssige kvadratmeterpriser i {city}, så du kan få en fornemmelse af det samlede budget for dit nye tag.
                </p>
                
                {/* Pricing table */}
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
                      src="/lovable-uploads/roof1.jpg" 
                      alt={`Eksempel på tagkonstruktion i ${city}`} 
                      className="w-full h-64 object-cover" 
                    />
                    <div className="bg-gray-50 p-3">
                      <p className="text-sm text-gray-700 font-medium">Professionel tagrenovering kan øge boligens værdi betydeligt i {city}</p>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src="/lovable-uploads/roof2.jpg" 
                      alt={`Tagbelægningstyper populære i ${city}`} 
                      className="w-full h-64 object-cover" 
                    />
                    <div className="bg-gray-50 p-3">
                      <p className="text-sm text-gray-700 font-medium">Valg af den rette tagtype er afgørende for langtidsholdbarhed i {city}s klima</p>
                    </div>
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
                  Tegltage er meget udbredte i {city}, især på ældre ejendomme. De er holdbare, æstetisk tiltalende og passer godt til områdets arkitektur. Med en levetid på 60-100 år er de en solid investering.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Eternittag</h3>
                <p className="text-gray-700">
                  Mange boliger i {city}s forstadsområder har eternittag, som er lette og vedligeholdelsesvenlige. Moderne eternitplader er fri for asbest og passer godt til områdets nyere byggerier.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tagpap</h3>
                <p className="text-gray-700">
                  I {city} bruges tagpap ofte på flade tage og på nybyggerier. Det er en økonomisk løsning, der fungerer godt i byens klimaforhold, og som let kan vedligeholdes og repareres ved behov.
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Betontagsten</h3>
                <p className="text-gray-700">
                  Betontagsten er populære i {city}s nyere boligområder. De er robuste, kan fås i mange forskellige farver og er mere økonomiske end tegl, selvom levetiden er lidt kortere.
                </p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <CTAButton href={affiliateLink} variant="primary">
                Få 3 gratis og uforpligtende tilbud
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section id="prisafgoer" className="py-2 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Hvad afgør prisen?
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Prisen for et nyt tag i {city} afhænger af flere vigtige faktorer, blandt andet:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Tagtype og materiale</li>
                  <li>Tagkonstruktionens stand</li>
                  <li>Tagets kompleksitet</li>
                  <li>Transportomkostninger</li>
                  <li>Lokale byggetilladelser</li>
                  <li>Arbejdslønnen</li>
                </ul>
                <p>
                  Ved at vælge en erfarne og certificeret tagrenoveringsfirma i {city}, kan du sikre, at prisen er fair og passende til de specifikke forhold i dit hjem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vaelg-tag" className="py-2 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Tagbelægningens bæreevne
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Tagbelægningens bæreevne er afgørende for langtidsholdbarheden af taget. Ved at vælge en tagbelægning, der er tilpasset {city}s klima og miljø, kan du sikre, at taget kan holde til de udfordrende vejrforhold og øge boligens langtidsværdi.
                </p>
                <p>
                  Vores erfarne tageksperter i {city} kan hjælpe dig med at vurdere tagets tilstand og anbefale den rette løsning for dit hjem, uanset om du bor på Østerbro, i Valby eller på Frederiksberg.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tjekstand" className="py-2 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Tjek af tagets stand
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Det er vigtigt at tjekke tagets stand før en renovering, da det kan give indsigt i, hvor godt taget er i stand til at fungere og holde til vejrforholdene.
                </p>
                <p>
                  Vores tageksperter i {city} kan hjælpe dig med at udføre en detaljeret tjek af tagets stand og give dig en vurdering af tagets tilstand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="utaetheder" className="py-2 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Skader og utætheder
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Skader og utætheder kan være et problem, især i ældre bygninger. Ved at vælge en erfarne tagrenoveringsfirma i {city}, kan du sikre, at taget bliver repareret og vedligeholdt korrekt, og at skader og utætheder bliver fjernet.
                </p>
                <p>
                  Vores tageksperter i {city} kan hjælpe dig med at identificere og behandle skader og utætheder, så taget kan holde til de udfordrende vejrforhold og øge boligens langtidsværdi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="isolering" className="py-2 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Isolering af taget
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Isolering af taget er afgørende for at sikre, at boligen er behagelig at bo i, især i koldere perioder. Ved at vælge en erfarne tagrenoveringsfirma i {city}, kan du sikre, at taget bliver isolert korrekt, og at varmen holdes inde i boligen.
                </p>
                <p>
                  Vores tageksperter i {city} kan hjælpe dig med at udføre en detaljeret isolering af taget, så du kan sikre, at boligen er behagelig at bo i, især i koldere perioder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="loveregler" className="py-2 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Love og regler i {city}
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Tagrenovering i {city} skal udføres i henhold til de lokale byggereglementer og love. Ved at vælge en erfarne tagrenoveringsfirma i {city}, kan du sikre, at projektet udføres i henhold til de korrekte love og regler.
                </p>
                <p>
                  Vores tageksperter i {city} kender de lokale love og regler og kan hjælpe dig med at navigere gennem disse udfordringer med både kommunen og arkitektoniske hensyn.
                </p>
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

export default TagrenoveringKobenhavn; 
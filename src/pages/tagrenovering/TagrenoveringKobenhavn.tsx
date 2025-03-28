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

      <div id="prisafgoer" className="mb-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Hvad afgør prisen på en tagrenovering i {city}?
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Prisen for at renovere eller udskifte taget i {city} kan variere betydeligt, og selv de bedste prisoverslag vil indeholde en vis usikkerhed. Her er nogle af de vigtigste faktorer, der typisk påvirker den samlede pris:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Tagets kompleksitet</h3>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Jo flere detaljer som kviste, ovenlysvinduer og skorsten, desto mere arbejdstid kræves der.</li>
                    <li>Inddækningerne (det tilpassede metal omkring disse elementer) kan øge omkostningerne betydeligt.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Taghældning</h3>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>En stejl taghældning indebærer ofte flere sikkerhedsforanstaltninger og mere tidskrævende arbejde.</li>
                    <li>Højere kompleksitet fører som regel til højere udgifter.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Tagtilbehør</h3>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Overvej at skifte ovenlysvinduer, stigetrin eller kviste samtidig med tagudskiftningen, da det ofte er økonomisk fordelagtigt at klare det hele på én gang.</li>
                    <li>Disse tilvalg bør indgå i det samlede budget fra starten.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Timeløn og geografisk placering</h3>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>En stor del af prisen går til håndværkerens arbejdstimer.</li>
                    <li>Timelønnen i {city}-området kan påvirke den endelige regning sammenlignet med andre områder i landet.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Nedrivning af det gamle tag</h3>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Overvej, om du selv kan fjerne det gamle tag og dermed spare 10.000-15.000 kroner.</li>
                    <li>Ved at klare denne del på egen hånd kan du nedbringe den samlede udgift til projektet.</li>
                  </ul>
                </div>
              </div>
              
              <p>
                Uanset hvordan dit projekt i {city} ser ud, bør du være opmærksom på alle ovenstående faktorer, når du indhenter tilbud. Det giver dig et mere nøjagtigt billede af de samlede omkostninger og hjælper med at undgå ubehagelige overraskelser.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="vaelg-tag" className="mb-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Vælg en tagbelægning, der matcher tagkonstruktionens bæreevne
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Når du planlægger en tagudskiftning eller tagrenovering i {city}, er det afgørende at vælge en tagbelægning, som din tagkonstruktion kan bære. Du kan enten vælge samme type tagbelægning som den eksisterende eller benytte følgende generelle tommelfingerregel baseret på vægt.
              </p>
              
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-brand-blue">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Forstå forskellen på let og tungt tag</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Let tag: Vejer under 25 kg pr. m²</li>
                  <li>Tungt tag: Vejer over 25 kg pr. m²</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-brand-blue">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Hvis det eksisterende tag er tungt</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Du kan i princippet vælge alle typer tagbelægning, fordi tagkonstruktionen allerede er dimensioneret til at kunne bære en højere vægt.</li>
                  <li>Ofte anbefales det dog at fortsætte med en tung tagbelægning, da disse typisk har en længere levetid og holder bedre i det lange løb.</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-brand-blue">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">3. Hvis det eksisterende tag er let</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Vælg en ny tagbelægning, der også er defineret som let (dvs. under 25 kg pr. m²), så du ikke overbelaster konstruktionen.</li>
                  <li>Undersøg forskellige lette tagtyper (fx fibercement, tagpap eller lette ståltage) for at finde den bedste løsning til dit projekt i {city}.</li>
                </ul>
              </div>
              
              <p>
                Ved at følge disse retningslinjer undgår du unødige skader på din tagkonstruktion og sikrer samtidig, at din nye tagbelægning holder i mange år frem. Det er altid en god idé at rådføre sig med en professionel tagekspert i {city}, hvis du er i tvivl om, hvorvidt dit tag kan klare en specifik belægningstype.
              </p>
              
              {/* Second pricing table with roof weights */}
              <div className="overflow-x-auto my-8">
                <table className="min-w-full border-collapse bg-white shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-gray-700 text-white">
                    <tr>
                      <th className="py-3 px-4 text-left">Tagtype</th>
                      <th className="py-3 px-4 text-left">Typisk levetid</th>
                      <th className="py-3 px-4 text-left">Vægt per m2 (estimat)</th>
                      <th className="py-3 px-4 text-left">Min. taghældning</th>
                      <th className="py-3 px-4 text-left">Pris</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Naturskifer</td>
                      <td className="py-3 px-4">80-100 år</td>
                      <td className="py-3 px-4">50 kg (tungt tag)</td>
                      <td className="py-3 px-4">25 grader</td>
                      <td className="py-3 px-4">Dyr</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Zinktag</td>
                      <td className="py-3 px-4">50-100 år</td>
                      <td className="py-3 px-4">30 kg (tungt tag)</td>
                      <td className="py-3 px-4">3 grader</td>
                      <td className="py-3 px-4">Meget dyr</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Kobbertag</td>
                      <td className="py-3 px-4">50-100 år</td>
                      <td className="py-3 px-4">30 kg (tungt tag)</td>
                      <td className="py-3 px-4">3 grader</td>
                      <td className="py-3 px-4">Meget dyr</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Betontagsten</td>
                      <td className="py-3 px-4">50-70 år</td>
                      <td className="py-3 px-4">40 kg (tungt tag)</td>
                      <td className="py-3 px-4">20 grader</td>
                      <td className="py-3 px-4">Dyr</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Teglsten</td>
                      <td className="py-3 px-4">50-70 år</td>
                      <td className="py-3 px-4">40-44 kg (tungt tag)</td>
                      <td className="py-3 px-4">20-25 grader</td>
                      <td className="py-3 px-4">Dyr</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Stålplader inkl. Decra</td>
                      <td className="py-3 px-4">40-50 år</td>
                      <td className="py-3 px-4">5 kg (let tag)</td>
                      <td className="py-3 px-4">5-12 grader</td>
                      <td className="py-3 px-4">Billig</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Eternitplader</td>
                      <td className="py-3 px-4">20-40 år</td>
                      <td className="py-3 px-4">18 kg (let tag)</td>
                      <td className="py-3 px-4">14 grader</td>
                      <td className="py-3 px-4">Rimelig</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Eternitskifer</td>
                      <td className="py-3 px-4">30-40 år</td>
                      <td className="py-3 px-4">19 kg (let tag)</td>
                      <td className="py-3 px-4">18 grader</td>
                      <td className="py-3 px-4">Rimelig</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Tagpap</td>
                      <td className="py-3 px-4">20-40 år</td>
                      <td className="py-3 px-4">20 kg med underlag (let tag)</td>
                      <td className="py-3 px-4">1,5 - 3 grader</td>
                      <td className="py-3 px-4">Billig</td>
                    </tr>
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Plasttag</td>
                      <td className="py-3 px-4">10-20 år</td>
                      <td className="py-3 px-4">Let tag</td>
                      <td className="py-3 px-4">2 grader</td>
                      <td className="py-3 px-4">Billig</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="tjekstand" className="mb-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Hvor ofte skal man tjekke tagets stand i {city}?
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Hyppigheden af et grundigt tagtjek afhænger i høj grad af tagets alder og de lokale vejrforhold i {city}. Er taget under 15 år gammelt, kan du ofte nøjes med at få det kontrolleret hvert 5.–10. år. Har du derimod et ældre tag, anbefales det at få foretaget et tageftersyn mindst én gang årligt – og helst to gange om året.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Vigtige tjekpunkter</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Rensning af tagrender: Du kan selv nemt tømme og rense tagrender for at undgå tilstoppede afløb, hvilket er særligt vigtigt i {city} med de lokale nedbørsmængder.</li>
                  <li>Visuel kontrol: Hold øje med løse tagsten, revner eller skader på overfladen.</li>
                  <li>Professionel vurdering: Ønsker du en komplet gennemgang, er det klogt at kontakte et professionelt tagfirma i {city}.</li>
                </ul>
              </div>
              
              <div className="bg-brand-lightBlue p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Fordelene ved et gratis tagtjek</h3>
                <p>
                  Mange tagfirmaer i {city} tilbyder en gratis inspektion, hvor de kigger efter tegn på slid, fugt eller andre skader. På den måde får du en detaljeret vurdering af tagets tilstand og eventuelle anbefalinger til reparation eller vedligeholdelse. Et regelmæssigt tagtjek kan således spare dig for dyre reparationer på lang sigt og forlænge tagets levetid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Placeholder for affiliate banner */}
      <div className="my-10">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <a href="https://www.partner-ads.com/dk/klikbanner.php?partnerid=53649&bannerid=26611" target="_blank" rel="nofollow noopener">
              <img 
                src="https://www.partner-ads.com/dk/visbanner.php?partnerid=53649&bannerid=26611" 
                style={{ border: 0 }} 
                alt="Partner tilbud"
                className="mx-auto"
              />
            </a>
          </div>
        </div>
      </div>
      
      <div id="utaetheder" className="mb-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Hvor opstår der skader og utætheder i taget?
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Selvom ethvert tag er unikt, er der visse områder, hvor der oftere opstår skader og utætheder end andre. For husejere i {city} er det vigtigt at være opmærksom på disse svage punkter. Her er fem typiske kilder til vandindtrængning:
              </p>
              
              {/* Add image above the grid */}
              <div className="my-6 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/roof2.jpg" 
                  alt={`Inspektion af tag for utætheder i ${city}`} 
                  className="w-full h-auto object-cover"
                />
                <div className="bg-gray-50 p-3">
                  <p className="text-sm text-gray-700 italic">Regelmæssig inspektion af taget kan forhindre dyre skader forårsaget af utætheder, særligt vigtigt i {city}s klima</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Utætte inddækninger</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Disse består ofte af bukket metal omkring f.eks. skorstene, antenner, kviste eller udluftningshætter.</li>
                    <li>Da de er udsat for vind og vejr, kan selv små revner her føre til større fugtproblemer på sigt.</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Området ved ovenlysvinduer</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Ovenlysvinduer er en god kilde til naturligt lys, men kræver korrekt monterede inddækninger for at undgå vandgennemtrængning.</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Skotrenden</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Skotrenden er samlingen mellem to tagflader, hvor regnvand ofte samler sig.</li>
                    <li>Dårligt vedligeholdte skotrender kan forårsage vandskader i loft og tagkonstruktion.</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tagets rygning</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Rygningen er toppen af taget, hvor to tagflader mødes.</li>
                    <li>Utætheder her kan skyldes løse tagsten eller beskadigede fuger, hvilket giver vand fri adgang.</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-500 md:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tagudløb og tagrender</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Overgangen mellem taget og tagrenden er et særligt udsat område, hvor vandet løber af taget.</li>
                    <li>Tilstoppede tagrender eller utætte samlinger kan hurtigt udvikle sig til fugtproblemer.</li>
                  </ul>
                </div>
              </div>
              
              <p>
                Når en professionel taglægger i {city} tjekker for utætheder, vil vedkommende inspicere alle disse udsatte områder samt resten af tagfladen for revner eller huller. Et grundigt eftersyn kan forebygge alvorlige skader og fordyrede reparationer på længere sigt.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div id="isolering" className="mb-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Isolering af taget: Et lovkrav ved tagrenovering
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Når du planlægger en tagrenovering i {city}, er det ikke kun selve tagets tilstand og udseende, der er vigtig. Ifølge Bygningsreglementet skal ombygninger og udskiftninger af tage udføres på en måde, der er energibesparende. I praksis betyder det, at isolering af taget typisk er et lovkrav, hvis det eksisterende tag og loftrum ikke allerede er isoleret, og det samtidig er teknisk muligt og rentabelt.
              </p>
              
              {/* Add image for insulation section */}
              <div className="my-6 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/lovable-uploads/roof1.jpg" 
                  alt={`Tagisolering i ${city}`} 
                  className="w-full h-auto object-cover"
                />
                <div className="bg-gray-50 p-3">
                  <p className="text-sm text-gray-700 italic">Korrekt tagisolering reducerer varmeudgifter og sikrer et bedre indeklima året rundt - særligt vigtigt i {city}s klima</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Hvorfor er isolering af taget så afgørende i {city}?
              </h3>
              
              <ul className="list-disc pl-6 space-y-3">
                <li className="font-medium">Bedre indeklima: Ved at holde bedre på varmen reducerer du kuldebroer og fugtproblemer.</li>
                <li className="font-medium">Lavere varmeregning: En optimeret isolering mindsker energiforbruget markant - særligt vigtigt med de energipriser, vi oplever i {city}.</li>
                <li className="font-medium">Energibesparelser og lovkrav: Bygningsreglementet fastsætter krav om at opgradere isoleringen ved tagudskiftning, så længe det er økonomisk forsvarligt.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section id="loveregler" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Love og regler ved tagrenovering i {city}: Hvad skal du være opmærksom på?
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Når du skal renovere eller udskifte taget i {city}, er det vigtigt at kende til de gældende love og regler, så du undgår unødvendige fejl og ekstraomkostninger. Her er tre vigtige områder, du bør undersøge, inden du går i gang: Bygningsreglementet, lokalplaner og servitutter.
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">1. Bygningsreglementet</h3>
                  <p className="mb-3">
                    Bygningsreglementet er den lovgivning, der stiller krav til alt byggeri i Danmark – også tagrenoveringer i {city}. Her er nogle af de vigtigste punkter:
                  </p>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Energikrav og isolering</h4>
                      <ul className="list-disc pl-6 space-y-1 mt-1">
                        <li>Ifølge Bygningsreglementet skal ombygninger og tagudskiftninger udføres energibesparende.</li>
                        <li>Det betyder, at du som udgangspunkt er forpligtet til at isolere taget, hvis det er muligt og rentabelt, og hvis loftrummet ikke allerede er tilstrækkeligt isoleret.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Vind, vejr og brandsikkerhed</h4>
                      <ul className="list-disc pl-6 space-y-1 mt-1">
                        <li>Taget skal kunne modstå {city}s lokale klima og være sikret mod vindskader, regn og fugt.</li>
                        <li>Brandsikkerhed er ligeledes et krav, hvilket kan påvirke valget af tagmateriale.</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Valg af tagtype</h4>
                      <ul className="list-disc pl-6 space-y-1 mt-1">
                        <li>Bygningsreglementet kan indeholde bestemmelser for, hvilke typer tag der må anvendes på bestemte bygninger.</li>
                        <li>Taget skal renoveres og monteres i overensstemmelse med alle relevante krav i reglementet.</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-brand-lightBlue rounded-lg">
                    <p className="italic">
                      Tip: Selvom du kan finde mange informationer i Bygningsreglementet, kan du med fordel også rådføre dig med et professionelt tagfirma i {city} eller en uvildig byggetekniker for at sikre, at du overholder alle bestemmelser.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">2. Lokalplan i {city}</h3>
                  <p className="mb-3">
                    En lokalplan kan sætte yderligere rammer for, hvordan et tag i {city} må se ud. Det kan f.eks. handle om farve, hældning eller valg af materiale, der passer til den lokale byggestil.
                  </p>
                  
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">Sådan finder du ud af, om din ejendom i {city} er omfattet af en lokalplan:</h4>
                    <ol className="list-decimal pl-6 space-y-1 mt-2">
                      <li>Gå ind på <a href="https://www.plst.dk/plandatadk" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Plandata.dk</a></li>
                      <li>Vælg {city} Kommune i øverste højre hjørne under "Kortudsnit" – eller indtast ejendommens adresse i feltet "Søg_adresse"</li>
                      <li>Klik på markeringerne på kortet for at se, hvilke lokalplaner der gælder for netop din grund</li>
                      <li>Åbn den relevante lokalplan i PDF-format</li>
                      <li>Læs kravene til tag, som kan omhandle alt fra specifikke materialer til udformning</li>
                    </ol>
                  </div>
                  
                  <div className="mt-4 p-3 bg-gray-100 rounded-lg">
                    <p className="italic">
                      Eksempel: I visse områder af {city} kan der være krav om bestemte tagmaterialer eller farver for at bevare områdets særlige karakter.
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">3. Servitutter</h3>
                  <p className="mb-3">
                    En servitut er en tinglyst bestemmelse, der kan være knyttet til ejendommens matrikel. De er ikke så almindelige, når det gælder tage, men kan findes på fredede eller bevaringsværdige bygninger i {city}.
                  </p>
                  
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-800">Tjek for servitutter på din ejendom i {city}:</h4>
                    <ol className="list-decimal pl-6 space-y-1 mt-2">
                      <li>Gå til <a href="https://www.tinglysning.dk/tmv/landingpage" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Tinglysning.dk</a> og log på med NemID eller MitID.</li>
                      <li>Søg efter din ejendom for at se, om der findes servitutter, der begrænser eller påvirker dit valg af tag.</li>
                    </ol>
                  </div>
                </div>
                
                <div className="bg-brand-lightBlue p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Få professionel hjælp og spar tid</h3>
                  <p className="mb-3">
                    Selvom du kan orientere dig selv vedrørende Bygningsreglementet, lokalplaner og eventuelle servitutter, er det ofte en god idé at tale med {city} Kommunes teknik- og miljøforvaltning. De kan give dig rådgivning om lokale forhold. Derudover kan du med fordel få vejledning fra et erfarent tagfirma eller en uvildig byggetekniker, så du er sikker på, at alle juridiske krav bliver opfyldt.
                  </p>
                </div>
                
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Kort sagt:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Bygningsreglementet kræver energibesparende foranstaltninger, herunder efterisolering af taget.</li>
                    <li>Lokalplaner i {city} kan stille krav til valg af tagtype, farve eller stil.</li>
                    <li>Servitutter kan sætte yderligere begrænsninger, især på fredede eller bevaringsværdige ejendomme i {city}.</li>
                  </ul>
                  <p className="mt-4">
                    Ved at sætte dig ind i disse tre nøgleområder, undgår du dyre fejl og får en mere gnidningsfri tagrenovering i {city}. Samtidig sikrer du, at dit nye tag lever op til lovens krav og passer til både lokalområdet og eventuelle særlige servitutter.
                  </p>
                </div>
              </div>
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
                  <a href="https://www.partner-ads.com/dk/klikbanner.php?partnerid=53649&bannerid=25692" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-semibold">3byggetilbud.dk</a> formidler årligt mellem 70.000 og 100.000 bygge- og renoveringsprojekter og er dermed Danmarks klart største formidler af byggeopgaver - også i {city}.
                </p>
                <p>
                  Hos <a href="https://www.partner-ads.com/dk/klikbanner.php?partnerid=53649&bannerid=25692" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline font-semibold">3byggetilbud.dk</a> kan private boligejere, erhvervsdrivende og boligforeninger i {city} indhente 3 tilbud på ethvert byggeprojekt eller renoveringsopgave. 
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
            Bestil 3 uforpligtende tilbud
          </CTAButton>
        </div>
      </section>
    </>
  );
};

export default TagrenoveringKobenhavn; 

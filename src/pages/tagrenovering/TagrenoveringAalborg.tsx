import { useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import TrustSignals from "@/components/TrustSignals";
import PartnerSection from "@/components/PartnerSection";
import { Helmet } from "react-helmet";

const TagrenoveringAalborg = () => {
  const affiliateLink = "https://www.partner-ads.com/dk/c/p/53649/b/25692/https://www.3byggetilbud.dk/tilbud/tagrenovering/";
  const city = "Aalborg";
  const cityLowercase = "aalborg";
  
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

      <section id="prisafgoer" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Hvad afgør prisen på tagrenovering i {city}?
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                En række faktorer påvirker prisen på din tagrenovering i {city}. Her er nogle af de vigtigste:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-brand-blue">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tagets størrelse og kompleksitet</h3>
                  <p>
                    Et større tag kræver flere materialer og arbejdstimer. Kviste, skotrender og vanskelige vinkler øger kompleksiteten og dermed prisen.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-brand-blue">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Tagmaterialet</h3>
                  <p>
                    Tegl, beton, eternit, tagpap - hver tagtype har sin egen pris, og kvaliteten inden for hver type kan variere betydeligt.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-brand-blue">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Isolering og undertag</h3>
                  <p>
                    Forbedret isolering og nyt undertag er gode investeringer, men øger den umiddelbare udgift til renoveringen.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-brand-blue">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Adgangsforhold</h3>
                  <p>
                    Vanskeligere adgang til taget kan betyde højere pris, da det kræver mere tid og særligt udstyr for håndværkerne.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 bg-brand-lightBlue p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Få et præcist prisoverslag til dit tag</h3>
                <p className="mb-4">
                  Fordi prisen på tagrenovering afhænger af så mange faktorer, er det klogt at få flere konkrete tilbud. Vores samarbejdspartner kan hjælpe dig med at indhente tre gratis tilbud fra erfarne tagfirmaer i {city}.
                </p>
                <CTAButton href={affiliateLink} className="w-full md:w-auto">
                  Få 3 gratis tilbud på dit tagprojekt
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vaelg-tag" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Tagbelægningens bæreevne i {city}
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Klimaet i {city} med sin blanding af maritimt og kontinentalt klima stiller særlige krav til dit tag. Med ofte kraftig vind fra Limfjorden og Nordsøen, samt kolde vintre og en del nedbør, er det vigtigt at vælge en tagbelægning, der kan modstå disse forhold.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Vindmodstand</h3>
                  <p>
                    I {city}, især i bydele som Nørresundby og områder nær fjorden, er en god vindmodstand essentiel. Tegl og betontagsten har god vægt og er mindre følsomme over for vindpåvirkning.
                  </p>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Fugtresistens</h3>
                  <p>
                    Med byen nær både fjord og hav er luftfugtigheden ofte høj. Vælg materialer, der ikke påvirkes negativt af fugt, og sørg for god ventilation i tagkonstruktionen.
                  </p>
                </div>
              </div>
              
              <p className="mt-6">
                Konsulter altid med fagfolk, der kender de lokale forhold i {city}, før du træffer dit valg af tagmateriale. De kan rådgive om, hvilke løsninger der har vist sig holdbare i netop dit lokalområde.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="tjekstand" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Sådan tjekker du tagets stand i {city}
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                At vurdere dit tags tilstand er afgørende for at afgøre, om du har behov for en komplet udskiftning eller blot en mindre reparation. Her er, hvad du bør holde øje med:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Indvendige tegn</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Fugtpletter i loftet eller på vægge</li>
                    <li>Dagslys der trænger gennem taget på loftet</li>
                    <li>Træk eller kulde fra loftet</li>
                    <li>Skimmelsvamp eller muglugt</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Udvendige tegn</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Løse, knækkede eller manglende tagsten/tagplader</li>
                    <li>Rust på metaltagdele</li>
                    <li>Slid på tagpap eller andre tagmaterialer</li>
                    <li>Nedslidt eller beskadiget undertag</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Professionel inspektion</h3>
                <p className="mb-4">
                  I {city}, hvor vejret kan være barskt, er det særligt vigtigt med regelmæssige tagtjek. Professionelle tageksperter har både erfaring og specialudstyr til at opdage problemer, før de bliver alvorlige.
                </p>
                <p>
                  Mange håndværkere i {city}-området tilbyder gratis tageftersyn, så du får en ekspert vurdering uden omkostninger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="utaetheder" className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Typiske skader og utætheder på {city}-tage
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Tage i {city} er udsat for særlige udfordringer på grund af byens placering og vejrforhold. Her er nogle af de mest almindelige problemer, vi ser på tage i området:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Vind- og stormskader</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Særligt udsatte områder nær Limfjorden oplever ofte løse eller manglende tagsten efter stærk blæst.</li>
                    <li>Disse skader kan hurtigt føre til vandindtrængning og bør udbedres hurtigt.</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Utætte inddækninger</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Inddækninger omkring skorstene, ovenlys og andre gennembrydninger i taget er særligt udsatte.</li>
                    <li>I {city}s maritimt prægede klima nedbrydes tætningerne hurtigere end i mere beskyttede områder.</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Nedbrudt undertag</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Mange ældre huse i {city}, særligt i Vejgaard og Hasseris, har undertag af ældre materiale, som nedbrydes over tid.</li>
                    <li>Et defekt undertag kan ikke længere lede vand væk og fører til fugtskader.</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Mos- og algevækst</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Nordjyllands fugtige klima giver gode vækstbetingelser for mos og alger, særligt på nordsiden af tage.</li>
                    <li>Selvom det primært er et æstetisk problem, kan kraftig bevoksning holde på fugt og forkorte tagets levetid.</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-brand-lightBlue rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Forebyg større skader med regelmæssigt eftersyn</h3>
                <p className="mb-4">
                  De fleste større tagskader starter som små problemer, der kunne have været udbedret for en brøkdel af prisen. Et årligt tagtjek af en fagperson, særligt efter efterårsstorme i {city}, kan spare dig for store udgifter på sigt.
                </p>
                <CTAButton href={affiliateLink} className="w-full md:w-auto">
                  Find tageksperter i {city}
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="isolering" className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Isolering af taget i {city} - Spar på varmeregningen
            </h2>
            
            <div className="space-y-6 text-gray-700">
              <p>
                En god tagisolering er særligt vigtig i {city}, hvor vintrene kan være kolde og fyringssæsonen lang. Ved at efterisolere dit tag eller loft kan du:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Spare op til 30% på din varmeregning</li>
                <li>Forbedre komforten i din bolig markant</li>
                <li>Reducere dit CO2-aftryk</li>
                <li>Øge boligens værdi</li>
              </ul>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Isoleringstyper til tage i {city}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Mineraluldsisolering</h4>
                    <p className="text-sm">
                      Den klassiske løsning, der stadig er populær i {city} grundet god pris-ydeevne-forhold. Kræver korrekt dampspærre for at undgå kondensproblemer.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Papiruld</h4>
                    <p className="text-sm">
                      En miljøvenlig løsning, der bliver mere og mere populær i {city}. God til at regulere fugt, hvilket er en fordel i vores klima nær fjorden.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">PIR/PUR-isolering</h4>
                    <p className="text-sm">
                      Højisolerende skumpaneler der giver meget isolering i en tynd konstruktion. Ideel når pladsen er begrænset i ældre {city}-huse.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Træfiberisolering</h4>
                    <p className="text-sm">
                      Naturprodukt med gode fugtregulerende egenskaber. Vinder frem i {city}s bevaringsværdige bygninger og hos miljøbevidste boligejere.
                    </p>
                  </div>
                </div>
              </div>
              
              <p>
                Når du skal isolere dit tag i {city}, er det vigtigt at tænke på både isoleringsevne og fugttekniske forhold, da vores lokale klima stiller særlige krav. Konsulter altid med en fagperson, der kender til de lokale forhold.
              </p>
              
              <div className="mt-8 bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Tilskudsmuligheder i {city}</h3>
                <p className="mb-4">
                  Der er ofte mulighed for at få tilskud til energirenoveringer, herunder tagisolering, gennem forskellige ordninger. {city} Kommune har periodisk særlige tilskudspuljer, og energiselskaberne tilbyder også energitilskud.
                </p>
                <p>
                  En professionel tagentreprenør i {city} kan ofte hjælpe dig med at navigere i disse muligheder og sikre, at du får de tilskud, du er berettiget til.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="loveregler" className="py-16 bg-gray-50">
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
                  Det gældende bygningsreglement stiller krav til energieffektiviteten. Ved større tagrenovationer i {city} skal taget efterisoleres til en U-værdi på højst 0,15 W/m²K, medmindre det ikke er rentabelt.
                </p>
                <p>
                  I praksis betyder dette, at de fleste tagrenovationer i {city} vil kræve efterisolering, da det kolde klima gør det rentabelt.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Lokalplaner</h3>
                <p className="mb-4">
                  {city} Kommune har en række lokalplaner, der kan indeholde bestemmelser om tagmaterialer, taghældning og tagfarve. Dette gælder særligt i områder som midtbyen, Hasseris og andre områder med bevaringsværdige bygninger.
                </p>
                <p className="mb-4">
                  Du kan tjekke, om din ejendom er omfattet af en lokalplan på {city} Kommunes hjemmeside eller ved at kontakte kommunens byggesagsafdeling direkte.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Byggetilladelse</h3>
                <p className="mb-4">
                  I mange tilfælde kan du udskifte dit tag uden byggetilladelse, hvis du ikke ændrer på tagets konstruktion eller udseende væsentligt. Men hvis du:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Ændrer tagmaterialet (f.eks. fra tegl til eternit)</li>
                  <li>Ændrer taghældningen</li>
                  <li>Etablerer nye kviste eller ovenlysvinduer</li>
                  <li>Foretager konstruktionsmæssige ændringer</li>
                </ul>
                <p>
                  Så skal du søge om byggetilladelse hos {city} Kommune. Processen tager typisk 2-8 uger, alt efter projektets kompleksitet.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Servitutter</h3>
                <p className="mb-4">
                  Ud over de kommunale regler kan der være private servitutter på din ejendom, der begrænser dine muligheder for tagrenovering. Dette er særligt udbredt i nyere villakvarterer i {city} som Gug og Skalborg, hvor grundejerforeninger kan have fastsat bestemte krav til tagtyper og -farver.
                </p>
                <p>
                  Du kan finde servitutter i tingbogen eller ved at kontakte din grundejerforening.
                </p>
              </div>
              
              <p className="mt-6">
                Det er altid en god idé at undersøge reglerne, før du påbegynder et tagrenoveringsprojekt i {city}. En professionel tagentreprenør med erfaring fra lokalområdet vil ofte kunne hjælpe dig med at navigere i reglerne og sikre, at dit projekt overholder alle krav.
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
    </>
  );
};

export default TagrenoveringAalborg; 
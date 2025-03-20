import { useEffect } from "react";
import CTAButton from "@/components/CTAButton";
import TrustSignals from "@/components/TrustSignals";
import PartnerSection from "@/components/PartnerSection";
import { Helmet } from "react-helmet";

const Vinduer = () => {
  const affiliateLink = "https://www.3byggetilbud.dk/tilbud/vinduer/";
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Nye Vinduer i Danmark – Tips til vinduesudskiftning 2025</title>
        <meta name="description" content="Find professionelle vindueseksperter i dit lokalområde. Få information om energieffektive løsninger, materialetyper og spar på varmeregningen med nye vinduer." />
        <meta name="keywords" content="nye vinduer, udskiftning af vinduer, energivinduer, vinduer pris, vinduesmontering, træ-alu vinduer, energibesparende vinduer, vinduesrenovering" />
      </Helmet>

      <div className="pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="container">
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
              Få 3 Gratis Tilbud på Nye Vinduer i Dag!
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Overvejer du at udskifte dine vinduer? Vi hjælper dig med at finde de bedste håndværkere til montering af nye vinduer i dit område. 
              Spar tid og penge ved at modtage 3 gratis og uforpligtende tilbud fra professionelle firmaer.
            </p>
            
            <div className="mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <CTAButton href={affiliateLink} size="lg" className="w-full md:w-auto animate-pulse-soft">
                Bestil 3 uforpligtende tilbud
              </CTAButton>
            </div>
            
            {/* Partner Section */}
            <PartnerSection city="Danmark" affiliateLink={affiliateLink} />
            
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
                Hvorfor skifte dine vinduer?
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Vinduer spiller en afgørende rolle for både din boligs udseende, energiforbrug og indeklima. Ældre vinduer kan være utætte, dårligt isolerende og kræve meget vedligeholdelse, hvilket kan betyde højere varmeregninger og et mindre behageligt indeklima.
                </p>
                <p>
                  Ved at udskifte til nye, energieffektive vinduer kan du opnå:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Lavere varmeregning - op til 25% besparelse på varmeudgifterne</li>
                  <li>Bedre indeklima med mindre træk og kulde</li>
                  <li>Øget værdi af din bolig</li>
                  <li>Moderne og forbedret æstetisk udtryk</li>
                  <li>Bedre lydisolering mod støj udefra</li>
                  <li>Mindre vedligeholdelse og længere levetid</li>
                </ul>
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Hvornår bør du udskifte dine vinduer?
              </h2>
              
              <div className="space-y-6 text-gray-700">
                <p>
                  Det kan være svært at vide, hvornår det er tid til at investere i nye vinduer. Her er nogle tegn på, at dine vinduer trænger til udskiftning:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Vinduerne er over 20-25 år gamle</li>
                  <li>Du kan mærke træk omkring vinduesrammerne</li>
                  <li>Der dannes kondens mellem glassene i termoruderne</li>
                  <li>Vinduesrammerne er begyndt at rådne eller er beskadiget</li>
                  <li>Vinduerne er svære at åbne eller lukke</li>
                  <li>Du har enkellagsvinduer eller ældre termoruder</li>
                  <li>Din varmeregning er steget uden anden årsag</li>
                </ul>
                <p>
                  Bemærker du et eller flere af disse tegn, kan det være en god idé at få professionelle til at vurdere tilstanden af dine vinduer. Vores netværk af erfarne håndværkere kan hjælpe dig med at finde den bedste løsning til netop dit hjem.
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
              Vindustyper - find den rette løsning til dit hjem
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Træ-alu vinduer</h3>
                <p className="text-gray-700">
                  Kombination af træets naturlige charme indvendigt og aluminiums vejrbestandighed udvendigt. Minimal vedligeholdelse og lang levetid gør dem til et populært valg.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Træ vinduer</h3>
                <p className="text-gray-700">
                  Klassisk look med god isoleringsevne. Kræver regelmæssig vedligeholdelse, men giver huset et varmt og naturligt udtryk. Ideel til ældre ejendomme og bevaringsværdige bygninger.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Plast vinduer</h3>
                <p className="text-gray-700">
                  Økonomisk løsning med god isoleringsevne og minimal vedligeholdelse. Moderne plastvinduer fås i forskellige designs og farver til enhver boligtype.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 card-hover shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Energivinduer</h3>
                <p className="text-gray-700">
                  Specialdesignede vinduer med fokus på maksimal energieffektivitet. Superlavenergiruder og særlige varmekanter reducerer varmetabet betydeligt.
                </p>
              </div>
            </div>
            
            <div className="bg-brand-lightBlue rounded-xl p-8 text-center mb-12 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Usikker på hvilke vinduer der passer til dit hus?
              </h3>
              <p className="text-gray-700 mb-6">
                Få rådgivning fra lokale eksperter. Det er gratis og uforpligtende!
              </p>
              <CTAButton href={affiliateLink} className="md:w-auto">
                Indhent gratis tilbud nu
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Energimærkning og tilskudsmuligheder
            </h2>
            
            <div className="space-y-6 text-gray-700 mb-12">
              <p>
                Når du skal vælge nye vinduer, er det vigtigt at være opmærksom på energimærkningen. Vinduers energimærkning går fra A til G, hvor A er det mest energieffektive. Moderne energivinduer har typisk energimærke A eller B.
              </p>
              
              <p>
                Ved at vælge energimærkede vinduer kan du:
              </p>
              
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>Reducere dit varmeforbrug betydeligt</li>
                <li>Få et bedre indeklima med mindre kuldenedfald ved vinduerne</li>
                <li>Være berettiget til energitilskud eller andre støtteordninger</li>
              </ul>
              
              <p>
                Der findes forskellige tilskudsordninger, der kan hjælpe med at finansiere udskiftningen af dine vinduer. Kontakt din kommune eller spørg vores partnere for at høre mere om aktuelle tilskudsmuligheder i dit område.
              </p>
            </div>
            
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Klar til at opgradere dine vinduer?
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                Få uforpligtende tilbud fra op til 3 professionelle vinduesfirmaer i dit område
              </p>
              <CTAButton href={affiliateLink} size="lg">
                Få gratis tilbud nu
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vinduer; 
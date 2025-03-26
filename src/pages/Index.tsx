import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import CTAButton from "@/components/CTAButton";
import { Clock, Shield, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Renoverbolig.dk – Tips til boligrenovering 2025</title>
        <meta name="description" content="Find kvalificerede håndværkere til din husrenovering i Danmark. Få ekspertvejledning, sammenlign kvalitet og priser, og opnå det bedste resultat for dit renoveringsprojekt." />
        <meta name="keywords" content="husrenovering, renovering, håndværkere, tagarbejde, boligrenovering, renovering af hus, danske håndværkere, tilbud på renovering" />
      </Helmet>

      <HeroSection
        title="Renover dit hus med de bedste håndværkere i Danmark"
        subtitle="Vi hjælper dig med at finde de rette eksperter til dit projekt, så du kan spare både tid og penge"
        ctaText="Se renoveringstyper"
        ctaLink="#renovering-typer"
        backgroundImage="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=2070&auto=format&fit=crop"
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Hvorfor vælge renoverbolig.dk?
            </h2>
            <p className="text-xl text-gray-700">
              Vi gør det nemt og sikkert at finde de bedste håndværkere til dit renoveringsprojekt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Clock}
              title="Hurtige og nemme tilbud"
              description="Modtag op til 3 gratis og uforpligtende tilbud fra professionelle håndværkere i dit område på få minutter."
            />
            <FeatureCard
              icon={Shield}
              title="Professionelle og pålidelige håndværkere"
              description="Alle vores partnere er nøje udvalgt og kvalitetssikret for at sikre den bedste service til vores kunder."
            />
            <FeatureCard
              icon={Sparkles}
              title="Spar tid og penge"
              description="Med flere konkurrerende tilbud kan du sammenligne priser og finde den bedste løsning til dit budget."
            />
          </div>
        </div>
      </section>

      <section id="renovering-typer" className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Populære renoveringstyper
            </h2>
            <p className="text-xl text-gray-700">
              Udforsk vores detaljerede guides og få professionel hjælp til dit næste renoveringsprojekt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
              <div className="h-48 bg-gray-200 overflow-hidden flex items-center justify-center">
                <div 
                  className="w-full h-full bg-center bg-no-repeat bg-cover"
                  style={{ backgroundImage: "url('/lovable-uploads/tagrenovering.webp')" }}
                ></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tagrenovering</h3>
                <p className="text-gray-700 mb-4">Få vejledning om tagrenovering, materialer og priser. Et nyt eller repareret tag kan spare dig for dyre skader.</p>
                <CTAButton href="/tagrenovering" variant="secondary">
                  Læs om tagrenovering
                </CTAButton>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
              <div className="h-48 bg-gray-200 overflow-hidden flex items-center justify-center">
                <div 
                  className="w-full h-full bg-center bg-no-repeat bg-cover"
                  style={{ backgroundImage: "url('/lovable-uploads/facaderenovering.webp')" }}
                ></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Facaderenovering</h3>
                <p className="text-gray-700 mb-4">Forny din husfacade med professionel hjælp. En flot og beskyttet facade giver værdi til din bolig og forebygger skader.</p>
                <CTAButton href="/facaderenovering" variant="secondary">
                  Læs om facaderenovering
                </CTAButton>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden transition-all hover:shadow-md">
              <div className="h-48 bg-gray-200 overflow-hidden flex items-center justify-center">
                <div 
                  className="w-full h-full bg-center bg-no-repeat bg-cover"
                  style={{ backgroundImage: "url('/lovable-uploads/vindue.webp')" }}
                ></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Vinduer</h3>
                <p className="text-gray-700 mb-4">Nye vinduer forbedrer din bolig både energimæssigt og æstetisk. Opnå bedre indeklima og lavere varmeregning med energieffektive vinduer.</p>
                <CTAButton href="/vinduer" variant="secondary">
                  Læs om vinduer
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Alt du bør vide om husrenovering
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Husrenovering er en vigtig investering i din bolig, der både kan øge boligens værdi og forbedre din livskvalitet. I Danmark, hvor vejrforholdene kan være hårde ved bygninger, er regelmæssig vedligeholdelse og renovering særligt vigtigt for at bevare husets stand og undgå dyre reparationer senere.
              </p>
              
              <h3>Hvornår bør du overveje at renovere?</h3>
              <p>
                Der er flere tegn, der kan indikere, at dit hus trænger til renovering:
              </p>
              <ul>
                <li>Synlige skader på tag, facade eller vinduer</li>
                <li>Stigende energiregninger, der kan skyldes dårlig isolering</li>
                <li>Fugtproblemer eller skimmelsvamp</li>
                <li>Forældet indretning eller installationer</li>
                <li>Ønske om at øge boligens værdi før salg</li>
              </ul>
              
              <h3>Fordele ved professionel husrenovering</h3>
              <p>
                Selvom mindre renoveringsprojekter kan klares som gør-det-selv arbejde, er der mange fordele ved at hyre professionelle håndværkere til større projekter:
              </p>
              <ul>
                <li>Sikkerhed for at arbejdet udføres korrekt og efter gældende bygningsreglementer</li>
                <li>Adgang til specialværktøj og faglig ekspertise</li>
                <li>Garanti på det udførte arbejde</li>
                <li>Tidsbesparende, så du kan fokusere på andre ting</li>
                <li>Mulighed for at få professionel rådgivning om materialevalg og løsninger</li>
              </ul>
              
              <h3>Energirenovering - en god investering</h3>
              <p>
                Med stigende energipriser og øget fokus på klimavenlige løsninger, er energirenovering blevet en populær form for husrenovering. Ved at investere i bedre isolering, nye vinduer eller vedvarende energikilder som solceller, kan du både reducere dit energiforbrug og CO2-aftryk.
              </p>
              <p>
                Derudover findes der forskellige tilskudsordninger, der kan hjælpe med at finansiere energirenoveringer, hvilket gør det til en endnu bedre investering på langt sigt.
              </p>
              
              <h3>Vælg de rigtige håndværkere</h3>
              <p>
                Kvaliteten af renoveringen afhænger i høj grad af de håndværkere, du vælger. Det er derfor vigtigt at:
              </p>
              <ul>
                <li>Indhente flere tilbud for at sammenligne priser og ydelser</li>
                <li>Tjekke håndværkerens anmeldelser og referencer</li>
                <li>Sikre at håndværkeren har de nødvendige forsikringer og garantier</li>
                <li>Få en detaljeret kontrakt, der beskriver arbejdet, tidsplan og pris</li>
              </ul>
              
              <p>
                Hos renoverbolig.dk hjælper vi dig med at finde pålidelige og professionelle håndværkere til netop dit renoveringsprojekt, så du kan få det bedste resultat til den rigtige pris.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-brand-blue text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Klar til at komme i gang med dit projekt?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
            Udforsk vores guides eller få gratis og uforpligtende tilbud fra professionelle håndværkere i dit område
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <CTAButton 
              href="#renovering-typer" 
              className="bg-white text-brand-blue hover:bg-gray-100"
            >
              Se renoveringsguides
            </CTAButton>
            <CTAButton 
              href="/tagrenovering" 
              className="bg-white text-brand-blue hover:bg-gray-100"
              trackConversion={true}
            >
              Få tilbud på tagrenovering
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;

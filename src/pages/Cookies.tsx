import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Container } from "@/components/ui/container";

const Cookies = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Cookie Politik | husrenovation.dk</title>
        <meta name="description" content="Læs husrenovation.dk's cookie politik og få information om, hvordan vi bruger cookies på vores hjemmeside." />
      </Helmet>

      <div className="pt-28 md:pt-32 pb-16 md:pb-20">
        <Container size="sm">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Cookie Politik</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Sidst opdateret: {new Date().toLocaleDateString('da-DK', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Hvad er cookies?</h2>
              <p>
                Cookies er små tekstfiler, der gemmes på din computer, tablet eller mobiltelefon, når du besøger en hjemmeside. Cookies hjælper hjemmesiden med at huske dine præferencer og giver os mulighed for at forbedre din brugeroplevelse.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Hvordan bruger vi cookies?</h2>
              <p>
                På husrenovation.dk bruger vi cookies til forskellige formål, herunder:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Nødvendige cookies:</strong> Disse cookies er essentielle for, at du kan navigere på hjemmesiden og bruge dens funktioner.</li>
                <li><strong>Funktionelle cookies:</strong> Disse cookies husker dine præferencer og valg på hjemmesiden.</li>
                <li><strong>Statistik cookies:</strong> Disse cookies hjælper os med at forstå, hvordan besøgende interagerer med hjemmesiden, så vi kan forbedre dens funktionalitet og indhold.</li>
                <li><strong>Marketing cookies:</strong> Disse cookies bruges til at spore besøgende på tværs af hjemmesider og vise relevante annoncer baseret på deres interesser.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Hvilke typer cookies bruger vi?</h2>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.1 Førsteparts cookies</h3>
              <p>
                Disse cookies sættes af husrenovation.dk og bruges til at forbedre din brugeroplevelse på vores hjemmeside.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3.2 Tredjeparts cookies</h3>
              <p>
                Disse cookies sættes af vores partnere og tredjepartstjenester. De kan inkludere:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Google Analytics:</strong> Hjælper os med at analysere, hvordan besøgende bruger vores hjemmeside.</li>
                <li><strong>Google Ads:</strong> Bruges til at måle effektiviteten af vores annoncekampagner.</li>
                <li><strong>Facebook Pixel:</strong> Hjælper os med at måle effektiviteten af vores annoncer på Facebook.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Hvordan administrerer du cookies?</h2>
              <p>
                Du kan selv bestemme, om du vil acceptere cookies. De fleste webbrowsere accepterer automatisk cookies, men du kan normalt ændre din browserindstilling til at afvise cookies, hvis du foretrækker det.
              </p>
              <p>
                Du kan administrere dine cookie-præferencer ved at justere indstillingerne i din browser:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><a href="https://support.google.com/chrome/answer/95647?hl=da" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/da/kb/slette-cookies-fjerne-oplysninger-fra-websteder" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/da-dk/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/da-dk/microsoft-edge/slette-cookies-i-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">Microsoft Edge</a></li>
              </ul>
              <p className="mt-4">
                Bemærk, at hvis du vælger at blokere cookies, kan visse funktioner på vores hjemmeside muligvis ikke fungere korrekt.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Cookie samtykke</h2>
              <p>
                Når du besøger vores hjemmeside første gang, vil du blive præsenteret for en cookie-meddelelse, hvor du kan vælge at acceptere eller afvise forskellige typer cookies. Du kan til enhver tid ændre dine præferencer ved at klikke på "Cookie-indstillinger" nederst på vores hjemmeside.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Ændringer i vores cookie politik</h2>
              <p>
                Vi kan opdatere vores cookie politik fra tid til anden for at afspejle ændringer i vores praksis eller af juridiske, regulatoriske eller operationelle årsager. Enhver ændring vil blive offentliggjort på denne side, og hvis ændringerne er væsentlige, vil vi give dig besked via e-mail eller en meddelelse på vores hjemmeside.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Cookies; 
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Container } from "@/components/ui/container";

const Privatlivspolitik = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privatlivspolitik | husrenovation.dk</title>
        <meta name="description" content="Læs husrenovation.dk's privatlivspolitik og få information om, hvordan vi behandler og beskytter dine personoplysninger." />
      </Helmet>

      <div className="pt-28 md:pt-32 pb-16 md:pb-20">
        <Container size="sm">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Privatlivspolitik</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Sidst opdateret: {new Date().toLocaleDateString('da-DK', { day: 'numeric', month: 'long', year: 'numeric' })}
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduktion</h2>
              <p>
                På husrenovation.dk respekterer vi dit privatliv og er forpligtet til at beskytte dine personoplysninger. Denne privatlivspolitik informerer dig om, hvordan vi behandler dine personoplysninger, når du besøger vores hjemmeside og benytter vores tjenester, samt om dine rettigheder i forhold til databeskyttelse.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Dataansvarlig</h2>
              <p>
                husrenovation.dk er dataansvarlig for behandlingen af de personoplysninger, som vi indsamler om dig.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Personoplysninger vi indsamler</h2>
              <p>Vi kan indsamle og behandle følgende typer af personoplysninger:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Kontaktoplysninger:</strong> Navn, adresse, e-mail, telefonnummer</li>
                <li><strong>Projektoplysninger:</strong> Information om dit renoveringsprojekt</li>
                <li><strong>Tekniske oplysninger:</strong> IP-adresse, browsertype, enhedstype, besøgsdata</li>
                <li><strong>Kommunikation:</strong> E-mails og anden korrespondance med os</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Formål med behandlingen</h2>
              <p>Vi behandler dine personoplysninger til følgende formål:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>At formidle kontakt mellem dig og relevante håndværkere</li>
                <li>At administrere din brug af vores tjenester</li>
                <li>At forbedre vores hjemmeside og tjenester</li>
                <li>At kommunikere med dig vedrørende dine forespørgsler</li>
                <li>At overholde lovkrav og andre juridiske forpligtelser</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Retsgrundlag for behandlingen</h2>
              <p>Vores behandling af dine personoplysninger er baseret på følgende retsgrundlag:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Dit samtykke</li>
                <li>Opfyldelse af en kontrakt med dig</li>
                <li>Vores legitime interesser, f.eks. i at forbedre vores tjenester</li>
                <li>Overholdelse af juridiske forpligtelser</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Modtagere af personoplysninger</h2>
              <p>
                Vi kan dele dine personoplysninger med følgende kategorier af modtagere:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Håndværkere og andre serviceudbydere i vores netværk</li>
                <li>IT-leverandører og andre tjenesteudbydere</li>
                <li>Offentlige myndigheder, når det er påkrævet ved lov</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Opbevaringsperiode</h2>
              <p>
                Vi opbevarer dine personoplysninger så længe det er nødvendigt for at opfylde de formål, hvortil oplysningerne er indsamlet, eller så længe det er påkrævet i henhold til lovgivningen. Derefter sletter eller anonymiserer vi dine personoplysninger.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Dine rettigheder</h2>
              <p>Du har følgende rettigheder i forhold til vores behandling af dine personoplysninger:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Ret til indsigt i de personoplysninger, vi behandler om dig</li>
                <li>Ret til berigtigelse af ukorrekte personoplysninger</li>
                <li>Ret til sletning af dine personoplysninger</li>
                <li>Ret til begrænsning af behandlingen af dine personoplysninger</li>
                <li>Ret til dataportabilitet</li>
                <li>Ret til at gøre indsigelse mod behandlingen af dine personoplysninger</li>
                <li>Ret til at tilbagekalde dit samtykke</li>
                <li>Ret til at indgive en klage til Datatilsynet</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Sikkerhed</h2>
              <p>
                Vi har implementeret passende tekniske og organisatoriske foranstaltninger for at beskytte dine personoplysninger mod uautoriseret adgang, ændring, videregivelse, tab eller destruktion.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Ændringer til privatlivspolitikken</h2>
              <p>
                Vi kan opdatere denne privatlivspolitik fra tid til anden for at afspejle ændringer i vores praksis eller af juridiske, regulatoriske eller operationelle årsager. Vi opfordrer dig til regelmæssigt at gennemgå denne politik for at holde dig informeret om, hvordan vi beskytter dine personoplysninger.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Privatlivspolitik; 
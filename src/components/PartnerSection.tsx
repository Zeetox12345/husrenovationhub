import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, CheckCircle2, Clock, Building2 } from "lucide-react";

interface PartnerSectionProps {
  city: string;
  affiliateLink: string;
}

const PartnerSection = ({ city, affiliateLink }: PartnerSectionProps) => {
  return (
    <div className="py-12 bg-gray-50 rounded-xl my-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Få Gratis Rådgivning og Tilbud på Tagrenovering
          </h2>
          <p className="text-gray-600 mb-6">
            Vi anbefaler vores samarbejdspartner{" "}
            <a 
              href="https://www.partner-ads.com/dk/klikbanner.php?partnerid=53649&bannerid=25692" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              3byggetilbud.dk
            </a>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 bg-white">
            <div className="flex items-center mb-4">
              <CheckCircle2 className="h-6 w-6 text-green-500 mr-2" />
              <h3 className="text-lg font-semibold">3 Forskellige Tilbud</h3>
            </div>
            <p className="text-gray-600">
              Du får 3 forskellige tilbud fra 3 forskellige tagfirmaer. Gratis, uforpligtende og med hurtigt svar.
            </p>
          </Card>

          <Card className="p-6 bg-white">
            <div className="flex items-center mb-4">
              <Building2 className="h-6 w-6 text-blue-500 mr-2" />
              <h3 className="text-lg font-semibold">Erfaren Partner</h3>
            </div>
            <p className="text-gray-600">
              3byggetilbud har siden år 2000 formidlet over 700.000 håndværkeropgaver og er således en af de største formidlere af byggetilbud i Danmark.
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 text-blue-500 mr-2" />
            <span>Hurtigt svar og tilbud i hele landet</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Star className="h-5 w-5 text-yellow-500 mr-2" />
            <span>4,6 stjerner på Trustpilot</span>
          </div>
          <div className="flex items-center text-gray-600">
            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
            <span>100% uforpligtende</span>
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
            asChild
          >
            <a href={affiliateLink} target="_blank" rel="noopener noreferrer">
              Bestil 3 uforpligtende tilbud i {city}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection; 
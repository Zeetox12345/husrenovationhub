
import { Check, Clock, Shield, ThumbsUp } from "lucide-react";

const TrustSignals = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-lightBlue text-brand-blue mb-3">
          <Check className="h-6 w-6" />
        </div>
        <h3 className="text-sm md:text-base font-medium text-gray-900">Godkendte håndværkere</h3>
      </div>
      
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-lightBlue text-brand-blue mb-3">
          <ThumbsUp className="h-6 w-6" />
        </div>
        <h3 className="text-sm md:text-base font-medium text-gray-900">Tilfredse kunder</h3>
      </div>
      
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-lightBlue text-brand-blue mb-3">
          <Clock className="h-6 w-6" />
        </div>
        <h3 className="text-sm md:text-base font-medium text-gray-900">Hurtig service</h3>
      </div>
      
      <div className="flex flex-col items-center text-center">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-lightBlue text-brand-blue mb-3">
          <Shield className="h-6 w-6" />
        </div>
        <h3 className="text-sm md:text-base font-medium text-gray-900">Sikker betaling</h3>
      </div>
    </div>
  );
};

export default TrustSignals;


import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 card-hover">
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-brand-lightBlue text-brand-blue mb-5">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;


import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-xl font-semibold text-brand-blue">
              husrenovation.dk
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              Vi hjælper dig med at finde de bedste håndværkere til dit renoveringsprojekt, så du kan spare tid og penge.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Renovering</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/tagrenovering" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  Tagrenovering
                </Link>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  Facaderenovering
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  Vinduesudskiftning
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  Køkkenrenovering
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Information</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  Om os
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  Privatlivspolitik
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  Cookie politik
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} husrenovation.dk. Alle rettigheder forbeholdes. 
            <span className="block sm:inline sm:ml-2">Affiliate oplysning: Vi kan modtage kompensation for henvisning til vores partnere.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

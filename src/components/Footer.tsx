
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Information</h3>
            <ul className="mt-4 space-y-3">
              {/* Information section is empty as requested */}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            © {currentYear} husrenovation.dk. Alle rettigheder forbeholdes.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

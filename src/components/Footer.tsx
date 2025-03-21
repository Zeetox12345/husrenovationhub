import { Link } from "react-router-dom";
import { Container } from "./ui/container";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <Container className="py-10 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-xl font-semibold text-brand-blue hover:text-brand-blue/90 transition-colors">
              renoverbolig.dk
            </Link>
            <p className="mt-4 text-gray-600 max-w-md">
              Vi hjælper dig med at finde de bedste håndværkere til dit renoveringsprojekt, så du kan spare tid og penge.
            </p>
          </div>
          
          {/* Renovering Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Renovering</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/tagrenovering" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  Tagrenovering
                </Link>
              </li>
              <li>
                <Link to="/facaderenovering" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  Facaderenovering
                </Link>
              </li>
              <li>
                <Link to="/vinduer" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  Vinduer
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Information Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Information</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privatlivspolitik" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  Privatlivspolitik
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-base text-gray-600 hover:text-brand-blue transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <hr className="my-8 border-gray-200" />
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500">
          <p className="text-sm mb-4 md:mb-0">
            © {currentYear} renoverbolig.dk. Alle rettigheder forbeholdes.
          </p>
          
          {/* Quick Links */}
          <div className="flex space-x-6">
            <Link to="/privatlivspolitik" className="text-sm text-gray-500 hover:text-brand-blue transition-colors">
              Privatlivspolitik
            </Link>
            <Link to="/cookies" className="text-sm text-gray-500 hover:text-brand-blue transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

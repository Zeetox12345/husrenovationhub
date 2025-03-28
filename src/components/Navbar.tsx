import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, ChevronUp, Home } from "lucide-react";
import { Container } from "./ui/container";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isTagDropdownOpen, setIsTagDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleTagDropdown = () => {
    setIsTagDropdownOpen(!isTagDropdownOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/98 backdrop-blur-sm py-3"
          : "bg-gradient-to-r from-white via-white/98 to-brand-lightBlue/20 backdrop-blur-sm py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 transition-all hover:opacity-90 group"
        >
          <div className="bg-brand-blue/90 text-white p-2 rounded-md shadow-sm group-hover:shadow-md transition-all">
            <Home className="h-5 w-5" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-brand-blue to-blue-600 bg-clip-text text-transparent tracking-tight font-sans">
            Renoverbolig.dk
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link 
                to="/" 
                className="text-base font-medium text-gray-700 transition-all hover:text-brand-blue hover:underline hover:underline-offset-4"
              >
                Hjem
              </Link>
            </li>
            <li className="relative group">
              <button 
                className="flex items-center text-base font-medium text-gray-700 transition-all hover:text-brand-blue group-hover:text-brand-blue hover:underline hover:underline-offset-4"
                onClick={toggleTagDropdown}
                onMouseEnter={() => setIsTagDropdownOpen(true)}
              >
                Tagrenovering
                {isTagDropdownOpen ? (
                  <ChevronUp className="h-4 w-4 ml-1" />
                ) : (
                  <ChevronDown className="h-4 w-4 ml-1" />
                )}
              </button>
              
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md shadow-lg rounded-md py-2 z-50 transform origin-top transition-all duration-200 ${
                  isTagDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                }`}
                onMouseLeave={() => setIsTagDropdownOpen(false)}
              >
                <div className="py-1 px-2">
                  <p className="text-xs font-medium text-brand-blue uppercase tracking-wide mb-1 px-2">Tagrenovering</p>
                  <div className="h-0.5 bg-gradient-to-r from-brand-blue to-transparent mb-2"></div>
                </div>
                <Link 
                  to="/tagrenovering" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-lightBlue/40 hover:text-brand-blue transition-colors"
                  onClick={() => setIsTagDropdownOpen(false)}
                >
                  Tagrenovering
                </Link>
                <Link 
                  to="/tagrenovering-kobenhavn" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-lightBlue/40 hover:text-brand-blue transition-colors"
                  onClick={() => setIsTagDropdownOpen(false)}
                >
                  Tagrenovering København
                </Link>
                <Link 
                  to="/tagrenovering-aarhus" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-lightBlue/40 hover:text-brand-blue transition-colors"
                  onClick={() => setIsTagDropdownOpen(false)}
                >
                  Tagrenovering Aarhus
                </Link>
                <Link 
                  to="/tagrenovering-odense" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-lightBlue/40 hover:text-brand-blue transition-colors"
                  onClick={() => setIsTagDropdownOpen(false)}
                >
                  Tagrenovering Odense
                </Link>
                <Link 
                  to="/tagrenovering-aalborg" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-lightBlue/40 hover:text-brand-blue transition-colors"
                  onClick={() => setIsTagDropdownOpen(false)}
                >
                  Tagrenovering Aalborg
                </Link>
                <Link 
                  to="/tagrenovering-esbjerg" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-lightBlue/40 hover:text-brand-blue transition-colors"
                  onClick={() => setIsTagDropdownOpen(false)}
                >
                  Tagrenovering Esbjerg
                </Link>
                <Link 
                  to="/tagrenovering-randers" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-lightBlue/40 hover:text-brand-blue transition-colors"
                  onClick={() => setIsTagDropdownOpen(false)}
                >
                  Tagrenovering Randers
                </Link>
                <Link 
                  to="/tagrenovering-kolding" 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-lightBlue/40 hover:text-brand-blue transition-colors"
                  onClick={() => setIsTagDropdownOpen(false)}
                >
                  Tagrenovering Kolding
                </Link>
              </div>
            </li>
            <li>
              <Link 
                to="/facaderenovering" 
                className="text-base font-medium text-gray-700 transition-all hover:text-brand-blue hover:underline hover:underline-offset-4"
              >
                Facaderenovering
              </Link>
            </li>
            <li>
              <Link 
                to="/vinduer" 
                className="text-base font-medium text-gray-700 transition-all hover:text-brand-blue hover:underline hover:underline-offset-4"
              >
                Vinduer
              </Link>
            </li>
          </ul>
        </nav>

        <button 
          className="inline-flex items-center justify-center md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </Container>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20 pb-6 overflow-y-auto md:hidden">
          <div className="absolute right-6 top-6">
            <button 
              onClick={toggleMobileMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <nav className="px-6">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  to="/" 
                  className="text-xl font-medium text-gray-800 hover:text-brand-blue transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hjem
                </Link>
              </li>
              <li>
                <div className="flex items-center justify-between">
                  <Link 
                    to="/tagrenovering" 
                    className="text-xl font-medium text-gray-800 hover:text-brand-blue transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Tagrenovering
                  </Link>
                </div>
                <div className="h-0.5 bg-gradient-to-r from-brand-blue to-transparent my-2"></div>
              </li>
              
              <li className="pl-4 pt-0">
                <Link 
                  to="/tagrenovering-kobenhavn" 
                  className="block text-lg font-medium text-gray-700 hover:text-brand-blue transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering København
                </Link>
              </li>
              <li className="pl-4">
                <Link 
                  to="/tagrenovering-aarhus" 
                  className="block text-lg font-medium text-gray-700 hover:text-brand-blue transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering Aarhus
                </Link>
              </li>
              <li className="pl-4">
                <Link 
                  to="/tagrenovering-odense" 
                  className="block text-lg font-medium text-gray-700 hover:text-brand-blue transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering Odense
                </Link>
              </li>
              <li className="pl-4">
                <Link 
                  to="/tagrenovering-aalborg" 
                  className="block text-lg font-medium text-gray-700 hover:text-brand-blue transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering Aalborg
                </Link>
              </li>
              <li className="pl-4">
                <Link 
                  to="/tagrenovering-esbjerg" 
                  className="block text-lg font-medium text-gray-700 hover:text-brand-blue transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering Esbjerg
                </Link>
              </li>
              <li className="pl-4">
                <Link 
                  to="/tagrenovering-randers" 
                  className="block text-lg font-medium text-gray-700 hover:text-brand-blue transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering Randers
                </Link>
              </li>
              <li className="pl-4 mb-4">
                <Link 
                  to="/tagrenovering-kolding" 
                  className="block text-lg font-medium text-gray-700 hover:text-brand-blue transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering Kolding
                </Link>
              </li>
              
              <li>
                <Link 
                  to="/facaderenovering" 
                  className="block text-xl font-medium text-gray-800 hover:text-brand-blue transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Facaderenovering
                </Link>
              </li>
              <li>
                <Link 
                  to="/vinduer" 
                  className="block text-xl font-medium text-gray-800 hover:text-brand-blue transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Vinduer
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

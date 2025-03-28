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
        <div className="fixed inset-0 z-40 bg-white md:hidden flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <Link 
              to="/" 
              className="flex items-center space-x-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="bg-brand-blue/90 text-white p-1.5 rounded-md">
                <Home className="h-4 w-4" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-brand-blue to-blue-600 bg-clip-text text-transparent">
                Renoverbolig.dk
              </span>
            </Link>
            <button 
              onClick={toggleMobileMenu}
              aria-label="Close menu"
              className="p-1"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto">
            <div className="grid grid-cols-1 gap-0 p-0">
              <Link 
                to="/" 
                className="block py-3 px-6 text-lg font-medium text-gray-800 hover:text-brand-blue border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Hjem
              </Link>
              
              <div className="border-b">
                <Link 
                  to="/tagrenovering" 
                  className="block py-3 px-6 text-lg font-medium text-gray-800 hover:text-brand-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering
                </Link>
              </div>
              
              <div className="bg-gray-50 border-b">
                <Link 
                  to="/tagrenovering-kobenhavn" 
                  className="block py-2.5 px-8 text-base text-gray-700 hover:text-brand-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering København
                </Link>
              </div>
              <div className="bg-gray-50 border-b">
                <Link 
                  to="/tagrenovering-aarhus" 
                  className="block py-2.5 px-8 text-base text-gray-700 hover:text-brand-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering Aarhus
                </Link>
              </div>
              <div className="bg-gray-50 border-b">
                <Link 
                  to="/tagrenovering-odense" 
                  className="block py-2.5 px-8 text-base text-gray-700 hover:text-brand-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering Odense
                </Link>
              </div>
              <div className="bg-gray-50 border-b">
                <Link 
                  to="/tagrenovering-aalborg" 
                  className="block py-2.5 px-8 text-base text-gray-700 hover:text-brand-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering Aalborg
                </Link>
              </div>
              <div className="bg-gray-50 border-b">
                <Link 
                  to="/tagrenovering-esbjerg" 
                  className="block py-2.5 px-8 text-base text-gray-700 hover:text-brand-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering Esbjerg
                </Link>
              </div>
              <div className="bg-gray-50 border-b">
                <Link 
                  to="/tagrenovering-randers" 
                  className="block py-2.5 px-8 text-base text-gray-700 hover:text-brand-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering Randers
                </Link>
              </div>
              <div className="bg-gray-50 border-b">
                <Link 
                  to="/tagrenovering-kolding" 
                  className="block py-2.5 px-8 text-base text-gray-700 hover:text-brand-blue"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering Kolding
                </Link>
              </div>
              
              <Link 
                to="/facaderenovering" 
                className="block py-3 px-6 text-lg font-medium text-gray-800 hover:text-brand-blue border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Facaderenovering
              </Link>
              
              <Link 
                to="/vinduer" 
                className="block py-3 px-6 text-lg font-medium text-gray-800 hover:text-brand-blue border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Vinduer
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

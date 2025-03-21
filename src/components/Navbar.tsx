import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
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
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-semibold text-brand-blue transition-all hover:opacity-90"
        >
          renoverbolig.dk
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            <li>
              <Link 
                to="/" 
                className="text-base font-medium text-gray-700 transition-all hover:text-brand-blue"
              >
                Hjem
              </Link>
            </li>
            <li className="relative">
              <button 
                className="flex items-center text-base font-medium text-gray-700 transition-all hover:text-brand-blue"
                onClick={toggleTagDropdown}
              >
                Tagrenovering
                {isTagDropdownOpen ? (
                  <ChevronUp className="h-4 w-4 ml-1" />
                ) : (
                  <ChevronDown className="h-4 w-4 ml-1" />
                )}
              </button>
              
              {isTagDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                  <Link 
                    to="/tagrenovering" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsTagDropdownOpen(false)}
                  >
                    Tagrenovering
                  </Link>
                  <Link 
                    to="/tagrenovering-kobenhavn" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsTagDropdownOpen(false)}
                  >
                    Tagrenovering København
                  </Link>
                  <Link 
                    to="/tagrenovering-aarhus" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsTagDropdownOpen(false)}
                  >
                    Tagrenovering Aarhus
                  </Link>
                  <Link 
                    to="/tagrenovering-odense" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsTagDropdownOpen(false)}
                  >
                    Tagrenovering Odense
                  </Link>
                  <Link 
                    to="/tagrenovering-aalborg" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsTagDropdownOpen(false)}
                  >
                    Tagrenovering Aalborg
                  </Link>
                  <Link 
                    to="/tagrenovering-esbjerg" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsTagDropdownOpen(false)}
                  >
                    Tagrenovering Esbjerg
                  </Link>
                  <Link 
                    to="/tagrenovering-randers" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsTagDropdownOpen(false)}
                  >
                    Tagrenovering Randers
                  </Link>
                  <Link 
                    to="/tagrenovering-kolding" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsTagDropdownOpen(false)}
                  >
                    Tagrenovering Kolding
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link 
                to="/facaderenovering" 
                className="text-base font-medium text-gray-700 transition-all hover:text-brand-blue"
              >
                Facaderenovering
              </Link>
            </li>
            <li>
              <Link 
                to="/vinduer" 
                className="text-base font-medium text-gray-700 transition-all hover:text-brand-blue"
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
        <div className="fixed inset-0 z-40 bg-white pt-24 pb-6 px-6 md:hidden">
          <nav>
            <ul className="flex flex-col space-y-6">
              <li>
                <Link 
                  to="/" 
                  className="text-xl font-medium text-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Hjem
                </Link>
              </li>
              <li>
                <Link 
                  to="/tagrenovering" 
                  className="text-xl font-medium text-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering
                </Link>
              </li>
              <li className="pl-4 pt-2">
                <Link 
                  to="/tagrenovering-kobenhavn" 
                  className="text-lg font-medium text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering København
                </Link>
              </li>
              <li className="pl-4">
                <Link 
                  to="/tagrenovering-aarhus" 
                  className="text-lg font-medium text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering Aarhus
                </Link>
              </li>
              <li className="pl-4">
                <Link 
                  to="/tagrenovering-odense" 
                  className="text-lg font-medium text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering Odense
                </Link>
              </li>
              <li className="pl-4">
                <Link 
                  to="/tagrenovering-aalborg" 
                  className="text-lg font-medium text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering Aalborg
                </Link>
              </li>
              <li className="pl-4">
                <Link 
                  to="/tagrenovering-esbjerg" 
                  className="text-lg font-medium text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering Esbjerg
                </Link>
              </li>
              <li className="pl-4">
                <Link 
                  to="/tagrenovering-randers" 
                  className="text-lg font-medium text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering Randers
                </Link>
              </li>
              <li className="pl-4">
                <Link 
                  to="/tagrenovering-kolding" 
                  className="text-lg font-medium text-gray-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Tagrenovering Kolding
                </Link>
              </li>
              <li>
                <Link 
                  to="/facaderenovering" 
                  className="text-xl font-medium text-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Facaderenovering
                </Link>
              </li>
              <li>
                <Link 
                  to="/vinduer" 
                  className="text-xl font-medium text-gray-800"
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

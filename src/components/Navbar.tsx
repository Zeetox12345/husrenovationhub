
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-semibold text-brand-blue transition-all hover:opacity-90"
        >
          husrenovation.dk
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
            <li>
              <Link 
                to="/tagrenovering" 
                className="text-base font-medium text-gray-700 transition-all hover:text-brand-blue"
              >
                Tagrenovering
              </Link>
            </li>
            <li>
              <a 
                href="#" 
                className="text-base font-medium text-gray-700 transition-all hover:text-brand-blue"
              >
                Facaderenovering
              </a>
            </li>
            <li>
              <a 
                href="#" 
                className="text-base font-medium text-gray-700 transition-all hover:text-brand-blue"
              >
                Kontakt
              </a>
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
      </div>

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
              <li>
                <a 
                  href="#" 
                  className="text-xl font-medium text-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Facaderenovering
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-xl font-medium text-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

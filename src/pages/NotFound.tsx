
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-brand-blue mb-4">404</h1>
        <p className="text-xl text-gray-700 mb-6">Beklager, denne side findes ikke</p>
        <p className="text-gray-600 mb-8">
          Siden du leder efter eksisterer ikke eller er blevet flyttet.
        </p>
        <Link
          to="/"
          className="text-white bg-brand-blue px-6 py-3 rounded-lg font-medium hover:bg-brand-blue/90 transition-colors inline-block"
        >
          Tilbage til forsiden
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

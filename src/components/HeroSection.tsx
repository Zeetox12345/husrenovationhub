
import { useEffect, useRef } from "react";
import CTAButton from "./CTAButton";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage
}: HeroSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0", "translate-y-10");
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center transition-all duration-700 opacity-0 translate-y-10 pt-24 pb-16"
      style={{
        background: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.9)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container max-w-5xl">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {subtitle}
          </p>
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <CTAButton href={ctaLink} size="xl" className="animate-pulse-soft">
              {ctaText}
            </CTAButton>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;

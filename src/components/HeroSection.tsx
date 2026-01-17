import { Web3MediaHero } from "@/components/ui/web3media-hero";
import { useNavigate } from "react-router-dom";
import { Bot, Search, BarChart3, Trophy } from "lucide-react";

const HeroSection = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Web3MediaHero
      logo="HACK IFY"
      navigation={[
        { label: "Sourcing", onClick: () => navigate("/sourcing") },
        { label: "PMO", onClick: () => navigate("/pmo") },
        { label: "Design", onClick: () => navigate("/design") },
        { label: "Hackademy", onClick: () => navigate("/hackademy") }
      ]}
      contactButton={{
        label: "Contact",
        onClick: () => scrollToSection('contact')
      }}
      title="From sourcing"
      highlightedText="to winning."
      subtitle="HACKIFY combine expertise humaine et intelligence artificielle pour vous accompagner sur toute la chaîne de valeur des appels d'offres. Du sourcing IA à la victoire."
      ctaButton={{
        label: "Réserver un audit stratégique",
        onClick: () => scrollToSection('contact')
      }}
      cryptoIcons={[
        { 
          icon: <Bot className="w-10 h-10 text-primary" />, 
          label: "AI", 
          position: { x: "8%", y: "25%" } 
        },
        { 
          icon: <Search className="w-10 h-10 text-primary" />, 
          label: "Sourcing", 
          position: { x: "88%", y: "20%" } 
        },
        { 
          icon: <BarChart3 className="w-10 h-10 text-primary" />, 
          label: "Analytics", 
          position: { x: "12%", y: "65%" } 
        },
        { 
          icon: <Trophy className="w-10 h-10 text-primary" />, 
          label: "Win", 
          position: { x: "85%", y: "60%" } 
        }
      ]}
      trustedByText="Ils nous font confiance"
      brands={[
        {
          name: "Capgemini",
          logo: (
            <svg width="100" height="24" viewBox="0 0 100 24" fill="none">
              <text x="0" y="18" fill="rgba(255,255,255,0.5)" fontSize="14" fontWeight="600">
                Capgemini
              </text>
            </svg>
          ),
        },
        {
          name: "Sopra Steria",
          logo: (
            <svg width="90" height="24" viewBox="0 0 90 24" fill="none">
              <text x="0" y="18" fill="rgba(255,255,255,0.5)" fontSize="14" fontWeight="600">
                Sopra Steria
              </text>
            </svg>
          ),
        },
        {
          name: "Atos",
          logo: (
            <svg width="50" height="24" viewBox="0 0 50 24" fill="none">
              <text x="0" y="18" fill="rgba(255,255,255,0.5)" fontSize="14" fontWeight="600">
                Atos
              </text>
            </svg>
          ),
        },
        {
          name: "Accenture",
          logo: (
            <svg width="90" height="24" viewBox="0 0 90 24" fill="none">
              <text x="0" y="18" fill="rgba(255,255,255,0.5)" fontSize="14" fontWeight="600">
                Accenture
              </text>
            </svg>
          ),
        },
        {
          name: "CGI",
          logo: (
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
              <text x="0" y="18" fill="rgba(255,255,255,0.5)" fontSize="14" fontWeight="600">
                CGI
              </text>
            </svg>
          ),
        },
        {
          name: "Thales",
          logo: (
            <svg width="60" height="24" viewBox="0 0 60 24" fill="none">
              <text x="0" y="18" fill="rgba(255,255,255,0.5)" fontSize="14" fontWeight="600">
                Thales
              </text>
            </svg>
          ),
        },
      ]}
    />
  );
};

export default HeroSection;

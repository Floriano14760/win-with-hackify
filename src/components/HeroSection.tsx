import Hero from "@/components/ui/animated-shader-hero";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Hero
      trustBadge={{
        text: "Cabinet de conseil en appels d'offres"
      }}
      headline="From sourcing to winning."
      subtitle="Expertise humaine + IA pour gagner vos appels d'offres."
      buttons={{
        primary: {
          text: "Réserver un audit stratégique",
          onClick: () => scrollToSection('contact')
        },
        secondary: {
          text: "Découvrir nos services",
          onClick: () => scrollToSection('services')
        }
      }}
    />
  );
};

export default HeroSection;

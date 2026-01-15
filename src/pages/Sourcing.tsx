import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Search, Zap, Target, Brain, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: "Veille IA augmentée",
    description: "Notre algorithme d'intelligence artificielle scanne en continu les plateformes d'appels d'offres pour identifier les opportunités pertinentes.",
  },
  {
    icon: Brain,
    title: "Qualification intelligente",
    description: "L'IA analyse chaque AO et évalue automatiquement votre probabilité de gain selon vos forces et l'historique.",
  },
  {
    icon: Target,
    title: "Priorisation stratégique",
    description: "Focus sur les appels d'offres à plus fort potentiel grâce à notre scoring prédictif alimenté par le machine learning.",
  },
  {
    icon: Zap,
    title: "Alertes temps réel",
    description: "Notifications instantanées dès qu'un AO correspondant à vos critères est publié.",
  },
];

const Sourcing = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-charcoal to-background">
        <div className="section-container">
          <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
            Sourcing d'appels d'offres
          </span>
          <h1 className="headline-xl mb-6">
            Trouvez les <span className="text-gradient-orange">bonnes opportunités</span>
            <br />grâce à l'IA
          </h1>
          <p className="body-lg max-w-2xl mb-8">
            Notre technologie d'intelligence artificielle identifie et qualifie les appels d'offres 
            à fort potentiel, vous permettant de concentrer vos efforts sur les opportunités gagnantes.
          </p>
          <a href="/#contact" className="btn-primary group">
            Demander une démo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding" ref={ref}>
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`card-premium transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="body-md">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sourcing;

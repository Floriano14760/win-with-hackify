import Navbar from '@/components/Navbar';
import HoverFooter from '@/components/HoverFooter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Briefcase, Users, Calendar, CheckCircle, ArrowRight, Cpu } from 'lucide-react';

const features = [
  {
    icon: Briefcase,
    title: "Gouvernance IA-driven",
    description: "Pilotage global assisté par IA pour anticiper les risques et optimiser l'allocation des ressources.",
  },
  {
    icon: Calendar,
    title: "Rétroplanning intelligent",
    description: "Génération automatique de plannings optimisés grâce à notre moteur d'ordonnancement IA.",
  },
  {
    icon: Users,
    title: "Coordination augmentée",
    description: "Animation des contributeurs avec suggestions IA pour améliorer la collaboration.",
  },
  {
    icon: CheckCircle,
    title: "Assurance qualité",
    description: "Contrôle qualité automatisé et checklist intelligente avant chaque dépôt.",
  },
  {
    icon: Cpu,
    title: "Tableaux de bord prédictifs",
    description: "Suivi en temps réel avec prédictions IA sur les chances de succès et points d'attention.",
  },
];

const PMO = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-charcoal to-background">
        <div className="section-container">
          <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
            Bid Management & PMO
          </span>
          <h1 className="headline-xl mb-6">
            Pilotez vos réponses avec <span className="text-gradient-orange">précision</span>
          </h1>
          <p className="body-lg max-w-2xl mb-8">
            Une gouvernance structurée augmentée par l'intelligence artificielle pour coordonner 
            efficacement vos équipes et garantir des réponses de qualité dans les délais.
          </p>
          <a href="/#contact" className="btn-primary group">
            Découvrir notre méthode
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding" ref={ref}>
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      <HoverFooter />
    </div>
  );
};

export default PMO;

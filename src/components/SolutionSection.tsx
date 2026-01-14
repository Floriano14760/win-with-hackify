import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Target, Settings, Palette, GraduationCap } from 'lucide-react';

const solutions = [
  {
    icon: Target,
    title: "Sourcing intelligent",
    description: "Identification et qualification des appels d'offres à fort potentiel adaptés à votre stratégie.",
  },
  {
    icon: Settings,
    title: "Pilotage structuré",
    description: "Gouvernance, coordination et suivi rigoureux de chaque réponse jusqu'au dépôt.",
  },
  {
    icon: Palette,
    title: "Propositions impactantes",
    description: "Transformation de vos contenus en offres claires, lisibles et différenciantes.",
  },
  {
    icon: GraduationCap,
    title: "Montée en compétence",
    description: "Formation de vos équipes pour autonomiser et pérenniser votre succès.",
  },
];

const SolutionSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
              La solution
            </span>
            <h2 className={`headline-lg mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              HACKIFY, votre allié <span className="text-gradient-orange">stratégique</span>
            </h2>
            <p className={`body-lg mb-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Nous prenons en charge l'intégralité de la chaîne de valeur des appels d'offres, 
              du sourcing à la formation de vos équipes. Notre approche end-to-end vous garantit 
              des résultats mesurables.
            </p>
            <div className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <a href="#services" className="btn-primary">
                Explorer nos expertises
              </a>
            </div>
          </div>

          {/* Right grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {solutions.map((solution, index) => (
              <div
                key={solution.title}
                className={`card-service transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="w-12 h-12 mb-4 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

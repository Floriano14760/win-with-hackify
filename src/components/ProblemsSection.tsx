import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { AlertTriangle, Clock, Users, FileX } from 'lucide-react';

const problems = [
  {
    icon: AlertTriangle,
    title: "Manque de visibilité",
    description: "Vous passez à côté d'appels d'offres stratégiques faute d'une veille efficace.",
  },
  {
    icon: Clock,
    title: "Délais non tenus",
    description: "Les échéances sont serrées et la pression compromet la qualité de vos réponses.",
  },
  {
    icon: Users,
    title: "Coordination difficile",
    description: "Vos équipes travaillent en silo et l'information circule mal entre les contributeurs.",
  },
  {
    icon: FileX,
    title: "Propositions peu impactantes",
    description: "Vos offres manquent de différenciation et ne valorisent pas votre expertise.",
  },
];

const ProblemsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-background relative">
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="section-container" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
            Les défis
          </span>
          <h2 className={`headline-lg max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Ces problèmes freinent votre <span className="text-gradient-orange">croissance</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className={`card-premium text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                <problem.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {problem.title}
              </h3>
              <p className="body-md">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;

import Navbar from '@/components/Navbar';
import HoverFooter from '@/components/HoverFooter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { GraduationCap, Users, Building, UserCheck, ArrowRight, Bot } from 'lucide-react';

const programs = [
  {
    icon: Users,
    title: "Formation Assistantes & Marketing",
    description: "Maîtrise des outils IA et des process AO pour accélérer la production documentaire.",
  },
  {
    icon: UserCheck,
    title: "Formation Commerciaux",
    description: "Techniques de réponse augmentées par l'IA pour maximiser l'impact de vos propositions.",
  },
  {
    icon: Building,
    title: "Programmes intra-entreprise",
    description: "Parcours sur-mesure avec intégration d'outils IA adaptés à votre organisation.",
  },
  {
    icon: Bot,
    title: "Coaching IA personnalisé",
    description: "Accompagnement individuel pour maîtriser les outils d'IA générative dans vos réponses.",
  },
];

const Hackademy = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-charcoal to-background">
        <div className="section-container">
          <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
            HACKIFY Academy
          </span>
          <h1 className="headline-xl mb-6">
            Formez vos équipes à <span className="text-gradient-orange">l'excellence IA</span>
          </h1>
          <p className="body-lg max-w-2xl mb-8">
            Des programmes de formation innovants intégrant l'intelligence artificielle pour 
            autonomiser vos équipes et pérenniser votre succès dans les appels d'offres.
          </p>
          <a href="/#contact" className="btn-primary group">
            Découvrir nos formations
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding" ref={ref}>
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className={`card-premium transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                  <program.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {program.title}
                </h3>
                <p className="body-md">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HoverFooter />
    </div>
  );
};

export default Hackademy;

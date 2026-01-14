import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Search, Briefcase, PenTool, Database, GraduationCap, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    number: "01",
    title: "Sourcing d'appels d'offres",
    features: [
      "Identification ciblée des AO pertinents",
      "Qualification des opportunités",
      "Priorisation selon les chances de gain",
      "Veille active et intelligente",
    ],
  },
  {
    icon: Briefcase,
    number: "02",
    title: "Bid Management & PMO",
    features: [
      "Gouvernance et pilotage global",
      "Rétroplanning & coordination",
      "Animation des contributeurs",
      "Assurance qualité & dépôt final",
    ],
  },
  {
    icon: PenTool,
    number: "03",
    title: "Design & Impact",
    features: [
      "Direction artistique premium",
      "Structuration des messages",
      "Mise en page professionnelle",
      "Infographies & schémas de valeur",
    ],
  },
  {
    icon: Database,
    number: "04",
    title: "Knowledge Management",
    features: [
      "Templates réutilisables",
      "Capitalisation des contenus",
      "Process AO industrialisés",
      "Base de références",
    ],
  },
  {
    icon: GraduationCap,
    number: "05",
    title: "Hackify Academy",
    features: [
      "Formation Assistantes & Marketing",
      "Formation Commerciaux",
      "Programmes intra-entreprise",
      "Coaching sur mesure",
    ],
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="section-padding bg-background relative">
      <div className="section-container" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
            Nos expertises
          </span>
          <h2 className={`headline-lg max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Des services <span className="text-gradient-orange">premium</span> pour chaque étape
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`card-service group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              } ${index === 4 ? 'lg:col-start-2' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Number badge */}
              <span className="absolute top-6 right-6 text-6xl font-display font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                {service.number}
              </span>

              <div className="relative z-10">
                <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="font-display text-xl font-semibold mb-4 text-foreground">
                  {service.title}
                </h3>

                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

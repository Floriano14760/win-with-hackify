import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Building2, Building, Rocket, Server, Briefcase } from 'lucide-react';

const targets = [
  { icon: Building2, label: "PME & ETI" },
  { icon: Building, label: "Grands comptes" },
  { icon: Rocket, label: "Startups B2B" },
  { icon: Server, label: "ESN" },
  { icon: Briefcase, label: "Cabinets de conseil" },
];

const TargetSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>
      
      <div className="section-container relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
            Pour qui ?
          </span>
          <h2 className={`headline-lg max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Des entreprises <span className="text-gradient-orange">ambitieuses</span>
          </h2>
          <p className={`body-lg max-w-2xl mx-auto mt-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            HACKIFY accompagne les organisations qui considèrent les appels d'offres 
            comme un levier stratégique de croissance.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {targets.map((target, index) => (
            <div
              key={target.label}
              className={`flex items-center gap-3 px-6 py-4 bg-secondary/50 border border-border/50 rounded-full
                         hover:border-primary/40 hover:bg-secondary transition-all duration-300
                         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <target.icon className="w-5 h-5 text-primary" />
              <span className="font-medium text-foreground">{target.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetSection;

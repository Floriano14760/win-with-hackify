import Navbar from '@/components/Navbar';
import HoverFooter from '@/components/HoverFooter';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { PenTool, Layout, Image, FileText, ArrowRight, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: "Direction artistique IA",
    description: "Création de visuels impactants avec assistance IA pour un design premium différenciant.",
  },
  {
    icon: Layout,
    title: "Structuration intelligente",
    description: "Organisation optimale des contenus grâce à l'analyse IA des meilleures pratiques.",
  },
  {
    icon: FileText,
    title: "Mise en page professionnelle",
    description: "Templates dynamiques et layouts générés par IA adaptés à chaque contexte.",
  },
  {
    icon: Image,
    title: "Infographies IA-powered",
    description: "Création automatisée de schémas de valeur et infographies à partir de vos données.",
  },
];

const Design = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-charcoal to-background">
        <div className="section-container">
          <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
            Design & Impact
          </span>
          <h1 className="headline-xl mb-6">
            Des propositions qui <span className="text-gradient-orange">marquent les esprits</span>
          </h1>
          <p className="body-lg max-w-2xl mb-8">
            Transformez vos offres en expériences visuelles mémorables grâce à notre direction 
            artistique premium augmentée par l'intelligence artificielle.
          </p>
          <a href="/#contact" className="btn-primary group">
            Voir nos réalisations
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

      <HoverFooter />
    </div>
  );
};

export default Design;

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Grâce à HACKIFY et leur approche IA, notre taux de transformation a bondi de 35% à 52%. Leur expertise en bid management est inégalée.",
    author: "Sophie Martin",
    role: "Directrice Commerciale",
    company: "TechVision Consulting",
  },
  {
    quote: "L'accompagnement de HACKIFY a révolutionné notre façon de répondre aux AO. Leur veille IA nous fait gagner un temps précieux sur le sourcing.",
    author: "Philippe Dubois",
    role: "CEO",
    company: "Digital Partners",
  },
  {
    quote: "La qualité des propositions produites avec leur design IA est remarquable. Nos clients nous disent régulièrement que nos offres se démarquent visuellement.",
    author: "Marie Lefebvre",
    role: "Responsable Avant-Vente",
    company: "CloudFirst Services",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
            Témoignages
          </span>
          <h2 className={`headline-lg max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Ce que nos <span className="text-gradient-orange">clients</span> disent de nous
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`card-premium relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <blockquote className="body-md mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="border-t border-border/50 pt-4">
                <p className="font-display font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
                <p className="text-sm text-primary">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

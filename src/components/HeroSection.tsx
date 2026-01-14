import { ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="animate-fade-up opacity-0 mb-8">
            <span className="badge-premium">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Cabinet de conseil premium
            </span>
          </div>

          {/* Headline */}
          <h1 className="headline-xl mb-6 animate-fade-up opacity-0 animation-delay-200">
            <span className="text-foreground">From sourcing</span>
            <br />
            <span className="text-gradient-orange">to winning.</span>
          </h1>

          {/* Subheadline */}
          <p className="body-lg max-w-2xl mx-auto mb-12 animate-fade-up opacity-0 animation-delay-400">
            HACKIFY vous accompagne sur toute la chaîne de valeur des appels d'offres. 
            Du sourcing à la victoire, nous transformons vos opportunités en succès.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 animation-delay-600">
            <a href="#contact" className="btn-primary group">
              Réserver un audit stratégique
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="btn-outline">
              Découvrir nos services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

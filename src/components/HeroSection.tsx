import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        {/* @ts-ignore */}
        <spline-viewer
          url="https://prod.spline.design/nmRtFZuGzAn4LB4O/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background pointer-events-none" />
      </div>

      {/* Content */}
      <div className="section-container relative z-10">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="headline-xl mb-6 animate-fade-up opacity-0">
            <span className="text-foreground">From sourcing</span>
            <br />
            <span className="text-gradient-orange">to winning.</span>
          </h1>

          {/* Subheadline */}
          <p className="body-lg max-w-xl mb-12 animate-fade-up opacity-0 animation-delay-200">
            HACKIFY vous accompagne sur toute la chaîne de valeur des appels d'offres. 
            Du sourcing à la victoire, nous transformons vos opportunités en succès.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-up opacity-0 animation-delay-400">
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
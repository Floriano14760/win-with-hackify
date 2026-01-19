import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect } from 'react';

const CTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section id="contact" className="section-padding bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          <span className={`text-primary font-medium uppercase tracking-wider text-sm mb-4 block transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Prêt à gagner ?
          </span>
          
          <h2 className={`headline-lg mb-6 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Transformez vos appels d'offres en <span className="text-gradient-orange">succès</span>
          </h2>
          
          <p className={`body-lg mb-10 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Échangeons 20 minutes pour analyser votre situation et identifier 
            les leviers d'amélioration de votre performance AO.
          </p>

          {/* Calendly Inline Widget */}
          <div className={`transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div 
              className="calendly-inline-widget rounded-xl overflow-hidden border border-border/30 bg-card/50 backdrop-blur-sm" 
              data-url="https://calendly.com/hackifyao?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=f97316"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>

          <p className={`mt-8 text-sm text-muted-foreground transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            ✓ Confidentiel  ·  ✓ Sans engagement  ·  ✓ Audit offert
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

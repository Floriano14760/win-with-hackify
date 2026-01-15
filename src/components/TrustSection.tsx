import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const logos = [
  { name: 'Capgemini', src: 'https://upload.wikimedia.org/wikipedia/fr/thumb/b/b5/Capgemini_Logo.svg/320px-Capgemini_Logo.svg.png' },
  { name: 'Sopra Steria', src: 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/59/Sopra_Steria_logo.svg/320px-Sopra_Steria_logo.svg.png' },
  { name: 'Atos', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Atos_logo_%282017%29.svg/320px-Atos_logo_%282017%29.svg.png' },
  { name: 'Accenture', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/320px-Accenture.svg.png' },
  { name: 'CGI', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/CGI_logo.svg/320px-CGI_logo.svg.png' },
  { name: 'Alten', src: 'https://upload.wikimedia.org/wikipedia/fr/thumb/a/a1/Logo_Alten.svg/320px-Logo_Alten.svg.png' },
];

const TrustSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-16 bg-background border-t border-border/20">
      <div 
        ref={ref}
        className={`section-container transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-center text-muted-foreground mb-10 text-sm uppercase tracking-widest">
          Ils nous font confiance
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className="group flex items-center justify-center h-12 w-full transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-8 md:h-10 object-contain filter grayscale opacity-50 
                           group-hover:grayscale-0 group-hover:opacity-100 
                           transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

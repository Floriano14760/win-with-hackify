import { Sparkles } from "@/components/ui/sparkles";
import logoForvisMazars from "@/assets/logo-forvis-mazars.png";
import logoColliers from "@/assets/logo-colliers.png";

const logos = [
  { name: 'Capgemini', src: 'https://upload.wikimedia.org/wikipedia/fr/thumb/b/b5/Capgemini_Logo.svg/320px-Capgemini_Logo.svg.png', invert: true },
  { name: 'Sopra Steria', src: 'https://upload.wikimedia.org/wikipedia/fr/thumb/5/59/Sopra_Steria_logo.svg/320px-Sopra_Steria_logo.svg.png', invert: true },
  { name: 'Atos', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Atos_logo_%282017%29.svg/320px-Atos_logo_%282017%29.svg.png', invert: true },
  { name: 'Accenture', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Accenture.svg/320px-Accenture.svg.png', invert: true },
  { name: 'CGI', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/CGI_logo.svg/320px-CGI_logo.svg.png', invert: true },
  { name: 'Alten', src: 'https://upload.wikimedia.org/wikipedia/fr/thumb/a/a1/Logo_Alten.svg/320px-Logo_Alten.svg.png', invert: true },
  { name: 'Forvis Mazars', src: logoForvisMazars, invert: false },
  { name: 'Colliers', src: logoColliers, invert: false },
];

const TrustSection = () => {
  return (
<section className="relative w-full overflow-hidden bg-black">
      {/* Dark transparent overlay at top for smooth transition */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 to-transparent z-10" />
      
      {/* Gradient radial overlay at top for smooth transition from Hero */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,hsl(var(--primary)/0.15),transparent)]" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center overflow-hidden rounded-lg py-20 md:py-28">
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          {/* Subtitle */}
          <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Ils nous font confiance
          </span>

          {/* Main Title */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
            Utilisé par les leaders du marché.
          </h2>

          {/* Logos Grid */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 w-full max-w-5xl">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="group flex items-center justify-center h-12 transition-all duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className={`h-8 md:h-10 object-contain transition-all duration-300 ${
                    logo.invert 
                      ? 'brightness-0 invert opacity-60 group-hover:opacity-100' 
                      : 'opacity-80 group-hover:opacity-100'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Sparkles overlay */}
        <div className="absolute inset-0 z-0">
          <Sparkles
            density={600}
            speed={0.8}
            size={1.2}
            color="hsl(24, 95%, 53%)"
            className="absolute inset-0 h-full w-full"
          />
        </div>

        {/* Gradient lines */}
        <div className="absolute inset-x-0 bottom-0 z-20 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-20 h-16 bg-gradient-to-t from-primary/10 to-transparent blur-xl" />
      </div>
    </section>
  );
};

export default TrustSection;

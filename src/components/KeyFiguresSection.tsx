import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const figures = [
  {
    value: '+10',
    unit: 'ans',
    description: "d'expérience dans le pilotage d'appels d'offres complexes",
  },
  {
    value: '+100',
    unit: '',
    description: "appels d'offres rendus par an",
  },
  {
    value: '+48',
    unit: '%',
    description: 'de taux de gain',
  },
  {
    value: '+100',
    unit: 'M€',
    description: 'gagnés pour nos clients',
  },
];

const KeyFiguresSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-20 md:py-28 bg-charcoal">
      <div
        ref={ref}
        className={`section-container transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-16">
          <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
            Nos résultats
          </span>
          <h2 className={`headline-lg max-w-3xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Des <span className="text-gradient-orange">chiffres clés</span> qui parlent
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {figures.map((figure, index) => (
            <div
              key={index}
              className={`text-center transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="mb-3">
                <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient-orange">
                  {figure.value}
                </span>
                <span className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gradient-orange">
                  {figure.unit}
                </span>
              </div>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                {figure.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFiguresSection;

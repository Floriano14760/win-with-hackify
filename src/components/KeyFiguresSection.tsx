import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

const numberVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 150,
      damping: 10,
    },
  },
};

const KeyFiguresSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-20 md:py-28 bg-charcoal overflow-hidden">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
            Nos résultats
          </span>
          <h2 className="headline-lg max-w-3xl mx-auto">
            Des <span className="text-gradient-orange">chiffres clés</span> qui parlent
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {figures.map((figure, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center group"
            >
              <motion.div 
                variants={numberVariants}
                className="mb-3 relative"
              >
                {/* Glow effect behind numbers */}
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gradient-orange">
                  {figure.value}
                </span>
                <span className="relative text-2xl md:text-3xl lg:text-4xl font-display font-bold text-gradient-orange">
                  {figure.unit}
                </span>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                className="text-muted-foreground text-sm md:text-base leading-relaxed"
              >
                {figure.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFiguresSection;

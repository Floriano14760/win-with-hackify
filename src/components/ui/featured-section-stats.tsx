"use client";

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { motion } from 'framer-motion';
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const stats = [
  {
    value: "+10 ans",
    label: "d'expérience dans le pilotage d'appels d'offres complexes",
  },
  {
    value: "+100",
    label: "appels d'offres rendus par an",
  },
  {
    value: "+48%",
    label: "de taux de gain",
  },
  {
    value: "+100M€",
    label: "gagnés pour nos clients",
  },
];

const data = [
  { name: "Jan", value: 20 },
  { name: "Fév", value: 35 },
  { name: "Mar", value: 50 },
  { name: "Avr", value: 65 },
  { name: "Mai", value: 80 },
  { name: "Jun", value: 100 },
  { name: "Jul", value: 130 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

export default function FeaturedSectionStats() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="relative py-20 md:py-28 bg-charcoal overflow-hidden">
      <div ref={ref} className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
            Nos résultats
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
            Des performances qui{" "}
            <span className="text-gradient-orange">font la différence.</span>{" "}
            <span className="text-muted-foreground font-normal text-xl md:text-2xl lg:text-3xl block mt-4">
              Notre expertise en appels d'offres génère des résultats mesurables et un ROI concret pour nos clients.
            </span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl bg-background/5 border border-white/5 hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <p className="relative text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient-orange mb-3">
                {stat.value}
              </p>
              <p className="relative text-muted-foreground text-sm md:text-base leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Area Chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-64 md:h-80 w-full rounded-2xl bg-background/5 border border-white/5 p-4 md:p-6"
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--background))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  color: 'hsl(var(--foreground))',
                }}
                labelStyle={{ color: 'hsl(var(--muted-foreground))' }}
              />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
}

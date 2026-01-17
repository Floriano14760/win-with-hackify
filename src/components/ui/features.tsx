import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Feature {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  image: string;
}

interface FeaturesProps {
  features: Feature[];
  title?: string;
  subtitle?: string;
  label?: string;
}

export function Features({
  features,
  title = "HACKIFY, votre allié stratégique",
  subtitle = "Nous prenons en charge l'intégralité de la chaîne de valeur des appels d'offres, du sourcing à la formation de vos équipes.",
  label = "La solution",
}: FeaturesProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, 100);

    return () => clearInterval(interval);
  }, [currentFeature]);

  useEffect(() => {
    if (progress >= 100) {
      setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }, 200);
    }
  }, [progress, features.length]);

  useEffect(() => {
    const activeFeatureElement = featureRefs.current[currentFeature];
    const container = containerRef.current;

    if (activeFeatureElement && container) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = activeFeatureElement.getBoundingClientRect();

      container.scrollTo({
        left:
          activeFeatureElement.offsetLeft -
          (containerRect.width - elementRect.width) / 2,
        behavior: "smooth",
      });
    }
  }, [currentFeature]);

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  return (
    <section className="section-padding bg-card relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium uppercase tracking-wider text-sm mb-4 block">
            {label}
          </span>
          <h2 className="headline-lg mb-4">
            {title.includes("stratégique") ? (
              <>
                HACKIFY, votre allié <span className="text-gradient-orange">stratégique</span>
              </>
            ) : (
              title
            )}
          </h2>
          <p className="body-lg max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Features with Progress Lines */}
          <div
            ref={containerRef}
            className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-hide"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = currentFeature === index;

              return (
                <div
                  key={feature.id}
                  ref={(el) => {
                    featureRefs.current[index] = el;
                  }}
                  className="relative cursor-pointer flex-shrink-0 min-w-[280px] lg:min-w-0"
                  onClick={() => handleFeatureClick(index)}
                >
                  {/* Feature Content */}
                  <div
                    className={`p-5 rounded-xl border transition-all duration-300 ${
                      isActive
                        ? "bg-primary/10 border-primary/30"
                        : "bg-card border-border hover:border-primary/20 hover:bg-muted/50"
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-colors ${
                        isActive ? "bg-primary/20" : "bg-muted"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 transition-colors ${
                          isActive ? "text-primary" : "text-muted-foreground"
                        }`}
                      />
                    </div>

                    {/* Content */}
                    <div>
                      <h3
                        className={`font-display font-semibold mb-2 transition-colors ${
                          isActive ? "text-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {feature.title}
                      </h3>

                      <p
                        className={`text-sm leading-relaxed transition-colors ${
                          isActive ? "text-muted-foreground" : "text-muted-foreground/70"
                        }`}
                      >
                        {feature.description}
                      </p>

                      {/* Progress Bar */}
                      <div className="h-1 bg-muted rounded-full mt-4 overflow-hidden">
                        {isActive && (
                          <motion.div
                            className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1, ease: "linear" }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side - Image Display */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border">
            <motion.img
              key={currentFeature}
              src={features[currentFeature].image}
              alt={features[currentFeature].title}
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

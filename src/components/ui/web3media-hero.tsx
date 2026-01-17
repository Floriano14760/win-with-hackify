import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CryptoIcon {
  icon: React.ReactNode;
  label: string;
  position: { x: string; y: string };
}

interface Web3MediaHeroProps {
  logo?: string;
  navigation?: Array<{
    label: string;
    onClick?: () => void;
  }>;
  contactButton?: {
    label: string;
    onClick: () => void;
  };
  title: string;
  highlightedText?: string;
  subtitle: string;
  ctaButton?: {
    label: string;
    onClick: () => void;
  };
  cryptoIcons?: CryptoIcon[];
  trustedByText?: string;
  brands?: Array<{
    name: string;
    logo: React.ReactNode;
  }>;
  className?: string;
  children?: React.ReactNode;
}

export function Web3MediaHero({
  logo = "Web3 Media",
  navigation = [
    { label: "Home" },
    { label: "Gallery" },
    { label: "Cases" },
    { label: "About us" },
  ],
  contactButton,
  title,
  highlightedText = "Web3 Visibility",
  subtitle,
  ctaButton,
  cryptoIcons = [],
  trustedByText = "Trusted by",
  brands = [],
  className,
  children,
}: Web3MediaHeroProps) {
  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-background",
        className
      )}
    >
      {/* Radial Glow Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-primary/30 via-primary/10 to-transparent blur-3xl"
        />
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12 lg:px-20"
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-foreground"
        >
          <span className="text-primary">{logo.split(" ")[0]}</span>
          <span className="text-foreground">{logo.split(" ")[1] || ""}</span>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              whileHover={{ color: "hsl(var(--primary))" }}
              onClick={item.onClick}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* Contact Button */}
        {contactButton && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={contactButton.onClick}
            className="rounded-full border border-primary/50 bg-primary/10 px-6 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            {contactButton.label}
          </motion.button>
        )}
      </motion.header>

      {/* Main Content */}
      {children ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          {children}
        </motion.div>
      ) : (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 flex min-h-[calc(100vh-200px)] flex-col items-center justify-center px-6 py-20"
        >
          {/* Floating Crypto Icons */}
          {cryptoIcons.map((crypto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="absolute hidden md:block"
              style={{ left: crypto.position.x, top: crypto.position.y }}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="flex flex-col items-center gap-2"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-card/80 shadow-lg shadow-primary/10 backdrop-blur-sm">
                  {crypto.icon}
                </div>
                <span className="text-xs font-medium text-muted-foreground">
                  {crypto.label}
                </span>
              </motion.div>
            </motion.div>
          ))}

          <div className="flex max-w-4xl flex-col items-center text-center">
            {/* Logo Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
            >
              {logo}
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-6 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl"
            >
              {title}
              <br />
              <motion.span
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                className="bg-gradient-to-r from-primary via-orange-400 to-primary bg-[length:200%_auto] bg-clip-text text-transparent"
              >
                {highlightedText}
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl"
            >
              {subtitle}
            </motion.p>

            {/* CTA Button */}
            {ctaButton && (
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(var(--primary) / 0.4)" }}
                whileTap={{ scale: 0.95 }}
                onClick={ctaButton.onClick}
                className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all"
              >
                <span className="relative z-10">{ctaButton.label}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary via-orange-400 to-primary"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            )}
          </div>
        </motion.main>
      )}

      {/* Brand Slider */}
      {brands.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 z-10 py-8">
          {/* "Trusted by" Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mb-6 flex justify-center"
          >
            <span className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {trustedByText}
            </span>
          </motion.div>

          {/* Gradient Overlays */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

          {/* Scrolling Brands */}
          <motion.div
            animate={{ x: [0, -50 * brands.length] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex items-center gap-16"
          >
            {/* Duplicate brands for seamless loop */}
            {[...brands, ...brands].map((brand, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="flex-shrink-0 opacity-50 transition-opacity hover:opacity-100"
              >
                {brand.logo}
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}
    </div>
  );
}

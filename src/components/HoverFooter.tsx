"use client";
import React from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import hackifyLogo from '@/assets/hackify-logo.png';

const footerLinks = [
  {
    title: "Nos Services",
    links: [
      { label: "Sourcing IA", href: "#services" },
      { label: "Bid Management", href: "#services" },
      { label: "Design", href: "#services" },
      { label: "Hackademy", href: "#services" },
    ],
  },
  {
    title: "Liens utiles",
    links: [
      { label: "Contact", href: "#contact" },
      { label: "Résultats", href: "#results" },
    ],
  },
];

const contactInfo = [
  {
    icon: <Mail size={18} className="text-primary" />,
    text: "contact@hackify.fr",
    href: "mailto:contact@hackify.fr",
  },
  {
    icon: <Phone size={18} className="text-primary" />,
    text: "+33 1 23 45 67 89",
    href: "tel:+33123456789",
  },
  {
    icon: <MapPin size={18} className="text-primary" />,
    text: "Paris, France",
  },
];

const socialLinks = [
  { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
  { icon: <Twitter size={20} />, label: "Twitter", href: "#" },
];

function HoverFooter() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-background border-t border-border/30 overflow-hidden">
      <FooterBackgroundGradient />

      <div className="relative z-10">
        <div className="section-container py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand section */}
            <div className="lg:col-span-1">
              <a href="#" className="inline-flex items-center gap-2 mb-4" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img 
                  src={hackifyLogo} 
                  alt="Hackify" 
                  className="h-8 w-auto object-contain"
                />
              </a>
              <p className="text-muted-foreground text-sm leading-relaxed">
                From sourcing to winning. Nous accompagnons les entreprises dans leurs réponses aux appels d'offres grâce à l'IA.
              </p>
            </div>

            {/* Footer link sections */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="font-display font-semibold text-foreground mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <button
                        onClick={() => scrollToSection(link.href.replace('#', ''))}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact section */}
            <div>
              <h3 className="font-display font-semibold text-foreground mb-4">
                Contact
              </h3>
              <ul className="space-y-3">
                {contactInfo.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    {item.icon}
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span className="text-muted-foreground text-sm">
                        {item.text}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="h-px bg-border/30 my-8" />

          {/* Footer bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Social icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} HACKIFY. Tous droits réservés.
            </p>
          </div>
        </div>

        {/* Text hover effect */}
        <div className="h-32 md:h-48 flex items-center justify-center overflow-hidden">
          <TextHoverEffect text="HACKIFY" />
        </div>
      </div>
    </footer>
  );
}

export default HoverFooter;
import { Target, Settings, Palette, GraduationCap } from 'lucide-react';
import { Features } from '@/components/ui/features';

const features = [
  {
    id: 1,
    icon: Target,
    title: "Sourcing IA",
    description: "Notre IA identifie et qualifie les appels d'offres à fort potentiel adaptés à votre stratégie.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    icon: Settings,
    title: "Pilotage augmenté",
    description: "Gouvernance assistée par IA pour coordonner efficacement chaque réponse jusqu'au dépôt.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    icon: Palette,
    title: "Design IA-powered",
    description: "Création de propositions visuellement impactantes avec assistance IA générative.",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    icon: GraduationCap,
    title: "Formation IA",
    description: "Maîtrise des outils IA pour autonomiser vos équipes et pérenniser votre succès.",
    image: "/placeholder.svg",
  },
];

const SolutionSection = () => {
  return (
    <Features
      features={features}
      title="HACKIFY, votre allié stratégique"
      subtitle="Nous prenons en charge l'intégralité de la chaîne de valeur des appels d'offres, du sourcing à la formation de vos équipes."
      label="La solution"
    />
  );
};

export default SolutionSection;

import { Search, Briefcase, PenTool, Database, GraduationCap } from 'lucide-react';
import { Features } from '@/components/ui/features';
import TenderNotifications from '@/components/ui/tender-notifications';

const features = [
  {
    id: 1,
    icon: Search,
    title: "Sourcing d'appels d'offres",
    description: "Vous recevez tous les matins des opportunités sur votre boîte mail.",
    component: <TenderNotifications />,
  },
  {
    id: 2,
    icon: Briefcase,
    title: "Bid Management & PMO",
    description: "Un chef de projet dédié vous accompagne sur la rédaction de votre mémoire technique, votre discours commercial et coordonne le process de réponse.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    icon: PenTool,
    title: "Design & Impact",
    description: "Une graphiste va structurer votre proposition commerciale pour structurer les messages et maximiser l'impact.",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    icon: Database,
    title: "Knowledge Management",
    description: "Templates réutilisables, capitalisation des contenus et industrialisation des process AO.",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    icon: GraduationCap,
    title: "Hackademy",
    description: "Formation des équipes (Assistantes, Marketing, Commerciaux) et coaching sur mesure.",
    image: "/placeholder.svg",
  },
];

const SolutionSection = () => {
  return (
    <Features
      features={features}
      title="Nous prenons en charge l'intégralité de la chaîne de valeur des appels d'offres, du sourcing à la formation de vos équipes."
      subtitle="Nous prenons en charge l'intégralité de la chaîne de valeur des appels d'offres, du sourcing à la formation de vos équipes."
      label="Nos expertises"
    />
  );
};

export default SolutionSection;

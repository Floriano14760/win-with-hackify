import { Search, Briefcase, PenTool, Database, GraduationCap } from 'lucide-react';
import { Features } from '@/components/ui/features';

const features = [
  {
    id: 1,
    icon: Search,
    title: "Sourcing d'appels d'offres",
    description: "Identification ciblée des AO pertinents, qualification des opportunités et priorisation selon les chances de gain.",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    icon: Briefcase,
    title: "Bid Management & PMO",
    description: "Gouvernance et pilotage global, rétroplanning, coordination des contributeurs et assurance qualité.",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    icon: PenTool,
    title: "Design & Impact",
    description: "Direction artistique premium, structuration des messages et mise en page professionnelle.",
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
    title: "Hackify Academy",
    description: "Formation des équipes (Assistantes, Marketing, Commerciaux) et coaching sur mesure.",
    image: "/placeholder.svg",
  },
];

const SolutionSection = () => {
  return (
    <Features
      features={features}
      title="Des services premium pour chaque étape"
      subtitle="Nous prenons en charge l'intégralité de la chaîne de valeur des appels d'offres, du sourcing à la formation de vos équipes."
      label="Nos expertises"
    />
  );
};

export default SolutionSection;

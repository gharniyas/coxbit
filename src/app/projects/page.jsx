import { FaSeedling, FaStore, FaLightbulb } from "react-icons/fa";
import { GiPlantSeed } from "react-icons/gi";
import OverviewPage from "../components/OverviewPage";

const projectLinks = [
  {
    href: "/projects/dbt-phenomics-platform",
    title: "DBT Phenomics Platform",
    subtitle: "Climate-Smart Agriculture",
    description:
      "DBT-funded high-throughput plant phenotyping facility for evaluating crop responses under water deficit and environmental stress.",
    icon: <GiPlantSeed size={26} />,
  },
  {
    href: "/projects/native-species-seed-vault",
    title: "Native Species",
    subtitle: "Seed Vault",
    description:
      "State-level germplasm repository with cryogenic facility for long-term conservation of Tamil Nadu's native plant genetic resources.",
    icon: <FaSeedling size={26} />,
  },
  {
    href: "/projects/tnapex-msme-programme",
    title: "TNAPEx MSME",
    subtitle: "Programme",
    description:
      "Technical support for MSME food product development and value addition under the TNAPEx–RAMP programme.",
    icon: <FaStore size={26} />,
  },
  {
    href: "/projects/birac-e-yuva-programme",
    title: "BIRAC E-YUVA",
    subtitle: "Programme",
    description:
      "Bio-entrepreneurship and innovation support initiative nurturing early-stage innovators and translational research.",
    icon: <FaLightbulb size={26} />,
  },
];

export default function Projects() {
  return (
    <OverviewPage
      eyebrow="Research & Development"
      title="Projects"
      description="Government and institution funded research projects and programmes currently underway at COXBIT."
      intro="COXBIT leads and supports a portfolio of government and institution-funded projects spanning climate-smart agriculture, biodiversity conservation, MSME development and bio-entrepreneurship. Explore each project below."
      links={projectLinks}
    />
  );
}

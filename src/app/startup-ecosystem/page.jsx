import { FaHandshake } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";
import OverviewPage from "../components/OverviewPage";

const ecosystemLinks = [
  {
    href: "/startup-ecosystem/partners",
    title: "Ecosystem",
    subtitle: "Partners",
    description:
      "Government and institutional partners — StartupTN, EDII-TN and TNAPEx — supporting biotech startups and entrepreneurs at COXBIT.",
    icon: <FaHandshake size={24} />,
  },
  {
    href: "/startup-ecosystem/startup-opportunities",
    title: "Startup",
    subtitle: "Opportunities",
    description:
      "Technology-readiness levels and pathways for startups to engage with COXBIT, from early-stage ideas to market-ready ventures.",
    icon: <MdOutlineRocketLaunch size={24} />,
  },
];

export default function StartupEcosystem() {
  return (
    <OverviewPage
      eyebrow="COXBIT"
      title="Startup Ecosystem"
      description="Ecosystem partners and technology-readiness opportunities supporting biotech startups and entrepreneurs."
      intro="COXBIT connects biotech startups and entrepreneurs with government and institutional partners while guiding technologies from early-stage ideas to market-ready ventures. Explore each section below."
      links={ecosystemLinks}
      gridClassName="sm:grid-cols-2"
    />
  );
}

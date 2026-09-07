import { FaFlask, FaRegListAlt } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";
import OverviewPage from "../components/OverviewPage";

const facilityLinks = [
  {
    href: "/facilities/sals",
    title: "SALS",
    subtitle: "Shared Access Lab Services",
    description:
      "Molecular biology, proteomics, tissue culture, cold room and bioinformatics infrastructure shared with startups and researchers.",
    icon: <FaFlask size={26} />,
  },
  {
    href: "/facilities/entrepreneurship",
    title: "Technology Driven",
    subtitle: "Entrepreneurship",
    description:
      "Cabin and floor / knowledge space supporting resident startups, entrepreneurs and innovators at COXBIT.",
    icon: <MdOutlineRocketLaunch size={26} />,
  },
  {
    href: "/facilities/service-offered",
    title: "Services",
    subtitle: "Offered",
    description:
      "Analytical charges for proteomics & metabolomics and server usage rates for COXBIT shared facilities.",
    icon: <FaRegListAlt size={26} />,
  },
];

export default function Facilities() {
  return (
    <OverviewPage
      eyebrow="COXBIT"
      title="Facilities"
      description="State of art laboratory facilities"
      intro="COXBIT offers shared laboratory infrastructure, dedicated startup workspace and analytical services under one roof, lowering entry barriers for students, researchers, startups and industry partners. Explore each facility below."
      links={facilityLinks}
    />
  );
}

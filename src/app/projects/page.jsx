import Link from "next/link";
import { FaSeedling, FaStore, FaLightbulb } from "react-icons/fa";
import { GiPlantSeed } from "react-icons/gi";

const projectLinks = [
  {
    href: "/projects/details?tab=0",
    title: "DBT Phenomics Platform",
    subtitle: "Climate-Smart Agriculture",
    description:
      "DBT-funded high-throughput plant phenotyping facility for evaluating crop responses under water deficit and environmental stress.",
    icon: <GiPlantSeed size={26} />,
  },
  {
    href: "/projects/details?tab=1",
    title: "Native Species",
    subtitle: "Seed Vault",
    description:
      "State-level germplasm repository with cryogenic facility for long-term conservation of Tamil Nadu's native plant genetic resources.",
    icon: <FaSeedling size={26} />,
  },
  {
    href: "/projects/details?tab=2",
    title: "TNAPEx MSME",
    subtitle: "Programme",
    description:
      "Technical support for MSME food product development and value addition under the TNAPEx–RAMP programme.",
    icon: <FaStore size={26} />,
  },
  {
    href: "/projects/details?tab=3",
    title: "BIRAC E-YUVA",
    subtitle: "Programme",
    description:
      "Bio-entrepreneurship and innovation support initiative nurturing early-stage innovators and translational research.",
    icon: <FaLightbulb size={26} />,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-amber-100/60">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            Research &amp; Development
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            Projects
          </h1>
          <p className="text-amber-100 mt-3 max-w-2xl leading-relaxed">
            Government and institution funded research projects and
            programmes currently underway at COXBIT.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl">
          COXBIT leads and supports a portfolio of government and
          institution-funded projects spanning climate-smart agriculture,
          biodiversity conservation, MSME development and bio-entrepreneurship.
          Explore each project below.
        </p>

        {/* Project Navigation Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectLinks.map((project) => (
            <Link
              key={project.href}
              href={project.href}
              className="group bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm p-6 flex flex-col hover:border-[#c89b3c] hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#6b4226]/10 text-[#6b4226] mb-4 group-hover:bg-[#6b4226] group-hover:text-white transition-colors duration-200">
                {project.icon}
              </div>
              <h2 className="font-serif text-lg font-bold text-[#6b4226] leading-snug">
                {project.title}
                <span className="block text-base font-semibold">
                  {project.subtitle}
                </span>
              </h2>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed flex-1">
                {project.description}
              </p>
              <span className="mt-4 text-sm font-semibold text-[#c89b3c] group-hover:text-[#6b4226]">
                Explore &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

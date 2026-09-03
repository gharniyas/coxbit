import Link from "next/link";
import { FaFlask, FaRegListAlt } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";

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
    href: "/facilities/serviceoffered",
    title: "Services",
    subtitle: "Offered",
    description:
      "Analytical charges for proteomics & metabolomics and server usage rates for COXBIT shared facilities.",
    icon: <FaRegListAlt size={26} />,
  },
];

export default function Facilities() {
  return (
    <div className="min-h-screen bg-amber-100/60">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            COXBIT
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            Facilities
          </h1>
          <p className="text-amber-100 mt-3 max-w-2xl leading-relaxed">
            State of art laboratory facilities
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl">
          COXBIT offers shared laboratory infrastructure, dedicated startup
          workspace and analytical services under one roof, lowering entry
          barriers for students, researchers, startups and industry partners.
          Explore each facility below.
        </p>

        {/* Facility Navigation Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilityLinks.map((facility) => (
            <Link
              key={facility.href}
              href={facility.href}
              className="group bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm p-6 flex flex-col hover:border-[#c89b3c] hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#6b4226]/10 text-[#6b4226] mb-4 group-hover:bg-[#6b4226] group-hover:text-white transition-colors duration-200">
                {facility.icon}
              </div>
              <h2 className="font-serif text-lg font-bold text-[#6b4226] leading-snug">
                {facility.title}
                <span className="block text-base font-semibold">
                  {facility.subtitle}
                </span>
              </h2>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed flex-1">
                {facility.description}
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

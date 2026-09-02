import Link from "next/link";
import { FaHandshake } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";

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
    <div className="min-h-screen bg-gray-50">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            COXBIT
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            Startup Ecosystem
          </h1>
          <p className="text-amber-100 mt-3 max-w-2xl leading-relaxed">
            Ecosystem partners and technology-readiness opportunities
            supporting biotech startups and entrepreneurs.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl">
          COXBIT connects biotech startups and entrepreneurs with government
          and institutional partners while guiding technologies from
          early-stage ideas to market-ready ventures. Explore each section
          below.
        </p>

        {/* Ecosystem Navigation Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {ecosystemLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-white border border-gray-200 rounded-sm shadow-sm p-6 flex flex-col hover:border-[#c89b3c] hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#6b4226]/10 text-[#6b4226] mb-4 group-hover:bg-[#6b4226] group-hover:text-white transition-colors duration-200">
                {item.icon}
              </div>
              <h2 className="font-serif text-lg font-bold text-[#6b4226] leading-snug">
                {item.title}
                <span className="block text-base font-semibold">
                  {item.subtitle}
                </span>
              </h2>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed flex-1">
                {item.description}
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

import StartupOpportunityPage from "../../../components/StartupOpportunityPage";

const keySupportAreas = [
  {
    title: "Government Startup Schemes",
    desc: "Support through startup missions, innovation initiatives, entrepreneurship programs, and sector-specific schemes.",
  },
  {
    title: "Research & Innovation Funding",
    desc: "Funding opportunities for technology development, scientific research, product innovation, and commercialization.",
  },
  {
    title: "Industry Collaboration Support",
    desc: "Partnership opportunities with industries for co-development, pilot testing, product validation, and commercialization.",
  },
];

const supportServices = [
  {
    title: "Innovation & Incubation",
    desc: "Support for ideation, startup incubation, prototype development, and business acceleration.",
  },
  {
    title: "Research & Development",
    desc: "Access to biotechnology, bioinformatics, food technology, agri-tech, and analytical research facilities.",
  },
  {
    title: "Product Development",
    desc: "Technical guidance for product formulation, testing, validation, optimization, and scale-up.",
  },
  {
    title: "Testing & Analytical Services",
    desc: "Advanced instrumentation support for quality analysis and scientific validation.",
  },
  {
    title: "Entrepreneurship Development",
    desc: "Training programs, workshops, mentoring sessions, and startup awareness initiatives.",
  },
  {
    title: "Industry Collaboration",
    desc: "Partnership opportunities for technology transfer, pilot projects, commercialization, and co-development.",
  },
];

const faqs = [
  {
    q: "Who can apply for startup support?",
    a: "Students, researchers, entrepreneurs, startups, MSMEs, innovators, and industries.",
  },
  {
    q: "Do I need a registered company?",
    a: "No. Early-stage ideas and student innovations are also encouraged.",
  },
  {
    q: "What sectors are supported?",
    a: "Biotechnology, agriculture, food processing, bioinformatics, sustainability, healthcare, and related sectors.",
  },
  {
    q: "Is technical mentorship available?",
    a: "Yes. Technical guidance and expert mentorship are provided throughout the innovation journey.",
  },
];

export default function SupportFaq() {
  return (
    <StartupOpportunityPage>
      <div className="space-y-6">
        <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm p-6">
          <h2 className="font-serif text-2xl font-bold text-[#6b4226] mb-1">
            Key Startup Support COXBIT Offers
          </h2>
          <div className="w-16 h-1 bg-[#c89b3c] mt-3 mb-4" />
          <div className="space-y-4 mb-6">
            {keySupportAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 border-l-4 border-l-[#c89b3c] rounded-sm p-4"
              >
                <h3 className="font-serif text-lg font-bold text-[#6b4226] mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-700 text-sm">{area.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="font-serif text-xl font-bold text-[#6b4226] mb-4">
            Key Support Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {supportServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-sm border border-gray-200"
              >
                <h4 className="font-bold text-[#6b4226] mb-1 text-sm">
                  {service.title}
                </h4>
                <p className="text-gray-700 text-xs">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm p-6">
          <h2 className="font-serif text-2xl font-bold text-[#6b4226] mb-1">
            Frequently Asked Questions (FAQ)
          </h2>
          <div className="w-16 h-1 bg-[#c89b3c] mt-3 mb-4" />
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 border-l-4 border-l-[#6b4226] rounded-sm p-4"
              >
                <h3 className="text-base font-bold text-[#6b4226] mb-1">
                  {faq.q}
                </h3>
                <p className="text-gray-700 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StartupOpportunityPage>
  );
}

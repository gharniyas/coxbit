import StartupOpportunityPage from "../../../components/StartupOpportunityPage";

const startupJourney = [
  {
    title: "Idea Generation",
    desc: "Identify a problem, explore opportunities and develop innovative concepts.",
  },
  {
    title: "Validation & Research",
    desc: "Understand market demand, customer needs and competitor analysis.",
  },
  {
    title: "Prototype Development",
    desc: "Develop initial models, proof-of-concept, or pilot products.",
  },
  {
    title: "Technology Development",
    desc: "Improve product efficiency, testing and technical validation.",
  },
  {
    title: "Product Optimization",
    desc: "Refine design, quality, usability and scalability.",
  },
  {
    title: "Commercialization",
    desc: "Launch products/services into the market and build customer reach.",
  },
  {
    title: "Business Expansion",
    desc: "Scale operations, partnerships, exports and investment opportunities.",
  },
];

export default function Journey() {
  return (
    <StartupOpportunityPage>
      <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm px-3 py-4 md:px-4 md:py-5">
        <h2 className="font-serif text-2xl font-bold text-[#6b4226] mb-1">
          Startup Journey: From Idea to Enterprise
        </h2>
        <div className="w-16 h-1 bg-[#c89b3c] mt-3 mb-6" />
        <div className="space-y-4">
          {startupJourney.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 border-l-4 border-l-[#6b4226] rounded-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-[#6b4226] text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#6b4226] mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StartupOpportunityPage>
  );
}

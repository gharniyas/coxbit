import StartupOpportunityPage from "../../../components/StartupOpportunityPage";

const trlLevels = [
  {
    level: "TRL 1",
    title: "Basic Idea & Research",
    items: [
      "Scientific observations and early concepts",
      "Initial research and literature study",
      "Identification of potential applications",
    ],
  },
  {
    level: "TRL 2",
    title: "Concept Development",
    items: [
      "Technology concept formulated",
      "Preliminary experiments and feasibility studies",
      "Identification of technical requirements",
    ],
  },
  {
    level: "TRL 3",
    title: "Proof of Concept",
    items: [
      "Experimental validation begins",
      "Prototype design and laboratory testing",
      "Early performance evaluation",
    ],
  },
  {
    level: "TRL 4",
    title: "Laboratory Validation",
    items: [
      "Technology validated under laboratory conditions",
      "Process optimization and analytical testing",
      "Initial data generation",
    ],
  },
  {
    level: "TRL 5",
    title: "Pilot Scale Validation",
    items: [
      "Technology tested in relevant environments",
      "Small-scale production or field testing",
      "Validation under operational conditions",
    ],
  },
  {
    level: "TRL 6",
    title: "Prototype Demonstration",
    items: [
      "Functional prototype demonstrated",
      "Product refinement and process standardization",
      "Performance verification",
    ],
  },
  {
    level: "TRL 7",
    title: "System Demonstration",
    items: [
      "Demonstration in real-world environments",
      "User feedback and application trials",
      "Regulatory and compliance assessments",
    ],
  },
  {
    level: "TRL 8",
    title: "Market Ready Product",
    items: [
      "Final product development completed",
      "Commercial production readiness",
      "Branding, packaging and marketing strategy",
    ],
  },
  {
    level: "TRL 9",
    title: "Commercial Deployment",
    items: [
      "Product successfully launched",
      "Full-scale commercialization",
      "Market expansion and business growth",
    ],
  },
];

export default function TrlLevels() {
  return (
    <StartupOpportunityPage>
      <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm px-3 py-4 md:px-4 md:py-5">
        <h2 className="font-serif text-2xl font-bold text-[#6b4226] mb-1">
          Technology Readiness Levels (TRL)
        </h2>
        <div className="w-16 h-1 bg-[#c89b3c] mt-3 mb-4" />
        <p className="text-gray-700 mb-6">
          Technology Readiness Level (TRL) is a globally recognized
          framework used to measure the maturity level of a technology or
          innovation.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trlLevels.map((trl, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm p-4 hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-center mb-3">
                <span className="bg-[#6b4226] text-white font-bold px-3 py-1 rounded-sm text-xs">
                  {trl.level}
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold text-[#6b4226] mb-2">
                {trl.title}
              </h3>
              <ul className="space-y-1">
                {trl.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-700 text-xs flex items-start"
                  >
                    <span className="text-[#c89b3c] mr-2">&rsaquo;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </StartupOpportunityPage>
  );
}

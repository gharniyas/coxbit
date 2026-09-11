import StartupOpportunityPage from "../../../components/StartupOpportunityPage";

const fundingTypes = [
  {
    title: "Seed Funding",
    desc: "Initial support for idea development, prototype creation, and early-stage validation.",
  },
  {
    title: "Grant Support",
    desc: "Non-repayable financial assistance provided for innovation, research, technology development, and startup growth.",
  },
  {
    title: "Incubation Support",
    desc: "Access to infrastructure, mentorship, technical facilities, and business guidance through incubation programs.",
  },
  {
    title: "Angel Investment",
    desc: "Investment from individual investors who support promising startups with funding and mentorship.",
  },
  {
    title: "Venture Capital (VC)",
    desc: "Funding provided to high-growth startups with scalable business potential.",
  },
];

export default function Funding() {
  return (
    <StartupOpportunityPage>
      <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm p-6">
        <h2 className="font-serif text-2xl font-bold text-[#6b4226] mb-1">
          Types of Startup Funding
        </h2>
        <div className="w-16 h-1 bg-[#c89b3c] mt-3 mb-6" />
        <div className="grid md:grid-cols-2 gap-4">
          {fundingTypes.map((funding, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm p-5 hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="font-serif text-lg font-bold text-[#6b4226] mb-2">
                {funding.title}
              </h3>
              <p className="text-gray-700 text-sm">{funding.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </StartupOpportunityPage>
  );
}

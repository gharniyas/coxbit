import StartupOpportunityPage from "../../components/StartupOpportunityPage";

export default function Overview() {
  return (
    <StartupOpportunityPage>
      <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm px-3 py-4 md:px-4 md:py-5">
        <h2 className="font-serif text-2xl font-bold text-[#6b4226] mb-1">
          Our Ecosystem
        </h2>
        <div className="w-16 h-1 bg-[#c89b3c] mt-3 mb-4" />
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Our ecosystem brings together innovation, research, technology,
          skill development, incubation support and industry partnerships
          to help startups grow with the right technical, strategic and
          business guidance.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Innovation begins with an idea, but successful ventures are built
          through strong mentorship, access to infrastructure, technical
          expertise, market opportunities and continuous support. Our
          startup ecosystem is designed to empower aspiring entrepreneurs,
          students, researchers, innovators and early-stage companies in
          transforming ideas into scalable, sustainable and impactful
          ventures.
        </p>
      </div>
    </StartupOpportunityPage>
  );
}

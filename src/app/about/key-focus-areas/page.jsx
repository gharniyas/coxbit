const focusAreas = [
  {
    title: "Research to Product",
    desc: "Translating research into market-ready biotech products",
    icon: "🧬",
  },
  {
    title: "Startup Support",
    desc: "Supporting startups through incubation, mentoring, and infrastructure",
    icon: "🚀",
  },
  {
    title: "Funding Access",
    desc: "Facilitating access to government funding and startup schemes",
    icon: "💰",
  },
  {
    title: "Industry Collaboration",
    desc: "Strengthening industry–academia collaboration",
    icon: "🤝",
  },
  {
    title: "Skill Development",
    desc: "Building skilled human resources through training",
    icon: "🎓",
  },
  {
    title: "Advanced Labs",
    desc: "Providing advanced analytical and research facilities",
    icon: "🔬",
  },
  {
    title: "Bioinformatics",
    desc: "Leveraging computational tools and data analysis for biological research",
    icon: "🧫",
  },
  {
    title: "Food Processing",
    desc: "Advancing technologies and techniques for modern food processing",
    icon: "🌾",
  },
  {
    title: "AI in Agri",
    desc: "Applying AI-driven solutions to enhance agricultural practices",
    icon: "🤖",
  },
];

export default function KeyFocusAreas() {
  return (
    <div className="min-h-screen bg-amber-100/60">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 pt-7 pb-4 md:pt-9 md:pb-5">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-1">
            Centre of Excellence in Biotechnology
          </p>
          <h1 className="font-serif text-2xl md:text-3xl font-bold">
            Key Focus Areas
          </h1>
          <p className="text-amber-100 mt-1 max-w-2xl leading-relaxed">
            The core areas COXBIT invests in to drive biotechnology-led
            innovation forward.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-4">
        <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm px-3 py-4 md:px-4 md:py-5">
          <div className="space-y-3">
            <div className="grid md:grid-cols-3 gap-4">
              {focusAreas.map((area, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200 p-6"
                >
                  <div className="text-4xl mb-3">{area.icon}</div>
                  <h3 className="font-serif text-lg font-bold text-[#6b4226] mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{area.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

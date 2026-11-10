import ImageCarousel from "../../components/ImageCarousel";

const transformations = [
  {
    icon: "🔬",
    text: "Transforming Proof-of-Concepts into Market-Ready Biotech Products through Advanced Technical Validation and Infrastructure Support",
  },
  {
    icon: "🚀",
    text: "Shaping Early-Stage Ideas into Viable Enterprises through Strategic Mentoring, Capacity Building, and Technology-Driven Entrepreneurship Support",
  },
  {
    icon: "👥",
    text: "Strengthening Human Capital through Capacity Building Programs, Skill Development and Hands-on Training in Advanced Biotechnology",
  },
  {
    icon: "💼",
    text: "Evolving Innovative Biotech Solutions into Investment-Ready Ventures through Industry Linkages, Market Access and Investor Connect",
  },
  {
    icon: "💰",
    text: "Enabling access to Government startup funding through scheme linkages, proposal support and guidance on funding opportunities",
  },
];

export default function WhyCoxbit() {
  return (
    <div className="min-h-screen bg-amber-100/60">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-2">
        <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm px-3 py-3 md:px-4 md:py-4">
          <div className="w-full">
            <ImageCarousel
              alt="MoA"
              images={[
                "/MoA/IMG_3485.JPG",
                "/MoA/IMG_9481.JPG",
                "/MoA/IMG_9487.JPG",
                "/MoA/IMG_9748.JPG",
              ]}
              fullWidth
              className="!max-w-2xl !mb-2"
            />
          </div>
          <h1 className="font-serif text-lg md:text-xl font-bold text-[#6b4226]">
            Why COXBIT
          </h1>
          <div className="space-y-2 mt-3">
            <p className="text-xs text-gray-700 leading-snug mb-4">
              At COXBIT, we emphasize five core transformations that
              innovators and startups undergo during their journey. These
              transformations are designed to ensure that early-stage ideas
              evolve into scalable, impactful and market-ready biotechnology
              solutions.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {transformations.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm"
                >
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <p className="text-xs text-gray-700 leading-snug">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

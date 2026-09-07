import Link from "next/link";

export default function OverviewPage({
  eyebrow,
  title,
  description,
  intro,
  links,
  gridClassName = "sm:grid-cols-2 lg:grid-cols-3",
}) {
  return (
    <div className="min-h-screen bg-amber-100/60">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            {eyebrow}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">{title}</h1>
          <p className="text-amber-100 mt-3 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <p className="text-gray-700 leading-relaxed mb-10 max-w-3xl">{intro}</p>

        {/* Navigation Cards */}
        <div className={`grid gap-6 ${gridClassName}`}>
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm p-6 flex flex-col hover:border-[#c89b3c] hover:shadow-md transition-all duration-200"
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

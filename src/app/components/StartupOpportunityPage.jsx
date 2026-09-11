export default function StartupOpportunityPage({ children }) {
  return (
    <div className="min-h-screen bg-amber-100/60">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            Startup Ecosystem
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            Start Your Innovation Journey Today
          </h1>
          <p className="text-amber-100 mt-3 max-w-2xl leading-relaxed">
            Whether you are a student with an innovative idea, a researcher
            developing breakthrough technology, an entrepreneur building a
            startup, or an industry partner seeking collaboration, we are
            here to support your journey from concept to commercialization.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">{children}</div>
    </div>
  );
}

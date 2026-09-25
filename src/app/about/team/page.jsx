import CoxbitTeam from "../../components/CoxbitTeam";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-amber-100/60">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 pt-7 pb-4 md:pt-9 md:pb-5">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-1">
            Centre of Excellence in Biotechnology
          </p>
          <h1 className="font-serif text-2xl md:text-3xl font-bold">
            COXBIT Team
          </h1>
          <p className="text-amber-100 mt-1 max-w-2xl leading-relaxed">
            The Chairman, Board of Directors and core team driving the
            Centre of Excellence in Biotechnology forward.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-4">
        <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm px-3 py-4 md:px-4 md:py-5">
          <CoxbitTeam />
        </div>
      </div>
    </div>
  );
}

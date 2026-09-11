import CoxbitTeam from "../../components/CoxbitTeam";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-amber-100/60">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            Centre of Excellence in Biotechnology
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            COXBIT Team
          </h1>
          <p className="text-amber-100 mt-3 max-w-2xl leading-relaxed">
            The Chairman, Board of Directors and core team driving the
            Centre of Excellence in Biotechnology forward.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm p-6 md:p-8">
          <CoxbitTeam />
        </div>
      </div>
    </div>
  );
}

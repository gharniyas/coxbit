"use client";

export default function SkillFacilities() {
  return (
    <div className="min-h-screen bg-amber-100/60">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            Facilities
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            Skill Facilities
          </h1>
          <p className="text-amber-100 mt-3 max-w-2xl leading-relaxed">
            This page is currently under development.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm p-10 max-w-lg w-full text-center">
          <h2 className="font-serif text-2xl font-bold text-[#6b4226] mb-3">
            Content Coming Soon
          </h2>
          <div className="w-16 h-1 bg-[#c89b3c] mx-auto mt-3 mb-4" />
          <p className="text-gray-600">
            Please check back soon for updates.
          </p>
        </div>
      </div>
    </div>
  );
}

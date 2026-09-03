import React from "react";
import Image from "next/image";

export default function CoxbitTeam() {
  const coreTeam = [
    {
      id: 1,
      name: "Mr. R. Ram Kumar",
      qualification: "MBA",
      designation: "Chief Executive Officer, COXBIT",
      image: "/Team Members/ram kumar.jpg",
    },
    {
      id: 2,
      name: "M. Selva Radhika Malar",
      qualification: "MBA",
      designation: "Manager, COXBIT",
      image: "/Team Members/Radhika.jpeg",
    },
    {
      id: 3,
      name: "Dr. KAVIYAPRIYA M",
      qualification: "Ph.D. (Plant Biotechnology)",
      designation: "Research Associate, COXBIT",
      image: "/kaviya.jpeg",
    },
    {
      id: 4,
      name: "Th. K. Muthu Vignesh",
      qualification: "M.Com, IB",
      designation: "Accounts Manager, COXBIT",
      image:
        "/Team Members/Th. K. Muthu Vignesh, M.Com, IB - Accounts Manager.jpg",
    },
    {
      id: 5,
      name: "Ms. D. Kiruthika",
      qualification: "M.Com",
      designation: "Office Assistant, COXBIT",
      image: "/Team Members/Ms. D. Kiruthika, M.Com - Office Assistant.jpg",
    },
  ];

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
            Meet the dedicated professionals at the Centre of Excellence in
            Biotechnology who drive innovation, research excellence, and
            administrative efficiency.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Core Team */}
        <section>
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl font-bold text-[#6b4226]">
              Operations &amp; Support Team
            </h2>
            <div className="w-16 h-1 bg-[#c89b3c] mx-auto mt-3 mb-4" />
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {coreTeam.map((member) => (
              <div
                key={member.id}
                className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
              >
                <div className="relative flex justify-center items-center h-24 md:h-28 lg:h-32 bg-[#6b4226]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="object-cover object-center rounded-full border-4 border-white"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl font-bold text-[#6b4226] mb-2">
                    {member.name}{" "}
                    {member.qualification && (
                      <span className="text-gray-500 font-normal text-base">
                        {member.qualification}
                      </span>
                    )}
                  </h3>
                  {member.designation && (
                    <p className="text-[#c89b3c] font-semibold">
                      {member.designation}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact & Collaboration */}
      </div>
    </div>
  );
}

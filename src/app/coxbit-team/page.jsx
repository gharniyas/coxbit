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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              COXBIT Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Meet the dedicated professionals at the Centre of Excellence in
            Biotechnology who drive innovation, research excellence, and
            administrative efficiency.
          </p>
        </div>

        {/* Core Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Operations & Support Team
          </h2>
          <div className="grid lg:grid-cols-3 gap-4">
            {coreTeam.map((member) => (
              <div
                key={member.id}
                className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative flex justify-center items-center h-24 md:h-28 lg:h-32">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={80}
                    height={80}
                    className="object-cover object-center rounded-full border-4 border-white shadow-md"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">
                    {member.name}{" "}
                    {member.qualification && (
                      <span className="text-gray-500 font-normal text-base">
                        {member.qualification}
                      </span>
                    )}
                  </h3>
                  {member.designation && (
                    <p className="text-blue-600 font-medium">
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

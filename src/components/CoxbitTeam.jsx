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
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">COXBIT Team</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Meet the dedicated professionals at the Centre of Excellence in
        Biotechnology who drive innovation, research excellence, and
        administrative efficiency.
      </p>
      <div className="grid lg:grid-cols-3 gap-8">
        {coreTeam.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative h-120">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
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
    </div>
  );
}

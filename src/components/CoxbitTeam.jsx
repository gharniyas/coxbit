import React from "react";
import Image from "next/image";

export default function CoxbitTeam() {
  const coreTeam = [
    {
      id: 1,
      name: "Mr. R. Ramkumar",
      qualification: "MBA",
      designation: "Chief Executive Officer, COXBIT",
      image: "/Team Members/ram kumar.jpg",
      phone: "8870281435",
      email: "ramceotnau@gmail.com",
    },
    {
      id: 2,
      name: "Tmt. M. Selva Radhika Malar",
      qualification: "MBA",
      designation: "Manager, COXBIT",
      image: "/Team Members/Radhika.jpeg",
      phone: "7373509696",
      email: "coebiotech@gmail.com",
    },
    {
      id: 3,
      name: "Dr. M. Kaviyapriya",
      qualification: "",
      designation: "Research Associate, COXBIT",
      image: "/kaviya.jpeg",
      phone: "9488141034",
      email: "drkpm2026@zohomail.in",
    },
    {
      id: 4,
      name: "K. Muthu Vignesh",
      qualification: "M. Com (International Business)",
      designation: "Accounts Manager, COXBIT",
      image:
        "/Team Members/Th. K. Muthu Vignesh, M.Com, IB - Accounts Manager.jpg",
      phone: "9942217653",
      email: "vikey05@gmail.com",
    },
    {
      id: 5,
      name: "Ms. D. Kiruthika",
      qualification: "M. Com (FCA)",
      designation: "Assistant Accounts Officer, COXBIT",
      image: "/Team Members/Ms. D. Kiruthika, M.Com - Office Assistant.jpg",
      phone: "8270676271",
      email: "coeboffice@gmail.com",
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
      <div className="grid lg:grid-cols-3 gap-6">
        {coreTeam.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
          >
            <div className="relative w-40 h-48 mt-6 rounded-xl overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover object-top"
              />
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
                <p className="text-blue-600 font-medium mb-2">
                  {member.designation}
                </p>
              )}
              {member.phone && (
                <p className="text-gray-700 text-sm mb-1">
                  <span className="font-medium">Phone:</span> {member.phone}
                </p>
              )}
              {member.email && (
                <p className="text-gray-700 text-sm">
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-600 hover:underline break-all"
                  >
                    {member.email}
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import Image from "next/image";

export default function CoxbitTeam() {
  // Chairman
  const chairman = {
    id: 1,
    name: "Dr. N. Senthil",
    position: "Chairman cum Director",
    qualification: "Ph.D., FNAAS",
    department: "Director, CPMB&B, TNAU",
    phone: "94870 01028",
    image: "/COXBIT BOARD OF DIRECTORS PHOTOS/Dr. N. Senthil.jpg",
  };

  // Board Members
  const boardMembers = [
    {
      id: 1,
      name: "Dr. E. Somasundaram",
      position: "Board of Director",
      qualification: "Ph.D.",
      department: "Director, DABD, TNAU",
      image: "/COXBIT BOARD OF DIRECTORS PHOTOS/Dr. E. Somasundaram.jpg",
    },
    {
      id: 2,
      name: "Dr. M. Raveendran",
      position: "Board of Director",
      qualification: "Ph.D.",
      department: "Director of Research, TNAU",
      image: "/COXBIT BOARD OF DIRECTORS PHOTOS/Dr. M. Raveendran.jpg",
    },
    {
      id: 3,
      name: "Dr. D. Suresh Kumar",
      position: "Board of Director",
      qualification: "Ph.D.",
      department: "Director, CARDS, TNAU",
      image: "/COXBIT BOARD OF DIRECTORS PHOTOS/Dr. D. Suresh Kumar.jpg",
    },
    {
      id: 4,
      name: "Dr. R. Ravikesavan",
      position: "Board of Director",
      qualification: "Ph.D.",
      department: "Director, CPBG, TNAU",
      image: "/COXBIT BOARD OF DIRECTORS PHOTOS/Dr. R. Ravikesavan.jpg",
    },
    {
      id: 5,
      name: "Dr. R. Umarani",
      position: "Board of Director",
      qualification: "Ph.D.",
      department: "Director, Seed Centre, TNAU",
      image: "/COXBIT BOARD OF DIRECTORS PHOTOS/Dr. R. Umarani.jpg",
    },
    {
      id: 6,
      name: "Dr. M.K. Kalarani",
      position: "Board of Director",
      qualification: "Ph.D.",
      department: "Special Officer (Publications), TNAU ",
      image: "/COXBIT BOARD OF DIRECTORS PHOTOS/Dr. M.K. Kalarani.jpg",
    },
    {
      id: 7,
      name: "Dr. P. Balasubramaniam",
      position: "Board of Director",
      qualification: "Ph.D.",
      department: "Director, NRM, TNAU",
      image: "/COXBIT BOARD OF DIRECTORS PHOTOS/Dr. P. Balasubramaniam.jpg",
    },
    {
      id: 8,
      name: "Dr. M. Shanthi",
      position: "Board of Director",
      qualification: "Ph.D.",
      department: "Director, CPPS",
      image: "/COXBIT BOARD OF DIRECTORS PHOTOS/Dr. M. Shanthi.jpg",
    },
    {
      id: 9,
      name: "Dr. E. Kokiladevi",
      position: "Board of Director",
      qualification: "Ph.D.",
      department: "Professor and Head, DPB, CPMB&B",
      image: "/COXBIT BOARD OF DIRECTORS PHOTOS/Dr. E. Kokiladevi.jpg",
    },
  ];

  // Core Team
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
      qualification: "Ph. D in Plant Biotechnology",
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
    <div className="space-y-16">
      {/* Chairman Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Chairman
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Chairman Photo */}
                <div className="lg:col-span-1 text-center">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={chairman.image}
                      alt={chairman.name}
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                </div>
                {/* Chairman Details */}
                <div className="lg:col-span-2">
                  <div className="text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {chairman.name}
                    </h3>
                    <p className="text-xl text-blue-600 font-semibold mb-2">
                      {chairman.qualification}
                    </p>
                    <p className="text-lg text-indigo-600 font-medium mb-4">
                      {chairman.position}
                    </p>
                    <div className="space-y-2 text-gray-700">
                      <p className="flex items-center justify-center lg:justify-start">
                        <span className="font-semibold mr-2">Department:</span>
                        {chairman.department}
                      </p>
                      <p className="flex items-center justify-center lg:justify-start">
                        <span className="font-semibold mr-2">Contact:</span>
                        <a
                          href={`tel:${chairman.phone}`}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          {chairman.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Board Members Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Board of Directors
        </h2>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {boardMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="p-6 flex flex-col items-center">
                {/* Member Photo */}
                <div className="relative w-40 h-48 mb-6 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                {/* Member Details */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-1">
                    {member.qualification}
                  </p>
                  <p className="text-sm text-indigo-600 font-medium mb-3">
                    {member.position}
                  </p>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    <p className="font-medium">{member.department}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Team Section */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          COXBIT Team
        </h2>
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
    </div>
  );
}

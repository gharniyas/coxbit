import React from "react";
import Image from "next/image";

export default function BoardOfDirectors() {
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
      department: "Director, Crop Management, TNAU",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Board of Directors
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Distinguished leaders from Tamil Nadu Agricultural University
            guiding the Centre of Excellence in Biotechnology's strategic
            direction and governance.
          </p>
        </div>

        {/* Chairman Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Chairman
            </h2>
          </div>

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
                          <span className="font-semibold mr-2">
                            Department:
                          </span>
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
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Board of Directors
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert directors from various departments of TNAU providing
              strategic oversight and specialized guidance for biotechnology
              research and development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {boardMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="p-6">
                  {/* Member Photo */}
                  <div className="w-24 h-24 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
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

        {/* Governance Information */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Corporate Governance Framework
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">📋</span>
                </span>
                Key Responsibilities
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  Strategic oversight of biotechnology research initiatives
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  Infrastructure development and resource allocation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  Public-private partnership facilitation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">•</span>
                  Quality assurance and research standards
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white text-sm">⚖️</span>
                </span>
                Governance Principles
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">•</span>
                  Transparency in research and operations
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">•</span>
                  Academic excellence and integrity
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">•</span>
                  Sustainable biotechnology development
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">•</span>
                  Stakeholder engagement and collaboration
                </li>
              </ul>
            </div>
          </div>

          {/* TNAU Integration */}
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-100">
              <h4 className="text-lg font-semibold text-gray-800 mb-3">
                Tamil Nadu Agricultural University Integration
              </h4>
              <p className="text-gray-600 leading-relaxed">
                As a Section 8 company under the Companies Act 2013, Centre of
                Excellence in Biotechnology operates with the full backing and
                governance oversight of Tamil Nadu Agricultural University. Our
                board comprises distinguished directors from various TNAU
                departments, ensuring seamless integration of academic
                excellence with innovative biotechnology research and
                development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

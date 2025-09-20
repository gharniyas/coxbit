import React from "react";
import Image from "next/image";

export default function CoxbitTeam() {
  const coreTeam = [
    {
      id: 1,
      name: "Mr. R. Ram Kumar",
      qualification: "MBA",
      image: "/Team Members/ram kumar.jpg",
    },
    {
      id: 2,
      name: "M. Selva Radhika Malar",
      qualification: "MBA",
      image: "/Team Members/M. Selva Radhika Malar, MBA-COEB Manager.jpg",
    },
    {
      id: 3,
      name: "Dr. Kaviyapriya M",
      qualification: "Ph.D.",
      image: "/Team Members/kaviyapriya.jpg",
    },
    {
      id: 4,
      name: "Th. K. Muthu Vignesh",
      qualification: "M.Com, IB",
      image:
        "/Team Members/Th. K. Muthu Vignesh, M.Com, IB - Accounts Manager.jpg",
    },
    {
      id: 5,
      name: "Ms. D. Kiruthika",
      qualification: "M.Com",
      image: "/Team Members/Ms. D. Kiruthika, M.Com - Office Assistant.jpg",
    },
  ];

  const operationalAreas = [
    {
      title: "Facility Management",
      description:
        "Comprehensive maintenance and operation of research infrastructure and equipment",
      icon: "🏢",
      color: "blue",
      activities: [
        "Equipment maintenance scheduling",
        "Infrastructure upkeep",
        "Utility management",
        "Space optimization",
      ],
    },
    {
      title: "Laboratory Operations",
      description:
        "Daily laboratory maintenance, cleaning protocols, and research support services",
      icon: "🧪",
      color: "green",
      activities: [
        "Laboratory cleaning & sterilization",
        "Equipment preparation",
        "Safety protocol implementation",
        "Research setup assistance",
      ],
    },
    {
      title: "Financial Operations",
      description:
        "Accounting, budget management, and financial transaction processing",
      icon: "�",
      color: "purple",
      activities: [
        "Daily transaction processing",
        "Budget tracking",
        "Vendor payment management",
        "Financial reporting",
      ],
    },
    {
      title: "Administrative Support",
      description:
        "Documentation, coordination, and general administrative services",
      icon: "📋",
      color: "orange",
      activities: [
        "Document management",
        "Meeting coordination",
        "Communication facilitation",
        "Record keeping",
      ],
    },
  ];

  const teamStats = [
    { label: "Operations Staff", value: "3", icon: "👥" },
    { label: "Facilities Managed", value: "5+", icon: "🏢" },
    { label: "Daily Lab Support", value: "12hrs", icon: "🧪" },
    { label: "Years of Service", value: "6+", icon: "⭐" },
  ];

  const achievements = [
    {
      title: "Section 8 Company Registration",
      description:
        "Successfully registered as Section 8 Company under Companies Act 2013",
      year: "2018",
    },
    {
      title: "Advanced Equipment Installation",
      description:
        "Established high-throughput platform with cutting-edge analytical instruments",
      year: "2019-2020",
    },
    {
      title: "Training Program Excellence",
      description:
        "Conducted numerous successful training programs in proteomics and metabolomics",
      year: "2021-2024",
    },
    {
      title: "Public-Private Partnerships",
      description:
        "Established successful PPP model for biotechnology research and development",
      year: "2022-Present",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Our Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Meet the dedicated professionals at the Centre of Excellence in
            Biotechnology who drive innovation, research excellence, and
            administrative efficiency to make our mission possible.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {teamStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-blue-100/50 p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Core Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Operations & Support Team
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {coreTeam.map((member) => (
              <div
                key={member.id}
                className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.qualification}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Operational Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Operational Areas
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {operationalAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`w-16 h-16 bg-${area.color}-100 rounded-full flex items-center justify-center mb-4`}
                >
                  <span className="text-3xl">{area.icon}</span>
                </div>
                <h3
                  className={`text-xl font-semibold text-${area.color}-600 mb-3`}
                >
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {area.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900">
                    Key Activities:
                  </h4>
                  {area.activities.map((activity, actIndex) => (
                    <div
                      key={actIndex}
                      className="text-gray-600 text-sm flex items-start"
                    >
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      {activity}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Achievements */}
        <section className="mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Operational Excellence
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white text-2xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Facility Management Excellence
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Maintaining 99% uptime for all research equipment and
                    facilities through proactive maintenance and efficient
                    operations management.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white text-2xl">🧪</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Laboratory Operations
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Ensuring sterile and optimal laboratory conditions for
                    research activities with strict adherence to safety
                    protocols and cleanliness standards.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Financial Efficiency
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Streamlined financial operations with accurate budget
                    tracking, timely vendor payments, and comprehensive
                    financial reporting.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-white text-2xl">📋</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Administrative Support
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive administrative services ensuring smooth daily
                    operations, effective communication, and organized
                    documentation systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Culture & Values */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Operational Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-blue-600">�</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Excellence in Research
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We are committed to maintaining the highest standards in
                  biotechnology research and innovation, driving breakthrough
                  discoveries.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-green-600">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Collaborative Partnership
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Through public-private partnerships, we foster collaboration
                  that translates research into practical agricultural
                  solutions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-purple-600">🌱</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Sustainable Innovation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We develop biobased products and solutions that benefit
                  farmers while promoting environmental sustainability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Collaboration */}
        <section className="bg-gradient-to-br from-gray-800 via-blue-900 to-indigo-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Collaborate with Our Team</h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Interested in research collaboration, training programs, or
            partnership opportunities? Connect with our team to explore how we
            can work together to advance biotechnology innovation.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-2">
                Research Collaboration
              </h3>
              <p className="text-blue-100 text-sm">
                Joint research projects and academic partnerships
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-2">Training Programs</h3>
              <p className="text-blue-100 text-sm">
                Professional development and skill enhancement
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold mb-2">
                Industry Partnership
              </h3>
              <p className="text-blue-100 text-sm">
                Public-private collaboration opportunities
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:coebiotech@tnau.ac.in"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold"
            >
              Get in Touch
            </a>
            <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-300 font-semibold">
              Learn More
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

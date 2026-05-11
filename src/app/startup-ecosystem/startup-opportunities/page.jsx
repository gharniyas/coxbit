"use client";
import React, { useState } from "react";

const StartupOpportunities = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const trlLevels = [
    {
      level: "TRL 1",
      title: "Basic Idea & Research",
      items: [
        "Scientific observations and early concepts",
        "Initial research and literature study",
        "Identification of potential applications",
      ],
    },
    {
      level: "TRL 2",
      title: "Concept Development",
      items: [
        "Technology concept formulated",
        "Preliminary experiments and feasibility studies",
        "Identification of technical requirements",
      ],
    },
    {
      level: "TRL 3",
      title: "Proof of Concept",
      items: [
        "Experimental validation begins",
        "Prototype design and laboratory testing",
        "Early performance evaluation",
      ],
    },
    {
      level: "TRL 4",
      title: "Laboratory Validation",
      items: [
        "Technology validated under laboratory conditions",
        "Process optimization and analytical testing",
        "Initial data generation",
      ],
    },
    {
      level: "TRL 5",
      title: "Pilot Scale Validation",
      items: [
        "Technology tested in relevant environments",
        "Small-scale production or field testing",
        "Validation under operational conditions",
      ],
    },
    {
      level: "TRL 6",
      title: "Prototype Demonstration",
      items: [
        "Functional prototype demonstrated",
        "Product refinement and process standardization",
        "Performance verification",
      ],
    },
    {
      level: "TRL 7",
      title: "System Demonstration",
      items: [
        "Demonstration in real-world environments",
        "User feedback and application trials",
        "Regulatory and compliance assessments",
      ],
    },
    {
      level: "TRL 8",
      title: "Market Ready Product",
      items: [
        "Final product development completed",
        "Commercial production readiness",
        "Branding, packaging and marketing strategy",
      ],
    },
    {
      level: "TRL 9",
      title: "Commercial Deployment",
      items: [
        "Product successfully launched",
        "Full-scale commercialization",
        "Market expansion and business growth",
      ],
    },
  ];

  const startupJourney = [
    {
      title: "Idea Generation",
      desc: "Identify a problem, explore opportunities and develop innovative concepts.",
    },
    {
      title: "Validation & Research",
      desc: "Understand market demand, customer needs and competitor analysis.",
    },
    {
      title: "Prototype Development",
      desc: "Develop initial models, proof-of-concept, or pilot products.",
    },
    {
      title: "Technology Development",
      desc: "Improve product efficiency, testing and technical validation.",
    },
    {
      title: "Product Optimization",
      desc: "Refine design, quality, usability and scalability.",
    },
    {
      title: "Commercialization",
      desc: "Launch products/services into the market and build customer reach.",
    },
    {
      title: "Business Expansion",
      desc: "Scale operations, partnerships, exports and investment opportunities.",
    },
  ];

  const fundingTypes = [
    {
      title: "Seed Funding",
      desc: "Initial support for idea development, prototype creation, and early-stage validation.",
    },
    {
      title: "Grant Support",
      desc: "Non-repayable financial assistance provided for innovation, research, technology development, and startup growth.",
    },
    {
      title: "Incubation Support",
      desc: "Access to infrastructure, mentorship, technical facilities, and business guidance through incubation programs.",
    },
    {
      title: "Angel Investment",
      desc: "Investment from individual investors who support promising startups with funding and mentorship.",
    },
    {
      title: "Venture Capital (VC)",
      desc: "Funding provided to high-growth startups with scalable business potential.",
    },
  ];

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "trl", label: "TRL Levels" },
    { id: "journey", label: "Startup Journey" },
    { id: "funding", label: "Funding" },
    { id: "support", label: "Support & FAQ" },
  ];

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Start Your Innovation Journey Today
          </h1>
          <p className="text-sm md:text-base leading-relaxed">
            Whether you are a student with an innovative idea, a researcher
            developing breakthrough technology, an entrepreneur building a
            startup, or an industry partner seeking collaboration, we are here
            to support your journey from concept to commercialization.
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white shadow-md border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex space-x-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 font-semibold whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? "text-blue-600 border-b-4 border-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content - Scrollable */}
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Overview Tab */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">
                  Our Ecosystem
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Our ecosystem brings together innovation, research,
                  technology, skill development, incubation support and industry
                  partnerships to help startups grow with the right technical,
                  strategic and business guidance.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Innovation begins with an idea, but successful ventures are
                  built through strong mentorship, access to infrastructure,
                  technical expertise, market opportunities and continuous
                  support. Our startup ecosystem is designed to empower aspiring
                  entrepreneurs, students, researchers, innovators and
                  early-stage companies in transforming ideas into scalable,
                  sustainable and impactful ventures.
                </p>
              </div>
            </div>
          )}

          {/* TRL Tab */}
          {activeTab === "trl" && (
            <div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">
                  Technology Readiness Levels (TRL)
                </h2>
                <p className="text-gray-700 mb-6">
                  Technology Readiness Level (TRL) is a globally recognized
                  framework used to measure the maturity level of a technology
                  or innovation.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {trlLevels.map((trl, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-lg p-4 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center mb-3">
                        <span className="bg-blue-600 text-white font-bold px-3 py-1 rounded-full text-xs">
                          {trl.level}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-blue-800 mb-2">
                        {trl.title}
                      </h3>
                      <ul className="space-y-1">
                        {trl.items.map((item, i) => (
                          <li
                            key={i}
                            className="text-gray-700 text-xs flex items-start"
                          >
                            <span className="text-blue-600 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Journey Tab */}
          {activeTab === "journey" && (
            <div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-green-800 mb-6">
                  Startup Journey: From Idea to Enterprise
                </h2>
                <div className="space-y-4">
                  {startupJourney.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-white rounded-lg border-l-4 border-green-600 hover:shadow-md transition-shadow"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-green-800 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-700 text-sm">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Funding Tab */}
          {activeTab === "funding" && (
            <div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-purple-800 mb-6">
                  Types of Startup Funding
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {fundingTypes.map((funding, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-lg p-5 hover:shadow-lg transition-shadow"
                    >
                      <h3 className="text-lg font-bold text-purple-800 mb-2">
                        {funding.title}
                      </h3>
                      <p className="text-gray-700 text-sm">{funding.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Support & FAQ Tab */}
          {activeTab === "support" && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-orange-800 mb-4">
                  Key Startup Support COXBIT Offers
                </h2>
                <div className="space-y-4 mb-6">
                  <div className="bg-gradient-to-r from-orange-50 to-white border-l-4 border-orange-600 p-4 rounded-lg">
                    <h3 className="text-lg font-bold text-orange-800 mb-2">
                      Government Startup Schemes
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Support through startup missions, innovation initiatives,
                      entrepreneurship programs, and sector-specific schemes.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-white border-l-4 border-orange-600 p-4 rounded-lg">
                    <h3 className="text-lg font-bold text-orange-800 mb-2">
                      Research & Innovation Funding
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Funding opportunities for technology development,
                      scientific research, product innovation, and
                      commercialization.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-50 to-white border-l-4 border-orange-600 p-4 rounded-lg">
                    <h3 className="text-lg font-bold text-orange-800 mb-2">
                      Industry Collaboration Support
                    </h3>
                    <p className="text-gray-700 text-sm">
                      Partnership opportunities with industries for
                      co-development, pilot testing, product validation, and
                      commercialization.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-orange-800 mb-4">
                  Key Support Services
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {[
                    {
                      title: "Innovation & Incubation",
                      desc: "Support for ideation, startup incubation, prototype development, and business acceleration.",
                    },
                    {
                      title: "Research & Development",
                      desc: "Access to biotechnology, bioinformatics, food technology, agri-tech, and analytical research facilities.",
                    },
                    {
                      title: "Product Development",
                      desc: "Technical guidance for product formulation, testing, validation, optimization, and scale-up.",
                    },
                    {
                      title: "Testing & Analytical Services",
                      desc: "Advanced instrumentation support for quality analysis and scientific validation.",
                    },
                    {
                      title: "Entrepreneurship Development",
                      desc: "Training programs, workshops, mentoring sessions, and startup awareness initiatives.",
                    },
                    {
                      title: "Industry Collaboration",
                      desc: "Partnership opportunities for technology transfer, pilot projects, commercialization, and co-development.",
                    },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="bg-orange-50 p-3 rounded-lg border border-orange-200"
                    >
                      <h4 className="font-bold text-orange-800 mb-1 text-sm">
                        {service.title}
                      </h4>
                      <p className="text-gray-700 text-xs">{service.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-teal-800 mb-4">
                  Frequently Asked Questions (FAQ)
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      q: "Who can apply for startup support?",
                      a: "Students, researchers, entrepreneurs, startups, MSMEs, innovators, and industries.",
                    },
                    {
                      q: "Do I need a registered company?",
                      a: "No. Early-stage ideas and student innovations are also encouraged.",
                    },
                    {
                      q: "What sectors are supported?",
                      a: "Biotechnology, agriculture, food processing, bioinformatics, sustainability, healthcare, and related sectors.",
                    },
                    {
                      q: "Is technical mentorship available?",
                      a: "Yes. Technical guidance and expert mentorship are provided throughout the innovation journey.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-teal-50 to-white border-l-4 border-teal-600 p-4 rounded-lg"
                    >
                      <h3 className="text-base font-bold text-teal-800 mb-1">
                        {faq.q}
                      </h3>
                      <p className="text-gray-700 text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartupOpportunities;

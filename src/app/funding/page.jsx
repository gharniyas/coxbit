import React from "react";
import {
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaGlobeAmericas,
} from "react-icons/fa";

const FundingPage = () => {
  const fundingPrograms = [
    {
      title: "Research & Development Grants",
      description:
        "Supporting innovative biotechnology research projects with comprehensive funding for equipment, personnel, and operational costs.",
      amount: "₹5L - ₹50L",
      duration: "12-36 months",
      icon: FaLightbulb,
      features: [
        "Equipment funding",
        "Personnel support",
        "Operational costs",
        "Publication support",
      ],
    },
    {
      title: "Startup Incubation Fund",
      description:
        "Seed funding for biotech startups and early-stage companies developing cutting-edge biotechnology solutions.",
      amount: "₹10L - ₹1Cr",
      duration: "6-24 months",
      icon: FaUsers,
      features: [
        "Seed capital",
        "Mentorship",
        "Infrastructure access",
        "Market validation support",
      ],
    },
    {
      title: "Technology Transfer Grants",
      description:
        "Facilitating the transition of laboratory innovations to commercial applications and market-ready products.",
      amount: "₹2L - ₹25L",
      duration: "6-18 months",
      icon: FaHandshake,
      features: [
        "Prototype development",
        "Patent support",
        "Market analysis",
        "Commercial partnerships",
      ],
    },
    {
      title: "International Collaboration Fund",
      description:
        "Supporting global partnerships and collaborative research projects with international institutions.",
      amount: "₹15L - ₹75L",
      duration: "12-48 months",
      icon: FaGlobeAmericas,
      features: [
        "Travel grants",
        "Exchange programs",
        "Joint research",
        "Conference participation",
      ],
    },
  ];

  const eligibilityCriteria = [
    "Registered research institutions or universities",
    "Licensed biotechnology companies",
    "Individual researchers with institutional affiliation",
    "Startups with biotech focus and valid registration",
    "International collaborators with Indian partners",
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Initial Application",
      description:
        "Submit your project proposal with detailed research plan and budget requirements.",
    },
    {
      step: 2,
      title: "Review Process",
      description:
        "Expert committee reviews applications based on innovation, feasibility, and impact potential.",
    },
    {
      step: 3,
      title: "Presentation",
      description:
        "Shortlisted candidates present their projects to the evaluation panel.",
    },
    {
      step: 4,
      title: "Funding Award",
      description:
        "Successful applicants receive funding approval and sign grant agreements.",
    },
    {
      step: 5,
      title: "Project Monitoring",
      description:
        "Regular progress reviews and milestone-based fund disbursement.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header banner */}
      <div className="bg-[#0a1f44] text-white">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            Support &amp; Grants
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            Funding &amp; Grants
          </h1>
          <p className="text-blue-100 mt-3 max-w-2xl leading-relaxed">
            Empowering innovation through strategic funding opportunities for
            biotechnology research, startups, and collaborative projects that
            drive scientific advancement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button className="bg-[#c89b3c] hover:bg-[#b3872e] text-[#0a1f44] font-semibold px-6 py-3 rounded-sm transition-colors duration-200">
              Apply for Funding
            </button>
            <button className="border border-white/60 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-sm transition-colors duration-200">
              Download Guidelines
            </button>
          </div>
        </div>
      </div>

      {/* Funded By Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0a1f44]">
              Funded By
            </h2>
            <div className="w-16 h-1 bg-[#c89b3c] mx-auto mt-3 mb-4" />
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our funding initiatives are supported by prestigious government
              institutions and development organizations committed to
              biotechnology advancement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Government of Tamil Nadu */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-8 text-center hover:shadow-md transition-shadow duration-200">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border border-gray-200 bg-white p-2">
                <a
                  href="https://www.tn.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/2/2e/TamilNadu_Logo.png"
                    alt="Government of Tamil Nadu"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0a1f44] mb-3">
                Government of Tamil Nadu
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Primary funding partner providing comprehensive support for
                biotechnology research and infrastructure development
                initiatives.
              </p>
            </div>

            {/* TNAU */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-8 text-center hover:shadow-md transition-shadow duration-200">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border border-gray-200 bg-white p-2">
                <a
                  href="https://tnau.ac.in"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Tamil_Nadu_Agricultural_University_logo.png/240px-Tamil_Nadu_Agricultural_University_logo.png"
                    alt="TNAU"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0a1f44] mb-3">
                Tamil Nadu Agricultural University
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Academic partner providing institutional support, research
                infrastructure, and educational excellence in agricultural
                biotechnology.
              </p>
            </div>

            {/* NABARD */}
            <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-8 text-center hover:shadow-md transition-shadow duration-200">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border border-gray-200 bg-white p-2">
                <a
                  href="https://www.nabard.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/0/0f/NABARD_Logo.png"
                    alt="NABARD"
                    className="w-full h-full object-contain"
                  />
                </a>
              </div>
              <h3 className="font-serif text-xl font-bold text-[#0a1f44] mb-3">NABARD</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                National Bank for Agriculture and Rural Development supporting
                agricultural innovation and rural development through strategic
                funding.
              </p>
            </div>
          </div>

          {/* Additional funding information */}
          <div className="mt-12 text-center">
            <div className="bg-gray-50 border border-gray-200 border-l-4 border-l-[#c89b3c] rounded-sm p-6 max-w-4xl mx-auto">
              <h4 className="font-serif text-lg font-bold text-[#0a1f44] mb-3">
                Collaborative Funding Framework
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Our funding ecosystem operates through strategic partnerships
                between government institutions, academic excellence centers,
                and development banks to create a comprehensive support system
                for biotechnology innovation and agricultural advancement in
                Tamil Nadu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Programs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0a1f44]">
              Our Funding Programs
            </h2>
            <div className="w-16 h-1 bg-[#c89b3c] mx-auto mt-3 mb-4" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive funding solutions tailored to support various stages
              of biotechnology innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fundingPrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-sm shadow-sm p-8 hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#0a1f44] rounded-sm flex items-center justify-center mr-4">
                      <IconComponent className="text-2xl text-[#c89b3c]" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#0a1f44]">
                        {program.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <span className="font-semibold text-[#8a6a1f]">
                          {program.amount}
                        </span>
                        <span>•</span>
                        <span>{program.duration}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#0a1f44] mb-3">
                      Key Features:
                    </h4>
                    {program.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-[#c89b3c] rounded-full mr-3"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full mt-6 bg-[#c89b3c] hover:bg-[#b3872e] text-[#0a1f44] font-semibold px-6 py-3 rounded-sm transition-colors duration-200">
                    Learn More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0a1f44] mb-1">
                Eligibility Criteria
              </h2>
              <div className="w-16 h-1 bg-[#c89b3c] mt-3 mb-6" />
              <p className="text-xl text-gray-600 mb-8">
                We welcome applications from diverse organizations and
                individuals committed to advancing biotechnology innovation.
              </p>

              <div className="space-y-4">
                {eligibilityCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-[#0a1f44]/5 border border-[#0a1f44]/10 rounded-full flex items-center justify-center mr-4 mt-0.5">
                      <div className="w-2 h-2 bg-[#c89b3c] rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{criteria}</span>
                  </div>
                ))}
              </div>

              <button className="mt-8 bg-[#c89b3c] hover:bg-[#b3872e] text-[#0a1f44] font-semibold px-6 py-3 rounded-sm transition-colors duration-200">
                Check Eligibility
              </button>
            </div>

            <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-8">
              <h3 className="font-serif text-2xl font-bold text-[#0a1f44] mb-6">
                Quick Stats
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-[#0a1f44] mb-2">
                    ₹50Cr+
                  </div>
                  <div className="text-gray-600">Total Funding Disbursed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-[#0a1f44] mb-2">
                    150+
                  </div>
                  <div className="text-gray-600">Projects Funded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-[#0a1f44] mb-2">
                    25+
                  </div>
                  <div className="text-gray-600">Startups Incubated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif font-bold text-[#0a1f44] mb-2">
                    80%
                  </div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#0a1f44]">
              Application Process
            </h2>
            <div className="w-16 h-1 bg-[#c89b3c] mx-auto mt-3 mb-4" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined process designed to identify and support the most
              promising biotechnology innovations
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-200"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {applicationProcess.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-[#0a1f44] rounded-full flex items-center justify-center text-[#c89b3c] font-bold text-xl mb-4 relative z-10">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-[#0a1f44] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-[#0a1f44] text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Apply for Funding?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Take the first step towards realizing your biotechnology innovation.
            Our funding team is ready to support your journey.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-[#c89b3c] hover:bg-[#b3872e] text-[#0a1f44] font-semibold px-6 py-3 rounded-sm transition-colors duration-200">
              Start Application
            </button>
            <button className="border border-white/60 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-sm transition-colors duration-200">
              Schedule Consultation
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Funding Office</h3>
              <p className="text-blue-100">coebiotech@tnau.ac.in</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                Application Support
              </h3>
              <p className="text-blue-100">+91 94870 01028</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Office Hours</h3>
              <p className="text-blue-100">Mon - Fri, 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FundingPage;

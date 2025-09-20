import React from "react";
import Image from "next/image";

export default function About() {
  const milestones = [
    {
      year: "2018",
      title: "COXBIT Established",
      description:
        "Registered as Section 8 Company under the Companies Act 2013 on 16th August 2018",
    },
    {
      year: "2019",
      title: "Infrastructure Development",
      description:
        "World-class biotechnology infrastructure established with government funding",
    },
    {
      year: "2020",
      title: "Equipment Installation",
      description:
        "High-end analytical equipment installed for proteomics and metabolomics research",
    },
    {
      year: "2021",
      title: "Research Initiatives",
      description:
        "Public-private partnership research programs launched for agricultural biotech",
    },
    {
      year: "Present",
      title: "Innovation Leadership",
      description:
        "Leading biotechnology innovation and sustainable agricultural solutions",
    },
  ];

  const goals = [
    "Position Tamil Nadu as a leader on the global biotechnology map",
    "Foster investment and innovation in the biotechnology sector",
    "Provide enabling environment and world-class infrastructure for research and education in biotechnology",
  ];

  const activities = [
    {
      title: "Entrepreneurship Development",
      description:
        "Nurturing technology-oriented entrepreneurs and start-up firms focusing on biotechnology for progressive agriculture",
      icon: "🚀",
    },
    {
      title: "Bioproduct Development",
      description:
        "Bioproduct development and facilitating certification services for commercial applications",
      icon: "🧪",
    },
    {
      title: "Skill Development",
      description:
        "Nurturing young talents through comprehensive skill development programmes",
      icon: "🎓",
    },
    {
      title: "Research Support",
      description:
        "Programmed resource mobilization and support bioproduct development research systematically",
      icon: "🔬",
    },
    {
      title: "Knowledge Transfer",
      description:
        "Knowledge dissemination about bioproducts to the farming community for better agricultural practices",
      icon: "📚",
    },
  ];

  const benefits = [
    "Development of novel biobased agri-inputs for the benefit of farmers",
    "Human resource development by conducting training to students and scholars with entrepreneurial and technical skills",
    "Availability of analytical facility to students and research scholars",
    "COXBIT serves as a pipeline to transfer the agrotechnology in a large scale to the needy farmers",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-indigo-100/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              About Centre of Excellence in Biotechnology
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Creating world-class infrastructure for Biotech Research and
            Innovation at Tamil Nadu Agricultural University with funding
            support from Government of Tamil Nadu.
          </p>
        </div>

        {/* About Us Video Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Watch our journey of excellence in biotechnology research and
              innovation at Tamil Nadu Agricultural University.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-auto"
              autoPlay
              muted
              loop
              playsInline
              controls
            >
              <source src="/video/aboutus.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* Main About Section with Image */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
              Our Foundation
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Centre of excellence in Biotechnology (COXBIT) is being
                established at Tamil Nadu Agricultural University with funding
                support from Government of Tamil Nadu to create world class
                infrastructure for Biotech Research and Innovation.
              </p>
              <p>
                Research and development activities will be carried out under
                public-private partnership mode to develop super active
                enzymes/bio molecules, biobased products, hormones for fruit
                ripening, plant growth stimulants and similar bio-inputs for the
                commercial benefit of farmers.
              </p>
              <p>
                Independent and free-standing Section 8 company by leveraging
                strengths of TNAU-BIOTECH COUNCIL FOR ESTABLISHMENT OF CENTRE OF
                EXCELLENCE IN BIOTECHNOLOGY was registered as Section 8 Company
                under the Companies Act 2013 on 16th of August 2018.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/Events - Trainings/3 - LCMS Training/_DSC0260.JPG"
                alt="LCMS Training Laboratory"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">
                  LCMS Training Laboratory
                </h3>
                <p className="text-sm opacity-90">
                  Hands-on analytical training
                </p>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Advanced Analytical Training
              </h3>
              <p className="text-gray-600">
                Our facility provides comprehensive hands-on training on LCMS,
                GCMS, and high-throughput protein analysis, featuring
                state-of-the-art equipment and expert guidance.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Goals */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 rounded-xl shadow-xl p-8 border border-blue-100/50 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
              <span className="text-white text-2xl">🎯</span>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              To develop high-end laboratories, biobased products through
              public-private partnership and quality human resource in the
              biotech sector.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white via-indigo-50 to-purple-50 rounded-xl shadow-xl p-8 border border-indigo-100/50 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
              <span className="text-white text-2xl">🚀</span>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Our Goals
            </h2>
            <ul className="space-y-3 text-gray-700">
              {goals.map((goal, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">•</span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Strategic Partnerships */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Our Strategic Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Collaborating with leading institutions to advance biotechnology
              research and innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* TNAU Partnership */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 p-8 text-center hover:shadow-2xl transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/TNA logo.jpg"
                  alt="Tamil Nadu Agricultural University"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Tamil Nadu Agricultural University
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our primary academic partner, providing world-class research
                infrastructure and educational excellence in agricultural
                biotechnology.
              </p>
            </div>

            {/* Innovation Partnership */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 p-8 text-center hover:shadow-2xl transition-all duration-300">
              <div className="w-24 h-24 mx-auto mb-6 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/innovation logo.jpg"
                  alt="Innovation Partner"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Innovation Excellence
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Driving cutting-edge research and development initiatives in
                biotechnology innovation and sustainable agricultural solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Advanced Equipment Section */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 p-8 mb-16">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
                High-Throughput Analytical Platform
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our facility features state-of-the-art equipment for proteomics
                and metabolomics research, enabling breakthrough discoveries in
                biotechnology and agricultural sciences.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">
                    Mass Spectrometry:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• MALDI TOF/TOF Mass Spectrometer</li>
                    <li>• LCMS-8045 Triple Quadrupole</li>
                    <li>• GCMS TQ-8040 NX Triple Quadrupole</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800">
                    Chromatography:
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Preparative HPLC System</li>
                    <li>• UHPLC system</li>
                    <li>• Nano LC System</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden">
              <Image
                src="/Events - Trainings/4 - GCMS Training/_DSC1451.JPG"
                alt="GCMS Training Laboratory"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">GCMS Training Lab</h3>
                <p className="text-sm opacity-90">
                  Advanced analytical equipment
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Our Key Activities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4 text-center">{activity.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm text-center leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section with Image */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="relative h-80 rounded-xl overflow-hidden">
            <Image
              src="/Scrolling Photos/Tree Planting.JPG"
              alt="Sustainability Initiative - Tree Planting"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-lg font-semibold">
                Sustainability Initiative
              </h3>
              <p className="text-sm opacity-90">Environmental stewardship</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white via-green-50 to-emerald-50 rounded-xl shadow-xl p-8 border border-green-100/50">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
              <span className="text-white text-2xl">🌟</span>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-6">
              Benefits of COXBIT
            </h2>
            <ul className="space-y-4 text-gray-700">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✓</span>
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Our Journey
          </h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-indigo-600"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 shadow-md">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research Infrastructure Gallery */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Training Programs & Laboratory Facilities
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/Events - Trainings/2 - Hands on training on High throughput analysis of Protein/Training Participants.JPG"
                alt="Protein Analysis Training"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Protein Analysis Training</h3>
                <p className="text-sm opacity-90">High-throughput analysis</p>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/Events - Trainings/1 - Bioentrpreneurship Meet/IMG_1386.JPG"
                alt="Bioentrepreneurship Meet"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Bioentrepreneurship</h3>
                <p className="text-sm opacity-90">Innovation ecosystem</p>
              </div>
            </div>

            <div className="relative h-64 rounded-lg overflow-hidden group">
              <Image
                src="/Scrolling Photos/IMG_6592.JPG"
                alt="Research Activities"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-semibold">Research Excellence</h3>
                <p className="text-sm opacity-90">Innovation in progress</p>
              </div>
            </div>
          </div>

          {/* Additional Training Programs Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">
              Specialized Training Programs
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🔬</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  LCMS Training
                </h4>
                <p className="text-sm text-gray-600">
                  Hands-on training on Liquid Chromatography Mass Spectrometry
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">⚗️</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  GCMS Training
                </h4>
                <p className="text-sm text-gray-600">
                  Gas Chromatography Mass Spectrometry analytical techniques
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">🧬</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Protein Analysis
                </h4>
                <p className="text-sm text-gray-600">
                  High-throughput protein analysis and characterization
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl">💡</span>
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">
                  Bioentrepreneurship
                </h4>
                <p className="text-sm text-gray-600">
                  Innovation ecosystem and startup development
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-gray-800 via-blue-900 to-indigo-900 text-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-300">
                Address
              </h3>
              <p className="leading-relaxed mb-4">
                <strong>
                  Biotech Council for Establishment of Centre of Excellence in
                  Biotechnology
                </strong>
              </p>
              <p className="leading-relaxed">
                Tamil Nadu Agricultural University
                <br />
                Coimbatore – 641 003, Tamil Nadu, India
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-300">
                Contact Details
              </h3>
              <div className="space-y-2">
                <p>
                  <strong>Phone:</strong>
                </p>
                <p className="text-blue-200">+91 94890 56706</p>
                <p className="text-blue-200">+91 88702 81435</p>
                <p className="text-blue-200">+91 73735 09696</p>
                <p className="mt-4">
                  <strong>Email:</strong>
                </p>
                <p>
                  <a
                    href="mailto:coebiotech@tnau.ac.in"
                    className="text-blue-300 hover:text-blue-200 transition-colors"
                  >
                    coebiotech@tnau.ac.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

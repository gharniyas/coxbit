import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Banner Section with Background Image */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/building/IMG_5188.JPG"
            alt="CoEB Main Building"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
          {/* Gradient overlay for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-indigo-900/20 to-purple-900/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-20 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white drop-shadow-2xl">
                Centre of Excellence in Biotechnology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8 drop-shadow-lg">
              Creating world-class infrastructure for Biotech Research and
              Innovation at Tamil Nadu Agricultural University with funding
              support from Government of Tamil Nadu.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl backdrop-blur-sm">
                Explore Our Services
              </button>
              <button className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/30 hover:bg-white/30 transform hover:scale-105 transition-all duration-300 shadow-xl">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative z-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-transparent to-indigo-100/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-indigo-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 container mx-auto px-4 py-20">
          {/* About Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 p-8 mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6 text-center">
              About CoEB
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Centre of excellence in Biotechnology (CoEB) is being
                  established at Tamil Nadu Agricultural University with funding
                  support from Government of Tamil Nadu to create world class
                  infrastructure for Biotech Research and Innovation.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Research and development activities will be carried out under
                  public-private partnership mode to develop super active
                  enzymes/bio molecules, biobased products, hormones for fruit
                  ripening, plant growth stimulants and similar bio-inputs for
                  the commercial benefit of farmers.
                </p>
              </div>
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Independent and free-standing Section 8 company by leveraging
                  strengths of TNAU-BIOTECH COUNCIL FOR ESTABLISHMENT OF CENTRE
                  OF EXCELLENCE IN BIOTECHNOLOGY was registered as Section 8
                  Company under the Companies Act 2013 on 16th of August 2018.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The instrument facility was established at CoEB to initiate
                  high end research on genomics and metabolomics by the
                  researchers.
                </p>
              </div>
            </div>
          </div>

          {/* Building & Infrastructure Showcase */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8 text-center">
              Our World-Class Infrastructure
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              State-of-the-art buildings and facilities designed for
              cutting-edge biotechnology research
            </p>

            {/* Building Photos Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-5xl mx-auto">
              {/* Main Building */}
              <div className="relative group">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <Image
                    src="/building/IMG_5188.JPG"
                    alt="CoEB Main Building"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-600/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Main Building</h3>
                    <p className="text-blue-100">
                      Modern architectural design with world-class facilities
                    </p>
                  </div>
                </div>
              </div>

              {/* Research Complex */}
              <div className="relative group">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <Image
                    src="/building/IMG_5195.JPG"
                    alt="CoEB Research Complex"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-600/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      Research Complex
                    </h3>
                    <p className="text-indigo-100">
                      Advanced laboratories with premium equipment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scrolling Photos & Videos Gallery */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8 text-center">
              Our Research & Activities Gallery
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Explore our state-of-the-art facilities, research activities, and
              sustainability initiatives through our visual showcase
            </p>

            {/* First Row - Left to Right */}
            <div className="mb-6">
              <Marquee
                speed={50}
                gradient={true}
                gradientColor={[248, 250, 252]}
                gradientWidth={100}
              >
                <div className="flex gap-6 mr-6">
                  <div className="relative w-80 h-60 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src="/Scrolling Photos/IMG_1386.JPG"
                      alt="CoEB Research Facility"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-semibold">
                        Research Laboratory
                      </h4>
                      <p className="text-sm opacity-90">
                        Advanced Equipment Setup
                      </p>
                    </div>
                  </div>

                  <div className="relative w-80 h-60 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src="/Scrolling Photos/IMG_3387.JPG"
                      alt="CoEB Biotechnology Research"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-semibold">
                        Biotechnology Lab
                      </h4>
                      <p className="text-sm opacity-90">
                        Cutting-edge Research
                      </p>
                    </div>
                  </div>

                  <div className="relative w-80 h-60 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src="/Scrolling Photos/IMG_3396.JPG"
                      alt="CoEB Innovation Center"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-semibold">Innovation Hub</h4>
                      <p className="text-sm opacity-90">
                        Technology Development
                      </p>
                    </div>
                  </div>

                  <div className="relative w-80 h-60 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src="/Scrolling Photos/IMG_3500.JPG"
                      alt="CoEB Analytical Facility"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-semibold">
                        Analytical Platform
                      </h4>
                      <p className="text-sm opacity-90">Mass Spectrometry</p>
                    </div>
                  </div>
                </div>
              </Marquee>
            </div>

            {/* Second Row - Right to Left */}
            <div className="mb-6">
              <Marquee
                speed={40}
                direction="right"
                gradient={true}
                gradientColor={[248, 250, 252]}
                gradientWidth={100}
              >
                <div className="flex gap-6 mr-6">
                  <div className="relative w-80 h-60 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src="/Scrolling Photos/IMG_3507.JPG"
                      alt="CoEB Team Collaboration"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-semibold">
                        Team Collaboration
                      </h4>
                      <p className="text-sm opacity-90">Research Excellence</p>
                    </div>
                  </div>

                  <div className="relative w-80 h-60 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src="/Scrolling Photos/IMG_6216.JPG"
                      alt="CoEB Infrastructure"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-semibold">
                        World-Class Infrastructure
                      </h4>
                      <p className="text-sm opacity-90">
                        State-of-the-art Facilities
                      </p>
                    </div>
                  </div>

                  <div className="relative w-80 h-60 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src="/Scrolling Photos/IMG_6592.JPG"
                      alt="CoEB Research Activities"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-semibold">
                        Research Activities
                      </h4>
                      <p className="text-sm opacity-90">
                        Innovation in Progress
                      </p>
                    </div>
                  </div>

                  <div className="relative w-80 h-60 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src="/Scrolling Photos/Tree Planting.JPG"
                      alt="CoEB Sustainability Initiative"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-semibold">
                        Sustainability Initiative
                      </h4>
                      <p className="text-sm opacity-90">
                        Tree Planting Program
                      </p>
                    </div>
                  </div>
                </div>
              </Marquee>
            </div>

            {/* Video Section */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Featured Video
              </h3>
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                <video
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto"
                  poster="/logo.png"
                >
                  <source
                    src="/Scrolling Photos/WhatsApp Video 2024-01-29 at 1.44.20 PM.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">
                    CoEB Research & Innovation Showcase
                  </h4>
                  <p className="text-gray-600">
                    Take a virtual tour of our Centre of Excellence in
                    Biotechnology and witness our commitment to advancing
                    agricultural biotechnology through cutting-edge research and
                    innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vision and Goals */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-8 rounded-2xl shadow-xl border border-blue-100/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To develop high-end laboratories, biobased products through
                public-private partnership and quality human resource in the
                biotech sector.
              </p>
            </div>

            <div className="bg-gradient-to-br from-white via-indigo-50 to-purple-50 p-8 rounded-2xl shadow-xl border border-indigo-100/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Our Goals
              </h3>
              <ul className="text-gray-700 space-y-2">
                <li>
                  • Position Tamil Nadu as a leader on the global biotechnology
                  map
                </li>
                <li>
                  • Foster investment and innovation in the biotechnology sector
                </li>
                <li>
                  • Provide enabling environment and world class infrastructure
                </li>
              </ul>
            </div>
          </div>

          {/* CoE Services Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 p-8 mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8 text-center">
              CoE in Biotechnology Services
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Infrastructure Services */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    🏗️
                  </span>
                  Infrastructure Services (Charge Basis)
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>Proteomic and
                    metabolomic analytical facility
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>Molecular
                    Biology labs
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>Tissue culture
                    facility
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>Bioinformatics
                    server facilities
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>Cold room
                    facilities
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>Infrastructure
                    facilities – Knowledge/Cabin space
                  </li>
                </ul>
              </div>

              {/* Professional Services */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                    💼
                  </span>
                  Professional Services
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-indigo-500 mr-2">•</span>Mentoring
                    support/Knowledge sharing for PPP
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500 mr-2">•</span>
                    Investor/Industry Connect
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500 mr-2">•</span>IPR Services
                  </li>
                  <li className="flex items-center">
                    <span className="text-indigo-500 mr-2">•</span>Training and
                    Development
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  🏢
                </span>
                Common Facilities
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>Conference
                    hall
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-500 mr-2">•</span>Board room
                    utilization
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Equipment Section */}
          <div className="bg-gradient-to-br from-white via-purple-50 to-pink-50 p-8 rounded-2xl shadow-xl border border-purple-100/50 backdrop-blur-sm mb-16">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
              <span className="text-white text-2xl">🔬</span>
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              High-End Research Equipment
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              High throughput Platform for Proteomics and Metabolomics featuring
              state-of-the-art equipment:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">•</span>Preparative
                  HPLC System
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">•</span>UHPLC system
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">•</span>Nano LC System
                </li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">•</span>MALDI TOF/TOF
                  Mass Spectrometer
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">•</span>LCMS-8045
                  Triple Quadrupole Mass Spectrometer
                </li>
                <li className="flex items-center">
                  <span className="text-purple-500 mr-2">•</span>GCMS TQ-8040 NX
                  Triple Quadrupole Mass Spectrometer
                </li>
              </ul>
            </div>
          </div>

          {/* Activities and Benefits */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Activities */}
            <div className="bg-gradient-to-br from-white via-green-50 to-emerald-50 p-8 rounded-2xl shadow-xl border border-green-100/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
                Activities
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>Nurturing
                  technology-oriented entrepreneurs and start-up firms
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>Bioproduct
                  development and facilitating certification services
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>Nurturing
                  young talents through skill development programmes
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>Resource
                  mobilization and support research systematically
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">•</span>Knowledge
                  dissemination about bioproducts to farming community
                </li>
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-white via-orange-50 to-red-50 p-8 rounded-2xl shadow-xl border border-orange-100/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🌟</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-4">
                Benefits of CoEB
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">•</span>
                  Development of novel biobased agri-inputs for farmers
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">•</span>Human
                  resource development through training programs
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">•</span>Analytical
                  facility access for students and researchers
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2 mt-1">•</span>
                  Large-scale agrotechnology transfer to farmers
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media Promotion Section */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 p-8 mb-16">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8 text-center">
              Connect With Us on Social Media
            </h3>
            <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Stay updated with our latest research, innovations, and
              biotechnology breakthroughs. Follow us on social media for
              real-time updates and insights.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Facebook QR */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📘</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Facebook
                </h4>
                <div className="bg-white rounded-lg p-4 mb-4 inline-block shadow-md">
                  <Image
                    src="/QR Code - CoEB/QR - FB - CoEB.png"
                    alt="Facebook QR Code - CoEB"
                    width={150}
                    height={150}
                    className="mx-auto"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  Scan to follow our Facebook page for updates, events, and
                  research highlights
                </p>
              </div>

              {/* Instagram QR */}
              <div className="bg-gradient-to-br from-pink-50 to-purple-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📷</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  Instagram
                </h4>
                <div className="bg-white rounded-lg p-4 mb-4 inline-block shadow-md">
                  <Image
                    src="/QR Code - CoEB/QR - Insta - CoEB.jpeg"
                    alt="Instagram QR Code - CoEB"
                    width={150}
                    height={150}
                    className="mx-auto"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  Follow us on Instagram for behind-the-scenes content and
                  visual updates
                </p>
              </div>

              {/* LinkedIn QR */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💼</span>
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  LinkedIn
                </h4>
                <div className="bg-white rounded-lg p-4 mb-4 inline-block shadow-md">
                  <Image
                    src="/QR Code - CoEB/QR - Linkedin - CoEB.png"
                    alt="LinkedIn QR Code - CoEB"
                    width={150}
                    height={150}
                    className="mx-auto"
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  Connect with us professionally for research collaborations and
                  opportunities
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                <strong>How to use:</strong> Simply point your smartphone camera
                at any QR code above to instantly access our social media
                profiles.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  #Biotechnology
                </span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  #Research
                </span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                  #Innovation
                </span>
                <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                  #Agriculture
                </span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-gray-800 via-blue-900 to-indigo-900 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Contact Information
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-blue-300">
                  Address
                </h4>
                <p className="leading-relaxed">
                  Biotech Council for Establishment of Centre of Excellence in
                  Biotechnology
                  <br />
                  Tamil Nadu Agricultural University
                  <br />
                  Coimbatore – 641 003, Tamil Nadu, India
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3 text-blue-300">
                  Contact Details
                </h4>
                <div className="space-y-2">
                  <p>
                    <strong>Phone:</strong> +91 94890 56706 / +91 88702 81435 /
                    +91 73735 09696
                  </p>
                  <p>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:coebiotech@tnau.ac.in"
                      className="text-blue-300 hover:text-blue-200"
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
    </div>
  );
}

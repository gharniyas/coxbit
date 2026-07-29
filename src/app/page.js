"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Banner Section with Background Image */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/building/IMG_5188.JPG"
            alt="COXBIT Main Building"
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
              <button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl backdrop-blur-sm"
                onClick={() => router.push("/facilities")}
              >
                Explore Services
              </button>
              <button
                className="bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold text-lg border border-white/30 hover:bg-white/30 transform hover:scale-105 transition-all duration-300 shadow-xl"
                onClick={() => router.push("/about")}
              >
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
              About COXBIT
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-center">
              COXBIT is a Public–Private Partnership initiative at Tamil Nadu
              Agricultural University that bridges academia, industry and
              startups &mdash; offering state-of-the-art labs, advanced
              instrumentation and end-to-end support to turn biotechnology
              research into real-world, market-ready solutions.
            </p>
            <div className="mt-8 text-center">
              <button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
                onClick={() => router.push("/about")}
              >
                Read More About Us
              </button>
            </div>
          </div>

          {/* Vision and Goals */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 p-8 rounded-2xl shadow-xl border border-blue-100/50 backdrop-blur-sm">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                Vision
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
                Goals
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

          {/* Explore COXBIT Section - condensed links mirroring the header submenus */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-8 text-center">
              Explore COXBIT
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 text-2xl">
                  🧬
                </div>
                <h3
                  className="text-lg font-semibold text-gray-800 mb-2 cursor-pointer hover:text-blue-600"
                  onClick={() => router.push("/about")}
                >
                  About
                </h3>
                <p className="text-gray-600 text-sm">
                  Our mission, vision and journey as a PPP centre of excellence.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4 text-2xl">
                  🏢
                </div>
                <h3
                  className="text-lg font-semibold text-gray-800 mb-2 cursor-pointer hover:text-blue-600"
                  onClick={() => router.push("/facilities")}
                >
                  Facilities
                </h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>
                    <a href="/facilities/sals" className="hover:text-blue-600">
                      • SALS - Shared Access Lab Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/facilities/entrepreneurship"
                      className="hover:text-blue-600"
                    >
                      • Technology Driven Entrepreneurship
                    </a>
                  </li>
                  <li>
                    <a
                      href="/facilities/serviceoffered"
                      className="hover:text-blue-600"
                    >
                      • Services Offered
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 text-2xl">
                  🔬
                </div>
                <h3
                  className="text-lg font-semibold text-gray-800 mb-2 cursor-pointer hover:text-blue-600"
                  onClick={() => router.push("/projects")}
                >
                  Projects
                </h3>
                <p className="text-gray-600 text-sm">
                  Research projects and initiatives underway at COXBIT.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4 text-2xl">
                  🤝
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Startup Ecosystem
                </h3>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>
                    <a
                      href="/startup-ecosystem/partners"
                      className="hover:text-blue-600"
                    >
                      • Partners
                    </a>
                  </li>
                  <li>
                    <a
                      href="/startup-ecosystem/startup-opportunities"
                      className="hover:text-blue-600"
                    >
                      • Startup Opportunities
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 text-2xl">
                  📅
                </div>
                <h3
                  className="text-lg font-semibold text-gray-800 mb-2 cursor-pointer hover:text-blue-600"
                  onClick={() => router.push("/events-news")}
                >
                  Event & Training
                </h3>
                <p className="text-gray-600 text-sm">
                  Upcoming events, workshops and training programmes.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 p-6 hover:shadow-2xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4 text-2xl">
                  ✉️
                </div>
                <h3
                  className="text-lg font-semibold text-gray-800 mb-2 cursor-pointer hover:text-blue-600"
                  onClick={() => router.push("/contact")}
                >
                  Contact Us
                </h3>
                <p className="text-gray-600 text-sm">
                  Get in touch with the COXBIT team.
                </p>
              </div>
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
                    alt="Facebook QR Code - COXBIT"
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
                    alt="Instagram QR Code - COXBIT"
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
                    alt="LinkedIn QR Code - COXBIT"
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
                  Centre of Excellence in Biotechnology
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
                    <strong>Phone:</strong> +91 94870 01028 / +91 88702 81435 /
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

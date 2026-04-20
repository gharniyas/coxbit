"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function Facilities() {
  // Main facility sections with photos
  const facilityAreas = [
    {
      id: 1,
      title: "Centre of Excellence Building",
      description:
        "Modern infrastructure housing all COXBIT facilities under one roof at TNAU Coimbatore",
      image: "/Facility Photos/CoEB building.jpg",
      altImage: "/Facility Photos/CoEB building photo.JPG",
      features: [
        "Single integrated building",
        "Multiple specialized labs",
        "Research & innovation hub",
        "Modern amenities",
      ],
      stats: {
        area: "World-class infrastructure",
        established: "August 16, 2018",
      },
    },
    {
      id: 2,
      title: "Molecular Biology Laboratory",
      description:
        "Advanced molecular biology research facility equipped with cutting-edge instrumentation",
      image: "/Facility Photos/Molecularbiology lab.jpg",
      features: [
        "PCR systems",
        "Gel electrophoresis",
        "Centrifuges",
        "Incubators",
        "Microscopy equipment",
      ],
      stats: { equipment: "20+ instruments", capacity: "Multiple researchers" },
    },
    {
      id: 3,
      title: "Tissue Culture Facility",
      description:
        "Sterile environment for plant tissue culture and micropropagation research",
      image: "/Facility Photos/Tissue culture facility.jpg",
      features: [
        "Laminar flow hoods",
        "Growth chambers",
        "Autoclave systems",
        "Culture media preparation",
      ],
      stats: { environment: "Sterile conditions", capacity: "High-throughput" },
    },
    {
      id: 4,
      title: "Cold Storage Room",
      description:
        "Temperature-controlled storage for samples, reagents, and biological materials",
      image: "/Facility Photos/Cold Room.jpg",
      features: [
        "Multiple temperature zones",
        "Sample preservation",
        "Reagent storage",
        "Backup systems",
      ],
      stats: { temperature: "-80°C to +4°C", capacity: "Large storage" },
    },
    {
      id: 5,
      title: "Bioinformatics Server Room",
      description:
        "High-performance computing infrastructure for genomics and bioinformatics analysis",
      image: "/Facility Photos/Bioinformatics - Server Room.jpg",
      features: [
        "High-performance servers",
        "Data storage systems",
        "Network infrastructure",
        "Climate control",
      ],
      stats: { processing: "High-performance", storage: "Multi-terabyte" },
    },
    {
      id: 6,
      title: "Board Room",
      description:
        "Professional meeting space for conferences, presentations, and strategic discussions",
      image: "/Facility Photos/Board Room.jpg",
      features: [
        "Video conferencing",
        "Presentation systems",
        "Professional seating",
        "Modern amenities",
      ],
      stats: { capacity: "20+ people", equipment: "A/V systems" },
    },
  ];

  // Workspace and common areas
  const workspaceAreas = [
    {
      title: "Cabin Spaces",
      description:
        "Private office spaces for researchers and administrative staff",
      image: "/Facility Photos/Cabin Space.jpg",
      features: [
        "Individual workstations",
        "Private offices",
        "Research spaces",
      ],
    },
    {
      title: "General Work Space",
      description:
        "Collaborative work areas for team projects and general activities",
      image: "/Facility Photos/Work space.jpg",
      features: [
        "Open collaboration areas",
        "Flexible seating",
        "Modern furniture",
      ],
    },
    {
      title: "Exhibition Hall",
      description:
        "Display area for research outputs, achievements, and institutional activities",
      image: "/Facility Photos/Exhibition Hall.JPG",
      features: ["Display systems", "Event hosting", "Presentation area"],
    },
  ];

  // Floor spaces
  const floorSpaces = [
    {
      image: "/Facility Photos/Floor Space (2).JPG",
      title: "Research Floor Area",
    },
    {
      image: "/Facility Photos/Floor Space (3).JPG",
      title: "Laboratory Floor Space",
    },
    {
      image: "/Facility Photos/Floor Space (4).JPG",
      title: "Common Area Floor",
    },
  ];

  // Fee schedule data
  const feeSchedule = [
    {
      facility: "Proteomic and metabolomic analytical facility",
      charge: "Charge basis",
    },
    { facility: "Molecular Biology labs", charge: "Charge basis" },
    { facility: "Tissue culture facility", charge: "Charge basis" },
    { facility: "Bioinformatics server facilities", charge: "Charge basis" },
    { facility: "Cold room facilities", charge: "Charge basis" },
    {
      facility: "Infrastructure facilities – Knowledge/Cabin space",
      charge: "Charge basis",
    },
    { facility: "Conference hall", charge: "Charge basis" },
  ];

  // Analytical charges
  const analyticalCharges = [
    {
      sl: 1,
      service: "GC-MS Volatile profiling + Data acquisition",
      unit: "Per sample",
      tnau: { unit: 1694.92, gst: 305.08, total: 2000 },
      academic: { unit: 2500, gst: 450, total: 2950 },
      industry: { unit: 3000, gst: 540, total: 3540 },
    },
    {
      sl: 2,
      service: "GC-MS metabolite profiling + Data acquisition",
      unit: "Per sample",
      tnau: { unit: 2542.37, gst: 457.63, total: 3000 },
      academic: { unit: 3750, gst: 675, total: 4425 },
      industry: { unit: 4500, gst: 810, total: 5310 },
    },
    {
      sl: 3,
      service: "LC-MS/MS",
      unit: "Per sample",
      tnau: { unit: 2542.37, gst: 457.63, total: 3000 },
      academic: { unit: 4000, gst: 720, total: 4720 },
      industry: { unit: 5000, gst: 900, total: 5900 },
    },
    {
      sl: 4,
      service: "HPLC (Standard+1 Sample)",
      unit: "Per sample",
      tnau: { unit: 1694.92, gst: 305.08, total: 2000 },
      academic: { unit: 2500, gst: 450, total: 2950 },
      industry: { unit: 3000, gst: 540, total: 3540 },
    },
    {
      sl: 5,
      service: "MALDI-TOFF",
      unit: "Per Run",
      tnau: { unit: 1694.92, gst: 305.08, total: 2000 },
      academic: { unit: 3000, gst: 540, total: 3540 },
      industry: { unit: 4000, gst: 720, total: 4720 },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Our Facilities
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore the state-of-the-art infrastructure at the Centre of
            Excellence in Biotechnology, featuring world-class laboratories,
            research facilities, and collaborative spaces.
          </p>
        </div>

        {/* Main Building Overview */}
        <section className="mb-20">
          <div className="relative h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl">
            <Image
              src="/Facility Photos/CoEB building.jpg"
              alt="Centre of Excellence in Biotechnology Building"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h2 className="text-3xl font-bold mb-2">
                Centre of Excellence in Biotechnology
              </h2>
              <p className="text-lg">
                Tamil Nadu Agricultural University, Coimbatore
              </p>
            </div>
          </div>
        </section>

        {/* Boardroom Video Section */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Boardroom Facility Tour
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take a virtual tour of our state-of-the-art boardroom facility,
              designed for professional meetings, conferences, and
              presentations.
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
              <source src="/video/boardroom.MP4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* DAVRES CoEB Video Section */}
        <section className="mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              DAVRES CoEB Facility Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A comprehensive overview of the DAVRES Centre of Excellence in Biotechnology facilities and research capabilities.
            </p>
          </div>
          <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
            <video
              className="w-full h-auto"
              muted
              loop
              playsInline
              controls
            >
              <source src="/video/davrescoxbit.mov" type="video/quicktime" />
              <source src="/video/davrescoxbit.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        {/* Cabin Images Horizontal Marquee */}
        <section className="mb-20">
          <Marquee speed={50} gradient={true} gradientColor={[248, 250, 252]} gradientWidth={80}>
            {[
              "/cabin/IMG_1565.JPG",
              "/cabin/IMG_1573.JPG",
              "/cabin/IMG_1612.JPG",
              "/cabin/IMG_1617.JPG",
              "/cabin/IMG_1626.JPG",
              "/cabin/IMG_1632.JPG",
              "/cabin/IMG_1637.JPG",
              "/cabin/IMG_1643.JPG",
              "/cabin/IMG_1650.JPG",
              "/cabin/IMG_1660.JPG",
              "/cabin/IMG_5353.JPG",
              "/cabin/IMG_5332.JPG",
              "/cabin/IMG_5321.JPG",
              "/cabin/IMG_5311.JPG",
              "/cabin/IMG_5303.JPG",
              "/cabin/IMG_5292.JPG",
              "/cabin/IMG_5286.JPG",
              "/cabin/IMG_5282.JPG",
              "/cabin/IMG_5263.JPG",
              "/cabin/IMG_5261.JPG",
              "/cabin/IMG_5249.JPG",
              "/cabin/IMG_5234.JPG",
              "/cabin/IMG_5220.JPG",
              "/cabin/IMG_5214.JPG",
            ].map((src, i) => (
              <div key={i} className="mx-3">
                <Image
                  src={src}
                  alt="Cabin"
                  width={280}
                  height={200}
                  className="rounded-xl object-cover shadow-lg"
                  style={{ height: "200px", width: "280px" }}
                />
              </div>
            ))}
          </Marquee>
        </section>

        {/* Main Facility Areas */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Research & Laboratory Facilities
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {facilityAreas.map((facility) => (
              <div
                key={facility.id}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-64">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{facility.title}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {facility.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    {Object.entries(facility.stats).map(([key, value]) => (
                      <div
                        key={key}
                        className="text-center p-3 bg-blue-50 rounded-lg"
                      >
                        <div className="text-sm text-blue-600 font-medium capitalize">
                          {key}
                        </div>
                        <div className="text-blue-900 font-semibold">
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 gap-1">
                      {facility.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <span className="text-blue-500 mr-2">•</span>
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Workspace Areas */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Workspace & Common Areas
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {workspaceAreas.map((workspace, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={workspace.image}
                    alt={workspace.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {workspace.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{workspace.description}</p>
                  <ul className="space-y-1">
                    {workspace.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Floor Spaces Gallery */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Floor Spaces & Infrastructure
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {floorSpaces.map((space, index) => (
              <div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={space.image}
                  alt={space.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">{space.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Analytical Services Charges */}
        <section className="mb-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Analytical Charges for Proteomics &amp; Metabolomics
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-400 px-3 py-2 text-center" rowSpan={2}>Sl. No</th>
                    <th className="border border-gray-400 px-3 py-2 text-center" rowSpan={2}>Analysis / Service</th>
                    <th className="border border-gray-400 px-3 py-2 text-center" rowSpan={2}>Unit</th>
                    <th className="border border-gray-400 px-3 py-2 text-center" colSpan={3}>For TNAU</th>
                    <th className="border border-gray-400 px-3 py-2 text-center" colSpan={3}>Other Academic Institutions</th>
                    <th className="border border-gray-400 px-3 py-2 text-center" colSpan={3}>Industries / Private</th>
                  </tr>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-400 px-3 py-2 text-center">Unit cost</th>
                    <th className="border border-gray-400 px-3 py-2 text-center">GST (18%)</th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-bold">Total</th>
                    <th className="border border-gray-400 px-3 py-2 text-center">Unit cost</th>
                    <th className="border border-gray-400 px-3 py-2 text-center">GST (18%)</th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-bold">Total</th>
                    <th className="border border-gray-400 px-3 py-2 text-center">Unit cost</th>
                    <th className="border border-gray-400 px-3 py-2 text-center">GST (18%)</th>
                    <th className="border border-gray-400 px-3 py-2 text-center font-bold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {analyticalCharges.map((row) => (
                    <tr key={row.sl} className="hover:bg-blue-50">
                      <td className="border border-gray-400 px-3 py-2 text-center">{row.sl}</td>
                      <td className="border border-gray-400 px-3 py-2 font-medium">{row.service}</td>
                      <td className="border border-gray-400 px-3 py-2 text-center">{row.unit}</td>
                      <td className="border border-gray-400 px-3 py-2 text-center">{row.tnau.unit}</td>
                      <td className="border border-gray-400 px-3 py-2 text-center">{row.tnau.gst}</td>
                      <td className="border border-gray-400 px-3 py-2 text-center font-bold">{row.tnau.total}</td>
                      <td className="border border-gray-400 px-3 py-2 text-center">{row.academic.unit}</td>
                      <td className="border border-gray-400 px-3 py-2 text-center">{row.academic.gst}</td>
                      <td className="border border-gray-400 px-3 py-2 text-center font-bold">{row.academic.total}</td>
                      <td className="border border-gray-400 px-3 py-2 text-center">{row.industry.unit}</td>
                      <td className="border border-gray-400 px-3 py-2 text-center">{row.industry.gst}</td>
                      <td className="border border-gray-400 px-3 py-2 text-center font-bold">{row.industry.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Contact for Facility Access */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Access Our Facilities?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Contact us to schedule facility visits, equipment usage, or discuss
            collaboration opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Contact Us
            </a>
            <a
              href="tel:+917373509696"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Call: +91 73735 09696
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

"use client";
import React, { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  MdInfo,
  MdLightbulb,
  MdTrackChanges,
  MdPeople,
} from "react-icons/md";
import CoxbitTeam from "@/components/CoxbitTeam";
import TabNavigation from "../components/TabNavigation";
import ImageCarousel from "../components/ImageCarousel";

const bannerImages = [
  "/About coxbit/1.jpg",
  "/About coxbit/2.jpg",
  "/About coxbit/About COXBIT.jpg",
  "/About coxbit/IMG_1386.JPG",
  "/About coxbit/IMG_3396.JPG",
  "/About coxbit/IMG_3500.JPG",
  "/About coxbit/IMG_3507.JPG",
  "/About coxbit/IMG_6216.JPG",
  "/About coxbit/IMG_6592.JPG",
  "/About coxbit/Tree Planting.JPG",
];

function AboutContent() {
  const searchParams = useSearchParams();
  const tabParam = parseInt(searchParams.get("tab"), 10);
  const initialTab = tabParam >= 0 && tabParam <= 3 ? tabParam : 0;
  const [activeTab, setActiveTab] = useState(initialTab);

  const tabs = [
    { label: "About COXBIT", icon: <MdInfo size={20} /> },
    { label: "Why COXBIT", icon: <MdLightbulb size={20} /> },
    { label: "Key Focus Areas", icon: <MdTrackChanges size={20} /> },
    { label: "COXBIT Team", icon: <MdPeople size={20} /> },
  ];

  const focusAreas = [
    { title: "Research to Product", desc: "Translating research into market-ready biotech products", icon: "🧬" },
    { title: "Startup Support", desc: "Supporting startups through incubation, mentoring, and infrastructure", icon: "🚀" },
    { title: "Funding Access", desc: "Facilitating access to government funding and startup schemes", icon: "💰" },
    { title: "Industry Collaboration", desc: "Strengthening industry–academia collaboration", icon: "🤝" },
    { title: "Skill Development", desc: "Building skilled human resources through training", icon: "🎓" },
    { title: "Advanced Labs", desc: "Providing advanced analytical and research facilities", icon: "🔬" },
    { title: "Bioinformatics", desc: "Leveraging computational tools and data analysis for biological research", icon: "🧫" },
    { title: "Food Processing", desc: "Advancing technologies and techniques for modern food processing", icon: "🌾" },
    { title: "AI in Agri", desc: "Applying AI-driven solutions to enhance agricultural practices", icon: "🤖" },
  ];

  return (
    <div className="min-h-screen bg-amber-100/60">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            Centre of Excellence in Biotechnology
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            About COXBIT
          </h1>
          <p className="text-amber-100 mt-3 max-w-2xl leading-relaxed">
            Our mission, vision, key focus areas and the team driving the
            Centre of Excellence in Biotechnology forward.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm p-6 md:p-8">
          {/* About COXBIT */}
          {activeTab === 0 && (
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#6b4226]">About COXBIT</h2>
                <div className="w-16 h-1 bg-[#c89b3c] mt-3 mb-4" />
              </div>
              <ImageCarousel alt="COXBIT" images={bannerImages} />
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  The Centre of Excellence in Biotechnology (COXBIT) is a pioneering initiative established at Tamil Nadu Agricultural University (TNAU) with the support of the Government of Tamil Nadu. Operating under a <strong>Public–Private Partnership (PPP)</strong> mode, COXBIT serves as a dynamic platform to foster innovation, accelerate biotechnology research and translate scientific discoveries into scalable, real-world solutions.
                </p>
                <p>
                  COXBIT is designed to bridge the gap between academia, industry and startups, creating a collaborative ecosystem that nurtures innovation from concept to commercialization. With access to state-of-the-art laboratories, advanced instrumentation and domain expertise and technology-driven entrepreneurship infrastructure, including dedicated cabin and floor spaces, the centre empowers researchers, entrepreneurs and enterprises to develop cutting-edge technologies and high-impact biobased products.
                </p>
                <p>
                  The centre focuses on advancing biomolecules, high-performance enzymes, plant growth stimulants, sustainable agricultural bio-inputs, biopharmaceuticals, functional foods and nutraceuticals, while enabling technologies that enhance crop productivity, improve post-harvest management and support climate-resilient agriculture.
                </p>
                <p>
                  COXBIT provides <strong>end-to-end support</strong> including product development, incubation support, technology validation, industry collaboration and market linkage, helping innovators transform ideas into impactful solutions. By integrating science, innovation and entrepreneurship, the centre is driving a new era of biotechnology-led transformation in agriculture and allied sectors.
                </p>
              </div>
            </div>
          )}

          {/* Why COXBIT */}
          {activeTab === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#6b4226]">Why COXBIT</h2>
                <div className="w-16 h-1 bg-[#c89b3c] mt-3 mb-4" />
              </div>
              <ImageCarousel
                alt="MoA"
                images={["/MoA/IMG_3485.JPG", "/MoA/IMG_9481.JPG", "/MoA/IMG_9487.JPG", "/MoA/IMG_9748.JPG"]}
              />
              <p className="text-gray-700 leading-relaxed mb-6">
                At COXBIT, we emphasize four core transformations that innovators and startups undergo during their journey. These transformations are designed to ensure that early-stage ideas evolve into scalable, impactful and market-ready biotechnology solutions.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: "🔬", text: "Transforming Proof-of-Concepts into Market-Ready Biotech Products through Advanced Technical Validation and Infrastructure Support" },
                  { icon: "🚀", text: "Shaping Early-Stage Ideas into Viable Enterprises through Strategic Mentoring, Capacity Building, and Technology-Driven Entrepreneurship Support" },
                  { icon: "👥", text: "Strengthening Human Capital through Capacity Building Programs, Skill Development and Hands-on Training in Advanced Biotechnology" },
                  { icon: "💼", text: "Evolving Innovative Biotech Solutions into Investment-Ready Ventures through Industry Linkages, Market Access and Investor Connect" },
                  { icon: "💰", text: "Enabling access to Government startup funding through scheme linkages, proposal support and guidance on funding opportunities" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm">
                    <span className="text-3xl flex-shrink-0">{item.icon}</span>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Focus Areas */}
          {activeTab === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-[#6b4226]">Key Focus Areas</h2>
                <div className="w-16 h-1 bg-[#c89b3c] mt-3 mb-4" />
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {focusAreas.map((area, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-200 p-6"
                  >
                    <div className="text-4xl mb-3">{area.icon}</div>
                    <h3 className="font-serif text-lg font-bold text-[#6b4226] mb-2">{area.title}</h3>
                    <p className="text-gray-600 text-sm">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* COXBIT Team */}
          {activeTab === 3 && <CoxbitTeam />}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <Suspense fallback={null}>
      <AboutContent />
    </Suspense>
  );
}

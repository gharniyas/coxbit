"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  MdInfo,
  MdLightbulb,
  MdTrackChanges,
  MdPeople,
} from "react-icons/md";
import CoxbitTeam from "@/components/CoxbitTeam";
import TabNavigation from "../components/TabNavigation";

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

export default function About() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentBanner(prev => (prev + 1) % bannerImages.length), 3500);
    return () => clearInterval(timer);
  }, []);

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
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 p-6 md:p-8">
          {/* About COXBIT */}
          {activeTab === 0 && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About COXBIT</h2>
              <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-lg mb-6">
                {bannerImages.map((src, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 transition-opacity duration-700"
                    style={{ opacity: i === currentBanner ? 1 : 0 }}
                  >
                    <Image src={src} alt="COXBIT" fill className="object-cover" />
                  </div>
                ))}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {bannerImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentBanner(i)}
                      className={`h-2 rounded-full transition-all ${i === currentBanner ? "bg-white w-4" : "bg-white/50 w-2"}`}
                    />
                  ))}
                </div>
              </div>
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why COXBIT</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {["/MoA/IMG_3485.JPG", "/MoA/IMG_9481.JPG", "/MoA/IMG_9487.JPG", "/MoA/IMG_9748.JPG"].map((src, i) => (
                  <div key={i} className="relative h-36 rounded-xl overflow-hidden shadow">
                    <Image src={src} alt="MoA" fill className="object-cover" />
                  </div>
                ))}
              </div>
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
                  <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
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
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Focus Areas</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {focusAreas.map((area, i) => (
                  <div
                    key={i}
                    className={`bg-gradient-to-br rounded-xl p-6 border hover:shadow-lg transition-shadow ${
                      i === 0 ? "from-blue-50 to-indigo-100 border-blue-200"
                      : i === 1 ? "from-purple-50 to-pink-100 border-purple-200"
                      : i === 2 ? "from-amber-50 to-orange-100 border-amber-200"
                      : i === 3 ? "from-emerald-50 to-green-100 border-emerald-200"
                      : i === 4 ? "from-cyan-50 to-blue-100 border-cyan-200"
                      : "from-rose-50 to-red-100 border-rose-200"
                    }`}
                  >
                    <div className="text-4xl mb-3">{area.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{area.title}</h3>
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

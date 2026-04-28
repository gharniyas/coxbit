"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  MdInfo,
  MdLightbulb,
  MdTrackChanges,
  MdScience,
  MdDescription,
  MdHandshake,
  MdPeople,
} from "react-icons/md";
import CoxbitTeam from "@/components/CoxbitTeam";

export default function About() {
  const [activeTab, setActiveTab] = useState("about");
  const [expandedFacility, setExpandedFacility] = useState(null);

  const tabs = [
    { id: "about", label: "About COXBIT", icon: <MdInfo size={20} /> },
    { id: "why", label: "Why COXBIT", icon: <MdLightbulb size={20} /> },
    {
      id: "focus",
      label: "Key Focus Areas",
      icon: <MdTrackChanges size={20} />,
    },
    { id: "team", label: "COXBIT Team", icon: <MdPeople size={20} /> },
  ];

  const focusAreas = [
    {
      title: "Research to Product",
      desc: "Translating research into market-ready biotech products",
      icon: "🧬",
    },
    {
      title: "Startup Support",
      desc: "Supporting startups through incubation, mentoring, and infrastructure",
      icon: "🚀",
    },
    {
      title: "Funding Access",
      desc: "Facilitating access to government funding and startup schemes",
      icon: "💰",
    },
    {
      title: "Industry Collaboration",
      desc: "Strengthening industry–academia collaboration",
      icon: "🤝",
    },
    {
      title: "Skill Development",
      desc: "Building skilled human resources through training",
      icon: "🎓",
    },
    {
      title: "Advanced Labs",
      desc: "Providing advanced analytical and research facilities",
      icon: "🔬",
    },
  ];







  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Centre of Excellence in Biotechnology
          </h1>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 mb-6 overflow-x-auto">
          <div className="flex min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-4 font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 border-b-4 whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-indigo-600 text-indigo-600 bg-indigo-100"
                    : "border-transparent text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 p-6 md:p-8">
          {/* About COXBIT */}
          {activeTab === "about" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                About COXBIT
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                <p>
                  The Centre of Excellence in Biotechnology (COXBIT) is a
                  pioneering initiative established at Tamil Nadu Agricultural
                  University (TNAU) with the support of the Government of Tamil
                  Nadu. Operating under a{" "}
                  <strong>Public–Private Partnership (PPP)</strong> mode, COXBIT
                  serves as a dynamic platform to foster innovation, accelerate
                  biotechnology research and translate scientific discoveries
                  into scalable, real-world solutions.
                </p>
                <p>
                  COXBIT is designed to bridge the gap between academia,
                  industry and startups, creating a collaborative ecosystem that
                  nurtures innovation from concept to commercialization. With
                  access to state-of-the-art laboratories, advanced
                  instrumentation and domain expertise and technology-driven
                  entrepreneurship infrastructure, including dedicated cabin and
                  floor spaces, the centre empowers researchers, entrepreneurs
                  and enterprises to develop cutting-edge technologies and
                  high-impact biobased products.
                </p>
                <p>
                  The centre focuses on advancing biomolecules, high-performance
                  enzymes, plant growth stimulants, sustainable agricultural
                  bio-inputs, biopharmaceuticals, functional foods and
                  nutraceuticals, while enabling technologies that enhance crop
                  productivity, improve post-harvest management and support
                  climate-resilient agriculture.
                </p>
                <p>
                  COXBIT provides <strong>end-to-end support</strong> including
                  product development, incubation support, technology
                  validation, industry collaboration and market linkage, helping
                  innovators transform ideas into impactful solutions. By
                  integrating science, innovation and entrepreneurship, the
                  centre is driving a new era of biotechnology-led
                  transformation in agriculture and allied sectors.
                </p>
              </div>
            </div>
          )}

          {/* Why COXBIT */}
          {activeTab === "why" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why COXBIT
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                At COXBIT, we emphasize four core transformations that
                innovators and startups undergo during their journey. These
                transformations are designed to ensure that early-stage ideas
                evolve into scalable, impactful and market-ready biotechnology
                solutions.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: "🔬",
                    text: "Transforming Proof-of-Concepts into Market-Ready Biotech Products through Advanced Technical Validation and Infrastructure Support",
                  },
                  {
                    icon: "🚀",
                    text: "Shaping Early-Stage Ideas into Viable Enterprises through Strategic Mentoring, Capacity Building, and Technology-Driven Entrepreneurship Support",
                  },
                  {
                    icon: "👥",
                    text: "Strengthening Human Capital through Capacity Building Programs, Skill Development and Hands-on Training in Advanced Biotechnology",
                  },
                  {
                    icon: "💼",
                    text: "Evolving Innovative Biotech Solutions into Investment-Ready Ventures through Industry Linkages, Market Access and Investor Connect",
                  },
                  {
                    icon: "💰",
                    text: "Enabling access to Government startup funding through scheme linkages, proposal support and guidance on funding opportunities",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-100"
                  >
                    <span className="text-3xl flex-shrink-0">{item.icon}</span>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Focus Areas */}
          {activeTab === "focus" && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Key Focus Areas
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {focusAreas.map((area, i) => (
                  <div
                    key={i}
                    className={`bg-gradient-to-br rounded-xl p-6 border hover:shadow-lg transition-shadow ${
                      i === 0 ? 'from-blue-50 to-indigo-100 border-blue-200' :
                      i === 1 ? 'from-purple-50 to-pink-100 border-purple-200' :
                      i === 2 ? 'from-amber-50 to-orange-100 border-amber-200' :
                      i === 3 ? 'from-emerald-50 to-green-100 border-emerald-200' :
                      i === 4 ? 'from-cyan-50 to-blue-100 border-cyan-200' :
                      'from-rose-50 to-red-100 border-rose-200'
                    }`}
                  >
                    <div className="text-4xl mb-3">{area.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{area.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* COXBIT Team */}
          {activeTab === "team" && <CoxbitTeam />}
        </div>

        {/* Contact CTA */}
        <div className="mt-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-3">
            Ready to Innovate with COXBIT?
          </h2>
          <p className="mb-6 opacity-90">
            Whether it's developing a novel biotech solution, scaling a startup
            or enabling industry-ready technologies, COXBIT stands as a catalyst
            for innovation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

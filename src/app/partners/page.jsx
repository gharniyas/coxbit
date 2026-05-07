"use client";
import React, { useState } from "react";

const tabs = [
  {
    label: "Startup TN",
    content: (
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Tamil Nadu Startup and Innovation Mission (StartupTN)
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            The StartupTN is the Government of Tamil Nadu's dedicated initiative
            to build and strengthen a dynamic and inclusive startup ecosystem
            across all sectors, including biotechnology, food processing,
            agriculture, healthcare, information technology, manufacturing, and
            social innovation. It serves as a central platform connecting
            innovators, startups, academic institutions, incubators, industry
            partners, and investors, thereby creating a strong support system
            for entrepreneurial growth. Through structured programs such as
            incubation support, mentorship, capacity building, and market
            linkage initiatives, StartupTN plays a crucial role in nurturing
            early-stage ideas and guiding them toward successful enterprise
            development.
          </p>
          <p>
            Through its various schemes and initiatives, StartupTN enables
            startups to access government-backed funding opportunities,
            including seed fund support, grants, and investor connect platforms
            essential for prototype development, technology validation, and
            scaling. The presence of the StartupTN Regional Hub – Coimbatore
            within the COXBIT premises further strengthens this ecosystem by
            providing seamless access to these opportunities. This strategic
            integration, combined with COXBIT's advanced biotechnology
            infrastructure and research expertise, creates a robust
            lab-to-market pathway, enabling startups across sectors to evolve
            into scalable, investment-ready ventures while driving
            innovation-led economic growth in Tamil Nadu.
          </p>
        </div>
        <div className="mt-8 bg-green-50 border-l-4 border-green-500 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Key Support Areas:
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Incubation Support</li>
            <li>• Mentorship</li>
            <li>• Capacity Building</li>
            <li>• Market Linkages</li>
            <li>• Funding Opportunities</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    label: "EDII-TN",
    content: (
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Entrepreneurship Development and Innovation Institute (EDII-TN), Tamil
          Nadu
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            The Entrepreneurship Development and Innovation Institute (EDII-TN)
            is a key Government of Tamil Nadu initiative that promotes
            entrepreneurship and innovation. It supports startups by providing
            training, mentoring, incubation, financial assistance and strong
            ecosystem linkages to transform innovative ideas into viable
            businesses. As a Knowledge Partner, COXBIT leverages this platform
            to connect agri, biotech and food processing innovations with
            entrepreneurial opportunities, enabling the development of
            value-added products, functional foods and sustainable technologies.
          </p>
          <p>
            EDII-TN plays a crucial role in startup growth by offering access to
            government funding schemes, seed support and innovation vouchers
            (IVP-A and IVP-B), which help in early-stage product development,
            prototype validation and commercialization. This initial financial
            assistance and structured support system significantly accelerate
            the journey of startups from concept to market-ready solutions in
            the agri, biotech and allied sectors.
          </p>
        </div>
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Key Support Services:
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Training & Mentoring</li>
            <li>• Incubation Support</li>
            <li>• Financial Assistance</li>
            <li>• Ecosystem Linkages</li>
            <li>• Government Funding Schemes</li>
            <li>• Seed Support</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    label: "TNAPEx",
    content: (
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Tamil Nadu Food Processing and Agri Export Promotion Corporation
          (TNAPEx)
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            The Tamil Nadu Food Processing and Agri Export Promotion Corporation
            (TNAPEx) plays a key role in strengthening MSMEs by promoting
            entrepreneurship in food processing and value-added product
            development. It supports agro-based enterprises by enabling market
            linkages, export facilitation, and infrastructure access for
            processing and packaging, helping convert agricultural produce into
            high-value products.
          </p>
          <p>
            TNAPEx also supports branding, quality certification, regulatory
            compliance, and capacity building, enabling MSMEs to adopt
            innovative technologies and develop diversified food products such
            as functional foods, traditional formulations, and ready-to-eat or
            ready-to-cook items. It acts as a bridge between farmers,
            processors, and markets, reducing post-harvest losses and improving
            income generation.
          </p>
          <p>
            Through the RAMP (Raising and Accelerating MSME Performance)
            Programme, COXBIT serves as a technical support partner for TNAPEx,
            providing expertise and infrastructure for MSME product development
            in food processing and value addition. Under this collaboration,
            more than 10 startups have been identified and supported, enabling
            access to financial assistance for developing innovative,
            market-ready food products.
          </p>
        </div>
        <div className="mt-8 bg-purple-50 border-l-4 border-purple-500 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Key Support Areas:
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Market Linkages</li>
            <li>• Export Facilitation</li>
            <li>• Infrastructure Access</li>
            <li>• Branding & Certification</li>
            <li>• Capacity Building</li>
            <li>• Financial Assistance</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function Partners() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Partners</h1>
        <div className="flex justify-center mb-8">
          {tabs.map((tab, idx) => (
            <button
              key={tab.label}
              className={`px-6 py-2 mx-2 rounded-t-lg font-semibold border-b-2 transition-colors duration-200 ${
                activeTab === idx
                  ? "border-blue-600 text-blue-700 bg-white shadow"
                  : "border-transparent text-gray-500 bg-gray-100 hover:bg-white"
              }`}
              onClick={() => setActiveTab(idx)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-b-lg shadow-lg p-8">
          {tabs[activeTab].content}
        </div>
      </div>
    </div>
  );
}

'use client';
import { useState } from 'react';

const tabs = [
  { id: 0, label: 'Cabin Space' },
  { id: 1, label: 'Floor / Knowledge Space' },
];

const tabContent = [
  {
    title: 'Cabin Space',
    content: `
      <p>Cabin spaces are designed for startups, entrepreneurs, and innovators seeking a dedicated, private environment to develop their ideas and grow their ventures. These spaces offer essential infrastructure, high-speed internet, and access to shared resources, fostering productivity and collaboration within a professional setting.</p>
      <ul class="list-disc ml-6 mt-2">
        <li>Private, lockable cabins for focused work</li>
        <li>Access to meeting rooms and common facilities</li>
        <li>Support services for business development</li>
        <li>Networking opportunities with other resident startups</li>
      </ul>
      <h3 class="text-lg font-semibold mt-6 mb-2">COXBIT Cabin Space Users</h3>
      <ol class="list-decimal ml-6">
        <li>M/s. Aviva Organics Stores</li>
        <li>Dr. Jini Narayan</li>
        <li>M/s. Oneomics Private Limited</li>
        <li>M/s. Thennaivanam</li>
        <li>M/s. Sakthi Fertilizer Company</li>
        <li>Selvan. D. Dhivvya Bhalan, Kalaignar Karunanidhi Institution</li>
        <li>M/s. Bublbox E-Retail Private Limited</li>
        <li>M/s. CropTwin Agro Tech Pvt Ltd</li>
        <li>M/s. Meridian Machine Works</li>
        <li>Selvi. Prarthana V, Nehru Arts and Science College, CBE</li>
        <li>M/s. UnivZero Technologies Pvt Ltd</li>
        <li>M/s. SS Tech</li>
        <li>M/s. Valriya Vision Pvt Ltd</li>
        <li>M/s. Ziwwit Sustainable Technologies</li>
        <li>M/s. Sherpa Biotech</li>
        <li>M/s. Bharath Biofarm Pvt Ltd</li>
        <li>M/s. Skandax Nexus</li>
        <li>M/s. Halal Agro Producers</li>
        <li>M/s. TAK SFS Pvt Ltd</li>
        <li>M/s. Quadrica</li>
        <li>M/s. Themolife</li>
        <li>M/s. Sparkle Consultancy</li>
        <li>M/s. Gudimangalam FPO</li>
        <li>M/s. SST Microgreen</li>
        <li>M/s. Biofocus Scientific Solution Pvt Ltd.</li>
        <li>Dr. Jithesh Vijayan</li>
        <li>M/s. Ainiminds Technologies LLP</li>
        <li>M/s. Uyrmey Bio-Research Private Limited</li>
        <li>M/s. Ecozoe Technologies Private Limited</li>
      </ol>
    `,
  },
  {
    title: 'Floor / Knowledge Space',
    content: `
      <p>Floor and knowledge spaces provide an open, collaborative environment ideal for knowledge sharing, workshops, and team-based activities. These areas are perfect for early-stage entrepreneurs, students, and research groups who benefit from a dynamic, interactive setting.</p>
      <ul class="list-disc ml-6 mt-2">
        <li>Open workstations and flexible seating</li>
        <li>Access to seminar and training rooms</li>
        <li>Opportunities for peer learning and mentorship</li>
        <li>Participation in community events and programs</li>
      </ul>
      <h3 class="text-lg font-semibold mt-6 mb-2">COXBIT Floor Space Users</h3>
      <ol class="list-decimal ml-6">
        <li>M/s. Tamil Nadu Startup and Innovation Mission</li>
        <li>M/s. Nithilam Private limited</li>
        <li>M/s. Nature Mills</li>
        <li>M/s. Insilicomics</li>
        <li>M/s. Pechi Foods Private Limited</li>
        <li>M/s. Innogreen India Marketing</li>
        <li>M/s. V.R. Boom</li>
        <li>M/s. Cwitch industries</li>
        <li>M/s. Leaders Desk</li>
        <li>M/s. Anga Information Technology</li>
        <li>M/s. Yatvik Enterprises</li>
        <li>M/s. Miyabi Agro</li>
        <li>M/s. Mitti Lifetek Pharmadx Private Limited</li>
        <li>M/s. Karva Technologies</li>
        <li>M/s. BiTs Informatics</li>
        <li>M/s. Home Ideas Technologies LLP</li>
        <li>M/s. DC4 Market Research</li>
      </ol>
    `,
  },
];

export default function EntrepreneurshipFacilities() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Entrepreneurship Facilities</h1>
        <div className="flex justify-center mb-6">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2 font-semibold rounded-t-lg border-b-2 transition-all duration-200 ${
                activeTab === idx
                  ? 'border-indigo-600 text-indigo-600 bg-white'
                  : 'border-transparent text-gray-600 bg-gray-100 hover:text-indigo-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-b-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">{tabContent[activeTab].title}</h2>
          <div className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: tabContent[activeTab].content }} />
        </div>
      </div>
    </div>
  );
}

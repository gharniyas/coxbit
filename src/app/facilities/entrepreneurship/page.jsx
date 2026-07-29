"use client";
import { useState } from "react";
import ImageCarousel from "../../components/ImageCarousel";

const tabs = [
  { id: 0, label: "Cabin Space", images: ["/cabin/IMG_1565.JPG","/cabin/IMG_1573.JPG","/cabin/IMG_1612.JPG","/cabin/IMG_1617.JPG"] },
  { id: 1, label: "Floor / Knowledge Space", images: ["/Facility Photos/Floor Space (2).JPG","/Facility Photos/Floor Space (3).JPG","/Facility Photos/Floor Space (4).JPG","/Facility Photos/Work space.jpg"] },
];

const tabContent = [
  {
    title: "Cabin Space",
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
        <li class="flex flex-col items-start gap-2 my-4"><img src="/startup/16.jpg" alt="Dr. Jini Narayan" class="w-full max-w-xs h-auto object-contain rounded-md border border-gray-200 shadow-sm shrink-0" /><span>Dr. Jini Narayan</span></li>
        <li class="flex flex-col items-start gap-2 my-4"><img src="/startup/14.jpg" alt="M/s. Oneomics Private Limited" class="w-full max-w-xs h-auto object-contain rounded-md border border-gray-200 shadow-sm shrink-0" /><span>M/s. Oneomics Private Limited</span></li>
        <li>M/s. Thennaivanam</li>
        <li class="flex flex-col items-start gap-2 my-4"><img src="/startup/15.jpg" alt="M/s. Sakthi Fertilizer Company" class="w-full max-w-xs h-auto object-contain rounded-md border border-gray-200 shadow-sm shrink-0" /><span>M/s. Sakthi Fertilizer Company</span></li>
        <li class="flex flex-col items-start gap-2 my-4"><img src="/startup/17.jpg" alt="Selvan. D. Dhivvya Bhalan, Kalaignar Karunanidhi Institution" class="w-full max-w-xs h-auto object-contain rounded-md border border-gray-200 shadow-sm shrink-0" /><span>Selvan. D. Dhivvya Bhalan, Kalaignar Karunanidhi Institution</span></li>
        <li>M/s. Bublbox E-Retail Private Limited</li>
        <li>M/s. CropTwin Agro Tech Pvt Ltd</li>
        <li>M/s. Meridian Machine Works</li>
        <li>Selvi. Prarthana V, Nehru Arts and Science College, CBE</li>
        <li>M/s. UnivZero Technologies Pvt Ltd</li>
        <li class="flex flex-col items-start gap-2 my-4"><img src="/startup/18.jpg" alt="M/s. SS Tech" class="w-full max-w-xs h-auto object-contain rounded-md border border-gray-200 shadow-sm shrink-0" /><span>M/s. SS Tech</span></li>
        <li class="flex flex-col items-start gap-2 my-4"><img src="/startup/19.jpg" alt="M/s. Valriya Vision Pvt Ltd" class="w-full max-w-xs h-auto object-contain rounded-md border border-gray-200 shadow-sm shrink-0" /><span>M/s. Valriya Vision Pvt Ltd</span></li>
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
    title: "Floor / Knowledge Space",
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
        <li class="flex flex-col items-start gap-2 my-4"><img src="/startup/7.jpg" alt="M/s. Nithilam Private limited" class="w-full max-w-xs h-auto object-contain rounded-md border border-gray-200 shadow-sm shrink-0" /><span>M/s. Nithilam Private limited</span></li>
        <li>M/s. Nature Mills</li>
        <li class="flex flex-col items-start gap-2 my-4"><img src="/startup/8.jpg" alt="M/s. Insilicomics" class="w-full max-w-xs h-auto object-contain rounded-md border border-gray-200 shadow-sm shrink-0" /><span>M/s. Insilicomics</span></li>
        <li>M/s. Pechi Foods Private Limited</li>
        <li class="flex flex-col items-start gap-2 my-4"><img src="/startup/9.jpg" alt="M/s. Innogreen India Marketing" class="w-full max-w-xs h-auto object-contain rounded-md border border-gray-200 shadow-sm shrink-0" /><span>M/s. Innogreen India Marketing</span></li>
        <li>M/s. V.R. Boom</li>
        <li>M/s. Cwitch industries</li>
        <li class="flex flex-col items-start gap-2 my-4"><img src="/startup/10.jpg" alt="M/s. Leaders Desk" class="w-full max-w-xs h-auto object-contain rounded-md border border-gray-200 shadow-sm shrink-0" /><span>M/s. Leaders Desk</span></li>
        <li class="flex flex-col items-start gap-2 my-4"><img src="/startup/11.jpg" alt="M/s. Anga Information Technology" class="w-full max-w-xs h-auto object-contain rounded-md border border-gray-200 shadow-sm shrink-0" /><span>M/s. Anga Information Technology</span></li>
        <li>M/s. Yatvik Enterprises</li>
        <li class="flex flex-col items-start gap-2 my-4"><img src="/startup/12.jpg" alt="M/s. Miyabi Agro" class="w-full max-w-xs h-auto object-contain rounded-md border border-gray-200 shadow-sm shrink-0" /><span>M/s. Miyabi Agro</span></li>
        <li class="flex flex-col items-start gap-2 my-4"><img src="/startup/13.jpg" alt="M/s. Mitti Lifetek Pharmadx Private Limited" class="w-full max-w-xs h-auto object-contain rounded-md border border-gray-200 shadow-sm shrink-0" /><span>M/s. Mitti Lifetek Pharmadx Private Limited</span></li>
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
        {/* Removed the 'Entrepreneurship Facilities' heading for a cleaner look */}
        <div className="flex justify-center mb-6">
          {tabs.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-2 font-semibold rounded-t-lg border-b-2 transition-all duration-200 ${
                activeTab === idx
                  ? "border-indigo-600 text-indigo-600 bg-white"
                  : "border-transparent text-gray-600 bg-gray-100 hover:text-indigo-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-b-lg shadow-lg p-6">
          {tabs[activeTab].images?.length > 0 && (
            <ImageCarousel
              key={activeTab}
              images={tabs[activeTab].images}
              alt={tabs[activeTab].label}
            />
          )}
          <h2 className="text-2xl font-bold mb-4">
            {tabContent[activeTab].title}
          </h2>
          <div
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: tabContent[activeTab].content }}
          />
        </div>
      </div>
    </div>
  );
}

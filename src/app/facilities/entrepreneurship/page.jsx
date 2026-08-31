"use client";
import Link from "next/link";
import { useState } from "react";
import ImageCarousel from "../../components/ImageCarousel";
import TabNavigation from "../../components/TabNavigation";
import { startupProfiles } from "./data";

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
    `,
  },
];

const startupLinkClass =
  "font-medium text-[#0a1f44] underline decoration-[#c89b3c] underline-offset-4 transition hover:text-[#8a6a1f] hover:decoration-[#8a6a1f]";

const startupLists = {
  0: [
    "M/s. Aviva Organics Stores",
    { name: "Dr. Jini Narayan", slug: startupProfiles["dr-jini-narayan"].slug },
    {
      name: "M/s. Oneomics Private Limited",
      slug: startupProfiles.oneomics.slug,
    },
    "M/s. Thennaivanam",
    {
      name: "M/s. Sakthi Fertilizer Company",
      slug: startupProfiles["sakthi-fertilizer"].slug,
    },
    {
      name: "Selvan. D. Dhivvya Bhalan, Kalaignar Karunanidhi Institution",
      slug: startupProfiles["dhivvya-bhalan"].slug,
    },
    "M/s. Bublbox E-Retail Private Limited",
    "M/s. CropTwin Agro Tech Pvt Ltd",
    "M/s. Meridian Machine Works",
    "Selvi. Prarthana V, Nehru Arts and Science College, CBE",
    "M/s. UnivZero Technologies Pvt Ltd",
    { name: "M/s. SS Tech", slug: startupProfiles["ss-tech"].slug },
    {
      name: "M/s. Valriya Vision Pvt Ltd",
      slug: startupProfiles["valriya-vision"].slug,
    },
    "M/s. Ziwwit Sustainable Technologies",
    "M/s. Sherpa Biotech",
    "M/s. Bharath Biofarm Pvt Ltd",
    "M/s. Skandax Nexus",
    "M/s. Halal Agro Producers",
    "M/s. TAK SFS Pvt Ltd",
    "M/s. Quadrica",
    "M/s. Themolife",
    "M/s. Sparkle Consultancy",
    "M/s. Gudimangalam FPO",
    "M/s. SST Microgreen",
    "M/s. Biofocus Scientific Solution Pvt Ltd.",
    "Dr. Jithesh Vijayan",
    "M/s. Ainiminds Technologies LLP",
    "M/s. Uyrmey Bio-Research Private Limited",
    "M/s. Ecozoe Technologies Private Limited",
  ],
  1: [
    "M/s. Tamil Nadu Startup and Innovation Mission",
    {
      name: "M/s. Nithilam Private Limited",
      slug: startupProfiles.nithilam.slug,
    },
    "M/s. Nature Mills",
    { name: "M/s. Insilicomics", slug: startupProfiles.insilicomics.slug },
    "M/s. Pechi Foods Private Limited",
    {
      name: "M/s. Innogreen India Marketing",
      slug: startupProfiles.innogreen.slug,
    },
    "M/s. V.R. Boom",
    "M/s. Cwitch industries",
    {
      name: "M/s. Leaders Desk",
      slug: startupProfiles["leaders-desk"].slug,
    },
    {
      name: "M/s. Anga Information Technology",
      slug: startupProfiles["anga-information-technology"].slug,
    },
    "M/s. Yatvik Enterprises",
    { name: "M/s. Miyabi Agro", slug: startupProfiles["miyabi-agro"].slug },
    {
      name: "M/s. Mitti Lifetek Pharmadx Private Limited",
      slug: startupProfiles["mitti-lifetek-pharmadx"].slug,
    },
    "M/s. Karva Technologies",
    "M/s. BiTs Informatics",
    "M/s. Home Ideas Technologies LLP",
    "M/s. DC4 Market Research",
  ],
};

export default function EntrepreneurshipFacilities() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header banner */}
      <div className="bg-[#0a1f44] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            Facilities
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            Technology Driven Entrepreneurship
          </h1>
          <p className="text-blue-100 mt-3 max-w-2xl leading-relaxed">
            Cabin and floor / knowledge space infrastructure supporting startups,
            entrepreneurs and innovators at COXBIT.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <div className="bg-white border border-gray-200 border-t-0 rounded-b-sm shadow-sm p-6">
          {tabs[activeTab].images?.length > 0 && (
            <ImageCarousel
              key={activeTab}
              images={tabs[activeTab].images}
              alt={tabs[activeTab].label}
            />
          )}
          <h2 className="font-serif text-2xl font-bold text-[#0a1f44] mb-4">
            {tabContent[activeTab].title}
          </h2>
          <div
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: tabContent[activeTab].content }}
          />
          <h3 className="mt-6 mb-2 font-serif text-lg font-bold text-[#0a1f44]">
            COXBIT {tabContent[activeTab].title} Users
          </h3>
          <ol className="mt-4 ml-6 list-decimal space-y-2 text-gray-800">
            {startupLists[activeTab].map((item) => {
              const key = typeof item === "string" ? item : item.slug;

              return (
                <li key={key}>
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <Link
                      href={`/facilities/entrepreneurship/${item.slug}`}
                      className={startupLinkClass}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

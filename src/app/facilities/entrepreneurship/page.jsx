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
  "font-medium text-[#6b4226] underline decoration-[#c89b3c] underline-offset-4 transition hover:text-[#8a6a1f] hover:decoration-[#8a6a1f]";

const link = (key) => ({
  name: startupProfiles[key].name,
  slug: startupProfiles[key].slug,
});

const startupLists = {
  0: [
    link("aviva-organics"),
    link("dr-jini-narayan"),
    link("oneomics"),
    link("thennaivanam"),
    link("sakthi-fertilizer"),
    link("dhivvya-bhalan"),
    link("bublbox-eretail"),
    link("croptwin-agro-tech"),
    "M/s. Meridian Machine Works",
    link("prarthana-v"),
    link("univzero-technologies"),
    link("ss-tech"),
    link("valriya-vision"),
    link("ziwwit-sustainable-technologies"),
    link("sherpa-biotech"),
    link("bharath-biofarm"),
    link("skandax-nexus"),
    "M/s. Halal Agro Producers",
    link("tak-sfs"),
    link("quadrica"),
    link("themolife"),
    link("sparkle-consultancy"),
    link("gudimangalam-fpo"),
    link("sst-microgreen"),
    link("biofocus-scientific-solutions"),
    link("jithesh-vijayan"),
    link("ainiminds-technologies"),
    link("uyrmey-bio-research"),
    link("ecozoe-technologies"),
    link("coimbatore-ai"),
    link("secular-foods"),
    link("pothigai-innovations"),
    link("arshitha-food-products"),
    link("zero-hungry-foods"),
    link("futurenet-technologies"),
    link("immk-chemtech"),
    link("vebetos-world-wide"),
    link("vel-nutri-foods"),
  ],
  1: [
    link("tansim"),
    link("nithilam"),
    link("nature-mills"),
    link("insilicomics"),
    link("pechi-foods"),
    link("innogreen"),
    "M/s. V.R. Boom",
    "M/s. Cwitch industries",
    link("leaders-desk"),
    link("anga-information-technology"),
    link("yatvik-enterprises"),
    link("miyabi-agro"),
    link("mitti-lifetek-pharmadx"),
    link("karva-technologies"),
    link("bits-informatics"),
    link("home-ideas-technologies"),
    link("dc4-market-research"),
  ],
};

export default function EntrepreneurshipFacilities() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            Facilities
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            Technology Driven Entrepreneurship
          </h1>
          <p className="text-amber-100 mt-3 max-w-2xl leading-relaxed">
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
          <h2 className="font-serif text-2xl font-bold text-[#6b4226] mb-4">
            {tabContent[activeTab].title}
          </h2>
          <div
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: tabContent[activeTab].content }}
          />
          <h3 className="mt-6 mb-2 font-serif text-lg font-bold text-[#6b4226]">
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

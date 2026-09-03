"use client";
import Link from "next/link";
import { useState } from "react";
import ImageCarousel from "../../components/ImageCarousel";
import TabNavigation from "../../components/TabNavigation";
import { startupProfiles } from "./data";

const tabs = [
  {
    id: 0,
    label: "Cabin Space",
    images: [
      "/cabinspacing/cabin spacing-1.jpeg",
      "/cabinspacing/cabin spacing-2.jpeg",
    ],
  },
  {
    id: 1,
    label: "Floor / Knowledge Space",
    images: [
      "/floor spacing/floor spacing-3.jpeg",
      "/floor spacing/floor spacing-4.jpeg",
      "/floor spacing/floor spacing-5.jpeg",
    ],
  },
];

const tabContent = [
  {
    title: "Cabin Space",
    content: `
      <p>Individual air-conditioned (AC) cabins for startups, established companies, R&amp;D organizations, and institutions to showcase technologies, products, research outcomes, and innovations.</p>
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
      <p>Individual floor spaces for companies and innovators to conduct projects, develop prototypes, present ideas and research concepts, and access opportunities for mentoring, collaboration, and R&amp;D support.</p>
      <ul class="list-disc ml-6 mt-2">
        <li>Open space and seating</li>
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
    link("prarthana-v"),
    link("univzero-technologies"),
    link("ss-tech"),
    link("valriya-vision"),
    link("ziwwit-sustainable-technologies"),
    link("sherpa-biotech"),
    link("bharath-biofarm"),
    link("skandax-nexus"),
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
    <div className="min-h-screen bg-amber-100/60">
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
            Cabin and floor / knowledge space infrastructure supporting
            startups, entrepreneurs and innovators at COXBIT.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 border-t-0 rounded-b-sm shadow-sm p-6">
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

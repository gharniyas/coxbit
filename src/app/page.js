import Image from "next/image";
import Link from "next/link";
import PreviewCard from "./components/PreviewCard";

const sections = [
  {
    href: "/about",
    title: "About COXBIT",
    description:
      "Our mission, vision, key focus areas and the team driving the Centre of Excellence in Biotechnology forward.",
    image: "/About coxbit/About COXBIT.jpg",
  },
  {
    href: "/facilities",
    title: "Facilities",
    description:
      "State-of-the-art laboratories, instrumentation and infrastructure available for research and industry use.",
    image: "/Facility Photos/CoEB building.jpg",
    subLinks: [
      { href: "/facilities/sals", label: "SALS - Shared Access Lab Services" },
      {
        href: "/facilities/entrepreneurship",
        label: "Technology Driven Entrepreneurship",
      },
      { href: "/facilities/serviceoffered", label: "Services Offered" },
    ],
  },
  {
    href: "/projects",
    title: "Projects",
    description:
      "Government and institution funded research projects and programmes currently underway at COXBIT.",
    icon: "🔬",
  },
  {
    href: "/startup-ecosystem/partners",
    title: "Startup Ecosystem",
    description:
      "Ecosystem partners and technology-readiness opportunities supporting biotech startups and entrepreneurs.",
    image: "/startup/10.jpg",
    subLinks: [
      { href: "/startup-ecosystem/partners", label: "Partners" },
      {
        href: "/startup-ecosystem/startup-opportunities",
        label: "Startup Opportunities",
      },
    ],
  },
  {
    href: "/events-news",
    title: "Event & Training",
    description:
      "Forthcoming and completed workshops, hands-on trainings and events for researchers and industry.",
    image: "/Events - Trainings/1 - Bioentrpreneurship Meet/IMG_1386.JPG",
  },
  {
    href: "/contact",
    title: "Contact Us",
    description:
      "Reach the COXBIT team and Director's office, or locate us at Tamil Nadu Agricultural University, Coimbatore.",
    icon: "✉️",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Tricolour identity strip */}
      <div className="w-full h-1.5 flex">
        <div className="flex-1 bg-orange-500" />
        <div className="flex-1 bg-white border-y border-gray-200" />
        <div className="flex-1 bg-green-700" />
      </div>

      {/* Official masthead */}
      <div className="bg-[#0a1f44] text-white">
        <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="COXBIT"
              width={36}
              height={36}
              className="object-contain bg-white rounded-full p-0.5"
            />
            <div className="text-xs md:text-sm leading-tight">
              <p className="font-semibold">Government of Tamil Nadu</p>
              <p className="text-blue-200">Tamil Nadu Agricultural University</p>
            </div>
          </div>
          <p className="text-[11px] md:text-xs uppercase tracking-wide text-[#c89b3c] font-semibold border border-[#c89b3c]/50 rounded-sm px-3 py-1">
            A Public&ndash;Private Partnership Initiative
          </p>
        </div>
      </div>

      {/* Hero */}
      <section className="relative min-h-[480px] flex items-center">
        <Image
          src="/building/IMG_5188.JPG"
          alt="COXBIT Main Building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f44]/95 via-[#0a1f44]/80 to-[#0a1f44]/50" />

        <div className="relative z-10 container mx-auto px-4 py-16">
          <p className="text-[#c89b3c] uppercase tracking-widest text-sm font-semibold mb-3">
            Centre of Excellence in Biotechnology
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight mb-6">
            COXBIT &ndash; Building World-Class Biotech Infrastructure
          </h1>
          <p className="text-blue-100 max-w-2xl leading-relaxed mb-8">
            Creating world-class infrastructure for biotech research and
            innovation at Tamil Nadu Agricultural University, with funding
            support from the Government of Tamil Nadu.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/facilities"
              className="bg-[#c89b3c] hover:bg-[#b3872e] text-[#0a1f44] font-semibold px-6 py-3 rounded-sm transition-colors duration-200"
            >
              Explore Facilities
            </Link>
            <Link
              href="/about"
              className="border border-white/60 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-sm transition-colors duration-200"
            >
              About COXBIT
            </Link>
          </div>
        </div>
      </section>

      {/* Key sections - short version of every menubar page */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl font-bold text-[#0a1f44]">
            Our Key Sections
          </h2>
          <div className="w-16 h-1 bg-[#c89b3c] mx-auto mt-3 mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            A quick overview of every section of this portal. Select any card
            below to view the complete details of that page.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section) => (
            <PreviewCard key={section.href} {...section} />
          ))}
        </div>
      </section>

      {/* In association with */}
      <section className="bg-gray-50 border-y border-gray-200 py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-6">
            In Association With
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10">
            <Image
              src="/TNA logo.jpg"
              alt="Tamil Nadu Agricultural University"
              width={70}
              height={70}
              className="object-contain rounded-full"
            />
            <Image
              src="/innovation logo.jpg"
              alt="Innovation Initiative"
              width={70}
              height={70}
              className="object-contain rounded-full"
            />
          </div>
        </div>
      </section>

      {/* Social media */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl font-bold text-[#0a1f44]">
            Connect With Us on Social Media
          </h2>
          <div className="w-16 h-1 bg-[#c89b3c] mx-auto mt-3 mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scan a QR code below or follow us for the latest research,
            events and biotechnology updates from COXBIT.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-6 text-center">
            <h3 className="font-serif text-lg font-bold text-[#0a1f44] mb-4">
              Facebook
            </h3>
            <div className="bg-white border border-gray-200 rounded-sm p-3 inline-block">
              <Image
                src="/QR Code - CoEB/QR - FB - CoEB.png"
                alt="Facebook QR Code - COXBIT"
                width={140}
                height={140}
                className="mx-auto"
              />
            </div>
            <p className="text-gray-600 text-sm mt-4">
              Scan to follow our Facebook page for updates, events and
              research highlights.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-6 text-center">
            <h3 className="font-serif text-lg font-bold text-[#0a1f44] mb-4">
              Instagram
            </h3>
            <div className="bg-white border border-gray-200 rounded-sm p-3 inline-block">
              <Image
                src="/QR Code - CoEB/QR - Insta - CoEB.jpeg"
                alt="Instagram QR Code - COXBIT"
                width={140}
                height={140}
                className="mx-auto"
              />
            </div>
            <p className="text-gray-600 text-sm mt-4">
              Follow us on Instagram for behind-the-scenes content and
              visual updates.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-6 text-center">
            <h3 className="font-serif text-lg font-bold text-[#0a1f44] mb-4">
              LinkedIn
            </h3>
            <div className="bg-white border border-gray-200 rounded-sm p-3 inline-block">
              <Image
                src="/QR Code - CoEB/QR - Linkedin - CoEB.png"
                alt="LinkedIn QR Code - COXBIT"
                width={140}
                height={140}
                className="mx-auto"
              />
            </div>
            <p className="text-gray-600 text-sm mt-4">
              Connect with us professionally for research collaborations
              and opportunities.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm mb-4">
            <strong>How to use:</strong> Simply point your smartphone camera
            at any QR code above to instantly access our social media
            profiles.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-[#0a1f44]/5 text-[#0a1f44] border border-[#0a1f44]/10 px-4 py-1.5 rounded-full text-xs font-semibold">
              #Biotechnology
            </span>
            <span className="bg-[#0a1f44]/5 text-[#0a1f44] border border-[#0a1f44]/10 px-4 py-1.5 rounded-full text-xs font-semibold">
              #Research
            </span>
            <span className="bg-[#0a1f44]/5 text-[#0a1f44] border border-[#0a1f44]/10 px-4 py-1.5 rounded-full text-xs font-semibold">
              #Innovation
            </span>
            <span className="bg-[#0a1f44]/5 text-[#0a1f44] border border-[#0a1f44]/10 px-4 py-1.5 rounded-full text-xs font-semibold">
              #Agriculture
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

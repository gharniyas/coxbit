import Image from "next/image";
import Link from "next/link";
import PreviewCard from "./components/PreviewCard";

const sections = [
  {
    href: "/about",
    title: "About COXBIT",
    description:
      "Our mission, vision, key focus areas and the team driving the Centre of Excellence in Biotechnology forward.",
    image: "/About coxbit/IMG_6216.JPG",
    subLinks: [
      { href: "/about?tab=0", label: "About COXBIT" },
      { href: "/about?tab=1", label: "Why COXBIT" },
      { href: "/about?tab=2", label: "Key Focus Areas" },
      { href: "/about?tab=3", label: "COXBIT Team" },
    ],
  },
  {
    href: "/facilities",
    title: "Facilities",
    description:
      "State-of-the-art laboratories, instrumentation and infrastructure available for research and industry use.",
    image: "/Tissue culture/Tissue culture 1 b.png",
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
    image: "/TNAPEx/DSC09238.JPG",
    subLinks: [
      { href: "/projects/details?tab=0", label: "DBT Phenomics Platform" },
      { href: "/projects/details?tab=1", label: "Native Species Seed Vault" },
      { href: "/projects/details?tab=2", label: "TNAPEx MSME Programme" },
      { href: "/projects/details?tab=3", label: "BIRAC E-YUVA Programme" },
    ],
  },
  {
    href: "/startup-ecosystem",
    title: "Startup Ecosystem",
    description:
      "Ecosystem partners and technology-readiness opportunities supporting biotech startups and entrepreneurs.",
    image: "/Projects/20251029_104700.jpg (1).jpeg",
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
    image: "/floor spacing/floor spacing-3.jpeg",
    subLinks: [
      { href: "/events-news#upcoming-events", label: "Upcoming Events" },
      { href: "/events-news#trainings-events", label: "Training & Events" },
      { href: "/events-news#highlights", label: "Highlights" },
    ],
  },
  {
    href: "/contact",
    title: "Contact Us",
    description:
      "Reach the COXBIT team and Director's office, or locate us at Tamil Nadu Agricultural University, Coimbatore.",
    image: "/logo.jpeg",
    imageClassName: "object-contain p-8 bg-white",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative min-h-[480px] flex items-center">
        <Image
          src="/building/IMG_5188.JPG"
          alt="COXBIT Main Building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#6b4226]/95 via-[#6b4226]/80 to-[#6b4226]/50" />

        <div className="relative z-10 container mx-auto px-4 py-16">
          <p className="text-[#c89b3c] uppercase tracking-widest text-sm font-semibold mb-3">
            Centre of Excellence in Biotechnology
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white max-w-3xl leading-tight mb-6">
            COXBIT &ndash; Building World-Class Biotech Infrastructure
          </h1>
          <p className="text-amber-100 max-w-2xl leading-relaxed mb-8">
            Creating world-class infrastructure for biotech research and
            innovation at Tamil Nadu Agricultural University, with funding
            support from the Government of Tamil Nadu.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/facilities"
              className="bg-[#c89b3c] hover:bg-[#b3872e] text-[#6b4226] font-semibold px-6 py-3 rounded-sm transition-colors duration-200"
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
          <h2 className="font-serif text-3xl font-bold text-[#6b4226]">
            Discover COXBIT
          </h2>
          <div className="w-16 h-1 bg-[#c89b3c] mx-auto mt-3 mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore what COXBIT offers &mdash; from labs and projects to
            startup support and events.
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
            <Link
              href="/startup-ecosystem/partners?tab=2"
              className="hover:opacity-80 transition-opacity duration-200"
            >
              <Image
                src="/TNA logo.jpg"
                alt="Tamil Nadu Agricultural University"
                width={70}
                height={70}
                className="object-contain rounded-full"
              />
            </Link>
            <Link
              href="/startup-ecosystem/partners?tab=1"
              className="hover:opacity-80 transition-opacity duration-200"
            >
              <Image
                src="/innovation logo.jpg"
                alt="Innovation Initiative"
                width={70}
                height={70}
                className="object-contain rounded-full"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Social media */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl font-bold text-[#6b4226]">
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
            <h3 className="font-serif text-lg font-bold text-[#6b4226] mb-4">
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
            <a
              href="https://www.facebook.com/profile.php?id=61550815515953"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm font-semibold text-[#6b4226] hover:text-[#8a6a1f] hover:underline"
            >
              Visit our Facebook Page &rarr;
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-6 text-center">
            <h3 className="font-serif text-lg font-bold text-[#6b4226] mb-4">
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
            <a
              href="https://www.instagram.com/coxbit_tnau?igsi=MW1oeGU4dDNzYTNpNg=="
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm font-semibold text-[#6b4226] hover:text-[#8a6a1f] hover:underline"
            >
              Visit our Instagram Page &rarr;
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-6 text-center">
            <h3 className="font-serif text-lg font-bold text-[#6b4226] mb-4">
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
      </section>
    </div>
  );
}

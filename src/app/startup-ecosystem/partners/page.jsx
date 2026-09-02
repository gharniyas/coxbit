"use client";
import ImageCarousel from "../../components/ImageCarousel";

const colorClasses = {
  blue: {
    badge: "bg-blue-50 text-blue-700 border-blue-200",
    accent: "border-l-blue-500",
  },
  green: {
    badge: "bg-green-50 text-green-700 border-green-200",
    accent: "border-l-green-500",
  },
  purple: {
    badge: "bg-purple-50 text-purple-700 border-purple-200",
    accent: "border-l-purple-500",
  },
};

const partners = [
  {
    id: 0,
    label: "Startup TN",
    color: "blue",
    title: "Tamil Nadu Startup and Innovation Mission (StartupTN)",
    content: (
      <>
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
        <div className="mt-8 bg-gray-50 border border-gray-200 border-l-4 border-l-[#c89b3c] rounded-sm p-6">
          <h3 className="font-serif text-xl font-bold text-[#6b4226] mb-3">
            Key Support Areas
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#c89b3c]">&rsaquo;</span>
              Incubation Support
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c89b3c]">&rsaquo;</span>
              Mentorship
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c89b3c]">&rsaquo;</span>
              Capacity Building
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c89b3c]">&rsaquo;</span>
              Market Linkages
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c89b3c]">&rsaquo;</span>
              Funding Opportunities
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 1,
    label: "EDII-TN",
    color: "green",
    title:
      "Entrepreneurship Development and Innovation Institute (EDII-TN), Tamil Nadu",
    content: (
      <>
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
        <div className="mt-8 bg-gray-50 border border-gray-200 border-l-4 border-l-[#6b4226] rounded-sm p-6">
          <h3 className="font-serif text-xl font-bold text-[#6b4226] mb-3">
            Key Support Services
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#c89b3c]">&rsaquo;</span>
              Training &amp; Mentoring
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c89b3c]">&rsaquo;</span>
              Incubation Support
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c89b3c]">&rsaquo;</span>
              Financial Assistance
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c89b3c]">&rsaquo;</span>
              Ecosystem Linkages
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c89b3c]">&rsaquo;</span>
              Government Funding Schemes
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c89b3c]">&rsaquo;</span>
              Seed Support
            </li>
          </ul>
        </div>
      </>
    ),
  },
  {
    id: 2,
    label: "TNAPEx",
    color: "purple",
    title:
      "Tamil Nadu Food Processing and Agri Export Promotion Corporation (TNAPEx)",
    content: (
      <>
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
        <div className="mt-8 bg-gray-50 border border-gray-200 border-l-4 border-l-[#c89b3c] rounded-sm p-6">
          <h3 className="font-serif text-xl font-bold text-[#6b4226] mb-3">
            Key Support Areas
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#c89b3c]">&rsaquo;</span>
              Market Linkages
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c89b3c]">&rsaquo;</span>
              Export Facilitation
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c89b3c]">&rsaquo;</span>
              Infrastructure Access
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c89b3c]">&rsaquo;</span>
              Branding &amp; Certification
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c89b3c]">&rsaquo;</span>
              Capacity Building
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#c89b3c]">&rsaquo;</span>
              Financial Assistance
            </li>
          </ul>
        </div>
      </>
    ),
  },
];

export default function Partners() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            Startup Ecosystem
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            Ecosystem Partners
          </h1>
          <p className="text-amber-100 mt-3 max-w-2xl leading-relaxed">
            Government and institutional partners supporting biotech
            startups and entrepreneurs at COXBIT.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-10 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Photo Gallery */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl font-bold text-[#6b4226]">
                Partners Gallery
              </h2>
              <div className="w-16 h-1 bg-[#c89b3c] mx-auto mt-3 mb-4" />
            </div>
            <ImageCarousel
              alt="COXBIT Ecosystem Partners"
              images={[
                "/TNAPEx/ACS visit.JPG",
                "/TNAPEx/DSC09238.JPG",
                "/TNAPEx/Recovered_jpg_file(4240).jpg",
                "/TNAPEx/Recovered_jpg_file(4291).jpg",
                "/TNAPEx/Recovered_jpg_file(4298).jpg",
                "/TNAPEx/WhatsApp Image 2026-06-05 at 17.26.10.jpeg",
              ]}
            />
          </section>

          {/* Quick Jump Links */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {partners.map((partner, index) => {
              const colors = colorClasses[partner.color] || colorClasses.blue;
              return (
                <a
                  key={partner.id}
                  href={`#partner-${partner.id}`}
                  className={`text-sm font-semibold px-4 py-2 rounded-full border ${colors.badge} hover:shadow-sm transition-shadow duration-200`}
                >
                  {index + 1}. {partner.label}
                </a>
              );
            })}
          </div>

          {/* Partners List */}
          <div className="space-y-8">
            {partners.map((partner, index) => {
              const colors = colorClasses[partner.color] || colorClasses.blue;
              return (
                <section
                  key={partner.id}
                  id={`partner-${partner.id}`}
                  className={`bg-white border border-gray-200 border-l-4 ${colors.accent} rounded-sm shadow-sm p-6 md:p-8 scroll-mt-24`}
                >
                  <span
                    className={`inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full border ${colors.badge} mb-3`}
                  >
                    Partner {index + 1} of {partners.length}
                  </span>
                  <h2 className="font-serif text-3xl font-bold text-[#6b4226] mb-1">
                    {partner.title}
                  </h2>
                  <div className="w-16 h-1 bg-[#c89b3c] mt-3 mb-6" />
                  {partner.content}
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

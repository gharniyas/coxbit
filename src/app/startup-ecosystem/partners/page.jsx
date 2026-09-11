import PartnerDetailPage from "../../components/PartnerDetailPage";

export default function StartupTN() {
  return (
    <PartnerDetailPage title="Tamil Nadu Startup and Innovation Mission (StartupTN)">
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
    </PartnerDetailPage>
  );
}

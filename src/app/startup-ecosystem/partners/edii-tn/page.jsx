import PartnerDetailPage from "../../../components/PartnerDetailPage";

export default function EdiiTn() {
  return (
    <PartnerDetailPage title="Entrepreneurship Development and Innovation Institute (EDII-TN), Tamil Nadu">
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
    </PartnerDetailPage>
  );
}

import PartnerDetailPage from "../../../components/PartnerDetailPage";

export default function Tnapex() {
  return (
    <PartnerDetailPage title="Tamil Nadu Food Processing and Agri Export Promotion Corporation (TNAPEx)">
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
    </PartnerDetailPage>
  );
}

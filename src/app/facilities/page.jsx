import ImageCarousel from "../components/ImageCarousel";

export default function Facilities() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            COXBIT
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            Facilities
          </h1>
          <p className="text-amber-100 mt-3 max-w-2xl leading-relaxed">
            State of art laboratory facilities
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Facility Photo Gallery */}
        <ImageCarousel
          alt="Facility"
          images={[
            "/Facility Photos/CoEB building.jpg",
            "/Facility Photos/Board Room.jpg",
            "/Facility Photos/Molecularbiology lab.jpg",
            "/Facility Photos/Tissue culture facility.jpg",
            "/Facility Photos/Exhibition Hall.JPG",
            "/Facility Photos/Cabin Space.jpg",
            "/Facility Photos/Cold Room.jpg",
            "/Facility Photos/Bioinformatics - Server Room.jpg",
          ]}
        />

        {/* Services Offered Section */}
        <div className="mb-8 flex justify-center">
          <a
            href="/facilities/serviceoffered"
            className="inline-block bg-[#c89b3c] hover:bg-[#b3872e] text-[#6b4226] font-semibold px-6 py-3 rounded-sm transition-colors duration-200"
          >
            View Services Offered
          </a>
        </div>

        <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-6 md:p-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#6b4226]">
            1. Molecular Biology Laboratory &ndash; Shared Innovation Facility
          </h2>
          <div className="w-16 h-1 bg-[#c89b3c] mt-3 mb-6" />

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              The Molecular Biology Laboratory at COXBIT is a fully equipped, state-of-the-art facility
              designed to support advanced research, innovation and product development in agriculture and
              biotechnology. The laboratory houses essential equipment including RO water systems, digital
              autoclaves, laminar airflow chambers, PCR and real-time PCR systems, electrophoresis units,
              gel documentation systems and tissue lyser, along with supporting instruments such as centrifuges,
              sonicators, incubators and ultra-low temperature freezers (-80°C and -20°C). Additional analytical
              tools such as Soxhlet apparatus, weighing balances, pH meters and water purification systems
              further strengthen its research capabilities.
            </p>

            <p>
              A key strength of this facility is its shared-access model, where common laboratory infrastructure
              is made available to startups, students, researchers and innovators utilizing the cabin and floor
              space facilities. This enables users to carry out experimental work, validate concepts and develop
              products without the burden of investing in high-cost instrumentation.
            </p>

            <p>
              By offering free access to essential common facilities, COXBIT significantly lowers entry barriers,
              accelerates research activities and fosters a collaborative innovation ecosystem. This initiative
              plays a crucial role in translating ideas into viable technologies and products, making the
              laboratory a strong enabler of entrepreneurship and applied biotechnology research.
            </p>
          </div>

          <div className="mt-8 bg-gray-50 border border-gray-200 border-l-4 border-l-[#c89b3c] p-6 rounded-sm">
            <h3 className="font-serif text-xl font-bold text-[#6b4226] mb-3">Key Equipment Available:</h3>
            <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
              <li>&bull; RO Water Systems</li>
              <li>&bull; Digital Autoclaves</li>
              <li>&bull; Laminar Airflow Chambers</li>
              <li>&bull; PCR & Real-time PCR Systems</li>
              <li>&bull; Electrophoresis Units</li>
              <li>&bull; Gel Documentation Systems</li>
              <li>&bull; Tissue Lyser</li>
              <li>&bull; Centrifuges</li>
              <li>&bull; Sonicators</li>
              <li>&bull; Incubators</li>
              <li>&bull; Ultra-low Temperature Freezers (-80°C, -20°C)</li>
              <li>&bull; Soxhlet Apparatus</li>
              <li>&bull; Weighing Balances</li>
              <li>&bull; pH Meters</li>
              <li>&bull; Water Purification Systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

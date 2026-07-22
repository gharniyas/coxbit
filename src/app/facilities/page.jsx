import ImageCarousel from "../components/ImageCarousel";

export default function Facilities() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Facilities</h1>
        <p className="text-xl text-gray-600 text-center mb-8">State of art laboratory facilities</p>

        {/* Facility Photo Gallery */}
        <ImageCarousel
          heightClass="h-96"
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
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow transition"
          >
            View Services Offered
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            1. Molecular Biology Laboratory – Shared Innovation Facility
          </h2>
          
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

          <div className="mt-8 bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Equipment Available:</h3>
            <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
              <li>• RO Water Systems</li>
              <li>• Digital Autoclaves</li>
              <li>• Laminar Airflow Chambers</li>
              <li>• PCR & Real-time PCR Systems</li>
              <li>• Electrophoresis Units</li>
              <li>• Gel Documentation Systems</li>
              <li>• Tissue Lyser</li>
              <li>• Centrifuges</li>
              <li>• Sonicators</li>
              <li>• Incubators</li>
              <li>• Ultra-low Temperature Freezers (-80°C, -20°C)</li>
              <li>• Soxhlet Apparatus</li>
              <li>• Weighing Balances</li>
              <li>• pH Meters</li>
              <li>• Water Purification Systems</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

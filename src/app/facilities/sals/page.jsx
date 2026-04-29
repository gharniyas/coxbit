'use client';
import { useState } from 'react';
import TabNavigation from '../../components/TabNavigation';

export default function SALS() {
  const [activeTab, setActiveTab] = useState(0);

  const facilities = [
    {
      id: 0,
      title: "Molecular Biology Lab",
      fullTitle: "1. Molecular Biology Laboratory – Shared Innovation Facility",
      color: "blue",
      content: [
        "The Molecular Biology Laboratory at COXBIT is a fully equipped, state-of-the-art facility designed to support advanced research, innovation and product development in agriculture and biotechnology. The laboratory houses essential equipment including RO water systems, digital autoclaves, laminar airflow chambers, PCR and real-time PCR systems, electrophoresis units, gel documentation systems and tissue lyser, along with supporting instruments such as centrifuges, sonicators, incubators and ultra-low temperature freezers (-80°C and -20°C). Additional analytical tools such as Soxhlet apparatus, weighing balances, pH meters and water purification systems further strengthen its research capabilities.",
        "A key strength of this facility is its shared-access model, where common laboratory infrastructure is made available to startups, students, researchers and innovators utilizing the cabin and floor space facilities. This enables users to carry out experimental work, validate concepts and develop products without the burden of investing in high-cost instrumentation.",
        "By offering free access to essential common facilities, COXBIT significantly lowers entry barriers, accelerates research activities and fosters a collaborative innovation ecosystem. This initiative plays a crucial role in translating ideas into viable technologies and products, making the laboratory a strong enabler of entrepreneurship and applied biotechnology research."
      ],
      equipment: [
        "RO Water Systems",
        "Digital Autoclaves",
        "Laminar Airflow Chambers",
        "PCR & Real-time PCR Systems",
        "Electrophoresis Units",
        "Gel Documentation Systems",
        "Tissue Lyser",
        "Centrifuges",
        "Sonicators",
        "Incubators",
        "Ultra-low Temperature Freezers (-80°C, -20°C)",
        "Soxhlet Apparatus",
        "Weighing Balances",
        "pH Meters",
        "Water Purification Systems"
      ]
    },
    {
      id: 1,
      title: "Proteomics & Metabolomics",
      fullTitle: "2. High-Throughput Proteomics & Metabolomics Facility",
      color: "green",
      content: [
        "The Centre of Excellence in Biotechnology (COXBIT) has established a state-of-the-art high-throughput facility dedicated to advanced proteomics and metabolomics research, enabling precise and comprehensive analysis of complex biological samples. The facility is equipped with advanced instrumentation, including the GC-MS/MS (Shimadzu Nexis GC–2030 coupled with TQ-8040 NX Triple Quadrupole Mass Spectrometer), UHPLC coupled with LC-MS/MS (Shimadzu LCMS-8045 with PDA and fluorescence detector), Preparative HPLC System with RID, PDA and fraction collector, and Nano LC coupled with MALDI TOF/TOF Mass Spectrometer (Shimadzu Axima Performance).",
        "These integrated platforms form part of the 'High Throughput Platform for Proteomics and Metabolomics', supporting detailed profiling, identification and quantification of biomolecules across applications in agriculture, food, health and biotechnology.",
        "A key highlight of this facility is its accessible and enabling environment for students, researchers and startups. The cabin and floor space users are provided access to these high-end facilities at a subsidized cost, making advanced analytical technologies more affordable and within reach.",
        "By reducing the financial burden associated with high-cost instrumentation, COXBIT enables startups and innovators to focus on product development and commercialization, while offering students and researchers valuable hands-on experience with industry-grade platforms.",
        "Through this model, COXBIT strengthens its role in fostering innovation, enhancing research capabilities and driving translational outcomes in proteomics and metabolomics."
      ],
      features: [
        "Perform advanced molecular characterization and biomarker discovery",
        "Validate product quality, safety and efficacy",
        "Accelerate research outcomes and technology development",
        "Bridge the gap between academic research and industrial application"
      ]
    },
    {
      id: 2,
      title: "Tissue Culture Facility",
      fullTitle: "3. Micropropagation and Plant Tissue Culture Facility",
      color: "purple",
      content: [
        "The Plant Tissue Culture Facility at COXBIT is a well-established, state-of-the-art unit designed to support advanced research, innovation and entrepreneurship in plant biotechnology. The facility is comprehensively equipped to handle all stages of plant tissue culture and micropropagation, providing an ideal platform for commercial R&D applications, product development and skill training.",
        "The facility is systematically organized into specialized functional units to ensure efficient workflow and strict aseptic conditions. It includes a media preparation room for culture formulation; an aseptic transfer area equipped with laminar airflow chambers for contamination-free handling; a sterilization unit with autoclaves; and a wash area for proper cleaning of glassware and instruments. In addition, a controlled growth room is maintained under optimal environmental conditions to support in vitro culture development and ensure operational efficiency.",
        "A key strength of this facility is its end-to-end capability, supported by a primary hardening unit with a poly tunnel and fogging system, enabling the successful transition of plantlets from in vitro to ex vitro conditions. This integrated setup is highly beneficial for startups and entrepreneurs engaged in commercial micropropagation and plant-based product development. The facility also supports callus and suspension cultures, enabling applications in secondary metabolite production and bioprocessing.",
        "Standardized protocols are available for important crops and ornamentals such as Syngonium, banana and sugarcane, allowing users to reduce development time and rapidly scale their operations. The facility also provides planting materials, ex-agar plants and proliferating cultures to interested stakeholders. In addition, hands-on training programs in in vitro regeneration techniques are conducted regularly for students, researchers and entrepreneurs.",
        "By providing shared access to advanced infrastructure, COXBIT enables users to carry out research, validate technologies and develop products without the need for high capital investment. This facility plays a vital role in bridging research and commercialization, strengthening COXBIT's mission to promote sustainable biotechnology innovation and startup-driven growth."
      ]
    },
    {
      id: 3,
      title: "Cold Room Facility",
      fullTitle: "4. Advanced Cold Room Facility for Research & Storage",
      color: "cyan",
      content: [
        "The Centre of Excellence in Biotechnology (COXBIT) offers advanced cold room facilities designed to support startups, researchers and industry partners in the safe storage and preservation of valuable biological materials. These facilities play a critical role in maintaining the viability and quality of samples for long-term research and development applications.",
        "Furnished with precise temperature control systems (2 to 4°C) and continuous monitoring, the cold rooms provide an optimal environment for storing genetic materials, seeds, microbial cultures, plant tissues and other sensitive biological samples. This ensures minimal degradation and preserves biological activity for future experimentation, validation and analysis.",
        "Designed to meet research and industry standards, the facility ensures safe storage and ready accessibility of biological materials, enabling startups and researchers to advance their work without limitations related to sample preservation. By providing reliable cold room facilities, COXBIT supports research, product development and sustainable biotechnology solutions."
      ],
      applications: [
        "Conservation of agricultural, forestry and horticultural seeds and germplasm for genetic improvement studies",
        "Storage of DNA, RNA and other genetic resources for molecular biology and genomics research",
        "Maintenance of microbial and cell culture samples for biotechnology applications",
        "Support for long-term experimental studies and reproducibility"
      ]
    },
    {
      id: 4,
      title: "Bioinformatics Server",
      fullTitle: "5. Advanced Bioinformatics Server for AI-Driven Agri-Biotech Research",
      color: "orange",
      content: [
        "The Bioinformatics Server Facility at COXBIT is a high-performance computational platform established to support startups and students engaged in AI-driven biological data analysis and agri-biotechnology innovation. The facility is powered by a DELL high-performance server with 512 GB RAM, enabling efficient processing and analysis of large-scale datasets generated from genomics, transcriptomics, proteomics, metabolomics and agricultural research systems. This infrastructure is critical for enabling precision agriculture, crop improvement, and sustainable agri-food system development through advanced data-driven research.",
        "The facility provides a comprehensive suite of computational and AI-enabled analysis tools for genomics, transcriptomics, metagenomics, molecular docking and pathway analysis, allowing users to convert complex biological and agricultural data into actionable scientific and innovation insights. Key applications include crop trait discovery, stress tolerance gene identification, plant–microbe interaction studies, soil and microbiome analysis and functional food development. The system is further strengthened with virtual machine-based access, enabling startups, researchers and students to work in a flexible, scalable, and secure computational environment.",
        "Advanced platforms such as OmicsBox and Discovery Studio enhance capabilities in OMICS data analysis, molecular modelling and AI-assisted agricultural and drug discovery research. Importantly, this facility addresses critical gaps in the startup ecosystem such as limited access to high-end computational infrastructure, lack of integrated bioinformatics tools and challenges in advanced data interpretation, which often hinder early-stage innovation.",
        "Overall, the Bioinformatics Server Facility plays a pivotal role in promoting AI-integrated agri-biotech innovation, enabling startups and students to develop predictive biological models, climate-smart agricultural solutions and value-added bio-based products. It significantly strengthens translational research, entrepreneurship and technology-driven agricultural development at COXBIT."
      ]
    }
  ];

  const tabs = facilities.map(f => ({ label: f.title }));

  const currentFacility = facilities[activeTab];

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">State of Art Laboratory Facilities</h1>
        <p className="text-xl text-gray-600 text-center mb-6">Shared Access Laboratory Services (SALS)</p>
        
        {/* Facility Tabs */}
        <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Facility Content */}
        <div className="bg-white rounded-b-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {currentFacility.fullTitle}
          </h2>
          
          <div className="space-y-3 text-gray-700 leading-relaxed max-h-96 overflow-y-auto pr-2">
            {currentFacility.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Equipment List */}
          {currentFacility.equipment && (
            <div 
              className="mt-6 border-l-4 p-4"
              style={{
                backgroundColor: currentFacility.color === 'blue' ? '#eff6ff' : '#f0fdf4',
                borderColor: currentFacility.color === 'blue' ? '#3b82f6' : '#10b981'
              }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Equipment Available:</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                {currentFacility.equipment.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Features List */}
          {currentFacility.features && (
            <div 
              className="mt-6 border-l-4 p-4"
              style={{
                backgroundColor: '#f0fdf4',
                borderColor: '#10b981'
              }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Capabilities:</h3>
              <ul className="space-y-2 text-gray-700">
                {currentFacility.features.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Applications List */}
          {currentFacility.applications && (
            <div 
              className="mt-6 border-l-4 p-4"
              style={{
                backgroundColor: '#ecfeff',
                borderColor: '#06b6d4'
              }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Applications:</h3>
              <ul className="space-y-2 text-gray-700">
                {currentFacility.applications.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

'use client';
import { useState } from 'react';
import TabNavigation from '../../components/TabNavigation';
import ImageCarousel from '../../components/ImageCarousel';

export default function SALS() {
  const [activeTab, setActiveTab] = useState(0);

  const facilities = [
    {
      id: 0,
      title: "Molecular Biology Lab",
      images: ["/Shared lab facility/IMG_1579.JPG","/Shared lab facility/IMG_1600.JPG","/Shared lab facility/IMG_1629.JPG","/Shared lab facility/IMG_5254.JPG"],
      imageLabel: "Shared Lab Facility",
      fullTitle: "1. Molecular Biology Laboratory – Shared Innovation Facility",
      color: "blue",
      content: [
        "The Molecular Biology Laboratory at the Centre of Excellence in Biotechnology (COXBIT) plays <b>a crucial role in strengthening the biotechnology ecosystem</b> by serving as an integrated and innovation-driven platform for startups, students, researchers and industries. Its importance lies in its ability to <b>transform scientific knowledge into real-world solutions</b>, enabling advanced research and product development that address key challenges in agriculture, healthcare, food technology and environmental sustainability. The laboratory provides a supportive environment where ideas can be designed, tested, and refined into practical applications, ensuring that research moves beyond theory into impactful outcomes.",
        "A key significance of the laboratory is its role as a <b>bridge between academia and industry</b>, fostering interdisciplinary collaboration and promoting translational research that leads to scalable and commercially viable technologies. By aligning academic research with industrial needs, it ensures relevance, efficiency and innovation in biotechnology advancements. For startups, the lab is highly valuable as it <b>reduces entry barriers</b> by offering mentorship, incubation support, and shared resources, enabling them to convert early-stage ideas into prototypes and market-ready solutions while accelerating innovation cycles.",
        "The laboratory is equally important for industries, as it provides <b>customized research support, product validation and quality assessment</b>, helping improve product reliability, ensure compliance, and enhance competitiveness. This collaborative approach strengthens industrial innovation and shortens development timelines. With a strong focus on sustainability and bio-based solutions, the lab contributes to the development of environmentally responsible technologies that meet future demands.",
        "Overall, the Molecular Biology Laboratory at COXBIT acts as a <b>catalyst for scientific excellence, entrepreneurship and economic growth</b>, while also supporting skill development, knowledge dissemination and the creation of impactful solutions to emerging societal challenges."
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
      images: ["/Proteomics and metabolomics/IMG-20260424-WA0014.jpg","/Proteomics and metabolomics/IMG-20260424-WA0015.jpg","/Proteomics and metabolomics/IMG-20260424-WA0016.jpg","/Proteomics and metabolomics/IMG-20260424-WA0017.jpg"],
      imageLabel: "Proteomics & Metabolomics Facility",
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
      images: ["/Common facilities/DSC03480.JPG"],
      imageLabel: "Common Facilities",
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
      images: ["/Facility Photos/Cold Room.jpg"],
      imageLabel: "Cold Room Facility",
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
      images: ["/Facility Photos/Bioinformatics - Server Room.jpg"],
      imageLabel: "Bioinformatics Server Room",
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
    <div className="min-h-screen bg-gray-50">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            Facilities
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            SALS &ndash; Shared Access Lab Services
          </h1>
          <p className="text-amber-100 mt-3 max-w-2xl leading-relaxed">
            Shared laboratory infrastructure and instrumentation made available to
            startups, students, researchers and industry partners.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Facility Tabs */}
        <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Facility Content */}
        <div className="bg-white border border-gray-200 border-t-0 rounded-b-sm shadow-sm p-6">
          <h2 className="font-serif text-2xl font-bold text-[#6b4226]">
            {currentFacility.fullTitle}
          </h2>
          <div className="w-16 h-1 bg-[#c89b3c] mt-3 mb-6" />

          {currentFacility.images && (
            <ImageCarousel
              key={currentFacility.id}
              images={currentFacility.images}
              alt={currentFacility.imageLabel}
            />
          )}

          <div className="space-y-3 text-gray-700 leading-relaxed pr-2">
            {currentFacility.content.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>

          {/* Equipment List */}
          {currentFacility.equipment && (
            <div className="mt-6 bg-gray-50 border border-gray-200 border-l-4 border-l-[#c89b3c] p-4 rounded-sm">
              <h3 className="font-serif text-lg font-bold text-[#6b4226] mb-3">Key Equipment Available:</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                {currentFacility.equipment.map((item, index) => (
                  <li key={index}>&bull; {item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Features List */}
          {currentFacility.features && (
            <div className="mt-6 bg-gray-50 border border-gray-200 border-l-4 border-l-[#c89b3c] p-4 rounded-sm">
              <h3 className="font-serif text-lg font-bold text-[#6b4226] mb-3">Key Capabilities:</h3>
              <ul className="space-y-2 text-gray-700">
                {currentFacility.features.map((item, index) => (
                  <li key={index}>&bull; {item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Applications List */}
          {currentFacility.applications && (
            <div className="mt-6 bg-gray-50 border border-gray-200 border-l-4 border-l-[#c89b3c] p-4 rounded-sm">
              <h3 className="font-serif text-lg font-bold text-[#6b4226] mb-3">Applications:</h3>
              <ul className="space-y-2 text-gray-700">
                {currentFacility.applications.map((item, index) => (
                  <li key={index}>&bull; {item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

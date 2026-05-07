"use client";
import { useState } from "react";
import TabNavigation from "../components/TabNavigation";

export default function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 0,
      title: "DBT Phenomics Platform",
      fullTitle:
        "COXBIT DBT–Supported Phenomics Platform for Climate-Smart Agriculture",
      outlay: "₹339.32 lakhs",
      fundedBy: "Department of Biotechnology (DBT), Government of India",
      color: "blue",
      content: [
        "The Centre of Excellence in Biotechnology (COXBIT) has established an advanced Phenomics Platform as a DBT-funded programme, supported by the Department of Biotechnology (DBT), Government of India under the DBT–Builder Programme, with a project outlay of ₹339.32 lakhs. This facility represents a significant advancement in high-throughput plant phenotyping, enabling precise evaluation of crop responses under water deficit and environmental stress conditions.",
        "The platform enables precision phenotyping of mapping populations and diverse germplasm lines, supporting detailed analysis of growth, yield, and stress-responsive traits. It plays a crucial role in understanding drought adaptation mechanisms and identifying superior genotypes with enhanced water-use efficiency and climate resilience, thereby contributing to the development of climate-smart crop varieties.",
        "The facility is equipped with a state-of-the-art drought simulation system, integrated with automated control systems and advanced data acquisition software. The phenomics area is enclosed within an automatic rainout shelter (38 m × 8 m), allowing precise regulation of rainfall and environmental parameters for controlled drought simulation and accurate monitoring of plant responses.",
        "A key feature of the platform is the Automatic Mini-Lysimeter (MLM)-based system, incorporating mini-lysimeters and soil sensors to monitor soil moisture dynamics, water uptake, and root-zone temperature. This enables high-resolution physiological data generation to understand plant–water interactions and support selection of drought-tolerant lines.",
        "By integrating phenomics with genomics and bioinformatics tools, the DBT-funded Phenomics Facility at COXBIT serves as a national-level resource for plant stress biology and crop improvement research. It accelerates the development of climate-resilient and high-yielding crop varieties, contributing to the goals of sustainable and climate-smart agriculture in India.",
      ],
    },
    {
      id: 1,
      title: "Native Species Seed Vault",
      fullTitle:
        "Establishment of Native Species Seed Vault with Cryogenic Facility",
      outlay: "₹10.50 lakh",
      fundedBy: "Government of Tamil Nadu",
      color: "green",
      content: [
        "The Centre of Excellence in Biotechnology (COXBIT) has obtained approval from the Government of Tamil Nadu for the project titled 'Establishment of a Native Species Seed Vault with Cryogenic Facility.' This initiative marks a significant step towards the conservation and safeguarding of Tamil Nadu's native and endemic plant genetic resources.",
        "The proposed Seed Vault will serve as a state-level germplasm repository, ensuring long-term preservation of indigenous plant species through cryogenic storage and advanced biotechnological conservation methods. By maintaining seeds and propagules at ultra-low temperatures, the facility will protect rare, threatened, and economically important native species from genetic erosion, habitat loss, and environmental stress, thereby strengthening biodiversity conservation efforts in the state.",
        "Beyond conservation, the facility will function as a research and reference centre supporting studies in seed physiology, cryobiology, and genetic characterization. It will also foster collaborations with universities, research institutions, and government agencies, enhancing Tamil Nadu's role in biodiversity research and biotechnological innovation.",
        "With a project outlay of ₹10.50 lakh, this initiative reflects COXBIT's commitment to sustainable biotechnology, biodiversity preservation, and environmental stewardship, aligning with the State's vision of innovation-led and ecologically responsible development for future generations.",
      ],
    },
    {
      id: 2,
      title: "TNAPEx MSME Programme",
      fullTitle:
        "COXBIT–TNAPEx Programme for MSME Food Product Development and Value Addition",
      outlay: "₹20,00,000",
      fundedBy: "TNAPEx–RAMP (Raising and Accelerating MSME Performance)",
      color: "purple",
      content: [
        "The TNAPEx – Supporting MSMEs in New Product Design and Technical Assistance Initiative is a flagship programme aimed at strengthening innovation, entrepreneurship, and value addition in the food processing sector across Tamil Nadu. Implemented under the TNAPEx–RAMP (Raising and Accelerating MSME Performance) Programme, it focuses on transforming innovative ideas into commercially viable, market-ready food products with strong societal and market relevance.",
        "Under this initiative, the Centre of Excellence in Biotechnology (COXBIT), Tamil Nadu Agricultural University, Coimbatore, serves as a knowledge and technical partner, providing scientific expertise, infrastructure support, and mentoring for product development and commercialization. COXBIT enables the translation of laboratory-level innovations into scalable, industry-ready food solutions, effectively bridging the gap between research and the market.",
        "The programme emphasizes functional food development and value addition of agro-based resources, aligned with the State's vision of promoting agro-entrepreneurship and agri-biotech-driven rural development. It provides MSMEs and entrepreneurs with technical support in product formulation, quality analysis, packaging development, and regulatory compliance, thereby strengthening innovation capacity in the food sector.",
        "With a project outlay of Rs. 20,00,000, the initiative supports capacity building, product innovation, and technical assistance for emerging enterprises. By leveraging COXBIT's advanced analytical facilities and expert mentorship, TNAPEx fosters the development of safe, innovative and sustainable food products, contributing to improved nutrition, rural livelihood enhancement, and MSME growth in Tamil Nadu.",
      ],
    },
    {
      id: 3,
      title: "BIRAC E-YUVA Programme",
      fullTitle:
        "BIRAC E-YUVA Programme – Bio-Entrepreneurship and Innovation Support Initiative",
      outlay: "N/A",
      fundedBy: "BIRAC, Department of Biotechnology, Government of India",
      color: "orange",
      content: [
        "The Biotechnology Industry Research Assistance Council (BIRAC), under the Department of Biotechnology, Government of India, implements the E-YUVA (Empowering Youth for Undertaking Value Added Innovations) programme to promote a strong culture of innovation, research translation and entrepreneurship in biotechnology among young researchers.",
        "The programme supports undergraduate, postgraduate and postdoctoral innovators through structured training, mentorship, and funding support, enabling the transformation of innovative ideas into viable technologies and market-ready products.",
        "Within this framework, the Centre of Excellence in Biotechnology (COXBIT) acts as an enabling ecosystem platform by nurturing early-stage innovators, providing technical guidance, and supporting translational research and bio-entrepreneurship development. This strengthens the pathway from academic research to startup creation and biotechnology-based innovation outcomes.",
      ],
    },
  ];

  const tabs = projects.map((p) => ({ label: p.title }));

  const currentProject = projects[activeProject];

  return (
    <div className="min-h-screen bg-gray-50 py-6 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Removed the 'Projects' heading for a cleaner look */}

        {/* Project Tabs */}
        <TabNavigation
          tabs={tabs}
          activeTab={activeProject}
          onTabChange={setActiveProject}
        />

        {/* Project Content */}
        <div className="bg-white rounded-b-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {currentProject.fullTitle}
          </h2>

          <div className="space-y-3 text-gray-700 leading-relaxed max-h-96 overflow-y-auto pr-2">
            {currentProject.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div
            className="mt-6 border-l-4 p-4"
            style={{
              backgroundColor:
                currentProject.color === "blue"
                  ? "#eff6ff"
                  : currentProject.color === "green"
                    ? "#f0fdf4"
                    : currentProject.color === "purple"
                      ? "#faf5ff"
                      : "#fff7ed",
              borderColor:
                currentProject.color === "blue"
                  ? "#3b82f6"
                  : currentProject.color === "green"
                    ? "#10b981"
                    : currentProject.color === "purple"
                      ? "#a855f7"
                      : "#f97316",
            }}
          >
            {currentProject.outlay !== "N/A" && (
              <p className="font-semibold text-gray-900">
                Project Outlay: {currentProject.outlay}
              </p>
            )}
            <p className="text-gray-700">
              {currentProject.outlay !== "N/A"
                ? "Funded by: "
                : "Implemented by: "}
              {currentProject.fundedBy}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

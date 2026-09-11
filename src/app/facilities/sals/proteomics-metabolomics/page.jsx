import FacilityDetailPage from "../../../components/FacilityDetailPage";

export default function ProteomicsMetabolomics() {
  return (
    <FacilityDetailPage
      eyebrow="Facilities · SALS"
      bannerTitle="Proteomics & Metabolomics"
      bannerDescription="High-throughput analytical platforms for advanced proteomics and metabolomics research."
      fullTitle="High-Throughput Proteomics & Metabolomics Facility"
      imageLabel="Proteomics & Metabolomics Facility"
      images={[
        "/Proteomics and metabolomics/IMG-20260424-WA0014.jpg",
        "/Proteomics and metabolomics/IMG-20260424-WA0017.jpg",
        "/Proteomics and metabolomics/IMG-20260424-WA0018.jpg",
        "/Proteomics and metabolomics/IMG-20260424-WA0019.jpg",
        "/Proteomics and metabolomics/IMG-20260424-WA0020.jpg",
        "/Proteomics and metabolomics/IMG-20260424-WA0021.jpg",
      ]}
      content={[
        "The Centre of Excellence in Biotechnology (COXBIT) has established a state-of-the-art high-throughput facility dedicated to advanced proteomics and metabolomics research, enabling precise and comprehensive analysis of complex biological samples. The facility is equipped with advanced instrumentation, including the GC-MS/MS (Shimadzu Nexis GC–2030 coupled with TQ-8040 NX Triple Quadrupole Mass Spectrometer), UHPLC coupled with LC-MS/MS (Shimadzu LCMS-8045 with PDA and fluorescence detector), Preparative HPLC System with RID, PDA and fraction collector, and Nano LC coupled with MALDI TOF/TOF Mass Spectrometer (Shimadzu Axima Performance).",
        "These integrated platforms form part of the 'High Throughput Platform for Proteomics and Metabolomics', supporting detailed profiling, identification and quantification of biomolecules across applications in agriculture, food, health and biotechnology.",
        "A key highlight of this facility is its accessible and enabling environment for students, researchers and startups. The cabin and floor space users are provided access to these high-end facilities at a subsidized cost, making advanced analytical technologies more affordable and within reach.",
        "By reducing the financial burden associated with high-cost instrumentation, COXBIT enables startups and innovators to focus on product development and commercialization, while offering students and researchers valuable hands-on experience with industry-grade platforms.",
        "Through this model, COXBIT strengthens its role in fostering innovation, enhancing research capabilities and driving translational outcomes in proteomics and metabolomics.",
      ]}
      extraListHeading="Key Capabilities:"
      extraListItems={[
        "Perform advanced molecular characterization and biomarker discovery",
        "Validate product quality, safety and efficacy",
        "Accelerate research outcomes and technology development",
        "Bridge the gap between academic research and industrial application",
      ]}
    />
  );
}

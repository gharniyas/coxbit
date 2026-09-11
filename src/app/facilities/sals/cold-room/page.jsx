import FacilityDetailPage from "../../../components/FacilityDetailPage";

export default function ColdRoom() {
  return (
    <FacilityDetailPage
      eyebrow="Facilities · SALS"
      bannerTitle="Cold Room Facility"
      bannerDescription="Temperature-controlled storage for the safe preservation of valuable biological materials."
      fullTitle="Advanced Cold Room Facility for Research & Storage"
      imageLabel="Cold Room Facility"
      images={[
        "/cold room/CR 1 (1).jpeg",
        "/cold room/CR 1 (2).jpeg",
        "/cold room/CR 1 (3).jpeg",
        "/cold room/CR 4.jpeg",
      ]}
      content={[
        "The Centre of Excellence in Biotechnology (COXBIT) offers advanced cold room facilities designed to support startups, researchers and industry partners in the safe storage and preservation of valuable biological materials. These facilities play a critical role in maintaining the viability and quality of samples for long-term research and development applications.",
        "Furnished with precise temperature control systems (2 to 4°C) and continuous monitoring, the cold rooms provide an optimal environment for storing genetic materials, seeds, microbial cultures, plant tissues and other sensitive biological samples. This ensures minimal degradation and preserves biological activity for future experimentation, validation and analysis.",
        "Designed to meet research and industry standards, the facility ensures safe storage and ready accessibility of biological materials, enabling startups and researchers to advance their work without limitations related to sample preservation. By providing reliable cold room facilities, COXBIT supports research, product development and sustainable biotechnology solutions.",
      ]}
      extraListHeading="Applications:"
      extraListItems={[
        "Conservation of agricultural, forestry and horticultural seeds and germplasm for genetic improvement studies",
        "Storage of DNA, RNA and other genetic resources for molecular biology and genomics research",
        "Maintenance of microbial and cell culture samples for biotechnology applications",
        "Support for long-term experimental studies and reproducibility",
      ]}
    />
  );
}

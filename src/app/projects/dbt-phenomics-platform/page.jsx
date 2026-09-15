import ProjectDetailPage from "../../components/ProjectDetailPage";

export default function DbtPhenomicsPlatform() {
  return (
    <ProjectDetailPage
      fullTitle="COXBIT DBT–Supported Phenomics Platform for Climate-Smart Agriculture"
      outlay="₹339.32 lakhs"
      fundedBy="Department of Biotechnology (DBT), Government of India"
      images={[
        "/dbt phenomics/1.png",
        "/dbt phenomics/2.JPG",
        "/dbt phenomics/3.JPG",
        "/dbt phenomics/4.JPG",
      ]}
      content={[
        "The Centre of Excellence in Biotechnology (COXBIT) has established an advanced Phenomics Platform as a DBT-funded programme, supported by the Department of Biotechnology (DBT), Government of India under the DBT–Builder Programme, with a project outlay of ₹339.32 lakhs. This facility represents a significant advancement in high-throughput plant phenotyping, enabling precise evaluation of crop responses under water deficit and environmental stress conditions.",
        "The platform enables precision phenotyping of mapping populations and diverse germplasm lines, supporting detailed analysis of growth, yield, and stress-responsive traits. It plays a crucial role in understanding drought adaptation mechanisms and identifying superior genotypes with enhanced water-use efficiency and climate resilience, thereby contributing to the development of climate-smart crop varieties.",
        "The facility is equipped with a state-of-the-art drought simulation system, integrated with automated control systems and advanced data acquisition software. The phenomics area is enclosed within an automatic rainout shelter (38 m × 8 m), allowing precise regulation of rainfall and environmental parameters for controlled drought simulation and accurate monitoring of plant responses.",
        "A key feature of the platform is the Automatic Mini-Lysimeter (MLM)-based system, incorporating mini-lysimeters and soil sensors to monitor soil moisture dynamics, water uptake, and root-zone temperature. This enables high-resolution physiological data generation to understand plant–water interactions and support selection of drought-tolerant lines.",
        "By integrating phenomics with genomics and bioinformatics tools, the DBT-funded Phenomics Facility at COXBIT serves as a national-level resource for plant stress biology and crop improvement research. It accelerates the development of climate-resilient and high-yielding crop varieties, contributing to the goals of sustainable and climate-smart agriculture in India.",
      ]}
    />
  );
}

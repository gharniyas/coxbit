import FacilityDetailPage from "../../../components/FacilityDetailPage";

export default function BioinformaticsServer() {
  return (
    <FacilityDetailPage
      eyebrow="Facilities · SALS"
      bannerTitle="Bioinformatics Server"
      bannerDescription="A high-performance computational platform for AI-driven biological data analysis and agri-biotech innovation."
      fullTitle="Advanced Bioinformatics Server for AI-Driven Agri-Biotech Research"
      imageLabel="Bioinformatics Server Room"
      images={["/Bioinformatics Server.jpeg"]}
      content={[
        "The Bioinformatics Server Facility at COXBIT is a high-performance computational platform established to support startups and students engaged in AI-driven biological data analysis and agri-biotechnology innovation. The facility is powered by a DELL high-performance server with 512 GB RAM, enabling efficient processing and analysis of large-scale datasets generated from genomics, transcriptomics, proteomics, metabolomics and agricultural research systems. This infrastructure is critical for enabling precision agriculture, crop improvement, and sustainable agri-food system development through advanced data-driven research.",
        "The facility provides a comprehensive suite of computational and AI-enabled analysis tools for genomics, transcriptomics, metagenomics, molecular docking and pathway analysis, allowing users to convert complex biological and agricultural data into actionable scientific and innovation insights. Key applications include crop trait discovery, stress tolerance gene identification, plant–microbe interaction studies, soil and microbiome analysis and functional food development. The system is further strengthened with virtual machine-based access, enabling startups, researchers and students to work in a flexible, scalable, and secure computational environment.",
        "Advanced platforms such as OmicsBox and Discovery Studio enhance capabilities in OMICS data analysis, molecular modelling and AI-assisted agricultural and drug discovery research. Importantly, this facility addresses critical gaps in the startup ecosystem such as limited access to high-end computational infrastructure, lack of integrated bioinformatics tools and challenges in advanced data interpretation, which often hinder early-stage innovation.",
        "Overall, the Bioinformatics Server Facility plays a pivotal role in promoting AI-integrated agri-biotech innovation, enabling startups and students to develop predictive biological models, climate-smart agricultural solutions and value-added bio-based products. It significantly strengthens translational research, entrepreneurship and technology-driven agricultural development at COXBIT.",
      ]}
    />
  );
}

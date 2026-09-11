import FacilityDetailPage from "../../components/FacilityDetailPage";

export default function SALS() {
  return (
    <FacilityDetailPage
      eyebrow="Facilities"
      bannerTitle="SALS – Shared Access Lab Services"
      bannerDescription="Shared laboratory infrastructure and instrumentation made available to startups, students, researchers and industry partners."
      fullTitle="Molecular Biology Laboratory – Shared Innovation Facility"
      imageLabel="Shared Lab Facility"
      images={[
        "/Shared lab facility/IMG_1579.JPG",
        "/Shared lab facility/IMG_1600.JPG",
        "/Shared lab facility/IMG_1629.JPG",
        "/Shared lab facility/IMG_5254.JPG",
      ]}
      content={[
        "The Molecular Biology Laboratory at the Centre of Excellence in Biotechnology (COXBIT) plays <b>a crucial role in strengthening the biotechnology ecosystem</b> by serving as an integrated and innovation-driven platform for startups, students, researchers and industries. Its importance lies in its ability to <b>transform scientific knowledge into real-world solutions</b>, enabling advanced research and product development that address key challenges in agriculture, healthcare, food technology and environmental sustainability. The laboratory provides a supportive environment where ideas can be designed, tested, and refined into practical applications, ensuring that research moves beyond theory into impactful outcomes.",
        "A key significance of the laboratory is its role as a <b>bridge between academia and industry</b>, fostering interdisciplinary collaboration and promoting translational research that leads to scalable and commercially viable technologies. By aligning academic research with industrial needs, it ensures relevance, efficiency and innovation in biotechnology advancements. For startups, the lab is highly valuable as it <b>reduces entry barriers</b> by offering mentorship, incubation support, and shared resources, enabling them to convert early-stage ideas into prototypes and market-ready solutions while accelerating innovation cycles.",
        "The laboratory is equally important for industries, as it provides <b>customized research support, product validation and quality assessment</b>, helping improve product reliability, ensure compliance, and enhance competitiveness. This collaborative approach strengthens industrial innovation and shortens development timelines. With a strong focus on sustainability and bio-based solutions, the lab contributes to the development of environmentally responsible technologies that meet future demands.",
        "Overall, the Molecular Biology Laboratory at COXBIT acts as a <b>catalyst for scientific excellence, entrepreneurship and economic growth</b>, while also supporting skill development, knowledge dissemination and the creation of impactful solutions to emerging societal challenges.",
      ]}
      extraListHeading="Key Equipment Available:"
      extraListItems={[
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
        "Water Purification Systems",
      ]}
    />
  );
}

import FacilityDetailPage from "../../../components/FacilityDetailPage";

export default function TissueCulture() {
  return (
    <FacilityDetailPage
      eyebrow="Facilities · SALS"
      bannerTitle="Tissue Culture Facility"
      bannerDescription="A comprehensive plant tissue culture and micropropagation facility supporting research, innovation and entrepreneurship."
      fullTitle="Micropropagation and Plant Tissue Culture Facility"
      imageLabel="Tissue Culture Facility"
      images={[
        "/Tissue culture/Tissue culture 1 b.png",
        "/Tissue culture/1 a.png",
        "/Tissue culture/1.jpeg",
        "/Tissue culture/2.jpeg",
        "/Tissue culture/3 (2).jpeg",
      ]}
      content={[
        "The Plant Tissue Culture Facility at COXBIT is a well-established, state-of-the-art unit designed to support advanced research, innovation and entrepreneurship in plant biotechnology. The facility is comprehensively equipped to handle all stages of plant tissue culture and micropropagation, providing an ideal platform for commercial R&D applications, product development and skill training.",
        "The facility is systematically organized into specialized functional units to ensure efficient workflow and strict aseptic conditions. It includes a media preparation room for culture formulation; an aseptic transfer area equipped with laminar airflow chambers for contamination-free handling; a sterilization unit with autoclaves; and a wash area for proper cleaning of glassware and instruments. In addition, a controlled growth room is maintained under optimal environmental conditions to support in vitro culture development and ensure operational efficiency.",
        "A key strength of this facility is its end-to-end capability, supported by a primary hardening unit with a poly tunnel and fogging system, enabling the successful transition of plantlets from in vitro to ex vitro conditions. This integrated setup is highly beneficial for startups and entrepreneurs engaged in commercial micropropagation and plant-based product development. The facility also supports callus and suspension cultures, enabling applications in secondary metabolite production and bioprocessing.",
        "Standardized protocols are available for important crops and ornamentals such as Syngonium, banana and sugarcane, allowing users to reduce development time and rapidly scale their operations. The facility also provides planting materials, ex-agar plants and proliferating cultures to interested stakeholders. In addition, hands-on training programs in in vitro regeneration techniques are conducted regularly for students, researchers and entrepreneurs.",
        "By providing shared access to advanced infrastructure, COXBIT enables users to carry out research, validate technologies and develop products without the need for high capital investment. This facility plays a vital role in bridging research and commercialization, strengthening COXBIT's mission to promote sustainable biotechnology innovation and startup-driven growth.",
      ]}
    />
  );
}

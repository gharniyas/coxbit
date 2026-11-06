import ImageCarousel from "../components/ImageCarousel";

const bannerImages = [
  "/About coxbit/1.jpg",
  "/About coxbit/2.jpg",
  "/About coxbit/About COXBIT.jpg",
  "/About coxbit/IMG_1386.JPG",
  "/About coxbit/IMG_3396.JPG",
  "/About coxbit/IMG_3500.JPG",
  "/About coxbit/IMG_3507.JPG",
  "/About coxbit/IMG_6216.JPG",
  "/About coxbit/IMG_6592.JPG",
  "/About coxbit/Tree Planting.JPG",
];

export default function About() {
  return (
    <div className="min-h-screen bg-amber-100/60">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-2">
        <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm px-3 py-3 md:px-4 md:py-4">
          <div className="w-full">
            <ImageCarousel
              alt="COXBIT"
              images={bannerImages}
              fullWidth
              className="!max-w-lg !mb-2"
            />
          </div>
          <h1 className="font-serif text-lg md:text-xl font-bold text-[#6b4226]">
            About COXBIT
          </h1>
          <div className="text-sm text-gray-700 leading-snug space-y-2 mt-3">
            <p>
              The Centre of Excellence in Biotechnology (COXBIT) is a
              pioneering initiative established at Tamil Nadu Agricultural
              University (TNAU) with the support of the Government of Tamil
              Nadu. Operating under a{" "}
              <strong>Public–Private Partnership (PPP)</strong> mode, COXBIT
              serves as a dynamic platform to foster innovation, accelerate
              biotechnology research and translate scientific discoveries
              into scalable, real-world solutions.
            </p>
            <p>
              COXBIT is designed to bridge the gap between academia,
              industry and startups, creating a collaborative ecosystem
              that nurtures innovation from concept to commercialization.
              With access to state-of-the-art laboratories, advanced
              instrumentation and domain expertise and technology-driven
              entrepreneurship infrastructure, including dedicated cabin
              and floor spaces, the centre empowers researchers,
              entrepreneurs and enterprises to develop cutting-edge
              technologies and high-impact biobased products.
            </p>
            <p>
              The centre focuses on advancing biomolecules,
              high-performance enzymes, plant growth stimulants,
              sustainable agricultural bio-inputs, biopharmaceuticals,
              functional foods and nutraceuticals, while enabling
              technologies that enhance crop productivity, improve
              post-harvest management and support climate-resilient
              agriculture.
            </p>
            <p>
              COXBIT provides <strong>end-to-end support</strong> including
              product development, incubation support, technology
              validation, industry collaboration and market linkage,
              helping innovators transform ideas into impactful solutions.
              By integrating science, innovation and entrepreneurship, the
              centre is driving a new era of biotechnology-led
              transformation in agriculture and allied sectors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

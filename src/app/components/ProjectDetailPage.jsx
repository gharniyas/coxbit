import ImageCarousel from "./ImageCarousel";

const galleryImages = [
  "/Projects/1.png",
  "/Projects/2.JPG",
  "/Projects/3.JPG",
  "/Projects/4.JPG",
  "/Projects/20251029_104700.jpg (1).jpeg",
  "/Projects/IMG_8346.JPG (2).jpeg",
  "/Projects/Recovered_jpg_file(4247).jpg.jpeg",
  "/Projects/Recovered_jpg_file(4263).jpg.jpeg",
];

export default function ProjectDetailPage({
  fullTitle,
  content,
  outlay,
  fundedBy,
  images,
}) {
  return (
    <div className="min-h-screen bg-amber-100/60">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            Research &amp; Development
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            Projects
          </h1>
          <p className="text-amber-100 mt-3 max-w-2xl leading-relaxed">
            Government and institution funded research projects and
            programmes currently underway at COXBIT.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm p-6">
          <h2 className="font-serif text-2xl font-bold text-[#6b4226]">
            {fullTitle}
          </h2>
          <div className="w-16 h-1 bg-[#c89b3c] mt-3 mb-6" />

          <ImageCarousel alt="COXBIT Projects" images={images || galleryImages} />

          <div className="space-y-3 text-gray-700 leading-relaxed">
            {content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-6 bg-gray-50 border border-gray-200 border-l-4 border-l-[#c89b3c] p-4 rounded-sm">
            {outlay !== "N/A" && (
              <p className="font-semibold text-[#6b4226]">
                Project Outlay: {outlay}
              </p>
            )}
            <p className="text-gray-700">
              {outlay !== "N/A" ? "Funded by: " : "Implemented by: "}
              {fundedBy}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

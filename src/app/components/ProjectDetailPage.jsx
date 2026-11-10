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
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-2">
        <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm px-3 py-3 md:px-4 md:py-4">

          <div className="w-full">
            <ImageCarousel
              alt="COXBIT Projects"
              images={images || galleryImages}
              fullWidth
              className="!max-w-2xl !mb-2"
            />
          </div>

          <h1 className="font-serif text-lg md:text-xl font-bold text-[#6b4226]">
            Projects
          </h1>

          <div className="space-y-2 text-xs text-gray-700 leading-snug mt-3">
            {content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-6 bg-gray-50 border border-gray-200 border-l-4 border-l-[#c89b3c] p-4 rounded-sm text-xs">
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

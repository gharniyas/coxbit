import ImageCarousel from "./ImageCarousel";

const galleryImages = [
  "/TNAPEx/ACS visit.JPG",
  "/TNAPEx/DSC09238.JPG",
  "/TNAPEx/Recovered_jpg_file(4240).jpg",
  "/TNAPEx/Recovered_jpg_file(4291).jpg",
  "/TNAPEx/Recovered_jpg_file(4298).jpg",
  "/TNAPEx/WhatsApp Image 2026-06-05 at 17.26.10.jpeg",
  "/TNAPEx/4D2A9912.JPG",
  "/TNAPEx/FBM.jpeg",
];

export default function PartnerDetailPage({ title, children, images }) {
  return (
    <div className="min-h-screen bg-amber-100/60">
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-2">
        <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm px-3 py-3 md:px-4 md:py-4">

          <div className="w-full">
            <ImageCarousel
              alt="COXBIT Ecosystem Partners"
              images={images || galleryImages}
              fullWidth
              className="!max-w-2xl !mb-2"
            />
          </div>

          <h1 className="font-serif text-lg md:text-xl font-bold text-[#6b4226]">
            Ecosystem Partners
          </h1>

          <div className="mt-3 text-xs leading-snug">{children}</div>
        </div>
      </div>
    </div>
  );
}

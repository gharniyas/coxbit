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
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 py-2 flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
          <h1 className="font-serif text-base md:text-lg font-bold">
            Ecosystem Partners
          </h1>
          <p className="hidden md:block text-amber-100 text-xs leading-snug">
            Government and institutional partners supporting biotech
            startups and entrepreneurs at COXBIT.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-4">
        <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm px-3 py-4 md:px-4 md:py-5">

          <div className="w-full">
            <ImageCarousel alt="COXBIT Ecosystem Partners" images={images || galleryImages} fullWidth />
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}

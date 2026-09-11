import ImageCarousel from "./ImageCarousel";

const galleryImages = [
  "/TNAPEx/ACS visit.JPG",
  "/TNAPEx/DSC09238.JPG",
  "/TNAPEx/Recovered_jpg_file(4240).jpg",
  "/TNAPEx/Recovered_jpg_file(4291).jpg",
  "/TNAPEx/Recovered_jpg_file(4298).jpg",
  "/TNAPEx/WhatsApp Image 2026-06-05 at 17.26.10.jpeg",
];

export default function PartnerDetailPage({ title, children }) {
  return (
    <div className="min-h-screen bg-amber-100/60">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            Startup Ecosystem
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            Ecosystem Partners
          </h1>
          <p className="text-amber-100 mt-3 max-w-2xl leading-relaxed">
            Government and institutional partners supporting biotech
            startups and entrepreneurs at COXBIT.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm p-6">
          <h2 className="font-serif text-2xl font-bold text-[#6b4226]">
            {title}
          </h2>
          <div className="w-16 h-1 bg-[#c89b3c] mt-3 mb-6" />

          <ImageCarousel alt="COXBIT Ecosystem Partners" images={galleryImages} />

          {children}
        </div>
      </div>
    </div>
  );
}

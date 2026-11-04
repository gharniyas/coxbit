import ImageCarousel from "./ImageCarousel";

export default function FacilityDetailPage({
  eyebrow = "Facilities",
  bannerTitle,
  bannerDescription,
  fullTitle,
  images,
  imageLabel,
  content,
  extraListHeading,
  extraListItems,
}) {
  return (
    <div className="min-h-screen bg-amber-100/60">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 py-2 flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
          <h1 className="font-serif text-base md:text-lg font-bold">
            {bannerTitle}
          </h1>
          <p className="hidden md:block text-amber-100 text-xs leading-snug">
            {bannerDescription}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-4">
        <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm px-3 py-4 md:px-4 md:py-5">

          {images && images.length > 0 && (
            <div className="w-full">
              <ImageCarousel images={images} alt={imageLabel} fullWidth />
            </div>
          )}

          <div className="space-y-3 text-gray-700 leading-relaxed pr-2">
            {content.map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>

          {extraListItems && (
            <div className="mt-6 bg-gray-50 border border-gray-200 border-l-4 border-l-[#c89b3c] p-4 rounded-sm">
              <h3 className="font-serif text-lg font-bold text-[#6b4226] mb-3">
                {extraListHeading}
              </h3>
              <ul
                className={
                  extraListItems.length > 6
                    ? "grid md:grid-cols-2 gap-2 text-gray-700"
                    : "space-y-2 text-gray-700"
                }
              >
                {extraListItems.map((item, index) => (
                  <li key={index}>&bull; {item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

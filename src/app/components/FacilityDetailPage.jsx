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
        <div className="container mx-auto px-4 pt-7 pb-4 md:pt-9 md:pb-5">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-1">
            {eyebrow}
          </p>
          <h1 className="font-serif text-2xl md:text-3xl font-bold">
            {bannerTitle}
          </h1>
          <p className="text-amber-100 mt-1 max-w-2xl leading-relaxed">
            {bannerDescription}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-4">
        <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm px-3 py-4 md:px-4 md:py-5">

          {images && images.length > 0 && (
            <div className="mx-auto w-full max-w-[min(64rem,max(28rem,calc((100vh-420px)*1.5)))]">
              <ImageCarousel images={images} alt={imageLabel} />
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

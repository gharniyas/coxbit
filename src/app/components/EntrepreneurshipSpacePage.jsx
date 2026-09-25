import Link from "next/link";
import ImageCarousel from "./ImageCarousel";

const startupLinkClass =
  "font-medium text-[#6b4226] underline decoration-[#c89b3c] underline-offset-4 transition hover:text-[#8a6a1f] hover:decoration-[#8a6a1f]";

export default function EntrepreneurshipSpacePage({
  images,
  title,
  content,
  startupList,
}) {
  return (
    <div className="min-h-screen bg-amber-100/60">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 pt-7 pb-4 md:pt-9 md:pb-5">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-1">
            Facilities
          </p>
          <h1 className="font-serif text-2xl md:text-3xl font-bold">
            Technology Driven Entrepreneurship
          </h1>
          <p className="text-amber-100 mt-1 max-w-2xl leading-relaxed">
            Cabin and floor / knowledge space infrastructure supporting
            startups, entrepreneurs and innovators at COXBIT.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-4">
        <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm px-3 py-4 md:px-4 md:py-5">
          {images?.length > 0 && (
            <div className="mx-auto w-full max-w-[min(64rem,max(28rem,calc((100vh-420px)*1.5)))]">
              <ImageCarousel images={images} alt={title} />
            </div>
          )}
          <div
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <h3 className="mt-6 mb-2 font-serif text-lg font-bold text-[#6b4226]">
            COXBIT {title} Users
          </h3>
          <ol className="mt-4 ml-6 list-decimal space-y-2 text-gray-800">
            {startupList.map((item) => {
              const key = typeof item === "string" ? item : item.slug;

              return (
                <li key={key}>
                  {typeof item === "string" ? (
                    item
                  ) : (
                    <Link
                      href={`/facilities/entrepreneurship/${item.slug}`}
                      className={startupLinkClass}
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

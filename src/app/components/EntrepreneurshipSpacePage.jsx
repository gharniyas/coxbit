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
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-2">
        <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm px-3 py-3 md:px-4 md:py-4">
          {images?.length > 0 && (
            <div className="w-full">
              <ImageCarousel
                images={images}
                alt={title}
                fullWidth
                className="!max-w-2xl !mb-2"
              />
            </div>
          )}
          <h1 className="font-serif text-lg md:text-xl font-bold text-[#6b4226]">
            Technology Driven Entrepreneurship
          </h1>
          <div
            className="text-xs text-gray-700 leading-snug mt-3"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <h3 className="mt-6 mb-2 font-serif text-base font-bold text-[#6b4226]">
            COXBIT {title} Users
          </h3>
          <ol className="mt-4 ml-6 list-decimal space-y-2 text-xs text-gray-800">
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

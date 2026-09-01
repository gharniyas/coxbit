import Image from "next/image";
import Link from "next/link";

export default function PreviewCard({
  href,
  title,
  description,
  image,
  imageAlt,
  imageClassName,
  icon,
  subLinks,
}) {
  return (
    <div className="group bg-white border border-gray-200 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden flex flex-col">
      <Link href={href} className="block relative h-40 w-full bg-[#6b4226] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={imageAlt || title}
            fill
            className={`group-hover:scale-105 transition-transform duration-300 ${
              imageClassName || "object-cover"
            }`}
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-5xl">
            {icon}
          </div>
        )}
        <div className="absolute bottom-0 left-0 w-10 h-1 bg-[#c89b3c]" />
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <Link href={href}>
          <h3 className="font-serif text-lg font-bold text-[#6b4226] group-hover:text-[#8a6a1f] transition-colors duration-200">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mt-2 leading-relaxed flex-1">
          {description}
        </p>

        {subLinks && subLinks.length > 0 && (
          <ul className="mt-4 pt-4 border-t border-gray-100 space-y-1.5">
            {subLinks.map((sub) => (
              <li key={sub.href}>
                <Link
                  href={sub.href}
                  className="text-sm text-[#6b4226] hover:text-[#8a6a1f] hover:underline flex items-center gap-1.5"
                >
                  <span className="text-[#c89b3c]">&rsaquo;</span>
                  {sub.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#6b4226] hover:text-[#8a6a1f] transition-colors duration-200"
        >
          View Full Details
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

import Image from "../../../components/CloudinaryImage";
import Link from "next/link";
import { notFound } from "next/navigation";
import { startupProfilesList } from "../data";

export function generateStaticParams() {
  return startupProfilesList.map((profile) => ({
    slug: profile.slug,
  }));
}

export default async function StartupProfilePage({ params }) {
  const { slug } = await params;
  const profile = startupProfilesList.find((item) => item.slug === slug);

  if (!profile) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-amber-100/60">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 py-1.5 md:py-2">
          <p className="text-[#c89b3c] uppercase tracking-widest text-[10px] font-semibold mb-0.5">
            {profile.space}
          </p>
          <h1 className="font-serif text-xs md:text-sm font-bold">
            {profile.name}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-3">
        <Link
          href={
            profile.space === "Cabin Space"
              ? "/facilities/entrepreneurship"
              : "/facilities/entrepreneurship/floor-knowledge-space"
          }
          className="inline-flex items-center text-sm font-semibold text-[#6b4226] hover:text-[#8a6a1f]"
        >
          &larr; Back to Entrepreneurship Facilities
        </Link>

        <div className="mt-2 bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm p-3">
          <div className="relative mx-auto w-full max-w-xl h-[min(80vh,700px)] overflow-hidden border border-gray-200 bg-gray-50 rounded-sm">
            <Image
              src={profile.image}
              alt={profile.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 576px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

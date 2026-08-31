import Image from "next/image";
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
    <div className="min-h-screen bg-gray-50">
      {/* Page header banner */}
      <div className="bg-[#0a1f44] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            {profile.space}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            {profile.name}
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <Link
          href="/facilities/entrepreneurship"
          className="inline-flex items-center text-sm font-semibold text-[#0a1f44] hover:text-[#8a6a1f]"
        >
          &larr; Back to Entrepreneurship Facilities
        </Link>

        <div className="mt-4 bg-white border border-gray-200 rounded-sm shadow-sm p-6">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden border border-gray-200 bg-gray-50 rounded-sm">
            <Image
              src={profile.image}
              alt={profile.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 448px"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}

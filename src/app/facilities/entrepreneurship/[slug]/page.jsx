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
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/facilities/entrepreneurship"
          className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
        >
          Back to Entrepreneurship Facilities
        </Link>

        <div className="mt-4 overflow-hidden rounded-2xl bg-white shadow-lg">
          <div className="border-b border-gray-100 px-6 py-5">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              {profile.space}
            </p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              {profile.name}
            </h1>
          </div>

          <div className="p-6">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-sm">
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
    </div>
  );
}

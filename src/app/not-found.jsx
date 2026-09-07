import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-amber-100/60">
      <div className="text-center px-4">
        <p className="text-[#c89b3c] font-serif text-6xl font-bold mb-2">404</p>
        <h1 className="font-serif text-2xl md:text-3xl font-bold text-[#6b4226] mb-3">
          This page could not be found
        </h1>
        <p className="text-gray-700 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or may have been
          moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#c89b3c] hover:bg-[#b3872e] text-[#6b4226] font-semibold px-6 py-2.5 rounded-sm transition-colors duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

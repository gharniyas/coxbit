"use client";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import ImageCarousel from "../../components/ImageCarousel";
import { getEventBySlug } from "../eventsData";

export default function EventDetail({ params }) {
  const { slug } = use(params);
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-amber-100/60">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <Link
            href="/events-news"
            className="text-[#c89b3c] hover:text-amber-100 text-sm font-semibold inline-flex items-center gap-1.5 mb-4"
          >
            &larr; Back to Events &amp; Training
          </Link>
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            {event.date}
          </p>
          <h1 className="font-serif text-2xl md:text-4xl font-bold">
            {event.title}
          </h1>
          {event.registerLink && (
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a
                href={event.registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#c89b3c] hover:bg-[#b3872e] text-[#6b4226] font-semibold px-6 py-2.5 rounded-sm transition-colors duration-200"
              >
                Register
              </a>
              {event.qrImage && (
                <div className="text-center">
                  <Image
                    src={event.qrImage}
                    alt={`QR code to register for ${event.title}`}
                    width={100}
                    height={100}
                    className="border border-white/40 rounded-sm bg-white"
                  />
                  <p className="text-xs text-amber-100 font-semibold mt-1">
                    Scan to Register
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm p-6 md:p-8">
          {event.images && event.images.length > 0 && (
            <div className="mb-6">
              <ImageCarousel alt={event.title} images={event.images} />
            </div>
          )}
          <div
            className="text-gray-700 leading-relaxed space-y-3 [&_h3]:font-serif [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-[#6b4226] [&_h3]:mt-6 [&_h3]:mb-2"
            dangerouslySetInnerHTML={{ __html: event.content }}
          />
        </div>
      </div>
    </div>
  );
}

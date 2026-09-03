"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { events } from "./eventsData";

export default function EventsNews() {
  const featuredEvent = {
    training: "COXBIT Industry, Entrepreneurship and Career Connect 2026",
    date: "29–30 October 2026",
    registerLink: "#",
    qrImage: "/Training and events/WhatsApp Image 2026-09-01 at 4.53.49 PM.jpeg",
  };

  const highlightImages = [
    "/2025-2026/WhatsApp Image 2025-06-02 at 12.53.03 PM(1).jpeg",
    "/2025-2026/WhatsApp Image 2025-06-02 at 12.53.03 PM.jpeg",
    "/2025-2026/WhatsApp Image 2025-06-02 at 12.53.05 PM.jpeg",
    "/2025-2026/WhatsApp Image 2025-06-26 at 10.05.43 PM.jpeg",
    "/2025-2026/WhatsApp Image 2025-06-27 at 10.10.36 AM.jpeg",
    "/2025-2026/WhatsApp Image 2025-06-27 at 10.10.37 AM.jpeg",
    "/2025-2026/WhatsApp Image 2025-07-07 at 1.05.18 PM.jpeg",
    "/2025-2026/WhatsApp Image 2025-07-07 at 1.05.19 PM(1).jpeg",
    "/2025-2026/WhatsApp Image 2025-07-07 at 1.05.19 PM(2).jpeg",
    "/2025-2026/WhatsApp Image 2025-07-07 at 1.05.19 PM(3).jpeg",
    "/2025-2026/WhatsApp Image 2025-07-07 at 1.05.19 PM.jpeg",
    "/2025-2026/WhatsApp Image 2025-07-07 at 1.05.20 PM(1).jpeg",
    "/2025-2026/WhatsApp Image 2025-07-07 at 1.05.20 PM.jpeg",
    "/2025-2026/WhatsApp Image 2025-07-08 at 3.08.44 PM.jpeg",
    "/2025-2026/WhatsApp Image 2025-07-08 at 3.08.45 PM(1).jpeg",
    "/2025-2026/WhatsApp Image 2025-07-08 at 3.08.46 PM.jpeg",
    "/2025-2026/WhatsApp Image 2025-07-18 at 11.21.14 AM.jpeg",
    "/2025-2026/WhatsApp Image 2025-07-29 at 10.40.35 AM.jpeg",
    "/2025-2026/WhatsApp Image 2025-08-08 at 6.04.43 PM.jpeg",
  ];

  return (
    <div className="min-h-screen bg-amber-100/60">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            Capacity Building
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            Events & Training
          </h1>
          <p className="text-amber-100 mt-3 max-w-2xl leading-relaxed">
            Forthcoming and completed workshops, hands-on trainings and
            events for researchers and industry at COXBIT.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Upcoming Event */}
        <section id="upcoming-events" className="scroll-mt-24">
          <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#c89b3c]/15 text-[#8a6a1f] mb-3">
                Upcoming Event
              </span>
              <h2 className="font-serif text-xl md:text-2xl font-bold text-[#6b4226]">
                {featuredEvent.training}
              </h2>
              <p className="text-gray-700 font-semibold mt-1">
                {featuredEvent.date}
              </p>
              <a
                href={featuredEvent.registerLink}
                className="inline-block mt-4 bg-[#c89b3c] hover:bg-[#b3872e] text-[#6b4226] font-semibold px-6 py-2.5 rounded-sm transition-colors duration-200"
              >
                Register
              </a>
            </div>
            <Image
              src={featuredEvent.qrImage}
              alt={`QR code to register for ${featuredEvent.training}`}
              width={150}
              height={150}
              className="border border-gray-200 rounded-sm shrink-0"
            />
          </div>
        </section>

        {/* Trainings & Events */}
        <section id="trainings-events" className="mt-16 scroll-mt-24">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#6b4226]">
              Trainings & Events at COXBIT
            </h2>
            <div className="w-16 h-1 bg-[#c89b3c] mx-auto mt-3 mb-4" />
          </div>
          <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#6b4226] text-white">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                    S. No
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                    Training / Event
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                    Date
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                    Status
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, idx) => (
                  <tr
                    key={event.slug}
                    className={idx % 2 === 1 ? "bg-amber-50/40" : "bg-white"}
                  >
                    <td className="border border-gray-200 px-4 py-3 font-bold text-center text-[#6b4226]">
                      {event.sno}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-700">
                      <Link
                        href={`/events-news/${event.slug}`}
                        className="text-[#6b4226] hover:text-[#8a6a1f] hover:underline"
                      >
                        {event.title}
                      </Link>
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-700">
                      {event.date}
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                        Completed
                      </span>
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-center">
                      <Link
                        href={`/events-news/${event.slug}`}
                        className="inline-block text-sm font-semibold text-[#6b4226] hover:text-[#8a6a1f] hover:underline"
                      >
                        View Details &rarr;
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 2025-26 Highlights Marquee */}
        <section id="highlights" className="mt-16 scroll-mt-24">
          <div className="text-center mb-6">
            <h2 className="font-serif text-2xl font-bold text-[#6b4226]">
              2025–26 Event Highlights
            </h2>
            <div className="w-16 h-1 bg-[#c89b3c] mx-auto mt-3 mb-4" />
          </div>
          <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm py-8">
            <Marquee pauseOnHover gradient={false} speed={45}>
              {highlightImages.map((src) => (
                <div
                  key={src}
                  className="relative w-[22rem] h-64 md:w-[28rem] md:h-80 mx-4 rounded-sm overflow-hidden border border-gray-200 shrink-0 bg-white"
                >
                  <Image
                    src={src}
                    alt="COXBIT 2025-26 event highlight"
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </section>
      </div>
    </div>
  );
}

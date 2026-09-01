"use client";
import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import ImageCarousel from "../components/ImageCarousel";

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

  const trainings = [
    {
      training:
        "Metabolomics and Proteomics using Advanced Analytical Platforms",
      date: "18–22 May 2026",
      status: "Upcoming",
      registerLink: "#",
    },
    {
      training: "Bioinformatics for Molecular Docking and Simulation",
      date: "25–29 May 2026",
      status: "Upcoming",
      registerLink: "#",
    },
    {
      training: "Invitro Micropropagation Techniques",
      date: "01–05 June 2026",
      status: "Upcoming",
      registerLink: "#",
    },
    {
      training: "Workshop on GCMS Based Metabolomics: Principles and Applications",
      date: "15.06.2022 to 17.06.2022",
      status: "Completed",
    },
    {
      training: 'Hands on training on "LC-MS based non-targeted metabolomics',
      date: "28.07.2022 to 29.07.2022",
      status: "Completed",
    },
    {
      training:
        'Workshop on HPLC "Principles and Application in Plant Metabolomics"',
      date: "14.07.2022 to 15.07.2022",
      status: "Completed",
    },
    {
      training:
        'VCS Hands on training on High throughput analysis of Protein: "MALDI TOF"',
      date: "23.01.2023 to 24.01.2023",
      status: "Completed",
    },
    {
      training:
        "One day exposure visit training on Entrepreneurship in Agri-Biotech Practices",
      date: "29.03.2025",
      status: "Completed",
    },
    {
      training:
        "Seminar on Molecular Ecology:From DNA to ecosystem-a molecular insight into ecology",
      date: "30.4.2025",
      status: "Completed",
    },
    {
      training: 'Training Programme on "Microgreens: Superfood and Startup Ideas"',
      date: "03.05.2025",
      status: "Completed",
    },
    {
      training: 'Hands-on training on "Vettiver Cultivation in Terrace Garden"',
      date: "17.05.2025",
      status: "Completed",
    },
    {
      training: "Strategic Action Plan Preparation for MSMEs",
      date: "29.10.2025",
      status: "Completed",
    },
    {
      training: "MSSRF, Social alpha and COXBIT organized outreach program",
      date: "05.11.2025",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
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

      {/* 2025-26 Highlights Marquee */}
      <section className="bg-white border-b border-gray-200 py-8">
        <div className="text-center mb-6 px-4">
          <h2 className="font-serif text-2xl font-bold text-[#6b4226]">
            2025–26 Event Highlights
          </h2>
          <div className="w-16 h-1 bg-[#c89b3c] mx-auto mt-3 mb-4" />
        </div>
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
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Photo Gallery */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl font-bold text-[#6b4226]">
              Training & Events Gallery
            </h2>
            <div className="w-16 h-1 bg-[#c89b3c] mx-auto mt-3 mb-4" />
          </div>
          <ImageCarousel
            alt="Training"
            images={[
              "/Training and events/DSC03474.JPG",
              "/Training and events/IMG_9076.JPG",
              "/Training and events/14.JPG",
              "/Training and events/k.JPG",
              "/Events - Trainings/1 - Bioentrpreneurship Meet/IMG_1386.JPG",
              "/Events - Trainings/2 - Hands on training on High throughput analysis of Protein/Training Participants.JPG",
              "/Events - Trainings/3 - LCMS Training/_DSC0260.JPG",
              "/Events - Trainings/4 - GCMS Training/_DSC1451.JPG",
            ]}
          />
        </section>

        {/* Featured Upcoming Event */}
        <section className="mb-16">
          <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
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
        <section>
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#6b4226]">
              Trainings & Events at COXBIT
            </h2>
            <div className="w-16 h-1 bg-[#c89b3c] mx-auto mt-3 mb-4" />
          </div>
          <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-x-auto">
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
                    Registration
                  </th>
                </tr>
              </thead>
              <tbody>
                {trainings.map((training, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 1 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="border border-gray-200 px-4 py-3 font-bold text-center text-[#6b4226]">
                      {idx + 1}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-700">
                      {training.training}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-700">
                      {training.date}
                    </td>
                    <td className="border border-gray-200 px-4 py-3">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          training.status === "Upcoming"
                            ? "bg-[#c89b3c]/15 text-[#8a6a1f]"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {training.status}
                      </span>
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-center">
                      {training.status === "Upcoming" ? (
                        <>
                          <a
                            href={training.registerLink}
                            className="inline-block bg-[#c89b3c] hover:bg-[#b3872e] text-[#6b4226] font-semibold px-4 py-2 rounded-sm transition-colors duration-200"
                          >
                            Register
                          </a>
                          {training.qrImage ? (
                            <Image
                              src={training.qrImage}
                              alt={`QR code to register for ${training.training}`}
                              width={90}
                              height={90}
                              className="mx-auto mt-2 border border-gray-200 rounded-sm"
                            />
                          ) : (
                            <div className="mt-2 text-[#6b4226] font-semibold text-sm">
                              QR code for {training.training.split(" ")[0]}
                            </div>
                          )}
                        </>
                      ) : (
                        <span className="text-gray-400">&mdash;</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}

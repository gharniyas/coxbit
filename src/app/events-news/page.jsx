"use client";
import React from "react";
import ImageCarousel from "../components/ImageCarousel";

export default function EventsNews() {
  const forthcomingTrainings = [
    {
      sno: 1,
      training:
        "Metabolomics and Proteomics using Advanced Analytical Platforms",
      date: "18–22 May 2026",
      registerLink: "#",
    },
    {
      sno: 2,
      training: "Bioinformatics for Molecular Docking and Simulation",
      date: "25–29 May 2026",
      registerLink: "#",
    },
    {
      sno: 3,
      training: "Invitro Micropropagation Techniques",
      date: "01–05 June 2026",
      registerLink: "#",
    },
  ];

  const completedTrainings = [
    {
      sno: 1,
      date: "15.06.2022 to 17.06.2022",
      event: "Workshop on GCMS Based Metabolomics: Principles and Applications",
    },
    {
      sno: 2,
      date: "28.07.2022 to 29.07.2022",
      event: 'Hands on training on "LC-MS based non-targeted metabolomics',
    },
    {
      sno: 3,
      date: "14.07.2022 to 15.07.2022",
      event:
        'Workshop on HPLC "Principles and Application in Plant Metabolomics"',
    },
    {
      sno: 4,
      date: "23.01.2023 to 24.01.2023",
      event:
        'VCS Hands on training on High throughput analysis of Protein: "MALDI TOF"',
    },
    {
      sno: 12,
      date: "29.03.2025",
      event:
        "One day exposure visit training on Entrepreneurship in Agri-Biotech Practices",
    },
    {
      sno: 13,
      date: "30.4.2025",
      event:
        "Seminar on Molecular Ecology:From DNA to ecosystem-a molecular insight into ecology",
    },
    {
      sno: 14,
      date: "03.05.2025",
      event: 'Training Programme on "Microgreens: Superfood and Startup Ideas"',
    },
    {
      sno: 15,
      date: "17.05.2025",
      event: 'Hands-on training on "Vettiver Cultivation in Terrace Garden"',
    },
    {
      sno: 16,
      date: "29.10.2025",
      event: "Strategic Action Plan Preparation for MSMEs",
    },
    {
      sno: 17,
      date: "05.11.2025",
      event: "MSSRF, Social alpha and COXBIT organized outreach program",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header banner */}
      <div className="bg-[#0a1f44] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            Capacity Building
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            Events & Training
          </h1>
          <p className="text-blue-100 mt-3 max-w-2xl leading-relaxed">
            Forthcoming and completed workshops, hands-on trainings and
            events for researchers and industry at COXBIT.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Photo Gallery */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl font-bold text-[#0a1f44]">
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

        {/* Forthcoming Trainings */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0a1f44]">
              List of Forthcoming Trainings during COXBIT 2026-2027
            </h2>
            <div className="w-16 h-1 bg-[#c89b3c] mx-auto mt-3 mb-4" />
          </div>
          <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0a1f44] text-white">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                    S. No
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                    Training
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                    Date of Training
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                    Registration Details & QR
                  </th>
                </tr>
              </thead>
              <tbody>
                {forthcomingTrainings.map((training, idx) => (
                  <tr
                    key={training.sno}
                    className={idx % 2 === 1 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="border border-gray-200 px-4 py-3 font-bold text-center text-[#0a1f44]">
                      {training.sno}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-700">
                      {training.training}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-700">
                      {training.date}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 text-center">
                      <a
                        href={training.registerLink}
                        className="inline-block bg-[#c89b3c] hover:bg-[#b3872e] text-[#0a1f44] font-semibold px-4 py-2 rounded-sm transition-colors duration-200"
                      >
                        Register
                      </a>
                      <div className="mt-2 text-[#0a1f44] font-semibold text-sm">
                        QR code for {training.training.split(" ")[0]}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Completed Trainings */}
        <section>
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#0a1f44]">
              Details of Completed Training
            </h2>
            <div className="w-16 h-1 bg-[#c89b3c] mx-auto mt-3 mb-4" />
          </div>
          <div className="bg-white border border-gray-200 rounded-sm shadow-sm overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#0a1f44] text-white">
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                    S. No
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                    Date
                  </th>
                  <th className="border border-gray-200 px-4 py-3 text-left font-semibold">
                    Name of the Event
                  </th>
                </tr>
              </thead>
              <tbody>
                {completedTrainings.map((training, idx) => (
                  <tr
                    key={training.sno}
                    className={idx % 2 === 1 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="border border-gray-200 px-4 py-3 font-bold text-center text-[#0a1f44]">
                      {training.sno}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-700">
                      {training.date}
                    </td>
                    <td className="border border-gray-200 px-4 py-3 font-semibold text-gray-700">
                      {training.event}
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

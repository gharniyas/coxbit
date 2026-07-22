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
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Photo Gallery */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-center mb-4">Training & Events Gallery</h2>
          <ImageCarousel
            heightClass="h-96"
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
          <h1 className="text-3xl font-bold text-center mb-8">
            List of Forthcoming Trainings during COXBIT 2026-2027
          </h1>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border-2 border-blue-600 px-4 py-3 text-left text-blue-900 font-bold">
                    S. No
                  </th>
                  <th className="border-2 border-blue-600 px-4 py-3 text-left text-blue-900 font-bold">
                    Training
                  </th>
                  <th className="border-2 border-blue-600 px-4 py-3 text-left text-blue-900 font-bold">
                    Date of Training
                  </th>
                  <th className="border-2 border-blue-600 px-4 py-3 text-left text-blue-900 font-bold">
                    Registration Details & QR
                  </th>
                </tr>
              </thead>
              <tbody>
                {forthcomingTrainings.map((training) => (
                  <tr key={training.sno} className="bg-white">
                    <td className="border-2 border-gray-300 px-4 py-3 font-bold text-center">
                      {training.sno}
                    </td>
                    <td className="border-2 border-gray-300 px-4 py-3 font-semibold">
                      {training.training}
                    </td>
                    <td className="border-2 border-gray-300 px-4 py-3 font-semibold">
                      {training.date}
                    </td>
                    <td className="border-2 border-gray-300 px-4 py-3 text-center">
                      <a
                        href={training.registerLink}
                        className="text-blue-600 hover:underline font-bold bg-blue-100 px-3 py-1 inline-block"
                      >
                        Register
                      </a>
                      <div className="mt-2 text-blue-600 font-semibold">
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
          <h2 className="text-3xl font-bold text-center mb-8">
            Details of Completed Training
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-green-100">
                  <th className="border-2 border-blue-600 px-4 py-3 text-left text-blue-900 font-bold">
                    S. No
                  </th>
                  <th className="border-2 border-blue-600 px-4 py-3 text-left text-blue-900 font-bold">
                    Date
                  </th>
                  <th className="border-2 border-blue-600 px-4 py-3 text-left text-blue-900 font-bold">
                    Name of the Event
                  </th>
                </tr>
              </thead>
              <tbody>
                {completedTrainings.map((training) => (
                  <tr key={training.sno} className="bg-white">
                    <td className="border-2 border-gray-300 px-4 py-3 font-bold text-center">
                      {training.sno}
                    </td>
                    <td className="border-2 border-gray-300 px-4 py-3 font-semibold">
                      {training.date}
                    </td>
                    <td className="border-2 border-gray-300 px-4 py-3 font-semibold">
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

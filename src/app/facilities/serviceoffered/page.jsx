"use client";

import React from "react";

const services = [
  {
    title: "Analytical Charges for Proteomics & Metabolomics",
    table: [
      [
        "Sl. No",
        "Analysis / Service",
        "Unit",
        "For TNAU (Total)",
        "Other Academic Institutions (Total)",
        "Industries / Private (Total)"
      ],
      ["1", "GC-MS Volatile profiling + Data acquisition", "Per sample", "2000", "2950", "3540"],
      ["2", "GC-MS metabolite profiling + Data acquisition", "Per sample", "3000", "4425", "5310"],
      ["3", "LC-MS/MS", "Per sample", "3000", "4720", "5900"],
      ["4", "HPLC (Standard+1 Sample)", "Per sample", "2000", "2950", "3540"],
      ["5", "MALDI-TOFF", "Per Run", "2000", "3540", "4720"]
    ],
    note: (
      <>
        <b>Link:</b> <a href="https://docs.google.com/forms/d/e/1FAIpQLSf2Eewl3JCSRh93XODl2C8XLaPbGMgJ96aTdSTBWXHsNAjTbQ/viewform" target="_blank" rel="noopener noreferrer">Google Form</a>
      </>
    )
  },
  {
    title: "Service Charges for COXBIT Server",
    table: [
      [
        "S. No",
        "Categories",
        "Duration (1 Core)",
        "Duration (24 Core)"
      ],
      ["1", "COXBIT - Cabin/Floor space users/TNAU", "Rs. 0.60 per core/hour, Rs.14.40 per core/day", "Rs.14.40 per core/hour, Rs.345.60 per core/day"],
      ["2", "Other Academic Organizations", "Rs. 0.80 per core/hour, Rs.19.20 per core/day", "Rs.19.20 per core/hour, Rs.576.00 per core/day"]
    ],
    note: (
      <>
        Additionally, internet charges during server usage will be Rs. 1,000/- per month + 18% GST.
      </>
    )
  }
];

const ServiceOffered = () => {
  return (
    <div className="py-8 px-2 md:px-8 bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-blue-900">Services Offered</h1>
      {services.map((service, idx) => (
        <div key={idx} className="mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-800">{service.title}</h2>
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  {service.table[0].map((header, i) => (
                    <th
                      key={i}
                      className="px-4 py-3 border-b border-gray-200 bg-blue-100 text-gray-900 font-semibold text-sm md:text-base text-left"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {service.table.slice(1).map((row, i) => (
                  <tr key={i} className="hover:bg-blue-50">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="px-4 py-2 border-b border-gray-100 text-gray-800 text-sm md:text-base"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-2 mb-4 text-gray-700 text-sm md:text-base">{service.note}</div>
        </div>
      ))}
    </div>
  );
};

export default ServiceOffered;

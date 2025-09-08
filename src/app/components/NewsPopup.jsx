"use client";
import React, { useEffect } from "react";
import Image from "next/image";

const NewsPopup = ({ isOpen, onClose, photo }) => {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose}></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden z-10">
        {/* Close button - make it more visible */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-red-600 hover:bg-red-700 text-white rounded-full p-3 transition-colors duration-200 shadow-lg"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {photo ? (
          <>
            {/* Image Section */}
            <div className="relative h-96 md:h-[500px]">
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black from-opacity-60 via-transparent to-transparent"></div>

              {/* Image overlay info */}
              <div className="absolute bottom-6 left-6 text-white">
                <span className="bg-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block">
                  {photo.date}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {photo.title}
                </h2>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Left Column - Details */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    News Details
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2">📅</span>
                      <span className="text-gray-700">
                        <strong>Date:</strong> {photo.date}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2">📍</span>
                      <span className="text-gray-700">
                        <strong>Location:</strong> Centre of Excellence in
                        Biotechnology
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-2">🏢</span>
                      <span className="text-gray-700">
                        <strong>Institution:</strong> TNAU Coimbatore
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">📋</span>
                      <span className="text-gray-700">
                        <strong>Category:</strong> Research & Innovation Updates
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Description */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    About This Update
                  </h3>
                  <div className="text-gray-700 space-y-3">
                    <p>
                      This image showcases one of the latest developments and
                      activities at the Centre of Excellence in Biotechnology
                      (CoEB) at Tamil Nadu Agricultural University.
                    </p>
                    <p>
                      CoEB continues to lead in agricultural biotechnology
                      research, fostering innovation through state-of-the-art
                      facilities and cutting-edge research programs.
                    </p>
                    <p>
                      Our commitment to excellence drives us to share these
                      milestone moments that reflect our ongoing contribution to
                      biotechnology advancement and agricultural innovation.
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Tags:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                        Research
                      </span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        Innovation
                      </span>
                      <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                        Biotechnology
                      </span>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs">
                        TNAU
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onClose}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: photo.title,
                        text: `Check out this update from CoEB: ${photo.title}`,
                        url: window.location.href,
                      });
                    }
                  }}
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
                >
                  Share
                </button>
                <a
                  href="/contact"
                  className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg transition-colors duration-200 font-medium text-center"
                >
                  Contact CoEB
                </a>
              </div>
            </div>
          </>
        ) : (
          /* Fallback content when no photo */
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              News Details
            </h2>
            <p className="text-gray-600">Loading news information...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPopup;

"use client";

export default function SkillFacilities() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg w-full text-center border border-gray-200">
        <h1 className="text-3xl font-bold text-indigo-700 mb-4">
          Skill Facilities
        </h1>
        <p className="text-gray-600 text-lg mb-6">
          This page is currently under development.
        </p>
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16 text-indigo-300 animate-pulse"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <p className="mt-6 text-gray-400 text-sm">
          Please check back soon for updates.
        </p>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import Image from "next/image";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 relative overflow-hidden ">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/20 via-transparent to-purple-100/20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-300/10 to-pink-300/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 min-h-[calc(100vh-5rem)] flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="mb-4">
              <Image
                src="/logo.jpeg"
                alt="COXBIT Logo"
                width={220}
                height={66}
                priority
                className="h-16 w-auto object-contain mx-auto"
              />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Join COXBIT
            </h1>
            <p className="text-gray-600">
              Register for Analytical Facility at COXBIT
            </p>
          </div>

          {/* Card */}
          <div className="bg-gradient-to-br from-white via-indigo-50/50 to-purple-50/50 backdrop-blur-sm rounded-2xl shadow-xl border border-indigo-100/50 p-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-8 h-8 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-800 mb-1">
                  Registration Form
                </h2>
                <p className="text-sm text-gray-500">
                  Click the button below to complete your registration via our
                  official Google Form.
                </p>
              </div>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf2EewI3JCSRh93XODl2C8XLaPbGMgJ96aTdSTBWXHsNAjTbQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl text-center"
              >
                Open Registration Form
              </a>

              <p className="text-xs text-gray-400">
                You will be redirected to Google Forms to complete your
                registration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

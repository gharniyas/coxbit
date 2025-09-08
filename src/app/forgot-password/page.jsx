"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
      }, 2000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/20 via-transparent to-purple-100/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-300/10 to-pink-300/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 h-screen flex items-center justify-center px-4 py-8 overflow-y-auto">
          <div className="w-full max-w-md my-auto">
            {/* Success Message */}
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-br from-white via-indigo-50 to-purple-50 p-4 rounded-2xl shadow-xl border border-indigo-100/50 backdrop-blur-sm mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl">✓</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Check Your Email
              </h1>
              <p className="text-gray-600 mb-4">
                We've sent a password reset link to
              </p>
              <p className="text-indigo-600 font-semibold">{email}</p>
            </div>

            <div className="bg-gradient-to-br from-white via-indigo-50/50 to-purple-50/50 backdrop-blur-sm rounded-2xl shadow-xl border border-indigo-100/50 p-8">
              <div className="text-center space-y-4">
                <p className="text-gray-600">
                  If you don't see the email in your inbox, please check your
                  spam folder.
                </p>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setEmail("");
                    }}
                    className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                  >
                    Try with a different email address
                  </button>
                </div>

                <div className="border-t border-gray-200/50 pt-6">
                  <Link
                    href="/login"
                    className="inline-block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                  >
                    Back to Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/20 via-transparent to-purple-100/20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-300/10 to-pink-300/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 h-screen flex items-center justify-center px-4 py-2 overflow-y-auto">
        <div className="w-full max-w-md my-auto">
          {/* Logo Section */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-br from-white via-indigo-50 to-purple-50 p-4 rounded-2xl shadow-xl border border-indigo-100/50 backdrop-blur-sm mb-4">
              <Image
                src="/logo.png"
                alt="COXBIT Logo"
                width={120}
                height={40}
                priority
                className="mx-auto"
              />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              Reset Password
            </h1>
            <p className="text-gray-600">
              Enter your email address and we'll send you a link to reset your
              password
            </p>
          </div>

          {/* Reset Form */}
          <div className="bg-gradient-to-br from-white via-indigo-50/50 to-purple-50/50 backdrop-blur-sm rounded-2xl shadow-xl border border-indigo-100/50 p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/70 border border-indigo-200/50 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all backdrop-blur-sm"
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending Reset Link...
                  </div>
                ) : (
                  "Send Reset Link"
                )}
              </button>
            </form>

            {/* Back to Login */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Remember your password?{" "}
                <Link
                  href="/login"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-indigo-700 hover:to-purple-700 font-semibold transition-all"
                >
                  Back to Sign In
                </Link>
              </p>
            </div>

            {/* Help Section */}
            <div className="mt-6 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200/50">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">
                Need Help?
              </h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>
                  • Make sure you enter the email address associated with your
                  account
                </li>
                <li>
                  • Check your spam/junk folder if you don't receive the email
                </li>
                <li>• The reset link will expire in 24 hours for security</li>
              </ul>
            </div>

            {/* Contact Support */}
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500">
                Still having trouble?{" "}
                <Link
                  href="/contact"
                  className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
                >
                  Contact Support
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

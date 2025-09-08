import Image from "next/image";
import React from "react";
import { FaLinkedinIn, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const navigationLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events-news", label: "Events & News" },
    { href: "/board-of-directors", label: "Board of Directors" },
    { href: "/coxbit-team", label: "Coxbit Team" },
    { href: "/facilities", label: "Facilities" },
    { href: "/funding", label: "Funding" },
    { href: "/contact", label: "Contact" },
  ];

  const quickLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/support", label: "Support" },
    { href: "/careers", label: "Careers" },
  ];

  const socialLinks = [
    { href: "#", label: "LinkedIn", icon: FaLinkedinIn },
    { href: "#", label: "Twitter", icon: FaTwitter },
    { href: "#", label: "YouTube", icon: FaYoutube },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white mt-16 relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10"></div>
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt="COXBIT Logo"
                width={160}
                height={60}
                priority
                className="brightness-0 invert mb-4"
              />

              {/* Partner Logos */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-xs text-gray-400 mb-2">
                  In partnership with:
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-[50px] h-[50px] flex items-center bg-white/10 rounded-lg p-2">
                  <Image
                    src="/TNA logo.jpg"
                    alt="TNAU Logo"
                    width={50}
                    height={50}
                    className="w-full h-auto object-contain rounded"
                  />
                </div>
                <div className="w-[50px] h-[50px] flex items-center bg-white/10 rounded-lg p-2">
                  <Image
                    src="/innovation logo.jpg"
                    alt="Innovation Logo"
                    width={50}
                    height={50}
                    className="w-full h-auto object-contain rounded"
                  />
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Centre of Excellence in Biotechnology at TNAU - Advancing
              agricultural biotechnology through research, innovation, and
              cutting-edge facilities for transformative agricultural solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="text-lg" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-300 mb-1">Email</p>
                <a
                  href="mailto:info@coxbit.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  coebiotech@tnau.ac.in
                </a>
              </div>
              <div>
                <p className="text-gray-300 mb-1">Phone</p>
                <a
                  href="tel:+15551234567"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  +91 9487001028
                </a>
              </div>
              <div>
                <p className="text-gray-300 mb-1">Address</p>
                <p className="text-lg font-semibold text-white mb-4">
                  Director, Centre of Excellence in Biotechnology
                </p>
                <p className="text-gray-400">
                  Tamil Nadu Agricultural University
                </p>
                <p className="text-gray-400">
                  Coimbatore - 641 003, Tamil Nadu, India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Biotechnology Center Section */}
      <div className="border-t border-blue-800/30 bg-gradient-to-r from-indigo-900/50 to-blue-900/50 relative">
        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4">
              Director, Centre of Excellence in Biotechnology
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-gray-300 font-medium mb-2">Organization</p>
                <p className="text-gray-400">
                  Tamil Nadu Agricultural University
                </p>
                <p className="text-gray-400">
                  Coimbatore - 641 003, Tamil Nadu, India
                </p>
              </div>
              <div>
                <p className="text-gray-300 font-medium mb-2">
                  Digital Contact
                </p>
                <div className="space-y-1">
                  <div>
                    <a
                      href="mailto:coebiotech@tnau.ac.in"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      coebiotech@tnau.ac.in
                    </a>
                  </div>
                  <div>
                    <a
                      href="http://tinyurl.com/mry6y9vf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gray-300 font-medium mb-2">Phone Numbers</p>
                <div className="space-y-1">
                  <div>
                    <a
                      href="tel:+919489056706"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      +91 94890 56706
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:+918870281435"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      +91 88702 81435
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:+917373509696"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      +91 73735 09696
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800/30 bg-gradient-to-r from-gray-900/80 via-blue-900/80 to-indigo-900/80 relative">
        <div className="relative max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-300 text-sm">
              © {new Date().getFullYear()} COXBIT. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="/privacy"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import { CiBellOn } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events-news", label: "Events & News" },
    { href: "/board-of-directors", label: "Board of Directors" },
    { href: "/coxbit-team", label: "Coxbit Team" },
    { href: "/facilities", label: "Facilities" },
    { href: "/funding", label: "Funding" },
    { href: "/contact", label: "Contact" },
  ];

  // Function to check if a link is active
  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-gradient-to-r from-white via-blue-50 to-indigo-50 shadow-xl backdrop-blur-md border-b border-blue-100/20 px-4 py-2 fixed top-0 left-0 w-full z-30">
      <div className="flex justify-between items-center h-14">
        {/* Logo Section */}
        <div className="flex-shrink-0 h-[80px] flex items-center space-x-4">
          {/* Main COXBIT Logo */}
          <div className="w-[200px] flex items-center">
            <Image
              src="/logo.png"
              alt="COXBIT Logo"
              width={200}
              height={80}
              priority
              className="h-full w-auto object-contain"
            />
          </div>
          
          {/* Partner Logos */}
          <div className="hidden lg:flex items-center space-x-3 border-l border-blue-200 pl-4">
            <div className="w-[60px] h-[60px] flex items-center">
              <Image
                src="/TNA logo.jpg"
                alt="TNAU Logo"
                width={60}
                height={60}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <div className="w-[60px] h-[60px] flex items-center">
              <Image
                src="/innovation logo.jpg"
                alt="Innovation Logo"
                width={60}
                height={60}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => {
            const isActive = isActiveLink(item.href);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`font-medium text-sm transition-colors duration-200 relative group ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-200 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </a>
            );
          })}
        </nav>

        {/* Right Side: Notification, Profile, and Mobile Menu */}
        <div className="flex items-center space-x-4">
          {/* Notification Icon */}
          <button
            title="Notifications"
            className="text-gray-600 hover:text-blue-600 focus:outline-none transition-colors duration-200 relative"
          >
            <CiBellOn size={24} />
            {/* Optional notification badge */}
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          {/* Profile Avatar */}
          <div
            title="Profile"
            className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-sm font-semibold text-white cursor-pointer hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md"
          >
            U
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="px-4 py-3 space-y-2">
            {navigationItems.map((item) => {
              const isActive = isActiveLink(item.href);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`block py-2 px-3 rounded-md font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

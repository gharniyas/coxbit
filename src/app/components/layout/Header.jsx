import React, { useState } from "react";
import { CiBellOn } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import {
  MdOutlineInfo,
  MdOutlinePeople,
  MdOutlineScience,
  MdOutlineContactPhone,
  MdOutlineRocketLaunch,
  MdOutlineHandshake,
} from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { BsBuilding, BsCalendarEvent, BsPeopleFill } from "react-icons/bs";
import { FaFlask, FaChalkboardTeacher, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigationItems = [
    {
      href: "/",
      label: "Home",
      icon: <AiOutlineHome className="w-5 h-5 mr-1.5" size={18} />,
    },
    {
      label: "About",
      icon: <MdOutlineInfo size={18} className="mr-1.5" />,
      dropdown: [
        {
          href: "/about",
          label: "About Coxbit",
          icon: <MdOutlineInfo size={16} className="mr-2" />,
        },
        {
          href: "/coxbit-team",
          label: "Coxbit Team",
          icon: <MdOutlinePeople size={16} className="mr-2" />,
        },
      ],
    },
    {
      label: "Facilities",
      icon: <BsBuilding size={18} className="mr-1.5" />,
      dropdown: [
        {
          href: "/facilities#lab",
          label: "State of Art Laboratory Services",
          icon: <FaFlask size={14} className="mr-2" />,
        },
        {
          href: "/facilities#entrepreneurship",
          label: "Entrepreneurship Services",
          icon: <MdOutlineRocketLaunch size={14} className="mr-2" />,
        },
        {
          href: "/facilities#skill",
          label: "Skill and Capacity Building",
          icon: <FaChalkboardTeacher size={14} className="mr-2" />,
        },
      ],
    },
    {
      href: "/events-news",
      label: "Event & Training",
      icon: <BsCalendarEvent size={18} className="mr-1.5" />,
    },
    {
      label: "Eco System Partners",
      icon: <MdOutlineHandshake size={18} className="mr-1.5" />,
      dropdown: [
        {
          href: "#tnapex",
          label: "TNApex",
          icon: <FaCheckCircle size={14} className="mr-2" />,
        },
        {
          href: "#edi",
          label: "EDI",
          icon: <FaCheckCircle size={14} className="mr-2" />,
        },
        {
          href: "#startuptn",
          label: "Startup TN",
          icon: <FaCheckCircle size={14} className="mr-2" />,
        },
      ],
    },
    {
      href: "/contact",
      label: "Contact Us",
      icon: <MdOutlineContactPhone size={18} className="mr-1.5" />,
    },
    {
      href: "/startup-opportunities",
      label: "Startup Opportunities",
      icon: <MdOutlineRocketLaunch size={18} className="mr-1.5" />,
    },
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
        <div
          className="flex-shrink-0 flex items-center pl-2 overflow-hidden rounded-lg"
          style={{ width: 120, height: 60 }}
        >
          <Image
            src="/logo.jpeg"
            alt="COXBIT Logo"
            width={200}
            height={100}
            priority
            className="w-full h-full object-cover"
            style={{ objectPosition: "center" }}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-stretch gap-1">
            {navigationItems.map((item, idx) => {
              if (item.dropdown) {
                // Check if any dropdown item is active (including hash links)
                const isDropdownActive = item.dropdown.some((sub) =>
                  isActiveLink(sub.href),
                );
                return (
                  <div
                    key={item.label}
                    className="relative group flex items-stretch mx-1"
                    tabIndex={0}
                  >
                    <button
                      className={`font-medium text-sm flex items-center gap-1 focus:outline-none px-3 py-2 transition-colors duration-200 rounded-xl ${
                        isDropdownActive
                          ? "bg-indigo-600 text-white shadow-md"
                          : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                      }`}
                      tabIndex={0}
                      aria-haspopup="true"
                      aria-expanded={isDropdownActive ? "true" : "false"}
                    >
                      {item.icon}
                      {item.label}
                      <svg
                        className="w-3 h-3 ml-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    <div
                      className="absolute left-0 top-full mt-1 w-56 bg-white border border-blue-100 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity duration-200 z-40"
                      tabIndex={-1}
                    >
                      {item.dropdown.map((sub, subIdx) => {
                        const isSubActive = isActiveLink(sub.href);
                        return (
                          <a
                            key={sub.href}
                            href={sub.href}
                            className={`flex items-center px-5 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                              isSubActive
                                ? "bg-blue-600 text-white"
                                : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            }`}
                            tabIndex={0}
                          >
                            {sub.icon}
                            {sub.label}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                );
              } else {
                const isActive = isActiveLink(item.href);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`font-medium text-sm transition-colors duration-200 px-3 py-2 flex items-center ${
                      isActive
                        ? "bg-indigo-600 text-white shadow-md"
                        : "text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                    } rounded-xl`}
                  >
                    {item.icon}
                    {item.label}
                  </a>
                );
              }
            })}
          </div>
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
            {navigationItems.map((item, idx) => {
              if (item.dropdown) {
                return (
                  <div key={item.label} className="mb-2">
                    <div className="font-medium text-gray-700 text-sm mb-1">
                      {item.label}
                    </div>
                    <div className="pl-3">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          className="block py-2 px-3 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 text-sm font-medium"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              } else {
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
              }
            })}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

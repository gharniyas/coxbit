import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import {
  MdOutlineInfo,
  MdOutlineScience,
  MdOutlineContactPhone,
  MdOutlineRocketLaunch,
  MdOutlineHandshake,
} from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { BsBuilding, BsCalendarEvent } from "react-icons/bs";
import { FaFlask, FaChalkboardTeacher, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const pathname = usePathname();

  const navigationItems = [
    {
      href: "/",
      label: "Home",
      icon: <AiOutlineHome size={16} />,
    },
    {
      href: "/about",
      label: "About",
      icon: <MdOutlineInfo size={16} />,
    },
    {
      label: "Facilities",
      icon: <BsBuilding size={16} />,
      dropdown: [
        {
          href: "/facilities/sals",
          label: "SALS - Shared Access Lab Services",
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
        {
          href: "/facilities#services",
          label: "Services Offered",
          icon: <FaFlask size={14} className="mr-2" />,
        },
      ],
    },
    {
      href: "/projects",
      label: "Projects",
      icon: <MdOutlineScience size={16} />,
    },
    {
      label: "Eco System Partners",
      icon: <MdOutlineHandshake size={16} />,
      dropdown: [
        {
          href: "/ecosystem-partners/startuptn",
          label: "Startup TN",
          icon: <FaCheckCircle size={14} className="mr-2" />,
        },
        {
          href: "/ecosystem-partners/edii",
          label: "EDII-TN",
          icon: <FaCheckCircle size={14} className="mr-2" />,
        },
        {
          href: "/ecosystem-partners/tnapex",
          label: "TNAPEx",
          icon: <FaCheckCircle size={14} className="mr-2" />,
        },
      ],
    },
    {
      href: "/startup-opportunities",
      label: "Startup Opportunities",
      icon: <MdOutlineRocketLaunch size={16} />,
    },
    {
      href: "/events-news",
      label: "Event & Training",
      icon: <BsCalendarEvent size={16} />,
    },
    {
      href: "/contact",
      label: "Contact Us",
      icon: <MdOutlineContactPhone size={16} />,
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
    <header className="bg-white shadow-xl backdrop-blur-md border-b border-gray-200 px-4 py-2 fixed top-0 left-0 w-full z-30">
      <div className="flex justify-between items-center h-20">
        {/* Logo Section */}
        <div
          className="flex-shrink-0 flex items-center pl-2 overflow-hidden rounded-lg"
          style={{ width: 110, height: 60 }}
        >
          <Image
            src="/logo.jpeg"
            alt="COXBIT Logo"
            width={120}
            height={60}
            priority
            className="w-full h-full object-contain"
            style={{ objectPosition: "center" }}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center bg-transparent">
          <div className="flex flex-wrap items-stretch gap-0 whitespace-normal">
            {navigationItems.map((item, idx) => {
              if (item.dropdown) {
                const isDropdownActive = item.dropdown.some((sub) =>
                  isActiveLink(sub.href),
                );
                const isOpen = openDropdown === idx;
                return (
                  <div
                    key={item.label}
                    className="relative flex items-stretch mx-1"
                    tabIndex={0}
                    onBlur={(e) => {
                      // Only close if focus leaves the dropdown area
                      if (!e.currentTarget.contains(e.relatedTarget)) {
                        setOpenDropdown(null);
                      }
                    }}
                  >
                    <button
                      className={`font-semibold text-xs md:text-sm flex items-center gap-0.5 focus:outline-none px-2 py-2 transition-colors duration-200 rounded hover:bg-gray-100 ${
                        isDropdownActive || isOpen
                          ? "text-blue-700"
                          : "text-black"
                      }`}
                      style={{ boxShadow: "none", background: "none" }}
                      tabIndex={0}
                      aria-haspopup="true"
                      aria-expanded={isOpen ? "true" : "false"}
                      onClick={() => setOpenDropdown(isOpen ? null : idx)}
                      onKeyDown={(e) => {
                        if (
                          e.key === "Enter" ||
                          e.key === " " ||
                          e.key === "ArrowDown"
                        ) {
                          setOpenDropdown(idx);
                        }
                        if (e.key === "Escape") {
                          setOpenDropdown(null);
                        }
                      }}
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
                      className={`absolute left-0 top-full mt-1 w-56 bg-white border border-gray-200 rounded shadow-lg transition-opacity duration-200 z-40 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                      tabIndex={-1}
                    >
                      {item.dropdown.map((sub, subIdx) => {
                        const isSubActive = isActiveLink(sub.href);
                        return (
                          <a
                            key={sub.href}
                            href={sub.href}
                            className={`flex items-center px-3 py-2 text-xs md:text-sm font-semibold rounded transition-colors duration-200 border-l-4 ${
                              isSubActive
                                ? "border-blue-700 bg-blue-50 text-blue-700"
                                : "border-transparent bg-white text-black hover:border-blue-700 hover:bg-gray-50"
                            }`}
                            style={{
                              ...(isSubActive ? { boxShadow: "none" } : {}),
                            }}
                            tabIndex={0}
                            onClick={() => setOpenDropdown(null)}
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
                    className={`font-semibold text-xs md:text-sm transition-colors duration-200 px-2 py-2 flex items-center gap-0.5 rounded hover:bg-gray-100 ${
                      isActive ? "text-blue-700" : "text-black"
                    }`}
                    style={{ boxShadow: "none", background: "none" }}
                  >
                    {item.icon}
                    {item.label}
                  </a>
                );
              }
            })}
          </div>
        </nav>
        <button
          className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="px-4 py-3 space-y-2">
            {navigationItems.map((item, idx) => {
              if (item.dropdown) {
                return (
                  <div key={item.label} className="mb-2">
                    <div className="font-medium text-gray-700 text-base md:text-lg mb-1">
                      {item.label}
                    </div>
                    <div className="pl-3">
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.href}
                          href={sub.href}
                          className="block py-2 px-3 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 text-base md:text-lg font-medium"
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
                    className={`block py-2 px-3 rounded-md font-medium text-base md:text-lg transition-all duration-200 ${
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

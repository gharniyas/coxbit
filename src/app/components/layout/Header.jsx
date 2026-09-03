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
import { BsBuilding, BsCalendarEvent, BsThreeDotsVertical } from "react-icons/bs";
import { FaFlask, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null); // Track which mobile accordion section is expanded
  const pathname = usePathname();

  const navigationItems = [
    {
      href: "/",
      label: "Home",
      icon: <AiOutlineHome size={24} />,
    },
    {
      href: "/about",
      label: "About",
      icon: <MdOutlineInfo size={24} />,
    },
    {
      label: "Facilities",
      icon: <BsBuilding size={24} />,
      dropdown: [
        {
          href: "/facilities/sals",
          label: "SALS - Shared Access Lab Services",
          icon: <FaFlask size={18} className="mr-2" />,
        },
        {
          href: "/facilities/entrepreneurship",
          label: "Technology Driven Entrepreneurship",
          icon: <MdOutlineRocketLaunch size={18} className="mr-2" />,
        },
        {
          href: "/facilities/serviceoffered",
          label: "Services Offered",
          icon: <FaFlask size={18} className="mr-2" />,
        },
      ],
    },
    {
      href: "/projects",
      label: "Projects",
      icon: <MdOutlineScience size={24} />,
    },
    {
      label: "Startup Ecosystem",
      shortLabel: "Startups",
      icon: <MdOutlineHandshake size={24} />,
      dropdown: [
        {
          href: "/startup-ecosystem/partners",
          label: "Partners",
          icon: <FaCheckCircle size={18} className="mr-2" />,
        },
        {
          href: "/startup-ecosystem/startup-opportunities",
          label: "Startup Opportunities",
          icon: <MdOutlineRocketLaunch size={18} className="mr-2" />,
        },
      ],
    },
    {
      href: "/events-news",
      label: "Event & Training",
      shortLabel: "Events",
      icon: <BsCalendarEvent size={24} />,
    },
    {
      href: "/contact",
      label: "Contact Us",
      icon: <MdOutlineContactPhone size={24} />,
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
      <div className="flex flex-wrap items-center justify-between min-h-28 gap-y-1 gap-x-2 py-1">
        {/* Logo Section */}
        <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3 pl-2 h-full min-w-0">
          <div className="flex items-center justify-center overflow-hidden shrink-0 w-[92px] h-[58px] sm:w-[122px] sm:h-[76px] md:w-[140px] md:h-[88px] lg:w-[110px] lg:h-[69px] xl:w-[132px] xl:h-[83px] 2xl:w-[152px] 2xl:h-[95px]">
            <Image
              src="/logo.jpeg"
              alt="COXBIT Logo"
              fill={false}
              width={136}
              height={85}
              priority
              style={{
                objectFit: "cover",
                objectPosition: "center",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="flex items-center justify-start shrink-0 h-[86px] sm:h-[112px] md:h-[128px] lg:h-[102px] xl:h-[124px] 2xl:h-[142px]">
            <Image
              src="/logo-2.png"
              alt="COEB Logo"
              fill={false}
              width={1860}
              height={845}
              priority
              style={{
                objectFit: "contain",
                objectPosition: "left center",
                width: "auto",
                height: "100%",
              }}
            />
          </div>
          <div className="hidden sm:flex items-center justify-center overflow-hidden shrink-0 w-[64px] h-[64px] md:w-[76px] md:h-[76px] lg:w-[58px] lg:h-[58px] xl:w-[70px] xl:h-[70px] 2xl:w-[84px] 2xl:h-[84px]">
            <Image
              src="/TN-logo.png"
              alt="Government of Tamil Nadu Logo"
              fill={false}
              width={68}
              height={68}
              priority
              style={{
                objectFit: "contain",
                objectPosition: "center",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
          <div className="hidden sm:flex items-center justify-center overflow-hidden shrink-0 w-[98px] h-[98px] md:w-[116px] md:h-[116px] lg:w-[88px] lg:h-[88px] xl:w-[108px] xl:h-[108px] 2xl:w-[130px] 2xl:h-[130px]">
            <Image
              src="/TNAU-logo.png"
              alt="Tamil Nadu Agricultural University Logo"
              fill={false}
              width={68}
              height={68}
              priority
              style={{
                objectFit: "contain",
                objectPosition: "center",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center bg-[#6b4226] rounded-lg px-1 xl:px-1.5 2xl:px-2 flex-1 min-w-0">
          <div className="flex flex-nowrap items-stretch justify-between w-full">
            {navigationItems.map((item, idx) => {
              if (item.dropdown) {
                const isDropdownActive = item.dropdown.some((sub) =>
                  isActiveLink(sub.href),
                );
                const isOpen = openDropdown === idx;
                return (
                  <div
                    key={item.label}
                    className="relative flex items-stretch"
                    tabIndex={0}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget)) {
                        setOpenDropdown(null);
                      }
                    }}
                  >
                    <button
                      className={`font-bold text-[11px] xl:text-xs 2xl:text-sm flex items-center gap-0.5 xl:gap-1 focus:outline-none px-1 xl:px-1.5 2xl:px-3 py-2 transition-colors duration-200 hover:bg-[#54331c] text-white border-b-4 whitespace-nowrap ${
                        isDropdownActive || isOpen
                          ? "border-yellow-400"
                          : "border-transparent"
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
                      <span>{item.shortLabel || item.label}</span>
                      <svg
                        className="w-3 h-3 ml-0.5 xl:ml-1 shrink-0"
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
                      {item.dropdown.map((sub) => {
                        const isSubActive = isActiveLink(sub.href);
                        return (
                          <a
                            key={sub.href}
                            href={sub.href}
                            className={`flex items-center px-3 py-2 text-sm font-semibold transition-colors duration-200 border-l-4 ${
                              isSubActive
                                ? "border-[#6b4226] bg-[#6b4226]/10 text-[#6b4226]"
                                : "border-transparent bg-white text-black hover:border-[#6b4226] hover:bg-gray-50"
                            }`}
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
                    className={`font-bold text-[11px] xl:text-xs 2xl:text-sm transition-colors duration-200 px-1 xl:px-1.5 2xl:px-3 py-2 flex items-center gap-0.5 xl:gap-1 hover:bg-[#54331c] text-white border-b-4 whitespace-nowrap ${
                      isActive ? "border-yellow-400" : "border-transparent"
                    }`}
                    style={{ boxShadow: "none", background: "none" }}
                  >
                    <span>{item.shortLabel || item.label}</span>
                  </a>
                );
              }
            })}
          </div>
        </nav>
        <button
          className="lg:hidden ml-auto text-[#6b4226] hover:text-[#c89b3c] focus:outline-none transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="px-4 py-3 space-y-2">
            {navigationItems.map((item, idx) => {
              if (item.dropdown) {
                const isDropdownActive = item.dropdown.some((sub) =>
                  isActiveLink(sub.href),
                );
                const isExpanded = mobileOpenDropdown === idx;
                return (
                  <div key={item.label} className="mb-2">
                    <button
                      type="button"
                      className={`w-full flex items-center justify-between py-2 px-3 rounded-md font-medium text-base md:text-lg transition-colors duration-200 ${
                        isDropdownActive
                          ? "text-[#6b4226] bg-[#c89b3c]/10"
                          : "text-gray-700 hover:text-[#6b4226] hover:bg-[#c89b3c]/10"
                      }`}
                      aria-expanded={isExpanded ? "true" : "false"}
                      onClick={() =>
                        setMobileOpenDropdown(isExpanded ? null : idx)
                      }
                    >
                      <span>{item.label}</span>
                      <BsThreeDotsVertical
                        size={18}
                        className={`transition-transform duration-200 ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="pl-3">
                        {item.dropdown.map((sub) => (
                          <a
                            key={sub.href}
                            href={sub.href}
                            className="block py-2 px-3 rounded-md text-gray-700 hover:text-[#6b4226] hover:bg-[#c89b3c]/10 text-base md:text-lg font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
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
                        ? "text-[#6b4226] bg-[#c89b3c]/10 border-l-4 border-[#6b4226]"
                        : "text-gray-700 hover:text-[#6b4226] hover:bg-[#c89b3c]/10"
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

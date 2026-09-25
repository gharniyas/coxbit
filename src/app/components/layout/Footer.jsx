import Image from "../CloudinaryImage";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineInfo, MdOutlineScience, MdOutlineContactPhone, MdOutlineHandshake } from "react-icons/md";
import { BsBuilding, BsCalendarEvent } from "react-icons/bs";

const Footer = () => {
  const navigationLinks = [
    { href: "/", label: "Home", icon: <AiOutlineHome size={16} /> },
    {
      label: "About",
      icon: <MdOutlineInfo size={16} />,
      submenu: [
        { href: "/about", label: "About COXBIT" },
        { href: "/about/why-coxbit", label: "Why COXBIT" },
        { href: "/about/key-focus-areas", label: "Key Focus Areas" },
        { href: "/about/team", label: "COXBIT Team" },
      ],
    },
    {
      label: "Facilities",
      icon: <BsBuilding size={16} />,
      submenu: [
        {
          label: "SALS - Shared Access Lab Services",
          submenu: [
            { href: "/facilities/sals", label: "Molecular Biology Lab" },
            { href: "/facilities/sals/proteomics-metabolomics", label: "Proteomics & Metabolomics" },
            { href: "/facilities/sals/tissue-culture", label: "Tissue Culture Facility" },
            { href: "/facilities/sals/cold-room", label: "Cold Room Facility" },
            { href: "/facilities/sals/bioinformatics-server", label: "Bioinformatics Server" },
          ],
        },
        {
          label: "Technology Driven Entrepreneurship",
          submenu: [
            { href: "/facilities/entrepreneurship", label: "Cabin Space" },
            { href: "/facilities/entrepreneurship/floor-knowledge-space", label: "Floor / Knowledge Space" },
          ],
        },
        { href: "/facilities/service-offered", label: "Services Offered" },
      ]
    },
    {
      label: "Projects",
      icon: <MdOutlineScience size={16} />,
      submenu: [
        { href: "/projects/dbt-phenomics-platform", label: "DBT Phenomics Platform" },
        { href: "/projects/native-species-seed-vault", label: "Native Species Seed Vault" },
        { href: "/projects/tnapex-msme-programme", label: "TNAPEx MSME Programme" },
        { href: "/projects/birac-e-yuva-programme", label: "BIRAC E-YUVA Programme" },
      ],
    },
    {
      label: "Startup Ecosystem",
      icon: <MdOutlineHandshake size={16} />,
      submenu: [
        {
          label: "Partners",
          submenu: [
            { href: "/startup-ecosystem/partners", label: "Startup TN" },
            { href: "/startup-ecosystem/partners/edii-tn", label: "EDII-TN" },
            { href: "/startup-ecosystem/partners/tnapex", label: "TNAPEx" },
          ],
        },
        {
          label: "Startup Opportunities",
          submenu: [
            { href: "/startup-ecosystem/startup-opportunities", label: "Overview" },
            { href: "/startup-ecosystem/startup-opportunities/trl-levels", label: "TRL Levels" },
            { href: "/startup-ecosystem/startup-opportunities/journey", label: "Startup Journey" },
            { href: "/startup-ecosystem/startup-opportunities/funding", label: "Funding" },
            { href: "/startup-ecosystem/startup-opportunities/support-faq", label: "Support & FAQ" },
          ],
        },
      ]
    },
    { href: "/events-news", label: "Event & Training", icon: <BsCalendarEvent size={16} /> },
    { href: "/contact", label: "Contact Us", icon: <MdOutlineContactPhone size={16} /> },
  ];

  const navColumns = [[0, 1, 3, 5, 6], [2], [4]];

  const quickLinks = [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/support", label: "Support" },
    { href: "/careers", label: "Careers" },
  ];

  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61550815515953",
      label: "Facebook",
      icon: FaFacebookF,
    },
    {
      href: "https://www.instagram.com/coxbit_tnau/?hl=en",
      label: "Instagram",
      icon: FaInstagram,
    },
    {
      href: "https://www.linkedin.com/company/coxbit-centre-of-excellence-in-biotechnology/?viewAsMember=true",
      label: "LinkedIn",
      icon: FaLinkedinIn,
    },
    {
      href: "https://youtube.com/@coxbitoffical?si=1lTaIbZyyHVURewq",
      label: "YouTube",
      icon: FaYoutube,
    },
    {
      href: "https://whatsapp.com/channel/0029VbDPIatDjiOetWdvui01",
      label: "WhatsApp",
      icon: FaWhatsapp,
    },
  ];

  return (
    <footer className="bg-[#4a2c17] text-white mt-16 relative overflow-hidden text-[1.1rem] md:text-[1.15rem]">
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Image
                src="/logo.jpeg"
                alt="COXBIT Logo"
                width={180}
                height={60}
                priority
                className="h-14 w-auto object-contain mb-4 rounded"
              />

              {/* Partner Logos */}
              <div className="flex items-center space-x-3 mb-2">
                <div className="text-sm md:text-base text-amber-100 mb-2">In partnership with:</div>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.tnapex.tn.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[76px] h-[76px] flex items-center bg-white/10 hover:bg-white/20 rounded-lg p-2 transition-colors duration-200"
                >
                  <Image
                    src="/TNA logo.jpg"
                    alt="TNAPEx - Tamil Nadu Agri Processing and Exports"
                    width={76}
                    height={76}
                    className="w-full h-auto object-contain rounded"
                  />
                </a>
                <a
                  href="https://www.editn.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[76px] h-[76px] flex items-center bg-white/10 hover:bg-white/20 rounded-lg p-2 transition-colors duration-200"
                >
                  <Image
                    src="/innovation logo.jpg"
                    alt="EDII-TN - Entrepreneurship Development and Innovation Institute"
                    width={76}
                    height={76}
                    className="w-full h-auto object-contain rounded"
                  />
                </a>
              </div>
            </div>
            <p className="text-amber-100 text-base md:text-lg leading-relaxed mb-6">
              Centre of Excellence in Biotechnology at TNAU - Advancing
              agricultural biotechnology through research, innovation, and
              cutting-edge facilities for transformative agricultural solutions.
            </p>
            <div className="flex space-x-4 mt-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#c89b3c] hover:text-[#6b4226] transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="text-2xl md:text-3xl" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-xl font-bold text-[#c89b3c] mb-4">Navigation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-5">
              {navColumns.map((indexes, colIndex) => (
                <ul key={colIndex} className="space-y-3">
                  {indexes.map((i) => {
                    const link = navigationLinks[i];
                    return (
                      <li key={i}>
                        {link.submenu ? (
                          <div>
                            <div className="text-amber-100 text-sm md:text-base flex items-center gap-2 mb-1.5 font-semibold">
                              <span className="text-white">{link.icon}</span>
                              {link.label}
                            </div>
                            <ul className="ml-6 space-y-1.5">
                              {link.submenu.map((sub, subIndex) => (
                                <li key={subIndex}>
                                  {sub.submenu ? (
                                    <div>
                                      <div className="text-amber-100/90 text-sm md:text-base font-medium">
                                        {sub.label}
                                      </div>
                                      <ul className="ml-3 mt-1 space-y-1">
                                        {sub.submenu.map((nested, nestedIndex) => (
                                          <li key={nestedIndex}>
                                            <a
                                              href={nested.href}
                                              className="text-amber-200/80 hover:text-[#c89b3c] transition-colors duration-200 text-sm md:text-base block"
                                            >
                                              {nested.label}
                                            </a>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ) : (
                                    <a
                                      href={sub.href}
                                      className="text-amber-200/80 hover:text-[#c89b3c] transition-colors duration-200 text-sm md:text-base block"
                                    >
                                      {sub.label}
                                    </a>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <a
                            href={link.href}
                            className="text-amber-100 hover:text-[#c89b3c] transition-colors duration-200 text-sm md:text-base font-semibold flex items-center gap-2 group"
                          >
                            <span className="text-white group-hover:text-[#c89b3c]">{link.icon}</span>
                            {link.label}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl font-bold text-[#c89b3c] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-amber-200/80 hover:text-[#c89b3c] transition-colors duration-200 text-sm md:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Director Section */}
      <div className="border-t border-white/10 bg-black/20 relative">
        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="font-serif text-xl font-bold text-white mb-4">
              Director, Centre of Excellence in Biotechnology
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-amber-100 font-medium mb-2 text-base md:text-lg">Organization</p>
                <p className="text-amber-200/80 text-base md:text-lg">
                  Tamil Nadu Agricultural University
                </p>
                <p className="text-amber-200/80 text-base md:text-lg">
                  Coimbatore - 641 003, Tamil Nadu, India
                </p>
              </div>
              <div>
                <p className="text-amber-100 font-medium mb-2 text-base md:text-lg">
                  Digital Contact
                </p>
                <div className="space-y-1">
                  <div>
                    <a
                      href="mailto:coebiotech@tnau.ac.in"
                      className="text-[#c89b3c] hover:text-white transition-colors text-base md:text-lg"
                    >
                      coebiotech@tnau.ac.in
                    </a>
                  </div>
                  <div>
                    <a
                      href="http://tinyurl.com/mry6y9vf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#c89b3c] hover:text-white transition-colors text-base md:text-lg"
                    >
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-amber-100 font-medium mb-2 text-base md:text-lg">Phone Numbers</p>
                <div className="space-y-1">
                  <div>
                    <a
                      href="tel:+919489056706"
                      className="text-[#c89b3c] hover:text-white transition-colors text-base md:text-lg"
                    >
                      +91 94870 01028
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:+918870281435"
                      className="text-[#c89b3c] hover:text-white transition-colors text-base md:text-lg"
                    >
                      +91 88702 81435
                    </a>
                  </div>
                  <div>
                    <a
                      href="tel:+917373509696"
                      className="text-[#c89b3c] hover:text-white transition-colors text-base md:text-lg"
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
      <div className="border-t border-white/10 bg-black/30 relative">
        <div className="relative max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-amber-200/80 text-sm">
              © {new Date().getFullYear()} COXBIT. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="/privacy"
                className="text-amber-200/80 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="text-amber-200/80 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookies"
                className="text-amber-200/80 hover:text-white transition-colors"
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

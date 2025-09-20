"use client";
import React, { useState } from "react";
import Image from "next/image";
import NewsCard from "../components/NewsCard";
import NewsPopup from "../components/NewsPopup";

export default function EventsNews() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCardClick = (photo) => {
    setSelectedPhoto(photo);
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setSelectedPhoto(null);
  };
  // 2025-2026 News Photos Data
  const newsPhotos2025 = [
    {
      image:
        "/Events - Trainings/5 - News/2025-2026/WhatsApp Image 2025-08-08 at 6.04.43 PM.jpeg",
      title: "August Achievement",
      date: "August 2025",
    },
    {
      image:
        "/Events - Trainings/5 - News/2025-2026/WhatsApp Image 2025-07-29 at 10.40.35 AM.jpeg",
      title: "Innovation Milestone",
      date: "July 2025",
    },
    {
      image:
        "/Events - Trainings/5 - News/2025-2026/WhatsApp Image 2025-07-18 at 11.21.14 AM.jpeg",
      title: "Lab Excellence",
      date: "July 2025",
    },
    {
      image:
        "/Events - Trainings/5 - News/2025-2026/WhatsApp Image 2025-07-08 at 3.08.46 PM.jpeg",
      title: "Tech Innovation",
      date: "July 2025",
    },
    {
      image:
        "/Events - Trainings/5 - News/2025-2026/WhatsApp Image 2025-07-08 at 3.08.45 PM(1).jpeg",
      title: "Progress Report",
      date: "July 2025",
    },
    {
      image:
        "/Events - Trainings/5 - News/2025-2026/WhatsApp Image 2025-07-08 at 3.08.44 PM.jpeg",
      title: "Lab Activities",
      date: "July 2025",
    },
    {
      image:
        "/Events - Trainings/5 - News/2025-2026/WhatsApp Image 2025-07-07 at 1.05.20 PM.jpeg",
      title: "COXBIT Highlights",
      date: "July 2025",
    },
    {
      image:
        "/Events - Trainings/5 - News/2025-2026/WhatsApp Image 2025-07-07 at 1.05.19 PM.jpeg",
      title: "Team Success",
      date: "July 2025",
    },
    {
      image:
        "/Events - Trainings/5 - News/2025-2026/WhatsApp Image 2025-07-07 at 1.05.19 PM(2).jpeg",
      title: "New Milestone",
      date: "July 2025",
    },
    {
      image:
        "/Events - Trainings/5 - News/2025-2026/WhatsApp Image 2025-07-07 at 1.05.18 PM.jpeg",
      title: "Innovation Hub",
      date: "July 2025",
    },
    {
      image:
        "/Events - Trainings/5 - News/2025-2026/WhatsApp Image 2025-06-27 at 10.10.37 AM.jpeg",
      title: "June Highlights",
      date: "June 2025",
    },
    {
      image:
        "/Events - Trainings/5 - News/2025-2026/WhatsApp Image 2025-06-27 at 10.10.36 AM.jpeg",
      title: "Breakthrough",
      date: "June 2025",
    },
    {
      image:
        "/Events - Trainings/5 - News/2025-2026/WhatsApp Image 2025-06-26 at 10.05.43 PM.jpeg",
      title: "Project Success",
      date: "June 2025",
    },
    {
      image:
        "/Events - Trainings/5 - News/2025-2026/WhatsApp Image 2025-06-02 at 12.53.05 PM.jpeg",
      title: "Major Achievement",
      date: "June 2025",
    },
    {
      image:
        "/Events - Trainings/5 - News/2025-2026/WhatsApp Image 2025-06-02 at 12.53.03 PM.jpeg",
      title: "Excellence Award",
      date: "June 2025",
    },
  ];

  const events = [
    {
      id: 1,
      title: "Hands-on Training on High Throughput Analysis of Protein",
      date: "2024-02-15",
      time: "9:00 AM - 5:00 PM",
      location: "COXBIT Laboratory, TNAU Coimbatore",
      description:
        "Comprehensive training program on advanced protein analysis techniques using high-throughput platforms and mass spectrometry.",
      image:
        "/Events - Trainings/2 - Hands on training on High throughput analysis of Protein/Training Participants.JPG",
      status: "completed",
      category: "Training Program",
      participants: "25+ Research Scholars",
      technologies: [
        "Mass Spectrometry",
        "Protein Analysis",
        "LCMS",
        "Data Interpretation",
      ],
    },
    {
      id: 2,
      title: "LCMS & HPLC Training Workshop",
      date: "2024-03-10",
      time: "9:00 AM - 4:00 PM",
      location: "Analytical Laboratory, COXBIT",
      description:
        "Intensive hands-on training on Liquid Chromatography Mass Spectrometry and High Performance Liquid Chromatography techniques.",
      image: "/Events - Trainings/3 - LCMS Training/_DSC0260.JPG",
      status: "completed",
      category: "Technical Training",
      participants: "30+ Students & Researchers",
      technologies: [
        "LCMS",
        "HPLC",
        "Sample Preparation",
        "Method Development",
      ],
    },
    {
      id: 3,
      title: "GCMS Training Program",
      date: "2024-04-05",
      time: "10:00 AM - 5:00 PM",
      location: "Advanced Analytical Facility, COXBIT",
      description:
        "Comprehensive training on Gas Chromatography Mass Spectrometry for metabolomics and environmental analysis applications.",
      image: "/Events - Trainings/4 - GCMS Training/_DSC1451.JPG",
      status: "completed",
      category: "Analytical Training",
      participants: "20+ Researchers",
      technologies: [
        "GCMS",
        "Metabolomics",
        "Environmental Analysis",
        "Quality Control",
      ],
    },
    {
      id: 4,
      title: "Bioentrepreneurship Ecosystem Meet",
      date: "2024-01-29",
      time: "2:00 PM - 6:00 PM",
      location: "Conference Hall, COXBIT",
      description:
        "Building bioentrepreneurship ecosystem at TNAU to foster innovation and startup development in biotechnology sector.",
      image: "/Events - Trainings/1 - Bioentrpreneurship Meet/IMG_1386.JPG",
      status: "completed",
      category: "Innovation Meet",
      participants: "50+ Entrepreneurs & Students",
      technologies: [
        "Bioentrepreneurship",
        "Startup Development",
        "Innovation",
        "Technology Transfer",
      ],
    },
  ];

  const news = [
    {
      id: 1,
      title: "COXBIT Establishes World-Class Biotechnology Infrastructure",
      date: "2024-08-16",
      excerpt:
        "Centre of Excellence in Biotechnology marks 6 years of groundbreaking research and innovation at TNAU with state-of-the-art facilities.",
      content:
        "The Centre of Excellence in Biotechnology (COXBIT) continues to lead biotechnology research and innovation with world-class infrastructure including advanced mass spectrometry platforms...",
      image: "/Scrolling Photos/IMG_3387.JPG",
      category: "Infrastructure Development",
    },
    {
      id: 2,
      title: "Government of Tamil Nadu Supports Biotechnology Innovation",
      date: "2024-07-20",
      excerpt:
        "Continued funding support enables COXBIT to expand research capabilities and develop biobased products for agricultural applications.",
      content:
        "With strong backing from the Government of Tamil Nadu, COXBIT has been able to establish cutting-edge research facilities and launch innovative programs...",
      image: "/Scrolling Photos/IMG_6216.JPG",
      category: "Government Support",
    },
    {
      id: 3,
      title: "Public-Private Partnership Model Drives Research Excellence",
      date: "2024-06-15",
      excerpt:
        "COXBIT's PPP approach successfully develops super active enzymes, bio molecules, and plant growth stimulants for commercial applications.",
      content:
        "The public-private partnership model at COXBIT has proven highly effective in translating research into practical applications that benefit farmers...",
      image: "/Scrolling Photos/IMG_3500.JPG",
      category: "Research Achievement",
    },
    {
      id: 4,
      title: "Advanced Analytical Platform Enhances Research Capabilities",
      date: "2024-05-10",
      excerpt:
        "High-throughput platform for proteomics and metabolomics featuring MALDI TOF/TOF, LCMS-8045, and GCMS TQ-8040 NX systems.",
      content:
        "The installation of advanced analytical equipment including preparative HPLC, UHPLC, Nano LC systems has significantly enhanced our research capabilities...",
      image: "/Scrolling Photos/IMG_6592.JPG",
      category: "Technology Advancement",
    },
    {
      id: 5,
      title: "Sustainability Initiative: Tree Planting Program",
      date: "2024-04-22",
      excerpt:
        "COXBIT demonstrates commitment to environmental stewardship through comprehensive tree planting and sustainability programs.",
      content:
        "As part of our commitment to environmental sustainability, COXBIT has launched an extensive tree planting program that aligns with our biotechnology research goals...",
      image: "/Scrolling Photos/Tree Planting.JPG",
      category: "Sustainability",
    },
  ];

  const upcomingEvents = [
    {
      title: "Advanced Metabolomics Workshop",
      date: "2025-10-15",
      description:
        "Next-generation metabolomics techniques and applications in agricultural biotechnology",
    },
    {
      title: "Bioentrepreneurship Development Program",
      date: "2025-11-20",
      description:
        "Comprehensive program for aspiring biotech entrepreneurs and startup founders",
    },
    {
      title: "International Conference on Agricultural Biotechnology",
      date: "2025-12-10",
      description:
        "Global platform for sharing latest research and innovations in agricultural biotech",
    },
  ];

  const trainingPrograms = [
    {
      title: "Proteomics & Metabolomics",
      duration: "5 Days",
      level: "Advanced",
      description:
        "Comprehensive training on high-throughput protein and metabolite analysis",
    },
    {
      title: "Mass Spectrometry Techniques",
      duration: "3 Days",
      level: "Intermediate",
      description: "Hands-on training on LCMS, GCMS, and MALDI TOF/TOF systems",
    },
    {
      title: "Bioinformatics & Data Analysis",
      duration: "4 Days",
      level: "Beginner to Advanced",
      description:
        "Computational tools and methods for biological data analysis",
    },
    {
      title: "Bioentrepreneurship Development",
      duration: "2 Days",
      level: "All Levels",
      description: "Innovation ecosystem development and startup methodologies",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Events & News
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Stay updated with the latest training programs, research
            developments, and innovation initiatives at the Centre of Excellence
            in Biotechnology.
          </p>
        </div>

        {/* Featured Events Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Training Programs & Workshops
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        event.status === "completed"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {event.status}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-sm opacity-90">{event.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center text-gray-600 mb-2">
                      <span className="mr-2">📅</span>
                      <span>
                        {event.date} • {event.time}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <span className="mr-2">📍</span>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <span className="mr-2">👥</span>
                      <span>{event.participants}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      Technologies Covered:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {event.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* News Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Latest News & Updates
          </h2>
          <div className="space-y-8">
            {news.map((article, index) => (
              <div
                key={article.id}
                className={`bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 overflow-hidden hover:shadow-2xl transition-shadow duration-300 ${
                  index % 2 === 0 ? "lg:flex" : "lg:flex lg:flex-row-reverse"
                }`}
              >
                <div className="lg:w-1/3">
                  <div className="relative h-64 lg:h-full">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {article.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-2/3 p-8">
                  <div className="mb-3">
                    <span className="text-sm text-gray-500 font-medium">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold">
                    Read Full Article →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Upcoming Events
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                  <p className="text-blue-100 mb-3 font-medium">{event.date}</p>
                  <p className="text-blue-50 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Available Training Programs
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingPrograms.map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🎓</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {program.title}
                </h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                    {program.duration}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                    {program.level}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 2025-2026 News Marquee */}
        <section className="mb-16 overflow-hidden">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Latest News & Updates 2025-2026
          </h2>

          {/* Horizontal Scrolling Marquee */}
          <div className="relative">
            <div className="flex animate-marquee hover:pause-marquee space-x-6 py-4">
              {/* First set of images */}
              {newsPhotos2025.map((photo, index) => (
                <NewsCard
                  key={`first-${index}`}
                  photo={photo}
                  index={index}
                  onCardClick={handleCardClick}
                  cardType="marquee"
                />
              ))}
              {/* Duplicate set for seamless scrolling */}
              {newsPhotos2025.map((photo, index) => (
                <NewsCard
                  key={`second-${index}`}
                  photo={photo}
                  index={index}
                  onCardClick={handleCardClick}
                  cardType="marquee"
                />
              ))}
            </div>
          </div>

          {/* Vertical News Cards Grid */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              News Highlights Grid
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {newsPhotos2025.slice(0, 8).map((photo, index) => (
                <NewsCard
                  key={`grid-${index}`}
                  photo={photo}
                  index={index}
                  onCardClick={handleCardClick}
                  cardType="grid"
                />
              ))}
            </div>
          </div>

          {/* Diagonal Scrolling Effect */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Recent Activities
            </h3>
            <div className="relative h-96 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-6 gap-4 transform rotate-12 scale-110">
                  {newsPhotos2025.slice(0, 12).map((photo, index) => (
                    <NewsCard
                      key={`diagonal-${index}`}
                      photo={photo}
                      index={index}
                      onCardClick={handleCardClick}
                      cardType="diagonal"
                    />
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center text-gray-800">
                  <h4 className="text-2xl font-bold mb-2">2025-2026 Journey</h4>
                  <p className="text-lg">
                    Continuous Innovation & Research Excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gradient-to-br from-gray-800 via-blue-900 to-indigo-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Stay Connected with COXBIT
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter for updates on training programs,
            research breakthroughs, funding opportunities, and biotechnology
            innovations.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none text-gray-900"
            />
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold">
              Subscribe
            </button>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-1">Training Updates</h4>
              <p className="text-blue-200">Latest workshop schedules</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Research News</h4>
              <p className="text-blue-200">Breakthrough discoveries</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Funding Opportunities</h4>
              <p className="text-blue-200">Grant announcements</p>
            </div>
          </div>
        </section>

        {/* News Popup Modal */}
        <NewsPopup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          photo={selectedPhoto}
        />
      </div>
    </div>
  );
}

import React from "react";

export default function Contact() {
  const contactInfo = [
    {
      title: "General Inquiries",
      email: "coebiotech@tnau.ac.in",
      phone: "+91 94890 56706",
      icon: "📧",
      description: "For general questions about COXBIT facilities and services",
    },
    {
      title: "Research Collaboration",
      email: "research@coeb.tnau.ac.in",
      phone: "+91 88702 81435",
      icon: "🧬",
      description: "Laboratory collaboration and research partnerships",
    },
    {
      title: "Facility Booking",
      email: "facility@coeb.tnau.ac.in",
      phone: "+91 73735 09696",
      icon: "🏢",
      description: "Cabin space, seminar hall, and board room reservations",
    },
    {
      title: "Administrative Services",
      email: "admin@coeb.tnau.ac.in",
      phone: "+91 9487001028",
      icon: "�",
      description: "Office space, billing, and general administration",
    },
  ];

  const facilities = [
    {
      name: "Bio Laboratory",
      description:
        "State-of-the-art biotechnology research laboratories with advanced equipment",
      features: [
        "Proteomics & Metabolomics Platform",
        "Mass Spectrometry Suite",
        "Tissue Culture Facility",
      ],
      icon: "🔬",
    },
    {
      name: "Cabin Spaces",
      description:
        "Private cabin spaces for researchers and visiting collaborators",
      features: ["Fully Furnished", "High-Speed Internet", "Air Conditioning"],
      icon: "🏠",
    },
    {
      name: "Seminar Hall",
      description:
        "Modern seminar hall for conferences, training, and presentations",
      features: [
        "100 Seating Capacity",
        "Audio-Visual Equipment",
        "Video Conferencing",
      ],
      icon: "🎯",
    },
    {
      name: "Board Room",
      description:
        "Executive board room for meetings and strategic discussions",
      features: [
        "20 Seating Capacity",
        "Presentation Equipment",
        "Climate Controlled",
      ],
      icon: "🤝",
    },
    {
      name: "Office Spaces",
      description:
        "Administrative and support offices within the COXBIT building",
      features: [
        "Reception Area",
        "Administrative Offices",
        "Support Services",
      ],
      icon: "🏢",
    },
  ];

  const offices = [
    {
      name: "Centre of Excellence in Biotechnology",
      address:
        "Tamil Nadu Agricultural University, Coimbatore - 641 003, Tamil Nadu, India",
      phone: "+91 94890 56706",
      email: "coebiotech@tnau.ac.in",
      hours: "Monday - Friday: 9:00 AM - 5:00 PM IST",
      description:
        "Single building housing all COXBIT facilities including bio labs, cabin spaces, seminar hall, board room, and office spaces",
      alternateContacts: [
        { purpose: "Research Collaboration", phone: "+91 88702 81435" },
        { purpose: "Facility Booking", phone: "+91 73735 09696" },
        { purpose: "Administration", phone: "+91 9487001028" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 pt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-100/20 via-transparent to-purple-100/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact COXBIT
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with the Centre of Excellence in Biotechnology. All our
            facilities - bio labs, cabin spaces, seminar hall, board room, and
            offices - are located in a single building at TNAU, Coimbatore.
          </p>
        </div>

        {/* Contact Form and Info */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Your Company Name"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="sales">Sales & Partnerships</option>
                  <option value="support">Technical Support</option>
                  <option value="careers">Career Opportunities</option>
                  <option value="media">Media & Press</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-3xl mr-4 mt-1">{contact.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {contact.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {contact.description}
                      </p>
                      <p className="text-gray-600 mb-1">
                        <a
                          href={`mailto:${contact.email}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {contact.email}
                        </a>
                      </p>
                      <p className="text-gray-600">
                        <a
                          href={`tel:${contact.phone}`}
                          className="hover:text-blue-600 transition-colors"
                        >
                          {contact.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  💼
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                  aria-label="Twitter"
                >
                  🐦
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
                  aria-label="GitHub"
                >
                  💻
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                  aria-label="YouTube"
                >
                  📺
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Facilities in CoEB Building */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Facilities in COXBIT Building
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            All our facilities are conveniently located within a single building
            at Tamil Nadu Agricultural University, Coimbatore. This integrated
            approach allows for seamless collaboration and efficient operations.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4 text-center">{facility.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {facility.name}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {facility.description}
                </p>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900">
                    Features:
                  </h4>
                  <ul className="space-y-1">
                    {facility.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 text-sm flex items-start"
                      >
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Office Locations */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Location
          </h2>
          <div className="max-w-4xl mx-auto">
            {/* Main Location Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Centre of Excellence in Biotechnology (COXBIT)
                </h3>
                <p className="text-gray-600">
                  Single building housing all COXBIT facilities including bio
                  labs, cabin spaces, seminar hall, board room, and office
                  spaces
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">📍</span>
                    <p>
                      Tamil Nadu Agricultural University (TNAU), Lawley Road,
                      Coimbatore - 641003, Tamil Nadu, India
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">📞</span>
                    <a
                      href="tel:+919489056706"
                      className="hover:text-blue-600 transition-colors"
                    >
                      +91 94890 56706
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-blue-600 mr-2">✉️</span>
                    <a
                      href="mailto:coebiotech@tnau.ac.in"
                      className="hover:text-blue-600 transition-colors"
                    >
                      coebiotech@tnau.ac.in
                    </a>
                  </div>
                  <div className="flex items-start">
                    <span className="text-blue-600 mr-2 mt-1">🕒</span>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM IST</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">
                    Alternate Contacts
                  </h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Research Collaboration
                      </span>
                      <a
                        href="tel:+918870281435"
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        +91 88702 81435
                      </a>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Facility Booking
                      </span>
                      <a
                        href="tel:+917373509696"
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        +91 73735 09696
                      </a>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Administration
                      </span>
                      <a
                        href="tel:+919487001028"
                        className="text-blue-600 hover:text-blue-800 text-sm"
                      >
                        +91 9487001028
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
          <p className="text-gray-600 mb-6">
            Visit the Centre of Excellence in Biotechnology at Tamil Nadu
            Agricultural University, Coimbatore.
          </p>
          <div className="h-64 bg-gradient-to-r from-green-100 to-blue-200 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="text-4xl mb-2">🗺️</div>
              <p className="font-semibold">TNAU Campus Location</p>
              <p className="text-sm">Lawley Road, Coimbatore - 641003</p>
              <p className="text-sm">Tamil Nadu, India</p>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="mt-16 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
          <div className="flex items-center">
            <div className="text-blue-400 mr-3">
              <span className="text-2xl">ℹ️</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800">
                Facility Access Information
              </h3>
              <p className="text-blue-700">
                All COXBIT facilities are located within a single building at
                TNAU campus. Prior appointment recommended for facility visits
                and equipment usage. Contact facility booking:
                <a
                  href="tel:+917373509696"
                  className="font-semibold hover:underline ml-1"
                >
                  +91 73735 09696
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

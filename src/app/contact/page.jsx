import Image from "next/image";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Contact() {
  return (
    <div className="min-h-screen bg-amber-100/60">
      {/* Page header banner */}
      <div className="bg-[#6b4226] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            Get In Touch
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            Contact Us
          </h1>
          <p className="text-amber-100 mt-3 max-w-2xl leading-relaxed">
            Reach the COXBIT team and Director&apos;s office, or locate us at
            Tamil Nadu Agricultural University, Coimbatore.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="w-full max-w-4xl mx-auto bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm flex flex-col md:flex-row overflow-hidden">
          {/* Profile Section */}
          <div className="flex-1 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 p-10 md:p-12">
            <div className="w-28 h-28 rounded-full bg-gray-100 border-4 border-[#c89b3c] mb-4 flex items-center justify-center overflow-hidden relative">
              <Image
                src="/COXBIT BOARD OF DIRECTORS PHOTOS/Dr. N. Senthil.jpg"
                alt="Dr. N. Senthil"
                fill
                sizes="112px"
                className="object-cover object-top"
              />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#6b4226] mb-1">
              Dr. N. Senthil
            </h2>
            <p className="text-gray-700 font-semibold mb-2">Director</p>
            <p className="text-gray-600 text-center mb-2 text-sm">
              Centre of Excellence in Biotechnology (COXBIT)
            </p>
            <p className="text-gray-600 text-center mb-2 text-sm">
              Tamil Nadu Agricultural University Campus
              <br />
              Lawley Road, Coimbatore - 641003
              <br />
              Tamil Nadu, India
            </p>
            <div className="mt-4 w-full flex flex-col gap-2 items-center">
              <a
                href="mailto:coebiotech@tnau.ac.in"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#6b4226]/5 hover:bg-[#6b4226]/10 text-[#6b4226] font-medium transition-colors duration-200"
              >
                <HiOutlineMail className="w-5 h-5" />
                coebiotech@tnau.ac.in
              </a>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#6b4226]/5 text-[#6b4226] font-medium">
                <HiOutlinePhone className="w-5 h-5" />
                +91 94870 01028
              </span>
            </div>
          </div>
          {/* Map Section */}
          <div className="flex-1 flex items-center justify-center bg-white p-6 md:p-8">
            <div className="w-full h-80 rounded-sm overflow-hidden border border-gray-200">
              <iframe
                title="COXBIT Location"
                src="https://www.google.com/maps?q=Tamil+Nadu+Agricultural+University,+Lawley+Road,+Coimbatore+-+641003,+Tamil+Nadu,+India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Social media */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-[#6b4226]">
              Connect With Us on Social Media
            </h2>
            <div className="w-16 h-1 bg-[#c89b3c] mx-auto mt-3 mb-4" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              Scan a QR code below or follow us for the latest research,
              events and biotechnology updates from COXBIT.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm p-6 text-center">
              <h3 className="font-serif text-lg font-bold text-[#6b4226] mb-4">
                Facebook
              </h3>
              <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm p-3 inline-block">
                <Image
                  src="/QR Code - CoEB/QR - FB - CoEB.png"
                  alt="Facebook QR Code - COXBIT"
                  width={140}
                  height={140}
                  className="mx-auto"
                />
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Scan to follow our Facebook page for updates, events and
                research highlights.
              </p>
              <a
                href="https://www.facebook.com/profile.php?id=61550815515953"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-semibold text-[#6b4226] hover:text-[#8a6a1f] hover:underline"
              >
                Visit our Facebook Page &rarr;
              </a>
            </div>

            <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm p-6 text-center">
              <h3 className="font-serif text-lg font-bold text-[#6b4226] mb-4">
                Instagram
              </h3>
              <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm p-3 inline-block">
                <Image
                  src="/QR Code - CoEB/QR - Insta - CoEB.jpeg"
                  alt="Instagram QR Code - COXBIT"
                  width={140}
                  height={140}
                  className="mx-auto"
                />
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Follow us on Instagram for behind-the-scenes content and
                visual updates.
              </p>
              <a
                href="https://www.instagram.com/coxbit_tnau?igsi=MW1oeGU4dDNzYTNpNg=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-sm font-semibold text-[#6b4226] hover:text-[#8a6a1f] hover:underline"
              >
                Visit our Instagram Page &rarr;
              </a>
            </div>

            <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm shadow-sm p-6 text-center">
              <h3 className="font-serif text-lg font-bold text-[#6b4226] mb-4">
                LinkedIn
              </h3>
              <div className="bg-gradient-to-b from-amber-50 to-white border border-amber-200/70 rounded-sm p-3 inline-block">
                <Image
                  src="/QR Code - CoEB/QR - Linkedin - CoEB.png"
                  alt="LinkedIn QR Code - COXBIT"
                  width={140}
                  height={140}
                  className="mx-auto"
                />
              </div>
              <p className="text-gray-600 text-sm mt-4">
                Connect with us professionally for research collaborations
                and opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page header banner */}
      <div className="bg-[#0a1f44] text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <p className="text-[#c89b3c] uppercase tracking-widest text-xs font-semibold mb-2">
            Get In Touch
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">
            Contact Us
          </h1>
          <p className="text-blue-100 mt-3 max-w-2xl leading-relaxed">
            Reach the COXBIT team and Director&apos;s office, or locate us at
            Tamil Nadu Agricultural University, Coimbatore.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="w-full max-w-4xl mx-auto bg-white border border-gray-200 rounded-sm shadow-sm flex flex-col md:flex-row overflow-hidden">
          {/* Profile Section */}
          <div className="flex-1 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 p-10 md:p-12">
            <div className="w-28 h-28 rounded-full bg-gray-100 border-4 border-[#c89b3c] mb-4 flex items-center justify-center overflow-hidden relative">
              <Image
                src="/COXBIT BOARD OF DIRECTORS PHOTOS/Dr. N. Senthil.jpg"
                alt="Dr. N. Senthil"
                fill
                sizes="112px"
                className="object-cover"
              />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#0a1f44] mb-1">
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#0a1f44]/5 hover:bg-[#0a1f44]/10 text-[#0a1f44] font-medium transition-colors duration-200"
              >
                <HiOutlineMail className="w-5 h-5" />
                coebiotech@tnau.ac.in
              </a>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#0a1f44]/5 text-[#0a1f44] font-medium">
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
      </div>
    </div>
  );
}

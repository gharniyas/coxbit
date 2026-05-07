export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Contact Us</h1>
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Contact Card */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="border-l-4 border-blue-600 pl-6 py-2 mb-4">
              <h2 className="text-2xl font-semibold text-blue-700 mb-1">Dr. N. Senthil</h2>
              <p className="text-gray-700 font-medium mb-1">Director</p>
              <p className="text-gray-600 mb-1">Biotech Council for Establishment of Centre of Excellence in Biotechnology (COXBIT)</p>
              <p className="text-gray-600 mb-1">Tamil Nadu Agricultural University Campus</p>
              <p className="text-gray-600 mb-1">Lawley Road, Coimbatore - 641003</p>
              <p className="text-gray-600 mb-1">Tamil Nadu, India</p>
            </div>
            <div className="mt-4 space-y-2 text-gray-700">
              <div className="flex items-center gap-2">
                <span className="font-medium">Email:</span>
                <a href="mailto:coebiotech@tnau.ac.in" className="text-blue-600 hover:underline break-all">
                  coebiotech@tnau.ac.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">Office:</span>
                <span>+91 94870 01028</span>
              </div>
            </div>
          </div>
          {/* Map Card */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow border border-gray-200">
              <iframe
                title="COXBIT Location"
                src="https://www.google.com/maps?q=Tamil+Nadu+Agricultural+University,+Lawley+Road,+Coimbatore+-+641003,+Tamil+Nadu,+India&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '100%' }}
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

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-4xl bg-white/90 rounded-3xl shadow-2xl p-0 md:p-0 flex flex-col md:flex-row overflow-hidden border border-blue-100">
        {/* Profile Section */}
        <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-blue-100/60 to-white p-10 md:p-12">
          <div className="w-28 h-28 rounded-full bg-blue-200 border-4 border-blue-400 mb-4 flex items-center justify-center overflow-hidden">
            {/* Placeholder for profile photo */}
            <span className="text-4xl text-blue-700 font-bold">N</span>
          </div>
          <h2 className="text-2xl font-bold text-blue-700 mb-1 tracking-tight">
            Dr. N. Senthil
          </h2>
          <p className="text-gray-700 font-semibold mb-2">Director</p>
          <p className="text-gray-600 text-center mb-2 text-sm">
            Biotech Council for Establishment of Centre of Excellence in
            Biotechnology (COXBIT)
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.09 7.09a2.25 2.25 0 01-3.182 0l-7.09-7.09A2.25 2.25 0 012.25 6.993V6.75"
                />
              </svg>
              coebiotech@tnau.ac.in
            </a>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75v10.5A2.25 2.25 0 004.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25m-19.5 0v.243a2.25 2.25 0 00.659 1.591l7.09 7.09a2.25 2.25 0 003.182 0l7.09-7.09a2.25 2.25 0 00.659-1.591V6.75"
                />
              </svg>
              +91 94870 01028
            </span>
          </div>
        </div>
        {/* Map Section */}
        <div className="flex-1 flex items-center justify-center bg-white p-0 md:p-8">
          <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg border border-blue-100">
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
  );
}

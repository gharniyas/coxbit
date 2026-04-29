export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-6">Dr. N. Senthil</h2>
            <div className="space-y-3 text-gray-700">
              <p className="font-medium">Director</p>
              <p>Centre for Plant Molecular Biology and Biotechnology</p>
              <p>Tamil Nadu Agricultural University</p>
              <p>Lawley Road, Coimbatore - 641003</p>
              <p>Tamil Nadu, India</p>

              <div className="mt-6 space-y-2">
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href="mailto:directorcpmb@tnau.ac.in"
                    className="text-blue-600 hover:underline"
                  >
                    directorcpmb@tnau.ac.in
                  </a>
                </p>
                <p>
                  <span className="font-medium">Office:</span> +91 422 6611262
                </p>
                <p>
                  <span className="font-medium">Fax:</span> +91 422 6611462
                </p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="bg-white p-4 rounded-lg shadow">
            <iframe
              title="TNAU Location"
              src="https://www.google.com/maps?q=Tamil+Nadu+Agricultural+University,+Lawley+Road,+Coimbatore+-+641003,+Tamil+Nadu,+India&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

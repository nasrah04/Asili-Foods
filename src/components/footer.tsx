export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500">
            Asili Foods Tanzania
          </h2>

          <p className="text-gray-400 mt-4">
            Celebrating authentic Tanzanian cuisine through modern web experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">
            <li>Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-gray-400">
            📍 Dar es Salaam, Tanzania
          </p>

          <p className="text-gray-400 mt-2">
            📞 +255 700 000 000
          </p>

          <p className="text-gray-400 mt-2">
            📧 info@asilifoods.co.tz
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © 2026 Asili Foods Tanzania. All rights reserved.
      </div>

    </footer>
  );
}
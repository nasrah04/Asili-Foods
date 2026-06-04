export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-30">

      
        <div>
          <h2 className="text-1xl font-bold text-orange-500">
            Asili Foods Tanzania
          </h2>

          <p className="text-gray-400 mt-4">
            Celebrating authentic Tanzanian cuisine through modern web experience.
          </p>
        </div>
        <div className="justify-self-start">
          <h3 className="text-xl font-semibold mb-4 text-orange-500">
            Contact
          </h3>

          <p className="text-gray-400">
           <span>Location:</span> Dar es Salaam, Tanzania
          </p>

          <p className="text-gray-400 mt-2">
            <span>Phone:</span>
            +255 755 140 211
          </p>

          <p className="text-gray-400 mt-2">
            <span>Email:</span> info@asilifoods.co.tz
          </p>
        </div>

      </div>

      
      <div className="border-t border-gray-700 text-center py-3 text-gray-500 text-sm">
        © 2026 Asili Foods Tanzania. All rights reserved.
      </div>

    </footer>
  );
}
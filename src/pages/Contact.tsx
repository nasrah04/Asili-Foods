export default function Contact() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-center mb-10 text-orange-600">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="space-y-6">

          <div>
            <h3 className="text-xl font-semibold">📍 Location</h3>
            <p className="text-gray-600">
              Dar es Salaam, Tanzania
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">📞 Phone</h3>
            <p className="text-gray-600">
              +255 700 000 000
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">📧 Email</h3>
            <p className="text-gray-600">
              info@asilifoods.co.tz
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">🕒 Working Hours</h3>
            <p className="text-gray-600">
              Mon - Sun: 8:00 AM - 10:00 PM
            </p>
          </div>

        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-6">

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
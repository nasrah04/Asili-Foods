import Picture from "../assets/food.jpeg";
export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid md:grid-cols-2 gap-12 items-center">

    
        <div>
          <h1 className="text-4xl font-bold mb-6 text-orange-600">
            About Asili Foods Tanzania
          </h1>

          <p className="text-gray-600 mb-4">
            Asili Foods Tanzania is dedicated to preserving and promoting
            authentic Tanzanian cuisine. We bring traditional dishes closer
            to people using a modern digital experience.
          </p>

          <p className="text-gray-600 mb-4">
            From Ugali na Samaki to Pilau, Ndizi Nyama, and other Swahili
            delicacies, we celebrate the rich culinary heritage of Tanzania.
          </p>

          <p className="text-gray-600">
            Our mission is to connect people with real, traditional food
            experiences through a simple and modern platform.
          </p>
        </div>

    
        <div>
          <img
            src= {Picture}
            alt="Traditional Tanzanian Food"
            className="w-full h-120 object-cover rounded-2xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
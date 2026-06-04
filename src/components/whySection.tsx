import Foodpic from "../assets/asili.jpeg";
export default function WhySection() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-15 mt-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
        
         <div className="self-start">
      <h2 className="text-4xl font-bold mb-4 text-orange-700">
        Why Choose Asili Food?
      </h2>

      <p className="text-gray-600 mb-8">
        Asili Food Tanzania celebrates the rich culinary heritage of
        Tanzania through authentic recipes, fresh ingredients, and
        traditional cooking methods that bring people together.
      </p>
      <div className="space-y-2">
        <div className="space-y-2">
          <h3 className=" text-1xl leading-relaxed">
            1. Fresh Ingredients
          </h3>
          <p className="text-gray-600">
            Locally sourced ingredients for quality and authentic taste.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className=" text-1xl leading-relaxed">
            2. Traditional Recipes
          </h3>
          <p className="text-gray-600">
            Prepared using recipes passed down through generations.
          </p>

          <div className="space-y-2">
          <h3 className=" text-1xl leading-relaxed">
            3. Tanzania Cultural Heritage
          </h3>
          <p className="text-gray-600">
            Experience the diverse flavors of Tanzania.
          </p>
        </div>
        </div>
        </div>
    </div>

    <div>
      <img
        src= {Foodpic}
        alt="Traditional Tanzanian Food"
        className="rounded-2xl shadow-lg w-full h-100 object-cover"
      />
    </div>


    </div>
  </section>
        



    )
}
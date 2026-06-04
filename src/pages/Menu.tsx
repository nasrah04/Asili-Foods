import { useState } from "react";
import { foods } from "../data/foods";
import FoodCard from "../components/foodcard";

export default function Menu() {
    const [category, setCategory] = useState("all");
    const filteredFoods =
    category === "all"
      ? foods
      : foods.filter((food) => food.category === category);

   return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <h1 className="text-4xl font-bold text-center mb-10 text-orange-600">
        Our Menu
      </h1>
      <p className="text-gray-600 text-center" >Explore our complete selection of authentic Tanzanian dishes</p>

      
      <div className="flex flex-wrap justify-center gap-8 mb-10 mt-4 bg-white/90 py-6 rounded-lg">

        <button onClick={() => setCategory("all")} className="btn bg-amber-800  px-5 py-2 rounded-2xl transition duration-300 ">
          All
        </button>

        <button onClick={() => setCategory("ugali")} className="btn hover:bg-amber-800 px-5 py-2 rounded-2xl transition duration-300    ">
          Ugali
        </button>

        <button onClick={() => setCategory("rice")} className="btn hover:bg-amber-800 px-5 py-2 rounded-2xl transition duration-300 ">
          Rice
        </button>

        <button onClick={() => setCategory("snacks")} className="btn hover:bg-amber-800 px-5 py-2 rounded-2xl transition duration-300 ">
          Snacks
        </button>

        <button onClick={() => setCategory("other")} className="btn hover:bg-amber-800 px-5 py-2 rounded-2xl transition duration-300 ">
          Other
        </button>

      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredFoods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>

    </section>
  );
}
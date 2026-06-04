import { foods } from "../data/foods";
import FoodCard from "./foodcard";

export default function PopularFoods() {
  const featuredFoods = foods.filter(
    (food) => food.featured === true
  );
 {
  return (

    <section className="max-w-7xl mx-auto px-6 py-20">
    

      <h2 className="text-4xl font-bold text-center mb-12 text-orange-700 ">
        Popular Foods
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredFoods.map((food) => (
          <FoodCard
            key={food.id}
            food={food}
          />
        ))}
      </div>

    </section>
  );
}
}
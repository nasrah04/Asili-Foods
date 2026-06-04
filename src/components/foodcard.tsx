import { type Food } from "../types/food";
type props = {
  food: Food;
};
export default function FoodCard({ food }: props) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
      <img src={food.image} alt={food.name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col grow ">
        <h2 className="text-xl font-bold mb-2">{food.name}</h2>
        <p className="text-gray-600 mb-4">{food.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-semibold text-orange-500 flex" >Tsh{food.price.toFixed(2)}</span>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition duration-300">
            Add to Cart
          </button>
        </div>  
      </div>
    </div>
  );
}


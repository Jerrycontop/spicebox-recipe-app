import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [portion, setPortion] = useState(1);
  const [spicyLevel, setSpicyLevel] = useState(1); // 1 = Mild, 5 = Hot

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await res.json();
        setRecipe(data.meals[0]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchRecipe();
  }, [id]);

  if (loading) return <p className="text-center p-6">Loading recipe...</p>;
  if (!recipe) return <p className="text-center p-6">Recipe not found.</p>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
      {/* Image + Title */}
      <div className="flex flex-col items-center">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="rounded-xl w-64 h-48 object-cover mb-4"
        />
        <h1 className="text-2xl font-bold mb-2 text-center">
          {recipe.strMeal}
        </h1>
      </div>

      {/* Rating + Time */}
      <div className="flex items-center justify-center text-gray-600 mb-3">
        <span className="mr-2">⭐ 4.9</span>
        <span className="ml-2">⏱ 26 mins</span>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-center mb-6">
        {recipe.strInstructions.slice(0, 150)}...
      </p>

      {/* Spicy + Portion */}
      <div className="flex items-center justify-between mb-6">
        {/* Spicy Slider */}
        <div>
          <p className="font-semibold mb-1">Spicy</p>
          <input
            type="range"
            min="1"
            max="5"
            value={spicyLevel}
            onChange={(e) => setSpicyLevel(e.target.value)}
            className="w-32 accent-red-500"
          />
          <div className="flex justify-between text-xs mt-1">
            <span className="text-green-600">Mild</span>
            <span className="text-red-600">Hot</span>
          </div>
        </div>

        {/* Portion Counter */}
        <div>
          <p className="font-semibold mb-1">Portion</p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPortion((p) => Math.max(1, p - 1))}
              className="px-3 py-1 bg-gray-200 rounded-lg text-lg"
            >
              −
            </button>
            <span className="font-semibold text-lg">{portion}</span>
            <button
              onClick={() => setPortion((p) => p + 1)}
              className="px-3 py-1 bg-gray-200 rounded-lg text-lg"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Price + Order Button */}
      <div className="flex justify-between items-center mt-6">
        <button className="bg-red-500 text-white px-4 py-2 rounded-xl font-bold">
          $ 8.24
        </button>
        <button className="bg-black text-white px-6 py-3 rounded-xl font-bold">
          ORDER NOW
        </button>
      </div>
    </div>
  );
}

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useOrderStore from "../store/useOrderStore";

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const addOrder = useOrderStore((state) => state.addOrder);

  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      setRecipe(data.meals[0]);
    }
    fetchRecipe();
  }, [id]);

  if (!recipe) return <p className="text-center py-10">Loading recipe...</p>;

  return (
    <div className="container mx-auto px-6 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left: Recipe Image */}
        <div>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="rounded-2xl shadow-lg w-full"
          />
        </div>

        {/* Right: Recipe Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>
          <p className="text-gray-700 mb-6">{recipe.strInstructions}</p>

          {/* Ingredients */}
          <h2 className="text-xl font-semibold mb-3">Ingredients</h2>
          <ul className="list-disc list-inside mb-6 text-gray-600">
            {Array.from({ length: 20 }).map((_, i) => {
              const ingredient = recipe[`strIngredient${i + 1}`];
              const measure = recipe[`strMeasure${i + 1}`];
              return (
                ingredient &&
                ingredient.trim() !== "" && (
                  <li key={i}>
                    {ingredient} - {measure}
                  </li>
                )
              );
            })}
          </ul>

          {/* Order Button */}
          <button
            onClick={() => {
              addOrder(recipe);
              alert(`${recipe.strMeal} added to your orders!`);
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

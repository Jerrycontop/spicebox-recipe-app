import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) setRecipe(data.meals[0]);
      });
  }, [id]);

  if (!recipe) return <p className="text-center mt-10 text-gray-600">Loading recipe...</p>;

  // Collect ingredients + measures into a clean array
  const ingredients = Array.from({ length: 20 })
    .map((_, i) => {
      const ingredient = recipe[`strIngredient${i + 1}`];
      const measure = recipe[`strMeasure${i + 1}`];
      return ingredient ? `${ingredient} - ${measure}` : null;
    })
    .filter(Boolean);

  // Split instructions into paragraphs
  const instructions = recipe.strInstructions
    .split(/\r?\n/)
    .filter((line) => line.trim() !== "");

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-4 text-gray-900 text-center lg:text-left">
        {recipe.strMeal}
      </h1>

      {/* Tags */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
        <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
          {recipe.strCategory}
        </span>
        <span className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-medium">
          {recipe.strArea}
        </span>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: Image */}
        <div>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        {/* Right: Details */}
        <div className="space-y-8">
          {/* Ingredients */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">🧾 Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {ingredients.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">👨‍🍳 Instructions</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              {instructions.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video */}
      {recipe.strYoutube && (
        <div className="mt-14">
          <h2 className="text-2xl font-semibold mb-5 text-gray-900">🎥 Watch Tutorial</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[500px] rounded-2xl shadow-md"
              src={`https://www.youtube.com/embed/${recipe.strYoutube.split("v=")[1]}`}
              title="Recipe Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail;

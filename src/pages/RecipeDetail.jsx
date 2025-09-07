// src/pages/RecipeDetail.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      setError("No recipe ID provided in the URL.");
      setLoading(false);
      return;
    }

    const fetchRecipe = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        if (res.data && res.data.meals && res.data.meals.length > 0) {
          setRecipe(res.data.meals[0]);
        } else {
          setError("Recipe not found.");
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Failed to fetch recipe. Check your network or API.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <p className="p-6 text-center text-gray-600">Loading recipe...</p>;
  if (error)
    return (
      <div className="p-6 text-center">
        <p className="text-red-600 mb-4">{error}</p>
        <button onClick={() => navigate(-1)} className="px-4 py-2 bg-gray-200 rounded">
          ← Back
        </button>
      </div>
    );

  // Build ingredients list
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${ingredient}${measure ? ` - ${measure}` : ""}`);
    }
  }

  // Safely extract YouTube video ID (works with youtube.com and youtu.be)
  const getYouTubeId = (url) => {
    if (!url) return null;
    try {
      const u = new URL(url);
      if (u.hostname.includes("youtu.be")) return u.pathname.slice(1);
      if (u.hostname.includes("youtube.com")) return u.searchParams.get("v");
    } catch (e) {
      // fallback regex
      const m = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
      return m ? m[1] : null;
    }
    return null;
  };

  const videoId = getYouTubeId(recipe.strYoutube);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-4 py-2 bg-orange-100 text-orange-700 rounded-md"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: image */}
        <div>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-80 object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Right: details */}
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500">Category: <span className="text-gray-800">{recipe.strCategory}</span></p>
            <p className="text-sm text-gray-500">Area: <span className="text-gray-800">{recipe.strArea}</span></p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
            <ul className="list-disc list-inside text-gray-700">
              {ingredients.map((ing, idx) => (
                <li key={idx}>{ing}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {recipe.strInstructions}
            </p>
          </div>
        </div>
      </div>

      {videoId && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4">Watch Tutorial</h3>
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-xl shadow-md"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="Recipe Video"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}

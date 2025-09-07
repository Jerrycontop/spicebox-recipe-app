import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Discover = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("chicken"); // default search
  const [loading, setLoading] = useState(false);

  // Fetch recipes whenever query changes
  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        );
        const data = await res.json();
        setRecipes(data.meals || []);
      } catch (err) {
        console.error("Error fetching recipes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query]);

  return (
    <div className="p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-4">Discover Recipes 🍴</h1>

      {/* Search Bar */}
<div className="mb-8 flex justify-center">
  <div className="flex w-full max-w-md shadow-md rounded-full overflow-hidden border border-gray-200">
    <input
      type="text"
      placeholder="🔍 Search for a recipe..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="flex-grow px-4 py-2 text-gray-700 focus:outline-none"
    />
    <button
      onClick={() => setQuery(query)}
      className="bg-blue-500 text-white px-6 font-medium hover:bg-blue-600 transition"
    >
      Search
    </button>
  </div>
</div>


      {/* Loading State */}
      {loading && <p className="text-gray-500">Loading recipes...</p>}

      {/* Recipe Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Link to={`/recipe/${recipe.idMeal}`} key={recipe.idMeal}>
              <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition cursor-pointer">
                <img
                  src={recipe.strMealThumb}
                  alt={recipe.strMeal}
                  className="rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold">{recipe.strMeal}</h3>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-gray-500 col-span-full">No recipes found.</p>
        )}
      </div>
    </div>
  );
};

export default Discover;

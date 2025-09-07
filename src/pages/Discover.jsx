import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";

const Discover = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch recipes from TheMealDB API
  const fetchRecipes = async (query) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  // Default recipes on page load
  useEffect(() => {
    fetchRecipes("chicken"); // initial load
  }, []);

  // Update when search changes
  useEffect(() => {
    if (search.trim().length > 0) {
      const timeout = setTimeout(() => fetchRecipes(search), 500); // debounce
      return () => clearTimeout(timeout);
    }
  }, [search]);

  return (
    <div className="px-6 py-10">
      {/* Hero / Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Discover Recipes 🍲</h1>
        <p className="text-gray-600 mt-2">Search and explore delicious meals.</p>
      </div>

      {/* Search Bar */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search recipes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
        />
      </div>

      {/* Loading */}
      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {/* Recipe Grid */}
      {!loading && recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recipes.map((r) => (
            <RecipeCard
              key={r.idMeal}
              title={r.strMeal}
              image={r.strMealThumb}
              description={r.strArea + " • " + r.strCategory}
            />
          ))}
        </div>
      ) : (
        !loading && <p className="text-center text-gray-500">No recipes found.</p>
      )}
    </div>
  );
};

export default Discover;

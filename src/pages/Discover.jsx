// src/pages/Discover.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Discover = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // fetch all recipes initially
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) setRecipes(data.meals);
      });

    // fetch categories
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.categories) setCategories(data.categories);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.meals || []);
        setSelectedCategory("All"); // reset category when searching
      });
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);

    if (category === "All") {
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        .then((res) => res.json())
        .then((data) => {
          setRecipes(data.meals || []);
        });
    } else {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then((res) => res.json())
        .then((data) => {
          setRecipes(data.meals || []);
        });
    }
  };

  return (
    <div className="p-6">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">Discover Recipes 🍲</h1>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex items-center gap-2 mb-8">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border rounded-xl px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded-xl hover:bg-orange-600 transition"
        >
          Search
        </button>
      </form>

      {/* Category Filters */}
      <div className="flex gap-3 overflow-x-auto mb-6">
        <button
          onClick={() => handleCategoryClick("All")}
          className={`px-4 py-2 rounded-xl border ${
            selectedCategory === "All"
              ? "bg-orange-500 text-white"
              : "bg-white text-gray-700"
          }`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat.idCategory}
            onClick={() => handleCategoryClick(cat.strCategory)}
            className={`px-4 py-2 rounded-xl border ${
              selectedCategory === cat.strCategory
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {cat.strCategory}
          </button>
        ))}
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <Link to={`/recipe/${recipe.idMeal}`} key={recipe.idMeal}>
            <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer">
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="rounded-xl mb-3 w-full h-48 object-cover"
              />
              <h3 className="text-lg font-bold text-gray-800">
                {recipe.strMeal}
              </h3>
              <p className="text-sm text-gray-500 mt-1">Tap to view details</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discover;

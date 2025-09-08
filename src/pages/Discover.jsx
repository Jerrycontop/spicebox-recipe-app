// src/pages/Discover.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Discover = ({ addToOrders }) => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) setRecipes(data.meals);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.meals || []);
      });
  };

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6">
      {/* ✅ Top tagline + avatar */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">
          Order your favorite food!
        </h2>
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border"
        />
      </div>

      {/* ✅ Search Bar */}
      <form onSubmit={handleSearch} className="flex items-center gap-2 mb-6">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border rounded-full px-4 py-2 focus:ring-2 focus:ring-orange-400 outline-none"
        />
        <button
          type="submit"
          className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition"
        >
          Search
        </button>
      </form>

      {/* ✅ Category Filters */}
      <div className="flex space-x-3 mb-6 overflow-x-auto">
        {["All", "Combos", "Sliders", "Classic"].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full transition ${
              activeCategory === category
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-orange-400 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ✅ Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition relative"
          >
            {/* Food Image */}
            <Link to={`/recipe/${recipe.idMeal}`}>
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="rounded-xl mb-3 w-full h-48 object-cover"
              />
              <h3 className="text-lg font-bold text-gray-800">
                {recipe.strMeal}
              </h3>
            </Link>

            {/* ✅ Fake Price & Rating (placeholder for now) */}
            <p className="text-gray-600 mb-1">$9.99</p>
            <p className="text-sm text-yellow-600">⭐ 4.8</p>

            {/* ✅ Order Now Button */}
            <button
              onClick={() =>
                addToOrders?.({
                  id: recipe.idMeal,
                  name: recipe.strMeal,
                  image: recipe.strMealThumb,
                  price: 9.99, // placeholder price
                  status: "Preparing",
                })
              }
              className="mt-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow transition w-full"
            >
              Order Now
            </button>

            {/* ✅ Favorite Heart */}
            <button
              onClick={() => toggleFavorite(recipe.idMeal)}
              className={`absolute top-4 right-4 text-2xl ${
                favorites.includes(recipe.idMeal)
                  ? "text-red-500"
                  : "text-gray-300 hover:text-red-500"
              }`}
            >
              ♥
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;

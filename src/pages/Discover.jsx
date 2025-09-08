// src/pages/Discover.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";

const Discover = ({ addToOrders }) => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);

  // ✅ Fetch all categories
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  // ✅ Fetch meals
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          // Add price + rating to each recipe
          const enriched = data.meals.map((meal) => ({
            ...meal,
            price: (Math.random() * 15 + 5).toFixed(2), // $5 - $20
            rating: (Math.random() * 2 + 3).toFixed(1), // 3.0 - 5.0
          }));
          setRecipes(enriched);
        }
      });
  }, []);

  // ✅ Search handler
  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => res.json())
      .then((data) => {
        const enriched = (data.meals || []).map((meal) => ({
          ...meal,
          price: (Math.random() * 15 + 5).toFixed(2),
          rating: (Math.random() * 2 + 3).toFixed(1),
        }));
        setRecipes(enriched);
      });
  };

  // ✅ Category filter
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
        .then((res) => res.json())
        .then((data) => {
          const enriched = (data.meals || []).map((meal) => ({
            ...meal,
            price: (Math.random() * 15 + 5).toFixed(2),
            rating: (Math.random() * 2 + 3).toFixed(1),
          }));
          setRecipes(enriched);
        });
    } else {
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
        .then((res) => res.json())
        .then((data) => {
          const enriched = (data.meals || []).map((meal) => ({
            ...meal,
            price: (Math.random() * 15 + 5).toFixed(2),
            rating: (Math.random() * 2 + 3).toFixed(1),
          }));
          setRecipes(enriched);
        });
    }
  };

  // ✅ Toggle favorite
  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6">
      {/* Top Tagline */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Discover Recipes 🍲</h1>
        <img
          src="https://i.pravatar.cc/50"
          alt="User Avatar"
          className="w-12 h-12 rounded-full border"
        />
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex items-center gap-2 mb-6">
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

      {/* Categories */}
      <div className="flex gap-3 overflow-x-auto pb-4 mb-8">
        <button
          onClick={() => handleCategoryClick("All")}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
            selectedCategory === "All"
              ? "bg-orange-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.idCategory}
            onClick={() => handleCategoryClick(cat.strCategory)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
              selectedCategory === cat.strCategory
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {cat.strCategory}
          </button>
        ))}
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <Link to={`/recipe/${recipe.idMeal}`}>
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="rounded-xl mb-3 w-full h-48 object-cover"
              />
            </Link>

            {/* Title + Favorite */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-800">
                {recipe.strMeal}
              </h3>
              <button onClick={() => toggleFavorite(recipe.idMeal)}>
                {favorites.includes(recipe.idMeal) ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="text-gray-400" />
                )}
              </button>
            </div>

            {/* Rating + Price */}
            <div className="flex items-center justify-between mt-2">
              <span className="flex items-center text-yellow-500 text-sm">
                <FaStar className="mr-1" /> {recipe.rating}
              </span>
              <span className="text-gray-700 font-semibold">
                ${recipe.price}
              </span>
            </div>

            {/* Order Now Button */}
            <button
              onClick={() => addToOrders(recipe)}
              className="mt-3 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;

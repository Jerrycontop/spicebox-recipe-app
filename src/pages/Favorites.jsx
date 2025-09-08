// src/pages/Favorites.jsx
import React from "react";

const Favorites = ({ favorites, addToOrders, toggleFavorite }) => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Favorites</h1>

      {favorites.length === 0 ? (
        <p>No favorites yet. ❤️</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {favorites.map((meal) => (
            <div
              key={meal.idMeal}
              className="border rounded-lg shadow-md p-4 flex flex-col"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="rounded-lg mb-3"
              />
              <h2 className="text-lg font-semibold mb-2">{meal.strMeal}</h2>

              <div className="flex justify-between items-center">
                {/* Order Now Button */}
                <button
                  className="bg-green-600 text-white px-3 py-1 rounded"
                  onClick={() => addToOrders(meal)}
                >
                  Order Now
                </button>

                {/* Toggle Favorite Button */}
                <button onClick={() => toggleFavorite(meal)}>
                  ❤️
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;

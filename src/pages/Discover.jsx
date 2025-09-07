import React from "react";

const Discover = () => {
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
          className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-400 outline-none"
        />
        <button className="ml-3 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
          Search
        </button>
      </div>

      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Example Recipe Card */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition">
          <img
            src="https://source.unsplash.com/400x300/?food"
            alt="Recipe"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">Spaghetti Carbonara</h2>
            <p className="text-sm text-gray-600 mt-2">
              A classic Italian pasta dish with creamy sauce.
            </p>
          </div>
        </div>

        {/* Add more cards later */}
      </div>
    </div>
  );
};

export default Discover;

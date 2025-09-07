import React from "react";
import RecipeCard from "../components/RecipeCard";

const sampleRecipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    image: "https://images.unsplash.com/photo-1528712306091-ed0763094c98?q=80&w=800&auto=format&fit=crop",
    description: "Classic pasta with creamy sauce.",
  },
  {
    id: 2,
    title: "Chicken Shawarma Bowl",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop",
    description: "Herbed chicken, rice, veggies, tahini.",
  },
  {
    id: 3,
    title: "Avocado Toast",
    image: "https://images.unsplash.com/photo-1541516160071-3d95a557b5af?q=80&w=800&auto=format&fit=crop",
    description: "Sourdough, smashed avo, chili flakes.",
  },
  {
    id: 4,
    title: "Berry Pancakes",
    image: "https://images.unsplash.com/photo-1541599188778-cdc73298e8f8?q=80&w=800&auto=format&fit=crop",
    description: "Fluffy stack with berries & syrup.",
  },
  {
    id: 5,
    title: "Greek Salad",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop",
    description: "Feta, olives, cucumber, tomato.",
  },
  {
    id: 6,
    title: "Jollof Rice",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
    description: "Spiced tomato rice, party favorite.",
  },
];

const Discover = () => {
  return (
    <div className="px-6 py-10">
      {/* Hero / Title */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Discover Recipes 🍲</h1>
        <p className="text-gray-600 mt-2">Search and explore delicious meals.</p>
      </div>

      {/* Search Bar (wire up later) */}
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
        {sampleRecipes.map((r) => (
          <RecipeCard
            key={r.id}
            title={r.title}
            image={r.image}
            description={r.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;

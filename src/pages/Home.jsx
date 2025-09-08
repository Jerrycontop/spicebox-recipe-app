// src/pages/Home.jsx
import React from "react";

// Sample menu items
const menuItems = [
  {
    id: 1,
    name: "Spaghetti Carbonara",
    image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
    price: 12.99,
  },
  {
    id: 2,
    name: "Chicken Biryani",
    image: "https://www.themealdb.com/images/media/meals/xrttsx1487339558.jpg",
    price: 10.5,
  },
  {
    id: 3,
    name: "Beef Wellington",
    image: "https://www.themealdb.com/images/media/meals/vvpprx1487325699.jpg",
    price: 15.75,
  },
];

const Home = ({ addToOrders }) => {
  return (
    <div className="container mx-auto p-6">
      {/* ✅ Hero / Banner Section */}
      <section className="bg-orange-100 rounded-xl p-8 mb-10 flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold text-orange-600 mb-4">
            Discover Delicious Recipes 🍴
          </h1>
          <p className="text-gray-700 mb-6">
            SpiceBox helps you explore meals from around the world and order
            your favorites in just a click.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg shadow transition">
            Get Started
          </button>
        </div>
        <img
          src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg"
          alt="Delicious food"
          className="w-64 h-64 object-cover rounded-xl mt-6 md:mt-0 shadow-lg"
        />
      </section>

      {/* ✅ Menu Section */}
      <h2 className="text-3xl font-bold mb-6 text-orange-600">Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center hover:shadow-xl transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-40 h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-600 mb-2">${item.price.toFixed(2)}</p>
            <button
              onClick={() => addToOrders(item)}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg shadow transition"
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

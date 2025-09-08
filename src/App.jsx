import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import Navbar from "./components/Navbar";
import Discover from "./pages/Discover";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import Orders from "./pages/Orders";
import Favorites from "./pages/Favorites";

function App() {
  // Orders state
  const [orders, setOrders] = useState([]);

  // Favorites state
  const [favorites, setFavorites] = useState([]);

  // Add to orders
  const addToOrders = (item) => {
    setOrders([...orders, { ...item, id: Date.now(), status: "Preparing" }]);
  };

  // Cancel order
  const cancelOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  // Toggle favorite
  const toggleFavorite = (meal) => {
    setFavorites((prev) => {
      const exists = prev.find((f) => f.idMeal === meal.idMeal);
      if (exists) {
        return prev.filter((f) => f.idMeal !== meal.idMeal);
      } else {
        return [...prev, meal];
      }
    });
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar ordersCount={orders.length} />

        <main className="flex-1 container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Home addToOrders={addToOrders} toggleFavorite={toggleFavorite} favorites={favorites} />} />
            <Route path="/recipe/:id" element={<RecipeDetail addToOrders={addToOrders} toggleFavorite={toggleFavorite} favorites={favorites} />} />
            <Route path="/discover" element={<Discover addToOrders={addToOrders} toggleFavorite={toggleFavorite} favorites={favorites} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/orders" element={<Orders orders={orders} cancelOrder={cancelOrder} />} />
            <Route path="/favorites" element={<Favorites favorites={favorites} addToOrders={addToOrders} toggleFavorite={toggleFavorite} />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

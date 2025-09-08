// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import Navbar from "./components/Navbar";
import Discover from "./pages/Discover";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import Orders from "./pages/Orders";

function App() {
  // ✅ Added state to track orders
  const [orders, setOrders] = useState([]);

  // ✅ Function to add an item to orders
  const addToOrders = (item) => {
    setOrders([...orders, { ...item, id: Date.now(), status: "Preparing" }]);
  };

  // ✅ Function to cancel/remove an order
  const cancelOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Navbar always visible */}
        <Navbar ordersCount={orders.length} />

        {/* Page Content */}
        <main className="flex-1 container mx-auto p-4">
          <Routes>
  {/* Pass addToOrders to Home page */}
  <Route path="/" element={<Home addToOrders={addToOrders} />} />
  <Route path="/recipe/:id" element={<RecipeDetail />} />
  <Route path="/discover" element={<Discover />} />
  <Route path="/about" element={<AboutPage />} />

  {/* Pass orders, cancelOrder, and setOrders to Orders page */}
  <Route
    path="/orders"
    element={
      <Orders
        orders={orders}
        cancelOrder={cancelOrder}
        setOrders={setOrders} // ✅ This is the new addition
      />
    }
  />
</Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

// src/pages/Orders.jsx
import React from "react";

const Orders = ({ orders, cancelOrder }) => {
  // ✅ Calculate total price
  const total = orders.reduce((sum, order) => sum + order.price, 0);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-orange-600">My Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-600">You have no orders yet.</p>
      ) : (
        <>
          {/* ✅ Orders Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {orders.map((order, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center hover:shadow-xl transition"
              >
                <img
                  src={order.image}
                  alt={order.name}
                  className="w-40 h-40 object-cover rounded-lg mb-3"
                />
                <h3 className="text-lg font-semibold">{order.name}</h3>
                <p className="text-gray-600 mb-2">${order.price.toFixed(2)}</p>
                {/* Cancel order button */}
                <button
                  onClick={() => cancelOrder(order.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow transition"
                >
                  Cancel
                </button>
              </div>
            ))}
          </div>

          {/* ✅ Total Order Section (closer to grid) */}
          <div className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center">
            <h3 className="text-lg font-bold">Total:</h3>
            <p className="text-xl text-green-600 font-semibold">
              ${total.toFixed(2)}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;

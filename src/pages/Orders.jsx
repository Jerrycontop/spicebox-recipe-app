// src/pages/Orders.jsx
import React, { useEffect } from "react";

const Orders = ({ orders, cancelOrder, setOrders }) => {
  useEffect(() => {
    const timers = [];

    orders.forEach((order) => {
      // Skip orders that are already delivered
      if (order.status !== "Preparing") return;

      // Change to "On the way" after 5 seconds
      const onTheWayTimer = setTimeout(() => {
        setOrders((prev) =>
          prev.map((o) =>
            o.id === order.id ? { ...o, status: "On the way" } : o
          )
        );
      }, 5000);

      // Change to "Delivered" after 10 seconds
      const deliveredTimer = setTimeout(() => {
        setOrders((prev) =>
          prev.map((o) =>
            o.id === order.id ? { ...o, status: "Delivered" } : o
          )
        );
      }, 10000);

      timers.push(onTheWayTimer, deliveredTimer);
    });

    // Cleanup timers when component unmounts or orders change
    return () => timers.forEach((t) => clearTimeout(timers));
  }, [orders, setOrders]);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Your Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-600">You have no orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex items-center justify-between bg-white shadow-md rounded-xl p-4"
            >
              {/* Order Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={order.image}
                  alt={order.name}
                  className="w-20 h-20 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold">{order.name}</h3>
                  <p className="text-gray-600">${order.price.toFixed(2)}</p>
                  <p
                    className={`text-sm font-medium ${
                      order.status === "Delivered"
                        ? "text-green-600"
                        : order.status === "On the way"
                        ? "text-blue-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {order.status}
                  </p>
                </div>
              </div>

              {/* Action */}
              <button
                onClick={() => cancelOrder(order.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow"
              >
                Cancel
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;

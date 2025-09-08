// src/pages/Orders.jsx
import React, { useEffect } from "react";

const Orders = ({ orders, cancelOrder, setOrders }) => {
  useEffect(() => {
    const timers = [];

    orders.forEach((order) => {
      if (order.status !== "Preparing") return;

      const onTheWayTimer = setTimeout(() => {
        setOrders((prev) =>
          prev.map((o) =>
            o.id === order.id ? { ...o, status: "On the way" } : o
          )
        );
      }, 5000);

      const deliveredTimer = setTimeout(() => {
        setOrders((prev) =>
          prev.map((o) =>
            o.id === order.id ? { ...o, status: "Delivered" } : o
          )
        );
      }, 10000);

      timers.push(onTheWayTimer, deliveredTimer);
    });

    return () => timers.forEach((t) => clearTimeout(timers));
  }, [orders, setOrders]);

  // Calculate total price
  const totalPrice = orders.reduce((sum, order) => sum + order.price, 0);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Your Orders</h2>

      {orders.length === 0 ? (
        <p className="text-gray-600">You have no orders yet.</p>
      ) : (
        <>
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition"
              >
                {/* Order Info */}
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
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
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow transition"
                >
                  Cancel
                </button>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="mt-6 text-right text-xl font-bold">
            Total: ${totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;

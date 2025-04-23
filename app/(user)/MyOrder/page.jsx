import React from 'react';

const page = () => {
  const orders = [
    {
      id: 'ORD123456',
      date: '2025-04-18',
      status: 'Delivered',
      total: 650,
      items: [
        { name: 'Tomatoes', quantity: 2, price: 60 },
        { name: 'Potatoes', quantity: 1, price: 40 },
        { name: 'Milk (1L)', quantity: 2, price: 100 },
      ],
    },
    {
      id: 'ORD123457',
      date: '2025-04-15',
      status: 'Out for Delivery',
      total: 520,
      items: [
        { name: 'Eggs (12 pcs)', quantity: 1, price: 90 },
        { name: 'Bread', quantity: 2, price: 50 },
        { name: 'Butter', quantity: 1, price: 120 },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-6">My Orders</h1>

        {orders.length === 0 ? (
          <p className="text-center text-gray-500">You have no orders yet.</p>
        ) : (
          orders.map((order, index) => (
            <div
              key={index}
              className="border-b border-gray-200 py-4 mb-4"
            >
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h2 className="font-semibold text-gray-800">Order ID: {order.id}</h2>
                  <p className="text-sm text-gray-500">Date: {order.date}</p>
                </div>
                <div className="text-sm">
                  <span
                    className={`px-2 py-1 rounded-full text-white text-xs ${
                      order.status === 'Delivered'
                        ? 'bg-green-600'
                        : 'bg-yellow-500'
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              <div className="space-y-2 ml-2">
                {order.items.map((item, i) => (
                  <div key={i} className="flex justify-between text-sm text-gray-700">
                    <span>{item.name} x {item.quantity}</span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-3 font-semibold text-gray-800">
                <span>Total:</span>
                <span>₹{order.total}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default page;

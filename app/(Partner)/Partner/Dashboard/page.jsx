import React from "react";

const PartnerDashboard = () => {
  const stats = [
    { label: "Total Orders", value: 128, color: "bg-blue-500" },
    { label: "Total Sales", value: "$2,450", color: "bg-green-500" },
    { label: "Products", value: 34, color: "bg-yellow-500" },
    { label: "Earnings", value: "$1,820", color: "bg-purple-500" },
  ];

  const recentOrders = [
    { id: "ORD123", product: "Organic Bananas", status: "Delivered", amount: "$14.90" },
    { id: "ORD124", product: "Fresh Milk", status: "Pending", amount: "$7.50" },
    { id: "ORD125", product: "Brown Bread", status: "Shipped", amount: "$3.20" },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, Partner 👋</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`${stat.color} text-white rounded-xl p-4 shadow`}
          >
            <p className="text-sm">{stat.label}</p>
            <h2 className="text-2xl font-semibold">{stat.value}</h2>
          </div>
        ))}
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Orders</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-2">Order ID</th>
              <th>Product</th>
              <th>Status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map((order) => (
              <tr key={order.id} className="border-b hover:bg-gray-50">
                <td className="py-2">{order.id}</td>
                <td>{order.product}</td>
                <td>{order.status}</td>
                <td>{order.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Best Selling (Optional Section) */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Best Selling Products</h2>
        <ul className="space-y-2 text-gray-700">
          <li>🥇 Organic Bananas - 102 sold</li>
          <li>🥈 Fresh Milk - 78 sold</li>
          <li>🥉 Brown Bread - 59 sold</li>
        </ul>
      </div>
    </div>
  );
};

export default PartnerDashboard;

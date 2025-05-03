"use client";
import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PartnerEarnings = () => {
  const totalEarnings = 1820.5;

  const payouts = [
    { id: "P001", date: "2025-04-28", amount: "$500", status: "Completed" },
    { id: "P002", date: "2025-04-15", amount: "$700", status: "Completed" },
    { id: "P003", date: "2025-04-01", amount: "$620.50", status: "Pending" },
  ];

  const monthlyEarnings = [
    { month: "Jan", earnings: 400 },
    { month: "Feb", earnings: 650 },
    { month: "Mar", earnings: 720 },
    { month: "Apr", earnings: 820 },
    { month: "May", earnings: 500 },
    { month: "Jun", earnings: 900 },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Earnings Overview</h1>

      {/* Total Earnings */}
      <div className="bg-green-100 border-l-4 border-green-600 text-green-800 p-4 rounded-lg mb-8 shadow">
        <p className="text-lg">Total Earnings</p>
        <h2 className="text-3xl font-bold">${totalEarnings.toFixed(2)}</h2>
      </div>

      {/* Payout History */}
      <div className="bg-white rounded-lg shadow p-6 mb-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Payout History</h2>
        <table className="w-full text-left">
          <thead className="text-gray-600 border-b">
            <tr>
              <th className="py-2">Payout ID</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payouts.map((payout) => (
              <tr key={payout.id} className="border-b hover:bg-gray-50">
                <td className="py-2">{payout.id}</td>
                <td>{payout.date}</td>
                <td>{payout.amount}</td>
                <td>
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium ${
                      payout.status === "Completed"
                        ? "bg-green-200 text-green-800"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {payout.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Monthly Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Monthly Earnings Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyEarnings} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="earnings" stroke="#10B981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PartnerEarnings;

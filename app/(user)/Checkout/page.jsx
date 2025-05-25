"use client";
import React, { useState } from "react";

const page = () => {
  // Example cart data — replace with real cart state
  const cartItems = [
    { id: 1, name: "Organic Bananas", price: 1.49, quantity: 2 },
    { id: 2, name: "Almond Milk", price: 3.99, quantity: 1 },
  ];

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
    paymentMethod: "cod",
  });

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    console.log("Order Placed", formData);
    alert("Order placed successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Billing Form */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Billing & Shipping</h2>
          <form onSubmit={handlePlaceOrder} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              required
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="text"
              name="address"
              placeholder="Street Address"
              required
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              required
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="text"
              name="zip"
              placeholder="ZIP Code"
              required
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />

            {/* Payment */}
            <div>
              <label className="block mb-1 text-gray-700 font-medium">Payment Method</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full border px-4 py-2 rounded"
              >
                <option value="cod">Cash on Delivery</option>
                <option value="card">Credit/Debit Card</option>
                <option value="upi">UPI</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Cart Summary */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Order Summary</h2>
          <ul className="space-y-3">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between text-gray-700">
                <span>
                  {item.name} x {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <hr className="my-4" />

          <div className="flex justify-between text-lg font-semibold text-gray-800">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
"use client";
import React, { useState } from "react";

const page = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Fresh Apples",
      price: 120,
      quantity: 2,
      image:
        "https://www.jiomart.com/images/product/original/590001723/apple-royal-gala-4-pcs-approx-500-g-700-g-product-images-o590001723-p590001723-0-202409061145.jpg?im=Resize=(360,360)",
    },
    {
      id: 2,
      name: "Organic Bananas",
      price: 60,
      quantity: 1,
      image:
        "https://www.jiomart.com/images/product/original/590008622/banana-mrl-pack-5-pcs-approx-600-g-700-g-product-images-o590008622-p590804206-0-202411141931.jpg?im=Resize=(360,360)",
    },
  ]);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);

  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05;
  const total = subtotal + tax - discount;

  const applyCoupon = () => {
    if (coupon === "SAVE50") {
      setDiscount(50);
    } else {
      alert("Invalid coupon");
      setDiscount(0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white flex p-4 rounded-lg shadow-md items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-500">₹{item.price} each</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    -
                  </button>
                  <span className="mx-3">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-lg font-semibold ml-4">
                ₹{item.price * item.quantity}
              </div>
            </div>
          ))}
        </div>

        {/* Bill Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Bill Details</h2>
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (5%):</span>
              <span>₹{tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Discount:</span>
              <span>-₹{discount.toFixed(2)}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>

          {/* Coupon Code */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="w-full border px-3 py-2 rounded mb-2"
            />
            <button
              onClick={applyCoupon}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Apply Coupon
            </button>
          </div>

          <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;

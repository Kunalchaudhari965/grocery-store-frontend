"use client";
import React, { useState } from "react";
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = {
    id: 101,
    name: "Organic Bananas",
    price: 1.49,
    image: "/images/banana.jpg",
    rating: 4.5,
    description:
      "Fresh organic bananas straight from the farm. Perfect for smoothies, baking, and healthy snacking.",
  };

  const handleQuantityChange = (value) => {
    if (value < 1) return;
    setQuantity(value);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image */}
        <div className="w-full h-80 relative">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <div className="flex items-center mt-2 space-x-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-yellow-400 ${
                  i < Math.floor(product.rating) ? "" : "opacity-30"
                }`}
              />
            ))}
            <span className="text-sm text-gray-500">
              ({product.rating.toFixed(1)})
            </span>
          </div>
          <p className="text-2xl text-green-600 font-semibold mt-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="mt-4 text-gray-600">{product.description}</p>

          {/* Quantity */}
          <div className="mt-6 flex items-center space-x-3">
            <label className="text-gray-700 font-medium">Quantity:</label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
              className="w-20 px-3 py-2 border rounded-md"
              min="1"
            />
          </div>

          {/* Buttons */}
          <div className="mt-6 flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className="text-red-500 hover:text-red-600 transition text-2xl"
              title="Add to Wishlist"
            >
              {isWishlisted ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

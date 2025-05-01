"use client";
import React, { useState } from "react";
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";

// Dummy related products
const relatedProducts = [
  {
    id: 102,
    name: "Fresh Strawberries",
    price: 2.99,
    image: "/images/strawberry.jpg",
  },
  {
    id: 103,
    name: "Organic Apples",
    price: 3.49,
    image: "/images/apple.jpg",
  },
];

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = {
    id: 101,
    name: "Organic Bananas",
    price: 1.49,
    image: "https://media.istockphoto.com/id/172876004/photo/banana-wallpaper.webp?a=1&b=1&s=612x612&w=0&k=20&c=gQaw0NMyA3RerOBV-okLq-wxqnI5YQLgvqSty0oeetY=",
    rating: 4.5,
    description:
      "Fresh organic bananas straight from the farm. Perfect for smoothies, baking, and healthy snacking.",
    reviews: [
      {
        id: 1,
        user: "Alice",
        rating: 5,
        comment: "Super fresh and delicious!",
      },
      {
        id: 2,
        user: "Bob",
        rating: 4,
        comment: "Great quality, will buy again.",
      },
    ],
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
              onChange={(e) =>
                handleQuantityChange(parseInt(e.target.value))
              }
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

      {/* Product Reviews */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Customer Reviews
        </h2>
        {product.reviews.map((review) => (
          <div
            key={review.id}
            className="border-b py-4 border-gray-200 text-gray-700"
          >
            <p className="font-medium">{review.user}</p>
            <div className="flex items-center text-yellow-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < review.rating ? "" : "opacity-30"}
                />
              ))}
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>

      {/* Related Products */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          You Might Also Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded-lg hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded "
              />
              <h3 className="mt-2 font-semibold text-lg">{item.name}</h3>
              <p className="text-green-600 font-medium mt-1">
                ${item.price.toFixed(2)}
              </p>
              <button className="mt-2 bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 text-sm">
                View Product
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

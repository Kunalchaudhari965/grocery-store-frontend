"use client";
import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Fresh Apples",
    price: 2.99,
    rating: 4.5,
    image:
      "https://www.jiomart.com/images/product/original/590001721/apple-red-delicious-4-pcs-approx-550-g-700-g-product-images-o590001721-p590001721-0-202408070949.jpg?im=Resize=(360,360)",
  },
  {
    id: 2,
    name: "Organic Bananas",
    price: 1.49,
    rating: 4,
    image: "/images/banana.jpg",
  },
  {
    id: 3,
    name: "Whole Milk",
    price: 3.49,
    rating: 3.5,
    image: "/images/milk.jpg",
  },
  {
    id: 4,
    name: "Brown Bread",
    price: 2.29,
    rating: 4,
    image: "/images/bread.jpg",
  },
];

const ProductCard = () => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (productId) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden relative"
          >
            {/* Wishlist Button - Top Right */}
            <button
              onClick={() => toggleWishlist(product.id)}
              className="absolute top-3 right-3 z-10 text-red-500 text-xl hover:scale-110 transition"
              title="Add to Wishlist"
            >
              {wishlist.includes(product.id) ? <FaHeart /> : <FaRegHeart />}
            </button>

            {/* Product Image */}
            <div className="relative w-full h-48 overflow-hidden group rounded-t-2xl">
              {product.image.startsWith("http") ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
                />
              ) : (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              )}
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                {product.name}
              </h3>
              <p className="text-green-600 font-bold mt-1">
                ${product.price.toFixed(2)}
              </p>

              {/* Rating */}
              <div className="flex items-center mt-2 text-yellow-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"
                    }
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating.toFixed(1)}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 flex items-center justify-between gap-3">
                <Link href={`/ProductDetails`} >
                  <button
                    className="p-2 w-full bg-white text-blue-600 border border-blue-600 rounded-md py-2 text-sm font-medium hover:bg-blue-50 transition duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  >
                    View Details
                  </button>
                </Link>

                <Link href="/Cart" passHref>
                  <button
                    className="p-2 w-full bg-blue-600 text-white rounded-md py-2 text-sm font-medium hover:bg-blue-700 transition duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Add to Cart
                  </button>
                </Link>
              </div>



            </div>
          </div>
        ))}


      </div>
    </div>
  );
};

export default ProductCard;

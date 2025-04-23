// pages/User/Wishlist.tsx
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  // Sample data — replace with real data or fetch from backend
  const wishlistItems = [
    {
      id: 1,
      name: 'Fresh Apples',
      image: '/images/apple.jpg',
      price: 2.99,
    },
    {
      id: 2,
      name: 'Organic Bananas',
      image: '/images/banana.jpg',
      price: 1.49,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Your Grocery Wishlist
        </h1>

        {wishlistItems.length === 0 ? (
          <p className="text-center text-gray-500">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <p className="text-green-600 font-bold mt-2">${item.price.toFixed(2)}</p>
                </div>
                <div className="p-4 border-t flex justify-between items-center">
                  <button className="text-sm text-red-500 hover:underline">
                    Remove
                  </button>
                  <button className="text-sm bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link
            href="/store"
            className="text-blue-600 hover:underline text-sm"
          >
            &larr; Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;

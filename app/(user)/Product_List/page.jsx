"use client"
import React, { useState } from 'react';

const page = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Fresh Apples',
      price: 120,
      image: 'https://www.jiomart.com/images/product/original/590001721/apple-red-delicious-4-pcs-approx-550-g-700-g-product-images-o590001721-p590001721-0-202408070949.jpg?im=Resize=(360,360)',
    },
    {
      id: 2,
      name: 'Bananas',
      price: 60,
      image: "https://media.istockphoto.com/id/172876004/photo/banana-wallpaper.webp?a=1&b=1&s=612x612&w=0&k=20&c=gQaw0NMyA3RerOBV-okLq-wxqnI5YQLgvqSty0oeetY=",
    },
    {
      id: 3,
      name: 'Milk (1L)',
      price: 50,
      image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=360/da/cms-assets/cms/product/94c99c0b-0cb1-4c07-b91d-586c5300945b.jpg?ts=1736856488',
    },
    {
      id: 4,
      name: 'Eggs (12 pcs)',
      price: 90,
      image: '/images/eggs.jpg',
    },
    {
      id: 5,
      name: 'Bread',
      price: 40,
      image: '/images/bread.jpg',
    },
  ]);

  const handleAddToCart = (product) => {
    // This would go to Redux, Context API, or backend later
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-8">Our Products</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-lg"
              />
              <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
              <p className="text-gray-600">₹{product.price}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;

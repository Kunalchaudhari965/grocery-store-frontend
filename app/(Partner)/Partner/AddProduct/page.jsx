"use client";
import React, { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    brand: "",
    price: "",
    category: "",
    image: "",
    description: "",
    stock: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Submit to backend API
    console.log("Product Submitted", product);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Add New Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Name */}
          <div>
            <label className="block text-gray-700">Product Name</label>
            <input
              type="text"
              name="name"
              required
              value={product.name}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Fresh Apples"
            />
          </div>

          {/* Brand Name */}
          <div>
            <label className="block text-gray-700">Brand Name</label>
            <input
              type="text"
              name="brand"
              required
              value={product.brand}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Organic India"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-700">Price ($)</label>
            <input
              type="number"
              name="price"
              required
              step="0.01"
              value={product.price}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 3.99"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              required
              value={product.category}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Fruits, Vegetables, Dairy"
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block text-gray-700">Stock Quantity</label>
            <input
              type="number"
              name="stock"
              required
              value={product.stock}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 100"
              min="0"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-gray-700">Image URL</label>
            <input
              type="text"
              name="image"
              required
              value={product.image}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              required
              value={product.description}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter product details..."
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

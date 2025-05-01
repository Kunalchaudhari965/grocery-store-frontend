import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer_User() {
  return (
    <footer className="bg-green-800 text-white mt-16">
      <div className="max-w-6xl mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Store Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">GroceryHub</h2>
          <p className="text-sm text-gray-300">
            Your go-to online grocery store for farm-fresh produce, organic
            items, and everyday essentials.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Shop</a></li>
            <li><a href="#" className="hover:text-white">Cart</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="text-sm text-gray-300">Email: support@freshmart.com</p>
          <p className="text-sm text-gray-300">Phone: +1 (800) 123-4567</p>
          <p className="text-sm text-gray-300">Location: 123 Farm Rd, Organic City</p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-3 mt-2">
            <a href="#" className="hover:text-blue-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-500">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-green-900 text-center text-sm text-gray-300 py-4">
        © {new Date().getFullYear()} GroceryHub. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer_User;

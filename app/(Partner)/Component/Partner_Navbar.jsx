"use client"
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Partner_Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", href: "/Partner/Dashboard" },
    { name: "Products", href: "/Partner/Products" },
    { name: "Orders", href: "/partner/orders" },
    { name: "Earnings", href: "/Partner/Earnings" },
    { name: "Analytics", href: "/partner/analytics" },
    { name: "Store Profile", href: "/partner/store-profile" },
    { name: "Logout", href: "/logout" },
  ];

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold tracking-wide">
            <a href="/">Grocery<span className="text-yellow-300">Hub</span></a> Partner
          </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-yellow-300 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-green-800 px-4 pb-4 space-y-3 text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="block py-2 border-b border-green-600 hover:text-yellow-300 transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Partner_Navbar;

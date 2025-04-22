import { ShoppingCart, User, Search } from "lucide-react";

import React from 'react'

function Navbar_User() {
  return (
    <div>
       <nav className="bg-green-600 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide">
          <a href="/">Grocery<span className="text-yellow-300">Hub</span></a>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="/" className="hover:text-yellow-300">Home</a>
          <a href="/shop" className="hover:text-yellow-300">Shop</a>
          <a href="/deals" className="hover:text-yellow-300">Deals</a>
          <a href="/contact" className="hover:text-yellow-300">Contact</a>
        </div>

        {/* Search + Icons */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search groceries..."
              className="rounded-full px-4 py-1 pl-10 text-sm text-black focus:outline-none"
            />
            <Search className="absolute left-2 top-1.5 w-4 h-4 text-gray-500" />
          </div>

          {/* Cart */}
          <a href="/cart" className="relative">
            <ShoppingCart className="w-5 h-5 hover:text-yellow-300" />
            <span className="absolute -top-2 -right-2 bg-yellow-300 text-green-700 text-xs font-bold rounded-full px-1">2</span>
          </a>

          {/* User */}
          <a href="/account">
            <User className="w-5 h-5 hover:text-yellow-300" />
          </a>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar_User

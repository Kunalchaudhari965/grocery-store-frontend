"use client"
import { ShoppingCart, User, Search } from "lucide-react";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Navbar_User() {
  const [user, setUser] = useState(null);
  
  //----------------*** Fetch user ***----------------
  useEffect(() => {
    
    const fetchUser = async () => {
      try {
        const res = await axios.get('http://localhost:8080/user/user', { withCredentials: true });
        setUser(res.data); // Logged in
      } catch (error) {
        setUser(null); // Not logged in
      } 
    };

    fetchUser();
  }, []);
//----------------*** Logout ***----------------
  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8080/user/logout', {}, { withCredentials: true });
      setUser(null); // Clear user state
      alert("Logged out successfully!");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  //--------------------------------------------------------------------------

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
                className="rounded-full px-4 py-1 pl-10 text-sm text-white border border-white outline-2 outline-white"

              />
              <Search className="absolute left-2 top-1.5 w-4 h-4 text-white" />
            </div>

            {/* Conditional Rendering */}
            
              <>
                {user ? (
                  <>
                    {/* Cart Icon */}
                    <a href="/Cart" className="relative">
                      <ShoppingCart className="w-5 h-5 hover:text-yellow-300" />
                      <span className="absolute -top-2 -right-2 bg-yellow-300 text-green-700 text-xs font-bold rounded-full px-1">
                        2
                      </span>
                    </a>

                    {/* User Dropdown */}
                    <div className="relative group">
                      <button className="flex items-center space-x-1">
                        <User className="w-5 h-5 hover:text-yellow-300" />
                        <span className="hidden md:inline text-sm">{user?.username}</span>
                      </button>
                      {/* Dropdown Menu */}
                      <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                        <a href="/account" className="block px-4 py-2 text-sm hover:bg-gray-100">Account</a>
                        <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                          Logout
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* If not logged in */}
                    <a href="/Login" className="bg-yellow-300 text-green-700 font-semibold px-3 py-1 rounded-full text-sm hover:bg-yellow-400">
                      Login
                    </a>
                    <a href="/SignIn" className="bg-white text-green-700 font-semibold px-3 py-1 rounded-full text-sm hover:bg-gray-100">
                      Sign Up
                    </a>
                  </>
                )}
              </>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar_User;

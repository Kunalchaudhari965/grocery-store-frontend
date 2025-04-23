import Link from 'next/link';
import React from 'react';

const SignUpPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          User Sign Up
        </h2>
        <p className="text-gray-600 text-center">Create your User account</p>

        <form onSubmit={""} className="mt-6">
          {/* Username */}
          <div>
            <label className="block text-gray-700">Username</label>
            <input
              name="username"
              type="text"
              onChange={""}
              className="text-gray-700 w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Email */}
          <div className="mt-4">
            <label className="block text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              onChange={""}
              className="text-gray-700 w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Mobile Number */}
          <div className="mt-4">
            <label className="block text-gray-700">Mobile Number</label>
            <input
              name="mobile"
              type="tel"
              onChange={""}
              className="text-gray-700 w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your mobile number"
              required
            />
          </div>

          {/* Password */}
          <div className="mt-4">
            <label className="block text-gray-700">Create Password</label>
            <input
              name="password"
              type="password"
              onChange={""}
              className="text-gray-700 w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Create your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Login Redirect */}
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <Link
            href="/User/Login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;

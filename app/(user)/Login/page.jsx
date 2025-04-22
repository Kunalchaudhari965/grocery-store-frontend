import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          User Login
        </h2>
        <p className="text-gray-600 text-center">Access your User account</p>

       

        <form onSubmit={""} className="mt-6">
          {/* Email */}
          <div>
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

          {/* Password */}
          <div className="mt-4">
            <label className="block text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              onChange={""}
              className="text-gray-700 w-full px-4 py-2 mt-1 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Forgot Password */}
          <div className="mt-4 flex justify-between items-center">
            <Link
              href="/User/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Sign Up Redirect */}
        <p className="mt-4 text-center text-gray-600">
          Don&apos;t have a User account?{" "}
          <Link
            href="/User/Signup_P"
            className="text-blue-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
    </div>
  )
}

export default page

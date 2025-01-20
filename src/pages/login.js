import React from "react";
import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      
      <div className="bg-white shadow-lg rounded p-6 w-96">
        <h2 className="text-2xl font-bold mb-6">Log in to My Account</h2>
        <form>
          <div className="mb-4">
            <label className="block text-amexblue mb-2" htmlFor="userID">
              User ID
            </label>
            <input
              id="userID"
              type="text"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-amexblue mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-amexblue mb-2" htmlFor="accountType">
              Account Type
            </label>
            <select
              id="accountType"
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Card - My Account</option>
              <option>Corporate Account</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-900 text-white p-2 rounded hover:bg-blue-800"
          >
            Log In
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Forgot your User ID or Password?{" "}
          <a href="/" className="text-blue-600">
            Click here
          </a>.
        </p>
      </div>
    </div>
    </>
  );
}

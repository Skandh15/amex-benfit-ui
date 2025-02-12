import React, { useState } from "react";
import Navbar from "../components/Navbar";

export default function MyAccount() {
  const [userData, setUserData] = useState({
    balance: "₹ 82,864.64",
    credit: "₹ 4,11,135.00",
    rewards: "1,676",
    isLoggedIn: true, // Assume user is logged in
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Pass state as a prop */}
      <Navbar userData={userData} />

      {/* Main Dashboard */}
      <div className="max-w-5xl mx-auto py-6 px-6">
        {/* Card Section */}
        <div className="mt-4 bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-4">
          {/* Credit Card Image */}
          <img
            src="/image.png"
            alt="Credit Card"
            className="h-12 w-20 object-cover"
          />
          
          <div className="flex-1">
            <h1 className="text-3xl font-semibold text-gray-800">Cash Magnet® Card</h1>
            <p className="text-gray-600 text-sm">•••• 12005</p>
          </div>
        </div>
        <hr className="border-gray-300 my-2" />
        {/* Card Summary */}
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            {/* Left Section */}
            <div>
              <h3 className="text-gray-600 font-medium flex items-center">
                Statement Balance <span className="ml-1 text-gray-400 text-sm">ⓘ</span>
              </h3>
              <p className="text-3xl font-semibold mt-2">₹ 0.00</p>
              <p className="text-green-600 mt-2">Payment not required at this time</p>

              <button className="mt-4 w-52 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                Make a Payment
              </button>
            </div>

            {/* Right Section */}
            <div className="mt-6 md:mt-0">
              <h3 className="text-gray-600 font-medium flex items-center">
                Total Balance <span className="ml-1 text-gray-400 text-sm">ⓘ</span>
              </h3>
              <p className="text-2xl font-semibold mt-1">{userData.balance}</p>

              <h3 className="text-gray-600 font-medium mt-4 flex items-center">
                Credit Limit <span className="ml-1 text-gray-400 text-sm">ⓘ</span>
              </h3>
              <p className="text-xl font-medium text-gray-700 mt-1">{userData.credit}</p>

              <a href="#" className="text-blue-600 text-sm mt-2 inline-block">
                Show Balance & Credit Details
              </a>
            </div>
          </div>
        </div>

        {/* Recent Transactions & Rewards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Recent Transactions */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-gray-700 font-medium">Recent Transactions</h3>
            <p className="text-gray-500 mt-2">No recent transactions</p>
            <a href="#" className="text-blue-600 text-sm mt-3 inline-block">
              View Transactions
            </a>
          </div>

          {/* Rewards */}
          <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-green-600">
            <h3 className="text-gray-700 font-medium">Reward Points</h3>
            <p className="text-3xl font-semibold mt-2">{userData.rewards}</p>
            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              Explore Rewards
            </button>
          </div>
        </div>

        {/* Refer & Useful Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Refer Friends */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-gray-700 font-medium">Refer Friends, Get Rewarded</h3>
            <p className="text-gray-600 mt-2">
              ₹100 Statement Credits for each eligible referral.
            </p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Refer Now
            </button>
          </div>

          {/* Useful Links */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-gray-700 font-medium">Useful Links</h3>
            <ul className="mt-3 space-y-2 text-blue-600 text-sm">
              <li><a href="#">Your FICO® Score and Insights</a></li>
              <li><a href="#">Recommended Cards For You</a></li>
              <li><a href="#">Dispute a Payment</a></li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}

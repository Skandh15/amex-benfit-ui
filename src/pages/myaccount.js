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
              <h1 className="text-3xl font-semibold text-gray-800">
                Cash Magnet® Card
              </h1>
              <p className="text-gray-600 text-sm">•••• 12005</p>
            </div>
          </div>
          <hr className="border-gray-300 my-2" />
          {/* Card Summary */}
          {/* Card Summary - Single Box with Three Sections */}
          <div className="mt-4 bg-white rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Section 1: Statement Balance */}
              <div className="flex flex-col">
                <h3 className="text-gray-600 font-medium flex items-center">
                  Statement Balance{" "}
                  <span className="ml-1 text-gray-400 text-sm">ⓘ</span>
                </h3>
                <p className="text-3xl font-semibold mt-2">₹ 0.00</p>
                <div className="mt-auto">
                  <button className="w-full bg-blue-100 text-blue-700 py-2 rounded-lg hover:bg-blue-200">
                    Statement Details
                  </button>
                </div>
              </div>

              {/* Section 2: Payment Status */}
              <div className="flex flex-col items-center">
                <p className="text-green-600 font-medium">
                  Payment not required at this time
                </p>
                <div className="h-12 w-12 mt-2">
                  <img
                    src="/green-tick.png"
                    alt="Payment Verified"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="mt-auto w-full">
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    Make a Payment
                  </button>
                </div>
              </div>

              {/* Section 3: Total Balance */}
              <div className="flex flex-col">
                <h3 className="text-gray-600 font-medium flex items-center">
                  Total Balance{" "}
                  <span className="ml-1 text-gray-400 text-sm">ⓘ</span>
                </h3>
                <p className="text-2xl font-semibold mt-1">
                  {userData.balance}
                </p>
                <div className="mt-auto">
                  <button className="w-full bg-blue-100 text-blue-700 py-2 rounded-lg hover:bg-blue-200">
                    View Balance Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Transactions & Rewards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
{/* Recent Transactions (Wider Section) */}
<div className="bg-white shadow-md rounded-lg p-6 relative md:col-span-2">
  <div className="flex justify-between items-center">
    <h3 className="text-gray-700 font-medium">
      Recent Transactions{" "}
      <span className="text-gray-500 text-sm">(Feb 12, 2025)</span>
    </h3>
    <a href="#" className="text-blue-600 text-sm hover:underline">
      View All
    </a>
  </div>

  {/* "Pace out your payments" - Wrapped in a padded div */}
  <div className="px-4 mt-4">
    <div className="bg-gray-200 text-gray-700 text-center p-3 rounded-lg">
      Pace out your payments
    </div>
  </div>

  {/* Border spanning full width */}
  <div className="-mx-6 border-t border-b border-gray-300 py-3 mt-4">
    <p className="text-gray-500 text-center">No recent transactions</p>
  </div>

  <div className="mt-2 text-center">
    <a href="#" className="text-blue-600 text-sm hover:underline">
      PDF Billing Statements
    </a>
  </div>
</div>


          {/* Rewards (Smaller Section) */}
          <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-green-600 md:col-span-1">
            <h3 className="text-gray-700 font-medium">Reward Points</h3>
            <p className="text-3xl font-semibold mt-2">{userData.rewards}</p>
            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
              Explore Rewards
            </button>
          </div>
        </div>

        {/* Refer & Useful Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Refer Friends */}
          <div className="bg-white shadow-md rounded-lg p-6 md:col-span-2">
            <h3 className="text-gray-700 font-medium">
              Refer Friends, Get Rewarded
            </h3>
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
              <li>
                <a href="#">Your FICO® Score and Insights</a>
              </li>
              <li>
                <a href="#">Recommended Cards For You</a>
              </li>
              <li>
                <a href="#">Dispute a Payment</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import Navbar from '../components/Navbar';

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
      <div className="max-w-6xl mx-auto py-6 px-4">
        <h1 className="text-2xl font-semibold text-gray-800">Home</h1>
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Balance & Credit */}
          <div className="bg-white p-6 rounded shadow-md">
            <h3 className="text-gray-700 font-medium flex items-center">
              Remaining Statement Balance 
              <span className="ml-1 text-gray-400 text-sm">ⓘ</span>
            </h3>
            <p className="text-2xl font-semibold mt-2">₹ 0.00</p>

            <h3 className="text-gray-700 font-medium mt-4 flex items-center">
              Available Credit 
              <span className="ml-1 text-gray-400 text-sm">ⓘ</span>
            </h3>
            <p className="text-xl font-medium text-gray-600 mt-1">{userData.credit}</p>
            <a href="#" className="text-blue-600 text-sm">Check Your Spending Power</a>

            <h3 className="text-gray-700 font-medium mt-4 flex items-center">
              Total Balance 
              <span className="ml-1 text-gray-400 text-sm">ⓘ</span>
            </h3>
            <p className="text-2xl font-semibold mt-1">{userData.balance}</p>

            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Balance & Credit Details
            </button>
          </div>
          {/* Payment Status */}
          <div className="bg-white p-6 rounded shadow-md flex flex-col justify-center items-center">
            <h3 className="text-gray-700 font-medium">Payment not required at this time</h3>
            <div className="mt-4 text-green-600 text-3xl">✔</div>
            
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Make a Payment
            </button>
            <a href="#" className="mt-2 text-blue-600 text-sm">View PDF Statements</a>
          </div>
          {/* Rewards Points */}
          <div className="bg-white p-6 rounded shadow-md border-t-4 border-green-600">
            <h3 className="text-gray-700 font-medium">Membership Rewards® Points</h3>
            <p className="text-3xl font-semibold mt-2">{userData.rewards}</p>

            <button className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Explore Rewards
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

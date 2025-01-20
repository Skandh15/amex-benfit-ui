import React from "react";
import Navbar from '../components/Navbar'; // Reuse Navbar component
import Footer from '../components/Footer'; // Footer component
import LoginForm from '../components/LoginForm'; // Login form component

export default function Login() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
    {/* Navbar */}
    <Navbar />

    {/* Main Section */}
    <div className="flex flex-1 justify-center items-center py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {/* Login Form */}
        <LoginForm />

        {/* Promotional Banner */}
        <div className="flex justify-center items-center">
          <div className="bg-white shadow-md p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">
              Presenting the all-new Amex App
            </h3>
            <p className="text-blue-600 font-bold text-xl">#DoItEasy</p>
            <img
              src="/amex-app-promo.png"
              alt="Amex App Promo"
              className="mt-4 mx-auto h-20"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <Footer />
  </div>
);
}

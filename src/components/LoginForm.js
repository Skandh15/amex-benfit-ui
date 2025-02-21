import React, { useState } from 'react';
import { useRouter } from 'next/router';

export default function LoginForm() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [accountType, setAccountType] = useState('Card - My Account');
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();

    // Validate the login credentials
    if (userId === 'admin' && password === 'password') {
      router.push('/myaccount'); // Redirect to MyAccount page on success
    } else {
      alert('Invalid login credentials!');
    }
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-700">Log In to My Account</h2>

      {/* User ID */}
      <div className="mb-4">
        <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
          User ID
        </label>
        <input
          type="text"
          id="userId"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="relative">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-3 text-gray-500 hover:text-gray-700"
          >
            <i className="fas fa-keyboard"></i>
          </button>
        </div>
      </div>

      {/* Account Type */}
      <div className="mb-4">
        <label htmlFor="accountType" className="block text-sm font-medium text-gray-700">
          Account Type
        </label>
        <select
          id="accountType"
          value={accountType}
          onChange={(e) => setAccountType(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option>Card - My Account</option>
          <option>Corporate Account</option>
        </select>
      </div>

      {/* Remember Me */}
      <div className="flex items-center mb-4">
        <input
          id="rememberMe"
          type="checkbox"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
          Remember Me
        </label>
      </div>

      {/* Log In Button */}
      <button
        onClick={handleLogin}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Log In
      </button>

      {/* Links */}
      <div className="mt-4 text-sm space-y-2">
        <a href="#" className="text-blue-600 hover:underline">
          Forgot your User ID or Password?
        </a>
        <a href="#" className="text-blue-600 hover:underline">
          Register for Online Services
        </a>
        <a href="#" className="text-blue-600 hover:underline">
          View All Cards
        </a>
      </div>
    </div>
  );
}
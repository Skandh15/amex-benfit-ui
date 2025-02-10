import Link from 'next/link';
import { useState } from 'react';

export default function Navbar({ userData = {} }) {
  const [hovered, setHovered] = useState(null);

  return (
    <nav className="bg-white shadow-md px-6 py-3">
      <div className="flex justify-center items-center space-x-8">
        {/* Logo */}
        <div className="text-xl font-semibold text-blue-600">
          <Link legacyBehavior href="/">
            <a>
              <img
                src="/american-express-logo.png"
                alt="American Express"
                className="h-6"
              />
            </a>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          {(userData?.isLoggedIn
            ? [
                { label: 'Home', path: '/home' },
                { label: 'Statements & Activity', path: '/statements' },
                { label: 'Payments', path: '/payments' },
                { label: 'Account Management', path: '/account-management' },
                { label: 'Rewards & Benefits', path: '/rewards' },
              ]
            : [
                { label: 'My Account', path: '/my-account' },
                { label: 'Cards', path: '/cards' },
                { label: 'Travel', path: '/travel' },
                { label: 'Insurance', path: '/insurance' },
                { label: 'Rewards & Benefits', path: '/rewards' },
                { label: 'Business', path: '/business' },
              ]
          ).map((item, index) => (
            <Link key={index} legacyBehavior href={item.path}>
              <a
                className="relative text-gray-700 hover:text-blue-600"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {item.label}
                {hovered === index && (
                  <span className="absolute left-0 right-0 -bottom-1 h-1 bg-gray-400"></span>
                )}
              </a>
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-600">🔍</button>
          <Link legacyBehavior href="/help">
            <a className="text-gray-700 hover:text-blue-600">Help</a>
          </Link>
          {userData?.isLoggedIn ? (
            <button className="text-blue-600">Log Out</button>
          ) : (
            <Link legacyBehavior href="/login">
              <a>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Log In
                </button>
              </a>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

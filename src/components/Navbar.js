import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ userData = {} }) {
  const [hovered, setHovered] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (userData?.isLoggedIn) {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  }, [userData?.isLoggedIn]);

  if (!userData?.isLoggedIn) {
    return (
      <nav className="bg-white shadow-md px-6 py-3">
        <div className="flex justify-center items-center space-x-8">
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
          <div className="flex space-x-6">
            {[
              { label: 'My Account', path: '/myaccount' },
              { label: 'Cards', path: '/cards' },
              { label: 'Travel', path: '/travel' },
              { label: 'Insurance', path: '/insurance' },
              { label: 'Rewards & Benefits', path: '/rewards' },
              { label: 'Business', path: '/business' },
            ].map((item, index) => (
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
          <div className="flex items-center space-x-4">
            <button className="text-gray-600">🔍</button>
            <Link legacyBehavior href="/help">
              <a className="text-gray-700 hover:text-blue-600">Help</a>
            </Link>
            <Link legacyBehavior href="/login">
              <a>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Log In
                </button>
              </a>
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: isTransitioning ? 0.5 : 0 }}
      className="bg-white shadow-md px-6 py-3"
    >
      <div className="flex justify-between items-center border-b border-gray-300 pb-2">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center">
          ☰ Menu
        </button>
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
        <div className="flex items-center space-x-4">
          <button className="text-gray-600">🔍</button>
          <button className="text-blue-600">Log Out</button>
        </div>
      </div>
      <div className="flex items-center bg-white p-3 border-t border-gray-300">
        <img src="/credit-card-icon.png" alt="Card" className="h-10" />
        <div className="ml-3">
          <p className="text-gray-800 font-semibold">Cash Magnet® Card</p>
          <p className="text-gray-600 text-sm flex items-center">•••• 12005 <span className="ml-1 text-lg">⌄</span></p>
        </div>
        <div className="flex-grow border-l border-gray-300 ml-6 pl-6 flex space-x-6">
          {[
            { label: 'Home', path: '/home' },
            { label: 'Statements & Activity', path: '/statements' },
            { label: 'Payments', path: '/payments' },
            { label: 'Account Management', path: '/account-management' },
            { label: 'Rewards & Benefits', path: '/rewards' },
          ].map((item, index) => (
            <Link key={index} legacyBehavior href={item.path}>
              <a className="text-gray-700 hover:text-blue-600 py-1">{item.label}</a>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}

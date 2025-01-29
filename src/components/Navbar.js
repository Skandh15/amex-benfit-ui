import Link from 'next/link';

export default function Navbar({ userData }) {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
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

        {/* Navigation Links - Changes Based on Login State */}
        <div className="flex space-x-6">
          {userData.isLoggedIn ? (
            <>
              <Link legacyBehavior href="/my-account">
                <a className="text-gray-900 font-semibold border-b-2 border-black pb-1">
                  Home
                </a>
              </Link>
              <Link legacyBehavior href="/statements">
                <a className="text-gray-700 hover:text-blue-600">Statements & Activity</a>
              </Link>
              <Link legacyBehavior href="/payments">
                <a className="text-gray-700 hover:text-blue-600">Payments</a>
              </Link>
              <Link legacyBehavior href="/account-management">
                <a className="text-gray-700 hover:text-blue-600">Account Management</a>
              </Link>
              <Link legacyBehavior href="/rewards">
                <a className="text-gray-700 hover:text-blue-600">Rewards & Benefits</a>
              </Link>
            </>
          ) : (
            <>
              <Link legacyBehavior href="/my-account">
                <a className="text-gray-700 hover:underline">My Account</a>
              </Link>
              <Link legacyBehavior href="/cards">
                <a className="text-gray-700 hover:underline">Cards</a>
              </Link>
              <Link legacyBehavior href="/travel">
                <a className="text-gray-700 hover:underline">Travel</a>
              </Link>
            </>
          )}
        </div>

        {/* Right Section - Show Balance & Logout Option */}
        <div className="flex items-center space-x-4">
          {userData.isLoggedIn ? (
            <>
              <button className="text-gray-600">🔍</button>
              <div className="border px-3 py-1 rounded-md flex items-center space-x-1">
                <span className="text-gray-700 text-sm">Balance: {userData.balance}</span>
              </div>
              <button className="text-blue-600">
                Log Out
              </button>
            </>
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

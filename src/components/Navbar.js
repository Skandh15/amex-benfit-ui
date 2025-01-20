import Link from 'next/link';

export default function Navbar() {
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

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link legacyBehavior href="/my-account">
            <a className="text-gray-700 hover:underline hover:underline-offset-4 hover:decoration-gray-400">
              My Account
            </a>
          </Link>
          <Link legacyBehavior href="/cards">
            <a className="text-gray-700 hover:underline hover:underline-offset-4 hover:decoration-gray-400">
              Cards
            </a>
          </Link>
          <Link legacyBehavior href="/travel">
            <a className="text-gray-700 hover:underline hover:underline-offset-4 hover:decoration-gray-400">
              Travel
            </a>
          </Link>
          <Link legacyBehavior href="/insurance">
            <a className="text-gray-700 hover:underline hover:underline-offset-4 hover:decoration-gray-400">
              Insurance
            </a>
          </Link>
          <Link legacyBehavior href="/rewards">
            <a className="text-gray-700 hover:underline hover:underline-offset-4 hover:decoration-gray-400">
              Rewards & Benefits
            </a>
          </Link>
          <Link legacyBehavior href="/business">
            <a className="text-gray-700 hover:underline hover:underline-offset-4 hover:decoration-gray-400">
              Business
            </a>
          </Link>
        </div>

    
        <div>
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
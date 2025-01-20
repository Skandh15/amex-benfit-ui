export default function Footer() {
    return (
      <footer className="bg-white shadow-inner mt-10">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Top Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-4">Top Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  View Personal Cards
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Download the App
                </a>
              </li>
            </ul>
          </div>
  
          {/* Business Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-4">Business Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  View Corporate Cards
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Corporate Travel
                </a>
              </li>
            </ul>
          </div>
  
          {/* Company Information */}
          <div>
            <h4 className="text-sm font-semibold text-gray-700 mb-4">
              Company Information
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Vision and Mission Statement
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Customer Service Committee
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
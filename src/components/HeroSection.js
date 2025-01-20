// components/HeroSection.js

export default function HeroSection() {
    return (
      <div className="bg-blue-100 p-8 mt-6 flex justify-between items-center">
        <div className="max-w-lg">
          <h1 className="text-3xl font-bold text-blue-800">New Year, New way to do Business</h1>
          <p className="text-amexblue mt-4">
            Enjoy the ease of business payments with up to 51 days to interest-free* credit period.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Apply Now
          </button>
          <p className="mt-2 text-xs text-gray-500">*Terms & Conditions apply</p>
        </div>
        <div className="w-1/3">
          <img src="hero-image.jpg" alt="Hero Image" className="rounded-lg shadow-md" />
        </div>
      </div>
    );
  }
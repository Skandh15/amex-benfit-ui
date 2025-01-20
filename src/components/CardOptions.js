// components/CardOptions.js

export default function CardOptions() {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-6">
        <div className="text-center">
          <img src="premium-card-image.jpg" alt="Premium Card" className="mx-auto" />
          <h3 className="text-lg font-semibold mt-2">Premium Cards</h3>
        </div>
        <div className="text-center">
          <img src="rewards-card-image.jpg" alt="Rewards Card" className="mx-auto" />
          <h3 className="text-lg font-semibold mt-2">Rewards Cards</h3>
        </div>
        <div className="text-center">
          <img src="travel-card-image.jpg" alt="Travel Card" className="mx-auto" />
          <h3 className="text-lg font-semibold mt-2">Travel Cards</h3>
        </div>
        <div className="text-center">
          <img src="corporate-card-image.jpg" alt="Corporate Card" className="mx-auto" />
          <h3 className="text-lg font-semibold mt-2">Corporate Cards</h3>
        </div>
      </div>
    );
  }
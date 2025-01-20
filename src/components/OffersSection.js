// components/OffersSection.js

export default function OffersSection() {
    return (
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-center text-blue-800">Latest Offers and Updates from American Express</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          <div className="text-center">
            <img src="offer1-image.jpg" alt="Offer 1" className="mx-auto" />
            <p className="text-sm font-medium mt-2">Explore American Express® Cards</p>
          </div>
          <div className="text-center">
            <img src="offer2-image.jpg" alt="Offer 2" className="mx-auto" />
            <p className="text-sm font-medium mt-2">Choose the Card that suits you best</p>
          </div>
          <div className="text-center">
            <img src="offer3-image.jpg" alt="Offer 3" className="mx-auto" />
            <p className="text-sm font-medium mt-2">Make the most of your points with 500+ redemption options</p>
          </div>
        </div>
      </section>
    );
  }
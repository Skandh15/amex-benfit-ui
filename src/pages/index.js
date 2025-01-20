// pages/index.js
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CardOptions from '../components/CardOptions';
import OffersSection from '../components/OffersSection';

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CardOptions />
      <OffersSection />
    </div>
  );
}
import React from 'react';
import { Search, ShoppingCart, Menu, Heart, User, ChevronDown } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import DeliveryBanner from './components/DeliveryBanner';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <DeliveryBanner />
      </main>
    </div>
  );
}

export default App;
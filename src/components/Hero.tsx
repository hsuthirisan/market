import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Fresh Groceries,<br />
              Delivered to Your Door
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Shop from our wide selection of fresh produce, pantry essentials, and household items.
              Get same-day delivery right to your doorstep.
            </p>
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-colors">
              Start Shopping
            </button>
          </div>
          <div className="relative h-64 lg:h-96">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
              alt="Fresh groceries"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
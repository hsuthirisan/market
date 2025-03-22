import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';
import RegisterModal from './RegisterModal';

const Navbar = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button className="p-2 rounded-md hover:bg-gray-100 lg:hidden">
                <Menu className="h-6 w-6" />
              </button>
              <div className="text-2xl font-bold text-emerald-600 ml-2">FreshMart</div>
            </div>
            
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-emerald-500"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button 
                className="p-2 rounded-full hover:bg-gray-100"
                onClick={() => setIsRegisterOpen(true)}
              >
                <User className="h-6 w-6" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <RegisterModal 
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
      />
    </>
  );
};

export default Navbar;
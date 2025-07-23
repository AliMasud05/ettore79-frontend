import { ChevronDown, Heart } from 'lucide-react';
import React from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div>
      <header className="border-b border-gray-200 px-4 py-3">
        <div className=" container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={1000} height={1000} className="h-auto w-36" />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-orange-500 font-medium">
              Buy
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Rent
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Agents
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Sell
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Mortgages
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Pricing Plan
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Contact
            </a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Heart className="w-5 h-5 text-gray-600" />
            <Button variant="ghost" className="text-gray-700">
              Sign In
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Sign Up
            </Button>
            <div className="flex items-center space-x-1 text-gray-700">
              <span>English</span>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar
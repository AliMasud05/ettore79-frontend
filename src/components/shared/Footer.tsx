import Image from 'next/image';
import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center space-x-2 mb-4">
               
                <Image src="/logo.png" alt="Logo" width={1000} height={1000} className="h-auto w-36" />
              </div>
              <p className="text-gray-400 text-sm">
                The leading real estate platform in Mexico
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Buy</h3>
              <ul className="space-y-2 text-base text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Search Properties
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Buying Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Mortgages
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Sell</h3>
              <ul className="space-y-2 text-base text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    List Property
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Find Agent
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Valuation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-base text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2024 CasaMX. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer
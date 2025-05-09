import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(8px)'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your Tech Solutions Partner in Tundla
            </h1>
            <p className="text-xl md:text-2xl font-light text-blue-100">
              Premium computers, CCTV systems, and expert technical services at Excellent Computers.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link 
                to="/products" 
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-medium px-8 py-3 rounded-lg transition-colors duration-300 text-center"
              >
                Explore Products
              </Link>
              <Link 
                to="/services" 
                className="bg-transparent hover:bg-white/10 border border-white text-white font-medium px-8 py-3 rounded-lg transition-colors duration-300 text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative z-10 transform rotate-2 transition-transform hover:rotate-0 duration-500">
              <img 
                src="https://images.pexels.com/photos/3568520/pexels-photo-3568520.jpeg" 
                alt="Computer Showcase" 
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 z-0 transform -rotate-3 transition-transform hover:rotate-0 duration-500">
              <img 
                src="https://images.pexels.com/photos/3205735/pexels-photo-3205735.jpeg" 
                alt="CCTV Camera" 
                className="w-48 h-48 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4 p-4">
              <div className="bg-yellow-400 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Premium Quality</h3>
                <p className="text-sm text-blue-100">Genuine products & parts</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4">
              <div className="bg-yellow-400 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">24/7 Support</h3>
                <p className="text-sm text-blue-100">Technical assistance anytime</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-4">
              <div className="bg-yellow-400 rounded-full p-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Expert Installation</h3>
                <p className="text-sm text-blue-100">Professional setup services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
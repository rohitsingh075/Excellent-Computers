import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Monitor, Camera, Menu, X, ShoppingCart, Search } from 'lucide-react';
import SearchBar from '../ui/SearchBar';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <Monitor className="h-8 w-8 text-blue-700" />
              <Camera className="h-7 w-7 text-blue-700 -ml-2" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">Excellent Computers</h1>
              <p className="text-xs text-blue-700 -mt-1">Tundla</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Search className="h-5 w-5 text-blue-700" />
            </button>
          </nav>

          {/* Mobile Navigation Icon */}
          <div className="flex items-center md:hidden space-x-4">
            <button 
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Search className="h-5 w-5 text-blue-700" />
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-md focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-blue-700" />
              ) : (
                <Menu className="h-6 w-6 text-blue-700" />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="mt-4 transition-all duration-300 ease-in-out">
            <SearchBar onClose={() => setShowSearch(false)} />
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="mobile-nav-link">Home</Link>
              <Link to="/products" className="mobile-nav-link">Products</Link>
              <Link to="/services" className="mobile-nav-link">Services</Link>
              <Link to="/about" className="mobile-nav-link">About</Link>
              <Link to="/contact" className="mobile-nav-link">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
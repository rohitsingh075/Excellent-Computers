import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Camera, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Clock 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <Monitor className="h-8 w-8 text-yellow-400" />
                <Camera className="h-7 w-7 text-yellow-400 -ml-2" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Excellent Computers</h2>
                <p className="text-xs text-yellow-400">Tundla</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Your trusted partner for all computer and CCTV solutions in Tundla. 
              Providing quality products and services since 2005.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-300 hover:text-yellow-400 transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Computer Sales & Repair</li>
              <li className="text-gray-300">CCTV Installation</li>
              <li className="text-gray-300">Network Setup</li>
              <li className="text-gray-300">Software Installation</li>
              <li className="text-gray-300">Maintenance Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-blue-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">123 Main Street, Tundla, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneCall className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                <span className="text-gray-300">info@excellentcomputers.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div className="text-gray-300">
                  <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                  <p>Sunday: 11:00 AM - 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-4 border-t border-blue-800 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Excellent Computers Tundla. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
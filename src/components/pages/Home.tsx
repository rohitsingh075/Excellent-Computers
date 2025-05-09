import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Camera, 
  Laptop, 
  Printer, 
  HardDrive, 
  Wifi, 
  Clock, 
  ChevronRight,
  Shield
} from 'lucide-react';

import Hero from '../ui/Hero';
import FeaturedProducts from '../ui/FeaturedProducts';
import TestimonialCard from '../ui/TestimonialCard';
import { featuredComputers, featuredCCTV, testimonials } from '../../data';

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      <Hero />
      
      {/* Featured Products Sections */}
      <FeaturedProducts 
        title="Featured Computers & Accessories" 
        products={featuredComputers} 
        viewAllLink="/products?category=computers"
      />
      
      <FeaturedProducts 
        title="Featured CCTV & Security" 
        products={featuredCCTV} 
        viewAllLink="/products?category=cctv"
      />
      
      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive technology solutions for businesses and individuals in Tundla.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <Monitor className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Computer Sales & Service</h3>
              <p className="text-gray-600 mb-4">
                New desktops, laptops, and accessories with expert repair and maintenance services.
              </p>
              <Link 
                to="/services#computers" 
                className="mt-auto inline-flex items-center text-blue-700 hover:text-blue-800"
              >
                Learn More <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <Camera className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">CCTV Installation</h3>
              <p className="text-gray-600 mb-4">
                Complete security solutions with professional installation and configuration.
              </p>
              <Link 
                to="/services#cctv" 
                className="mt-auto inline-flex items-center text-blue-700 hover:text-blue-800"
              >
                Learn More <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-4 mb-4">
                <Wifi className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Networking Solutions</h3>
              <p className="text-gray-600 mb-4">
                Setup and configuration of wired and wireless networks for homes and businesses.
              </p>
              <Link 
                to="/services#networking" 
                className="mt-auto inline-flex items-center text-blue-700 hover:text-blue-800"
              >
                Learn More <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link 
              to="/services" 
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-lg inline-block transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose Excellent Computers?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Since 2005, we've been Tundla's trusted technology partner, providing quality products and reliable services.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <Shield className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">Quality Assurance</h3>
                    <p className="text-gray-600">We only sell genuine products with manufacturer warranty and after-sales support.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <Clock className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">Prompt Service</h3>
                    <p className="text-gray-600">Quick response times and efficient service to minimize downtime.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                    <HardDrive className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800 mb-1">Extensive Inventory</h3>
                    <p className="text-gray-600">Wide range of products in stock, from budget-friendly to premium options.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/about" 
                  className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800"
                >
                  Learn More About Us <ChevronRight className="h-5 w-5 ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/4065624/pexels-photo-4065624.jpeg" 
                  alt="Computer repair"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md mt-6">
                <img 
                  src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg" 
                  alt="CCTV installation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md -mt-6">
                <img 
                  src="https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg" 
                  alt="Hardware components"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/3205737/pexels-photo-3205737.jpeg" 
                  alt="Security camera"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it – hear from our satisfied customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Upgrade Your Technology?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Visit our shop in Tundla or contact us today for personalized solutions and expert advice.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/products" 
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Browse Products
            </Link>
            <Link 
              to="/contact" 
              className="bg-transparent hover:bg-white/10 border border-white text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
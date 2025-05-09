import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Camera, 
  Wifi, 
  HardDrive, 
  Printer, 
  Shield, 
  Cpu, 
  RefreshCw
} from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';
import { services } from '../../data';

const Services: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-blue-100 text-lg max-w-3xl">
            From computer setup to CCTV installation, we provide comprehensive technology services in Tundla. 
            All backed by our expertise and customer satisfaction guarantee.
          </p>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Technology Solutions For All Your Needs</h2>
            <p className="text-lg text-gray-600">
              We offer a wide range of services for individuals and businesses, 
              helping you get the most out of your technology investments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 bg-gray-50" id="process">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Process</h2>
            <p className="text-lg text-gray-600">
              We follow a streamlined process to ensure high-quality service delivery every time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 text-center relative z-10">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-700 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Consultation</h3>
                <p className="text-gray-600">
                  We discuss your requirements and recommend the best solutions.
                </p>
              </div>
              
              {/* Connector (only on desktop) */}
              <div className="hidden md:block absolute top-1/2 right-0 w-1/2 h-1 bg-blue-200 transform translate-y-4"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 text-center relative z-10">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-700 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Planning</h3>
                <p className="text-gray-600">
                  We create a detailed plan including timeline and budget.
                </p>
              </div>
              
              {/* Connectors (only on desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-1/2 h-1 bg-blue-200 transform translate-y-4"></div>
              <div className="hidden md:block absolute top-1/2 right-0 w-1/2 h-1 bg-blue-200 transform translate-y-4"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 text-center relative z-10">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-700 font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Implementation</h3>
                <p className="text-gray-600">
                  Our experts execute the plan with precision and care.
                </p>
              </div>
              
              {/* Connectors (only on desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-1/2 h-1 bg-blue-200 transform translate-y-4"></div>
              <div className="hidden md:block absolute top-1/2 right-0 w-1/2 h-1 bg-blue-200 transform translate-y-4"></div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-lg shadow-md p-6 text-center relative z-10">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-700 font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Support</h3>
                <p className="text-gray-600">
                  We provide ongoing support and maintenance as needed.
                </p>
              </div>
              
              {/* Connector (only on desktop) */}
              <div className="hidden md:block absolute top-1/2 left-0 w-1/2 h-1 bg-blue-200 transform translate-y-4"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Business Services */}
      <section className="py-16" id="business">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Business IT Solutions</h2>
              <p className="text-lg text-gray-600 mb-8">
                We provide tailored technology solutions for businesses of all sizes in Tundla, 
                helping you improve efficiency and security.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <Shield className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">Network Security</h3>
                    <p className="text-gray-600">
                      Protect your business data with our comprehensive security solutions, 
                      including firewalls, secure VPNs, and data encryption.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <Cpu className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">Server Setup & Management</h3>
                    <p className="text-gray-600">
                      Custom server solutions designed for your business needs, with regular 
                      maintenance and monitoring for optimal performance.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="bg-blue-100 rounded-full p-3 mr-4 flex-shrink-0">
                    <RefreshCw className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-gray-800 mb-2">Managed IT Services</h3>
                    <p className="text-gray-600">
                      Let us handle your IT infrastructure so you can focus on your business. 
                      Includes regular updates, troubleshooting, and technical support.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/contact" 
                  className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-lg inline-block transition-colors"
                >
                  Get Business IT Quote
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Business IT Solutions"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-xl text-gray-800 mb-2">What areas do you service?</h3>
                <p className="text-gray-600">
                  We primarily serve Tundla and surrounding areas. For larger projects, we can cover neighboring districts as well.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-xl text-gray-800 mb-2">Do you offer warranties on your services?</h3>
                <p className="text-gray-600">
                  Yes, all our services come with a 30-day workmanship warranty. Additionally, hardware products have manufacturer warranties.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-xl text-gray-800 mb-2">How quickly can you respond to service requests?</h3>
                <p className="text-gray-600">
                  For standard requests, we typically respond within 24-48 hours. For emergency services, we offer same-day response based on availability.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold text-xl text-gray-800 mb-2">Do you offer maintenance contracts?</h3>
                <p className="text-gray-600">
                  Yes, we offer monthly and annual maintenance contracts for businesses to ensure your systems remain in optimal condition.
                </p>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <p className="text-gray-600 mb-4">Still have questions? Contact us directly.</p>
              <Link 
                to="/contact" 
                className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-lg inline-block transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
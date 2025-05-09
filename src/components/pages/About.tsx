import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award,
  ThumbsUp,
  CheckCircle,
  Target,
  BarChart3
} from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Excellent Computers</h1>
          <p className="text-blue-100 text-lg max-w-3xl">
            Tundla's trusted technology partner since 2005. Learn about our journey, 
            our mission, and our commitment to quality.
          </p>
        </div>
      </div>
      
      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Excellent Computers was founded in 2005 with a simple mission: to provide 
                high-quality technology products and reliable services to the people of Tundla.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small computer repair shop has now grown into a comprehensive 
                technology center offering everything from the latest computers and accessories to 
                complete CCTV security solutions.
              </p>
              <p className="text-lg text-gray-600">
                Over the years, we've helped countless businesses and individuals find the right 
                technology solutions for their unique needs. Our commitment to customer satisfaction 
                and technical excellence has made us Tundla's most trusted technology partner.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/4065150/pexels-photo-4065150.jpeg" 
                  alt="Our shop exterior"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md mt-6">
                <img 
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" 
                  alt="Team working"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md -mt-6">
                <img 
                  src="https://images.pexels.com/photos/3812738/pexels-photo-3812738.jpeg" 
                  alt="Computer repair"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img 
                  src="https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg" 
                  alt="Customer service"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-lg text-gray-600">
              At Excellent Computers, we're guided by a clear mission and a strong set of values that 
              define how we work and serve our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide affordable, reliable, and cutting-edge technology solutions that empower 
                individuals and businesses in Tundla. We strive to be a one-stop destination for all 
                technology needs, making advanced technology accessible to everyone in our community.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be recognized as the leading technology provider in the region, known for exceptional 
                service, technical expertise, and customer satisfaction. We aim to continuously evolve 
                with the changing technology landscape while maintaining our core values and commitment 
                to the local community.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in everything we do, from the products we sell to the services we provide.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <ThumbsUp className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We operate with honesty and transparency, building trust with our customers through ethical business practices.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Reliability</h3>
              <p className="text-gray-600">
                Our customers can depend on us for consistent, high-quality service and support when they need it.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              Our experienced and dedicated team is what makes Excellent Computers special. 
              With diverse skills and a passion for technology, we're here to serve you.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                  alt="Rajesh Kumar - Founder & CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Rajesh Kumar</h3>
                <p className="text-blue-700 mb-4">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With over 20 years of experience in technology, Rajesh founded Excellent Computers with a vision to bring quality tech solutions to Tundla.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg" 
                  alt="Priya Sharma - Service Manager"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Priya Sharma</h3>
                <p className="text-blue-700 mb-4">Service Manager</p>
                <p className="text-gray-600 text-sm">
                  Priya ensures our service operations run smoothly and efficiently, always prioritizing customer satisfaction.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                  alt="Amit Patel - Technical Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Amit Patel</h3>
                <p className="text-blue-700 mb-4">Technical Specialist</p>
                <p className="text-gray-600 text-sm">
                  With expertise in computer hardware and networking, Amit leads our technical support and troubleshooting team.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg" 
                  alt="Neha Gupta - CCTV Security Expert"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Neha Gupta</h3>
                <p className="text-blue-700 mb-4">CCTV Security Expert</p>
                <p className="text-gray-600 text-sm">
                  Specializing in security systems, Neha designs and implements customized CCTV solutions for businesses and homes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Achievements */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Achievements</h2>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Over the years, we've achieved important milestones and earned recognition for our work.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 border border-blue-700 rounded-lg">
              <div className="text-4xl font-bold text-yellow-400 mb-2">15+</div>
              <div className="text-xl mb-2">Years in Business</div>
              <p className="text-blue-100">Serving Tundla since 2005</p>
            </div>
            
            <div className="text-center p-6 border border-blue-700 rounded-lg">
              <div className="text-4xl font-bold text-yellow-400 mb-2">2000+</div>
              <div className="text-xl mb-2">Happy Customers</div>
              <p className="text-blue-100">Individuals and businesses</p>
            </div>
            
            <div className="text-center p-6 border border-blue-700 rounded-lg">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-xl mb-2">CCTV Installations</div>
              <p className="text-blue-100">Enhancing security across Tundla</p>
            </div>
            
            <div className="text-center p-6 border border-blue-700 rounded-lg">
              <div className="text-4xl font-bold text-yellow-400 mb-2">10+</div>
              <div className="text-xl mb-2">Industry Awards</div>
              <p className="text-blue-100">For service excellence</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Work With Us?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you need a new computer, CCTV installation, or technical support, 
            our team is ready to help you with all your technology needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/products" 
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Browse Products
            </Link>
            <Link 
              to="/contact" 
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-8 py-3 rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
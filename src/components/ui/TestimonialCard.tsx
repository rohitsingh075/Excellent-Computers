import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div className="flex-grow">
        <div className="flex space-x-1 mb-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
            />
          ))}
        </div>
        <p className="text-gray-600 italic mb-4">"{testimonial.content}"</p>
      </div>
      <div className="flex items-center mt-3">
        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">
          {testimonial.name.charAt(0)}
        </div>
        <div className="ml-3">
          <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
          <p className="text-xs text-gray-500">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
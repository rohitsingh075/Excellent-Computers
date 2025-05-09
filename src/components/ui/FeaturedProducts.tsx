import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { Product } from '../../types';

interface FeaturedProductsProps {
  title: string;
  products: Product[];
  viewAllLink: string;
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ title, products, viewAllLink }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
          <Link 
            to={viewAllLink} 
            className="flex items-center text-blue-700 hover:text-blue-800 transition-colors font-medium"
          >
            View All <ChevronRight className="h-5 w-5 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
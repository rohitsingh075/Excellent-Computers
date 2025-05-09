import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ShoppingCart } from 'lucide-react';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={product.image} 
          alt={product.name}
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        {product.inStock ? (
          <div className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
            In Stock
          </div>
        ) : (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            Out of Stock
          </div>
        )}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end justify-center transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex space-x-2 p-4">
            <Link
              to={`/products/${product.id}`}
              className="bg-white text-blue-700 p-2 rounded-full hover:bg-blue-50 transition-colors"
            >
              <Eye className="h-5 w-5" />
            </Link>
            <button 
              className={`bg-yellow-400 text-blue-900 p-2 rounded-full hover:bg-yellow-300 transition-colors ${
                !product.inStock && 'opacity-50 cursor-not-allowed'
              }`}
              disabled={!product.inStock}
            >
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-1 truncate">{product.name}</h3>
        <div className="flex items-baseline space-x-2 mb-2">
          <span className="text-blue-700 font-bold">₹{product.price.toLocaleString()}</span>
          {product.oldPrice && (
            <span className="text-gray-400 text-sm line-through">₹{product.oldPrice.toLocaleString()}</span>
          )}
        </div>
        <p className="text-gray-600 text-sm line-clamp-2 h-10">{product.description}</p>
        <div className="mt-3">
          <span className="text-xs font-medium text-gray-500">Category: {product.category}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
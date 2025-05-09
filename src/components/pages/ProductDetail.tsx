import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Home, ChevronRight, Check, ShoppingCart, AlertTriangle } from 'lucide-react';
import { allProducts } from '../../data';
import { Product } from '../../types';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      const foundProduct = allProducts.find(p => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
        setActiveImage(foundProduct.image);
      }
    }
    setIsLoading(false);
  }, [id]);

  if (isLoading) {
    return (
      <div className="pt-24 pb-16 flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-700"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-24 pb-16 container mx-auto px-4 text-center">
        <AlertTriangle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-8">The product you are looking for doesn't exist or has been removed.</p>
        <Link 
          to="/products" 
          className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
        >
          Browse All Products
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-blue-700 transition-colors">
            <Home className="h-4 w-4" />
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/products" className="hover:text-blue-700 transition-colors">Products</Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to={`/products?category=${product.category}`} className="hover:text-blue-700 transition-colors">
            {product.category}
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-700 font-medium truncate">{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="bg-white rounded-lg overflow-hidden mb-4 border border-gray-200">
              <img 
                src={activeImage} 
                alt={product.name} 
                className="w-full h-96 object-contain p-4"
              />
            </div>
            
            {/* Thumbnail images - would be used if product had multiple images */}
            <div className="grid grid-cols-5 gap-2">
              <button
                className={`border-2 rounded-md overflow-hidden ${
                  activeImage === product.image ? 'border-blue-700' : 'border-gray-200'
                }`}
                onClick={() => setActiveImage(product.image)}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-16 object-cover"
                />
              </button>
              {/* Additional thumbnail placeholders */}
              {[...Array(4)].map((_, index) => (
                <div key={index} className="border-2 border-gray-200 rounded-md overflow-hidden opacity-50">
                  <img 
                    src={product.image} 
                    alt={`${product.name} angle ${index + 2}`} 
                    className="w-full h-16 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            
            <div className="flex items-baseline space-x-4 mb-4">
              <span className="text-2xl font-bold text-blue-700">₹{product.price.toLocaleString()}</span>
              {product.oldPrice && (
                <span className="text-gray-500 text-lg line-through">₹{product.oldPrice.toLocaleString()}</span>
              )}
              {product.oldPrice && (
                <span className="bg-green-100 text-green-800 text-sm font-medium px-2 py-1 rounded">
                  {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% Off
                </span>
              )}
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className={`inline-flex items-center ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                {product.inStock ? (
                  <>
                    <Check className="h-5 w-5 mr-1" />
                    <span>In Stock</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="h-5 w-5 mr-1" />
                    <span>Out of Stock</span>
                  </>
                )}
              </div>
            </div>
            
            <div className="border-t border-b border-gray-200 py-4 mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.features?.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="font-semibold text-gray-800 mb-3">Specifications:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specifications?.map((spec, index) => (
                  <div key={index} className="flex">
                    <span className="font-medium text-gray-700 min-w-32">{spec.name}:</span>
                    <span className="text-gray-600">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button 
                className={`flex-1 flex items-center justify-center space-x-2 bg-blue-700 text-white py-3 px-6 rounded-lg font-medium ${
                  !product.inStock && 'opacity-50 cursor-not-allowed'
                }`}
                disabled={!product.inStock}
              >
                <ShoppingCart className="h-5 w-5" />
                <span>Add to Cart</span>
              </button>
              <Link 
                to="/contact" 
                className="flex-1 flex items-center justify-center space-x-2 border border-blue-700 text-blue-700 py-3 px-6 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                <span>Enquire Now</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
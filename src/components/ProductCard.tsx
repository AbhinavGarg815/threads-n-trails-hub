
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
  salePrice?: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group animate-fade-in">
      <div className="relative overflow-hidden mb-3">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-[400px] object-cover object-center group-hover:scale-105 transition-transform duration-500" 
          />
        </Link>
        
        {/* New Tag */}
        {product.isNew && (
          <div className="absolute top-2 left-2 bg-fashion-800 text-white text-xs uppercase tracking-wider py-1 px-2">
            New
          </div>
        )}
        
        {/* Sale Tag */}
        {product.isSale && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs uppercase tracking-wider py-1 px-2">
            Sale
          </div>
        )}
        
        {/* Quick Actions */}
        <div className="absolute top-2 right-2">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-fashion-accent transition-colors duration-300" aria-label="Add to wishlist">
            <Heart size={18} className="text-fashion-700" />
          </button>
        </div>
        
        {/* Quick Add */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/90 py-3 px-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full py-2 bg-fashion-800 text-white text-sm font-medium hover:bg-fashion-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="font-medium mb-1">
          <Link to={`/product/${product.id}`} className="hover:text-fashion-accent transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="text-fashion-500 text-sm mb-1">{product.category}</p>
        <div className="flex justify-center items-center space-x-2">
          {product.isSale && product.salePrice ? (
            <>
              <span className="text-red-600 font-medium">${product.salePrice.toFixed(2)}</span>
              <span className="text-fashion-400 line-through">${product.price.toFixed(2)}</span>
            </>
          ) : (
            <span className="font-medium">${product.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

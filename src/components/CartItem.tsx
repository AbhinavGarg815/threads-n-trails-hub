
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { Product } from './ProductCard';

interface CartItemProps {
  product: Product;
  quantity: number;
  onRemove: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}

const CartItem = ({ 
  product, 
  quantity, 
  onRemove, 
  onUpdateQuantity 
}: CartItemProps) => {
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      onUpdateQuantity(product.id, newQuantity);
    }
  };

  const totalPrice = (product.isSale && product.salePrice 
    ? product.salePrice 
    : product.price) * quantity;

  return (
    <div className="flex py-6 border-b border-fashion-200">
      {/* Product Image */}
      <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover object-center" 
          />
        </Link>
      </div>

      {/* Product Details */}
      <div className="ml-4 flex flex-1 flex-col justify-between">
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium text-fashion-800">
              <Link to={`/product/${product.id}`} className="hover:text-fashion-accent">
                {product.name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-fashion-500">{product.category}</p>
          </div>
          
          {/* Price */}
          <div className="text-right">
            <p className="font-medium">${totalPrice.toFixed(2)}</p>
            {product.isSale && product.salePrice && (
              <p className="text-sm text-red-600">
                Sale: ${product.salePrice.toFixed(2)} 
                <span className="ml-1 text-fashion-400 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </p>
            )}
          </div>
        </div>

        {/* Quantity and Remove */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center border border-fashion-300">
            <button 
              className="px-3 py-1 text-fashion-600 hover:bg-fashion-100"
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
            >
              -
            </button>
            <span className="px-3 py-1 border-x border-fashion-300 min-w-[40px] text-center">
              {quantity}
            </span>
            <button 
              className="px-3 py-1 text-fashion-600 hover:bg-fashion-100"
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              +
            </button>
          </div>
          
          <button 
            className="text-fashion-500 hover:text-fashion-700 flex items-center"
            onClick={() => onRemove(product.id)}
          >
            <X size={16} className="mr-1" />
            <span className="text-sm">Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

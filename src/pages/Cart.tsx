
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartItem from '@/components/CartItem';
import { Product } from '@/components/ProductCard';

// Sample cart items
const initialCartItems = [
  {
    product: {
      id: 1,
      name: "Cotton Oversized T-Shirt",
      category: "Women",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      isNew: true
    },
    quantity: 1
  },
  {
    product: {
      id: 3,
      name: "Wool Blend Cardigan",
      category: "Women",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      isSale: true,
      salePrice: 99.99
    },
    quantity: 2
  },
  {
    product: {
      id: 7,
      name: "Leather Crossbody Bag",
      category: "Accessories",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      isNew: true
    },
    quantity: 1
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  
  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    const itemPrice = item.product.isSale && item.product.salePrice 
      ? item.product.salePrice 
      : item.product.price;
    return total + (itemPrice * item.quantity);
  }, 0);
  
  // Apply fake discount if promo code is applied
  const discount = promoApplied ? subtotal * 0.1 : 0;
  
  // Assume fixed shipping cost
  const shipping = subtotal > 100 ? 0 : 5.99;
  
  // Calculate total
  const total = subtotal - discount + shipping;
  
  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.product.id !== id));
    toast.success('Item removed from cart');
  };
  
  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(cartItems.map(item => 
      item.product.id === id ? { ...item, quantity } : item
    ));
  };
  
  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === 'discount10') {
      setPromoApplied(true);
      toast.success('Promo code applied successfully!');
    } else {
      toast.error('Invalid promo code');
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center text-sm text-fashion-500">
          <Link to="/" className="hover:text-fashion-700">Home</Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-fashion-700">Shopping Cart</span>
        </div>
      </div>
      
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-serif mb-8">Your Shopping Cart</h1>
          
          {cartItems.length > 0 ? (
            <div className="lg:grid lg:grid-cols-12 lg:gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-8">
                <div className="mb-8">
                  {cartItems.map((item) => (
                    <CartItem 
                      key={item.product.id}
                      product={item.product}
                      quantity={item.quantity}
                      onRemove={handleRemoveItem}
                      onUpdateQuantity={handleUpdateQuantity}
                    />
                  ))}
                </div>
                
                {/* Continue Shopping */}
                <div className="mb-8 lg:mb-0">
                  <Link 
                    to="/products"
                    className="text-fashion-700 hover:text-fashion-accent flex items-center"
                  >
                    <ChevronRight size={16} className="mr-1 rotate-180" />
                    Continue Shopping
                  </Link>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-4">
                <div className="bg-fashion-100 p-6">
                  <h2 className="text-xl font-medium mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-fashion-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    
                    {promoApplied && (
                      <div className="flex justify-between text-red-600">
                        <span>Discount (10%)</span>
                        <span>-${discount.toFixed(2)}</span>
                      </div>
                    )}
                    
                    <div className="flex justify-between">
                      <span className="text-fashion-600">Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    
                    <div className="border-t border-fashion-200 pt-4 flex justify-between font-medium">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {/* Promo Code */}
                  <div className="mb-6">
                    <label className="block text-sm mb-2">Promo Code</label>
                    <div className="flex">
                      <input
                        type="text"
                        className="flex-1 border border-fashion-300 px-4 py-2 text-sm"
                        placeholder="Enter code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        disabled={promoApplied}
                      />
                      <button 
                        className="bg-fashion-800 text-white px-4 py-2 text-sm whitespace-nowrap disabled:bg-fashion-500"
                        onClick={handleApplyPromo}
                        disabled={promoApplied || !promoCode}
                      >
                        Apply
                      </button>
                    </div>
                    {promoApplied && (
                      <p className="text-green-600 text-sm mt-1">Promo code applied successfully!</p>
                    )}
                    <p className="text-fashion-500 text-xs mt-1">Try "DISCOUNT10" for 10% off your order</p>
                  </div>
                  
                  {/* Checkout Button */}
                  <button className="w-full btn-primary flex items-center justify-center">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="flex justify-center mb-6">
                <ShoppingBag size={64} className="text-fashion-300" />
              </div>
              <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-fashion-500 mb-8">Looks like you haven't added any items to your cart yet.</p>
              <Link to="/" className="btn-primary inline-flex">
                Start Shopping
              </Link>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Cart;

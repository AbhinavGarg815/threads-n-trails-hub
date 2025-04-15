
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, ShoppingBag, ChevronRight, Star, TruckIcon, RotateCcw, Shield } from 'lucide-react';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedProducts from '@/components/FeaturedProducts';

// Sample product data
const product = {
  id: 1,
  name: "Cotton Oversized T-Shirt",
  category: "Women",
  price: 39.99,
  images: [
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1503342452485-86b7f54527ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1503185912284-5271ff81b9a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  ],
  description: "Crafted from 100% organic cotton, this oversized t-shirt offers both comfort and style. Its relaxed fit makes it perfect for casual days, while the high-quality fabric ensures durability and softness against the skin.",
  features: [
    "100% organic cotton",
    "Relaxed, oversized fit",
    "Crew neckline",
    "Dropped shoulders",
    "Machine washable"
  ],
  sizes: ["XS", "S", "M", "L", "XL"],
  colors: ["White", "Black", "Gray", "Blue"],
  rating: 4.5,
  reviewCount: 127,
  isNew: true
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }
    
    if (!selectedColor) {
      toast.error("Please select a color");
      return;
    }
    
    toast.success(`Added ${quantity} ${product.name} to your cart`);
  };
  
  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
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
          <Link to={`/products/${product.category.toLowerCase()}`} className="hover:text-fashion-700">{product.category}</Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-fashion-700">{product.name}</span>
        </div>
      </div>
      
      {/* Product Details */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="mb-4">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name} 
                  className="w-full h-[600px] object-cover object-center" 
                />
              </div>
              
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button 
                    key={index}
                    className={`border-2 ${selectedImage === index ? 'border-fashion-700' : 'border-transparent'}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`} 
                      className="w-full h-24 object-cover object-center" 
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              {product.isNew && (
                <span className="inline-block bg-fashion-700 text-white text-xs uppercase tracking-wider py-1 px-2 mb-4">
                  New Arrival
                </span>
              )}
              
              <h1 className="text-3xl font-serif mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center text-amber-500 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                      className={i < Math.floor(product.rating) ? "" : "text-fashion-300"}
                    />
                  ))}
                </div>
                <span className="text-sm text-fashion-500">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              
              <p className="text-2xl font-medium mb-6">${product.price.toFixed(2)}</p>
              
              <p className="text-fashion-600 mb-8">{product.description}</p>
              
              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Color: {selectedColor || 'Select a color'}</h3>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`w-10 h-10 rounded-full border ${
                        selectedColor === color 
                          ? 'border-fashion-700 ring-2 ring-fashion-200' 
                          : 'border-fashion-300'
                      }`}
                      style={{ 
                        backgroundColor: color.toLowerCase() === 'white' 
                          ? '#ffffff' 
                          : color.toLowerCase() === 'black'
                          ? '#000000'
                          : color.toLowerCase() === 'gray'
                          ? '#888888'
                          : color.toLowerCase() === 'blue'
                          ? '#3b82f6'
                          : '#ffffff'
                      }}
                      onClick={() => setSelectedColor(color)}
                      aria-label={`Select ${color} color`}
                    ></button>
                  ))}
                </div>
              </div>
              
              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-sm font-medium">Size: {selectedSize || 'Select a size'}</h3>
                  <button className="text-sm text-fashion-500 underline">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`w-12 h-12 text-sm border ${
                        selectedSize === size
                          ? 'border-fashion-700 bg-fashion-700 text-white'
                          : 'border-fashion-300 text-fashion-700 hover:border-fashion-700'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Quantity */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Quantity</h3>
                <div className="flex items-center border border-fashion-300 w-32">
                  <button 
                    className="px-3 py-2 text-fashion-600 hover:bg-fashion-100"
                    onClick={() => handleQuantityChange(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="px-3 py-2 border-x border-fashion-300 flex-1 text-center">
                    {quantity}
                  </span>
                  <button 
                    className="px-3 py-2 text-fashion-600 hover:bg-fashion-100"
                    onClick={() => handleQuantityChange(quantity + 1)}
                    disabled={quantity >= 10}
                  >
                    +
                  </button>
                </div>
              </div>
              
              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  className="btn-primary flex-1 flex items-center justify-center"
                  onClick={handleAddToCart}
                >
                  <ShoppingBag size={18} className="mr-2" />
                  Add to Cart
                </button>
                <button className="btn-secondary flex items-center justify-center">
                  <Heart size={18} className="mr-2" />
                  Add to Wishlist
                </button>
              </div>
              
              {/* Product features */}
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-3">Features</h3>
                <ul className="list-disc pl-5 space-y-1 text-fashion-600">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              {/* Shipping & Returns */}
              <div className="border-t border-fashion-200 pt-6 space-y-4">
                <div className="flex items-start">
                  <TruckIcon size={20} className="text-fashion-700 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Free Shipping</h4>
                    <p className="text-sm text-fashion-500">On all orders over $50</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <RotateCcw size={20} className="text-fashion-700 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Easy Returns</h4>
                    <p className="text-sm text-fashion-500">30 day return policy</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield size={20} className="text-fashion-700 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium">Secure Checkout</h4>
                    <p className="text-sm text-fashion-500">SSL encrypted payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* You May Also Like */}
      <FeaturedProducts title="You May Also Like" />
      
      <Footer />
    </div>
  );
};

export default ProductDetail;

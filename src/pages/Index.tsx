
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategoryBanner from '@/components/CategoryBanner';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] bg-fashion-100">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
            alt="Hero Background" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-fashion-800/60 to-transparent"></div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
              Elevate Your Style with Our Summer Collection
            </h1>
            <p className="text-white/90 text-lg mb-8">
              Discover the latest trends in fashion and express yourself with our curated pieces.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/products/women" 
                className="btn-primary flex items-center"
              >
                Shop Women <ArrowRight size={16} className="ml-2" />
              </Link>
              <Link 
                to="/products/men" 
                className="btn-secondary flex items-center"
              >
                Shop Men <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Shop By Category</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Women's Collection" 
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fashion-800/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-serif mb-2">Women</h3>
                <Link to="/products/women" className="text-white/90 hover:text-white flex items-center">
                  Shop Collection <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="relative group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Men's Collection" 
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fashion-800/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-serif mb-2">Men</h3>
                <Link to="/products/men" className="text-white/90 hover:text-white flex items-center">
                  Shop Collection <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="relative group overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Accessories Collection" 
                className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-fashion-800/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-white text-2xl font-serif mb-2">Accessories</h3>
                <Link to="/products/accessories" className="text-white/90 hover:text-white flex items-center">
                  Shop Collection <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <FeaturedProducts 
        title="Featured Products" 
        subtitle="Discover our most popular styles, curated with care for the modern wardrobe." 
      />
      
      {/* Category Banner */}
      <CategoryBanner 
        title="Summer Style Guide" 
        description="Elevate your summer wardrobe with breezy fabrics and versatile pieces designed for hot days and warm nights."
        image="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
        link="/products/summer"
      />
      
      {/* New Arrivals */}
      <FeaturedProducts 
        title="New Arrivals" 
        subtitle="Be the first to discover our latest pieces, fresh from the design studio." 
      />
      
      {/* Newsletter */}
      <section className="py-16 bg-fashion-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-fashion-500 mb-8">
              Be the first to know about new collections, exclusive offers, and style inspiration.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 border border-fashion-300 focus:outline-none focus:border-fashion-accent mb-2 sm:mb-0"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

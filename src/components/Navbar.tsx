
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const categories = [
    { name: "Women", path: "/products/women" },
    { name: "Men", path: "/products/men" },
    { name: "Accessories", path: "/products/accessories" },
    { name: "New Arrivals", path: "/products/new" },
    { name: "Sale", path: "/products/sale" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-fashion-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold">THREADS</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <Link 
                key={category.name}
                to={category.path}
                className="text-fashion-600 hover:text-fashion-800 font-medium text-sm tracking-wide"
              >
                {category.name}
              </Link>
            ))}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <button className="hover:text-fashion-accent transition-colors" aria-label="Search">
              <Search size={20} />
            </button>
            <Link to="/account" className="hover:text-fashion-accent transition-colors" aria-label="Account">
              <User size={20} />
            </Link>
            <Link to="/cart" className="relative hover:text-fashion-accent transition-colors" aria-label="Cart">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-fashion-accent text-fashion-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">3</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white pt-16">
          <div className="container mx-auto px-4 py-8">
            <nav className="flex flex-col space-y-6">
              {categories.map((category) => (
                <Link 
                  key={category.name}
                  to={category.path}
                  className="text-fashion-700 text-xl font-medium tracking-wide"
                  onClick={() => setIsOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { name: "Women", path: "/products/women" },
    { name: "Men", path: "/products/men" },
    { name: "Accessories", path: "/products/accessories" },
    { name: "New Arrivals", path: "/products/new" },
    { name: "Sale", path: "/products/sale" },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Search query:', searchQuery);
  };

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

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pr-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit"
                variant="ghost" 
                size="icon"
                className="absolute right-0 top-0"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
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
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mb-6">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
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

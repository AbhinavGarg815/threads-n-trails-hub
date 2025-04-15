
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-fashion-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/products/women" className="text-fashion-500 hover:text-fashion-700 text-sm">Women</Link></li>
              <li><Link to="/products/men" className="text-fashion-500 hover:text-fashion-700 text-sm">Men</Link></li>
              <li><Link to="/products/accessories" className="text-fashion-500 hover:text-fashion-700 text-sm">Accessories</Link></li>
              <li><Link to="/products/new" className="text-fashion-500 hover:text-fashion-700 text-sm">New Arrivals</Link></li>
              <li><Link to="/products/sale" className="text-fashion-500 hover:text-fashion-700 text-sm">Sale</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-fashion-500 hover:text-fashion-700 text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-fashion-500 hover:text-fashion-700 text-sm">Contact Us</Link></li>
              <li><Link to="/blog" className="text-fashion-500 hover:text-fashion-700 text-sm">Blog</Link></li>
              <li><Link to="/faq" className="text-fashion-500 hover:text-fashion-700 text-sm">FAQs</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link to="/shipping" className="text-fashion-500 hover:text-fashion-700 text-sm">Shipping & Returns</Link></li>
              <li><Link to="/terms" className="text-fashion-500 hover:text-fashion-700 text-sm">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-fashion-500 hover:text-fashion-700 text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-fashion-500 hover:text-fashion-700">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-fashion-500 hover:text-fashion-700">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-fashion-500 hover:text-fashion-700">
                <Twitter size={20} />
              </a>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-white px-4 py-2 text-sm flex-1 border border-fashion-300 focus:outline-none focus:border-fashion-accent"
                />
                <button className="bg-fashion-700 text-white px-4 py-2 text-sm whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-fashion-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-fashion-500 text-sm mb-4 md:mb-0">© 2025 THREADS. All rights reserved.</p>
          <div className="flex space-x-4">
            <img src="https://via.placeholder.com/40x25" alt="Visa" />
            <img src="https://via.placeholder.com/40x25" alt="Mastercard" />
            <img src="https://via.placeholder.com/40x25" alt="American Express" />
            <img src="https://via.placeholder.com/40x25" alt="PayPal" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

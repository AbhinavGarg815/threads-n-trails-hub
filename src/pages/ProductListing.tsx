
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChevronDown, Filter, SlidersHorizontal, X } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard, { Product } from '@/components/ProductCard';

// Sample product data
const allProducts: Product[] = [
  {
    id: 1,
    name: "Cotton Oversized T-Shirt",
    category: "Women",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    isNew: true
  },
  {
    id: 2,
    name: "Relaxed Fit Jeans",
    category: "Men",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    name: "Wool Blend Cardigan",
    category: "Women",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    isSale: true,
    salePrice: 99.99
  },
  {
    id: 4,
    name: "Tailored Blazer",
    category: "Men",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1594938291221-94f28fdb3f72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 5,
    name: "Linen Shirt",
    category: "Men",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1604695573706-53a96cc9e410?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 6,
    name: "Floral Summer Dress",
    category: "Women",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1562244510-c039a97ff920?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    isSale: true,
    salePrice: 69.99
  },
  {
    id: 7,
    name: "Leather Crossbody Bag",
    category: "Accessories",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1591561954555-607968c989ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    isNew: true
  },
  {
    id: 8,
    name: "Lightweight Scarf",
    category: "Accessories",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1606173743025-17d5f31b4a5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
  }
];

const ProductListing = () => {
  const { category } = useParams<{ category: string }>();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [selectedFilters, setSelectedFilters] = useState<{
    colors: string[];
    sizes: string[];
  }>({
    colors: [],
    sizes: []
  });
  
  // Filter products based on category
  const products = category
    ? allProducts.filter(p => p.category.toLowerCase() === category.toLowerCase())
    : allProducts;
    
  // Sort products
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case 'priceLowToHigh':
        return (a.isSale && a.salePrice ? a.salePrice : a.price) - 
               (b.isSale && b.salePrice ? b.salePrice : b.price);
      case 'priceHighToLow':
        return (b.isSale && b.salePrice ? b.salePrice : b.price) - 
               (a.isSale && a.salePrice ? a.salePrice : a.price);
      case 'newest':
        return a.isNew ? -1 : b.isNew ? 1 : 0;
      default:
        return 0;
    }
  });
  
  // Available color options
  const colorOptions = [
    { name: 'Black', value: 'black' },
    { name: 'White', value: 'white' },
    { name: 'Gray', value: 'gray' },
    { name: 'Blue', value: 'blue' },
    { name: 'Green', value: 'green' },
  ];
  
  // Available size options
  const sizeOptions = [
    { name: 'XS', value: 'xs' },
    { name: 'S', value: 's' },
    { name: 'M', value: 'm' },
    { name: 'L', value: 'l' },
    { name: 'XL', value: 'xl' },
  ];
  
  const handleColorFilter = (color: string) => {
    setSelectedFilters(prev => {
      const colors = prev.colors.includes(color)
        ? prev.colors.filter(c => c !== color)
        : [...prev.colors, color];
      return { ...prev, colors };
    });
  };
  
  const handleSizeFilter = (size: string) => {
    setSelectedFilters(prev => {
      const sizes = prev.sizes.includes(size)
        ? prev.sizes.filter(s => s !== size)
        : [...prev.sizes, size];
      return { ...prev, sizes };
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Page Header */}
      <section className="bg-fashion-100 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif text-center">
            {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : 'All Products'}
          </h1>
        </div>
      </section>
      
      {/* Filters and Products */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row">
            {/* Desktop Filters */}
            <aside className="hidden lg:block w-64 mr-8 flex-shrink-0">
              <div className="sticky top-24">
                <h2 className="text-xl font-serif mb-6">Filters</h2>
                
                {/* Price Range */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium mb-3">Price Range</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-fashion-500 text-sm">${priceRange[0]}</span>
                    <span className="text-fashion-500 text-sm">${priceRange[1]}</span>
                  </div>
                  <div className="h-1 bg-fashion-200 rounded-full">
                    <div 
                      className="h-full bg-fashion-700 rounded-full"
                      style={{ width: `${((priceRange[1] - priceRange[0]) / 200) * 100}%`, marginLeft: `${(priceRange[0] / 200) * 100}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* Color Filter */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium mb-3">Color</h3>
                  <div className="space-y-2">
                    {colorOptions.map((color) => (
                      <label key={color.value} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="w-4 h-4 border-fashion-300 rounded text-fashion-accent"
                          checked={selectedFilters.colors.includes(color.value)}
                          onChange={() => handleColorFilter(color.value)}
                        />
                        <span className="ml-2 text-sm">{color.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Size Filter */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium mb-3">Size</h3>
                  <div className="flex flex-wrap gap-2">
                    {sizeOptions.map((size) => (
                      <button
                        key={size.value}
                        className={`w-10 h-10 text-sm border ${
                          selectedFilters.sizes.includes(size.value)
                            ? 'border-fashion-700 bg-fashion-700 text-white'
                            : 'border-fashion-300 text-fashion-700 hover:border-fashion-700'
                        }`}
                        onClick={() => handleSizeFilter(size.value)}
                      >
                        {size.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
            
            {/* Products Section */}
            <div className="flex-1">
              {/* Mobile Filter and Sort */}
              <div className="flex justify-between mb-6 lg:mb-8">
                <button
                  className="flex items-center lg:hidden px-4 py-2 border border-fashion-300 text-sm"
                  onClick={() => setIsFilterOpen(true)}
                >
                  <Filter size={16} className="mr-2" />
                  Filters
                </button>
                
                <div className="relative">
                  <select
                    className="appearance-none bg-transparent px-4 py-2 pr-8 border border-fashion-300 text-sm"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="priceLowToHigh">Price: Low to High</option>
                    <option value="priceHighToLow">Price: High to Low</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-fashion-500 pointer-events-none" />
                </div>
              </div>
              
              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-12">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              
              {/* No Products */}
              {sortedProducts.length === 0 && (
                <div className="py-16 text-center">
                  <h3 className="text-xl font-medium mb-2">No products found</h3>
                  <p className="text-fashion-500">Try adjusting your filters or search criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsFilterOpen(false)}></div>
          
          <div className="absolute top-0 right-0 w-80 max-w-full h-full bg-white overflow-auto">
            <div className="p-4 border-b border-fashion-200 flex justify-between items-center">
              <h2 className="text-lg font-medium">Filters</h2>
              <button onClick={() => setIsFilterOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <div className="p-4">
              {/* Price Range */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Price Range</h3>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-fashion-500 text-sm">${priceRange[0]}</span>
                  <span className="text-fashion-500 text-sm">${priceRange[1]}</span>
                </div>
                <div className="h-1 bg-fashion-200 rounded-full">
                  <div 
                    className="h-full bg-fashion-700 rounded-full"
                    style={{ width: `${((priceRange[1] - priceRange[0]) / 200) * 100}%`, marginLeft: `${(priceRange[0] / 200) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              {/* Color Filter */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Color</h3>
                <div className="space-y-2">
                  {colorOptions.map((color) => (
                    <label key={color.value} className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 border-fashion-300 rounded text-fashion-accent"
                        checked={selectedFilters.colors.includes(color.value)}
                        onChange={() => handleColorFilter(color.value)}
                      />
                      <span className="ml-2 text-sm">{color.name}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Size Filter */}
              <div className="mb-8">
                <h3 className="text-sm font-medium mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {sizeOptions.map((size) => (
                    <button
                      key={size.value}
                      className={`w-10 h-10 text-sm border ${
                        selectedFilters.sizes.includes(size.value)
                          ? 'border-fashion-700 bg-fashion-700 text-white'
                          : 'border-fashion-300 text-fashion-700 hover:border-fashion-700'
                      }`}
                      onClick={() => handleSizeFilter(size.value)}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Apply Button */}
              <button 
                className="w-full py-3 bg-fashion-700 text-white text-sm font-medium"
                onClick={() => setIsFilterOpen(false)}
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default ProductListing;

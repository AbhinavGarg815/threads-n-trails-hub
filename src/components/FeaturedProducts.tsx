
import ProductCard, { Product } from './ProductCard';

// Sample product data
const featuredProducts: Product[] = [
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
  }
];

interface FeaturedProductsProps {
  title: string;
  subtitle?: string;
}

const FeaturedProducts = ({ title, subtitle }: FeaturedProductsProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">{title}</h2>
          {subtitle && <p className="text-fashion-500 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

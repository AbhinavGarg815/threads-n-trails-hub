
import { Link } from 'react-router-dom';

interface CategoryBannerProps {
  title: string;
  description: string;
  image: string;
  link: string;
  alignment?: 'left' | 'right';
}

const CategoryBanner = ({ 
  title, 
  description, 
  image, 
  link, 
  alignment = 'left' 
}: CategoryBannerProps) => {
  return (
    <div className="relative overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center">
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-lg ${alignment === 'right' ? 'ml-auto mr-0 text-right' : 'mr-auto ml-0'}`}>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">{title}</h2>
          <p className="text-white/90 mb-8">{description}</p>
          <Link 
            to={link} 
            className="inline-block bg-white text-fashion-800 py-3 px-8 text-sm font-medium tracking-wider hover:bg-fashion-accent transition-colors"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;

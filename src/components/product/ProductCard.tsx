import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, name, price, image, category, isNew } = product;
  // const { addItem } = useCart();

  // const getProductUrl = () => {
  //   if (category === 'Rolex') {
  //     // Link to specific Datejust variants based on exact name matches
  //     if (name === 'Datejust 41mm Blue Diamond Dial Fluted Jubilee') {
  //       return '/rolex/datejust/blue-dial';
  //     }
  //     if (name === 'Datejust 41mm Diamond Dial with Fluted Bezel') {
  //       return '/rolex/datejust/grey-dial';
  //     }
  //     if (name === 'Datejust 41mm Wimbledon Dial with Fluted Bezel') {
  //       return '/rolex/datejust/wimbledon-dial';
  //     }
  //     if (name === 'Datejust 41mm White Roman Dial Fluted Jubilee') {
  //       return '/rolex/datejust/white-dial';
  //     }
  //     if (name === 'Datejust 41mm Fluted Bezel Roman Numerals') {
  //       return '/rolex/datejust/roman-dial';
  //     }
  //     if (name === 'Datejust 41mm Gold Diamond Dial Two-Tone') {
  //       return '/rolex/datejust/gold-diamond-dial';
  //     }
  //     if (name === 'Datejust 41mm Gold Diamond Dial Two-Tone Oyster') {
  //       return '/rolex/datejust/gold-diamond-oyster-dial';
  //     }
  //     if (name === 'Datejust 41mm Grey Diamond Dial Oyster') {
  //       return '/rolex/datejust/grey-diamond-oyster-dial';
  //     }
  //     if (name === 'Datejust 41mm Gold Champagne Dial Two-Tone') {
  //       return '/rolex/datejust/gold-champagne-dial';
  //     }
  //     if (name === 'Datejust 41mm Champagne Dial Two-Tone Oyster') {
  //       return '/rolex/datejust/gold-champagne-oyster-dial';
  //     }
  //     if (name === 'Datejust 41mm Blue Dial Oyster') {
  //       return '/rolex/datejust/blue-oyster-dial';
  //     }
  //     if (name === 'Datejust 41mm Wimbledon Dial Two-Tone') {
  //       return '/rolex/datejust/wimbledon-two-tone';
  //     }
  //     if (name === 'Datejust 41mm Wimbledon Dial Two-Tone Oyster') {
  //       return '/rolex/datejust/wimbledon-two-tone-oyster';
  //     }
  //     if (name === 'Datejust 41mm Brown Dial Two-Tone') {
  //       return '/rolex/datejust/brown-dial';
  //     }
  //     if (name === 'Datejust 41mm Brown Diamond Dial Two-Tone') {
  //       return '/rolex/datejust/brown-diamond-dial';
  //     }
  //     if (name === 'Datejust 41mm White Dial Champagne Silver Jubilee') {
  //       return '/rolex/datejust/white-champagne-dial';
  //     }
  //     if (name === 'Datejust 41mm Mother of Pearl Diamond Dial') {
  //       return '/rolex/datejust/mother-of-pearl-dial';
  //     }
  //     if (name === 'Datejust 41mm Mother of Pearl Diamond Dial Oyster') {
  //       return '/rolex/datejust/mother-of-pearl-oyster-dial';
  //     }
  //     if (name === 'Datejust 41mm Blue Dial Smooth Bezel') {
  //       return '/rolex/datejust/blue-smooth-dial';
  //     }
  //     if (name === 'Datejust 41mm Green Dial Smooth Bezel') {
  //       return '/rolex/datejust/green-smooth-dial';
  //     }
  //     if (name === 'Datejust 41mm Green Dial Oyster') {
  //       return '/rolex/datejust/green-oyster-dial';
  //     }
  //     if (name === 'Day-Date 40 Rose Gold Brown Roman Dial') {
  //       return '/rolex/day-date/brown-roman-rose-gold';
  //     }
  //     if (name === 'Day-Date 40 White Roman Dial Gold') {
  //       return '/rolex/day-date/white-roman-gold';
  //     }
  //     if (name === 'Day-Date 40 Ice Blue Dial') {
  //       return '/rolex/day-date/ice-blue-dial';
  //     }
  //     if (name === 'Day-Date 40 Gold Diamond-Set President') {
  //       return '/rolex/day-date/gold-diamond-president';
  //     }
  //     if (name === 'Day-Date 40 Black Dial Gold') {
  //       return '/rolex/day-date/black-dial-gold';
  //     }

  //     // Fallback patterns for other variants
  //     if (name.toLowerCase().includes('datejust')) {
  //       if (name.toLowerCase().includes('wimbledon')) {
  //         if (name.toLowerCase().includes('oyster')) {
  //           return '/rolex/datejust/wimbledon-two-tone-oyster';
  //         }
  //         if (name.toLowerCase().includes('two-tone')) {
  //           return '/rolex/datejust/wimbledon-two-tone';
  //         }
  //         return '/rolex/datejust/wimbledon-dial';
  //       }
  //       if (name.toLowerCase().includes('grey diamond')) {
  //         if (name.toLowerCase().includes('oyster')) {
  //           return '/rolex/datejust/grey-diamond-oyster-dial';
  //         }
  //         return '/rolex/datejust/grey-dial';
  //       }
  //       if (name.toLowerCase().includes('blue diamond') || name.toLowerCase().includes('blue dial')) {
  //         if (name.toLowerCase().includes('smooth bezel')) {
  //           return '/rolex/datejust/blue-smooth-dial';
  //         }
  //         if (name.toLowerCase().includes('oyster')) {
  //           return '/rolex/datejust/blue-oyster-dial';
  //         }
  //         return '/rolex/datejust/blue-dial';
  //       }
  //       if (name.toLowerCase().includes('white roman')) {
  //         return '/rolex/datejust/white-dial';
  //       }
  //       if (name.toLowerCase().includes('roman numerals')) {
  //         return '/rolex/datejust/roman-dial';
  //       }
  //       if (name.toLowerCase().includes('gold diamond')) {
  //         if (name.toLowerCase().includes('oyster')) {
  //           return '/rolex/datejust/gold-diamond-oyster-dial';
  //         }
  //         return '/rolex/datejust/gold-diamond-dial';
  //       }
  //       if (name.toLowerCase().includes('gold champagne')) {
  //         if (name.toLowerCase().includes('oyster')) {
  //           return '/rolex/datejust/gold-champagne-oyster-dial';
  //         }
  //         return '/rolex/datejust/gold-champagne-dial';
  //       }
  //       if (name.toLowerCase().includes('brown diamond')) {
  //         return '/rolex/datejust/brown-diamond-dial';
  //       }
  //       if (name.toLowerCase().includes('brown dial')) {
  //         return '/rolex/datejust/brown-dial';
  //       }
  //       if (name.toLowerCase().includes('white champagne')) {
  //         return '/rolex/datejust/white-champagne-dial';
  //       }
  //       if (name.toLowerCase().includes('mother of pearl')) {
  //         if (name.toLowerCase().includes('oyster')) {
  //           return '/rolex/datejust/mother-of-pearl-oyster-dial';
  //         }
  //         return '/rolex/datejust/mother-of-pearl-dial';
  //       }
  //       if (name.toLowerCase().includes('green dial')) {
  //         if (name.toLowerCase().includes('oyster')) {
  //           return '/rolex/datejust/green-oyster-dial';
  //         }
  //         return '/rolex/datejust/green-smooth-dial';
  //       }
  //       return '/rolex/datejust/black-dial';
  //     }

  //     // Day-Date patterns
  //     if (name.toLowerCase().includes('day-date')) {
  //       if (name.toLowerCase().includes('diamond-set') || name.toLowerCase().includes('diamond set')) {
  //         return '/rolex/day-date/gold-diamond-president';
  //       }
  //       if (name.toLowerCase().includes('brown roman')) {
  //         return '/rolex/day-date/brown-roman-rose-gold';
  //       }
  //       if (name.toLowerCase().includes('white roman')) {
  //         return '/rolex/day-date/white-roman-gold';
  //       }
  //       if (name.toLowerCase().includes('ice blue')) {
  //         return '/rolex/day-date/ice-blue-dial';
  //       }
  //     }
  //   }

  //   // Default fallback
  //   return '#';
  // };
// between 10 to 30
  let reviews = Math.floor(Math.random() * 20) + 10;

  return (
    <Link to={`/product/${id}/${reviews}`} className="block h-full">
      {/* <Link to={getProductUrl()} className="block h-full"> */}
      <div className="group relative h-full rounded-lg overflow-hidden bg-zinc-900 hover:bg-zinc-800 transition-all duration-300 border border-zinc-800 hover:border-gold-500/30">
        {isNew && (
          <span className="absolute top-3 left-3 z-10 bg-gold-500 text-black text-xs font-bold uppercase px-2 py-1 rounded">
            New
          </span>
        )}

        <div className="relative aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-4">
          <span className="text-gold-500 text-sm uppercase tracking-wider">{category}</span>
          <div className="flex items-center gap-2 mb-6">
            <div className="flex my-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-gold-500 fill-gold-500" />
              ))}
            </div>
            {/* Adding Radom reviews betwwen 20 to 30 */}
            <span className="text-gray-400">({reviews} Reviews)</span>
          </div>
          <h3 className="text-white font-serif text-lg mt-1 mb-2 line-clamp-2 min-h-[3.5rem]">{name}</h3>
          <div className="flex items-center justify-between">
            <p className="text-gray-300 font-medium">from £{price.toFixed(2)}</p>
            <span
              className="text-sm text-gray-400 underline hover:text-gold-500 transition-colors"
            >
              View Details
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
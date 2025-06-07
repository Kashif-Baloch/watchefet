import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Trash2, Plus, Minus } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/common/Button';
import { useCart } from '../context/CartContext';
import { useStripe } from '../hooks/useStripe';
import getProductId from './CartPage.utils';

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, getCartTotal } = useCart();
  const { createCheckoutSession } = useStripe();
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [unavailableItems, setUnavailableItems] = React.useState<string[]>([]);

  const getProductUrl = (name: string): string => {
    const cleanName = name.split(' - ')[0].trim();
    
    // Map product names to their respective URLs
    const urlMap: Record<string, string> = {
      'Datejust 41mm Blue Dial': '/rolex/datejust/blue-dial',
      'Datejust 41mm Black Dial 2025': '/rolex/datejust/black-dial',
      'Datejust 41mm Grey Diamond Dial': '/rolex/datejust/grey-dial',
      'Datejust 41mm Wimbledon Dial with Fluted Bezel': '/rolex/datejust/wimbledon-dial',
      'Datejust 41mm White Roman Dial': '/rolex/datejust/white-dial',
      'Datejust 41mm Fluted Bezel Roman Numerals': '/rolex/datejust/roman-dial',
      'Rolex Datejust Gold Diamond Dial Two-Tone Silver Gold Jubilee Fluted 41': '/rolex/datejust/gold-diamond-dial',
      'Rolex Datejust Gold Dial Diamond Two-Tone Silver Gold Oyster Fluted': '/rolex/datejust/gold-diamond-oyster-dial',
      'Rolex Datejust Grey Dial Diamond Silver Oyster Fluted': '/rolex/datejust/grey-diamond-oyster-dial',
      'Rolex Datejust Gold Champagne Dial Two-Tone Silver Gold Jubilee Fluted 41': '/rolex/datejust/gold-champagne-dial',
      'Rolex Datejust Gold Champagne Dial Two-Tone Silver Gold Oyster Fluted': '/rolex/datejust/gold-champagne-oyster-dial',
      'Rolex Datejust Blue Dial Champagne Silver Oyster Fluted': '/rolex/datejust/blue-oyster-dial',
      'Rolex Datejust Wimbledon Two-Tone Silver Gold Jubilee Fluted 41': '/rolex/datejust/wimbledon-two-tone',
      'Rolex Datejust Wimbledon Two-Tone Silver Gold Oyster Fluted 41': '/rolex/datejust/wimbledon-two-tone-oyster',
      'Rolex Datejust Brown Champagne Dial Two-Tone Silver Rose Jubilee Fluted': '/rolex/datejust/brown-dial',
      'Rolex Datejust Brown Dial Diamond Two-Tone Silver Rose Jubilee Fluted': '/rolex/datejust/brown-diamond-dial',
      'Rolex Datejust White Dial Champagne Silver Jubilee Fluted': '/rolex/datejust/white-champagne-dial',
      'Datejust 41mm Mother of Pearl Diamond Dial': '/rolex/datejust/mother-of-pearl-dial',
      'Datejust 41mm Mother of Pearl Diamond Dial Oyster': '/rolex/datejust/mother-of-pearl-oyster-dial',
      'Datejust 41mm Blue Dial Smooth Bezel': '/rolex/datejust/blue-smooth-dial',
      'Rolex Datejust Greendial Champagne Smooth Silver Jubilee': '/rolex/datejust/green-smooth-dial',
      'Rolex Datejust Gold Dial Diamond Two-Tone Silver Gold Oyster Fluted': '/rolex/datejust/gold-diamond-oyster-dial',
      'Rolex Datejust Green Dial Champagne Silver Oyster Domed': '/rolex/datejust/green-oyster-dial',
      'Rolex Day-Date Brown Dial Roman Rose Gold Fluted': '/rolex/day-date/brown-roman-rose-gold',
      'Rolex Day-Date White Roman Dial Gold Fluted': '/rolex/day-date/white-roman-gold',
      'Rolex Day-Date Ice Blue Champagne Dial Silver Smooth Bezel': '/rolex/day-date/ice-blue-dial',
      'Rolex Day-Date Gold Diamond-Set President': '/rolex/day-date/gold-diamond-president',
      'Rolex Day-Date Black Dial Champagne Gold Fluted': '/rolex/day-date/black-dial-gold'
    };

    return urlMap[cleanName] || '#';
  };

  const handleCheckout = async () => {
    try {
      setIsLoading(true);
      setError(null);
      setUnavailableItems([]);

      const unavailable: string[] = [];
      // const validCartItems = items
      //   .map(item => {
      //     try {
      //       // Extract the quality grade from the item name
      //       const qualityMatch = item.name.match(/(AAA Grade|AAAAA Grade|Super Clone|Premium)$/);
      //       const quality = qualityMatch ? qualityMatch[0] : 'Premium';
            
      //       // Get the base name without the quality
      //       const baseName = item.name.replace(/ - (AAA Grade|AAAAA Grade|Super Clone|Premium)$/, '');
            
      //       // Get the product ID based on the base name and quality
      //       const productId = getProductId(baseName, quality);
            
      //       if (!productId) {
      //         unavailable.push(item.name);
      //         return null;
      //       }

      //       return {
      //         productId,
      //         quantity: item.quantity
      //       };
      //     } catch (error) {
      //       console.error('Error processing item:', item.name, error);
      //       unavailable.push(item.name);
      //       return null;
      //     }
      //   })
      //   .filter((item): item is { productId: string; quantity: number } => item !== null);

      // if (unavailable.length > 0) {
      //   setUnavailableItems(unavailable);
      //   if (validCartItems.length === 0) {
      //     throw new Error('No valid items in cart');
      //   }
      // }

      if (items.length > 0) {
        await createCheckoutSession(items);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      setError(error instanceof Error ? error.message : 'An error occurred during checkout');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-black to-zinc-900 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link to="/" className="hover:text-gold-500">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gold-500">Shopping Cart</span>
            </div>

            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-8 text-center">
                Shopping Cart
              </h1>

              {items.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-400 mb-6">Your cart is empty</p>
                  <Link to="/collections">
                    <Button variant="primary">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              ) : (
                <>
                  <div className="space-y-6 mb-8">
                    {items.map((item) => (
                      <div 
                        key={`${item.id}-${item.quality}`}
                        className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800 flex items-center gap-6"
                      >
                        <Link 
                          to={getProductUrl(item.name)}
                          className="w-24 h-24 flex-shrink-0"
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </Link>
                        
                        <div className="flex-grow">
                          <Link 
                            to={getProductUrl(item.name)}
                            className="hover:text-gold-500 transition-colors"
                          >
                            <h3 className="text-lg font-medium text-white mb-1">
                              {item.name}
                            </h3>
                          </Link>
                          <p className="text-gold-500">£{item.price.toFixed(2)}</p>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 text-gray-400 hover:text-white transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 text-gray-400 hover:text-white transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                          </div>
                          
                          <button
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-lg text-white">Total</span>
                      <span className="text-2xl font-medium text-gold-500">
                        £{getCartTotal().toFixed(2)}
                      </span>
                    </div>

                    {unavailableItems.length > 0 && (
                      <div className="mb-4 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg text-amber-500 text-sm">
                        <p className="font-medium mb-2">Some items are currently unavailable:</p>
                        <ul className="list-disc list-inside">
                          {unavailableItems.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                        <p className="mt-2">Please remove these items or try again later.</p>
                      </div>
                    )}

                    {error && (
                      <div className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-500 text-sm">
                        {error}
                      </div>
                    )}

                    <Button
                      variant="primary"
                      fullWidth
                      onClick={handleCheckout}
                      disabled={isLoading}
                    >
                      {isLoading ? 'Processing...' : 'Proceed to Checkout'}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
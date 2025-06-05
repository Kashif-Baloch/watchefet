import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Package, RefreshCw, Box, FileCheck } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Button from '../../components/common/Button';
import { useCart } from '../../context/CartContext';

const RoyalOakPerpetualPage: React.FC = () => {
  const [mainImage, setMainImage] = useState('https://watchesoff5th.com/cdn/shop/products/audemars-piguet-royal-oak-perpetual-calendar-black-ceramic-black-dial-black-sub-dials-black-ceramic-bezel-ref26579ceoo1225ce01-480126_1280x.jpg?v=1692807584');
  const [includeBox, setIncludeBox] = useState(false);
  const [includeCertificate, setIncludeCertificate] = useState(false);
  const { addItem } = useCart();
  
  const images = [
    'https://watchesoff5th.com/cdn/shop/products/audemars-piguet-royal-oak-perpetual-calendar-black-ceramic-black-dial-black-sub-dials-black-ceramic-bezel-ref26579ceoo1225ce01-480126_1280x.jpg?v=1692807584',
    'https://watchesoff5th.com/cdn/shop/products/audemars-piguet-royal-oak-perpetual-calendar-black-ceramic-black-dial-black-sub-dials-black-ceramic-bezel-ref26579ceoo1225ce01-480127_1280x.jpg?v=1692807584',
    'https://watchesoff5th.com/cdn/shop/products/audemars-piguet-royal-oak-perpetual-calendar-black-ceramic-black-dial-black-sub-dials-black-ceramic-bezel-ref26579ceoo1225ce01-480128_1280x.jpg?v=1692807584',
    'https://watchesoff5th.com/cdn/shop/products/audemars-piguet-royal-oak-perpetual-calendar-black-ceramic-black-dial-black-sub-dials-black-ceramic-bezel-ref26579ceoo1225ce01-480129_1280x.jpg?v=1692807584',
  ];

  const calculateTotalPrice = () => {
    let total = 500; // Super Clone price
    if (includeBox) total += 49;
    if (includeCertificate) total += 29;
    return total;
  };

  const handleAddToCart = () => {
    const extras = [];
    if (includeBox) extras.push('Box');
    if (includeCertificate) extras.push('Certificate');
    
    addItem({
      id: Date.now(),
      name: `Royal Oak Perpetual Calendar - Black Ceramic${extras.length ? ` (+ ${extras.join(', ')})` : ''}`,
      price: calculateTotalPrice(),
      image: images[0],
      quality: 'Super Clone',
    });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-black to-zinc-900 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link to="/" className="hover:text-gold-500">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/audemars-piguet" className="hover:text-gold-500">Audemars Piguet</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gold-500">Royal Oak Perpetual Calendar Black Ceramic</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="max-w-lg mx-auto rounded-lg overflow-hidden bg-zinc-900">
                  <img
                    src={mainImage}
                    alt="Royal Oak Perpetual Calendar Black Ceramic"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setMainImage(image)}
                      className={`aspect-square rounded-lg overflow-hidden bg-zinc-900 border-2 transition-colors ${
                        mainImage === image ? 'border-gold-500' : 'border-transparent hover:border-gold-500/50'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Royal Oak Perpetual Calendar view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                  Royal Oak Perpetual Calendar - Black Ceramic
                </h1>
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold-500 fill-gold-500" />
                    ))}
                  </div>
                  <span className="text-gray-400">(18 Reviews)</span>
                </div>

                {/* Quality Info */}
                <div className="mb-8">
                  <div className="p-4 rounded-lg border border-gold-500 bg-gold-500/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-white">Super Clone</span>
                      <span className="text-gold-500">£500</span>
                    </div>
                    <p className="text-sm text-gray-400">Highest quality replica with Swiss clone movement</p>
                  </div>
                </div>

                {/* Additional Options */}
                <div className="mb-8">
                  <h3 className="text-lg font-medium text-white mb-4">Additional Options</h3>
                  <div className="space-y-4">
                    <button
                      onClick={() => setIncludeBox(!includeBox)}
                      className={`w-full p-4 rounded-lg border transition-all ${
                        includeBox
                          ? 'border-gold-500 bg-gold-500/10'
                          : 'border-zinc-700 hover:border-gold-500/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Box className="h-5 w-5 text-gold-500" />
                          <div className="text-left">
                            <span className="font-medium text-white">Add Box</span>
                            <p className="text-sm text-gray-400">Premium presentation box</p>
                          </div>
                        </div>
                        <span className="text-gold-500">£49</span>
                      </div>
                    </button>

                    <button
                      onClick={() => setIncludeCertificate(!includeCertificate)}
                      className={`w-full p-4 rounded-lg border transition-all ${
                        includeCertificate
                          ? 'border-gold-500 bg-gold-500/10'
                          : 'border-zinc-700 hover:border-gold-500/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <FileCheck className="h-5 w-5 text-gold-500" />
                          <div className="text-left">
                            <span className="font-medium text-white">Add Certificate</span>
                            <p className="text-sm text-gray-400">Authentication certificate</p>
                          </div>
                        </div>
                        <span className="text-gold-500">£29</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-lg">
                    <Package className="h-5 w-5 text-gold-500" />
                    <div>
                      <h4 className="font-medium text-white">Shipping</h4>
                      <p className="text-sm text-gray-400">2-10 Business Days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-zinc-900/50 rounded-lg">
                    <RefreshCw className="h-5 w-5 text-gold-500" />
                    <div>
                      <h4 className="font-medium text-white">Returns</h4>
                      <p className="text-sm text-gray-400">14 Day Returns</p>
                    </div>
                  </div>
                </div>

                {/* Add to Cart */}
                <Button 
                  variant="primary" 
                  size="lg" 
                  fullWidth
                  onClick={handleAddToCart}
                >
                  Add to Cart - £{calculateTotalPrice()}
                </Button>
              </div>
            </div>

            {/* Product Details */}
            <div className="mt-16">
              <h2 className="text-2xl font-serif font-bold text-white mb-6">Product Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-white mb-4">Specifications</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between py-2 border-b border-zinc-800">
                      <span className="text-gray-400">Case Size</span>
                      <span className="text-white">41mm</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-800">
                      <span className="text-gray-400">Movement</span>
                      <span className="text-white">Automatic</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-800">
                      <span className="text-gray-400">Case Material</span>
                      <span className="text-white">Black Ceramic</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-800">
                      <span className="text-gray-400">Water Resistance</span>
                      <span className="text-white">50m</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-800">
                      <span className="text-gray-400">Functions</span>
                      <span className="text-white">Perpetual Calendar</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-4">Description</h3>
                  <p className="text-gray-400 leading-relaxed">
                    The Royal Oak Perpetual Calendar Black Ceramic represents the pinnacle of 
                    Audemars Piguet's watchmaking expertise. This stunning timepiece features a 
                    sleek black ceramic case and bracelet, complemented by the iconic Royal Oak 
                    octagonal bezel. The perpetual calendar complication displays the day, date, 
                    month, and astronomical moon phase, while the black "Grande Tapisserie" dial 
                    adds depth and sophistication to this remarkable watch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RoyalOakPerpetualPage;
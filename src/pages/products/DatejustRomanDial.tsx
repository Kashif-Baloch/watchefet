import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Package, RefreshCw, Box } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Button from '../../components/common/Button';
import { useCart } from '../../context/CartContext';

interface QualityOption {
  name: string;
  price: number;
  description: string;
}

const qualityOptions: QualityOption[] = [
  {
    name: 'AAA Grade',
    price: 129,
    description: 'High-quality replica with standard movement',
  },
  {
    name: 'AAAAA Grade',
    price: 229,
    description: 'Premium replica with enhanced movement and finishing',
  },
  {
    name: 'Super Clone',
    price: 399,
    description: 'Highest quality replica with Swiss clone movement',
  },
];

const DatejustRomanDial: React.FC = () => {
  const [mainImage, setMainImage] = useState('https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-bluedial-roman-fluted-jubilee-41/datejust-bluedial-roman-fluted-jubilee-41.webp');
  const [selectedQuality, setSelectedQuality] = useState<QualityOption>(qualityOptions[0]);
  const [includeBox, setIncludeBox] = useState(true);
  const [includePremiumBox, setIncludePremiumBox] = useState(false);
  const { addItem } = useCart();
  
  const images = [
    'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-bluedial-roman-fluted-jubilee-41/datejust-bluedial-roman-fluted-jubilee-41.webp',
    'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-bluedial-roman-fluted-jubilee-41/2.jpg',
    'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-bluedial-roman-fluted-jubilee-41/3.jpg',
    'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-bluedial-roman-fluted-jubilee-41/4.jpg',
  ];

  const handleBoxSelection = (type: 'standard' | 'premium') => {
    if (type === 'standard') {
      setIncludeBox(true);
      setIncludePremiumBox(false);
    } else {
      setIncludeBox(false);
      setIncludePremiumBox(true);
    }
  };

  useEffect(() => {
    if (!includeBox && !includePremiumBox) {
      setIncludeBox(true);
    }
  }, [includeBox, includePremiumBox]);

  const handleAddToCart = () => {
    addItem({
      id: Date.now(),
      name: `Datejust 41mm Fluted Bezel Roman Numerals - ${selectedQuality.name}`,
      price: selectedQuality.price,
      image: images[0],
      quality: selectedQuality.name,
    });

    if (includePremiumBox) {
      addItem({
        id: Date.now() + 1,
        name: 'Premium Rolex Box with Certificate',
        price: 39,
        image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Box.jpg',
        quality: 'Premium',
      });
    }
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-black to-zinc-900 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link to="/" className="hover:text-gold-500">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/collections" className="hover:text-gold-500">Collections</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/rolex" className="hover:text-gold-500">Rolex</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/rolex/datejust" className="hover:text-gold-500">Datejust</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gold-500">Roman Numerals</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="max-w-lg mx-auto rounded-lg overflow-hidden bg-zinc-900">
                  <img
                    src={mainImage}
                    alt="Datejust 41mm Fluted Bezel Roman Numerals"
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
                        alt={`Datejust 41mm Fluted Bezel Roman Numerals view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                  Datejust 41mm Fluted Bezel Roman Numerals
                </h1>
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold-500 fill-gold-500" />
                    ))}
                  </div>
                  <span className="text-gray-400">(24 Reviews)</span>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-medium text-white mb-4">Select Quality</h3>
                  <div className="space-y-4">
                    {qualityOptions.map((option) => (
                      <button
                        key={option.name}
                        onClick={() => setSelectedQuality(option)}
                        className={`w-full p-4 rounded-lg border transition-all ${
                          selectedQuality.name === option.name
                            ? 'border-gold-500 bg-gold-500/10'
                            : 'border-zinc-700 hover:border-gold-500/50'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium text-white">{option.name}</span>
                          <span className="text-gold-500">£{option.price}</span>
                        </div>
                        <p className="text-sm text-gray-400 text-left">{option.description}</p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-medium text-white mb-4">Box Selection (Required)</h3>
                  <div className="space-y-4">
                    <button
                      onClick={() => handleBoxSelection('standard')}
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
                            <span className="font-medium text-white">Standard Box</span>
                            <p className="text-sm text-gray-400">Standard presentation box</p>
                          </div>
                        </div>
                        <span className="text-green-500">FREE</span>
                      </div>
                    </button>

                    <button
                      onClick={() => handleBoxSelection('premium')}
                      className={`w-full p-4 rounded-lg border transition-all ${
                        includePremiumBox
                          ? 'border-gold-500 bg-gold-500/10'
                          : 'border-zinc-700 hover:border-gold-500/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Box className="h-5 w-5 text-gold-500" />
                          <div className="text-left">
                            <span className="font-medium text-white">Premium Box & Certificate</span>
                            <p className="text-sm text-gray-400">Premium box with authentication certificate</p>
                          </div>
                        </div>
                        <span className="text-gold-500">£39</span>
                      </div>
                    </button>
                  </div>
                </div>

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

                <Button 
                  variant="primary" 
                  size="lg" 
                  fullWidth
                  onClick={handleAddToCart}
                >
                  Add to Cart - £{selectedQuality.price + (includePremiumBox ? 39 : 0)}
                </Button>
              </div>
            </div>

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
                      <span className="text-white">904L Steel</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-800">
                      <span className="text-gray-400">Water Resistance</span>
                      <span className="text-white">100m</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-zinc-800">
                      <span className="text-gray-400">Bracelet</span>
                      <span className="text-white">Jubilee</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white mb-4">Description</h3>
                  <p className="text-gray-400 leading-relaxed">
                    The Rolex Datejust 41 with Roman numerals is a perfect blend of classic elegance and modern sophistication. 
                    This model features a stunning blue dial with applied Roman numerals, creating a timeless and refined appearance. 
                    The 41mm case provides excellent presence on the wrist, while the signature Jubilee bracelet ensures maximum comfort. 
                    The fluted bezel adds a distinctive touch of luxury that has become synonymous with the Datejust collection.
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

export default DatejustRomanDial;
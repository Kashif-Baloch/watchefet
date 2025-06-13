import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/product/ProductCard';
import SectionTitle from '../components/common/SectionTitle';
import { ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const cartierWatches = [
  {
    id: 1,
    name: 'Santos de Cartier Gold Bezel Silver',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Cartier/cartier-santos-goldbezel-silver.png',
    category: 'Cartier',
    isNew: false,
  },
  {
    id: 2,
    name: 'Tank Must Large',
    price: 175,
    image: 'https://www.watchfinder.co.uk/images/high-res/Cartier/Tank%20Must/WSTA0041/169904/2.jpg',
    category: 'Cartier',
    isNew: false,
  },
  {
    id: 3,
    name: 'Ballon Bleu 42mm',
    price: 225,
    image: 'https://www.watchfinder.co.uk/images/high-res/Cartier/Ballon%20Bleu/WSBB0025/169911/2.jpg',
    category: 'Cartier',
    isNew: false,
  },
  {
    id: 4,
    name: 'Panthère de Cartier',
    price: 215,
    image: 'https://www.watchfinder.co.uk/images/high-res/Cartier/Panthère/WGPN0009/169918/2.jpg',
    category: 'Cartier',
    isNew: false,
  },
  {
    id: 5,
    name: 'Drive de Cartier',
    price: 245,
    image: 'https://www.watchfinder.co.uk/images/high-res/Cartier/Drive/WSNM0009/169925/2.jpg',
    category: 'Cartier',
    isNew: false,
  },
  {
    id: 6,
    name: 'Tank Américaine',
    price: 235,
    image: 'https://www.watchfinder.co.uk/images/high-res/Cartier/Tank%20Américaine/WSTA0044/169932/2.jpg',
    category: 'Cartier',
    isNew: false,
  },
  {
    id: 7,
    name: 'Pasha de Cartier',
    price: 255,
    image: 'https://www.watchfinder.co.uk/images/high-res/Cartier/Pasha/WSPA0009/169939/2.jpg',
    category: 'Cartier',
    isNew: false,
  },
  {
    id: 8,
    name: 'Santos-Dumont',
    price: 185,
    image: 'https://www.watchfinder.co.uk/images/high-res/Cartier/Santos-Dumont/WSSA0022/169946/2.jpg',
    category: 'Cartier',
    isNew: false,
  }
];

const CartierPage: React.FC = () => {
   const { setProducts } = useCart()
  
    useEffect(() => {
      // console.log(womensAPWatches);
      // 
      
    setProducts({productList: cartierWatches, category: 'cartier'})
      // setProducts(cartierWatches)
    }, []);
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-black to-zinc-900 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link to="/" className="hover:text-gold-500">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <Link to="/collections" className="hover:text-gold-500">Collections</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gold-500">Cartier</span>
            </div>
            
            <SectionTitle
              title="Cartier Collection"
              subtitle="Explore our curated selection of premium Cartier timepieces"
              centered
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {cartierWatches.map((watch) => (
                <ProductCard key={watch.id} product={watch} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartierPage;
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/product/ProductCard';
import SectionTitle from '../components/common/SectionTitle';
import { ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const omegaWatches = [
  {
    id: 1,
    name: 'Seamaster Diver 300M',
    price: 199,
    image: 'https://www.watchfinder.co.uk/images/high-res/Omega/Seamaster/210.30.42.20.03.001/169953/2.jpg',
    category: 'Omega',
    imagesList : [],
    description: "",
    isNew: false,
  },
  {
    id: 2,
    name: 'Speedmaster Moonwatch Professional',
    price: 225,
    image: 'https://www.watchfinder.co.uk/images/high-res/Omega/Speedmaster/310.30.42.50.01.001/169960/2.jpg',
    category: 'Omega',
    imagesList : [],
    description: "",
    isNew: false,
  },
  {
    id: 3,
    name: 'Constellation Co-Axial',
    price: 185,
    image: 'https://www.watchfinder.co.uk/images/high-res/Omega/Constellation/131.33.41.21.06.001/169967/2.jpg',
    category: 'Omega',
    imagesList : [],
    description: "",
    isNew: false,
  },
  {
    id: 4,
    name: 'Aqua Terra 150M',
    price: 195,
    image: 'https://www.watchfinder.co.uk/images/high-res/Omega/Seamaster%20Aqua%20Terra/220.10.41.21.03.001/169974/2.jpg',
    category: 'Omega',
    imagesList : [],
    description: "",
    isNew: false,
  },
  {
    id: 5,
    name: 'Planet Ocean 600M',
    price: 235,
    image: 'https://www.watchfinder.co.uk/images/high-res/Omega/Seamaster%20Planet%20Ocean/215.30.44.21.01.001/169981/2.jpg',
    category: 'Omega',
    imagesList : [],
    description: "",
    isNew: false,
  },
  {
    id: 6,
    name: 'De Ville Prestige',
    price: 175,
    image: 'https://www.watchfinder.co.uk/images/high-res/Omega/De%20Ville%20Prestige/424.10.40.20.02.001/169988/2.jpg',
    category: 'Omega',
    imagesList : [],
    description: "",
    isNew: false,
  },
  {
    id: 7,
    name: 'Seamaster Heritage 300',
    price: 215,
    image: 'https://www.watchfinder.co.uk/images/high-res/Omega/Seamaster%20300/234.10.39.20.01.001/169995/2.jpg',
    category: 'Omega',
    imagesList : [],
    description: "",
    isNew: false,
  },
  {
    id: 8,
    name: 'Speedmaster Racing',
    price: 245,
    image: 'https://www.watchfinder.co.uk/images/high-res/Omega/Speedmaster%20Racing/329.30.44.51.01.001/170002/2.jpg',
    category: 'Omega',
    imagesList : [],
    description: "",
    isNew: false,
  }
];

const OmegaPage: React.FC = () => {
   const { setProducts } = useCart()
  
    useEffect(() => {
      // console.log(womensAPWatches);
      // 
      localStorage.setItem('productList', JSON.stringify(omegaWatches))
      localStorage.setItem('category', 'omega')
    setProducts({productList: omegaWatches, category: 'omega'})
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
              <span className="text-gold-500">Omega</span>
            </div>
            
            <SectionTitle
              title="Omega Collection"
              subtitle="Explore our curated selection of premium Omega timepieces"
              centered
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {omegaWatches.map((watch) => (
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

export default OmegaPage;
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import ProductCard from '../../../components/product/ProductCard';
import SectionTitle from '../../../components/common/SectionTitle';
import { useCart } from '../../../context/CartContext';

const nautilusWatches = [
  {
    id: 1,
    name: 'Nautilus Blue Dial Silver',
    price: 275,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-bluedial-silver/patek-nautilus-bluedial-silver.png',
    category: 'Patek Philippe',
    imagesList : [],
    description:"",
    isNew: true,
  },
  {
    id: 2,
    name: 'Nautilus Brown Dial Rose Gold',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-browndial-rosegold/patek-nautilus-browndial-rosegold.png',
    category: 'Patek Philippe', 
    imagesList : [],
    description:"",
    isNew: false,
  },
  {
    id: 3,
    name: 'Nautilus Green Dial Silver',
    price: 275,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-greendial-silver/patek-nautilus-greendial-silver.png',
    category: 'Patek Philippe',
    imagesList : [],
    description:"",
    isNew: true,
  },
  {
    id: 4,
    name: 'Nautilus Tiffany Blue Dial Silver',
    price: 275,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-tiffanydial-silver/patek-nautilus-tiffanydial-silver.png',
    category: 'Patek Philippe',
    imagesList : [],
    description:"",
    isNew: false,
  },
  {
    id: 5,
    name: 'Nautilus White Dial Silver',
    price: 275,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-whitedial-silver/patek-nautilus-whitedial-silver.png',
    category: 'Patek Philippe',
    imagesList : [],
    description:"",
    isNew: true,
  }
];

const NautilusPage: React.FC = () => {
   const { setProducts } = useCart()
  
    useEffect(() => {
      // console.log(womensAPWatches);
      // 
      localStorage.setItem('productList', JSON.stringify(nautilusWatches))
      localStorage.setItem('category', 'nautilus')
    setProducts({productList: nautilusWatches, category: 'nautilus'})
      // setProducts(nautilusWatches)
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
              <Link to="/patek-philippe" className="hover:text-gold-500">Patek Philippe</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gold-500">Nautilus</span>
            </div>

            <SectionTitle
              title="Patek Philippe Nautilus Collection"
              subtitle="The iconic luxury sports watch that revolutionized watchmaking"
              centered
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {nautilusWatches.map((watch) => (
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

export default NautilusPage;
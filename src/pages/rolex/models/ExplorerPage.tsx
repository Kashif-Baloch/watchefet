import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import ProductCard from '../../../components/product/ProductCard';
import SectionTitle from '../../../components/common/SectionTitle';
import { useCart } from '../../../context/CartContext';

const explorerWatches = [
  {
    id: 1,
    reviews: 25,
    name: 'Explorer II Black Dial',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Explorer%20II/explorer-blackdial-silveroyster/explorer-blackdial-silveroyster.jpg',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Explorer%20II/explorer-blackdial-silveroyster/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Explorer%20II/explorer-blackdial-silveroyster/back.jpg",
    ],
    description :"The Rolex Explorer II Black Dial is a rugged yet refined companion for adventurers. Housed in a 42mm Oystersteel case, the bold black dial is paired with a 24-hour bezel, perfect for navigating extreme environments. The Oyster bracelet ensures durability and comfort, making this timepiece a reliable choice for explorers who value precision and style.",
    isNew: false,
  },
  {
    id: 2,
    reviews: 29,
    name: 'Explorer II White Dial',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Explorer%20II/explorer-whitedial-oyster/explorer-whitedial-oyster.png',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Explorer%20II/explorer-whitedial-oyster/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Explorer%20II/explorer-whitedial-oyster/back.jpg",
    ],
    description :"The Rolex Explorer II White Dial combines functionality with timeless elegance. Encased in a 42mm Oystersteel case, the crisp white dial, paired with a 24-hour bezel, offers clarity and versatility for adventurers. The Oyster bracelet provides robust comfort, making this watch an ideal companion for those who explore with confidence and sophistication.",
    isNew: false,
  }
];

const ExplorerPage: React.FC = () => {
   const { setProducts } = useCart()
  
    useEffect(() => {
      // console.log(womensAPWatches);
      // 
      localStorage.setItem('productList', JSON.stringify(explorerWatches))
    localStorage.setItem('category', 'explorer') 
    setProducts({productList: explorerWatches, category: 'explorer'})
      // setProducts(explorerWatches)
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
              <Link to="/rolex" className="hover:text-gold-500">Rolex</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gold-500">Explorer II</span>
            </div>

            <SectionTitle
              title="Rolex Explorer Collection"
              subtitle="The robust timepiece designed for cave explorers and polar expeditions"
              centered
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {explorerWatches.map((watch) => (
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

export default ExplorerPage;
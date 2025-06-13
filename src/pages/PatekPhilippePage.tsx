import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/product/ProductCard';
import SectionTitle from '../components/common/SectionTitle';
import { ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const patekWatches = [
  {
    id: 1,
    name: 'Nautilus Tiffany Blue',
    price: 275,
    image: 'https://www.auctionhouse.co.th/pub/media/catalog/product/cache/ecd051e9670bd57df35c8f0b122d8aea/m/6/m612x918_8__10.jpg',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-bluedial-silver/side.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-bluedial-silver/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-bluedial-silver/back.jpg"
    ],
    description :"The Patek Philippe Nautilus Blue Dial Silver is the epitome of refined elegance and sporty sophistication. Housed in a 40mm stainless steel case, the iconic blue dial with its horizontal embossed pattern exudes timeless charm, complemented by a rounded octagonal bezel. The stainless steel bracelet ensures exceptional comfort and durability, making this timepiece a versatile masterpiece for discerning individuals.",
    isNew: false,
  },
  {
    id: 2,
    name: 'Nautilus Rose Gold',
    price: 299,
    image: 'https://www.watchfinder.co.uk/images/high-res/Patek%20Philippe/Nautilus/5711R-001/169799/2.jpg',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-browndial-rosegold/angle.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-browndial-rosegold/angle2.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-browndial-rosegold/clasp.webp"
    ],
    description :`The Patek Philippe Nautilus Brown Dial Rose Gold radiates warmth and unparalleled luxury. Encased in a 40mm 18k rose gold case, the rich brown dial with its signature embossed texture harmonizes beautifully with the rose gold bezel, creating a sophisticated aesthetic. The rose gold bracelet offers supreme comfort, making this watch a prestigious choice for those who value elegance and heritage.`,
    isNew: false,
  },
  {
    id: 3,
    name: 'Aquanaut Travel Time',
    price: 285,
    image: 'https://www.watchfinder.co.uk/images/high-res/Patek%20Philippe/Aquanaut/5164A-001/169806/2.jpg',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-greendial-silver/side.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-greendial-silver/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-greendial-silver/back.jpg"
    ],
    description :`The Patek Philippe Nautilus Green Dial Silver combines bold modernity with timeless refinement. Housed in a 40mm stainless steel case, the vibrant green dial with its horizontal embossed pattern is paired with a sleek stainless steel bezel, offering a fresh and dynamic look. The stainless steel bracelet ensures lasting comfort, making this timepiece ideal for those who embrace individuality and style.`,
    isNew: false,
  },
  {
    id: 4,
    name: 'Calatrava White Gold',
    price: 245,
    image: 'https://www.watchfinder.co.uk/images/high-res/Patek%20Philippe/Calatrava/5196G-001/169813/2.jpg',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-tiffanydial-silver/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-tiffanydial-silver/back.jpg"
    ],
    description :`The Patek Philippe Calatrava Gold Dial Chronograph is a bold expression of modern sophistication. Encased in a 40mm 18k yellow gold case, the radiant gold "Grande Tapisserie" dial is complemented by a matching gold bezel, creating a cohesive and luxurious aesthetic. The gold bracelet offers unmatched comfort, making this chronograph a prestigious choice for those who demand excellence.`,
    isNew: false,
  },
  {
    id: 5,
    name: 'Grand Complications Perpetual Calendar',
    price: 325,
    image: 'https://www.watchfinder.co.uk/images/high-res/Patek%20Philippe/Grand%20Complications/5140P-001/169820/2.jpg',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-whitedial-silver/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-whitedial-silver/back.jpg"
    ],
    description :`The Patek Philippe Nautilus White Dial Silver exudes crisp elegance and understated luxury. Housed in a 40mm stainless steel case, the pristine white dial with its horizontal embossed pattern is paired with a sleek stainless steel bezel, creating a clean and timeless aesthetic. The stainless steel bracelet ensures durability and comfort, making this timepiece a refined choice for any occasion.`,
    isNew: false,
  },
  {
    id: 6,
    name: 'Complications Annual Calendar',
    price: 299,
    image: 'https://www.watchfinder.co.uk/images/high-res/Patek%20Philippe/Complications/5396R-001/169827/2.jpg',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-whitedial-silver/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-whitedial-silver/back.jpg"
    ],
    description :`The Patek Philippe Nautilus White Dial Silver exudes crisp elegance and understated luxury. Housed in a 40mm stainless steel case, the pristine white dial with its horizontal embossed pattern is paired with a sleek stainless steel bezel, creating a clean and timeless aesthetic. The stainless steel bracelet ensures durability and comfort, making this timepiece a refined choice for any occasion.`,
    isNew: false,
  },
  {
    id: 7,
    name: 'Twenty~4 Automatic',
    price: 235,
    image: 'https://www.watchfinder.co.uk/images/high-res/Patek%20Philippe/Twenty~4/7300R-001/169834/2.jpg',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-whitedial-silver/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-whitedial-silver/back.jpg"
    ],
    description :`The Patek Philippe Nautilus White Dial Silver exudes crisp elegance and understated luxury. Housed in a 40mm stainless steel case, the pristine white dial with its horizontal embossed pattern is paired with a sleek stainless steel bezel, creating a clean and timeless aesthetic. The stainless steel bracelet ensures durability and comfort, making this timepiece a refined choice for any occasion.`,  
    isNew: false,
  },
  {
    id: 8,
    name: 'Gondolo Rose Gold',
    price: 265,
    image: 'https://www.watchfinder.co.uk/images/high-res/Patek%20Philippe/Gondolo/5124R-001/169841/2.jpg',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-whitedial-silver/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-whitedial-silver/back.jpg"
    ],
    description :`The Patek Philippe Nautilus White Dial Silver exudes crisp elegance and understated luxury. Housed in a 40mm stainless steel case, the pristine white dial with its horizontal embossed pattern is paired with a sleek stainless steel bezel, creating a clean and timeless aesthetic. The stainless steel bracelet ensures durability and comfort, making this timepiece a refined choice for any occasion.`,  
    isNew: false,
  }
];

const PatekPhilippePage: React.FC = () => {

   const { setProducts } = useCart()
  
    useEffect(() => {
      localStorage.setItem('productList', JSON.stringify(patekWatches))
      localStorage.setItem('category', 'patek')
    setProducts({productList: patekWatches, category: 'patek'})
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
              <span className="text-gold-500">Patek Philippe</span>
            </div>
            
            <SectionTitle
              title="Patek Philippe Collection"
              subtitle="Experience our finest selection of premium Patek Philippe timepieces"
              centered
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {patekWatches.map((watch) => (
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

export default PatekPhilippePage;
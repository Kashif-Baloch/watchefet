import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import ProductCard from '../../../components/product/ProductCard';
import SectionTitle from '../../../components/common/SectionTitle';
import { useCart } from '../../../context/CartContext';

const deepseaWatches = [
  {
    id: 1,
    reviews: 19,
    name: 'Deepsea Blue Dial Gold',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/SeaDweller%20Deepsea/deepsea-bluedial-bluebezel-goldoyster/deepsea-bluedial-bluebezel-goldoyster.png',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/SeaDweller%20Deepsea/deepsea-bluedial-bluebezel-goldoyster/side",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/SeaDweller%20Deepsea/deepsea-bluedial-bluebezel-goldoyster/clasp"
    ],
    description :"The Rolex Deepsea Blue Dial Gold is a pinnacle of luxury and extreme durability. Housed in a 44mm 18k yellow gold case, the vibrant blue dial transitions beautifully, complemented by a robust bezel designed for deep-sea exploration. The Oyster bracelet in gold ensures luxurious comfort, making this timepiece a bold statement for those who conquer the depths in style.",
    isNew: true,
  },
  {
    id: 2,
    reviews: 16,
    name: 'Deepsea Lime Black Dial',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/SeaDweller%20Deepsea/deepsea-limeblackdial-silveroyster/deepsea-limeblackdial-silveroyster.webp',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/SeaDweller%20Deepsea/deepsea-limeblackdial-silveroyster/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/SeaDweller%20Deepsea/deepsea-limeblackdial-silveroyster/back.webp"
    ],
    description :"The Rolex Deepsea Lime Black Dial is a bold icon of underwater exploration. Encased in a 44mm Oystersteel case, the striking black dial with lime green accents is paired with a robust Cerachrom bezel, designed for extreme conditions. The Oyster bracelet ensures durability and comfort, making this watch a standout for adventurous spirits.",
    isNew: false,
  },
  {
    id: 3,
    reviews: 22,
    name: 'Sea-Dweller Black Dial Two-Tone',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/SeaDweller%20Deepsea/seadweller-blackdial-2tonesilvergold-oyster/seadweller-blackdial-2tonesilvergold-oyster.png',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/SeaDweller%20Deepsea/seadweller-blackdial-2tonesilvergold-oyster/clasp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/SeaDweller%20Deepsea/seadweller-blackdial-2tonesilvergold-oyster/back"
    ],
    description :"The Rolex Sea-Dweller Black Dial Two-Tone blends rugged performance with refined elegance. Housed in a 43mm Oystersteel and 18k yellow gold case, the sleek black dial is paired with a robust bezel, perfect for deep-sea diving. The Oyster bracelet in two-tone offers exceptional comfort, making this timepiece a versatile choice for adventurers and connoisseurs alike.",
    isNew: true,
  },
  {
    id: 4,
    reviews: 28,
    name: 'Sea-Dweller Black Dial',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/SeaDweller%20Deepsea/seadweller-blackdial-silveroyster/seadweller-blackdial-silveroyster.jpg',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/SeaDweller%20Deepsea/seadweller-blackdial-silveroyster/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/SeaDweller%20Deepsea/seadweller-blackdial-silveroyster/back.webp"
    ],
    description :"The Rolex Sea-Dweller Black Dial is a testament to durability and precision. Encased in a 43mm Oystersteel case, the deep black dial is complemented by a robust Cerachrom bezel, designed for underwater exploration. The Oyster bracelet ensures lasting comfort and resilience, making this watch an iconic choice for those who venture into the abyss.",
    isNew: false,
  }
];

const DeepseaPage: React.FC = () => {
   const { setProducts } = useCart()
  
    useEffect(() => {
      // console.log(womensAPWatches);
      // 
      localStorage.setItem('productList', JSON.stringify(deepseaWatches))
      localStorage.setItem('category', 'deepsea')
    setProducts({productList: deepseaWatches, category: 'deepsea'})
      // setProducts(deepseaWatches)
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
              <span className="text-gold-500">Sea-Dweller & Deepsea</span>
            </div>

            <SectionTitle
              title="Rolex Sea-Dweller & Deepsea Collection"
              subtitle="The ultimate professional diver's watch, waterproof to extreme depths"
              centered
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {deepseaWatches.map((watch) => (
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

export default DeepseaPage;
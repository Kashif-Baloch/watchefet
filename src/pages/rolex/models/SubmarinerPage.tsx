import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import ProductCard from '../../../components/product/ProductCard';
import SectionTitle from '../../../components/common/SectionTitle';
import { useCart } from '../../../context/CartContext';

const submarinerWatches = [
  {
    id: 1,
    name: 'Submariner Black Dial Two-Tone',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-2tonesilvergold/submariner-blackdial-2tonesilvergold',
    category: 'Rolex',
    imagesList : [
      'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-2tonesilvergold/side.jpg',
      'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-2tonesilvergold/clasp.webp',
    ],
    description: 'The Rolex Submariner Black Dial Two-Tone is a perfect blend of rugged functionality and refined elegance. Housed in a 41mm case, the sleek black dial exudes timeless sophistication, complemented by a two-tone Oystersteel and 18k yellow gold construction. The Oyster bracelet ensures exceptional comfort and durability, while the unidirectional rotatable bezel adds a sporty yet luxurious touch, ideal for both diving and formal occasions.',
    isNew: true,
  },
  {
    id: 2,
    name: 'Submariner Black Dial Blue Bezel',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-bluebezel-silver/submariner-blackdial-bluebezel-silver',
    category: 'Rolex',
    imagesList : [
      'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-bluebezel-silver/back.webp',
      'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-bluebezel-silver/clasp.webp',
    ],
    description: 'The Rolex Submariner Black Dial Blue Bezel combines bold style with unparalleled performance. Its 41mm Oystersteel case frames a striking black dial, paired with a vibrant blue Cerachrom bezel that enhances its adventurous spirit. The Oyster bracelet offers robust comfort, making this timepiece a versatile companion for underwater exploration or sophisticated settings, embodying Rolex’s legacy of precision and elegance.',
    isNew: false,
  },
  {
    id: 3,
    name: 'Submariner Black Dial Green Bezel',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-greenbezel-silver/submariner-blackdial-greenbezel-silver',
    category: 'Rolex',
    imagesList : [
    "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-greenbezel-silver/back.webp",
    "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-greenbezel-silver/clasp.webp"

    ],
    description: 'The Rolex Submariner Black Dial Green Bezel is a striking icon of adventure and style. Encased in a 41mm Oystersteel case, the deep black dial contrasts vividly with the distinctive green Cerachrom bezel, evoking a sense of bold exploration. The Oyster bracelet ensures enduring comfort and durability, making this watch a standout choice for those who embrace both function and flair.',
    isNew: true,
  },
  {
    id: 4,
    name: 'Submariner Blue Dial Two-Tone',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-bluedial-bluebezel-2tonesilvergold/submariner-bluedial-bluebezel-2tonesilvergold.png',
    category: 'Rolex',
    imagesList : [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-bluedial-bluebezel-2tonesilvergold/side.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-bluedial-bluebezel-2tonesilvergold/clasp.webp"

    ],
    description: 'The Rolex Submariner Blue Dial Two-Tone exudes sophistication with its luxurious 41mm case in Oystersteel and 18k yellow gold. The radiant blue dial, paired with a matching blue Cerachrom bezel, creates a captivating aesthetic that balances elegance and sportiness. The Oyster bracelet provides exceptional comfort, making this timepiece a versatile masterpiece for any occasion, from the deep sea to the boardroom.',
    isNew: false,
  },
  {
    id: 5,
    name: 'Submariner Black Dial',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-blackbezel-silver/submariner-blackdial-blackbezel-silver.jpg',
    category: 'Rolex',
    imagesList : [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-blackbezel-silver/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-blackbezel-silver/back.webp"
    ],
    description: 'The Rolex Submariner Black Dial is the epitome of timeless design and rugged reliability. Housed in a 41mm Oystersteel case, the sleek black dial offers a clean, versatile look, enhanced by a matching black Cerachrom bezel. The Oyster bracelet ensures comfort and resilience, making this iconic timepiece a perfect companion for adventurers and connoisseurs of classic style alike.',
    isNew: true,
  },
  {
    id: 6,
    name: 'Submariner Blue Dial Blue Bezel Gold',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-bluedial-bluebezel-gold/submariner-bluedial-bluebezel-gold.png',
    category: 'Rolex',
    imagesList : [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-bluedial-bluebezel-gold/back%20open%20clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-bluedial-bluebezel-gold/clasp.webp"
    ],
    description: 'The Rolex Submariner Blue Dial Blue Bezel Gold is a pinnacle of luxury and performance. Crafted in a 41mm 18k yellow gold case, the vibrant blue dial harmonizes with a matching blue Cerachrom bezel, exuding opulence and precision. The Oyster bracelet in gold offers unmatched comfort and elegance, making this watch a bold statement for those who demand the finest in craftsmanship.',
    isNew: true,
  },
  {
    id: 7,
    name: 'Submariner Black Dial Black Bezel Gold',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-blackbezel-gold/submariner-blackdial-blackbezel-gold',
    category: 'Rolex',
    imagesList : [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-blackbezel-gold/side.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-blackbezel-gold/back%20open%20clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-blackbezel-gold/clasp.webp"
    ],
    description: 'The Rolex Submariner Black Dial Black Bezel Gold radiates prestige and durability. Encased in a 41mm 18k yellow gold case, the sleek black dial is paired with a matching black Cerachrom bezel, creating a sophisticated yet robust aesthetic. The Oyster bracelet in gold ensures luxurious comfort, making this timepiece a timeless choice for those who value elegance and adventure.',
    isNew: true,
  }
];

const SubmarinerPage: React.FC = () => {
   const { setProducts } = useCart()
  
    useEffect(() => {
      // console.log(womensAPWatches);
      // 
      localStorage.setItem('productList', JSON.stringify(submarinerWatches))
      localStorage.setItem('category', 'submariner')
    setProducts({productList: submarinerWatches, category: 'submariner'})
      // setProducts(submarinerWatches)
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
              <span className="text-gold-500">Submariner</span>
            </div>

            <SectionTitle
              title="Rolex Submariner Collection"
              subtitle="The ultimate diving watch, waterproof and highly reliable"
              centered
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {submarinerWatches.map((watch) => (
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

export default SubmarinerPage;
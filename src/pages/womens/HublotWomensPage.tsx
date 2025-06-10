import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ProductCard from '../../components/product/ProductCard';
import SectionTitle from '../../components/common/SectionTitle';
import { useCart } from '../../context/CartContext';

const womensHublotWatches = [
  {
    id: 1,
    name: 'Classic Fusion Black Dial Diamond Bezel',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-blackdial-diamondbezel-blackleather/hublot-classicfusion-blackdial-diamondbezel-blackleather.png',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-blackdial-diamondbezel-blackleather/clasp.jpeg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-blackdial-diamondbezel-blackleather/back.jpeg",
    ],  
    description :"The Hublot Classic Fusion Black Dial Diamond Bezel is a striking embodiment of modern luxury and refined elegance. Housed in a 42mm titanium case, the sleek black sunray dial exudes timeless sophistication, complemented by a dazzling diamond-set bezel that adds a touch of opulence. The black leather strap ensures contemporary comfort, making this timepiece a versatile masterpiece for those who value bold style.",
    isNew: true,
  },
  {
    id: 2,
    name: 'Classic Fusion Green Dial Diamond Bezel',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-greendial-diamondbezel-greenleather/hublot-classicfusion-greendial-diamondbezel-greenleather.png',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-greendial-diamondbezel-greenleather/side.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-greendial-diamondbezel-greenleather/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-greendial-diamondbezel-greenleather/back.jpg",
    ],
    description :"The Hublot Classic Fusion Green Dial Diamond Bezel radiates vibrant sophistication and cutting-edge design. Encased in a 42mm titanium case, the bold green sunray dial is paired with a sparkling diamond-set bezel, creating a dynamic and luxurious aesthetic. The green leather strap offers modern comfort, making this watch a perfect choice for those who embrace individuality and elegance.",
    isNew: false,
  },
  {
    id: 3,
    name: 'Classic Fusion Iced Out Gold',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-icedoutgold-blackleather/hublot-classicfusion-icedoutgold-blackleather.png',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-icedoutgold-blackleather/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-icedoutgold-blackleather/back.webp",
    ],
    description :"The Hublot Classic Fusion Iced Out Gold is the pinnacle of opulence and avant-garde craftsmanship. Housed in a 42mm 18k yellow gold case, the fully diamond-encrusted dial and bezel sparkle with unmatched brilliance, exuding extravagant luxury. The black leather strap provides a striking contrast and supreme comfort, making this timepiece a bold statement for those who demand the finest.",
    isNew: true,
  },
  {
    id: 4,
    name: 'Classic Fusion Iced Out Silver',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-icedoutsilver-blackleather/hublot-classicfusion-icedoutsilver-blackleather.png',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-icedoutsilver-blackleather/angle.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-icedoutsilver-blackleather/angle2.jpg",
    ],
    description :"The Hublot Classic Fusion Iced Out Silver is a dazzling fusion of modern elegance and sparkling luxury. Encased in a 42mm titanium case, the diamond-encrusted dial and bezel radiate brilliance, creating a sleek and opulent aesthetic. The black rubber strap ensures contemporary comfort, making this watch a captivating choice for those who embrace refined glamour.",
    isNew: true,
  },
  {
    id: 5,
    name: 'Classic Fusion Pink Dial Diamond Bezel',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-pinkdial-diamondbezel-pinkleather/hublot-classicfusion-pinkdial-diamondbezel-pinkleather.jpg',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-pinkdial-diamondbezel-pinkleather/close%20up.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-pinkdial-diamondbezel-pinkleather/clasp.jpg",
    ],
    description :"The Hublot Classic Fusion Pink Dial Diamond Bezel exudes playful elegance and luxurious charm. Housed in a 42mm titanium case, the soft pink sunray dial is complemented by a sparkling diamond-set bezel, creating a vibrant yet sophisticated aesthetic. The black rubber strap offers modern comfort, making this timepiece ideal for those who value bold femininity and style.",
    isNew: false,
  },
  {
    id: 6,
    name: 'Classic Fusion White Dial Diamond Bezel Black Leather',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-whitedial-diamondbezel-blackleather/hublot-classicfusion-whitedial-diamondbezel-blackleather.png',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-pinkdial-diamondbezel-pinkleather/close%20up.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-pinkdial-diamondbezel-pinkleather/clasp.jpg",
    ],
    description :"The Hublot Classic Fusion Pink Dial Diamond Bezel exudes playful elegance and luxurious charm. Housed in a 42mm titanium case, the soft pink sunray dial is complemented by a sparkling diamond-set bezel, creating a vibrant yet sophisticated aesthetic. The black rubber strap offers modern comfort, making this timepiece ideal for those who value bold femininity and style.",
    isNew: true,
  },
  {
    id: 7,
    name: 'Classic Fusion White Dial Diamond Bezel White Leather',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-whitedial-diamondbezel-whiteleather/hublot-classicfusion-whitedial-diamondbezel-whiteleather.png',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-whitedial-diamondbezel-whiteleather/angle.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Hublot/hublot-classicfusion-whitedial-diamondbezel-whiteleather/clasp.png",
    ],
    description :"The Hublot Classic Fusion White Dial Diamond Bezel White Leather radiates serene elegance and modern luxury. Housed in a 42mm titanium case, the luminous white sunray dial is paired with a sparkling diamond-set bezel, creating a harmonious and refined aesthetic. The white leather strap offers sleek comfort, making this timepiece a sophisticated choice for those who embrace understated glamour.",
    isNew: false,
  }
];

const HublotWomensPage: React.FC = () => {

   const { setProducts } = useCart()
  
    useEffect(() => {
      // console.log(womensAPWatches);
      // 
      localStorage.setItem('productList', JSON.stringify(womensHublotWatches))
      localStorage.setItem('category', 'w-hublot')
    setProducts({productList: womensHublotWatches, category: 'w-hublot'})
      // setProducts(womensHublotWatches)
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
              <Link to="/womens-collection" className="hover:text-gold-500">Women's Collection</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gold-500">Hublot</span>
            </div>

            <SectionTitle
              title="Women's Hublot Collection"
              subtitle="Discover our selection of elegant Classic Fusion timepieces for women"
              centered
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {womensHublotWatches.map((watch) => (
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

export default HublotWomensPage;
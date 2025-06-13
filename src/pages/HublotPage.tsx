import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/product/ProductCard';
import SectionTitle from '../components/common/SectionTitle';
import { ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const hublotWatches = [
  {
    id: 1,
    name: 'Spirit of Big Bang - Gold',
    price: 225,
    image: 'https://replicaluxury.vn/wp-content/uploads/2024/12/Dong-Ho-Hublot-Spirit-Of-Big-Bang-King-Gold-Replica-Cao-Cap-42mm-7-1536x1536.jpg',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Spirit%20of%20Big%20Bang/hublot-spiritofbigbang-gold/angle",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Spirit%20of%20Big%20Bang/hublot-spiritofbigbang-gold/side.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Spirit%20of%20Big%20Bang/hublot-spiritofbigbang-gold/clasp.jpg"


    ],
    description :`The Hublot Spirit of Big Bang Gold radiates opulence and avant-garde design. Encased in a 42mm 18k yellow gold tonneau-shaped case, the luxurious gold dial harmonizes with a matching gold bezel, creating a cohesive and extravagant aesthetic. The black rubber strap adds a modern contrast and supreme comfort, making this watch a prestigious choice.
`,
    isNew: false,
  },
  {
    id: 2,
    name: 'Big Bang Unico Titanium',
    price: 245,
    image: 'https://www.watchfinder.co.uk/images/high-res/Hublot/Big%20Bang%20Unico/411.NX.1170.RX/169848/2.jpg',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-gold/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-gold/back.jpg"
    ],
    description :`The Hublot Big Bang Gold radiates opulence and bold sophistication. Encased in a 44mm 18k yellow gold case, the luxurious gold dial is paired with a matching gold bezel, creating a cohesive and extravagant aesthetic. The black rubber strap adds a modern contrast and supreme comfort, making this watch a prestigious choice for those who demand the finest.
`,
    isNew: false,
  },
  {
    id: 3,
    name: 'Classic Fusion Chronograph',
    price: 199,
    image: 'https://www.watchfinder.co.uk/images/high-res/Hublot/Classic%20Fusion%20Chronograph/541.NX.1171.LR/169855/2.jpg',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Classic%20Fusion/hublot-classicfusionchrono-greydial-titanium-leather/angle.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Classic%20Fusion/hublot-classicfusionchrono-greydial-titanium-leather/back",
      
    ],
    description :`The Hublot Classic Fusion Chronograph Grey Dial combines refined style with technical precision. Encased in a 42mm titanium case, the sophisticated grey sunray dial showcases a chronograph complication, paired with a polished bezel. The grey leather strap ensures comfort and durability, making this watch a timeless choice for those who value subtlety and performance.
`,
    isNew: false,
  },
  {
    id: 4,
    name: 'Big Bang Ferrari',
    price: 275,
    image: 'https://www.watchfinder.co.uk/images/high-res/Hublot/Big%20Bang%20Ferrari/402.QX.0123.WR/169862/2.jpg',
    category: 'Hublot',
    imagesList : [],
    description: "",
    isNew: false,
  },
  {
    id: 5,
    name: 'MP-11 Power Reserve',
    price: 299,
    image: 'https://www.watchfinder.co.uk/images/high-res/Hublot/MP-11/911.NX.0129.RX/169869/2.jpg',
    category: 'Hublot',
    imagesList : [],
    description: "",
    isNew: false,
  },
  {
    id: 6,
    name: 'Big Bang Integral',
    price: 255,
    image: 'https://www.watchfinder.co.uk/images/high-res/Hublot/Big%20Bang%20Integral/451.NX.1170.NX/169876/2.jpg',
    category: 'Hublot',
    imagesList : [],
    description: "",
    isNew: false,
  },
  {
    id: 7,
    name: 'Spirit of Big Bang Tourbillon',
    price: 325,
    image: 'https://www.watchfinder.co.uk/images/high-res/Hublot/Spirit%20of%20Big%20Bang%20Tourbillon/645.NX.1137.RX/169883/2.jpg',
    category: 'Hublot',
    imagesList : [],
    description: "",
    isNew: false,
  },
  {
    id: 8,
    name: 'Classic Fusion Aerofusion',
    price: 235,
    image: 'https://www.watchfinder.co.uk/images/high-res/Hublot/Classic%20Fusion%20Aerofusion/525.NX.0170.LR/169890/2.jpg',
    category: 'Hublot',
    imagesList : [],
    description: "",
    isNew: false,
  }
];

const HublotPage: React.FC = () => {
   const { setProducts } = useCart()
  
    useEffect(() => {
      // console.log(womensAPWatches);
      // 
      localStorage.setItem('productList', JSON.stringify(hublotWatches))
      localStorage.setItem('category', 'hublot')
    setProducts({productList: hublotWatches, category: 'hublot'})
      // setProducts(hublotWatches)
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
              <span className="text-gold-500">Hublot</span>
            </div>
            
            <SectionTitle
              title="Hublot Collection"
              subtitle="Explore our exclusive selection of premium Hublot timepieces"
              centered
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {hublotWatches.map((watch) => (
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

export default HublotPage;
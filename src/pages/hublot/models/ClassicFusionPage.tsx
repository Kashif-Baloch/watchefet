import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import ProductCard from '../../../components/product/ProductCard';
import SectionTitle from '../../../components/common/SectionTitle';
import { useCart } from '../../../context/CartContext';

const classicFusionWatches = [
  {
    id: 1,
    reviews: 19,
    name: 'Classic Fusion Chronograph Blue Dial',
    price: 199,
    image: "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Classic%20Fusion/hublot-classicfusionchrono-bluedial-leather/hublot-classicfusionchrono-bluedial-leather.png",
    category: 'Hublot',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Classic%20Fusion/hublot-classicfusionchrono-bluedial-leather/angle.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Classic%20Fusion/hublot-classicfusionchrono-bluedial-leather/angle2",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Classic%20Fusion/hublot-classicfusionchrono-bluedial-leather/back.jpg",

    ],
    description: `The Hublot Classic Fusion Blue Dial Titanium exudes understated luxury and modern design. Encased in a 42mm titanium case, the striking blue sunray dial is paired with a polished titanium bezel, creating a clean and elegant aesthetic. The blue rubber strap ensures lightweight comfort, making this watch a versatile companion for the discerning individual.
`,
    isNew: true,
  },
  {
    id: 2,
    reviews: 17,
    name: 'Classic Fusion Blue Dial Titanium',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Classic%20Fusion/hublot-classicfusion-bluedial-titanium-bluerubber/hublot-classicfusion-bluedial-titanium-bluerubber.png',
    category: 'Hublot',
    imagesList: [
      " https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Classic%20Fusion/hublot-classicfusion-bluedial-titanium-bluerubber/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Classic%20Fusion/hublot-classicfusion-bluedial-titanium-bluerubber/back%20clasp%20open.jpg"

    ],
    description: `The Hublot Classic Fusion Blue Dial Titanium exudes understated luxury and modern design. Encased in a 42mm titanium case, the striking blue sunray dial is paired with a polished titanium bezel, creating a clean and elegant aesthetic. The blue rubber strap ensures lightweight comfort, making this watch a versatile companion for the discerning individual.
`,
    isNew: false,
  },
  {
    id: 3,
    reviews: 17,
    name: 'Classic Fusion Chronograph Black Magic',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Classic%20Fusion/hublot-classicfusionchrono-blackmagic/hublot-classicfusionchrono-blackmagic.png',
    category: 'Hublot',
    imagesList: [],
    description: `The Hublot Classic Fusion Chronograph Black Magic is a bold expression of contemporary sophistication. Housed in a 42mm black ceramic case, the sleek black dial with chronograph functionality is complemented by a matching ceramic bezel, exuding a stealthy allure. The black rubber strap provides robust comfort, making this timepiece ideal for those who embrace modern elegance.
`,
    isNew: true,
  },
  {
    id: 4,
    reviews: 27,
    name: 'Classic Fusion Chronograph Grey Dial',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Classic%20Fusion/hublot-classicfusionchrono-greydial-titanium-leather/hublot-classicfusionchrono-greydial-titanium-leather.png',
    category: 'Hublot',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Classic%20Fusion/hublot-classicfusionchrono-greydial-titanium-leather/angle.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Classic%20Fusion/hublot-classicfusionchrono-greydial-titanium-leather/back",

    ],
    description: `The Hublot Classic Fusion Chronograph Grey Dial combines refined style with technical precision. Encased in a 42mm titanium case, the sophisticated grey sunray dial showcases a chronograph complication, paired with a polished bezel. The grey leather strap ensures comfort and durability, making this watch a timeless choice for those who value subtlety and performance.
`,
    isNew: false,
  },
  {
    id: 5,
    reviews: 22,
    name: 'Classic Fusion Green Dial Titanium',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Classic%20Fusion/hublot-classicfusion-greendial-titanium-leather/hublot-classicfusion-greendial-titanium-leather.png',
    category: 'Hublot',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Classic%20Fusion/hublot-classicfusion-greendial-titanium-leather/angle.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Classic%20Fusion/hublot-classicfusion-greendial-titanium-leather/strap.webp",


    ],
    description: `The Hublot Classic Fusion Green Dial Titanium is a vibrant yet refined masterpiece. Housed in a 42mm titanium case, the bold green sunray dial is complemented by a sleek titanium bezel, offering a fresh and modern aesthetic. The green leather strap provides lightweight comfort, making this timepiece ideal for those who embrace individuality and elegance.
`,
    isNew: true,
  },
  {
    id: 6,
    reviews: 22,
    name: 'Classic Fusion Grey Dial Titanium',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Classic%20Fusion/hublot-classicfusion-greydial-titanium-leather/hublot-classicfusion-greydial-titanium-leather.png',
    category: 'Hublot',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Classic%20Fusion/hublot-classicfusion-greydial-titanium-leather/close%20up.png",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Classic%20Fusion/hublot-classicfusion-greydial-titanium-leather/clasp%20open.png",

    ],
    description: `The Hublot Classic Fusion Grey Dial Titanium exudes sleek sophistication and versatility. Encased in a 42mm titanium case, the understated grey sunray dial is paired with a polished titanium bezel, creating a refined and timeless look. The black rubber strap ensures modern comfort, making this watch a perfect companion for both casual and formal settings.
`,
    isNew: false,
  }
];

const ClassicFusionPage: React.FC = () => {
  const { setProducts } = useCart()

  useEffect(() => {
    // console.log(womensAPWatches);
    // 
    localStorage.setItem('productList', JSON.stringify(classicFusionWatches))
    localStorage.setItem('category', 'classicfusion')
    setProducts({ productList: classicFusionWatches, category: 'classicfusion' })
    // setProducts(classicFusionWatches)
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
              <Link to="/hublot" className="hover:text-gold-500">Hublot</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gold-500">Classic Fusion</span>
            </div>

            <SectionTitle
              title="Hublot Classic Fusion Collection"
              subtitle="Elegant timepieces that blend classic design with contemporary style"
              centered
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {classicFusionWatches.map((watch) => (
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

export default ClassicFusionPage;
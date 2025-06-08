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
    imagesList : [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-bluedial-silver/side.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-bluedial-silver/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-bluedial-silver/back.jpg"
    ],
    description:"The Patek Philippe Nautilus Blue Dial Silver is the epitome of refined elegance and sporty sophistication. Housed in a 40mm stainless steel case, the iconic blue dial with its horizontal embossed pattern exudes timeless charm, complemented by a rounded octagonal bezel. The stainless steel bracelet ensures exceptional comfort and durability, making this timepiece a versatile masterpiece for discerning individuals.",
    isNew: true,
  },
  {
    id: 2,
    name: 'Nautilus Brown Dial Rose Gold',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-browndial-rosegold/patek-nautilus-browndial-rosegold.png',
    category: 'Patek Philippe', 
    imagesList : [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-browndial-rosegold/angle.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-browndial-rosegold/angle2.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-browndial-rosegold/clasp.webp"
    ],
    description:"The Patek Philippe Nautilus Brown Dial Rose Gold radiates warmth and unparalleled luxury. Encased in a 40mm 18k rose gold case, the rich brown dial with its signature embossed texture harmonizes beautifully with the rose gold bezel, creating a sophisticated aesthetic. The rose gold bracelet offers supreme comfort, making this watch a prestigious choice for those who value elegance and heritage.",
    isNew: false,
  },
  {
    id: 3,
    name: 'Nautilus Green Dial Silver',
    price: 275,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-greendial-silver/patek-nautilus-greendial-silver.png',
    category: 'Patek Philippe',
    imagesList : [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-greendial-silver/side.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-greendial-silver/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-greendial-silver/back.jpg"
    ],
    description:"The Patek Philippe Nautilus Green Dial Silver combines bold modernity with timeless refinement. Housed in a 40mm stainless steel case, the vibrant green dial with its horizontal embossed pattern is paired with a sleek stainless steel bezel, offering a fresh and dynamic look. The stainless steel bracelet ensures lasting comfort, making this timepiece ideal for those who embrace individuality and style.",
    isNew: true,
  },
  {
    id: 4,
    name: 'Nautilus Tiffany Blue Dial Silver',
    price: 275,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-tiffanydial-silver/patek-nautilus-tiffanydial-silver.png',
    category: 'Patek Philippe',
    imagesList : [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-tiffanydial-silver/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-tiffanydial-silver/back.jpg"
    ],
    description:"The Patek Philippe Nautilus Tiffany Blue Dial Silver is a rare and captivating icon of exclusivity. Encased in a 40mm stainless steel case, the stunning Tiffany blue dial with its embossed texture radiates serene sophistication, complemented by a polished stainless steel bezel. The stainless steel bracelet provides exceptional comfort, making this watch a coveted masterpiece for collectors.",
    isNew: false,
  },
  {
    id: 5,
    name: 'Nautilus White Dial Silver',
    price: 275,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-whitedial-silver/patek-nautilus-whitedial-silver.png',
    category: 'Patek Philippe',
    imagesList : [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-whitedial-silver/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-whitedial-silver/back.jpg"
    ],
    description:"The Patek Philippe Nautilus White Dial Silver exudes crisp elegance and understated luxury. Housed in a 40mm stainless steel case, the pristine white dial with its horizontal embossed pattern is paired with a sleek stainless steel bezel, creating a clean and timeless aesthetic. The stainless steel bracelet ensures durability and comfort, making this timepiece a refined choice for any occasion.",
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
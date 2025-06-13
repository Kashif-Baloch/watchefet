import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import ProductCard from '../../../components/product/ProductCard';
import SectionTitle from '../../../components/common/SectionTitle';
import { useCart } from '../../../context/CartContext';

const aquanautWatches = [
  {
    id: 1,
    reviews: 17,
    name: 'Aquanaut Black Dial Silver Black Rubber',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Aquanaut/patek-aquanaut-blackdial-silver-blackrubber/patek-aquanaut-blackdial-silver-blackrubber.png',
    category: 'Patek Philippe',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Aquanaut/patek-aquanaut-blackdial-silver-blackrubber/angle.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Aquanaut/patek-aquanaut-blackdial-silver-blackrubber/clasp.webp",
    ],
    description: `The Patek Philippe Aquanaut Black Dial Silver Black Rubber is a bold fusion of sporty functionality and modern elegance. Housed in a 42mm stainless steel case, the sleek black dial with its distinctive "Tropical" composite strap pattern is complemented by a robust bezel. The black rubber strap ensures innovative comfort and durability, making this timepiece ideal for adventurous spirits with refined taste.`,
    isNew: false,
  },
  {
    id: 2,
    reviews: 22,
    name: 'Aquanaut Blue Dial Silver Blue Rubber',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Aquanaut/patek-aquanaut-bluedial-silver-bluerubber/patek-aquanaut-bluedial-silver-bluerubber.png',
    category: 'Patek Philippe',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Aquanaut/patek-aquanaut-bluedial-silver-bluerubber/angle.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Aquanaut/patek-aquanaut-bluedial-silver-bluerubber/clasp.webp"
    ],
    description: `The Patek Philippe Aquanaut Blue Dial Silver Blue Rubber combines vibrant style with rugged versatility. Encased in a 42mm stainless steel case, the striking blue dial with its embossed texture is paired with a sleek stainless steel bezel, evoking a nautical spirit. The blue rubber strap offers modern comfort, making this watch a perfect companion for both adventure and sophistication.`,
    isNew: false,
  },
  {
    id: 3,
    reviews: 12,
    name: 'Aquanaut Brown Dial Rose Gold Brown Rubber',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Aquanaut/patek-aquanaut-browndial-rose-brownrubber/patek-aquanaut-browndial-rose-brownrubber.png',
    category: 'Patek Philippe',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Aquanaut/patek-aquanaut-browndial-rose-brownrubber/angle.png",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Aquanaut/patek-aquanaut-browndial-rose-brownrubber/clasp.png",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Aquanaut/patek-aquanaut-browndial-rose-brownrubber/open%20clasp.png"
    ],
    description: `The Patek Philippe Aquanaut Brown Dial Rose Gold Brown Rubber exudes warmth and luxurious modernity. Housed in a 42mm 18k rose gold case, the rich brown dial with its signature embossed pattern harmonizes with a rose gold bezel, creating a cohesive and opulent aesthetic. The brown rubber strap ensures stylish comfort, making this timepiece a prestigious choice for dynamic lifestyles.`,
    isNew: false,
  },
  {
    id: 4,
    reviews: 19,
    name: 'Aquanaut Green Dial Silver Green Rubber',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Aquanaut/patek-aquanaut-greendial-silver-greenrubber/patek-aquanaut-greendial-silver-greenrubber.png',
    category: 'Patek Philippe',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Aquanaut/patek-aquanaut-greendial-silver-greenrubber/angle.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Aquanaut/patek-aquanaut-greendial-silver-greenrubber/open%20clasp"
    ],
    description: `The Patek Philippe Aquanaut Green Dial Silver Green Rubber is a vibrant expression of sporty elegance. Encased in a 42mm stainless steel case, the bold green dial with its "Tropical" embossed texture is complemented by a stainless steel bezel, offering a fresh and contemporary look. The green rubber strap provides exceptional comfort, making this watch ideal for those who live boldly and stylishly.`,
    isNew: false,
  }
];

const AquanautPage: React.FC = () => {
  const { setProducts } = useCart()

  useEffect(() => {
    // console.log(womensAPWatches);
    // 
    localStorage.setItem('productList', JSON.stringify(aquanautWatches))
    localStorage.setItem('category', 'aquanaut')
    setProducts({ productList: aquanautWatches, category: 'aquanaut' })
    // setProducts(aquanautWatches)
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
              <span className="text-gold-500">Aquanaut</span>
            </div>

            <SectionTitle
              title="Patek Philippe Aquanaut Collection"
              subtitle="The modern interpretation of casual elegance in watchmaking"
              centered
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {aquanautWatches.map((watch) => (
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

export default AquanautPage;
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import ProductCard from '../../../components/product/ProductCard';
import SectionTitle from '../../../components/common/SectionTitle';
import { useCart } from '../../../context/CartContext';

const spiritOfBigBangWatches = [
  {
    id: 1,
    name: 'Spirit of Big Bang Black Bezel Gold',
    price: 225,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Spirit%20of%20Big%20Bang/hublot-spiritofbigbang-blackbezel-goldbody-rubber/hublot-spiritofbigbang-blackbezel-goldbody-rubber.jpg',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Spirit%20of%20Big%20Bang/hublot-spiritofbigbang-blackbezel-goldbody-rubber/side.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Spirit%20of%20Big%20Bang/hublot-spiritofbigbang-blackbezel-goldbody-rubber/back.jpg"

    ],
    description :`The Hublot Spirit of Big Bang Black Bezel Gold is a bold fusion of innovation and luxury. Housed in a 42mm 18k yellow gold tonneau-shaped case, the dynamic dial is paired with a striking black bezel, exuding modern sophistication. The black rubber strap ensures robust comfort, making this timepiece a standout for those who live boldly.
`,
    isNew: true,
  },
  {
    id: 2,
    name: 'Spirit of Big Bang Gold',
    price: 275,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Spirit%20of%20Big%20Bang/hublot-spiritofbigbang-gold/hublot-spiritofbigbang-gold.png',
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
    id: 3,
    name: 'Spirit of Big Bang Titanium Blue',
    price: 225,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Spirit%20of%20Big%20Bang/hublot-spiritofbigbang-titanium-bluerubber/hublot-spiritofbigbang-titanium-bluerubber.png',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Spirit%20of%20Big%20Bang/hublot-spiritofbigbang-titanium-bluerubber/back"  
    ],
    description :`The Hublot Spirit of Big Bang Titanium Blue combines vibrant style with cutting-edge craftsmanship. Housed in a 42mm titanium tonneau-shaped case, the striking blue dial is paired with a titanium bezel, offering a lightweight yet bold aesthetic. The blue rubber strap ensures modern comfort, making this timepiece ideal for those who embrace dynamic design.
`,
    isNew: true,
  },
  {
    id: 4,
    name: 'Spirit of Big Bang Titanium',
    price: 225,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Spirit%20of%20Big%20Bang/hublot-spiritofbigbang-titanium-rubber/hublot-spiritofbigbang-titanium-rubber.png',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Spirit%20of%20Big%20Bang/hublot-spiritofbigbang-titanium-rubber/angle.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Spirit%20of%20Big%20Bang/hublot-spiritofbigbang-titanium-rubber/clasp.png"

    ],
    description :`The Hublot Spirit of Big Bang Titanium is a sleek embodiment of modern luxury. Encased in a 42mm titanium tonneau-shaped case, the minimalist dial is complemented by a polished titanium bezel, creating a versatile and sophisticated look. The black rubber strap offers lightweight comfort, making this watch a perfect choice for contemporary adventurers.`,
    isNew: false,
  },
  {
    id: 5,
    name: 'Spirit of Big Bang Tourbillon Carbon',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Spirit%20of%20Big%20Bang/hublot-spiritofbigbang-tourbillon-carbon/hublot-spiritofbigbang-tourbillon-carbon.png',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Spirit%20of%20Big%20Bang/hublot-spiritofbigbang-tourbillon-carbon/angle.jpeg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Spirit%20of%20Big%20Bang/hublot-spiritofbigbang-tourbillon-carbon/back.jpeg"
    ],
    description :`The Hublot Spirit of Big Bang Tourbillon Carbon is a masterpiece of innovation and horological artistry. Housed in a 42mm carbon fibre tonneau-shaped case, the intricate tourbillon movement is showcased on the dial, paired with a matching carbon bezel. The black rubber strap ensures futuristic comfort, making this timepiece a bold statement for collectors.
`,
    isNew: true,
  },
  {
    id: 6,
    name: 'Spirit of Big Bang White',
    price: 225,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Spirit%20of%20Big%20Bang/hublot-spiritofbigbang-white/hublot-spiritofbigbang-white.png',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Spirit%20of%20Big%20Bang/hublot-spiritofbigbang-white/open.png",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Spirit%20of%20Big%20Bang/hublot-spiritofbigbang-white/clasp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Spirit%20of%20Big%20Bang/hublot-spiritofbigbang-white/back.webp"
    ],
    description :`The Hublot Spirit of Big Bang White exudes crisp elegance and modern flair. Encased in a 42mm white ceramic tonneau-shaped case, the pristine white dial is complemented by a matching ceramic bezel, creating a clean and striking aesthetic. The white rubber strap offers sleek comfort, making this watch a sophisticated choice for those who value bold minimalism.
`,
    isNew: false,
  }
];

const SpiritOfBigBangPage: React.FC = () => {
   const { setProducts } = useCart()
  
    useEffect(() => {
      // console.log(womensAPWatches);
      // 
      localStorage.setItem('productList', JSON.stringify(spiritOfBigBangWatches))
      localStorage.setItem('category', 'spiritofbigbang')
    setProducts({productList: spiritOfBigBangWatches, category: 'spiritofbigbang'})
      // setProducts(spiritOfBigBangWatches)
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
              <span className="text-gold-500">Spirit of Big Bang</span>
            </div>

            <SectionTitle
              title="Hublot Spirit of Big Bang Collection"
              subtitle="Bold and innovative designs that push the boundaries of watchmaking"
              centered
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {spiritOfBigBangWatches.map((watch) => (
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

export default SpiritOfBigBangPage;
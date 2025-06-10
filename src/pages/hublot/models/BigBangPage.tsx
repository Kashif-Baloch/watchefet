import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import ProductCard from '../../../components/product/ProductCard';
import SectionTitle from '../../../components/common/SectionTitle';
import { useCart } from '../../../context/CartContext';

const bigBangWatches = [
  {
    id: 1,
    name: 'Big Bang Black Silver',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-blacksilver/hublot-bigbang-blacksilver.png',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-blacksilver/angle.webp",
    ],
    description :`The Hublot Big Bang Black Silver is a bold embodiment of modern luxury and dynamic design. Housed in a 44mm stainless steel case, the striking black dial exudes sophistication, complemented by a polished silver bezel with Hublot’s signature screws. The black rubber strap ensures exceptional comfort and a sporty edge, making this timepiece a standout for those who embrace innovation and style.`,
    isNew: true,
  },
  {
    id: 2,
    name: 'Big Bang Carbon Dial Titanium',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-carbondial-titantiumbody/hublot-bigbang-carbondial-titantiumbody.png',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-carbondial-titantiumbody/side.webp",
    ],
    description :`The Hublot Big Bang Carbon Dial Titanium blends cutting-edge materials with avant-garde aesthetics. Encased in a 44mm titanium case, the textured carbon dial offers a futuristic appeal, paired with a matching titanium bezel. The black rubber strap provides robust comfort, making this watch a perfect fusion of lightweight durability and bold design for the modern trailblazer.`,
    isNew: false,
  },
  {
    id: 3,
    name: 'Big Bang Carbon',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-carbon/hublot-bigbang-carbon.png',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-carbon/angle",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-carbon/back.webp"
    ],
    description :`The Hublot Big Bang Carbon is a masterpiece of innovative craftsmanship and rugged elegance. Housed in a 44mm carbon fibre case, the sleek carbon dial harmonizes with a matching bezel, creating a cohesive and modern aesthetic. The black rubber strap ensures comfort and resilience, making this timepiece ideal for those who value cutting-edge style and performance.`,
    isNew: true,
  },
  {
    id: 4,
    name: 'Big Bang Ferrari Red Silver',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbangferrari-redsilver/hublot-bigbangferrari-redsilver.png',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbangferrari-redsilver/angle.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbangferrari-redsilver/back.webp"
    ],
    description :`The Hublot Big Bang Ferrari Red Silver is a vibrant tribute to speed and precision. Encased in a 45mm stainless steel case, the bold red dial, inspired by Ferrari’s iconic palette, is paired with a polished silver bezel, exuding dynamic energy. The black rubber strap offers sporty comfort, making this watch a thrilling choice for automotive and watch enthusiasts alike.`,
    isNew: false,
  },
  {
    id: 5,
    name: 'Big Bang Ferrari Unico Red',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbangferrari-unicored/hublot-bigbangferrari-unicored.png',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-gold/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-gold/back.jpg"
    ],
    description :`The Hublot Big Bang Gold radiates opulence and bold sophistication. Encased in a 44mm 18k yellow gold case, the luxurious gold dial is paired with a matching gold bezel, creating a cohesive and extravagant aesthetic. The black rubber strap adds a modern contrast and supreme comfort, making this watch a prestigious choice for those who demand the finest.
`,
    isNew: true,
  },
  {
    id: 6,
    name: 'Big Bang Gold',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-gold/hublot-bigbang-gold.jpg',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-silver-blackrubber/clasp"
    ],
    description :`The Hublot Big Bang Silver Black Rubber combines sleek design with sporty functionality. Housed in a 44mm stainless steel case, the silver dial exudes modern elegance, complemented by a polished bezel with signature screws. The black rubber strap ensures durability and comfort, making this timepiece a versatile icon for dynamic lifestyles.
`,
    isNew: false,
  },
  {
    id: 7,
    name: 'Big Bang Silver Black Rubber',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-silver-blackrubber/hublot-bigbang-silver-blackrubber.png',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-silver-blackrubber/clasp"
    ],
    description :`The Hublot Big Bang Titanium Red Rubber is a vibrant fusion of innovation and bold style. Encased in a 44mm titanium case, the sleek dial is paired with a titanium bezel, offering a lightweight yet striking aesthetic. The red rubber strap adds a pop of colour and modern comfort, making this watch ideal for those who embrace individuality.
`,
    isNew: true,
  },
  {
    id: 8,
    name: 'Big Bang Titanium Red Rubber',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-titanium-redrubber/hublot-bigbang-titanium-redrubber.jpg',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-titanium-redrubber/clasp"
    ],
    description :`The Hublot Big Bang Titanium Red Rubber is a vibrant fusion of innovation and bold style. Encased in a 44mm titanium case, the sleek dial is paired with a titanium bezel, offering a lightweight yet striking aesthetic. The red rubber strap adds a pop of colour and modern comfort, making this watch ideal for those who embrace individuality.
`,
    isNew: false,
  },
  {
    id: 9,
    name: 'Big Bang Unico King Gold Blue Ceramic',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-unicoking-goldblue-ceramic/hublot-bigbang-unicoking-goldblue-ceramic.png',
    category: 'Hublot',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-unicoking-goldblue-ceramic/angle.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-unicoking-goldblue-ceramic/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-unicoking-goldblue-ceramic/back.jpg"
    ],
    description :`The Hublot Big Bang Unico King Gold Blue Ceramic is a pinnacle of luxury and technical prowess. Housed in a 45mm King Gold case, the vibrant blue dial showcases the Unico chronograph movement, paired with a blue ceramic bezel for a bold contrast. The blue rubber strap ensures stylish comfort, making this timepiece a standout for the modern connoisseur.
`,
    isNew: true,
  }
];

const BigBangPage: React.FC = () => {
   const { setProducts } = useCart()
  
    useEffect(() => {
      // console.log(womensAPWatches);
      // 
      localStorage.setItem('productList', JSON.stringify(bigBangWatches))
      localStorage.setItem('category', 'bigbang')
    setProducts({productList: bigBangWatches, category: 'bigbang'})
      // setProducts(bigBangWatches)
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
              <span className="text-gold-500">Big Bang</span>
            </div>

            <SectionTitle
              title="Hublot Big Bang Collection"
              subtitle="The revolutionary fusion of traditional watchmaking with modern materials"
              centered
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {bigBangWatches.map((watch) => (
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

export default BigBangPage;
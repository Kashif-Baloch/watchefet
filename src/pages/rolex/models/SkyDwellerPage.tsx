import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import ProductCard from '../../../components/product/ProductCard';
import SectionTitle from '../../../components/common/SectionTitle';
import { useCart } from '../../../context/CartContext';

const skyDwellerWatches = [
  {
    id: 1,
    name: 'Sky-Dweller Black Dial Two-Tone Gold',
    price: 165,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-blackdial-goldfluted-2tonesilvergoldjubilee/skydweller-blackdial-goldfluted-2tonesilvergoldjubilee.png',
    category: 'Rolex',
    imagesList:[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-blackdial-goldfluted-2tonesilvergoldjubilee/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-blackdial-goldfluted-2tonesilvergoldjubilee/back.webp"
    ],
    description :"The Rolex Sky-Dweller Black Dial Two-Tone Gold is a pinnacle of innovation and elegance. Housed in a 42mm case of Oystersteel and 18k yellow gold, the sleek black dial features an annual calendar and dual time zone display, epitomizing sophistication. The Oyster bracelet in two-tone ensures exceptional comfort, making this timepiece ideal for global travellers with refined taste.",
    isNew: true,
  },
  {
    id: 2,
    name: 'Sky-Dweller Blue Dial Rose Gold Jubilee',
    price: 165,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-bluedial-rosefluted-rosejubilee/skydweller-bluedial-rosefluted-rosejubilee.png',
    category: 'Rolex',
    imagesList:[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-bluedial-rosefluted-rosejubilee/side.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-bluedial-rosefluted-rosejubilee/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-bluedial-rosefluted-rosejubilee/clasp%202.jpeg"
    ],
    description :"The Rolex Sky-Dweller Blue Dial Rose Gold Jubilee exudes luxurious sophistication and technical prowess. Encased in a 42mm 18k rose gold case, the vibrant blue dial showcases an annual calendar and dual time zone, paired with a fluted bezel. The Jubilee bracelet offers refined comfort, making this watch a prestigious choice for cosmopolitan adventurers.",
    isNew: false,
  },
  {
    id: 3,
    name: 'Sky-Dweller Blue Dial Rose Gold Oyster',
    price: 165,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-bluedial-rosefluted-roseoyster/skydweller-bluedial-rosefluted-roseoyster.png',
    category: 'Rolex',
    imagesList:[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-bluedial-rosefluted-roseoyster/side.png",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-bluedial-rosefluted-roseoyster/clasp.png",
    ],
    description :"The Rolex Sky-Dweller Blue Dial Rose Gold Oyster combines opulence with cutting-edge functionality. Housed in a 42mm 18k rose gold case, the striking blue dial features an annual calendar and dual time zone, enhanced by a fluted bezel. The Oyster bracelet in rose gold ensures durability and comfort, ideal for those who navigate the world in style.",
    isNew: true,
  },
  {
    id: 4,
    name: 'Sky-Dweller Blue Dial Silver Oyster',
    price: 165,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-bluedial-silverfluted-silveroyster/skydweller-bluedial-silverfluted-silveroyster.png',
    category: 'Rolex',
    imagesList:[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-bluedial-silverfluted-silveroyster/side.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-bluedial-silverfluted-silveroyster/clasp.webp",
    ],
    description :"The Rolex Sky-Dweller Blue Dial Silver Oyster blends modern elegance with technical innovation. Encased in a 42mm Oystersteel case, the vibrant blue dial displays an annual calendar and dual time zone, complemented by a fluted bezel. The Oyster bracelet offers robust comfort, making this timepiece a versatile choice for global explorers.",
    isNew: false,
  },
  {
    id: 5,
    name: 'Sky-Dweller Chocolate Dial Rose Gold',
    price: 165,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-chocdial-rosefluted-rosebody-rubber/skydweller-chocdial-rosefluted-rosebody-rubber.png',
    category: 'Rolex',
    imagesList:[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-chocdial-rosefluted-rosebody-rubber/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-chocdial-rosefluted-rosebody-rubber/back.webp",
    ],
    description :"The Rolex Sky-Dweller Chocolate Dial Rose Gold is a harmonious blend of warmth and sophistication. Housed in a 42mm 18k rose gold case, the rich chocolate dial showcases an annual calendar and dual time zone, paired with a fluted bezel. The Oyster bracelet in rose gold ensures luxurious comfort, perfect for those who value prestige and precision.",
    isNew: true,
  },
  {
    id: 6,
    name: 'Sky-Dweller Gold Dial Two-Tone Gold',
    price: 165,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-golddial-goldfluted-2tonesilvergoldjubilee/skydweller-golddial-goldfluted-2tonesilvergoldjubilee.png',
    category: 'Rolex',
    imagesList:[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-golddial-goldfluted-2tonesilvergoldjubilee/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-golddial-goldfluted-2tonesilvergoldjubilee/back.webp",
    ],
    description :"The Rolex Sky-Dweller Gold Dial Two-Tone Gold radiates opulence and functionality. Encased in a 42mm case of Oystersteel and 18k yellow gold, the radiant gold dial features an annual calendar and dual time zone, enhanced by a fluted bezel. The two-tone Oyster bracelet offers exceptional comfort, making this watch a luxurious choice for world travellers.",
    isNew: false,
  },
  {
    id: 7,
    name: 'Sky-Dweller Gold Dial Gold Rubber',
    price: 165,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-golddial-goldfluted-goldbody-rubber/skydweller-golddial-goldfluted-goldbody-rubber',
    category: 'Rolex',
    imagesList:[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-golddial-goldfluted-goldbody-rubber/side.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-golddial-goldfluted-goldbody-rubber/clasp.jpg",
    ],
    description :"The Rolex Sky-Dweller Gold Dial Gold Rubber is a modern masterpiece of luxury and innovation. Housed in a 42mm 18k yellow gold case, the warm gold dial displays an annual calendar and dual time zone, paired with a fluted bezel. The Oysterflex rubber bracelet provides innovative comfort, making this timepiece a bold choice for the contemporary elite.",
    isNew: true,
  },
  {
    id: 8,
    name: 'Sky-Dweller Grey Dial Silver Rubber',
    price: 165,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-greydial-silverfluted-silverbody-rubber/skydweller-greydial-silverfluted-silverbody-rubber.png',
    category: 'Rolex',
    imagesList:[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-greydial-silverfluted-silverbody-rubber/side",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-greydial-silverfluted-silverbody-rubber/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-greydial-silverfluted-silverbody-rubber/back.webp",
    ],
    description :"The Rolex Sky-Dweller Grey Dial Silver Rubber combines sleek style with advanced functionality. Encased in a 42mm Oystersteel case, the sophisticated grey dial showcases an annual calendar and dual time zone, complemented by a fluted bezel. The Oysterflex rubber bracelet ensures modern comfort, making this watch ideal for travellers seeking understated elegance.",
    isNew: false,
  },
  {
    id: 9,
    name: 'Sky-Dweller White Dial Gold Rubber',
    price: 165,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-whitedial-goldfluted-goldbody-rubber/skydweller-whitedial-goldfluted-goldbody-rubber',
    category: 'Rolex',
    imagesList:[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-whitedial-goldfluted-goldbody-rubber/side",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-whitedial-goldfluted-goldbody-rubber/clasp.jpg",
    ],
    description :"The Rolex Sky-Dweller White Dial Gold Rubber exudes crisp elegance and technical sophistication. Housed in a 42mm 18k yellow gold case, the pristine white dial features an annual calendar and dual time zone, paired with a fluted bezel. The Oysterflex rubber bracelet offers innovative comfort, making this timepiece a luxurious choice for those who traverse the globe with style.",
    isNew: true,
  }
];

const SkyDwellerPage: React.FC = () => {
   const { setProducts } = useCart()
  
    useEffect(() => {
      // console.log(womensAPWatches);
      // 
      localStorage.setItem('productList', JSON.stringify(skyDwellerWatches))
      localStorage.setItem('category', 'skydweller')
    setProducts({productList: skyDwellerWatches, category: 'skydweller'})
      // setProducts(skyDwellerWatches)
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
              <span className="text-gold-500">Sky-Dweller</span>
            </div>

            <SectionTitle
              title="Rolex Sky-Dweller Collection"
              subtitle="The sophisticated traveler's watch with annual calendar and dual time zones"
              centered
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {skyDwellerWatches.map((watch) => (
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

export default SkyDwellerPage;
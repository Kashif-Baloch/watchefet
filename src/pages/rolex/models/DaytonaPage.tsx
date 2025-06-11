import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import ProductCard from '../../../components/product/ProductCard';
import SectionTitle from '../../../components/common/SectionTitle';
import { useCart } from '../../../context/CartContext';

const daytonaWatches = [
  {
    id: 1,
    reviews: 12,
    name: 'Daytona Black Dial Black Gold Bezel',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-blackdial-blackgoldbezel-rubber/daytona-blackdial-blackgoldbezel-rubber.png',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-blackdial-blackgoldbezel-rubber/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-blackdial-blackgoldbezel-rubber/back.jpg",
    ],
    description: 'The Rolex Daytona Black Dial Black Gold Bezel is a striking embodiment of performance and luxury. Housed in a 40mm case, the sleek black dial is paired with a luxurious black and gold Cerachrom bezel, exuding bold sophistication. The Oyster bracelet ensures exceptional comfort and durability, making this timepiece a timeless choice for those who value precision and elegance.',
    isNew: true,
  },
  {
    id: 2,
    reviews: 22,
    name: 'Daytona Black Dial Two-Tone',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-blackdial-goldbezel-2tonegoldsilver-oyster/daytona-blackdial-goldbezel-2tonegoldsilver-oyster.png',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-blackdial-goldbezel-2tonegoldsilver-oyster/back.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-blackdial-goldbezel-2tonegoldsilver-oyster/backopenclasp.webp"
    ],
    description: 'The Rolex Daytona Black Dial Two-Tone blends sporty precision with refined elegance. Encased in a 40mm Oystersteel and 18k yellow gold case, the black dial offers a sleek, versatile aesthetic, complemented by a matching bezel. The Oyster bracelet in two-tone provides unmatched comfort, making this chronograph a perfect companion for both racing enthusiasts and style connoisseurs.',
    isNew: false,
  },
  {
    id: 3,
    reviews: 25,
    name: 'Daytona Blue Dial Silver Bezel',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-bluedial-silverbezel-silveroyster/daytona-bluedial-silverbezel-silveroyster.png',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-bluedial-silverbezel-silveroyster/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-bluedial-silverbezel-silveroyster/backopenclasp.webp"
    ],
    description: 'The Rolex Daytona Blue Dial Silver Bezel radiates vibrant elegance and precision. Its 40mm Oystersteel case frames a stunning blue dial, paired with a polished silver bezel for a sleek, modern look. The Oyster bracelet ensures durability and comfort, making this timepiece an ideal blend of performance and sophistication for any occasion.',
    isNew: true,
  },
  {
    id: 4,
    reviews: 28,
    name: 'Daytona Full Gold',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-fullygold-oyster/daytona-fullygold-oyster.jpg',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-fullygold-oyster/back",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-fullygold-oyster/back%20open%20clasp.png"
    ],
    description: 'The Rolex Daytona Full Gold is the pinnacle of opulence and horological excellence. Crafted in a 40mm 18k yellow gold case, the radiant gold dial and bezel create a cohesive, luxurious aesthetic. The Oyster bracelet in gold offers supreme comfort, making this chronograph a bold statement for those who demand the finest in craftsmanship and style.',
    isNew: false,
  },
  {
    id: 5,
    reviews: 22,
    name: 'Daytona Black Dial Gold Black Bezel',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-goldblackdial-blackbezel-rubber/daytona-goldblackdial-blackbezel-rubber.jpg',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-goldblackdial-blackbezel-rubber/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-goldblackdial-blackbezel-rubber/back.jpg"
    ],
    description: 'The Rolex Daytona Black Dial Gold Black Bezel combines bold contrast with luxurious design. Housed in a 40mm 18k yellow gold case, the deep black dial is accentuated by a striking black Cerachrom bezel, creating a commanding presence. The Oyster bracelet in gold ensures lasting comfort, making this watch a standout for performance and prestige.',
    isNew: true,
  },
  {
    id: 6,
    reviews: 17,
    name: 'Daytona Gold Dial Black Bezel',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-golddial-blackbezel-rubber/daytona-golddial-blackbezel-rubber.png',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-golddial-blackbezel-rubber/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-golddial-blackbezel-rubber/back.jpg"
    ],
    description: 'The Rolex Daytona Gold Dial Black Bezel exudes warmth and sophistication. Encased in a 40mm 18k yellow gold case, the rich gold dial pairs beautifully with a black Cerachrom bezel, offering a striking contrast. The Oyster bracelet in gold provides exceptional comfort, making this timepiece a luxurious choice for those who appreciate bold elegance.',
    isNew: false,
  },
  {
    id: 7,
    reviews: 18,
    name: 'Daytona Gold Dial Two-Tone',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-golddial-goldbezel-2tonesilvergold-oyster/daytona-golddial-goldbezel-2tonesilvergold-oyster.png',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-golddial-goldbezel-2tonesilvergold-oyster/back.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-golddial-goldbezel-2tonesilvergold-oyster/backopenclasp.webp"
    ],
    description: 'The Rolex Daytona Gold Dial Two-Tone is a masterful blend of luxury and versatility. Housed in a 40mm Oystersteel and 18k yellow gold case, the warm gold dial is complemented by a matching bezel, creating a harmonious aesthetic. The two-tone Oyster bracelet ensures comfort and durability, making this chronograph a timeless icon for discerning individuals.',
    isNew: true,
  },
  {
    id: 8,
    reviews: 17,
    name: 'Daytona Rose Gold',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-rosedial-rosebezel-roseoyster/daytona-rosedial-rosebezel-roseoyster.png',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-rosedial-rosebezel-roseoyster/side.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-rosedial-rosebezel-roseoyster/clasp.webp"
    ],
    description: 'The Rolex Daytona Rose Gold is the epitome of elegance and performance. Crafted in a 40mm 18k rose gold case, the rich rose gold dial and bezel create a warm, luxurious aesthetic. The Oyster bracelet in rose gold offers unmatched comfort, making this timepiece a prestigious choice for those who value sophistication and precision.',
    isNew: false,
  },
  {
    id: 9,
    reviews: 14,
    name: 'Daytona White Dial Black Bezel',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-whitedial-blackbezel-oyster/daytona-whitedial-blackbezel-oyster.png',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-whitedial-blackbezel-oyster/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-whitedial-blackbezel-oyster/backopenclasp.webp"
    ],
    description: 'The Rolex Daytona White Dial Black Bezel combines crisp elegance with sporty functionality. Housed in a 40mm Oystersteel case, the pristine white dial contrasts boldly with a black Cerachrom bezel, creating a striking aesthetic. The Oyster bracelet ensures durability and comfort, making this chronograph a versatile choice for any setting.',
    isNew: true,
  },
  {
    id: 10,
    reviews: 18,
    name: 'Daytona White Dial Two-Tone',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-whitedial-goldbezel-2tonegoldsilver-oyster/daytona-whitedial-goldbezel-2tonegoldsilver-oyster.png',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-whitedial-goldbezel-2tonegoldsilver-oyster/back.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-whitedial-goldbezel-2tonegoldsilver-oyster/backopenclasp.webp"
    ],
    description: 'The Rolex Daytona White Dial Two-Tone blends classic style with modern refinement. Encased in a 40mm Oystersteel and 18k yellow gold case, the clean white dial is paired with a matching bezel, offering a sophisticated look. The two-tone Oyster bracelet provides exceptional comfort, making this timepiece ideal for those who value elegance and performance.',
    isNew: false,
  },
  {
    id: 11,
    reviews: 18,
    name: 'Daytona White Dial Gold',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-whitedial-goldbezel-goldoyster/daytona-whitedial-goldbezel-goldoyster.png',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-whitedial-goldbezel-goldoyster/back",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-whitedial-goldbezel-goldoyster/back%20open%20clasp.png"
    ],
    description: 'The Rolex Daytona White Dial Gold exudes luxury and precision. Housed in a 40mm 18k yellow gold case, the crisp white dial contrasts elegantly with the radiant gold bezel, creating a refined aesthetic. The Oyster bracelet in gold ensures supreme comfort, making this chronograph a prestigious choice for those who demand the finest.',
    isNew: true,
  },
  {
    id: 12,
    reviews: 13,
    name: 'Daytona White Dial Silver Rubber',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-whitedial-silverbezel-rubber/daytona-whitedial-silverbezel-rubber.png',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-whitedial-silverbezel-rubber/side.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-whitedial-silverbezel-rubber/clasp.webp"
    ],
    description: 'The Rolex Daytona White Dial Silver Rubber is a modern masterpiece of style and functionality. Encased in a 40mm Oystersteel case, the clean white dial is paired with a polished silver bezel, offering a sleek aesthetic. The Oysterflex rubber bracelet provides innovative comfort and durability, making this timepiece a bold choice for the contemporary adventurer.',
    isNew: false,
  },
  {
    id: 13,
    reviews: 13,
    name: 'Daytona White Dial Silver',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-whitedial-silveroyster/daytona-whitedial-silveroyster.png',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-whitedial-silveroyster/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-whitedial-silveroyster/backopenclasp.webp"
    ],
    description: 'The Rolex Daytona White Dial Silver is a timeless blend of elegance and performance. Housed in a 40mm Oystersteel case, the pristine white dial is complemented by a polished silver bezel, creating a clean, sophisticated look. The Oyster bracelet ensures lasting comfort, making this chronograph a versatile icon for any occasion.',
    isNew: true,
  }
];

const DaytonaPage: React.FC = () => {
  const { setProducts } = useCart()

  useEffect(() => {
    // console.log(womensAPWatches);
    // 
    localStorage.setItem('productList', JSON.stringify(daytonaWatches))
    localStorage.setItem('category', 'daytona')
    setProducts({productList: daytonaWatches, category: 'daytona'})
    // setProducts(daytonaWatches)
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
              <span className="text-gold-500">Daytona</span>
            </div>

            <SectionTitle
              title="Rolex Daytona Collection"
              subtitle="The iconic chronograph designed for professional racing drivers"
              centered
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {daytonaWatches.map((watch) => (
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

export default DaytonaPage;
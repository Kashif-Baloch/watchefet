import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/product/ProductCard';
import SectionTitle from '../components/common/SectionTitle';
import { ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const apWatches = [
  {
    id: 1,
    name: 'Royal Oak Black Dial Silver',
    price: 250,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-blackchronodial-plainsilver/ap-blackchronodial-plainsilver.png',
    category: 'Audemars Piguet',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-blackchronodial-plainsilver/angle.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-blackchronodial-plainsilver/clasp.jpg"
    ],
    description: "The Audemars Piguet Royal Oak Black Dial Silver Chronograph is a striking blend of sporty precision and timeless elegance. Housed in a 41mm stainless steel case, the bold black dial with its iconic Grande Tapisserie pattern is complemented by a sleek silver bezel with exposed screws, exuding modern sophistication. The integrated stainless steel bracelet ensures exceptional comfort, making this chronograph a versatile masterpiece for any occasion.",
    isNew: true,
    pricing: {
      "AAA": 179,
      "AAAAA": 0,
      "Super Clone": 549,
      img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/Box%20&%20Certificate.jpg`
    }
  },
  {
    id: 2,
    name: 'Royal Oak Blue Dial Black',
    price: 250,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-bluedial-plainblack/ap-bluedial-plainblack.png',
    category: 'Audemars Piguet',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-bluedial-plainblack/side.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-bluedial-plainblack/clasp.jpg"
    ],
    description: `The Audemars Piguet Royal Oak Blue Dial Black radiates vibrant sophistication with a bold edge. Encased in a 41mm stainless steel case, the stunning blue "Grande Tapisserie" dial contrasts with a black bezel, creating a dynamic and luxurious aesthetic. The stainless steel bracelet offers seamless comfort and durability, making this timepiece a perfect companion for those who value style and precision.`,
    isNew: false,
    pricing: {
      "AAA": 199,
      "AAAAA": 299,
      "Super Clone": 599,
      img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/Box%20&%20Certificate.jpg`
    }
  },
  {
    id: 3,
    name: 'Royal Oak Flying Tourbillon Grey Dial Rose Gold',
    price: 275,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-flyingtourbillon-greydial-rose/ap-flyingtourbillon-greydial-rose.png',
    category: 'Audemars Piguet',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-flyingtourbillon-greydial-rose/clasp.webp"
    ],
    description: `The Audemars Piguet Royal Oak Flying Tourbillon Grey Dial Rose Gold is the pinnacle of horological artistry and luxury. Housed in a 41mm 18k rose gold case, the elegant grey dial showcases a mesmerizing flying tourbillon, paired with the iconic octagonal bezel. The rose gold bracelet ensures supreme comfort, making this timepiece a statement of refined craftsmanship for the discerning collector.`,
    isNew: true,
    pricing: {
      "AAA": 199,
      "AAAAA": 0,
      "Super Clone": 589,
      img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/Box%20&%20Certificate.jpg`
    }
  },
  {
    id: 4,
    name: 'Royal Oak Gold Dial Chronograph',
    price: 250,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-golddial-goldchrono/ap-golddial-goldchrono',
    category: 'Audemars Piguet',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-golddial-goldchrono/side.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-golddial-goldchrono/back.jpg"
    ],
    description: `The Audemars Piguet Royal Oak Gold Dial Chronograph exudes opulence and performance. Encased in a 41mm 18k yellow gold case, the radiant gold "Grande Tapisserie" dial is complemented by a matching gold bezel, creating a cohesive and luxurious aesthetic. The gold bracelet offers unmatched comfort, making this chronograph a prestigious choice for those who demand excellence.`,
    isNew: false,
    pricing: {
      "AAA": 179,
      "AAAAA": 0,
      "Super Clone": 589,
      img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/Box%20&%20Certificate.jpg`
    }
  },
  {
    id: 5,
    name: 'Royal Oak Green Dial Silver',
    price: 250,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-greendial-plainsilver/ap-greendial-plainsilver.png',
    category: 'Audemars Piguet',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-greendial-plainsilver/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-greendial-plainsilver/back.webp"
    ],
    description: `The Audemars Piguet Royal Oak Green Dial Silver is a bold expression of modern elegance. Housed in a 41mm stainless steel case, the vibrant green "Grande Tapisserie" dial pairs beautifully with a silver octagonal bezel, offering a fresh and dynamic look. The stainless steel bracelet ensures lasting comfort, making this timepiece ideal for those who embrace individuality and style.`,
    isNew: true,
    pricing: {
      "AAA": 179,
      "AAAAA": 249,
      "Super Clone": 589,
      img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/Box%20&%20Certificate.jpg`
    }
  },
  {
    id: 6,
    name: 'Royal Oak Ice Blue Dial Silver',
    price: 250,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-icebluedial-plainsilver/ap-icebluedial-plainsilver.png',
    category: 'Audemars Piguet',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-icebluedial-plainsilver/angle.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-icebluedial-plainsilver/clasp.webp"
    ],
    description: `The Audemars Piguet Royal Oak Ice Blue Dial Silver radiates cool sophistication and timeless charm. Encased in a 41mm stainless steel case, the serene ice blue "Grande Tapisserie" dial is complemented by a silver bezel, creating a refined aesthetic. The stainless steel bracelet provides exceptional comfort, making this watch a versatile icon for the modern connoisseur.`,
    isNew: false,
    pricing: {
      "AAA": 179,
      "AAAAA": 249,
      "Super Clone": 589,
      img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/Box%20&%20Certificate.jpg`
    }
  },
  {
    id: 7,
    name: 'Royal Oak Offshore Grey Dial Black Bezel Rose Gold',
    price: 275,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-offshore-greydial-blackbezel-rosebody-rubber/ap-offshore-greydial-blackbezel-rosebody-rubber.png',
    category: 'Audemars Piguet',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-offshore-greydial-blackbezel-rosebody-rubber/angle.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-offshore-greydial-blackbezel-rosebody-rubber/back",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-offshore-greydial-blackbezel-rosebody-rubber/open%20clasp.jpg"
    ],
    description: `The Audemars Piguet Royal Oak Offshore Grey Dial Black Bezel Rose Gold is a bold fusion of rugged power and luxurious design. Housed in a 44mm 18k rose gold case, the sophisticated grey "Méga Tapisserie" dial contrasts with a black ceramic bezel, exuding strength and elegance. The rose gold bracelet ensures robust comfort, making this timepiece a commanding choice for those who live boldly.`,
    isNew: true,
    pricing: {
      "AAA": 199,
      "AAAAA": 0,
      "Super Clone": 679,
      img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/Box%20&%20Certificate.jpg`
    }
  },
  {
    id: 8,
    name: 'Royal Oak Black Dial Silver',
    price: 250,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-plainsilver-blackdial/ap-plainsilver-blackdial.png',
    category: 'Audemars Piguet',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-plainsilver-blackdial/angle.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-plainsilver-blackdial/clasp.jpg"
    ],
    description: `The Audemars Piguet Royal Oak Black Dial Silver is a timeless icon of understated luxury. Encased in a 41mm stainless steel case, the sleek black "Grande Tapisserie" dial is paired with a silver octagonal bezel, creating a versatile and sophisticated aesthetic. The stainless steel bracelet offers seamless comfort, making this watch a perfect blend of style and precision.`,
    isNew: false,
    pricing: {
      "AAA": 199,
      "AAAAA": 249,
      "Super Clone": 599,
      img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/Box%20&%20Certificate.jpg`
    }
  },
  {
    id: 9,
    name: 'Royal Oak White Dial Silver',
    price: 250,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-plainsilver-whitedial/ap-plainsilver-whitedial.png',
    category: 'Audemars Piguet',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-plainsilver-whitedial/angle.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-plainsilver-whitedial/clasp.jpg"
    ],
    description: `The Audemars Piguet Royal Oak White Dial Silver exudes crisp elegance and modern sophistication. Housed in a 41mm stainless steel case, the pristine white "Grande Tapisserie" dial is complemented by a silver bezel, offering a clean and timeless look. The stainless steel bracelet ensures durability and comfort, making this timepiece a refined choice for any occasion.`,
    isNew: true,
    pricing: {
      "AAA": 199,
      "AAAAA": 249,
      "Super Clone": 599,
      img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/Box%20&%20Certificate.jpg`
    }
  },
  {
    id: 10,
    name: 'Royal Oak Skeleton Rose Gold',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-skeleton-rose/ap-skeleton-rose.png',
    category: 'Audemars Piguet',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-skeleton-rose/back.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-skeleton-rose/back%20open%20clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-skeleton-rose/clasp.jpg"
    ],
    description: `The Audemars Piguet Royal Oak Skeleton Rose Gold is a breathtaking showcase of horological artistry. Encased in a 41mm 18k rose gold case, the intricate skeletonized dial reveals the meticulous craftsmanship of the movement, paired with the iconic octagonal bezel. The rose gold bracelet offers luxurious comfort, making this timepiece a masterpiece for collectors who value transparency and elegance.`,
    isNew: false,
    pricing: {
      "AAA": 199,
      "AAAAA": 0,
      "Super Clone": 599,
      img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/Box%20&%20Certificate.jpg`
    }
  },
  {
    id: 11,
    name: 'Royal Oak Skeleton Silver',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-skeleton-silver/ap-skeleton-silver.png',
    category: 'Audemars Piguet',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-skeleton-silver/close%20up",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-skeleton-silver/clasp.webp",
    ],
    description: `The Audemars Piguet Royal Oak Skeleton Silver is a stunning display of technical prowess and sleek design. Housed in a 41mm stainless steel case, the skeletonized dial unveils the intricate movement, complemented by a silver octagonal bezel. The stainless steel bracelet ensures exceptional comfort, making this watch a captivating choice for those who appreciate craftsmanship and style.`,
    isNew: true,
    pricing: {
      "AAA": 199,
      "AAAAA": 0,
      "Super Clone": 599,
      img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/Box%20&%20Certificate.jpg`
    }
  },
  {
    id: 12,
    name: 'Royal Oak White Chronograph Silver',
    price: 275,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-whitechrono-plainsilver/ap-whitechrono-plainsilver.png',
    category: 'Audemars Piguet',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-whitechrono-plainsilver/angle.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-whitechrono-plainsilver/clasp.jpg"
    ],
    description: `The Audemars Piguet Royal Oak White Chronograph Silver combines sporty functionality with refined elegance. Encased in a 41mm stainless steel case, the crisp white "Grande Tapisserie" dial is paired with a silver bezel, creating a sophisticated aesthetic. The stainless steel bracelet offers lasting comfort, making this chronograph a versatile icon for performance and style.`,
    isNew: false,
    pricing: {
      "AAA": 199,
      "AAAAA": 0,
      "Super Clone": 589,
      img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/Box%20&%20Certificate.jpg`
    }
  },
  {
    id: 13,
    name: 'Royal Oak Offshore Diver White Dial',
    price: 275,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/audemars-piguet-offshore-diver-whitedial-42/audemars-piguet-offshore-diver-whitedial-42.webp',
    category: 'Audemars Piguet',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/audemars-piguet-offshore-diver-whitedial-42/angle.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/audemars-piguet-offshore-diver-whitedial-42/back%20open.webp",
    ],
    description: `The Audemars Piguet Royal Oak Offshore Diver White Dial is a bold companion for underwater adventures and beyond. Housed in a 42mm stainless steel case, the clean white "Méga Tapisserie" dial is paired with a robust bezel, designed for diving precision. The rubber strap ensures modern comfort and durability, making this timepiece ideal for adventurous spirits with a taste for elegance.`,
    isNew: true,
    pricing: {
      "AAA": 199,
      "AAAAA": 0,
      "Super Clone": 579,
      img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/Box%20&%20Certificate.jpg`
    }
  },
  {
    id: 14,
    name: 'Royal Oak Perpetual Calendar Black Ceramic',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-perpetual-black/ap-perpetual-black.png',
    category: 'Audemars Piguet',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-perpetual-black/angle",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-perpetual-black/clasp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-perpetual-black/back.webp"
    ],
    description: `The Audemars Piguet Royal Oak Perpetual Calendar Black Ceramic is a masterpiece of innovation and avant-garde design. Encased in a 41mm black ceramic case, the intricate black "Grande Tapisserie" dial showcases a perpetual calendar complication, paired with a matching ceramic bezel. The ceramic bracelet offers sleek comfort, making this timepiece a bold statement of cutting-edge luxury and precision.`,
    isNew: true,
    pricing: {
      "AAA": 0,
      "AAAAA": 0,
      "Super Clone": 549,
      img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/Box%20&%20Certificate.jpg`
    }
  }
];

const AudemarsPiguetPage: React.FC = () => {
  const { setProducts } = useCart()

  useEffect(() => {
    // console.log(womensAPWatches);
    // 
    localStorage.setItem('productList', JSON.stringify(apWatches))
    localStorage.setItem('category', 'apy')
    setProducts({ productList: apWatches, category: 'apy' })
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
              <span className="text-gold-500">Audemars Piguet</span>
            </div>

            <SectionTitle
              title="Audemars Piguet Collection"
              subtitle="Experience our finest selection of premium Audemars Piguet timepieces"
              centered
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {apWatches.map((watch) => (
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

export default AudemarsPiguetPage;
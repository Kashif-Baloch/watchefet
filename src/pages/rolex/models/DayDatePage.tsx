import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import ProductCard from '../../../components/product/ProductCard';
import SectionTitle from '../../../components/common/SectionTitle';
import { useCart } from '../../../context/CartContext';

const dayDateWatches = [
  {
    id: 1,
    name: 'Day-Date 40 Rose Gold Brown Roman Dial',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-browndial-roman-rosegold-fluted-40/daydate-browndial-roman-rosegold-fluted-40.png',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-browndial-roman-rosegold-fluted-40/side",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-browndial-roman-rosegold-fluted-40/clasp.webp",
    ],
    description: "The Rolex Day-Date 40 in 18k rose gold with a brown Roman numeral dial is the epitome of luxury and sophistication. This iconic timepiece features a fluted bezel that enhances its distinctive Rolex profile, while the President bracelet provides exceptional comfort and elegance. The warm tones of the rose gold case and bracelet perfectly complement the rich brown dial, creating a harmonious and luxurious aesthetic. The Day-Date was the first wristwatch to display the date and day of the week spelled out in full in a window on the dial, and continues to be the watch par excellence of influential people.",
    isNew: true,
  },
  {
    id: 2,
    name: 'Day-Date 40 Gold Diamond-Set President',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-golddial-champagne-goldpresident-diamondset-40/daydate-golddial-champagne-goldpresident-diamondset-40',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-golddial-champagne-goldpresident-diamondset-40/close%20up.png",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-golddial-champagne-goldpresident-diamondset-40/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-golddial-champagne-goldpresident-diamondset-40/back.webp",
    ],
    description: "The Rolex Day-Date 40 in 18k yellow gold with diamond-set bezel, hour markers, and President bracelet represents the pinnacle of luxury and prestige. This magnificent timepiece features a champagne gold dial that perfectly complements the diamond embellishments, creating an extraordinary display of opulence. The Day-Date was the first wristwatch to display the date and day of the week spelled out in full in a window on the dial. With the President bracelet, originally created specifically for it, the Day-Date continues to be the watch par excellence of influential people, and remains the ultimate status watch. The diamond setting on this model elevates it to an even higher level of exclusivity and luxury.",
    isNew: false,
  },
  {
    id: 3,
    name: 'Day-Date 40 Black Dial Gold',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-blackdial-champagne-gold-fluted-40/daydate-blackdial-champagne-gold-fluted-40.png',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-blackdial-champagne-gold-fluted-40/back.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-blackdial-champagne-gold-fluted-40/clasp.webp",
    ],
    description: "The Rolex Day-Date 40 in 18k yellow gold with a black dial is a statement of luxury and prestige. This iconic timepiece features a fluted bezel that enhances its distinctive Rolex profile, while the President bracelet provides exceptional comfort and elegance. The contrast between the rich black dial and the warm yellow gold case creates a bold and sophisticated aesthetic. The Day-Date was the first wristwatch to display the date and day of the week spelled out in full in a window on the dial, and continues to be the watch par excellence of influential people.",
    isNew: true,
  },
  {
    id: 4,
    name: 'Day-Date 40 Mother of Pearl Diamond Dial',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-mop-diamond-silverjubilee-40/daydate-mop-diamond-silverjubilee-40.webp',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-mop-diamond-silverjubilee-40/back.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-mop-diamond-silverjubilee-40/clasp.webp",
    ],
    description: "The Rolex Day-Date 40 with a mother of pearl diamond dial is a masterpiece of opulence and refinement. Encased in a 40mm case, this timepiece showcases a mesmerizing mother of pearl dial adorned with sparkling diamond hour markers, exuding unparalleled elegance. The iconic President bracelet ensures supreme comfort and a distinguished aesthetic, while the fluted bezel enhances its luxurious allure, making it a statement of timeless sophistication",
    isNew: false,
  },
  {
    id: 5,
    name: 'Day-Date 40 White Dial Gold',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-whitedial-champagne-gold-fluted/daydate-whitedial-champagne-gold-fluted',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-whitedial-champagne-gold-fluted/close%20up.png",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-whitedial-champagne-gold-fluted/clasp.webp"
    ],
    description: "The Rolex Day-Date 40 in 18k yellow gold with a crisp white dial epitomizes understated luxury and precision. The 40mm case is complemented by a fluted bezel, adding a touch of classic Rolex distinction. Paired with the iconic President bracelet, this watch offers exceptional comfort and elegance, with the radiant white dial providing a clean, sophisticated backdrop for the day and date display, a hallmark of influential style.",
    isNew: true,
  },
  {
    id: 6,
    name: 'Day-Date 40 Green Dial Gold',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-greendial-roman-gold-fluted-40/daydate-greendial-roman-gold-fluted-40.png',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-greendial-roman-gold-fluted-40/side",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-greendial-roman-gold-fluted-40/clasp.webp"
    ],
    description: "The Rolex Day-Date 40 in 18k rose gold with a striking green dial is a bold yet elegant expression of luxury. Housed in a 40mm case, the vibrant green dial captures attention while maintaining refined sophistication. The fluted bezel and President bracelet elevate its iconic design, offering both comfort and prestige. This timepiece blends modern flair with Rolex’s heritage, perfect for those who command attention.",
    isNew: true,
  },
  {
    id: 7,
    name: 'Day-Date 40 Brown Dial Rose Gold',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-browndial-champagne-rosegold-fluted/daydate-browndial-champagne-rosegold-fluted',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-browndial-champagne-rosegold-fluted/side",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-browndial-champagne-rosegold-fluted/clasp.webp"      
    ],
    description: "The Rolex Day-Date 40 in 18k rose gold with a rich brown dial is the epitome of warmth and sophistication. The 40mm case, paired with a fluted bezel, enhances its distinguished silhouette, while the President bracelet ensures unmatched comfort and elegance. The deep brown dial harmonizes beautifully with the rose gold tones, creating a luxurious and cohesive aesthetic that embodies timeless prestige.",
    isNew: true,
  },
  {
    id: 8,
    name: 'Day-Date 40 Ice Blue Dial',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-icebluedial-champagne-silver-smooth/daydate-icebluedial-champagne-silver-smooth',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-icebluedial-champagne-silver-smooth/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-icebluedial-champagne-silver-smooth/back.webp"
    ],
    description: "The Rolex Day-Date 40 with an ice blue dial is a vision of cool elegance and exclusivity. Encased in a 40mm case, the serene ice blue dial offers a distinctive and sophisticated charm, complemented by the iconic fluted bezel. The President bracelet provides exceptional comfort and a refined aesthetic, making this timepiece a perfect blend of innovation and classic Rolex luxury.",
    isNew: true,
  },
  {
    id: 9,
    name: 'Day-Date 40 White Roman Dial Gold',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-whitedial-roman-gold-fluted-40/daydate-whitedial-roman-gold-fluted-40.png',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-whitedial-roman-gold-fluted-40/clasp.webp",
    ],
    description: "The Rolex Day-Date 40 in 18k yellow gold with a white Roman numeral dial exudes timeless elegance and authority. The 40mm case, accented by a fluted bezel, frames the pristine white dial adorned with classic Roman numerals, evoking a sense of tradition and prestige. Paired with the President bracelet, this watch offers unmatched comfort and sophistication, ideal for those who value heritage and influence.",
    isNew: true,
  }
];

const DayDatePage: React.FC = () => {
  const { setProducts } = useCart()

  useEffect(() => {
    localStorage.setItem('productList', JSON.stringify(dayDateWatches))
    localStorage.setItem('category', 'daydate')
    setProducts({productList: dayDateWatches, category: 'daydate'})
    // setProducts(dayDateWatches)
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
              <span className="text-gold-500">Day-Date</span>
            </div>

            <SectionTitle
              title="Rolex Day-Date Collection"
              subtitle="The prestigious model that displays both the date and day of the week"
              centered
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {dayDateWatches.map((watch) => (
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

export default DayDatePage;
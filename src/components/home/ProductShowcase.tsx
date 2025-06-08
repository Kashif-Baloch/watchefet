import React, { useEffect } from 'react';
import ProductCard from '../product/ProductCard';
import SectionTitle from '../common/SectionTitle';
import { useCart } from '../../context/CartContext';

const watches = [
  {
    id: 1,
    name: 'Day-Date 40 Rose Gold Brown Roman Dial',
    price: 149,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-browndial-roman-rosegold-fluted-40/daydate-browndial-roman-rosegold-fluted-40.png',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-browndial-roman-rosegold-fluted-40/side",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-browndial-roman-rosegold-fluted-40/clasp.webp",
    ],
    description: "The Rolex Day-Date 40 in 18k rose gold with a brown Roman numeral dial is the epitome of luxury and sophistication. This iconic timepiece features a fluted bezel that enhances its distinctive Rolex profile, while the President bracelet provides exceptional comfort and elegance. The warm tones of the rose gold case and bracelet perfectly complement the rich brown dial, creating a harmonious and luxurious aesthetic. The Day-Date was the first wristwatch to display the date and day of the week spelled out in full in a window on the dial, and continues to be the watch par excellence of influential people.",
    isNew: true,
    cate: true,
    pricing: {
      "AAA": 179,
      "AAAAA": 299,
      "Super Clone": 559,
      img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Box.jpg`
    }
  },
  {
    id: 2,
    name: 'Datejust 41mm Diamond Dial with Fluted Bezel',
    price: 129,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-greydial-diamond-silverjubilee-41/datejust-greydial-diamond-silverjubilee-41.jpg',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-greydial-diamond-silverjubilee-41/back",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-greydial-diamond-silverjubilee-41/clasp.jpg"
    ],
    description: "The Rolex Datejust 41 is the epitome of classic style and functionality. This model features a stunning grey dial with diamond hour markers housed in a 41mm case, perfectly balanced for both elegance and presence on the wrist. The signature Jubilee bracelet provides exceptional comfort and sophistication, while the fluted bezel adds a distinctive touch of luxury.",
    isNew: true,
    cate: true,
    pricing: {
      "AAA": 179,
      "AAAAA": 299,
      "Super Clone": 559,
      img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Box.jpg`
    }
  },
  {
    id: 3,
    name: 'Nautilus Tiffany Blue Dial Silver',
    price: 275,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-tiffanydial-silver/patek-nautilus-tiffanydial-silver.png',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-tiffanydial-silver/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-tiffanydial-silver/back.jpg"
    ],
    description:"The Patek Philippe Nautilus Tiffany Blue Dial Silver is a rare and captivating icon of exclusivity. Encased in a 40mm stainless steel case, the stunning Tiffany blue dial with its embossed texture radiates serene sophistication, complemented by a polished stainless steel bezel. The stainless steel bracelet provides exceptional comfort, making this watch a coveted masterpiece for collectors.",
    isNew: true,
    cate: true,
    pricing: {
      "AAA": 199,
      "AAAAA": 299,
      "Super Clone": 599,
      img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/Box%20&%20Certificate.jpg`
    }
  },
  {
    id: 4,
    name: 'Royal Oak Perpetual Calendar - Black Ceramic',
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
    cate: true,
    pricing: {
      "AAA": 0,
      "AAAAA": 0,
      "Super Clone": 549,
      img: `https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/Box%20&%20Certificate.jpg`
    }
  },
];

const ProductShowcase: React.FC = () => {
   const { setProducts } = useCart()
  
    useEffect(() => {
      // console.log(womensAPWatches);
      // 
      
      localStorage.setItem('productList', JSON.stringify(watches))
      localStorage.setItem('category', 'watches')
    setProducts({productList: watches, category: 'watches'})
      // setProducts(watches)
    }, []);
  return (
    <section className="py-20 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Timepieces"
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {watches.map((watch) => (
            <ProductCard key={watch.id} product={watch} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
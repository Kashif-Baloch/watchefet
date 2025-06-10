import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ProductCard from '../../components/product/ProductCard';
import SectionTitle from '../../components/common/SectionTitle';
import { useCart } from '../../context/CartContext';

const womensPatekWatches = [
  // Aquanaut Collection
  {
    id: 1,
    name: 'Aquanaut Black Dial Diamond Bezel',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-blackdial-silverdiamondbezel-blackrubber/patek-aquanaut-blackdial-silverdiamondbezel-blackrubber.png',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-blackdial-silverdiamondbezel-blackrubber/side.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-blackdial-silverdiamondbezel-blackrubber/clasp.webp"
    ],
    description :`The Patek Philippe Aquanaut Black Dial Diamond Bezel is a bold yet elegant statement of modern luxury. Housed in a 35.6mm stainless steel case, the sleek black dial with its "Tropical" embossed pattern is complemented by a sparkling diamond-set bezel. The black rubber strap ensures sporty comfort, making this timepiece ideal for those who embrace dynamic style and sophistication.`,
    isNew: true,
  },
  {
    id: 2,
    name: 'Aquanaut Blue Dial Diamond Bezel',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-bluedial-silverdiamondbezel-bluerubber/patek-aquanaut-bluedial-silverdiamondbezel-bluerubber.png',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-bluedial-silverdiamondbezel-bluerubber/side.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-bluedial-silverdiamondbezel-bluerubber/open%20clasp.jpg"
    ],
    description :`The Patek Philippe Aquanaut Blue Dial Diamond Bezel radiates vibrant elegance with a touch of glamour. Encased in a 35.6mm stainless steel case, the striking blue dial with its embossed texture is enhanced by a dazzling diamond-set bezel. The blue rubber strap offers modern comfort, making this watch a perfect blend of sporty functionality and luxurious charm.`,
    isNew: false,
  },
  {
    id: 3,
    name: 'Aquanaut Brown Dial Rose Gold Diamond Bezel',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-browndial-rosediamondbezel-brownrubber/patek-aquanaut-browndial-rosediamondbezel-brownrubber.png',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-browndial-rosediamondbezel-brownrubber/angle.png",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-browndial-rosediamondbezel-brownrubber/clasp.png"
    ],
    description :`The Patek Philippe Aquanaut Brown Dial Rose Gold Diamond Bezel exudes warmth and opulent sophistication. Housed in a 35.6mm 18k rose gold case, the rich brown dial with its "Tropical" embossed pattern is paired with a sparkling diamond-set bezel, creating a luxurious aesthetic. The brown rubber strap ensures stylish comfort, perfect for those with refined taste.`,
    isNew: true,
  },
  {
    id: 4,
    name: 'Aquanaut Green Dial Diamond Bezel',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-greendial-silverdiamondbezel-greenrubber/patek-aquanaut-greendial-silverdiamondbezel-greenrubber.png',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-greendial-silverdiamondbezel-greenrubber/close%20up",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-greendial-silverdiamondbezel-greenrubber/clasp.webp"
    ],
    description :`The Patek Philippe Aquanaut Green Dial Diamond Bezel is a vibrant expression of contemporary elegance. Encased in a 35.6mm stainless steel case, the bold green dial with its embossed texture is complemented by a dazzling diamond-set bezel. The green rubber strap provides modern comfort, making this timepiece a standout for those who embrace individuality and luxury.`,
    isNew: false,
  },
  {
    id: 5,
    name: 'Aquanaut Mother of Pearl Rose Gold Diamond Bezel',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-mop-rosediamondbezel-pinkbeigerubber/patek-aquanaut-mop-rosediamondbezel-pinkbeigerubber.png',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-mop-rosediamondbezel-pinkbeigerubber/back.png",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-mop-rosediamondbezel-pinkbeigerubber/clasp.png"
    ],
    description :`The Patek Philippe Aquanaut Mother of Pearl Rose Gold Diamond Bezel is a breathtaking vision of feminine luxury. Housed in a 35.6mm 18k rose gold case, the iridescent mother of pearl dial is enhanced by a sparkling diamond-set bezel, exuding ethereal elegance. The rose gold-toned rubber strap ensures refined comfort, making this watch a coveted masterpiece.`,
    isNew: true,
  },
  {
    id: 6,
    name: 'Aquanaut White Dial Gold Diamond Bezel',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-whitedial-golddiamondbezel-whiterubber/patek-aquanaut-whitedial-golddiamondbezel-whiterubber.png',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-whitedial-golddiamondbezel-whiterubber/angle",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-whitedial-golddiamondbezel-whiterubber/side.webp"
    ],
    description :`The Patek Philippe Aquanaut White Dial Gold Diamond Bezel radiates opulence and timeless charm. Encased in a 35.6mm 18k yellow gold case, the pristine white dial with its "Tropical" embossed pattern is paired with a dazzling diamond-set bezel. The white rubber strap offers a striking contrast and modern comfort, making this timepiece a luxurious choice for elegant style.`,
    isNew: false,
  },
  {
    id: 7,
    name: 'Aquanaut White Dial Diamond Bezel',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-whitedial-silverdiamondbezel-whiterubber/patek-aquanaut-whitedial-silverdiamondbezel-whiterubber.png',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-whitedial-silverdiamondbezel-whiterubber/close%20up",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-whitedial-silverdiamondbezel-whiterubber/angle.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Aquanaut/patek-aquanaut-whitedial-silverdiamondbezel-whiterubber/clasp.webp"
    ],
    description :`The Patek Philippe Aquanaut White Dial Diamond Bezel exudes crisp elegance and sporty sophistication. Housed in a 35.6mm stainless steel case, the clean white dial with its embossed texture is complemented by a sparkling diamond-set bezel. The white rubber strap ensures contemporary comfort, making this watch a versatile icon for dynamic lifestyles.`,
    isNew: true,
  },

  // Nautilus Collection
  {
    id: 8,
    name: 'Nautilus Black Dial',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-blackdial-silver/patek-nautilus-blackdial-silver.png',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-blackdial-silver/angle.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-blackdial-silver/back.png",
    ],
    description :`The Patek Philippe Nautilus Black Dial is a timeless icon of sporty elegance. Housed in a 40mm stainless steel case, the sleek black dial with its horizontal embossed pattern is paired with a rounded octagonal bezel, exuding understated sophistication. The stainless steel bracelet ensures exceptional comfort, making this timepiece a versatile choice for the modern connoisseur.`,
    isNew: false,
  },
  {
    id: 9,
    name: 'Nautilus Blue Dial',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-bluedial-silver/patek-nautilus-bluedial-silver.png',
    category: 'Patek Philippe',
    imagesList :[ 
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-bluedial-silver/side.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-bluedial-silver/clasp.webp",
    ],
    description :`The Patek Philippe Nautilus Blue Dial radiates vibrant sophistication and timeless charm. Encased in a 40mm stainless steel case, the iconic blue dial with its horizontal embossed pattern is complemented by a sleek bezel, creating a dynamic aesthetic. The stainless steel bracelet offers seamless comfort, making this watch a perfect companion for refined style.`,
    isNew: true,
  },
  // {
  //   id: 10,
  //   name: 'Nautilus Brown Dial Gold',
  //   price: 199,
  //   image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-browndial-gold/patek-nautilus-browndial-gold.png',
  //   category: 'Patek Philippe',
  //   imagesList :[
  //     "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-browndial-gold/side.webp",
  //     "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-browndial-gold/clasp.webp",
  //   ],
  //   description :`The Patek Philippe Nautilus Brown Dial Gold exudes warmth and luxurious elegance. Housed in a 40mm 18k yellow gold case, the rich brown dial with its embossed texture harmonizes with the iconic octagonal bezel, creating a sophisticated aesthetic. The gold bracelet ensures supreme comfort, making this timepiece a prestigious choice for those who value opulence.`,
  //   isNew: false,
  // },
  // {
  //   id: 11,
  //   name: 'Nautilus Champagne Dial Gold',
  //   price: 199,
  //   image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-champagnedial-gold/patek-nautilus-champagnedial-gold.png',
  //   category: 'Patek Philippe',
  //   imagesList :[
  //     "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-champagnedial-gold/side.webp",
  //     "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-champagnedial-gold/clasp.webp",
  //   ],
  //   description :`The Patek Philippe Nautilus Champagne Dial Gold exudes warmth and luxurious elegance. Housed in a 40mm 18k yellow gold case, the rich champagne dial with its embossed texture harmonizes with the iconic octagonal bezel, creating a sophisticated aesthetic. The gold bracelet ensures supreme comfort, making this timepiece a prestigious choice for those who value opulence.`,
  //   isNew: true,
  // },
  {
    id: 12,
    name: 'Nautilus Brown Dial Rose Gold',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-browndial-rose/patek-nautilus-browndial-rose.png',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-browndial-rose/open%20clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-browndial-rose/clasp.webp",
    ],
    description :`The Patek Philippe Nautilus Brown Dial Rose Gold exudes warmth and luxurious elegance. Housed in a 40mm 18k rose gold case, the rich brown dial with its embossed texture harmonizes with the iconic octagonal bezel, creating a sophisticated aesthetic. The gold bracelet ensures supreme comfort, making this timepiece a prestigious choice for those who value opulence.`,
    isNew: false,
  },
  {
    id: 13,
    name: 'Nautilus Grey Dial',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-greydial-silver/patek-nautilus-greydial-silver.png',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-greydial-silver/angle",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-greydial-silver/clasp.png",
    ],
    description :`The Patek Philippe Nautilus Grey Dial exudes understated sophistication and modern elegance. Encased in a 40mm stainless steel case, the sleek grey dial with its horizontal embossed pattern is paired with a polished bezel, offering a versatile and timeless look. The stainless steel bracelet ensures lasting comfort, making this watch ideal for any occasion.`,
    isNew: true,
  },
  {
    id: 14,
    name: 'Nautilus White Dial Gold',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-whitedial-gold/patek-nautilus-whitedial-gold.png',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-whitedial-gold/close%20up.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-whitedial-gold/clasp",
    ],
    description :`The Patek Philippe Nautilus White Dial Gold is a radiant expression of luxury and refinement. Housed in a 40mm 18k yellow gold case, the pristine white dial with its embossed texture is complemented by a polished octagonal bezel, creating a clean and opulent aesthetic. The gold bracelet offers supreme comfort, making this timepiece a prestigious choice.`,
    isNew: false,
  },
  {
    id: 15,
    name: 'Nautilus White Dial Rose Gold',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-whitedial-rose/patek-nautilus-whitedial-rose.png',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-whitedial-rose/close%20up",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-whitedial-rose/open%20clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-whitedial-rose/clasp",
    ],
    description :`The Patek Philippe Nautilus White Dial Rose Gold combines elegant simplicity with luxurious warmth. Encased in a 40mm 18k rose gold case, the crisp white dial with its horizontal embossed pattern is paired with a rounded octagonal bezel, exuding refined sophistication. The rose gold bracelet ensures exceptional comfort, perfect for those who value timeless luxury.`,
    isNew: true,
  },
  {
    id: 16,
    name: 'Nautilus White Dial',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-whitedial-silver/patek-nautilus-whitedial-silver.png',
    category: 'Patek Philippe',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-whitedial-silver/angle.png",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-whitedial-silver/open%20clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Patek/Nautilus/patek-nautilus-whitedial-silver/clasp",
    ],
    description :`The Patek Philippe Nautilus White Dial is a timeless icon of sporty elegance and versatility. Housed in a 40mm stainless steel case, the clean white dial with its horizontal embossed pattern is complemented by a sleek octagonal bezel, creating a refined aesthetic. The stainless steel bracelet offers seamless comfort, making this watch a perfect choice for modern sophistication.`,
    isNew: false,
  }
];

const PatekPhilippeWomensPage: React.FC = () => {

   const { setProducts } = useCart()
  
    useEffect(() => {
      // console.log(womensAPWatches);
      // 
      localStorage.setItem('productList', JSON.stringify(womensPatekWatches))
      localStorage.setItem('category', 'w-patek')
    setProducts({productList: womensPatekWatches, category: 'w-patek'})
      // setProducts(womensPatekWatches)
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
              <Link to="/womens-collection" className="hover:text-gold-500">Women's Collection</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gold-500">Patek Philippe</span>
            </div>

            <SectionTitle
              title="Women's Patek Philippe Collection"
              subtitle="Discover our selection of exquisite Aquanaut and Nautilus timepieces for women"
              centered
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {womensPatekWatches.map((watch) => (
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

export default PatekPhilippeWomensPage;
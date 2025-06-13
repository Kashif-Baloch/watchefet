import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ProductCard from '../../components/product/ProductCard';
import SectionTitle from '../../components/common/SectionTitle';
import { useCart } from '../../context/CartContext';

const womensAPWatches = [
  {
    id: 1,
    reviews: 19,
    name: 'Royal Oak 33mm Blue Dial Diamond Bezel Rose Gold',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/AP/ap-royaloak-bluedial-diamondbezel-rose-33/ap-royaloak-bluedial-diamondbezel-rose-33.jpg',
    category: 'Audemars Piguet',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/AP/ap-royaloak-bluedial-diamondbezel-rose-33/angle.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/AP/ap-royaloak-bluedial-diamondbezel-rose-33/side.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/AP/ap-royaloak-bluedial-diamondbezel-rose-33/clasp.jpg"
    ],
    description :`The Audemars Piguet Royal Oak 33mm Blue Dial Diamond Bezel Rose Gold is a dazzling fusion of elegance and opulence. Housed in a 33mm 18k rose gold case, the vibrant blue "Grande Tapisserie" dial exudes sophistication, complemented by a sparkling diamond-set bezel. The rose gold bracelet ensures exceptional comfort, making this timepiece a luxurious choice for refined feminine style.
`,
    isNew: false,
  },
  {
    id: 2,
    reviews: 11,
    name: 'Royal Oak 33mm Gold Dial Two-Tone Rose Gold',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/AP/ap-royaloak-golddial-2tonesilverrose-33/ap-royaloak-golddial-2tonesilverrose-33.png',
    category: 'Audemars Piguet',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/AP/ap-royaloak-golddial-2tonesilverrose-33/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/AP/ap-royaloak-golddial-2tonesilverrose-33/clasp2.webp"
    ],
    description :`The Audemars Piguet Royal Oak 33mm Gold Dial Two-Tone Rose Gold radiates warmth and timeless luxury. Encased in a 33mm case of stainless steel and 18k rose gold, the rich gold "Grande Tapisserie" dial harmonizes with the iconic octagonal bezel, creating a refined aesthetic. The two-tone bracelet offers seamless comfort, perfect for those who cherish elegance and versatility.
`,
    isNew: false,
  },
  {
    id: 3,
    reviews: 18,
    name: 'Royal Oak 33mm White Dial Two-Tone Gold',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/AP/ap-royaloak-whitedial-2tonesilvergold-33/ap-royaloak-whitedial-2tonesilvergold-33.png',
    category: 'Audemars Piguet',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/AP/ap-royaloak-whitedial-2tonesilvergold-33/angle.webp"
    ],
    description :`The Audemars Piguet Royal Oak 33mm White Dial Two-Tone Gold exudes crisp elegance and sophisticated charm. Housed in a 33mm case of stainless steel and 18k yellow gold, the pristine white "Grande Tapisserie" dial is paired with a classic octagonal bezel, offering a timeless look. The two-tone bracelet ensures lasting comfort, making this watch a versatile icon for any occasion.
`,
    isNew: false,
  },
  {
    id: 4,
    reviews: 18,
    name: 'Royal Oak 33mm White Dial Diamond Bezel Two-Tone Rose',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/AP/ap-royaloak-whitedial-diamondbezel-2tonerosesilver-33/ap-royaloak-whitedial-diamondbezel-2tonerosesilver-33.jpg',
    category: 'Audemars Piguet',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/AP/ap-royaloak-whitedial-diamondbezel-2tonerosesilver-33/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/AP/ap-royaloak-whitedial-diamondbezel-2tonerosesilver-33/clasp2.webp"
    ],
    description :`The Audemars Piguet Royal Oak 33mm White Dial Diamond Bezel Two-Tone Rose combines sparkling luxury with refined design. Encased in a 33mm case of stainless steel and 18k rose gold, the clean white "Grande Tapisserie" dial is enhanced by a dazzling diamond-set bezel. The two-tone bracelet provides exceptional comfort, making this timepiece a radiant choice for sophisticated style.
`,
    isNew: false,
  },
  {
    id: 5,
    reviews: 29,
    name: 'Royal Oak 33mm Dark Brown Dial Rose Gold',
    price: 199,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/AP/royaloak-darkbrowndial-rose-33/royaloak-darkbrowndial-rose-33.png',
    category: 'Audemars Piguet',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/AP/royaloak-darkbrowndial-rose-33/angle.png",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/AP/royaloak-darkbrowndial-rose-33/clasp.png",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/AP/royaloak-darkbrowndial-rose-33/back"
    ],
    description :`The Audemars Piguet Royal Oak 33mm Dark Brown Dial Rose Gold is a warm embodiment of luxury and elegance. Housed in a 33mm 18k rose gold case, the rich dark brown "Grande Tapisserie" dial harmonizes with the iconic octagonal bezel, creating a sophisticated aesthetic. The rose gold bracelet offers supreme comfort, making this watch a perfect choice for those who value understated opulence.
`,
    isNew: false,
  }
];


const AudemarsPiguetWomensPage: React.FC = () => {


  const { setProducts } = useCart()

  useEffect(() => {
    // console.log(womensAPWatches);
    // 
    localStorage.setItem('productList', JSON.stringify(womensAPWatches))
    localStorage.setItem('category', 'w-ap')
    setProducts({productList: womensAPWatches, category: 'w-ap'})
    // setProducts(womensAPWatches)
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
              <span className="text-gold-500">Audemars Piguet</span>
            </div>

            <SectionTitle
              title="Women's Audemars Piguet Collection"
              subtitle="Discover our selection of elegant Royal Oak timepieces for women"
              centered
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {womensAPWatches.map((watch) => (
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

export default AudemarsPiguetWomensPage;
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import ProductCard from '../../../components/product/ProductCard';
import SectionTitle from '../../../components/common/SectionTitle';
import { useCart } from '../../../context/CartContext';

const yachtMasterWatches = [
  {
    id: 1,
    reviews: 12,
    name: 'Yacht-Master 42 Black Gold',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-blackdial-blackbezel-goldbody-rubber-42/yachtmaster-blackdial-blackbezel-goldbody-rubber-42.jpg',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-blackdial-blackbezel-goldbody-rubber-42/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-blackdial-blackbezel-goldbody-rubber-42/back%20open%20clasp.webp"
    ],
    description :"The Rolex Yacht-Master 42 Black Gold is a bold fusion of nautical prowess and opulent luxury. Housed in a 42mm 18k yellow gold case, the sleek black dial exudes timeless sophistication, paired with a bidirectional rotatable bezel for a sporty yet elegant aesthetic. The Oyster bracelet in gold ensures supreme comfort, making this timepiece a luxurious choice for maritime adventurers.",
    isNew: false,
  },
  {
    id: 2,
    reviews: 17,
    name: 'Yacht-Master 40 Black Rose Gold',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-blackdial-blackbezel-rosebody-rubber-40/yachtmaster-blackdial-blackbezel-rosebody-rubber-40.jpg',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-blackdial-blackbezel-rosebody-rubber-40/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-blackdial-blackbezel-rosebody-rubber-40/back.webp"
    ],
    description :"The Rolex Yacht-Master 40 Black Rose Gold epitomizes refined elegance with a nautical spirit. Encased in a 40mm 18k rose gold case, the deep black dial harmonizes with a bidirectional Cerachrom bezel, creating a striking contrast. The Oyster bracelet in rose gold offers exceptional comfort, making this watch a sophisticated companion for both sea and shore.",
    isNew: false,
  },
  {
    id: 3,
    reviews: 28,
    name: 'Yacht-Master 42 Black Silver',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-blackdial-blackbezel-silverbody-rubber/yachtmaster-blackdial-blackbezel-silverbody-rubber',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-blackdial-blackbezel-silverbody-rubber/side.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-blackdial-blackbezel-silverbody-rubber/clasp.webp"
    ],
    description :"The Rolex Yacht-Master 42 Black Silver combines rugged functionality with timeless style. Housed in a 42mm Oystersteel case, the bold black dial is complemented by a sleek silver bidirectional bezel, offering a versatile aesthetic. The Oyster bracelet ensures durability and comfort, making this timepiece ideal for those who navigate life with confidence and elegance.",
    isNew: false,
  },
  {
    id: 4,
    reviews: 29,
    name: 'Yacht-Master 42 Black Silver Oyster',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-blackdial-blackbezel-silveroyster42/yachtmaster-blackdial-blackbezel-silveroyster42.png',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-blackdial-blackbezel-silveroyster42/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-blackdial-blackbezel-silveroyster42/back.webp"
    ],
    description :"The Rolex Yacht-Master 42 Black Silver Oyster is a masterful blend of durability and sophistication. Encased in a 42mm Oystersteel case, the black dial pairs seamlessly with a silver bidirectional Cerachrom bezel, evoking nautical precision. The Oyster bracelet provides robust comfort, making this watch a perfect choice for adventurers seeking style and reliability.",
    isNew: false,
  },
  {
    id: 5,
    reviews: 12,
    name: 'Yacht-Master 40 Black Two-Tone Rose',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-blackdial-rosebezel-2tonesilverrose-oyster-40/yachtmaster-blackdial-rosebezel-2tonesilverrose-oyster-40.png',
    category: 'Rolex',
    imagesList :[
     "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-blackdial-rosebezel-2tonesilverrose-oyster-40/clasp.webp",
"https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-blackdial-rosebezel-2tonesilverrose-oyster-40/back.webp"
    ],
    description :"The Rolex Yacht-Master 40 Black Two-Tone Rose blends luxurious warmth with maritime functionality. Housed in a 40mm case of Oystersteel and 18k rose gold, the sleek black dial is enhanced by a bidirectional Cerachrom bezel, creating a refined aesthetic. The two-tone Oyster bracelet ensures comfort and elegance, ideal for those who sail through life with sophistication.",
    isNew: false,
  },
  {
    id: 6,
    reviews: 16,
    name: 'Yacht-Master 40 Blue Silver',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-bluedial-silverbezel-silveroyster-40/yachtmaster-bluedial-silverbezel-silveroyster-40.png',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-bluedial-silverbezel-silveroyster-40/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-bluedial-silverbezel-silveroyster-40/back.webp"
    ],
    description :"The Rolex Yacht-Master 40 Blue Silver radiates vibrant elegance with a nautical edge. Encased in a 40mm Oystersteel case, the stunning blue dial is paired with a silver bidirectional bezel, offering a fresh and dynamic look. The Oyster bracelet provides lasting comfort, making this timepiece a versatile choice for maritime and metropolitan adventures alike.",
    isNew: false,
  },
  {
    id: 7,
    reviews: 24,
    name: 'Yacht-Master 40 Chocolate Two-Tone Rose',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-chocdial-rosebezel-2tonesilverrose-oyster-40/yachtmaster-chocdial-rosebezel-2tonesilverrose-oyster-40.png',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-chocdial-rosebezel-2tonesilverrose-oyster-40/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-chocdial-rosebezel-2tonesilverrose-oyster-40/back.webp"
    ],
    description :"The Rolex Yacht-Master 40 Chocolate Two-Tone Rose exudes warmth and luxury. Housed in a 40mm case of Oystersteel and 18k rose gold, the rich chocolate dial complements the bidirectional Cerachrom bezel, creating a harmonious aesthetic. The two-tone Oyster bracelet offers exceptional comfort, making this watch a sophisticated choice for those with discerning taste.",
    isNew: false,
  },
  {
    id: 8,
    reviews: 19,
    name: 'Yacht-Master 40 Pavé Diamond',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-pave-40/yachtmaster-pave-40.png',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-pave-40/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-pave-40/back.webp"
    ],
    description :"The Rolex Yacht-Master 40 Pavé Diamond is a dazzling masterpiece of luxury and craftsmanship. Encased in a 40mm case, the pavé diamond dial sparkles with unparalleled brilliance, paired with a bidirectional bezel for a touch of nautical flair. The Oyster bracelet ensures comfort and elegance, making this timepiece a stunning statement for the elite.",
    isNew: false,
  },
  {
    id: 9,
    reviews: 25,
    name: 'Yacht-Master 40 Silver',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-silverdial-silverbezel-silveroyster40/yachtmaster-silverdial-silverbezel-silveroyster40.jpg',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-silverdial-silverbezel-silveroyster40/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-silverdial-silverbezel-silveroyster40/back.webp"
    ],
    description :"The Rolex Yacht-Master 40 Silver is a timeless icon of nautical elegance. Housed in a 40mm Oystersteel case, the sleek silver dial is complemented by a matching bidirectional bezel, creating a clean and sophisticated aesthetic. The Oyster bracelet offers durability and comfort, making this watch a perfect companion for those who value style and precision.",
    isNew: false,
  }
];

const YachtMasterPage: React.FC = () => {
   const { setProducts } = useCart()
  
    useEffect(() => {
      // console.log(womensAPWatches);
      // 
      localStorage.setItem('productList', JSON.stringify(yachtMasterWatches))
      localStorage.setItem('category', 'yachtmaster')
    setProducts({productList: yachtMasterWatches, category: 'yachtmaster'})
      // setProducts(yachtMasterWatches)
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
              <span className="text-gold-500">Yacht-Master</span>
            </div>

            <SectionTitle
              title="Rolex Yacht-Master Collection"
              subtitle="The luxurious nautical watch designed for both function and style"
              centered
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {yachtMasterWatches.map((watch) => (
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

export default YachtMasterPage;
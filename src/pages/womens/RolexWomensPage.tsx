import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ProductCard from '../../components/product/ProductCard';
import SectionTitle from '../../components/common/SectionTitle';
import { useCart } from '../../context/CartContext';

const womensRolexWatches = [
  {
    id: 1,
    reviews: 12,
    name: 'Lady-Datejust Blue Dial Two-Tone Gold',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/datejust-bluedial-2tonegoldsilver/datejust-bluedial-2tonegoldsilver.png',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/datejust-bluedial-2tonegoldsilver/angle.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/datejust-bluedial-2tonegoldsilver/clasp.png"      
    ],
    description :`The Rolex Lady-Datejust Blue Dial Two-Tone Gold is the epitome of timeless elegance and refined functionality. Housed in a 28mm case of Oystersteel and 18k yellow gold, the stunning blue dial exudes sophistication, perfectly balanced for delicate presence on the wrist. The signature Jubilee bracelet offers exceptional comfort and a luxurious aesthetic, while the fluted bezel adds a distinctive touch of opulence.
`,
    isNew: false,
  },
  {
    id: 2,
    reviews: 18,
    name: 'Lady-Datejust Mother of Pearl Diamond Dial',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/datejust-mop-diamond-silverjubilee-fluted-28/datejust-mop-diamond-silverjubilee-fluted-28.webp',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/datejust-mop-diamond-silverjubilee-fluted-28/angle.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/datejust-mop-diamond-silverjubilee-fluted-28/clasp.webp"          
    ],
    description :`The Rolex Lady-Datejust Mother of Pearl Diamond Dial radiates ethereal beauty and unparalleled luxury. Encased in a 28mm Oystersteel case, the iridescent mother of pearl dial, adorned with sparkling diamond hour markers, creates a mesmerizing effect. The Jubilee bracelet ensures supreme comfort, while the fluted bezel enhances its delicate elegance, making this timepiece a captivating choice for refined tastes.
`,
    isNew: false,
  },
  {
    id: 3,
    reviews: 19,
    name: 'Lady-Datejust Silver Diamond Dial Two-Tone',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/datejust-silverdiamonddial-2tonegoldsilver/datejust-silverdiamonddial-2tonegoldsilver.png',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/datejust-silverdiamonddial-2tonegoldsilver/close%20up",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/datejust-silverdiamonddial-2tonegoldsilver/back.webp"         
    ],
    description :`The Rolex Lady-Datejust Silver Diamond Dial Two-Tone blends classic style with dazzling sophistication. Housed in a 28mm case of Oystersteel and 18k yellow gold, the radiant silver dial, accented with diamond hour markers, exudes understated glamour. The Jubilee bracelet provides exceptional comfort, while the fluted bezel adds a touch of luxury, perfect for those who cherish elegance.
`,
    isNew: false,
  },
  {
    id: 4,
    reviews: 22,
    name: 'Lady-Datejust White Smooth Dial Diamond Two-Tone Rose',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/datejust-whitesmoothdial-diamond-2tonerosesilver/datejust-whitesmoothdial-diamond-2tonerosesilver.png',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/datejust-whitesmoothdial-diamond-2tonerosesilver/side.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/datejust-whitesmoothdial-diamond-2tonerosesilver/clasp"         
    ],
    description :`The Rolex Lady-Datejust White Smooth Dial Diamond Two-Tone Rose is a harmonious blend of purity and opulence. Encased in a 28mm case of Oystersteel and 18k rose gold, the crisp white dial, adorned with diamond hour markers, is paired with a smooth bezel for a sleek aesthetic. The Jubilee bracelet offers refined comfort, making this watch a sophisticated choice for feminine elegance.
`,
    isNew: false,
  },
  {
    id: 5,
    reviews: 12,
    name: 'Lady-Datejust Diamond Dial Gold Presidential',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-diamonddial-goldpresidential/rolex-datejust-diamonddial-goldpresidential.png',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-diamonddial-goldpresidential/face%20on",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-diamonddial-goldpresidential/clasp.webp"         
    ],
    description :`The Rolex Lady-Datejust Diamond Dial Gold Presidential is the pinnacle of luxury and prestige. Housed in a 28mm 18k yellow gold case, the dazzling diamond-pavé dial sparkles with unmatched brilliance, complemented by a fluted bezel. The iconic President bracelet ensures supreme comfort and elegance, making this timepiece a regal choice for those who demand the finest.
`,
    isNew: false,
  },
  {
    id: 6,
    reviews: 12,
    name: 'Lady-Datejust Gold Diamond Dial Two-Tone',
    price: 299,
    image: "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-golddiamonddial-2tonegoldsilver/angle.webp",
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-golddiamonddial-2tonegoldsilver/clasp.webp"         
    ],
    description :`The Rolex Lady-Datejust Gold Diamond Dial Two-Tone exudes warmth and glamour. Encased in a 28mm case of Oystersteel and 18k yellow gold, the rich gold dial, adorned with diamond hour markers, creates a luxurious aesthetic. The Jubilee bracelet offers exceptional comfort, while the fluted bezel enhances its refined charm, perfect for those who embrace opulent style.
`,
    isNew: false,
  },
  {
    id: 7,
    reviews: 12,
    name: 'Lady-Datejust Grey Champagne Dial Silver',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-greychampagnedial-silver/rolex-datejust-greychampagnedial-silver.png',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-greychampagnedial-silver/angle.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-greychampagnedial-silver/back.webp"         
    ],
    description :`The Rolex Lady-Datejust Grey Champagne Dial Silver radiates subtle sophistication and timeless elegance. Housed in a 28mm Oystersteel case, the shimmering grey champagne dial is paired with a smooth bezel, offering a refined and understated look. The Jubilee bracelet ensures lasting comfort, making this timepiece a versatile choice for the modern connoisseur.
`,
    isNew: false,
  },
  {
    id: 8,
    reviews: 28,
    name: 'Lady-Datejust Grey Roman Dial Diamond Bezel Two-Tone',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-greyromandial-diamondbezel-2tonegoldsilveroyster/rolex-datejust-greyromandial-diamondbezel-2tonegoldsilveroyster.jpg',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-greyromandial-diamondbezel-2tonegoldsilveroyster/angle.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-greyromandial-diamondbezel-2tonegoldsilveroyster/side.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-greyromandial-diamondbezel-2tonegoldsilveroyster/clasp.webp"     
    ],
    description :`The Rolex Lady-Datejust Grey Roman Dial Diamond Bezel Two-Tone is a masterpiece of elegance and craftsmanship. Encased in a 28mm case of Oystersteel and 18k yellow gold, the sophisticated grey dial with Roman numerals is complemented by a dazzling diamond-set bezel. The Oyster bracelet provides exceptional comfort, making this watch a luxurious choice for those who value heritage and sparkle.
`,
    isNew: false,
  },
  {
    id: 9,
    reviews: 19,
    name: 'Lady-Datejust Grey Roman Dial Fluted Two-Tone',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-greyromandial-fluted-2tonegoldsilverjubilee/angle',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-greyromandial-fluted-2tonegoldsilverjubilee/clasp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-greyromandial-fluted-2tonegoldsilverjubilee/back"
    ],
    description :`The Rolex Lady-Datejust Grey Roman Dial Fluted Two-Tone combines classic style with refined luxury. Housed in a 28mm case of Oystersteel and 18k yellow gold, the elegant grey dial with Roman numerals is enhanced by a fluted bezel, exuding timeless sophistication. The Jubilee bracelet offers seamless comfort, making this timepiece ideal for those who appreciate understated elegance.
`,
    isNew: false,
  },
  {
    id: 10,
    reviews: 22,
    name: 'Lady-Datejust Pink Roman Dial Fluted Silver',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-pinkromandial-fluted-silverjubilee/rolex-datejust-pinkromandial-fluted-silverjubilee.png',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-pinkromandial-fluted-silverjubilee/close%20up",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-pinkromandial-fluted-silverjubilee/angle",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-pinkromandial-fluted-silverjubilee/clasp.webp"       
    ],
    description :`The Rolex Lady-Datejust Pink Roman Dial Fluted Silver is a delicate expression of feminine charm. Housed in a 28mm Oystersteel case, the soft pink dial with Roman numerals is paired with a fluted bezel, creating a graceful and elegant aesthetic. The Jubilee bracelet ensures exceptional comfort, making this watch a perfect choice for those who embrace refined beauty.
`,
    isNew: false,
  },
  {
    id: 11,
    reviews: 29,
    name: 'Lady-Datejust Pink Star Two-Tone Rose',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-pinkstar-2tonerosesilverjubilee/rolex-datejust-pinkstar-2tonerosesilverjubilee.png',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-pinkstar-2tonerosesilverjubilee/angle",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-pinkstar-2tonerosesilverjubilee/clasp.png"
    ],
    description :`The Rolex Lady-Datejust Pink Star Two-Tone Rose radiates warmth and celestial elegance. Encased in a 28mm case of Oystersteel and 18k rose gold, the soft pink dial, adorned with star-shaped hour markers, exudes a whimsical yet luxurious charm. The Jubilee bracelet offers refined comfort, while the fluted bezel enhances its delicate sophistication.`,
    isNew: false,
  },
  {
    id: 12,
    reviews: 20,
    name: 'Lady-Datejust Silver Dial Diamond Bezel Rose Presidential',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-silverdial-diamondbezel-rosepresidential/rolex-datejust-silverdial-diamondbezel-rosepresidential.png',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-silverdial-diamondbezel-rosepresidential/close%20up",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-silverdial-diamondbezel-rosepresidential/clasp.jpg"
    ],
    description :`The Rolex Lady-Datejust Silver Dial Diamond Bezel Rose Presidential is a dazzling icon of luxury. Housed in a 28mm 18k rose gold case, the radiant silver dial is complemented by a sparkling diamond-set bezel, creating a breathtaking aesthetic. The President bracelet ensures supreme comfort and elegance, making this timepiece a regal choice for sophisticated style.`,
    isNew: false,
  },
  {
    id: 13,
    reviews: 22,
    name: 'Lady-Datejust Silver Dial Smooth Bezel Silver',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-silverdial-smoothbezel-silverjubilee/rolex-datejust-silverdial-smoothbezel-silverjubilee.png',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-silverdial-smoothbezel-silverjubilee/close%20up",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-silverdial-smoothbezel-silverjubilee/clasp.jpg"
    ],
    description :`The Rolex Lady-Datejust Silver Dial Smooth Bezel Silver exudes sleek simplicity and timeless elegance. Encased in a 28mm Oystersteel case, the luminous silver dial is paired with a smooth bezel, offering a clean and versatile look. The Jubilee bracelet provides exceptional comfort, making this watch a refined companion for any occasion.`,
    isNew: false,
  },
  {
    id: 14,
    reviews: 27,
    name: 'Lady-Datejust White Roman Dial Two-Tone',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-whiteromandial-2tonegoldsilver/rolex-datejust-whiteromandial-2tonegoldsilver',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-whiteromandial-2tonegoldsilver/close%20up.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-whiteromandial-2tonegoldsilver/angle.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-whiteromandial-2tonegoldsilver/clasp.webp"
    ],
    description :`The Rolex Lady-Datejust White Roman Dial Two-Tone blends classic heritage with luxurious refinement. Housed in a 28mm case of Oystersteel and 18k yellow gold, the pristine white dial with Roman numerals is complemented by a fluted bezel, exuding timeless sophistication. The Jubilee bracelet ensures lasting comfort, making this timepiece a perfect choice for elegant style.`,
      isNew: false,
  },
  {
    id: 15,
    reviews: 24,
    name: 'Lady-Datejust Wimbledon Fluted Two-Tone Rose',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-wimbledon-fluted-2tonerosesilverjubilee/rolex-datejust-wimbledon-fluted-2tonerosesilverjubilee.png',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-wimbledon-fluted-2tonerosesilverjubilee/close%20up.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-wimbledon-fluted-2tonerosesilverjubilee/angle",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-datejust-wimbledon-fluted-2tonerosesilverjubilee/clasp.webp"
    ],
    description :`The Rolex Lady-Datejust Wimbledon Fluted Two-Tone Rose is a sophisticated nod to timeless sport and elegance. Encased in a 28mm case of Oystersteel and 18k rose gold, the slate-grey dial with green Roman numerals, inspired by the iconic tennis championship, is paired with a fluted bezel. The Jubilee bracelet offers refined comfort, making this watch a distinctive choice for those with discerning taste.
`,
    isNew: false,
  },
  {
    id: 16,
    reviews: 12,
    name: 'Oyster Perpetual Pink Dial Silver',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-oysterperpetual-pinkdial-silver/rolex-oysterperpetual-pinkdial-silver.png',
    category: 'Rolex',
    imagesList :[
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-oysterperpetual-pinkdial-silver/angle.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Women/Rolex/rolex-oysterperpetual-pinkdial-silver/clasp.jpg"
    ],
    description :`The Rolex Oyster Perpetual Pink Dial Silver is a vibrant yet elegant expression of timeless simplicity. Housed in a 34mm Oystersteel case, the soft pink dial radiates youthful charm and versatility, paired with a smooth bezel for a sleek aesthetic. The Oyster bracelet ensures exceptional comfort and durability, making this timepiece a perfect everyday companion for those who value understated style.
`,
    isNew: false,
  }
];

const RolexWomensPage: React.FC = () => {
   const { setProducts } = useCart()
  
    useEffect(() => {
      // console.log(womensAPWatches);
      // 
      localStorage.setItem('productList', JSON.stringify(womensRolexWatches))
      localStorage.setItem('category', 'w-rolex')
    setProducts({productList: womensRolexWatches, category: 'w-rolex'})
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
              <span className="text-gold-500">Rolex</span>
            </div>

            <SectionTitle
              title="Women's Rolex Collection"
              subtitle="Discover our selection of elegant Lady-Datejust and Oyster Perpetual timepieces"
              centered
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {womensRolexWatches.map((watch) => (
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

export default RolexWomensPage;
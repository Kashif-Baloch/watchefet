import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import ProductCard from '../../../components/product/ProductCard';
import SectionTitle from '../../../components/common/SectionTitle';
import { useCart } from '../../../context/CartContext';

const gmtMasterWatches = [
  {
    id: 1,
    reviews: 18,
    name: 'GMT-Master II Black Two-Tone Oyster',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-black-2tonesilvergold-oyster/gmtmaster-black-2tonesilvergold-oyster.png',
    category: 'Rolex',
    imagesList : [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-black-2tonesilvergold-oyster/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-black-2tonesilvergold-oyster/back.webp",
    ],
    description: 'The Rolex GMT-Master II Black Two-Tone Oyster is a masterful blend of functionality and elegance. Housed in a 40mm case of Oystersteel and 18k yellow gold, the black dial offers timeless versatility, complemented by a 24-hour rotatable bezel. The Oyster bracelet ensures durability and comfort, making this watch ideal for globetrotters seeking a sophisticated companion.',
    isNew: true,
  },
  {
    id: 2,
    reviews: 12,
    name: 'GMT-Master II Batman Jubilee',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blackbluebezel-jubilee/gmtmaster-blackbluebezel-jubilee.png',
    category: 'Rolex',
    imagesList : [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blackbluebezel-jubilee/clasp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blackbluebezel-jubilee/back.webp",
    ],
    description: 'The Rolex GMT-Master II Batman Jubilee is an iconic timepiece with a bold, modern edge. Its 40mm Oystersteel case frames a black dial, paired with a striking blue and black Cerachrom bezel, earning its "Batman" nickname. The Jubilee bracelet adds a touch of refined comfort, making this watch a favourite for travellers who value style and precision.',
    isNew: false,
  },
  {
    id: 3,
    reviews: 12,
    name: 'GMT-Master II Batman Oyster',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blackbluebezel-oyster/gmtmaster-blackbluebezel-oyster',
    category: 'Rolex',
    imagesList : [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blackbluebezel-oyster/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blackbluebezel-oyster/back.webp",
    ],
    description: 'The Rolex GMT-Master II Batman Oyster combines rugged durability with distinctive style. Encased in a 40mm Oystersteel case, the black dial is accentuated by the iconic blue and black Cerachrom bezel. The Oyster bracelet offers robust comfort, making this timepiece a perfect choice for those who navigate multiple time zones with confidence and flair.',
    isNew: true,
  },
  {
    id: 4,
    reviews: 14,
    name: 'GMT-Master II Black Grey Oyster',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blackgrey-silveroyster/gmtmaster-blackgrey-silveroyster.jpg',
    category: 'Rolex',
    imagesList : [
     "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blackgrey-silveroyster/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blackgrey-silveroyster/back.webp"
      
    ],
    description: 'The Rolex GMT-Master II Black Grey Oyster exudes understated sophistication. Housed in a 40mm Oystersteel case, the black dial pairs seamlessly with a sleek black and grey Cerachrom bezel, offering a refined aesthetic. The Oyster bracelet ensures lasting comfort and durability, making this watch an ideal companion for the modern traveller.',
    isNew: false,
  },
  {
    id: 5,
    reviews: 19,
    name: 'GMT-Master II Pepsi Oyster',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blueredbezel-oyster/gmtmaster-blueredbezel-oyster.png',
    category: 'Rolex',
    imagesList : [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blueredbezel-oyster/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blueredbezel-oyster/back.webp"     
      
    ],
    description: 'The Rolex GMT-Master II Pepsi Oyster is a vibrant icon of horological excellence. Its 40mm Oystersteel case houses a black dial, complemented by the iconic red and blue Cerachrom bezel, evoking its "Pepsi" moniker. The Oyster bracelet provides robust comfort, making this timepiece a bold yet practical choice for global adventurers.',
    isNew: true,
  },
  {
    id: 6,
    reviews: 15,
    name: 'GMT-Master II Green Black Jubilee',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-greenblackdial-jubilee/gmtmaster-greenblackdial-jubilee.webp',
    category: 'Rolex',
    imagesList : [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-greenblackdial-jubilee/clasp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-greenblackdial-jubilee/back.webp"
      
      
    ],
    description: 'The Rolex GMT-Master II Green Black Jubilee is a striking blend of bold design and functionality. Encased in a 40mm Oystersteel case, the black dial is paired with a distinctive green and black Cerachrom bezel, exuding modern sophistication. The Jubilee bracelet offers refined comfort, making this watch a standout for those who travel in style.',
    isNew: false,
  },
  {
    id: 7,
    reviews: 19,
    name: 'GMT-Master II Green Black Oyster',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-greenblackdial-oyster/gmtmaster-greenblackdial-oyster.webp',
    category: 'Rolex',
    imagesList : [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-greenblackdial-oyster/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-greenblackdial-oyster/back.webp"
      
      
    ],
    description: 'The Rolex GMT-Master II Green Black Oyster combines rugged reliability with a bold aesthetic. Housed in a 40mm Oystersteel case, the black dial is accentuated by a vibrant green and black Cerachrom bezel. The Oyster bracelet ensures durability and comfort, making this timepiece a versatile choice for adventurers crossing time zones.',
    isNew: true,
  },
  {
    id: 8,
    reviews: 16,
    name: 'GMT-Master II Grey Black Jubilee',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-greyblackbezel-silverjubilee/gmtmaster-greyblackbezel-silverjubilee.png',
    category: 'Rolex',
    imagesList : [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-greyblackbezel-silverjubilee/clasp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-greyblackbezel-silverjubilee/back.webp"
      
      
    ],
    description: 'The Rolex GMT-Master II Grey Black Jubilee radiates subtle elegance and precision. Its 40mm Oystersteel case frames a black dial, paired with a sophisticated grey and black Cerachrom bezel. The Jubilee bracelet adds a touch of refined comfort, making this watch an ideal companion for those who value understated luxury and functionality.',
    isNew: false,
  },
  {
    id: 9,
    reviews: 17,
    name: 'GMT-Master II Pepsi Jubilee',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-pepsi-jubilee/gmtmaster-pepsi-jubilee.png',
    category: 'Rolex',
    imagesList : [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-pepsi-jubilee/clasp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-pepsi-jubilee/back.webp"
      
      
    ],
    description: 'The Rolex GMT-Master II Pepsi Jubilee is a timeless icon with a vibrant edge. Encased in a 40mm Oystersteel case, the black dial is complemented by the iconic red and blue Cerachrom bezel, earning its "Pepsi" nickname. The Jubilee bracelet offers elegant comfort, making this timepiece a favourite for globetrotters with a flair for style.',
    isNew: true,
  },
  {
    id: 10,
    reviews: 18,
    name: 'GMT-Master II Root Beer Two-Tone Oyster',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-rootbeer-2tonerosesilver-oyster/gmtmaster-rootbeer-2tonerosesilver-oyster.png',
    category: 'Rolex',
    imagesList : [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-rootbeer-2tonerosesilver-oyster/side.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-rootbeer-2tonerosesilver-oyster/clasp.webp"

    ],
    description: 'The Rolex GMT-Master II Root Beer Two-Tone Oyster is a luxurious blend of heritage and innovation. Housed in a 40mm case of Oystersteel and 18k rose gold, the black dial pairs beautifully with a brown and black Cerachrom bezel, evoking its "Root Beer" moniker. The Oyster bracelet ensures comfort and durability, perfect for travellers seeking timeless elegance.',
    isNew: false,
  },
  {
    id: 11,
    reviews: 18,
    name: 'GMT-Master II Root Beer Rose Gold',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-rootbeer-roseoyster/gmtmaster-rootbeer-roseoyster.jpg',
    category: 'Rolex',
    imagesList : [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-rootbeer-roseoyster/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-rootbeer-roseoyster/back.webp"


    ],
    description: 'The Rolex GMT-Master II Root Beer Rose Gold is the epitome of opulence and functionality. Crafted in a 40mm 18k rose gold case, the black dial is enhanced by a rich brown and black Cerachrom bezel, embodying the "Root Beer" aesthetic. The Oyster bracelet in rose gold offers luxurious comfort, making this watch a bold statement for discerning travellers.',
    isNew: true,
  },
  {
    id: 12,
    reviews: 29,
    name: 'GMT-Master II Zombie Two-Tone Jubilee',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-zombie-2tonesilvergold-jubilee/gmtmaster-zombie-2tonesilvergold-jubilee.png',
    category: 'Rolex',
    imagesList : [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-zombie-2tonesilvergold-jubilee/side.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-zombie-2tonesilvergold-jubilee/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-zombie-2tonesilvergold-jubilee/back.webp"

    ],
    description: 'The Rolex GMT-Master II Zombie Two-Tone Jubilee is a captivating blend of modern style and versatility. Housed in a 40mm case of Oystersteel and 18k yellow gold, the black dial is paired with a unique green and black Cerachrom bezel, earning its "Zombie" nickname. The Jubilee bracelet adds refined comfort, making this timepiece a standout for global explorers.',
    isNew: false,
  },
  {
    id: 13,
    reviews: 28,
    name: 'GMT-Master II Zombie Gold Jubilee',
    price: 179,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-zombie-goldjubilee/gmtmaster-zombie-goldjubilee.webp',
    category: 'Rolex',
    imagesList : [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-zombie-goldjubilee/side.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-zombie-goldjubilee/clasp.webp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-zombie-goldjubilee/back.webp"

    ],
    description: 'The Rolex GMT-Master II Zombie Gold Jubilee exudes prestige and bold design. Encased in a 40mm 18k yellow gold case, the black dial is complemented by a striking green and black Cerachrom bezel, known as the "Zombie" configuration. The Jubilee bracelet in gold ensures luxurious comfort, making this watch a perfect choice for those who command attention across time zones.',
    isNew: true,
  }
];

const GMTMasterPage: React.FC = () => {
   const { setProducts } = useCart()
  
    useEffect(() => {
      // console.log(womensAPWatches);
      // 
      localStorage.setItem('productList', JSON.stringify(gmtMasterWatches))
      localStorage.setItem('category', 'gmtmaster')
    setProducts({productList: gmtMasterWatches, category: 'gmtmaster'})
      // setProducts(gmtMasterWatches)
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
              <span className="text-gold-500">GMT-Master II</span>
            </div>

            <SectionTitle
              title="Rolex GMT-Master II Collection"
              subtitle="The pilot's watch that displays multiple time zones simultaneously"
              centered
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {gmtMasterWatches.map((watch) => (
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

export default GMTMasterPage;
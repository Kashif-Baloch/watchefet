import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ProductCard from '../components/product/ProductCard';
import SectionTitle from '../components/common/SectionTitle';
import { ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const rolexWatches = [
  {
    id: 1,
    name: 'Datejust 41mm Black Dial 2025',
    price: 199,
    image: 'https://gamzoandco.com/cdn/shop/products/IMG_4706_1600x.jpg?v=1681796977',
    category: 'Rolex',
    imagesList: [],
    description: "",
    isNew: true,
  },
  {
    id: 2,
    name: 'Submariner Date Green Dial',
    price: 225,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Submariner%20Date/126610LV/169736/1.jpg',
    category: 'Rolex',
    imagesList: [],
    description: "",
    isNew: false,
  },
  {
    id: 3,
    name: 'Day-Date 40 President',
    price: 275,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Day-Date%2040/228238/169751/2.jpg',
    category: 'Rolex',
    imagesList: [],
    description: "",
    isNew: true,
  },
  {
    id: 4,
    name: 'GMT-Master II Pepsi',
    price: 250,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/GMT-Master%20II/126710BLRO/169763/2.jpg',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-pepsi-jubilee/clasp",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-pepsi-jubilee/back.webp"


    ],
    description: 'The Rolex GMT-Master II Pepsi Jubilee is a timeless icon with a vibrant edge. Encased in a 40mm Oystersteel case, the black dial is complemented by the iconic red and blue Cerachrom bezel, earning its "Pepsi" nickname. The Jubilee bracelet offers elegant comfort, making this timepiece a favourite for globetrotters with a flair for style.',
    isNew: false,
  },
  {
    id: 5,
    name: 'Sky-Dweller Blue Dial',
    price: 299,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Sky-Dweller/326934/169770/2.jpg',
    category: 'Rolex',
    imagesList: [],
    description: "",
    isNew: true,
  },
  {
    id: 6,
    name: 'Daytona Panda Dial',
    price: 325,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Cosmograph%20Daytona/116500LN/169778/2.jpg',
    category: 'Rolex',
    imagesList: [],
    description: "",
    isNew: false,
  },
  {
    id: 7,
    name: 'Yacht-Master 40',
    price: 235,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Yacht-Master%2040/126622/169785/2.jpg',
    category: 'Rolex',
    imagesList: [],
    description: "",
    isNew: true,
  },
  {
    id: 8,
    name: 'Explorer II White Dial',
    price: 215,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Explorer%20II/226570/169792/2.jpg',
    category: 'Rolex',
    imagesList: [
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Explorer%20II/explorer-whitedial-oyster/clasp.jpg",
      "https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Explorer%20II/explorer-whitedial-oyster/back.jpg",
    ],
    description: "The Rolex Explorer II White Dial combines functionality with timeless elegance. Encased in a 42mm Oystersteel case, the crisp white dial, paired with a 24-hour bezel, offers clarity and versatility for adventurers. The Oyster bracelet provides robust comfort, making this watch an ideal companion for those who explore with confidence and sophistication.",
    isNew: false,
  }
];

const RolexPage: React.FC = () => {

  const { setProducts } = useCart()

  useEffect(() => {
    // console.log(womensAPWatches);
    // 
    localStorage.setItem('productList', JSON.stringify(rolexWatches))
    localStorage.setItem('category', 'rolex')
    setProducts({ productList: rolexWatches, category: 'rolex' })
    // setProducts(rolexWatches)
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
              <span className="text-gold-500">Rolex</span>
            </div>

            <SectionTitle
              title="Rolex Collection"
              subtitle="Discover our exclusive selection of premium Rolex timepieces"
              centered
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {rolexWatches.map((watch) => (
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

export default RolexPage;
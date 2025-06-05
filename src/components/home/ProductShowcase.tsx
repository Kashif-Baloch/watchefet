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
    imagesList :[],
    description:"",
    isNew: true,
  },
  {
    id: 2,
    name: 'Datejust 41mm Diamond Dial with Fluted Bezel',
    price: 129,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-greydial-diamond-silverjubilee-41/datejust-greydial-diamond-silverjubilee-41.jpg',
    category: 'Rolex',
    imagesList :[],
    description:"",
    isNew: true,
  },
  {
    id: 3,
    name: 'Nautilus Tiffany Blue Dial Silver',
    price: 275,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-tiffanydial-silver/patek-nautilus-tiffanydial-silver.png',
    category: 'Patek Philippe',
    imagesList :[],
    description:"",
    isNew: true,
  },
  {
    id: 4,
    name: 'Royal Oak Perpetual Calendar - Black Ceramic',
    price: 299,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-perpetual-black/ap-perpetual-black.png',
    category: 'Audemars Piguet',
    imagesList :[],
    description:"",
    isNew: true,
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
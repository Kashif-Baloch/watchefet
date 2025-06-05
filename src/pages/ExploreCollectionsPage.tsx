import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/common/SectionTitle';

const brands = [
  {
    name: 'Rolex',
    href: '/rolex',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-browndial-diamond-2tonesilverrose-jubilee-fluted/2.png',
  },
  {
    name: 'Audemars Piguet',
    href: '/audemars-piguet',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/AP/ap-blackchronodial-plainsilver/ap-blackchronodial-plainsilver.png',
  },
  {
    name: 'Patek Philippe',
    href: '/patek-philippe',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Aquanaut/patek-aquanaut-browndial-rose-brownrubber/patek-aquanaut-browndial-rose-brownrubber.png',
  },
  {
    name: 'Hublot',
    href: '/hublot',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Spirit%20of%20Big%20Bang/hublot-spiritofbigbang-blackbezel-goldbody-rubber/hublot-spiritofbigbang-blackbezel-goldbody-rubber.jpg',
  },
];

const ExploreCollectionsPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-black to-zinc-900 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link to="/" className="hover:text-gold-500">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gold-500">Collections</span>
            </div>
            
            <SectionTitle
              title="Explore Our Collections"
              subtitle="Discover our comprehensive range of luxury timepieces from the world's most prestigious brands"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
              {brands.map((brand) => (
                <Link
                  key={brand.name}
                  to={brand.href}
                  className="group relative overflow-hidden rounded-lg aspect-[4/3] transition-transform duration-500 hover:scale-[1.02]"
                >
                  <div className="absolute inset-0">
                    <img
                      src={brand.image}
                      alt={brand.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                      <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                        {brand.name}
                      </h3>
                      <span className="inline-block px-6 py-2 border-2 border-gold-500 text-gold-500 uppercase tracking-wider text-sm font-medium transition-colors group-hover:bg-gold-500 group-hover:text-black">
                        View Collection
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExploreCollectionsPage;
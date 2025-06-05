import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import SectionTitle from '../../components/common/SectionTitle';

const patekCollections = [
  {
    name: 'Nautilus',
    href: '/patek-philippe/nautilus',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Nautilus/patek-nautilus-tiffanydial-silver/patek-nautilus-tiffanydial-silver.png',
    description: 'The iconic luxury sports watch that revolutionized watchmaking'
  },
  {
    name: 'Aquanaut',
    href: '/patek-philippe/aquanaut',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Patek/Aquanaut/patek-aquanaut-browndial-rose-brownrubber/patek-aquanaut-browndial-rose-brownrubber.png',
    description: 'The modern interpretation of casual elegance in watchmaking'
  }
];

const PatekCollectionsPage: React.FC = () => {
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
              <span className="text-gold-500">Patek Philippe</span>
            </div>
            
            <SectionTitle
              title="Patek Philippe Collections"
              subtitle="Explore our selection of the world's most prestigious timepieces"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
              {patekCollections.map((collection) => (
                <Link
                  key={collection.name}
                  to={collection.href}
                  className="group bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-gold-500/30 transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-white mb-2 group-hover:text-gold-500 transition-colors">
                      {collection.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {collection.description}
                    </p>
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

export default PatekCollectionsPage;
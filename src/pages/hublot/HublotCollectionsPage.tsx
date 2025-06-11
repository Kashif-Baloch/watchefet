import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import SectionTitle from '../../components/common/SectionTitle';

const hublotCollections = [
  {
    name: 'Big Bang',
    href: '/hublot/big-bang',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Big%20Bang/hublot-bigbang-carbon/hublot-bigbang-carbon.png',
    description: 'The revolutionary fusion of traditional watchmaking with modern materials'
  },
  {
    name: 'Classic Fusion',
    href: '/hublot/classic-fusion',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Classic%20Fusion/hublot-classicfusionchrono-bluedial-leather/hublot-classicfusionchrono-bluedial-leather.png',
    description: 'Elegant timepieces that blend classic design with contemporary style'
  },
  {
    name: 'Spirit of Big Bang',
    href: '/hublot/spirit-of-big-bang',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Hublot/Spirit%20of%20Big%20Bang/hublot-spiritofbigbang-tourbillon-carbon/hublot-spiritofbigbang-tourbillon-carbon.png',
    description: 'Bold and innovative designs that push the boundaries of watchmaking'
  }
];

const HublotCollectionsPage: React.FC = () => {
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
              <span className="text-gold-500">Hublot</span>
            </div>

            <SectionTitle
              title="Hublot Collections"
              subtitle="Explore our selection of innovative and bold timepieces"
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
              {hublotCollections.map((collection) => (
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

export default HublotCollectionsPage;
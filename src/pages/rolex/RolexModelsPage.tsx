import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import SectionTitle from '../../components/common/SectionTitle';
import Button from '../../components/common/Button';
import { ChevronRight } from 'lucide-react';

const rolexModels = [
  {
    name: 'Datejust',
    href: '/rolex/datejust',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-bluedial-diamond-silverjubilee-fluted-41/datejust-bluedial-diamond-silverjubilee-fluted-41.png',
    description: 'The classic Rolex timepiece that has become a symbol of style and accuracy'
  },
  {
    name: 'Day-Date',
    href: '/rolex/day-date',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-browndial-roman-rosegold-fluted-40/daydate-browndial-roman-rosegold-fluted-40.png',
    description: 'The prestigious model that displays both the date and day of the week'
  },
  {
    name: 'Submariner',
    href: '/rolex/submariner',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-2tonesilvergold/submariner-blackdial-2tonesilvergold',
    description: 'The ultimate diving watch, waterproof and highly reliable'
  },
  {
    name: 'GMT-Master II',
    href: '/rolex/gmt-master-ii',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-rootbeer-roseoyster/gmtmaster-rootbeer-roseoyster.jpg',
    description: 'The pilot\'s watch that displays multiple time zones simultaneously'
  },
  {
    name: 'Daytona',
    href: '/rolex/daytona',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Daytona/daytona-blackdial-blackgoldbezel-rubber/daytona-blackdial-blackgoldbezel-rubber.png',
    description: 'The iconic chronograph designed for professional racing drivers'
  },
  {
    name: 'Explorer II',
    href: '/rolex/explorer-ii',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Explorer%20II/explorer-blackdial-silveroyster/explorer-blackdial-silveroyster.jpg',
    description: 'The robust timepiece designed for cave explorers and polar expeditions'
  },
  {
    name: 'Sea-Dweller & Deepsea',
    href: '/rolex/deepsea',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/SeaDweller%20Deepsea/seadweller-blackdial-2tonesilvergold-oyster/seadweller-blackdial-2tonesilvergold-oyster.png',
    description: 'The ultimate professional diver\'s watch, waterproof to extreme depths'
  },
  {
    name: 'Yacht-Master',
    href: '/rolex/yacht-master',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Yacht-Master/yachtmaster-silverdial-silverbezel-silveroyster40/yachtmaster-silverdial-silverbezel-silveroyster40.jpg',
    description: 'The luxurious nautical watch designed for both function and style'
  },
  {
    name: 'Sky-Dweller',
    href: '/rolex/sky-dweller',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Sky-Dweller/skydweller-bluedial-silverfluted-silveroyster/skydweller-bluedial-silverfluted-silveroyster.png',
    description: 'The sophisticated traveler\'s watch with annual calendar and dual time zones'
  }
];

const RolexModelsPage: React.FC = () => {
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
              title="Rolex Collections"
              subtitle="Explore our comprehensive range of Rolex models"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {rolexModels.map((model) => (
                <Link
                  key={model.name}
                  to={model.href}
                  className="group bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 hover:border-gold-500/30 transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={model.image}
                      alt={model.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif text-white mb-2 group-hover:text-gold-500 transition-colors">
                      {model.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {model.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link to="/rolex/all-models">
                <Button variant="primary" size="lg">
                  View All Models
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RolexModelsPage;
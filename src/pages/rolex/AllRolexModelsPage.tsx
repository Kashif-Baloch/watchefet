import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Search } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import ProductCard from '../../components/product/ProductCard';
import { useCart } from '../../context/CartContext';

const collections = [
  { name: 'All', value: 'all' },
  { name: 'Datejust', value: 'datejust' },
  { name: 'Day-Date', value: 'daydate' },
  { name: 'Submariner', value: 'submariner' },
  { name: 'GMT-Master II', value: 'gmt' },
  { name: 'Daytona', value: 'daytona' },
  { name: 'Explorer', value: 'explorer' },
  { name: 'Yacht-Master', value: 'yachtmaster' },
];

const allRolexWatches = [
  // Datejust Collection
  {
    id: 1,
    name: 'Datejust 41mm Fluted Bezel Roman Numerals',
    price: 129,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-bluedial-roman-fluted-jubilee-41.webp',
    category: 'datejust',
    isNew: true,
  },
  {
    id: 2,
    name: 'Datejust 41mm Diamond Dial with Fluted Bezel',
    price: 129,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-greydial-diamond-silverjubilee-41.jpg',
    category: 'datejust',
    isNew: false,
  },
  {
    id: 3,
    name: 'Datejust 41mm Wimbledon Dial with Fluted Bezel',
    price: 129,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-wimbledon-41.jpg',
    category: 'datejust',
    isNew: true,
  },
  {
    id: 4,
    name: 'Datejust 41mm White Roman Dial Fluted Jubilee',
    price: 129,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-whitedial-roman-silverjubilee-fluted-41.jpg',
    category: 'datejust',
    isNew: false,
  },
  {
    id: 5,
    name: 'Datejust 41mm Blue Diamond Dial Fluted Jubilee',
    price: 129,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-bluedial-diamond-silverjubilee-fluted-41',
    category: 'datejust',
    isNew: true,
  },
  {
    id: 6,
    name: 'Datejust 41mm Gold Diamond Dial Two-Tone',
    price: 129,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-golddial-diamond-2tonesilvergoldjubilee-fluted-41.jpg',
    category: 'datejust',
    isNew: false,
  },
  {
    id: 7,
    name: 'Datejust 41mm Gold Champagne Dial Two-Tone',
    price: 129,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-golddial-champagne-2tonesilvergoldjubilee-fluted-41.jpg',
    category: 'datejust',
    isNew: true,
  },
  {
    id: 8,
    name: 'Datejust 41mm Wimbledon Dial Two-Tone',
    price: 129,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Datejust/datejust-wimbledon-2tonesilvergold-jubilee-fluted-41.jpg',
    category: 'datejust',
    isNew: false,
  },
  // Day-Date Collection
  {
    id: 9,
    name: 'Day-Date 40 Rose Gold Brown Roman Dial',
    price: 149,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-browndial-roman-rosegold-fluted-40.png',
    category: 'daydate',
    isNew: true,
  },
  {
    id: 10,
    name: 'Day-Date 40 Black Dial Gold',
    price: 149,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-blackdial-champagne-gold-fluted-40.png',
    category: 'daydate',
    isNew: false,
  },
  {
    id: 11,
    name: 'Day-Date 40 Mother of Pearl Diamond Dial',
    price: 149,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-mop-diamond-silverjubilee-40.webp',
    category: 'daydate',
    isNew: true,
  },
  {
    id: 12,
    name: 'Day-Date 40 Green Dial Gold',
    price: 149,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-greendial-roman-gold-fluted-40.png',
    category: 'daydate',
    isNew: false,
  },
  {
    id: 13,
    name: 'Day-Date 40 White Dial Gold',
    price: 149,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-whitedial-champagne-gold-fluted-40',
    category: 'daydate',
    isNew: true,
  },
  {
    id: 14,
    name: 'Day-Date 40 Brown Dial Rose Gold',
    price: 149,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-browndial-champagne-rosegold-fluted-40',
    category: 'daydate',
    isNew: false,
  },
  {
    id: 15,
    name: 'Day-Date 40 Ice Blue Dial',
    price: 149,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Day-Date/daydate-icebluedial-champagne-silver-smooth-40',
    category: 'daydate',
    isNew: true,
  },
  // Submariner Collection
  {
    id: 16,
    name: 'Submariner Black Dial Two-Tone',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-2tonesilvergold',
    category: 'submariner',
    isNew: true,
  },
  {
    id: 17,
    name: 'Submariner Black Dial Blue Bezel',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-bluebezel-silver',
    category: 'submariner',
    isNew: false,
  },
  {
    id: 18,
    name: 'Submariner Black Dial Green Bezel',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-greenbezel-silver',
    category: 'submariner',
    isNew: true,
  },
  {
    id: 19,
    name: 'Submariner Blue Dial Two-Tone',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-bluedial-2tonesilvergold.png',
    category: 'submariner',
    isNew: false,
  },
  {
    id: 20,
    name: 'Submariner Black Dial',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-silver.jpg',
    category: 'submariner',
    isNew: true,
  },
  {
    id: 21,
    name: 'Submariner Blue Dial Blue Bezel Gold',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-bluedial-bluebezel-gold.png',
    category: 'submariner',
    isNew: false,
  },
  {
    id: 22,
    name: 'Submariner Black Dial Black Bezel Gold',
    price: 139,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/Submariner/submariner-blackdial-blackbezel-gold',
    category: 'submariner',
    isNew: true,
  },
  // GMT-Master II Collection
  {
    id: 23,
    name: 'GMT-Master II Black Two-Tone Oyster',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-black-2tonesilvergold-oyster.png',
    category: 'gmt',
    isNew: true,
  },
  {
    id: 24,
    name: 'GMT-Master II Batman Jubilee',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blackbluebezel-jubilee.png',
    category: 'gmt',
    isNew: false,
  },
  {
    id: 25,
    name: 'GMT-Master II Batman Oyster',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blackbluebezel-oyster',
    category: 'gmt',
    isNew: true,
  },
  {
    id: 26,
    name: 'GMT-Master II Black Grey Oyster',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blackgrey-silveroyster.jpg',
    category: 'gmt',
    isNew: false,
  },
  {
    id: 27,
    name: 'GMT-Master II Pepsi Oyster',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-blueredbezel-oyster.png',
    category: 'gmt',
    isNew: true,
  },
  {
    id: 28,
    name: 'GMT-Master II Green Black Jubilee',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-greenblackdial-jubilee.webp',
    category: 'gmt',
    isNew: false,
  },
  {
    id: 29,
    name: 'GMT-Master II Green Black Oyster',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-greenblackdial-oyster.webp',
    category: 'gmt',
    isNew: true,
  },
  {
    id: 30,
    name: 'GMT-Master II Grey Black Oyster',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-greyblackbezel-silveroyster.png',
    category: 'gmt',
    isNew: false,
  },
  {
    id: 31,
    name: 'GMT-Master II Pepsi Jubilee',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-pepsi-jubilee.png',
    category: 'gmt',
    isNew: true,
  },
  {
    id: 32,
    name: 'GMT-Master II Root Beer Two-Tone Oyster',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-rootbeer-2tonerosesilver-oyster.png',
    category: 'gmt',
    isNew: false,
  },
  {
    id: 33,
    name: 'GMT-Master II Root Beer Rose Gold',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-rootbeer-roseoyster.jpg',
    category: 'gmt',
    isNew: true,
  },
  {
    id: 34,
    name: 'GMT-Master II Sprite Two-Tone Jubilee',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-zombie-2tonesilvergold-jubilee.png',
    category: 'gmt',
    isNew: false,
  },
  {
    id: 35,
    name: 'GMT-Master II Sprite Gold Jubilee',
    price: 145,
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images/Rolex/GMT-Master%20II/gmtmaster-zombie-goldjubilee.webp',
    category: 'gmt',
    isNew: true,
  },
  // Daytona Collection
  {
    id: 36,
    name: 'Daytona Panda Dial',
    price: 159,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Cosmograph%20Daytona/116500LN/169785/2.jpg',
    category: 'daytona',
    isNew: true,
  },
  {
    id: 37,
    name: 'Daytona Black Dial',
    price: 159,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Cosmograph%20Daytona/116500LN/169792/2.jpg',
    category: 'daytona',
    isNew: false,
  },
  {
    id: 38,
    name: 'Daytona Gold',
    price: 159,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Cosmograph%20Daytona/116508/169799/2.jpg',
    category: 'daytona',
    isNew: true,
  },
  {
    id: 39,
    name: 'Daytona Meteorite Dial',
    price: 159,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Cosmograph%20Daytona/116519LN/169806/2.jpg',
    category: 'daytona',
    isNew: false,
  },
  // Explorer Collection
  {
    id: 40,
    name: 'Explorer II White Dial',
    price: 135,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Explorer%20II/226570/169792/2.jpg',
    category: 'explorer',
    isNew: true,
  },
  {
    id: 41,
    name: 'Explorer II Black Dial',
    price: 135,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Explorer%20II/216570/169799/2.jpg',
    category: 'explorer',
    isNew: false,
  },
  {
    id: 42,
    name: 'Explorer 36mm',
    price: 135,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Explorer/124270/169806/2.jpg',
    category: 'explorer',
    isNew: true,
  },
  {
    id: 43,
    name: 'Explorer II Polar',
    price: 135,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Explorer%20II/16570/169813/2.jpg',
    category: 'explorer',
    isNew: false,
  },
  // Yacht-Master Collection
  {
    id: 44,
    name: 'Yacht-Master 40 Rhodium',
    price: 142,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Yacht-Master%2040/126622/169806/2.jpg',
    category: 'yachtmaster',
    isNew: true,
  },
  {
    id: 45,
    name: 'Yacht-Master 42 Black',
    price: 142,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Yacht-Master%2042/226659/169813/2.jpg',
    category: 'yachtmaster',
    isNew: false,
  },
  {
    id: 46,
    name: 'Yacht-Master 37 Everose',
    price: 142,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Yacht-Master%2037/268655/169820/2.jpg',
    category: 'yachtmaster',
    isNew: true,
  },
  {
    id: 47,
    name: 'Yacht-Master 40 Two-Tone',
    price: 142,
    image: 'https://www.watchfinder.co.uk/images/high-res/Rolex/Yacht-Master%2040/126621/169827/2.jpg',
    category: 'yachtmaster',
    isNew: false,
  },
];

const AllRolexModelsPage: React.FC = () => {
  const [selectedCollection, setSelectedCollection] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
 const { setProducts } = useCart()

  useEffect(() => {
    // console.log(womensAPWatches);
    // 
    setProducts(allRolexWatches)
  }, []);
  // Calculate collection counts
  const collectionCounts = useMemo(() => ({
    all: allRolexWatches.length,
    datejust: allRolexWatches.filter(w => w.category === 'datejust').length,
    daydate: allRolexWatches.filter(w => w.category === 'daydate').length,
    submariner: allRolexWatches.filter(w => w.category === 'submariner').length,
    gmt: allRolexWatches.filter(w => w.category === 'gmt').length,
    daytona: allRolexWatches.filter(w => w.category === 'daytona').length,
    explorer: allRolexWatches.filter(w => w.category === 'explorer').length,
    yachtmaster: allRolexWatches.filter(w => w.category === 'yachtmaster').length,
  }), []);

  const collections = [
    { name: 'All', value: 'all', count: collectionCounts.all },
    { name: 'Datejust', value: 'datejust', count: collectionCounts.datejust },
    { name: 'Day-Date', value: 'daydate', count: collectionCounts.daydate },
    { name: 'Submariner', value: 'submariner', count: collectionCounts.submariner },
    { name: 'GMT-Master II', value: 'gmt', count: collectionCounts.gmt },
    { name: 'Daytona', value: 'daytona', count: collectionCounts.daytona },
    { name: 'Explorer', value: 'explorer', count: collectionCounts.explorer },
    { name: 'Yacht-Master', value: 'yachtmaster', count: collectionCounts.yachtmaster },
  ];

  const filteredWatches = allRolexWatches.filter(watch => {
    const matchesCollection = selectedCollection === 'all' || watch.category === selectedCollection;
    const matchesSearch = watch.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCollection && matchesSearch;
  });

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
              <span className="text-gold-500">All Models</span>
            </div>
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                All Rolex Models
              </h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-xl font-serif text-gold-500">{collectionCounts.all}</span>
                <span className="text-gray-400">Timepieces Available</span>
              </div>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Explore our comprehensive collection of Rolex watches, featuring iconic models from every collection
              </p>
            </div>

            <div className="mt-12 mb-8">
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                {/* Collection Filter */}
                <div className="flex flex-wrap gap-2">
                  {collections.map((collection) => (
                    <button
                      key={collection.value}
                      onClick={() => setSelectedCollection(collection.value)}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${
                        selectedCollection === collection.value
                          ? 'bg-gold-500 text-black'
                          : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                      }`}
                    >
                      {collection.name} ({collection.count})
                    </button>
                  ))}
                </div>

                {/* Search Input */}
                <div className="relative w-full md:w-64">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search models..."
                    className="w-full pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold-500"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </div>

              {/* Results Count */}
              <div className="mt-6 text-gray-400 text-sm">
                Showing {filteredWatches.length} {filteredWatches.length === 1 ? 'watch' : 'watches'}
                {searchQuery && ` matching "${searchQuery}"`}
                {selectedCollection !== 'all' && ` in ${collections.find(c => c.value === selectedCollection)?.name}`}
              </div>
            </div>
            
            {filteredWatches.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredWatches.map((watch) => (
                  <ProductCard key={watch.id} product={watch} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-400">No watches found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllRolexModelsPage;
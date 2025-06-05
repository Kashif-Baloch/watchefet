import React from 'react';

const CraftsmanshipSection: React.FC = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-tight">
              Extraordinary <span className="text-gold-500">Craftsmanship</span><br />
              In Every Detail
            </h2>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              Each Timeless Chrono timepiece represents the pinnacle of horological replica excellence, 
              with every component meticulously crafted by our master watchmakers.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-1 h-1 rounded-full bg-gold-500 mr-2"></div>
                <p className="text-gray-300">Hand-finished movements with proprietary calibers</p>
              </div>
              <div className="flex items-center">
                <div className="w-1 h-1 rounded-full bg-gold-500 mr-2"></div>
                <p className="text-gray-300">Premium materials</p>
              </div>
              <div className="flex items-center">
                <div className="w-1 h-1 rounded-full bg-gold-500 mr-2"></div>
                <p className="text-gray-300">Over 200 individual components in each timepiece</p>
              </div>
              <div className="flex items-center">
                <div className="w-1 h-1 rounded-full bg-gold-500 mr-2"></div>
                <p className="text-gray-300">Each watch undergoes extensive quality testing</p>
              </div>
            </div>
          </div>
          
          <div className="relative aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 rounded-full bg-gold-500/10 animate-pulse-slow"></div>
            <img 
              src="https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images//watches-homepage-pic.jpg" 
              alt="Watchmaking Craftsmanship" 
              className="rounded-full object-cover h-full w-full z-10 relative shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
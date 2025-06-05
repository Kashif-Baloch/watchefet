import React from 'react';
import { MapPin } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';

const locations = [
  {
    city: 'New York',
    address: '123 Fifth Avenue, New York, NY 10010',
    phone: '+1 (212) 555-1234',
    hours: 'Mon-Sat: 10AM-7PM, Sun: 12PM-5PM',
    image: 'https://images.pexels.com/photos/380330/pexels-photo-380330.jpeg',
  },
  {
    city: 'London',
    address: '18 Regent Street, London, SW1Y 4PH',
    phone: '+44 20 7123 4567',
    hours: 'Mon-Sat: 9AM-6PM, Sun: Closed',
    image: 'https://images.pexels.com/photos/68704/pexels-photo-68704.jpeg',
  },
  {
    city: 'Paris',
    address: '21 Avenue des Champs-Élysées, 75008 Paris',
    phone: '+33 1 23 45 67 89',
    hours: 'Mon-Sat: 10AM-7PM, Sun: Closed',
    image: 'https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg',
  },
];

const StoreLocator: React.FC = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Our Boutiques"
          subtitle="Visit one of our exclusive locations for a personalized shopping experience"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {locations.map((location, index) => (
            <div 
              key={index} 
              className="group bg-zinc-900 rounded-lg overflow-hidden transition-all hover:transform hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                <img 
                  src={location.image} 
                  alt={`${location.city} Boutique`} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-2xl font-serif text-white">{location.city}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-gold-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">{location.address}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-gray-400 text-sm mb-1">{location.phone}</p>
                  <p className="text-gray-400 text-sm">{location.hours}</p>
                </div>
                
                <Button variant="outline" size="sm" fullWidth>
                  Book Appointment
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoreLocator;
import React from 'react';
import { Clock, Shield, Award, Truck } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const features = [
  {
    icon: <Clock className="h-8 w-8 text-gold-500" />,
    title: 'Swiss Precision',
    description: 'Every timepiece is crafted with exceptional attention to detail and Swiss-certified movements.',
  },
  {
    icon: <Shield className="h-8 w-8 text-gold-500" />,
    title: '10-Year Warranty',
    description: 'We stand behind our craftsmanship with a comprehensive 10-year warranty on all watches.',
  },
  {
    icon: <Award className="h-8 w-8 text-gold-500" />,
    title: 'Award-Winning Designs',
    description: 'Our collections have received multiple international awards for innovation and design excellence.',
  },
  {
    icon: <Truck className="h-8 w-8 text-gold-500" />,
    title: 'Global Shipping',
    description: 'Free express shipping to over 100 countries with full insurance and tracking included.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Why Choose Aeon Luxe"
          subtitle="Experience the difference in quality, craftsmanship and service"
          centered
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 border border-zinc-800 bg-zinc-900 rounded-lg hover:bg-zinc-800/50 transition-all hover:border-gold-500/30 group"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-serif text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const testimonials = [
  {
    id: 1,
    name: 'James Hamilton',
    role: 'Watch Collector',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images//testimonial1.jpeg',
    quote: 'The attention to detail in my Timeless Chrono timepiece is unparalleled. After 20 years of collecting luxury watch replicas, this is the crown jewel of my collection.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sophia Chen',
    role: 'Watch Collector',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images//testimonial2.jpeg',
    quote: 'I\'ve purchased Timeless Chrono watches for my entire family. The craftsmanship speaks to our values of beauty and affordability.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Robert Kincaid',
    role: 'Fashion Enthusiast',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images//testimonial3.jpeg',
    quote: 'My Datejust from Timeless Chrono has accompanied me all around the world. Its reliability is simply amazing. I even wear it in the pool!',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="What Our Clients Say"
          subtitle="Trusted by watch collectors and enthusiasts worldwide"
          centered
        />
        
        <div className="mt-12 relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="max-w-3xl mx-auto bg-zinc-800/50 p-8 rounded-lg border border-zinc-700">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="h-16 w-16 rounded-full object-cover mr-4 border-2 border-gold-500"
                      />
                      <div>
                        <h4 className="text-white font-serif text-xl">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-gold-500 fill-gold-500' : 'text-gray-500'}`} 
                        />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-300 italic leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white rounded-full p-2 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black text-white rounded-full p-2 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-gold-500 w-6' : 'bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
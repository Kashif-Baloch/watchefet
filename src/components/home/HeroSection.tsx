import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const slides = [
  {
    id: 1,
    title: 'Replica Luxury Watches For Every Occasion',
    description: 'Timeless elegance and precision engineering',
    image: 'https://pgkfybgojqakmfwyneqb.supabase.co/storage/v1/object/public/product-images//homepage-background.jpg',
    cta: 'Explore Collections',
    secondaryCta: 'Request a Model',
  }
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  // Preload the image
  useEffect(() => {
    const img = new Image();
    img.src = slides[currentSlide].image;
    img.onload = () => setImageLoaded(true);
  }, [currentSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transform transition-transform duration-10000 ${
              imageLoaded ? 'scale-100' : 'scale-105'
            }`}
            style={{ 
              backgroundImage: `url(${slide.image})`,
              imageRendering: 'high-quality',
              willChange: 'transform',
              backgroundSize: 'cover',
              backgroundPosition: '25% center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />
          </div>
          
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight animate-fadeIn">
                  {slide.title}
                </h1>
                <p className="text-xl text-gray-300 mb-8 animate-fadeIn animation-delay-200">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4 animate-fadeIn animation-delay-400">
                  <Link to="/collections">
                    <Button variant="primary" size="lg">
                      {slide.cta}
                    </Button>
                  </Link>
                  <Link to="/request-model">
                    <Button variant="outline" size="lg" className="no-underline">
                      {slide.secondaryCta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-gold-500 w-8'
                : 'bg-gray-500 hover:bg-gray-300'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
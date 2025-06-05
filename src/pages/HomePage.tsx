import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import ProductShowcase from '../components/home/ProductShowcase';
import CraftsmanshipSection from '../components/home/CraftsmanshipSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import NewsletterSection from '../components/home/NewsletterSection';

function HomePage() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductShowcase />
        <CraftsmanshipSection />
        <TestimonialsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
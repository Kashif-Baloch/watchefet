import React from 'react';
import { Link } from 'react-router-dom';
import { XCircle } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Button from '../../components/common/Button';

const CancelPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-black to-zinc-900 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8 flex justify-center">
                <XCircle className="h-16 w-16 text-red-500" />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Payment Cancelled
              </h1>
              
              <p className="text-gray-400 mb-8">
                Your payment was cancelled. If you have any questions, please don't hesitate to contact us.
              </p>

              <div className="space-y-4">
                <Link to="/cart">
                  <Button variant="primary" fullWidth>
                    Return to Cart
                  </Button>
                </Link>
                
                <Link to="/contact">
                  <Button variant="outline" fullWidth>
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CancelPage;
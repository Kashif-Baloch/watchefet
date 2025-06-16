import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import Button from '../../components/common/Button';
import { useCart } from '../../context/CartContext';

const SuccessPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { clearCart } = useCart();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    if (sessionId) {
      clearCart();
    }
  }, [sessionId, clearCart]);

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-black to-zinc-900 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <div className="mb-8 flex justify-center">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>

              <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                Payment Successful!
              </h1>

              <p className="text-gray-400 mb-8">
                Thank you for your purchase. We'll send you an email with your order details shortly.
              </p>

              <div className="space-y-4">
                <Link to="/collections">
                  <Button variant="primary" fullWidth>
                    Continue Shopping
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

export default SuccessPage;
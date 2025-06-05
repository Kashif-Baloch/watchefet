import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Truck, Package, RefreshCw, Clock } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/common/SectionTitle';

const ShippingPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-black to-zinc-900 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link to="/" className="hover:text-gold-500">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gold-500">Shipping & Returns</span>
            </div>

            <SectionTitle
              title="Shipping & Returns"
              subtitle="Everything you need to know about our shipping and return policies"
              centered
            />

            <div className="max-w-4xl mx-auto mt-12">
              {/* Shipping Information */}
              <div className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <Truck className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-serif text-white mb-2">Express Delivery</h3>
                    <p className="text-gray-400">
                      We offer express shipping to ensure your timepiece reaches you quickly and securely. 
                      Delivery typically takes 2-10 business days, depending on your location.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <h4 className="font-medium text-white">Shipping Process:</h4>
                  <div className="space-y-3 text-gray-400">
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-gold-500" />
                      <span>Order processing: 1-2 business days</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Package className="h-5 w-5 text-gold-500" />
                      <span>Secure packaging with tracking number</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Truck className="h-5 w-5 text-gold-500" />
                      <span>Express delivery: 2-10 business days</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Returns Policy */}
              <div className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800">
                <div className="flex items-start gap-4 mb-6">
                  <RefreshCw className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-serif text-white mb-2">Returns Policy</h3>
                    <p className="text-gray-400">
                      We accept returns within 14 days of the delivery date, provided the item is in its 
                      original condition with all packaging intact.
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-6">
                  {/* Return Process */}
                  <div>
                    <h4 className="font-medium text-white mb-3">Return Process:</h4>
                    <ol className="space-y-3 text-gray-400">
                      <li className="flex gap-3">
                        <span className="text-gold-500">1.</span>
                        <span>Contact our customer service team to initiate a return</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-500">2.</span>
                        <span>Receive a return authorization and shipping label</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-500">3.</span>
                        <span>Package the item securely in its original packaging</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-500">4.</span>
                        <span>Ship the item back using the provided label</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gold-500">5.</span>
                        <span>Receive a refund once the return is processed</span>
                      </li>
                    </ol>
                  </div>

                  {/* Return Conditions */}
                  <div>
                    <h4 className="font-medium text-white mb-3">Return Conditions:</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0"></div>
                        <span>Item must be unworn and in original condition</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0"></div>
                        <span>All original packaging must be included</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0"></div>
                        <span>Return must be initiated within 14 days of delivery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-2 flex-shrink-0"></div>
                        <span>Return shipping is free for customers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-12 text-center">
                <p className="text-gray-400 mb-4">
                  Have questions about shipping or returns? Our customer service team is here to help.
                </p>
                <Link 
                  to="/contact" 
                  className="inline-block px-6 py-3 bg-gold-500 text-black font-medium rounded-lg hover:bg-gold-600 transition-colors"
                >
                  Contact Support
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

export default ShippingPage;
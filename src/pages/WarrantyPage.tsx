import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Shield, Clock, PenTool as Tool, Package } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/common/SectionTitle';

const WarrantyPage: React.FC = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-black to-zinc-900 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link to="/" className="hover:text-gold-500">Home</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-gold-500">Warranty</span>
            </div>

            <SectionTitle
              title="Warranty Policy"
              subtitle="Our commitment to quality and customer satisfaction"
              centered
            />

            <div className="max-w-4xl mx-auto mt-12">
              {/* Warranty Overview */}
              <div className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <Shield className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-serif text-white mb-2">One Year Warranty Coverage</h3>
                    <p className="text-gray-400">
                      Every timepiece purchased from Timeless Chrono comes with a comprehensive one-year warranty 
                      that covers manufacturing defects. This warranty ensures that your watch maintains its 
                      exceptional quality and performance.
                    </p>
                  </div>
                </div>
              </div>

              {/* What's Covered */}
              <div className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800 mb-8">
                <h3 className="text-xl font-serif text-white mb-6">What's Covered</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Tool className="h-5 w-5 text-gold-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-white mb-2">Manufacturing Defects</h4>
                      <p className="text-gray-400">
                        Any defects in materials or workmanship that affect the watch's functionality 
                        or performance under normal use.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-gold-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-white mb-2">Movement Issues</h4>
                      <p className="text-gray-400">
                        Problems with the watch's timekeeping mechanism or automatic movement 
                        that occur during normal wear.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Warranty Process */}
              <div className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800">
                <h3 className="text-xl font-serif text-white mb-6">Warranty Process</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Package className="h-5 w-5 text-gold-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-medium text-white mb-2">How to Submit a Claim</h4>
                      <div className="space-y-4 text-gray-400">
                        <p>
                          If you experience any issues with your timepiece within the warranty period, 
                          please follow these steps:
                        </p>
                        <ol className="list-decimal ml-4 space-y-2">
                          <li>Contact our customer service team through our contact form</li>
                          <li>Provide your order number and a detailed description of the issue</li>
                          <li>Our team will guide you through the return process</li>
                          <li>Ship the watch back to us using the provided return label</li>
                          <li>We'll assess the issue and repair or replace the watch as needed</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="mt-8 p-6 bg-gold-500/10 rounded-lg border border-gold-500/30">
                <h4 className="font-medium text-gold-500 mb-2">Important Notes:</h4>
                <ul className="list-disc ml-4 space-y-2 text-gray-400">
                  <li>The warranty period begins from the date of purchase</li>
                  <li>Warranty is non-transferable and applies to the original purchaser only</li>
                  <li>Keep your order confirmation email as proof of purchase</li>
                  <li>Damage caused by accidents, misuse, or unauthorized repairs is not covered</li>
                </ul>
              </div>

              {/* Contact Section */}
              <div className="mt-12 text-center">
                <p className="text-gray-400 mb-4">
                  For any warranty-related questions or to submit a claim, please contact our customer service team.
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

export default WarrantyPage;
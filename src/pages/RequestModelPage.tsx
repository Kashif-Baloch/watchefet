import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { submitModelRequest } from '../utils/supabase-forms';

const RequestModelPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brand: '',
    customBrand: '',
    model: '',
    referenceNumber: '',
    additionalDetails: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitModelRequest({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        brand: formData.brand === 'Other' ? formData.customBrand : formData.brand,
        model: formData.model,
        reference_number: formData.referenceNumber,
        additional_details: formData.additionalDetails,
      });
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        brand: '',
        customBrand: '',
        model: '',
        referenceNumber: '',
        additionalDetails: '',
      });
      // Scroll to top after successful submission
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit request');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="bg-gradient-to-b from-black to-zinc-900 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              title="Request a Model"
              subtitle="Can't find the watch you're looking for? Let us know and we'll source it for you"
              centered
            />
            
            <div className="max-w-2xl mx-auto mt-12">
              <div className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800">
                {status === 'success' ? (
                  <div className="text-center py-8">
                    <h3 className="text-xl font-serif text-white mb-4">Request Submitted!</h3>
                    <p className="text-gray-400 mb-6">We'll review your request and get back to you within 24 hours.</p>
                    <Button 
                      variant="primary"
                      onClick={() => setStatus('idle')}
                    >
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-gold-500 text-white"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-gold-500 text-white"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-gold-500 text-white"
                        placeholder="e.g., +1 234 567 8900"
                      />
                      <p className="mt-1 text-xs text-gray-400">Include country code (e.g., +1, +44, +66)</p>
                    </div>

                    <div>
                      <label htmlFor="brand" className="block text-sm font-medium text-gray-300 mb-2">
                        Watch Brand
                      </label>
                      <select
                        id="brand"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-gold-500 text-white"
                      >
                        <option value="">Select a brand</option>
                        <option value="Rolex">Rolex</option>
                        <option value="Audemars Piguet">Audemars Piguet</option>
                        <option value="Patek Philippe">Patek Philippe</option>
                        <option value="Hublot">Hublot</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    {formData.brand === 'Other' && (
                      <div>
                        <label htmlFor="customBrand" className="block text-sm font-medium text-gray-300 mb-2">
                          Specify Brand
                        </label>
                        <input
                          type="text"
                          id="customBrand"
                          name="customBrand"
                          value={formData.customBrand}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-gold-500 text-white"
                          placeholder="Enter the watch brand"
                        />
                      </div>
                    )}

                    <div>
                      <label htmlFor="model" className="block text-sm font-medium text-gray-300 mb-2">
                        Model Name
                      </label>
                      <input
                        type="text"
                        id="model"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-gold-500 text-white"
                        placeholder="e.g., Submariner, Royal Oak, Nautilus"
                      />
                    </div>

                    <div>
                      <label htmlFor="referenceNumber" className="block text-sm font-medium text-gray-300 mb-2">
                        Reference Number (Optional)
                      </label>
                      <input
                        type="text"
                        id="referenceNumber"
                        name="referenceNumber"
                        value={formData.referenceNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-gold-500 text-white"
                        placeholder="e.g., 126610LN, 15500ST, 5711/1A"
                      />
                    </div>

                    <div>
                      <label htmlFor="additionalDetails" className="block text-sm font-medium text-gray-300 mb-2">
                        Additional Details
                      </label>
                      <textarea
                        id="additionalDetails"
                        name="additionalDetails"
                        value={formData.additionalDetails}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-gold-500 text-white resize-none"
                        placeholder="Please provide any additional details about the watch you're looking for (e.g., dial color, material, year)"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="text-red-500 text-sm">
                        {errorMessage}
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      variant="primary" 
                      fullWidth
                      disabled={status === 'submitting'}
                    >
                      {status === 'submitting' ? 'Submitting...' : 'Submit Request'}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RequestModelPage;
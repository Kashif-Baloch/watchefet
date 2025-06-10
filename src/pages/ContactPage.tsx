import React, { useState } from 'react';
import { Mail, Phone, Clock } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { submitContactForm } from '../utils/supabase-forms';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitContactForm(formData);
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      // Scroll to top after successful submission
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit form');
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
              title="Contact Us"
              subtitle="Get in touch with our team of luxury replica watch experts"
              centered
            />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
              {/* Contact Form */}
              <div className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800">
                {status === 'success' ? (
                  <div className="text-center py-8">
                    <h3 className="text-xl font-serif text-white mb-4">Thank You!</h3>
                    <p className="text-gray-400 mb-6">Your message has been sent successfully. We'll get back to you soon.</p>
                    <Button 
                      variant="primary"
                      onClick={() => setStatus('idle')}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-gold-500 text-white"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Order Status">Order Status</option>
                        <option value="Product Information">Product Information</option>
                        <option value="Technical Support">Technical Support</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-gold-500 text-white resize-none"
                        placeholder="Enter your message"
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
                      {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div>
                <div className="bg-zinc-900/50 p-8 rounded-lg border border-zinc-800">
                  <h3 className="text-xl font-serif mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {/* <div className="flex items-start">
                      <Phone className="h-5 w-5 text-gold-500 mt-1 mr-4" />
                      <div>
                        <p className="font-medium text-white">Phone</p>
                        <p className="text-gray-400">+66 97-990-1084</p>
                      </div>
                    </div> */}
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-gold-500 mt-1 mr-4" />
                      <div>
                        <p className="font-medium text-white">Email</p>
                        <p className="text-gray-400">info@timelesschrono.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-gold-500 mt-1 mr-4" />
                      <div>
                        <p className="font-medium text-white">Response Time</p>
                        <p className="text-gray-400">We aim to get back to you within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
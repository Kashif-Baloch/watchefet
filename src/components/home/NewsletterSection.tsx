import React, { useState } from 'react';
import Button from '../common/Button';
import { submitNewsletterSubscription } from '../../utils/supabase-forms';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      await submitNewsletterSubscription({ email });
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to subscribe');
    }
  };
  
  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-white mb-4">
            Stay Updated on New Collections
          </h2>
          <p className="text-gray-400">
            Subscribe to our newsletter for exclusive previews, special offers, and watchmaking insights.
          </p>
        </div>
        
        {status === 'success' ? (
          <div className="text-center">
            <p className="text-green-500 mb-4">Thank you for subscribing!</p>
            <Button 
              variant="outline"
              onClick={() => setStatus('idle')}
            >
              Subscribe Another Email
            </Button>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow px-5 py-3 bg-zinc-800 text-white border border-zinc-700 rounded-lg focus:border-gold-500 focus:outline-none"
            />
            <Button 
              type="submit" 
              variant="primary"
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
        )}
        
        {status === 'error' && (
          <p className="text-red-500 text-sm text-center mt-4">{errorMessage}</p>
        )}
        
        <p className="text-gray-500 text-xs text-center mt-4">
          By subscribing, you agree to our Privacy Policy and consent to receive updates from Timeless Chrono.
        </p>
      </div>
    </section>
  );
};

export default NewsletterSection;
import { useNavigate } from 'react-router-dom';

interface CartItem {
  productId: string;
  quantity: number;
}

export const useStripe = () => {
  const navigate = useNavigate();

  const createCheckoutSession = async (items: CartItem[]) => {
    try {
      const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
      
      if (!supabaseKey) {
        throw new Error('Missing Supabase authentication key');
      }

      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/stripe-checkout`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${supabaseKey}`,
          },
          body: JSON.stringify({ items }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      throw error;
    }
  };

  return {
    createCheckoutSession,
  };
};
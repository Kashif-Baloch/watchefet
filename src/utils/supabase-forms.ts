import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const submitContactForm = async (data: {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) => {
  const { error } = await supabase
    .from('contact_submissions')
    .insert([data]);

  if (error) throw error;
};

export const submitModelRequest = async (data: {
  name: string;
  email: string;
  phone?: string;
  brand: string;
  model: string;
  reference_number?: string;
  additional_details?: string;
}) => {
  const { error } = await supabase
    .from('model_requests')
    .insert([data]);

  if (error) throw error;
};

export const submitNewsletterSubscription = async (data: {
  email: string;
}) => {
  const { error } = await supabase
    .from('newsletter_subscriptions')
    .insert([data]);

  if (error) {
    if (error.code === '23505') {
      throw new Error('This email is already subscribed to our newsletter');
    }
    throw error;
  }
};
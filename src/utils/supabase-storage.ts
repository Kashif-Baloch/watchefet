import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const uploadImage = async (file: File, path: string): Promise<string> => {
  const { data, error } = await supabase.storage
    .from('product-images')
    .upload(path, file);

  if (error) {
    throw error;
  }

  const { data: publicUrl } = supabase.storage
    .from('product-images')
    .getPublicUrl(data.path);

  return publicUrl.publicUrl;
};

export const deleteImage = async (path: string): Promise<void> => {
  const { error } = await supabase.storage
    .from('product-images')
    .remove([path]);

  if (error) {
    throw error;
  }
};

export const listImages = async (prefix?: string): Promise<string[]> => {
  const { data, error } = await supabase.storage
    .from('product-images')
    .list(prefix);

  if (error) {
    throw error;
  }

  return data.map(file => {
    const { data: { publicUrl } } = supabase.storage
      .from('product-images')
      .getPublicUrl(file.name);
    return publicUrl;
  });
};
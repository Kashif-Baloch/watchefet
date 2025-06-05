/*
  # Add contact and model request tables with phone field

  1. Changes
    - Create contact_submissions table if not exists
    - Create model_requests table if not exists
    - Add RLS policies if they don't exist
    - Include phone field in both tables
*/

-- Create contact_submissions table if it doesn't exist
CREATE TABLE IF NOT EXISTS contact_submissions (
  id bigint primary key generated always as identity,
  name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  created_at timestamp with time zone default now()
);

-- Enable RLS and create policy only if it doesn't exist
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'contact_submissions' 
    AND policyname = 'Enable insert access for all users'
  ) THEN
    CREATE POLICY "Enable insert access for all users" ON contact_submissions
      FOR INSERT WITH CHECK (true);
  END IF;
END $$;

-- Create model_requests table if it doesn't exist
CREATE TABLE IF NOT EXISTS model_requests (
  id bigint primary key generated always as identity,
  name text not null,
  email text not null,
  phone text,
  brand text not null,
  model text not null,
  reference_number text,
  additional_details text,
  status text default 'pending',
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable RLS and create policy only if it doesn't exist
ALTER TABLE model_requests ENABLE ROW LEVEL SECURITY;

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'model_requests' 
    AND policyname = 'Enable insert access for all users'
  ) THEN
    CREATE POLICY "Enable insert access for all users" ON model_requests
      FOR INSERT WITH CHECK (true);
  END IF;
END $$;
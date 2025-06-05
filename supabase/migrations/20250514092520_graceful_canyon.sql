/*
  # Add phone field to contact and model request tables

  1. Changes
    - Add optional phone column to contact_submissions table
    - Add optional phone column to model_requests table

  Note: Tables and policies already exist, so we only need to add the new columns
*/

-- Add phone column to contact_submissions if it doesn't exist
DO $$ 
BEGIN 
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'contact_submissions' 
    AND column_name = 'phone'
  ) THEN
    ALTER TABLE contact_submissions ADD COLUMN phone text;
  END IF;
END $$;

-- Add phone column to model_requests if it doesn't exist
DO $$ 
BEGIN 
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'model_requests' 
    AND column_name = 'phone'
  ) THEN
    ALTER TABLE model_requests ADD COLUMN phone text;
  END IF;
END $$;
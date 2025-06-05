/*
  # Add Newsletter Subscriptions Table

  1. New Table
    - `newsletter_subscriptions`: Stores newsletter subscriber emails
      - Includes email validation
      - Tracks subscription date
      - Prevents duplicate subscriptions

  2. Security
    - Enables Row Level Security (RLS)
    - Allows public inserts with email validation
*/

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id bigint primary key generated always as identity,
  email text not null unique check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
  created_at timestamp with time zone default now()
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert access for all users" ON newsletter_subscriptions
  FOR INSERT WITH CHECK (true);
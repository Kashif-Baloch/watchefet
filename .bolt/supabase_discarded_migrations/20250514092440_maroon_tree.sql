CREATE TABLE IF NOT EXISTS contact_submissions (
  id bigint primary key generated always as identity,
  name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  created_at timestamp with time zone default now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert access for all users" ON contact_submissions
  FOR INSERT WITH CHECK (true);

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

ALTER TABLE model_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert access for all users" ON model_requests
  FOR INSERT WITH CHECK (true);
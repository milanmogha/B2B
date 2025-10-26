/*
  # Create Enquiries Table

  1. New Tables
    - `enquiries`
      - `id` (uuid, primary key) - Unique identifier for each enquiry
      - `company_name` (text) - Name of the enquiring company
      - `contact_name` (text) - Name of the contact person
      - `email` (text) - Email address for follow-up
      - `phone` (text) - Phone number for direct contact
      - `project_type` (text) - Type of project (commercial, industrial, etc.)
      - `message` (text) - Detailed project requirements and enquiry details
      - `created_at` (timestamptz) - Timestamp when enquiry was submitted

  2. Security
    - Enable RLS on `enquiries` table
    - Add policy to allow public INSERT for form submissions
    - Add policy to allow authenticated users to read enquiries (for admin/sales team)

  3. Important Notes
    - Public users can only submit enquiries (INSERT)
    - Only authenticated users can view enquiry data
    - All enquiries are automatically timestamped
    - No UPDATE or DELETE policies to maintain enquiry integrity
*/

-- Create enquiries table
CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  contact_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  project_type text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to submit an enquiry (public form submissions)
CREATE POLICY "Anyone can submit enquiries"
  ON enquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Allow authenticated users to view all enquiries (for sales team/admin)
CREATE POLICY "Authenticated users can view enquiries"
  ON enquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Create index for faster queries on created_at
CREATE INDEX IF NOT EXISTS enquiries_created_at_idx ON enquiries(created_at DESC);
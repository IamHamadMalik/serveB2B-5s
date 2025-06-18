-- Drop existing tables if they exist (be careful in production!)
DROP TABLE IF EXISTS blog_posts CASCADE;
DROP TABLE IF EXISTS blog_categories CASCADE;
DROP TABLE IF EXISTS blog_tags CASCADE;

-- Create the blog categories table first
CREATE TABLE blog_categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create the blog tags table
CREATE TABLE blog_tags (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  slug VARCHAR(50) UNIQUE NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create the blog posts table
CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured BOOLEAN DEFAULT FALSE,
  published BOOLEAN DEFAULT TRUE,
  category VARCHAR(100),
  tags TEXT[], -- Array of tags
  author_name VARCHAR(100),
  author_email VARCHAR(255),
  read_time INTEGER, -- in minutes
  meta_title VARCHAR(255),
  meta_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for better performance
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
CREATE INDEX idx_blog_posts_published ON blog_posts(published);
CREATE INDEX idx_blog_posts_featured ON blog_posts(featured);
CREATE INDEX idx_blog_posts_created_at ON blog_posts(created_at DESC);

-- Enable Row Level Security
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_tags ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to published posts" ON blog_posts
  FOR SELECT USING (published = true);

CREATE POLICY "Allow public read access to categories" ON blog_categories
  FOR SELECT USING (true);

CREATE POLICY "Allow public read access to tags" ON blog_tags
  FOR SELECT USING (true);

-- Grant permissions
GRANT SELECT ON blog_posts TO anon, authenticated;
GRANT SELECT ON blog_categories TO anon, authenticated;
GRANT SELECT ON blog_tags TO anon, authenticated;

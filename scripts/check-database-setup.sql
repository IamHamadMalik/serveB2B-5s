-- Check if tables exist and have data
SELECT 'blog_posts' as table_name, COUNT(*) as record_count FROM blog_posts
UNION ALL
SELECT 'blog_categories' as table_name, COUNT(*) as record_count FROM blog_categories
UNION ALL
SELECT 'blog_tags' as table_name, COUNT(*) as record_count FROM blog_tags;

-- Check the structure of blog_posts table
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'blog_posts' 
ORDER BY ordinal_position;

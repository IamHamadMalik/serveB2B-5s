-- Insert categories
INSERT INTO blog_categories (name, slug, description) VALUES
('Implementation', 'implementation', 'Guides and tutorials for implementing Salesforce B2B solutions'),
('Development', 'development', 'Technical development articles and code examples'),
('Trends', 'trends', 'Latest trends and insights in B2B e-commerce'),
('Integration', 'integration', 'Integration guides and best practices'),
('Security', 'security', 'Security best practices and compliance'),
('Analytics', 'analytics', 'Analytics, reporting, and data insights'),
('Customer Experience', 'customer-experience', 'B2B customer experience optimization'),
('Pricing', 'pricing', 'Pricing strategies and models'),
('Mobile', 'mobile', 'Mobile-first B2B commerce solutions')
ON CONFLICT (slug) DO NOTHING;

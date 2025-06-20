"use client"

import { useEffect, useState } from "react"
import { BookOpen, Users, Zap, Calendar, Clock, User, Tag, Search, Filter, AlertCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { supabase } from "@/lib/supabase"

type BlogPost = {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  featured: boolean
  published: boolean
  category: string
  tags: string[]
  author_name: string
  author_email: string
  read_time: number
  meta_title: string
  meta_description: string
  created_at: string
  updated_at: string
}

type Category = {
  id: number
  name: string
  slug: string
  description: string
}

// Fallback data in case database is not set up yet
const fallbackPosts: BlogPost[] = [
  {
    id: 1,
    title: "Complete Guide to Salesforce B2B Commerce Cloud Implementation",
    slug: "complete-guide-salesforce-b2b-commerce-cloud-implementation",
    excerpt:
      "Learn step-by-step how to implement Salesforce B2B Commerce Cloud for your business, including best practices, common pitfalls, and optimization strategies.",
    content: "Full implementation guide content...",
    featured: true,
    published: true,
    category: "Implementation",
    tags: ["Commerce Cloud", "B2B", "Implementation"],
    author_name: "Sarah Johnson",
    author_email: "sarah@serveb2b.com",
    read_time: 12,
    meta_title: "Complete Guide to Salesforce B2B Commerce Cloud Implementation",
    meta_description: "Step-by-step guide to implementing Salesforce B2B Commerce Cloud",
    created_at: "2024-12-18T00:00:00Z",
    updated_at: "2024-12-18T00:00:00Z",
  },
  {
    id: 2,
    title: "B2B E-commerce Trends That Will Shape 2025",
    slug: "b2b-ecommerce-trends-2025",
    excerpt:
      "Discover the emerging trends in B2B e-commerce and how Salesforce Commerce Cloud is adapting to meet these new demands.",
    content: "Trends analysis content...",
    featured: true,
    published: true,
    category: "Trends",
    tags: ["Trends", "B2B", "E-commerce"],
    author_name: "Mike Chen",
    author_email: "mike@serveb2b.com",
    read_time: 8,
    meta_title: "B2B E-commerce Trends That Will Shape 2025",
    meta_description: "Discover emerging B2B e-commerce trends for 2025",
    created_at: "2024-12-15T00:00:00Z",
    updated_at: "2024-12-15T00:00:00Z",
  },
  {
    id: 3,
    title: "Custom Lightning Components for B2B Commerce",
    slug: "custom-lightning-components-b2b-commerce",
    excerpt:
      "Build powerful custom Lightning components specifically designed for B2B commerce scenarios and complex business requirements.",
    content: "Lightning components tutorial...",
    featured: false,
    published: true,
    category: "Development",
    tags: ["Lightning", "Development", "Components"],
    author_name: "David Kim",
    author_email: "david@serveb2b.com",
    read_time: 15,
    meta_title: "Custom Lightning Components for B2B Commerce",
    meta_description: "Learn to build custom Lightning components for B2B commerce",
    created_at: "2024-12-10T00:00:00Z",
    updated_at: "2024-12-10T00:00:00Z",
  },
  {
    id: 4,
    title: "Optimizing B2B Customer Experience on Salesforce Platform",
    slug: "optimizing-b2b-customer-experience-salesforce",
    excerpt:
      "Strategies and techniques to enhance B2B customer experience using Salesforce's powerful platform capabilities.",
    content: "Customer experience optimization guide...",
    featured: false,
    published: true,
    category: "Customer Experience",
    tags: ["CX", "B2B", "Optimization"],
    author_name: "Emily Rodriguez",
    author_email: "emily@serveb2b.com",
    read_time: 10,
    meta_title: "Optimizing B2B Customer Experience on Salesforce",
    meta_description: "Enhance B2B customer experience with Salesforce strategies",
    created_at: "2024-12-12T00:00:00Z",
    updated_at: "2024-12-12T00:00:00Z",
  },
  {
    id: 5,
    title: "B2B Pricing Strategies in Salesforce Commerce Cloud",
    slug: "b2b-pricing-strategies-salesforce-commerce-cloud",
    excerpt:
      "Master complex B2B pricing models, tier-based pricing, and volume discounts in Salesforce Commerce Cloud.",
    content: "Pricing strategies guide...",
    featured: false,
    published: true,
    category: "Pricing",
    tags: ["Pricing", "B2B", "Strategy"],
    author_name: "Lisa Wang",
    author_email: "lisa@serveb2b.com",
    read_time: 11,
    meta_title: "B2B Pricing Strategies in Salesforce Commerce Cloud",
    meta_description: "Master complex B2B pricing models in Salesforce Commerce Cloud",
    created_at: "2024-12-08T00:00:00Z",
    updated_at: "2024-12-08T00:00:00Z",
  },
  {
    id: 6,
    title: "Integrating ERP Systems with Salesforce B2B Commerce",
    slug: "integrating-erp-systems-salesforce-b2b-commerce",
    excerpt:
      "Complete guide to integrating popular ERP systems like SAP and Oracle with your Salesforce B2B commerce platform.",
    content: "ERP integration guide...",
    featured: false,
    published: true,
    category: "Integration",
    tags: ["ERP", "Integration", "SAP"],
    author_name: "Robert Taylor",
    author_email: "robert@serveb2b.com",
    read_time: 14,
    meta_title: "Integrating ERP Systems with Salesforce B2B Commerce",
    meta_description: "Complete guide to ERP integration with Salesforce B2B commerce",
    created_at: "2024-12-05T00:00:00Z",
    updated_at: "2024-12-05T00:00:00Z",
  },
]

const fallbackCategories = [
  { id: 1, name: "Implementation", slug: "implementation", description: "Implementation guides" },
  { id: 2, name: "Development", slug: "development", description: "Development tutorials" },
  { id: 3, name: "Trends", slug: "trends", description: "Industry trends" },
  { id: 4, name: "Integration", slug: "integration", description: "Integration guides" },
  { id: 5, name: "Customer Experience", slug: "customer-experience", description: "CX optimization" },
  { id: 6, name: "Pricing", slug: "pricing", description: "Pricing strategies" },
]

export default function ArticlesPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([])
  const [usingFallback, setUsingFallback] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        setError(null)

        // Try to fetch blog posts from Supabase
        const { data: postsData, error: postsError } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("published", true)
          .order("created_at", { ascending: false })

        // Try to fetch categories from Supabase
        const { data: categoriesData, error: categoriesError } = await supabase
          .from("blog_categories")
          .select("*")
          .order("name")

        if (postsError || categoriesError) {
          console.warn("Database not set up yet, using fallback data:", { postsError, categoriesError })
          // Use fallback data if database tables don't exist
          setPosts(fallbackPosts)
          setCategories(fallbackCategories)
          setFilteredPosts(fallbackPosts)
          setUsingFallback(true)
        } else {
          // Use database data if available and mark latest 2 as featured
          let processedPosts = postsData || fallbackPosts
          if (processedPosts.length > 0) {
            processedPosts = processedPosts.map((post, index) => ({
              ...post,
              featured: index < 2, // Mark first 2 (latest) as featured
            }))
          }

          setPosts(processedPosts)
          setCategories(categoriesData || fallbackCategories)
          setFilteredPosts(processedPosts)
          setUsingFallback(processedPosts?.length === 0)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
        setError("Failed to load articles")
        // Use fallback data on error
        setPosts(fallbackPosts)
        setCategories(fallbackCategories)
        setFilteredPosts(fallbackPosts)
        setUsingFallback(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    let filtered = posts

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    setFilteredPosts(filtered)
  }, [posts, selectedCategory, searchTerm])

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Development":
        return <Zap className="h-12 w-12 text-blue-600" />
      case "Integration":
        return <Users className="h-12 w-12 text-indigo-600" />
      case "Pricing":
        return <Tag className="h-12 w-12 text-purple-600" />
      default:
        return <BookOpen className="h-12 w-12 text-blue-600" />
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading B2B articles...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Database Status Banner */}
      {usingFallback && (
        <div className="bg-yellow-50 border-b border-yellow-200 px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-center space-x-2 text-yellow-800">
            <AlertCircle className="h-5 w-5" />
            <span className="text-sm">
              Currently showing sample articles. Run the database setup scripts to load real content from Supabase.
            </span>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
              B2B Knowledge Hub - {posts.length} Articles
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              B2B Salesforce Articles &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                {" "}
                Expert Insights
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay ahead with the latest B2B Salesforce trends, best practices, and expert insights. From Commerce Cloud
              tutorials to Lightning development guides.
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search B2B articles..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge
              variant={selectedCategory === "All" ? "default" : "outline"}
              className="cursor-pointer hover:bg-blue-100 px-4 py-2"
              onClick={() => setSelectedCategory("All")}
            >
              All ({posts.length})
            </Badge>
            {categories.map((category) => {
              const count = posts.filter((post) => post.category === category.name).length
              return (
                <Badge
                  key={category.id}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  className="cursor-pointer hover:bg-blue-100 px-4 py-2"
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {category.name} ({count})
                </Badge>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured B2B Articles</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our most popular and comprehensive guides to B2B Salesforce development
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {featuredPosts.map((article) => (
                <Link key={article.id} href={`/articles/${article.slug}`}>
                  <Card className="border-blue-100 hover:border-blue-300 transition-colors overflow-hidden group cursor-pointer h-full">
                    <div className="h-64 bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                      {getCategoryIcon(article.category)}
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {article.read_time} min read
                        </div>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-lg">{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{article.author_name}</span>
                          <Calendar className="h-4 w-4 text-gray-400 ml-4" />
                          <span className="text-sm text-gray-600">{formatDate(article.created_at)}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {article.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      {regularPosts.length > 0 && (
        <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {selectedCategory === "All" ? "All B2B Articles" : `${selectedCategory} Articles`}
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {searchTerm
                  ? `Search results for "${searchTerm}" (${filteredPosts.length} articles)`
                  : "Comprehensive collection of B2B Salesforce knowledge and expertise"}
              </p>
            </div>

            {regularPosts.length === 0 ? (
              <div className="text-center py-12">
                <BookOpen className="h-24 w-24 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search or category filter.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {regularPosts.map((article) => (
                  <Link key={article.id} href={`/articles/${article.slug}`}>
                    <Card className="border-blue-100 hover:border-blue-300 transition-colors group cursor-pointer h-full">
                      <CardHeader>
                        <div className="w-full h-48 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                          {getCategoryIcon(article.category)}
                        </div>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">{article.category}</Badge>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            {article.read_time} min read
                          </div>
                        </div>
                        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                          {article.title}
                        </CardTitle>
                        <CardDescription>{article.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4" />
                            <span>{article.author_name}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(article.created_at)}</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {article.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with B2B Insights</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Get the latest B2B Salesforce articles, tutorials, and industry insights delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

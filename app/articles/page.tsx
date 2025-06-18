import { ArrowRight, BookOpen, Users, Zap, Calendar, Clock, User, Tag } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "B2B Salesforce Articles & Insights | ServeB2B - Expert Knowledge Base",
  description:
    "Explore comprehensive B2B Salesforce articles, tutorials, and insights. Learn about Commerce Cloud, B2B platform development, best practices, and industry trends from our experts.",
  keywords: [
    "B2B Salesforce articles",
    "Salesforce B2B tutorials",
    "B2B Commerce Cloud guides",
    "Salesforce B2B best practices",
    "B2B e-commerce insights",
    "Salesforce B2B development tips",
    "B2B platform tutorials",
  ],
}

const articles = [
  {
    id: 1,
    title: "Complete Guide to Salesforce B2B Commerce Cloud Implementation",
    excerpt:
      "Learn step-by-step how to implement Salesforce B2B Commerce Cloud for your business, including best practices, common pitfalls, and optimization strategies.",
    category: "Implementation",
    readTime: "12 min read",
    date: "Dec 18, 2024",
    author: "Sarah Johnson",
    featured: true,
    tags: ["Commerce Cloud", "B2B", "Implementation"],
  },
  {
    id: 2,
    title: "B2B E-commerce Trends That Will Shape 2025",
    excerpt:
      "Discover the emerging trends in B2B e-commerce and how Salesforce Commerce Cloud is adapting to meet these new demands.",
    category: "Trends",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    author: "Mike Chen",
    featured: true,
    tags: ["Trends", "B2B", "E-commerce"],
  },
  {
    id: 3,
    title: "Optimizing B2B Customer Experience on Salesforce Platform",
    excerpt:
      "Strategies and techniques to enhance B2B customer experience using Salesforce's powerful platform capabilities.",
    category: "Customer Experience",
    readTime: "10 min read",
    date: "Dec 12, 2024",
    author: "Emily Rodriguez",
    featured: false,
    tags: ["CX", "B2B", "Optimization"],
  },
  {
    id: 4,
    title: "Custom Lightning Components for B2B Commerce",
    excerpt:
      "Build powerful custom Lightning components specifically designed for B2B commerce scenarios and complex business requirements.",
    category: "Development",
    readTime: "15 min read",
    date: "Dec 10, 2024",
    author: "David Kim",
    featured: false,
    tags: ["Lightning", "Development", "Components"],
  },
  {
    id: 5,
    title: "B2B Pricing Strategies in Salesforce Commerce Cloud",
    excerpt:
      "Master complex B2B pricing models, tier-based pricing, and volume discounts in Salesforce Commerce Cloud.",
    category: "Pricing",
    readTime: "11 min read",
    date: "Dec 8, 2024",
    author: "Lisa Wang",
    featured: false,
    tags: ["Pricing", "B2B", "Strategy"],
  },
  {
    id: 6,
    title: "Integrating ERP Systems with Salesforce B2B Commerce",
    excerpt:
      "Complete guide to integrating popular ERP systems like SAP and Oracle with your Salesforce B2B commerce platform.",
    category: "Integration",
    readTime: "14 min read",
    date: "Dec 5, 2024",
    author: "Robert Taylor",
    featured: false,
    tags: ["ERP", "Integration", "SAP"],
  },
  {
    id: 7,
    title: "Mobile-First B2B Commerce: Design and Development",
    excerpt: "Best practices for creating mobile-optimized B2B commerce experiences that drive engagement and sales.",
    category: "Mobile",
    readTime: "9 min read",
    date: "Dec 3, 2024",
    author: "Jennifer Liu",
    featured: false,
    tags: ["Mobile", "Design", "UX"],
  },
  {
    id: 8,
    title: "Security Best Practices for B2B Salesforce Implementations",
    excerpt:
      "Essential security considerations and implementation strategies for B2B Salesforce platforms handling sensitive business data.",
    category: "Security",
    readTime: "13 min read",
    date: "Nov 30, 2024",
    author: "Alex Thompson",
    featured: false,
    tags: ["Security", "Best Practices", "Compliance"],
  },
  {
    id: 9,
    title: "Analytics and Reporting for B2B Commerce Success",
    excerpt:
      "Leverage Salesforce analytics tools to gain insights into your B2B commerce performance and make data-driven decisions.",
    category: "Analytics",
    readTime: "10 min read",
    date: "Nov 28, 2024",
    author: "Maria Garcia",
    featured: false,
    tags: ["Analytics", "Reporting", "KPIs"],
  },
]

const categories = ["All", "Implementation", "Development", "Trends", "Integration", "Security", "Analytics"]

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Link
                href="https://www.serveb2b.com/"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                aria-label="ServeB2B - Salesforce B2B Commerce Cloud Experts"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold text-gray-900">ServeB2B</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="/solutions" className="text-gray-700 hover:text-blue-600 transition-colors">
                Solutions
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">B2B Knowledge Hub</Badge>
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
                <Input placeholder="Search B2B articles..." className="flex-1" />
                <Button className="bg-blue-600 hover:bg-blue-700">Search Articles</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-blue-100 px-4 py-2"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured B2B Articles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our most popular and comprehensive guides to B2B Salesforce development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {articles
              .filter((article) => article.featured)
              .map((article) => (
                <Card
                  key={article.id}
                  className="border-blue-100 hover:border-blue-300 transition-colors overflow-hidden group cursor-pointer"
                >
                  <div className="h-64 bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                    <BookOpen className="h-24 w-24 text-blue-600 group-hover:scale-110 transition-transform" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
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
                        <span className="text-sm text-gray-600">{article.author}</span>
                        <Calendar className="h-4 w-4 text-gray-400 ml-4" />
                        <span className="text-sm text-gray-600">{article.date}</span>
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
              ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All B2B Articles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive collection of B2B Salesforce knowledge and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles
              .filter((article) => !article.featured)
              .map((article) => (
                <Card
                  key={article.id}
                  className="border-blue-100 hover:border-blue-300 transition-colors group cursor-pointer"
                >
                  <CardHeader>
                    <div className="w-full h-48 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
                      {article.category === "Development" && <Zap className="h-12 w-12 text-blue-600" />}
                      {article.category === "Integration" && <Users className="h-12 w-12 text-indigo-600" />}
                      {article.category === "Pricing" && <Tag className="h-12 w-12 text-purple-600" />}
                      {!["Development", "Integration", "Pricing"].includes(article.category) && (
                        <BookOpen className="h-12 w-12 text-blue-600" />
                      )}
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.readTime}
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
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
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
              ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-blue-200 hover:bg-blue-50">
              Load More Articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link
                href="https://www.serveb2b.com/"
                className="flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold">ServeB2B</span>
              </Link>
              <p className="text-gray-400">
                Your trusted partner for Salesforce B2B solutions and digital transformation.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">B2B Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    B2B Commerce Cloud
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    B2B Platform Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Salesforce B2B Core
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    B2B Consulting
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">B2B Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/articles" className="hover:text-white transition-colors">
                    B2B Articles
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="hover:text-white transition-colors">
                    B2B Solutions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    B2B Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    B2B Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white transition-colors">
                    Contact B2B Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ServeB2B. All rights reserved. Salesforce B2B Commerce Cloud Experts.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

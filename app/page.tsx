"use client"

import { useState, useEffect } from "react"
import { ArrowRight, CheckCircle, Cloud, Users, Zap, BookOpen, Calendar, Mail, Phone, Clock, User } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactModal } from "@/components/contact-modal"
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

// Fallback articles for home page
const fallbackArticles: BlogPost[] = [
  {
    id: 1,
    title: "Salesforce B2B Commerce Cloud Best Practices",
    slug: "salesforce-b2b-commerce-cloud-best-practices",
    excerpt: "Learn the essential best practices for implementing B2B Commerce Cloud solutions and customization",
    content: "",
    featured: false,
    published: true,
    category: "Implementation",
    tags: ["Commerce Cloud", "Best Practices", "B2B"],
    author_name: "Sarah Johnson",
    author_email: "sarah@serveb2b.com",
    read_time: 5,
    meta_title: "Salesforce B2B Commerce Cloud Best Practices",
    meta_description: "Essential best practices for B2B Commerce Cloud implementation",
    created_at: "2024-12-15T00:00:00Z",
    updated_at: "2024-12-15T00:00:00Z",
  },
  {
    id: 2,
    title: "B2B E-commerce Development Trends 2025",
    slug: "b2b-ecommerce-development-trends-2025",
    excerpt: "Discover the upcoming trends shaping B2B e-commerce development in the digital age",
    content: "",
    featured: false,
    published: true,
    category: "Trends",
    tags: ["Trends", "E-commerce", "2025"],
    author_name: "Mike Chen",
    author_email: "mike@serveb2b.com",
    read_time: 8,
    meta_title: "B2B E-commerce Development Trends 2025",
    meta_description: "Upcoming trends in B2B e-commerce development",
    created_at: "2024-12-10T00:00:00Z",
    updated_at: "2024-12-10T00:00:00Z",
  },
  {
    id: 3,
    title: "Salesforce B2B Lightning Platform Development Guide",
    slug: "salesforce-b2b-lightning-platform-development-guide",
    excerpt: "A comprehensive guide to building custom B2B applications on Lightning Platform",
    content: "",
    featured: false,
    published: true,
    category: "Development",
    tags: ["Lightning", "Development", "Guide"],
    author_name: "David Kim",
    author_email: "david@serveb2b.com",
    read_time: 12,
    meta_title: "Salesforce B2B Lightning Platform Development Guide",
    meta_description: "Comprehensive guide to Lightning Platform development",
    created_at: "2024-12-05T00:00:00Z",
    updated_at: "2024-12-05T00:00:00Z",
  },
]

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [articles, setArticles] = useState<BlogPost[]>(fallbackArticles)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchArticles() {
      try {
        const { data: articlesData, error } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("published", true)
          .order("created_at", { ascending: false })
          .limit(3)

        if (!error && articlesData && articlesData.length > 0) {
          setArticles(articlesData)
        }
      } catch (error) {
        console.warn("Using fallback articles:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

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
        return <Zap className="h-12 w-12 text-purple-600" />
      case "Integration":
        return <Users className="h-12 w-12 text-indigo-600" />
      case "Trends":
        return <Users className="h-12 w-12 text-indigo-600" />
      default:
        return <BookOpen className="h-12 w-12 text-blue-600" />
    }
  }

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
              <Link href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="#articles" className="text-gray-700 hover:text-blue-600 transition-colors">
                Articles
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setIsContactModalOpen(true)}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
              Salesforce Certified B2B Commerce Experts
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Tailored B2B E-commerce Solutions
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                {" "}
                Built on Salesforce
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Drive efficiency and boost revenue with our B2B Salesforce customization services. From platform setup to
              custom features, we deliver end-to-end development, integration, and support for your unique B2B
              e-commerce needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
                onClick={() => setIsContactModalOpen(true)}
                aria-label="Start your Salesforce B2B project"
              >
                Start Your B2B Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/solutions">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-blue-200 hover:bg-blue-50">
                  View Our B2B Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom B2B Salesforce Solutions & Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive Salesforce B2B e-commerce customization and platform development tailored to your business
              needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:border-blue-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Cloud className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">B2B Commerce Cloud Development</CardTitle>
                <CardDescription>
                  Build powerful B2B e-commerce experiences with custom Salesforce Commerce Cloud solutions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    B2B Storefront Development
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom B2B Integrations
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    B2B Performance Optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Salesforce B2B Platform Customization</CardTitle>
                <CardDescription>
                  Streamline B2B sales processes with advanced Salesforce platform customization and development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    B2B Account Management
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    B2B Order Management
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    B2B Pricing & Catalogs
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Salesforce CRM & Lightning Development</CardTitle>
                <CardDescription>
                  Maximize your B2B CRM potential with custom Salesforce Core and Lightning platform development
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom B2B Objects & Fields
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    B2B Workflow Automation
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Lightning B2B Components
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose ServeB2B for Salesforce B2B Development?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With years of experience in the Salesforce B2B ecosystem, we deliver custom solutions that drive real
                business results. Our certified Salesforce B2B consultants understand the complexities of modern B2B
                commerce and CRM challenges.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">B2B Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
                  <div className="text-sm text-gray-600">Years B2B Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">B2B Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">B2B Support Available</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Salesforce B2B Certified</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">B2B Commerce Cloud Specialist</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">B2B Platform Expert</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-gray-600">Lightning B2B Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section - Now Dynamic */}
      <section id="articles" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest B2B Salesforce Articles & Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest Salesforce B2B trends, best practices, and industry insights for B2B
              e-commerce development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.id} href={`/articles/${article.slug}`}>
                <Card className="hover:shadow-lg transition-all duration-300 group cursor-pointer h-full border-blue-100 hover:border-blue-300">
                  <CardHeader>
                    <div className="w-full h-48 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                      {getCategoryIcon(article.category)}
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {article.read_time} min read
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-300">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>{article.author_name}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{formatDate(article.created_at)}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {article.tags.slice(0, 3).map((tag) => (
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

          <div className="text-center mt-12">
            <Link href="/articles">
              <Button variant="outline" size="lg" className="border-blue-200 hover:bg-blue-50">
                View All B2B Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your B2B Business with Salesforce?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Let's discuss how we can help you leverage Salesforce B2B solutions to achieve your business goals and
              optimize your B2B e-commerce
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Mail className="h-8 w-8 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Email Our B2B Experts</h3>
              <p className="text-blue-100">hello@serveb2b.com</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="h-8 w-8 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Call Our B2B Team</h3>
              <p className="text-blue-100">+1 (555) 123-4567</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Calendar className="h-8 w-8 mx-auto mb-4 text-blue-200" />
              <h3 className="text-lg font-semibold mb-2">Schedule B2B Consultation</h3>
              <p className="text-blue-100">Book a free B2B consultation</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
              onClick={() => setIsContactModalOpen(true)}
              aria-label="Get started with B2B Salesforce development"
            >
              Get Started with B2B Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
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
                aria-label="ServeB2B - B2B Salesforce Commerce Cloud Experts"
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
                    B2B Case Studies
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
                  <Link href="#" className="hover:text-white transition-colors">
                    About ServeB2B
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
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
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}

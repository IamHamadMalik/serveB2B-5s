"use client"

import { useState, useEffect } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen, Zap, Users, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ContactModal } from "@/components/contact-modal"
import { supabase } from "@/lib/supabase"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

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

// Simplified fallback articles
const fallbackArticles: Record<string, BlogPost> = {
  "complete-guide-salesforce-b2b-commerce-cloud-implementation": {
    id: 1,
    title: "Complete Guide to Salesforce B2B Commerce Cloud Implementation",
    slug: "complete-guide-salesforce-b2b-commerce-cloud-implementation",
    excerpt:
      "Learn step-by-step how to implement Salesforce B2B Commerce Cloud for your business, including best practices, common pitfalls, and optimization strategies.",
    content: `# Complete Guide to Salesforce B2B Commerce Cloud Implementation

Implementing Salesforce B2B Commerce Cloud is a transformative journey that can revolutionize your business operations and customer experience. This comprehensive guide will walk you through every step of the process.

## Understanding B2B Commerce Cloud

Salesforce B2B Commerce Cloud is designed specifically for business-to-business transactions, offering features that cater to complex B2B requirements such as:

- **Account-based pricing and catalogs** - Different pricing for different customer tiers
- **Approval workflows for purchases** - Multi-level approval processes for large orders  
- **Complex product configurations** - Handle products with multiple variants and options
- **Integration with ERP systems** - Seamless data flow between systems
- **Multi-level account hierarchies** - Support for complex organizational structures

## Pre-Implementation Planning

### 1. Business Requirements Analysis

Before diving into implementation, conduct a thorough analysis of your business requirements:

**Current State Assessment:**
- Map out your existing sales processes
- Document current pain points and inefficiencies
- Identify key stakeholders and their specific needs
- Analyze your current technology stack

**Future State Vision:**
- Define clear business objectives
- Set measurable success criteria
- Establish timeline and milestones
- Determine budget and resource allocation

### 2. Technical Architecture Planning

Design your technical architecture considering:

**Data Architecture:**
- Data migration strategies from legacy systems
- Data governance and quality standards
- Master data management approach
- Backup and disaster recovery plans

**Integration Architecture:**
- Integration points with existing systems (ERP, CRM, etc.)
- API strategy and management
- Real-time vs. batch processing requirements
- Security and compliance considerations

## Implementation Phases

### Phase 1: Foundation Setup (Weeks 1-4)

**Org Configuration:**
- Set up Salesforce org structure
- Configure security settings and user access
- Establish development, testing, and production environments
- Set up version control and deployment processes

### Phase 2: Product Catalog and Pricing (Weeks 5-8)

**Product Data Management:**
- Import and cleanse product data
- Set up product categories and hierarchies
- Configure product attributes and specifications
- Implement product search and filtering

### Phase 3: Storefront and User Experience (Weeks 9-12)

**Storefront Design:**
- Design responsive, mobile-first interfaces
- Implement brand guidelines and styling
- Create intuitive navigation and search
- Optimize for performance and accessibility

### Phase 4: Order Management and Workflows (Weeks 13-16)

**Order Processing:**
- Configure order capture and validation
- Set up approval workflows
- Implement order tracking and notifications
- Configure return and refund processes

## Best Practices for Success

### 1. User Experience Focus

**Mobile-First Design:**
- Ensure responsive design across all devices
- Optimize touch interactions for mobile users
- Implement progressive web app (PWA) features
- Test extensively on various screen sizes

**Performance Optimization:**
- Minimize page load times
- Optimize images and media files
- Implement caching strategies
- Monitor and optimize database queries

### 2. Data Quality Management

**Data Governance:**
- Establish data quality standards
- Implement data validation rules
- Set up regular data audits
- Create data stewardship roles

## Common Pitfalls and How to Avoid Them

### 1. Insufficient Planning
**Problem:** Rushing into implementation without proper planning
**Solution:** Invest adequate time in requirements gathering and planning phases

### 2. Data Migration Issues
**Problem:** Poor data quality leading to system issues
**Solution:** Implement thorough data cleansing and validation processes

### 3. User Adoption Challenges
**Problem:** Users resistant to change or inadequately trained
**Solution:** Comprehensive change management and training programs

## Conclusion

Successful Salesforce B2B Commerce Cloud implementation requires careful planning, proper execution, and ongoing optimization. By following this comprehensive guide and working with experienced implementation partners, you can ensure a successful deployment that drives business growth.

Ready to get started? Contact our expert team at ServeB2B for personalized guidance and support.`,
    featured: true,
    published: true,
    category: "Implementation",
    tags: ["Commerce Cloud", "B2B", "Implementation", "Guide"],
    author_name: "Sarah Johnson",
    author_email: "sarah@serveb2b.com",
    read_time: 12,
    meta_title: "Complete Guide to Salesforce B2B Commerce Cloud Implementation | ServeB2B",
    meta_description:
      "Step-by-step guide to implementing Salesforce B2B Commerce Cloud with best practices and optimization strategies.",
    created_at: "2024-12-18T00:00:00Z",
    updated_at: "2024-12-18T00:00:00Z",
  },
  "b2b-ecommerce-trends-2025": {
    id: 2,
    title: "B2B E-commerce Trends That Will Shape 2025",
    slug: "b2b-ecommerce-trends-2025",
    excerpt:
      "Discover the emerging trends in B2B e-commerce and how Salesforce Commerce Cloud is adapting to meet these new demands.",
    content: `# B2B E-commerce Trends That Will Shape 2025

The B2B e-commerce landscape is evolving at an unprecedented pace, driven by changing buyer expectations, technological advancements, and market dynamics. As we look ahead to 2025, several transformative trends are emerging.

## 1. AI-Powered Personalization Revolution

Artificial Intelligence is no longer a futuristic concept—it's becoming the backbone of modern B2B e-commerce experiences.

### Dynamic Content Personalization
AI algorithms now adapt content in real-time based on user behavior, purchase history, and contextual data. This means:
- **Personalized product catalogs** that show relevant items based on past purchases
- **Dynamic pricing** that adjusts based on customer tier and purchase volume
- **Customized content** that speaks to specific industry needs and pain points
- **Intelligent product recommendations** that increase average order value by 15-30%

### Predictive Analytics for Business Intelligence
Advanced forecasting capabilities are transforming how B2B companies manage their operations:
- **Demand forecasting** that helps optimize inventory levels
- **Customer lifetime value prediction** for better resource allocation
- **Churn prediction** to proactively retain valuable customers
- **Market trend analysis** for strategic planning

## 2. Mobile-First B2B Experiences

The shift to mobile-first B2B commerce is accelerating, with mobile transactions expected to account for over 60% of B2B purchases by 2025.

### Progressive Web Apps (PWAs)
PWAs are bridging the gap between web and mobile app experiences:
- **App-like performance** without requiring downloads
- **Offline capabilities** for field sales teams
- **Push notifications** for order updates and promotions
- **Fast loading times** even on slower networks

### Mobile-Optimized Features
B2B platforms are implementing mobile-specific features:
- **Voice search** for hands-free product discovery
- **Barcode scanning** for quick reordering
- **Location-based services** for inventory and delivery information
- **Touch-optimized interfaces** for complex product configurations

## 3. Self-Service Customer Portal Evolution

Modern B2B buyers prefer self-service options, with 83% preferring to research and purchase independently.

### Advanced Account Management
Comprehensive self-service portals now include:
- **Real-time account dashboards** with spending analytics
- **Custom approval workflows** for different purchase types
- **Budget tracking and alerts** to prevent overspending
- **Multi-location management** for enterprise accounts

### Intelligent Support Systems
AI-powered support is reducing the need for human intervention:
- **Chatbots** that can handle complex product inquiries
- **Knowledge bases** with intelligent search capabilities
- **Video tutorials** and interactive guides
- **Community forums** for peer-to-peer support

## 4. Integration-First Architecture

Seamless integration is becoming critical for B2B success, with companies requiring average of 12+ system integrations.

### API-First Approach
Modern B2B platforms are built with integration in mind:
- **RESTful APIs** for easy third-party connections
- **Webhook support** for real-time data synchronization
- **GraphQL** for efficient data querying
- **SDK availability** for custom integrations

### Microservices Architecture
Breaking down monolithic systems into manageable components:
- **Scalable services** that can grow independently
- **Fault isolation** to prevent system-wide failures
- **Technology flexibility** for different service requirements
- **Faster deployment** of new features and updates

## 5. Sustainability and ESG Focus

Environmental, Social, and Governance (ESG) factors are increasingly driving B2B purchasing decisions.

### Carbon Footprint Tracking
Companies are implementing tools to monitor environmental impact:
- **Product carbon footprints** displayed on product pages
- **Shipping emissions** calculations and offset options
- **Sustainable packaging** choices and information
- **Supply chain transparency** for environmental impact

### Sustainable Product Options
Highlighting and promoting environmentally friendly products:
- **Green product badges** and certifications
- **Sustainability scores** for easy comparison
- **Alternative product suggestions** with lower environmental impact
- **Bulk purchasing incentives** to reduce packaging waste

## How Salesforce Commerce Cloud is Adapting

Salesforce is continuously evolving its platform to support these emerging trends:

### Einstein AI Integration
- Built-in AI capabilities for personalization and analytics
- Machine learning models for product recommendations
- Predictive analytics for business intelligence
- Natural language processing for customer service

### Headless Commerce Support
- Flexible architecture options for custom frontends
- API-first approach for omnichannel experiences
- Microservices architecture for scalability
- Integration capabilities with modern development frameworks

### Mobile-Optimized Experiences
- Responsive design templates and components
- Mobile-first development tools
- Progressive Web App capabilities
- Mobile payment integration options

## Preparing Your Business for 2025

To stay competitive in the evolving B2B landscape, organizations should:

### 1. Invest in AI and Automation
- **Start with pilot projects** to test AI capabilities
- **Build data infrastructure** to support AI initiatives
- **Train teams** on AI tools and technologies
- **Measure ROI** and scale successful implementations

### 2. Prioritize Mobile Experience
- **Audit current mobile performance** and identify gaps
- **Implement responsive design** across all touchpoints
- **Optimize for mobile-specific use cases** and workflows
- **Test extensively** on various devices and networks

### 3. Enhance Self-Service Capabilities
- **Analyze customer support tickets** to identify self-service opportunities
- **Implement comprehensive knowledge bases** and FAQs
- **Create interactive tutorials** and guides
- **Gather feedback** and continuously improve self-service options

## The Future is Now

The B2B e-commerce landscape of 2025 will be characterized by intelligent, mobile-first, and sustainable commerce experiences. Companies that start preparing now will be best positioned to capitalize on these emerging trends.

Ready to future-proof your B2B commerce strategy? Contact ServeB2B today to learn how we can help you implement these cutting-edge trends and technologies.`,
    featured: true,
    published: true,
    category: "Trends",
    tags: ["Trends", "B2B", "E-commerce", "2025", "AI"],
    author_name: "Mike Chen",
    author_email: "mike@serveb2b.com",
    read_time: 8,
    meta_title: "B2B E-commerce Trends That Will Shape 2025 | ServeB2B",
    meta_description:
      "Discover emerging B2B e-commerce trends for 2025 including AI personalization and mobile-first experiences.",
    created_at: "2024-12-15T00:00:00Z",
    updated_at: "2024-12-15T00:00:00Z",
  },
  "custom-lightning-components-b2b-commerce": {
    id: 3,
    title: "Custom Lightning Components for B2B Commerce",
    slug: "custom-lightning-components-b2b-commerce",
    excerpt:
      "Build powerful custom Lightning components specifically designed for B2B commerce scenarios and complex business requirements.",
    content: `# Custom Lightning Components for B2B Commerce

Lightning Web Components (LWC) provide a powerful framework for building custom functionality in Salesforce B2B Commerce Cloud. This comprehensive guide explores how to create sophisticated components tailored for complex B2B commerce scenarios.

## Understanding B2B Commerce Requirements

B2B commerce has unique requirements that often necessitate custom components beyond standard Salesforce offerings:

### Complex Pricing Models
- **Tier-based pricing** with volume discounts
- **Contract-specific pricing** for different customers
- **Dynamic pricing** based on market conditions
- **Bundle pricing** for product combinations

### Approval Workflows
- **Multi-level approval processes** for large orders
- **Budget approval** workflows
- **Custom approval criteria** based on business rules
- **Automated escalation** processes

### Custom Product Configurators
- **Complex product options** and variants
- **Conditional logic** for product configurations
- **Real-time pricing** calculations
- **Visual product builders**

### Account-Specific Features
- **Customized catalogs** per customer
- **Account-specific branding** and content
- **Custom fields** and data requirements
- **Personalized dashboards** and reports

## Building Your First B2B Lightning Component

Let's create a comprehensive product configurator component that handles complex B2B scenarios.

### Component Structure

The component includes features for option selection, price calculation, and cart integration. It demonstrates how to build reusable components that can handle the complexity of B2B commerce requirements.

### Key Features:
- Dynamic option rendering based on product configuration
- Real-time price calculations with tier-based pricing
- Validation rules for required and conditional fields
- Integration with Salesforce B2B Commerce Cloud APIs
- Error handling and user feedback
- Mobile-responsive design

## Advanced B2B Component Patterns

### 1. Approval Workflow Component

B2B transactions often require approval workflows. A custom approval component can streamline this process by providing visibility into approval status and enabling quick approval actions.

**Key Features:**
- Visual approval process timeline
- Automated notifications and escalations
- Mobile-friendly approval interfaces
- Integration with Salesforce approval processes
- Custom approval criteria and routing

### 2. Dynamic Pricing Component

B2B pricing is complex, often involving account-specific pricing, volume discounts, and contract terms. A dynamic pricing component can calculate prices in real-time based on various factors.

**Key Features:**
- Real-time price calculations
- Volume discount tiers
- Contract-based pricing
- Currency conversion
- Tax calculations
- Promotional pricing

### 3. Account Dashboard Component

Provide customers with comprehensive account information and self-service capabilities.

**Key Features:**
- Order history and tracking
- Account balance and credit limits
- Custom catalogs and pricing
- Usage analytics and reporting
- Document management

## Best Practices for B2B Lightning Components

### 1. Performance Optimization

**Lazy Loading:**
- Load data only when needed
- Implement pagination for large datasets
- Use caching for frequently accessed data
- Optimize API calls and reduce server round trips

**Efficient Rendering:**
- Use conditional rendering to minimize DOM updates
- Implement virtual scrolling for large lists
- Optimize component lifecycle methods
- Use Lightning Data Service when appropriate

### 2. Error Handling

**Comprehensive Error Management:**
- Implement try-catch blocks for all async operations
- Provide meaningful error messages to users
- Log errors for debugging and monitoring
- Implement retry mechanisms for transient failures

**User Experience:**
- Show loading states during operations
- Provide clear feedback for user actions
- Implement graceful degradation for failures
- Use toast messages for notifications

### 3. Accessibility

**ARIA Support:**
- Implement proper ARIA labels and roles
- Ensure keyboard navigation support
- Provide screen reader compatibility
- Follow WCAG guidelines

**Responsive Design:**
- Mobile-first approach
- Touch-friendly interfaces
- Flexible layouts
- Optimized for various screen sizes

### 4. Testing

**Unit Testing:**
- Write comprehensive Jest tests
- Test component behavior and interactions
- Mock external dependencies
- Achieve high code coverage

**Integration Testing:**
- Test with different user profiles
- Validate with various data scenarios
- Test error conditions and edge cases
- Performance testing under load

## Integration with B2B Commerce Cloud

Custom components need to integrate seamlessly with Commerce Cloud APIs:

### Cart Management
- Add products to cart with custom configurations
- Update quantities and options
- Handle cart validation and errors
- Integrate with checkout processes

### Product Catalog Access
- Retrieve product information and pricing
- Filter products based on account access
- Handle product variants and options
- Implement search and navigation

### Order Processing
- Create and manage orders
- Handle approval workflows
- Track order status and updates
- Generate invoices and documents

## Security Considerations

### Data Protection
- Implement proper field-level security
- Validate user permissions
- Sanitize user inputs
- Protect sensitive information

### API Security
- Use secure authentication methods
- Implement rate limiting
- Validate API responses
- Handle security exceptions

## Deployment and Maintenance

### 1. Deployment Strategy

**Development Process:**
- Use scratch orgs for development
- Implement version control with Git
- Set up CI/CD pipelines
- Test in staging environments

**Release Management:**
- Plan deployment schedules
- Implement rollback procedures
- Monitor post-deployment performance
- Gather user feedback

### 2. Monitoring and Maintenance

**Performance Monitoring:**
- Track component load times
- Monitor API response times
- Analyze user interactions
- Identify optimization opportunities

**Maintenance:**
- Regular security updates
- Bug fixes and improvements
- Feature enhancements
- Documentation updates

## Advanced Features

### AI Integration
- Einstein recommendations
- Predictive analytics
- Natural language processing
- Machine learning insights

### Mobile Optimization
- Progressive Web App features
- Offline capabilities
- Touch gestures
- Mobile-specific workflows

### Analytics Integration
- User behavior tracking
- Performance metrics
- Business intelligence
- Custom reporting

## Conclusion

Custom Lightning components are essential for creating sophisticated B2B commerce experiences that meet complex business requirements. By following the patterns and best practices outlined in this guide, you can build components that are:

- **Performant** and scalable
- **Accessible** to all users  
- **Maintainable** and testable
- **Integrated** with B2B Commerce Cloud
- **Secure** and compliant

The key to success lies in understanding your specific B2B requirements, designing components with reusability in mind, and following Salesforce development best practices throughout the development lifecycle.

Ready to build custom Lightning components for your B2B commerce platform? Contact ServeB2B today for expert development services and consultation.`,
    featured: false,
    published: true,
    category: "Development",
    tags: ["Lightning", "Development", "Components", "B2B"],
    author_name: "David Kim",
    author_email: "david@serveb2b.com",
    read_time: 15,
    meta_title: "Custom Lightning Components for B2B Commerce | Development Guide",
    meta_description:
      "Learn to build powerful custom Lightning components for B2B commerce scenarios with code examples and best practices.",
    created_at: "2024-12-10T00:00:00Z",
    updated_at: "2024-12-10T00:00:00Z",
  },
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<BlogPost | null>(null)
  const [relatedArticles, setRelatedArticles] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    async function fetchArticleData() {
      try {
        setLoading(true)

        // Try to get article from database
        const { data: articleData, error: articleError } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("slug", params.slug)
          .eq("published", true)
          .single()

        let currentArticle: BlogPost | null = null

        if (articleError || !articleData) {
          // Use fallback data
          currentArticle = fallbackArticles[params.slug] || null
        } else {
          currentArticle = articleData
        }

        if (!currentArticle) {
          notFound()
          return
        }

        setArticle(currentArticle)

        // Get related articles
        const { data: relatedData, error: relatedError } = await supabase
          .from("blog_posts")
          .select("*")
          .eq("published", true)
          .eq("category", currentArticle.category)
          .neq("slug", params.slug)
          .limit(3)

        if (relatedError || !relatedData || relatedData.length === 0) {
          // Use fallback related articles
          const fallbackRelated = Object.values(fallbackArticles)
            .filter((art) => art.category === currentArticle!.category && art.slug !== params.slug)
            .slice(0, 3)
          setRelatedArticles(fallbackRelated)
        } else {
          setRelatedArticles(relatedData)
        }
      } catch (error) {
        console.error("Error fetching article:", error)
        const fallbackArticle = fallbackArticles[params.slug]
        if (fallbackArticle) {
          setArticle(fallbackArticle)
          const fallbackRelated = Object.values(fallbackArticles)
            .filter((art) => art.category === fallbackArticle.category && art.slug !== params.slug)
            .slice(0, 3)
          setRelatedArticles(fallbackRelated)
        } else {
          notFound()
        }
      } finally {
        setLoading(false)
      }
    }

    fetchArticleData()
  }, [params.slug])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
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
        return <BookOpen className="h-12 w-12 text-indigo-600" />
      case "Implementation":
        return <BookOpen className="h-12 w-12 text-blue-600" />
      default:
        return <BookOpen className="h-12 w-12 text-blue-600" />
    }
  }

  // Simple content renderer
  const renderContent = (content: string) => {
    return content.split("\n").map((line, index) => {
      if (line.trim() === "") {
        return <br key={index} />
      }

      if (line.startsWith("# ")) {
        return (
          <h1 key={index} className="text-3xl font-bold text-gray-900 mb-6 mt-8">
            {line.substring(2)}
          </h1>
        )
      }

      if (line.startsWith("## ")) {
        return (
          <h2 key={index} className="text-2xl font-bold text-gray-900 mb-4 mt-6">
            {line.substring(3)}
          </h2>
        )
      }

      if (line.startsWith("### ")) {
        return (
          <h3 key={index} className="text-xl font-bold text-gray-900 mb-3 mt-5">
            {line.substring(4)}
          </h3>
        )
      }

      if (line.startsWith("- ")) {
        return (
          <li key={index} className="ml-4 mb-2 list-disc">
            {line.substring(2).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}
          </li>
        )
      }

      // Regular paragraph
      const formattedLine = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      return <p key={index} className="mb-4 leading-relaxed" dangerouslySetInnerHTML={{ __html: formattedLine }} />
    })
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    )
  }

  if (!article) {
    notFound()
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-blue-600 transition-colors">
              Articles
            </Link>
            <span>/</span>
            <span className="text-gray-900 truncate">{article.title}</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <div className="flex items-center space-x-2 mb-6">
            <Link href="/articles" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Articles
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Badge variant="secondary" className="text-sm px-3 py-1">
              {article.category}
            </Badge>
            <div className="flex items-center text-gray-600 text-sm">
              <Clock className="h-4 w-4 mr-1" />
              {article.read_time} min read
            </div>
            <div className="flex items-center text-gray-600 text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              {formatDate(article.created_at)}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{article.title}</h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">{article.excerpt}</p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-b border-gray-200 py-6 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{article.author_name}</div>
                <div className="text-gray-600 text-sm">{article.author_email}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Button variant="outline" size="sm" className="w-fit">
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
              <div className="flex flex-wrap gap-2">
                {article.tags.slice(0, 4).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div className="text-gray-800 leading-relaxed space-y-4">{renderContent(article.content)}</div>
        </div>

        {/* Article Footer */}
        <footer className="border-t border-gray-200 pt-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-sm font-medium text-gray-700 mr-2">Tags:</span>
            {article.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="hover:bg-blue-50 cursor-pointer">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Need Help with Your B2B Project?</h3>
            <p className="text-gray-600 mb-4">
              Our expert team at ServeB2B can help you implement the strategies and solutions discussed in this article.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setIsContactModalOpen(true)}>
              Get Expert Consultation
            </Button>
          </div>
        </footer>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="bg-white py-16 border-t">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map((relatedArticle) => (
                <Link key={relatedArticle.id} href={`/articles/${relatedArticle.slug}`}>
                  <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer h-full border-blue-100 hover:border-blue-300 group">
                    <CardHeader>
                      <div className="w-full h-48 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                        {getCategoryIcon(relatedArticle.category)}
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{relatedArticle.category}</Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {relatedArticle.read_time} min read
                        </div>
                      </div>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                        {relatedArticle.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-3">{relatedArticle.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4" />
                          <span>{relatedArticle.author_name}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{formatDate(relatedArticle.created_at)}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {relatedArticle.tags.slice(0, 3).map((tag) => (
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

      {/* Subscribe Modal (reused from Footer) */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold text-gray-900">Stay Updated with B2B Insights</DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-gray-600 mt-2">
            Get the latest B2B Salesforce articles and insights delivered to your inbox
            </p>
          </DialogHeader>

          <div className="px-6 pb-6">
            <div className="bg-gray-50 rounded-lg p-4 overflow-hidden">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeNuCgkU6qSjDX2qp4ji8evP3xB8fQtMUgskJK0O_i_DAjkxQ/viewform?embedded=true"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-lg"
                title="Subscribe Form"
              >
                Loading…
              </iframe>
            </div>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-500">
                Prefer email? Reach us directly at{" "}
                <a href="mailto:hello@serveb2b.com" className="text-blue-600 hover:underline">
                  hello@serveb2b.com
                </a>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  )
}

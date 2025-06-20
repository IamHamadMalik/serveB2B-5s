import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, ShoppingCart, Users, Workflow, Globe, CreditCard, Package } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "B2B Commerce Cloud Development | ServeB2B - Salesforce B2B E-commerce",
  description:
    "Expert Salesforce B2B Commerce Cloud development services. Custom B2B storefronts, multi-tier pricing, account management, and seamless integrations.",
  keywords: [
    "B2B Commerce Cloud",
    "Salesforce B2B e-commerce",
    "B2B storefront development",
    "B2B Commerce Cloud customization",
    "Salesforce Commerce Cloud B2B",
    "B2B online store",
    "B2B e-commerce platform",
  ],
}

export default function B2BCommerceCloudPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Link
                href="/"
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
              <Link href="/articles" className="text-gray-700 hover:text-blue-600 transition-colors">
                Articles
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/#services" className="hover:text-blue-600 transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-gray-900">B2B Commerce Cloud</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">Salesforce B2B Commerce Cloud</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              B2B Commerce Cloud
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {" "}
                Development & Customization
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your B2B sales with powerful Commerce Cloud solutions. Custom storefronts, complex pricing
              models, account hierarchies, and seamless integrations that drive revenue growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3">
                Start Your Commerce Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/solutions">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-blue-200 hover:bg-blue-50">
                  View Commerce Examples
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commerce Cloud Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              B2B Commerce Cloud Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete B2B e-commerce solutions built on Salesforce Commerce Cloud platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:border-blue-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <ShoppingCart className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Custom B2B Storefronts</CardTitle>
                <CardDescription>
                  Tailored B2B shopping experiences with advanced product catalogs and search
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom storefront design
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Advanced product search
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mobile-responsive design
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <CreditCard className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Multi-Tier Pricing</CardTitle>
                <CardDescription>Complex B2B pricing models with volume discounts and contract pricing</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Volume-based pricing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Contract pricing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Customer-specific pricing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Account Management</CardTitle>
                <CardDescription>Sophisticated B2B account hierarchies and user role management</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Account hierarchies
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Role-based permissions
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Buying group management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Workflow className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Order Management</CardTitle>
                <CardDescription>Advanced B2B order processing with approval workflows and tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Approval workflows
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Bulk ordering
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Order tracking
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Inventory Management</CardTitle>
                <CardDescription>
                  Real-time inventory tracking with availability and allocation management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-time inventory
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Allocation management
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Backorder handling
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Globe className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">System Integrations</CardTitle>
                <CardDescription>Seamless integrations with ERP, CRM, and third-party business systems</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ERP integrations
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    CRM synchronization
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Payment gateways
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* B2B Commerce Benefits */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Salesforce B2B Commerce Cloud?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Salesforce B2B Commerce Cloud provides enterprise-grade e-commerce capabilities specifically designed
                for complex B2B sales processes and relationships.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Unified Customer Experience</h3>
                    <p className="text-gray-600">Seamless integration between sales, service, and commerce</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Scalable Architecture</h3>
                    <p className="text-gray-600">Cloud-native platform that scales with your business growth</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">AI-Powered Insights</h3>
                    <p className="text-gray-600">Einstein AI for personalization and predictive analytics</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Mobile-First Design</h3>
                    <p className="text-gray-600">Responsive design optimized for all devices</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Commerce Performance</span>
                    <span className="text-sm text-blue-600">Excellent</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">40%</div>
                      <div className="text-sm text-gray-600">Faster Order Processing</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">60%</div>
                      <div className="text-sm text-gray-600">Increase in Online Sales</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">25%</div>
                      <div className="text-sm text-gray-600">Reduction in Support Tickets</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">99.9%</div>
                      <div className="text-sm text-gray-600">Platform Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              B2B Commerce Cloud Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our proven methodology ensures successful Commerce Cloud deployment from planning to go-live
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery & Strategy</h3>
              <p className="text-gray-600">Business requirements analysis and commerce strategy development</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design & Architecture</h3>
              <p className="text-gray-600">UX design, technical architecture, and integration planning</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Development & Testing</h3>
              <p className="text-gray-600">Agile development with comprehensive testing and quality assurance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch & Optimization</h3>
              <p className="text-gray-600">Go-live support, user training, and ongoing optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your B2B Commerce?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Let's build a powerful B2B Commerce Cloud solution that drives sales and enhances customer experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3" asChild>
              <Link href="/#contact">
                Start Your Commerce Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-3"
              asChild
            >
              <Link href="/solutions">View Commerce Examples</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

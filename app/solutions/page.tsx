import {
  ArrowRight,
  CheckCircle,
  Cloud,
  Users,
  Star,
  Building2,
  ShoppingCart,
  BarChart3,
  Settings,
  Database,
  Workflow,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "B2B Salesforce Solutions & Case Studies | ServeB2B - Custom Development Portfolio",
  description:
    "Explore our comprehensive B2B Salesforce solutions portfolio. View real case studies, custom developments, and successful B2B e-commerce implementations on Salesforce Commerce Cloud.",
  keywords: [
    "B2B Salesforce solutions",
    "Salesforce B2B case studies",
    "B2B Commerce Cloud examples",
    "Salesforce B2B portfolio",
    "Custom B2B development",
    "B2B e-commerce solutions",
    "Salesforce B2B implementations",
  ],
}

export default function SolutionsPage() {
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

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">Our B2B Solutions Portfolio</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Proven B2B Salesforce
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                {" "}
                Solutions & Case Studies
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their B2B operations with custom Salesforce solutions. From
              Commerce Cloud implementations to Lightning platform development.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Solutions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured B2B Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real-world B2B Salesforce implementations that delivered measurable results
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <Card className="border-blue-100 hover:border-blue-300 transition-colors overflow-hidden">
              <div className="h-64 bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
                <Building2 className="h-24 w-24 text-blue-600" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Manufacturing</Badge>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-2xl">Global Manufacturing B2B Portal</CardTitle>
                <CardDescription className="text-lg">
                  Complete B2B Commerce Cloud implementation for a Fortune 500 manufacturing company
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">300%</div>
                      <div className="text-sm text-gray-600">Order Volume Increase</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">45%</div>
                      <div className="text-sm text-gray-600">Faster Processing</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">$2M</div>
                      <div className="text-sm text-gray-600">Annual Savings</div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Custom B2B pricing engine
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Multi-tier account management
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      ERP integration with SAP
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors overflow-hidden">
              <div className="h-64 bg-gradient-to-r from-indigo-100 to-indigo-200 flex items-center justify-center">
                <ShoppingCart className="h-24 w-24 text-indigo-600" />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Technology</Badge>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <CardTitle className="text-2xl">Tech Distributor B2B Platform</CardTitle>
                <CardDescription className="text-lg">
                  Multi-brand B2B e-commerce platform with advanced inventory management
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">500+</div>
                      <div className="text-sm text-gray-600">Active Partners</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">60%</div>
                      <div className="text-sm text-gray-600">Mobile Orders</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">99.9%</div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Real-time inventory sync
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Partner portal with custom catalogs
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Mobile-first responsive design
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Categories */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">B2B Solution Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive B2B solutions across different industries and use cases
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:border-blue-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Cloud className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Commerce Cloud B2B</CardTitle>
                <CardDescription>Full-scale B2B e-commerce platforms with advanced features</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Multi-tier pricing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Account hierarchies
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom catalogs
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">ERP Integrations</CardTitle>
                <CardDescription>Seamless integration with enterprise systems</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    SAP integration
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Oracle connectivity
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-time sync
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Partner Portals</CardTitle>
                <CardDescription>Custom B2B partner and distributor portals</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Role-based access
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom dashboards
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Performance analytics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Analytics & Reporting</CardTitle>
                <CardDescription>Advanced B2B analytics and business intelligence</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom dashboards
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Sales forecasting
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Performance metrics
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Workflow className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Process Automation</CardTitle>
                <CardDescription>Streamlined B2B workflows and automation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Order processing
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Approval workflows
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Notification systems
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Settings className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Custom Development</CardTitle>
                <CardDescription>Tailored B2B solutions for unique requirements</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Lightning components
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Apex development
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    API integrations
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your B2B Solution?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Let's discuss how we can create a custom B2B Salesforce solution for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Start Your B2B Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:bg-white/10">
              Schedule Consultation
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

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Search, Book, FileText, Code, Settings, Database, Zap, Users, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "B2B Documentation | ServeB2B - Salesforce Commerce Cloud Implementation Guides",
  description:
    "Comprehensive documentation for Salesforce B2B Commerce Cloud implementation, customization, and best practices. Access guides, tutorials, and API references.",
  keywords: ["B2B documentation", "Salesforce implementation guide", "B2B Commerce Cloud docs", "API reference"],
}

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-8">
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
          </div>

          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">B2B Documentation Center</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Complete Guide to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                {" "}
                B2B Commerce Cloud
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive documentation, implementation guides, and best practices for Salesforce B2B Commerce Cloud
              success.
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search documentation..." className="pl-10 h-12 text-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quick Start Guides</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get up and running quickly with our step-by-step implementation guides
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:border-blue-300 transition-colors group cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Book className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Getting Started</CardTitle>
                <CardDescription>
                  Essential first steps for setting up your B2B Commerce Cloud environment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Initial setup and configuration</li>
                  <li>• User permissions and roles</li>
                  <li>• Basic storefront setup</li>
                  <li>• Testing your environment</li>
                </ul>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Read Guide <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors group cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Settings className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Configuration Guide</CardTitle>
                <CardDescription>
                  Detailed configuration instructions for B2B-specific features and settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• B2B pricing configuration</li>
                  <li>• Account hierarchy setup</li>
                  <li>• Approval workflow configuration</li>
                  <li>• Custom catalog management</li>
                </ul>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Read Guide <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors group cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Database className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Integration Guide</CardTitle>
                <CardDescription>
                  Step-by-step instructions for integrating with ERP systems and third-party tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• ERP system integration</li>
                  <li>• Payment gateway setup</li>
                  <li>• API authentication</li>
                  <li>• Data synchronization</li>
                </ul>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Read Guide <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Documentation Categories */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Documentation Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore comprehensive documentation organized by topic and expertise level
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Code className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Developer Resources</CardTitle>
                </div>
                <CardDescription>Technical documentation for developers and system architects</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-200 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">API Reference</h4>
                    <p className="text-sm text-gray-600">Complete API documentation with examples and code samples</p>
                  </div>
                  <div className="border-l-4 border-blue-200 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Lightning Components</h4>
                    <p className="text-sm text-gray-600">Custom component development for B2B commerce scenarios</p>
                  </div>
                  <div className="border-l-4 border-blue-200 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Apex Development</h4>
                    <p className="text-sm text-gray-600">
                      Custom business logic and trigger development best practices
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Administrator Guides</CardTitle>
                </div>
                <CardDescription>Configuration and management guides for Salesforce administrators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-200 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">User Management</h4>
                    <p className="text-sm text-gray-600">
                      Setting up users, profiles, and permissions for B2B commerce
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-200 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Data Management</h4>
                    <p className="text-sm text-gray-600">
                      Import, export, and maintain product catalogs and customer data
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-200 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Workflow Automation</h4>
                    <p className="text-sm text-gray-600">Configure approval processes and automated business rules</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Best Practices</CardTitle>
                </div>
                <CardDescription>Industry best practices and optimization strategies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-200 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Performance Optimization</h4>
                    <p className="text-sm text-gray-600">Tips for optimizing page load times and system performance</p>
                  </div>
                  <div className="border-l-4 border-blue-200 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Security Guidelines</h4>
                    <p className="text-sm text-gray-600">Security best practices for B2B commerce implementations</p>
                  </div>
                  <div className="border-l-4 border-blue-200 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Testing Strategies</h4>
                    <p className="text-sm text-gray-600">Comprehensive testing approaches for B2B commerce projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Troubleshooting</CardTitle>
                </div>
                <CardDescription>Common issues and their solutions for B2B commerce implementations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-200 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Common Errors</h4>
                    <p className="text-sm text-gray-600">Frequently encountered errors and step-by-step solutions</p>
                  </div>
                  <div className="border-l-4 border-blue-200 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Debug Techniques</h4>
                    <p className="text-sm text-gray-600">Tools and techniques for debugging B2B commerce issues</p>
                  </div>
                  <div className="border-l-4 border-blue-200 pl-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Performance Issues</h4>
                    <p className="text-sm text-gray-600">Diagnosing and resolving performance bottlenecks</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Personalized Guidance?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Our expert consultants can provide personalized guidance for your specific B2B commerce implementation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/support">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-3"
              >
                Get Support
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

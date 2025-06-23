import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cloud, Users, Zap, Database, Workflow, Globe, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "B2B Services | ServeB2B - Complete Salesforce B2B Solutions",
  description:
    "Comprehensive Salesforce B2B services including Commerce Cloud, platform development, CRM customization, and consulting. Transform your B2B operations.",
  keywords: [
    "B2B services",
    "Salesforce B2B solutions",
    "B2B Commerce Cloud",
    "B2B platform development",
    "Salesforce consulting",
    "B2B CRM services",
  ],
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900">Services</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">Complete B2B Solutions</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive Salesforce
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                {" "}
                B2B Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From strategy to implementation, we provide end-to-end Salesforce B2B solutions that transform your
              business operations and drive sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our B2B Service Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized Salesforce B2B services designed to meet your unique business requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:border-blue-300 transition-colors group cursor-pointer">
              <Link href="/services/b2b-commerce-cloud">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                    <Cloud className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                    B2B Commerce Cloud
                  </CardTitle>
                  <CardDescription>
                    Custom B2B e-commerce solutions with advanced pricing, account management, and order processing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Custom B2B storefronts
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Multi-tier pricing models
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Account hierarchy management
                    </li>
                  </ul>
                  <div className="flex items-center text-blue-600 text-sm font-medium">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </CardContent>
              </Link>
            </Card>

            <Card className="border-indigo-100 hover:border-indigo-300 transition-colors group cursor-pointer">
              <Link href="/services/b2b-platform-development">
                <CardHeader>
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-indigo-600 transition-colors">
                    B2B Platform Development
                  </CardTitle>
                  <CardDescription>
                    Custom B2B platforms, partner portals, and comprehensive business management systems
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Partner portal development
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Custom B2B applications
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      API development & integration
                    </li>
                  </ul>
                  <div className="flex items-center text-indigo-600 text-sm font-medium">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </CardContent>
              </Link>
            </Card>

            <Card className="border-purple-100 hover:border-purple-300 transition-colors group cursor-pointer">
              <Link href="/services/salesforce-b2b-core">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-purple-600 transition-colors">
                    Salesforce B2B Core
                  </CardTitle>
                  <CardDescription>
                    Custom CRM development, Lightning components, and Salesforce platform customization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Lightning component development
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Custom objects & workflows
                    </li>
                    <li className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Apex development
                    </li>
                  </ul>
                  <div className="flex items-center text-purple-600 text-sm font-medium">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </CardContent>
              </Link>
            </Card>

            <Card className="border-green-100 hover:border-green-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">System Integrations</CardTitle>
                <CardDescription>
                  ERP, CRM, and third-party system integrations for seamless business operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ERP system integration
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Data synchronization
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    API development
                  </li>
                </ul>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  Contact Us <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-100 hover:border-orange-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                  <Workflow className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">B2B Consulting</CardTitle>
                <CardDescription>
                  Strategic consulting and advisory services for B2B digital transformation
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Digital strategy planning
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Process optimization
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Change management
                  </li>
                </ul>
                <div className="flex items-center text-orange-600 text-sm font-medium">
                  Contact Us <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-teal-100 hover:border-teal-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
                  <Globe className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Support & Maintenance</CardTitle>
                <CardDescription>
                  Ongoing support, maintenance, and optimization services for your B2B systems
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 technical support
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Performance monitoring
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Regular updates & optimization
                  </li>
                </ul>
                <div className="flex items-center text-teal-600 text-sm font-medium">
                  Contact Us <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Service Delivery Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and long-term success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery & Analysis</h3>
              <p className="text-gray-600">
                Comprehensive business analysis and requirements gathering to understand your unique needs
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy & Planning</h3>
              <p className="text-gray-600">
                Strategic planning and solution architecture design tailored to your business objectives
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">
                Agile development and implementation with regular checkpoints and quality assurance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Support & Growth</h3>
              <p className="text-gray-600">
                Ongoing support, optimization, and strategic guidance for continuous improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your B2B Operations?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Let's discuss how our comprehensive B2B services can drive your business growth and success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3" asChild>
              <Link href="/#contact">
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-3"
              asChild
            >
              <Link href="/solutions">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4 hover:opacity-80 transition-opacity">
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
                  <Link href="/services/b2b-commerce-cloud" className="hover:text-white transition-colors">
                    B2B Commerce Cloud
                  </Link>
                </li>
                <li>
                  <Link href="/services/b2b-platform-development" className="hover:text-white transition-colors">
                    B2B Platform Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/salesforce-b2b-core" className="hover:text-white transition-colors">
                    Salesforce B2B Core
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white transition-colors">
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
                  <Link href="/documentation" className="hover:text-white transition-colors">
                    B2B Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-white transition-colors">
                    B2B Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About ServeB2B
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white transition-colors">
                    Contact B2B Team
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white transition-colors">
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

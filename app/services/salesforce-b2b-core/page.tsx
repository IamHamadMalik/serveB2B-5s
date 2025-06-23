import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Database, Workflow, Zap, Shield, Code, GitBranch } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Salesforce B2B Core Development | ServeB2B - Custom CRM Solutions",
  description:
    "Expert Salesforce B2B Core development services. Custom objects, workflows, Lightning components, and CRM solutions tailored for B2B businesses.",
  keywords: [
    "Salesforce B2B Core",
    "Salesforce CRM development",
    "Lightning components",
    "Apex development",
    "Salesforce customization",
    "B2B CRM solutions",
    "Salesforce automation",
  ],
}

export default function SalesforceB2BCorePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
          <span className="text-gray-900">Salesforce B2B Core</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-200">
              Salesforce B2B Core Development
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Custom Salesforce B2B Core
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {" "}
                CRM Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your B2B operations with custom Salesforce Core development. From Lightning components to
              complex workflows, we build scalable CRM solutions that drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3">
                Start Your Core Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/solutions">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-purple-200 hover:bg-purple-50">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Salesforce B2B Core Development Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive Salesforce Core development tailored for B2B business requirements
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-purple-100 hover:border-purple-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Lightning Component Development</CardTitle>
                <CardDescription>
                  Custom Lightning Web Components and Aura components for enhanced user experiences
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Lightning Web Components (LWC)
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom Lightning Apps
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mobile-responsive components
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:border-purple-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Database className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Custom Objects & Fields</CardTitle>
                <CardDescription>
                  Tailored data models with custom objects, fields, and relationships for B2B needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom object design
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Complex relationships
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Data validation rules
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:border-purple-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Workflow className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Process Automation</CardTitle>
                <CardDescription>Streamlined workflows, approval processes, and business automation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Process Builder flows
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Approval workflows
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Automated notifications
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:border-purple-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Apex Development</CardTitle>
                <CardDescription>
                  Custom Apex classes, triggers, and batch processes for complex business logic
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom Apex classes
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Trigger optimization
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Batch processing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:border-purple-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <GitBranch className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">API Integrations</CardTitle>
                <CardDescription>Seamless integrations with third-party systems and external APIs</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    REST API development
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Third-party integrations
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Data synchronization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-100 hover:border-purple-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Security & Permissions</CardTitle>
                <CardDescription>Robust security models with role-based access and data protection</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Role-based security
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Field-level security
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Sharing rules
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Our Salesforce B2B Core Development?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our certified Salesforce developers bring deep expertise in B2B CRM solutions, delivering scalable and
                maintainable code that grows with your business.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Certified Expertise</h3>
                    <p className="text-gray-600">Salesforce certified developers with B2B specialization</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Scalable Architecture</h3>
                    <p className="text-gray-600">Future-proof solutions that scale with your business growth</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Best Practices</h3>
                    <p className="text-gray-600">Following Salesforce development best practices and governance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Ongoing Support</h3>
                    <p className="text-gray-600">Comprehensive support and maintenance services</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">Development Progress</span>
                    <span className="text-sm text-purple-600">95% Complete</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">150+</div>
                      <div className="text-sm text-gray-600">Components Built</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">99.9%</div>
                      <div className="text-sm text-gray-600">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your B2B CRM?</h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
            Let's discuss how our Salesforce B2B Core development can streamline your business processes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-3" asChild>
              <Link href="/#contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-3"
              asChild
            >
              <Link href="/solutions">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MessageCircle, Book, Video, Phone, Mail, Clock, HelpCircle, FileText, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "B2B Support Center | ServeB2B - Salesforce Commerce Cloud Help & Resources",
  description:
    "Get expert support for your Salesforce B2B Commerce Cloud implementation. Access documentation, tutorials, and direct support from our certified team.",
  keywords: ["B2B support", "Salesforce help", "B2B Commerce Cloud support", "ServeB2B support"],
}

export default function SupportPage() {
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
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">B2B Support Center</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Get Expert Support for Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                {" "}
                B2B Commerce Project
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Access comprehensive support resources, documentation, and direct assistance from our certified Salesforce
              B2B Commerce Cloud experts.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Can Help You</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the support option that best fits your needs and timeline
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:border-blue-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <MessageCircle className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Live Chat Support</CardTitle>
                <CardDescription>
                  Get instant answers to your B2B Commerce Cloud questions from our certified experts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    Available Mon-Fri, 9 AM - 6 PM EST
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    Response within 5 minutes
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4">Start Chat</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Phone Support</CardTitle>
                <CardDescription>
                  Speak directly with our B2B commerce specialists for complex technical issues
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    Available Mon-Fri, 8 AM - 8 PM EST
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    +1 (555) 123-4567
                  </div>
                  <Button variant="outline" className="w-full border-blue-200 hover:bg-blue-50 mt-4">
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Email Support</CardTitle>
                <CardDescription>
                  Submit detailed questions and receive comprehensive answers within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    Response within 24 hours
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    support@serveb2b.com
                  </div>
                  <Button variant="outline" className="w-full border-blue-200 hover:bg-blue-50 mt-4">
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Knowledge Base */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Self-Service Resources</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions and learn about B2B Commerce Cloud best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:border-blue-300 transition-colors group cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Book className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Documentation</CardTitle>
                <CardDescription>
                  Comprehensive guides for B2B Commerce Cloud implementation and customization
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Getting Started Guide</li>
                  <li>• Implementation Checklist</li>
                  <li>• API Reference</li>
                  <li>• Best Practices</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors group cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <Video className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Video Tutorials</CardTitle>
                <CardDescription>
                  Step-by-step video guides for common B2B commerce tasks and configurations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Platform Overview</li>
                  <li>• Configuration Tutorials</li>
                  <li>• Integration Guides</li>
                  <li>• Troubleshooting Tips</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors group cursor-pointer">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <HelpCircle className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">FAQ</CardTitle>
                <CardDescription>Frequently asked questions about B2B Commerce Cloud and our services</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Implementation Questions</li>
                  <li>• Pricing & Licensing</li>
                  <li>• Technical Support</li>
                  <li>• Training Options</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Support Plans</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the support level that matches your business needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-4">
                  Basic
                </Badge>
                <CardTitle className="text-2xl">Community Support</CardTitle>
                <CardDescription>Access to community resources and basic documentation</CardDescription>
                <div className="text-3xl font-bold text-blue-600 mt-4">Free</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <FileText className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Access to documentation</span>
                  </li>
                  <li className="flex items-center">
                    <Video className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Basic video tutorials</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Community forum access</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6 border-blue-200 hover:bg-blue-50">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-blue-300 ring-2 ring-blue-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600">Most Popular</Badge>
              </div>
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-4">
                  Professional
                </Badge>
                <CardTitle className="text-2xl">Priority Support</CardTitle>
                <CardDescription>Direct access to our support team with priority response times</CardDescription>
                <div className="text-3xl font-bold text-blue-600 mt-4">
                  $299<span className="text-lg text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <MessageCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Priority chat support</span>
                  </li>
                  <li className="flex items-center">
                    <Mail className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Email support (4-hour response)</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Phone support (business hours)</span>
                  </li>
                  <li className="flex items-center">
                    <Book className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Advanced documentation</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Choose Plan</Button>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader>
                <Badge variant="outline" className="w-fit mb-4">
                  Enterprise
                </Badge>
                <CardTitle className="text-2xl">Dedicated Support</CardTitle>
                <CardDescription>Dedicated support team with 24/7 availability and custom SLAs</CardDescription>
                <div className="text-3xl font-bold text-blue-600 mt-4">Custom</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Users className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Dedicated support team</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">24/7 support availability</span>
                  </li>
                  <li className="flex items-center">
                    <Phone className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Direct phone line</span>
                  </li>
                  <li className="flex items-center">
                    <FileText className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Custom SLAs</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full mt-6 border-blue-200 hover:bg-blue-50">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Immediate Assistance?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Our B2B Commerce Cloud experts are ready to help you solve any technical challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
              Contact Support Now
            </Button>
            <Link href="/#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-3"
              >
                Schedule Consultation
              </Button>
            </Link>
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
                  <Link href="/#services" className="hover:text-white transition-colors">
                    B2B Commerce Cloud
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
                    B2B Platform Development
                  </Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-white transition-colors">
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
                  <Link href="/support" className="hover:text-white transition-colors">
                    B2B Support
                  </Link>
                </li>
                <li>
                  <Link href="/documentation" className="hover:text-white transition-colors">
                    B2B Documentation
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

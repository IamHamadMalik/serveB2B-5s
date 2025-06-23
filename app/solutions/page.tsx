"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import Link from "next/link"

export default function SolutionsPage() {
  const [isOpen, setIsOpen] = useState(false)

  const solutions = [
    {
      id: 1,
      title: "VTEX B2B Commerce Platform",
      description:
        "End-to-end solution for complex B2B sales with custom catalogs, quote management, and bulk ordering",
      features: [
        "Self-service portals for distributors",
        "Approval workflows for large orders",
        "Real-time inventory visibility",
        "Contract pricing and tiered discounts"
      ],
      link: "/solutions/b2b-commerce",
      badge: "B2B Specialized"
    },
    {
      id: 2,
      title: "Headless Commerce Architecture",
      description:
        "Future-proof your commerce with decoupled frontend experiences and API-first infrastructure",
      features: [
        "React/Next.js storefronts",
        "Microservices architecture",
        "Progressive Web App (PWA) support",
        "CMS-agnostic content management"
      ],
      link: "/solutions/headless-commerce",
      badge: "Technical"
    },
    {
      id: 3,
      title: "Marketplace Solutions",
      description:
        "Launch and scale multi-vendor marketplaces with built-in seller management tools",
      features: [
        "Vendor onboarding workflows",
        "Automated commission tracking",
        "Unified checkout experience",
        "Seller performance analytics"
      ],
      link: "/solutions/marketplace-solutions",
      badge: "Revenue Growth"
    },
    {
      id: 4,
      title: "Global Commerce Expansion",
      description:
        "Localized commerce solutions for international growth with built-in compliance",
      features: [
        "38+ country tax configurations",
        "Local payment method integrations",
        "Multi-currency pricing",
        "Regional fulfillment networks"
      ],
      link: "/solutions/global-commerce-expansion",
      badge: "International"
    },
  ]

  const stats = [
    { value: "2,500+", label: "Global Brands" },
    { value: "$34B+", label: "Annual GMV Processed" },
    { value: "38", label: "Countries Supported" },
    { value: "99.99%", label: "Platform Uptime" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
              Enterprise Commerce Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform B2B Commerce with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                {" "}
                VTEX Expertise
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Power your digital transformation with composable commerce solutions designed for complex B2B requirements, global scalability, and seamless customer experiences.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-4xl font-bold text-blue-700">{stat.value}</p>
                  <p className="text-gray-600 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">VTEX Commerce Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enterprise-grade solutions trusted by global manufacturers, distributors, and wholesalers
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution) => (
              <Card key={solution.id} className="border-blue-100 hover:shadow-lg transition-all group cursor-pointer h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {solution.title}
                    </CardTitle>
                    <Badge variant="outline" className="text-blue-600 border-blue-200">
                      {solution.badge}
                    </Badge>
                  </div>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={solution.link}
                    className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-medium group"
                  >
                    Explore solution
                    <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">B2B Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how industry leaders transformed their commerce operations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Whirlpool</span>
              </div>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Global B2B Portal</h3>
                <p className="text-gray-600 mb-4">
                  Unified commerce platform serving 20+ countries with localized experiences
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">B2B Portal</Badge>
                  <Badge variant="outline">Global Expansion</Badge>
                  <Badge variant="outline">ERP Integration</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  Read Case Study
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center">
                <span className="text-white text-xl font-bold">Siemens</span>
              </div>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Industrial Marketplace</h3>
                <p className="text-gray-600 mb-4">
                  Multi-vendor platform connecting 500+ suppliers with industrial buyers
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Marketplace</Badge>
                  <Badge variant="outline">B2B Payments</Badge>
                  <Badge variant="outline">Vendor Portal</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  Read Case Study
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-purple-500 to-purple-700 flex items-center justify-center">
                <span className="text-white text-xl font-bold">ABB</span>
              </div>
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2">Self-Service Portal</h3>
                <p className="text-gray-600 mb-4">
                  Reduced order processing time by 75% with automated workflows
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline">Self-Service</Badge>
                  <Badge variant="outline">Order Automation</Badge>
                  <Badge variant="outline">Contract Pricing</Badge>
                </div>
                <Button variant="outline" className="w-full">
                  Read Case Study
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">VTEX Commerce Insights</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get our latest B2B commerce playbooks, case studies, and platform updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg flex-grow max-w-md text-gray-900"
              />
              <Button
                onClick={() => setIsOpen(true)}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Subscribe Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold text-gray-900">VTEX Commerce Resources</DialogTitle>
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
              Access exclusive content for B2B commerce leaders
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

            <div className="mt-6 grid md:grid-cols-3 gap-6">
              <div className="border p-4 rounded-lg">
                <h3 className="font-semibold mb-2">For Technical Teams</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• API Documentation</li>
                  <li>• Architecture Guides</li>
                  <li>• Integration Patterns</li>
                </ul>
              </div>
              <div className="border p-4 rounded-lg">
                <h3 className="font-semibold mb-2">For Commerce Leaders</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• ROI Calculators</li>
                  <li>• Implementation Playbooks</li>
                  <li>• Benchmark Reports</li>
                </ul>
              </div>
              <div className="border p-4 rounded-lg">
                <h3 className="font-semibold mb-2">For Executives</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Market Trends</li>
                  <li>• Digital Transformation Roadmaps</li>
                  <li>• Executive Briefings</li>
                </ul>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
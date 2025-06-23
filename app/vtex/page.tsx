"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function VTEXPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              VTEX Commerce Platform &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                {" "}
                Expert Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              VTEX is the global leader in digital commerce platforms, empowering enterprises to transform their online
              sales with a composable, API-first architecture. Trusted by over 2,500 brands worldwide, VTEX delivers
              unparalleled flexibility, performance, and innovation for B2C and B2B ecommerce.
            </p>
          </div>
        </div>
      </section>

      {/* Why VTEX Section */}
      <section className="py-20 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Leading Brands Choose VTEX</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the key features and benefits that make VTEX the preferred choice for global enterprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">Headless Commerce</h3>
              <p className="text-gray-600">
                Decouple frontend presentation from backend logic for complete creative freedom and faster time-to-market.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">Global Scalability</h3>
              <p className="text-gray-600">
                Operate in 38 countries with localized payment, tax, and fulfillment solutions built-in.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium text-lg mb-2">Unified Commerce</h3>
              <p className="text-gray-600">
                Seamlessly connect physical and digital channels with real-time inventory and order management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Capabilities Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">VTEX Technical Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the advanced technical features that make VTEX a powerful platform for B2B and B2C commerce.
            </p>
          </div>

          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Microservices architecture with 99.99% uptime SLA</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Native marketplace functionality for multi-vendor operations</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">AI-powered search and personalization engines</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Progressive Web App (PWA) support for mobile-first experiences</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Checkout optimization with one-click purchasing</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">700+ pre-built integrations in VTEX IO ecosystem</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with VTEX Insights</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Get the latest VTEX articles, tutorials, and industry insights delivered to your inbox.
          </p>

          <Button
            onClick={() => setIsOpen(true)}
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold transition-all duration-300"
          >
            Subscribe
          </Button>
        </div>
      </section>

      {/* Subscribe Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold text-gray-900">Subscribe to VTEX Updates</DialogTitle>
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
              Stay updated with our latest VTEX commerce insights and solutions.
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
    </div>
  )
}
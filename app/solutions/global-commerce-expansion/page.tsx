"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function GlobalCommerceExpansionPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Global Commerce Expansion
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                {" "}
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Expand your business globally with tailored solutions for international markets. Our expertise ensures seamless operations across borders, enabling you to reach new customers and grow your revenue.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the features that make global commerce expansion seamless and efficient.
            </p>
          </div>

          <ul className="grid md:grid-cols-2 gap-8">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Localized payment and tax solutions.</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Multi-language and multi-currency support.</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Compliance with international regulations.</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Optimized logistics and fulfillment strategies.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with Global Commerce Insights</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Get the latest updates, tutorials, and industry insights delivered to your inbox.
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
              <DialogTitle className="text-2xl font-bold text-gray-900">Subscribe to Global Commerce Updates</DialogTitle>
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
              Stay updated with our latest insights and solutions for global commerce expansion.
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
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function Footer() {
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false)

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header and Subscribe Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-3xl font-bold">ServeB2B</span>
              </div>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
                Specializing in Salesforce B2B e-commerce development, we deliver custom solutions designed to optimize
                your online sales and streamline business processes.
              </p>
              <Button
                onClick={() => setIsSubscribeOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold group transition-all duration-300"
              >
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* B2B Services */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-blue-400">B2B Services</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link
                    href="/services/b2b-commerce-cloud"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    B2B Commerce Cloud
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/b2b-platform-development"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    B2B Platform Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/salesforce-b2b-core"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Salesforce B2B Core
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    B2B Consulting
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vtex"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    VTEX
                  </Link>
                </li>
              </ul>
            </div>

            {/* B2B Resources */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-blue-400">B2B Resources</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link
                    href="/articles"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    B2B Articles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/solutions"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    B2B Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/documentation"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    B2B Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    B2B Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Company */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-blue-400">Company</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    About ServeB2B
                  </Link>
                </li>
                <li>
                  <Link
                    href="/case-studies"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Get in Touch */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-blue-400">Get in Touch</h4>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center hover:text-blue-400 transition-colors duration-200">
                  <Mail className="h-5 w-5 mr-3 text-blue-400" />
                  <a href="mailto:hello@serveb2b.com">hello@serveb2b.com</a>
                </div>
                <div className="flex items-center hover:text-blue-400 transition-colors duration-200">
                  <Phone className="h-5 w-5 mr-3 text-blue-400" />
                  <a href="tel:+1-555-123-4567">+1-555-123-4567</a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                  <span>United States</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-blue-400">Quick Links</h4>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link
                    href="/#contact"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Contact B2B Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="/articles"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Articles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 ServeB2B. All rights reserved. | Salesforce B2B Commerce Cloud Experts
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Subscribe Modal */}
      <Dialog open={isSubscribeOpen} onOpenChange={setIsSubscribeOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <div className="flex items-center justify-between">
              <DialogTitle className="text-2xl font-bold text-gray-900">Subscribe to ServeB2B</DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSubscribeOpen(false)}
                className="h-8 w-8 rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-gray-600 mt-2">
              Stay updated with our latest B2B commerce insights and solutions.
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
    </>
  )
}

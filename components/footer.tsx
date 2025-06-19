"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Footer() {
  const handleSubscribe = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSeNuCgkU6qSjDX2qp4ji8evP3xB8fQtMUgskJK0O_i_DAjkxQ/viewform?usp=header",
      "_blank",
    )
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4">ServeB2B</h3>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-md">
              Specializing in Salesforce B2B e-commerce development, we deliver custom solutions designed to optimize
              your online sales and streamline business processes.
            </p>
            <Button
              onClick={handleSubscribe}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold group transition-all duration-300"
            >
              Subscribe
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-400">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a
                  href="/services/b2b-commerce-cloud"
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  B2B Commerce Cloud
                </a>
              </li>
              <li>
                <a
                  href="/services/b2b-platform-development"
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Platform Development
                </a>
              </li>
              <li>
                <a
                  href="/services/salesforce-b2b-core"
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Salesforce B2B Core
                </a>
              </li>
              <li>
                <a
                  href="/solutions"
                  className="hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                  Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Contact */}
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

            <div className="mt-8">
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="/about" className="hover:text-blue-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/case-studies" className="hover:text-blue-400 transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="/articles" className="hover:text-blue-400 transition-colors">
                    Articles
                  </a>
                </li>
                <li>
                  <a href="/support" className="hover:text-blue-400 transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 ServeB2B. All rights reserved. | Salesforce B2B Commerce Cloud Experts
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

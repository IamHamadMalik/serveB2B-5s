"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const handleSubscribe = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSeNuCgkU6qSjDX2qp4ji8evP3xB8fQtMUgskJK0O_i_DAjkxQ/viewform?usp=header",
      "_blank",
    )
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">ServeB2B</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Specializing in Salesforce B2B e-commerce development, we deliver custom solutions designed to optimize
              your online sales and streamline business processes.
            </p>
            <Button onClick={handleSubscribe} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
              Subscribe
            </Button>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/services/b2b-commerce-cloud" className="hover:text-white transition-colors">
                  B2B Commerce Cloud
                </a>
              </li>
              <li>
                <a href="/services/b2b-platform-development" className="hover:text-white transition-colors">
                  Platform Development
                </a>
              </li>
              <li>
                <a href="/services/salesforce-b2b-core" className="hover:text-white transition-colors">
                  Salesforce B2B Core
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-white transition-colors">
                  All Services
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>hello@serveb2b.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1-555-123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>United States</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">© 2024 ServeB2B. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

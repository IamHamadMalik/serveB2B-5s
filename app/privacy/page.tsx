import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | ServeB2B - Salesforce B2B Commerce Cloud Experts",
  description:
    "ServeB2B privacy policy outlining how we collect, use, and protect your personal information in our Salesforce B2B commerce services.",
  keywords: ["privacy policy", "data protection", "ServeB2B", "Salesforce B2B"],
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center space-x-2 mb-8">
          <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-blue-100 p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-sm text-gray-500 mb-8">
              <strong>Last updated:</strong> December 19, 2024
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>
                ServeB2B ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you visit our website or use our
                Salesforce B2B Commerce Cloud services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide to us when you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fill out contact forms or request consultations</li>
                <li>Subscribe to our newsletter or blog updates</li>
                <li>Engage with our customer support</li>
                <li>Participate in surveys or feedback requests</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Automatically Collected Information</h3>
              <p>We may automatically collect certain information when you visit our website:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and browser information</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our Salesforce B2B commerce services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you relevant information about our services and industry insights</li>
                <li>Analyze website usage and improve user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Service Providers:</strong> With trusted third-party service providers who assist us in
                  operating our website and providing services
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of assets
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. However, no method of
                transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website
                traffic, and understand user preferences. You can control cookie settings through your browser
                preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights and Choices</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access and review your personal information</li>
                <li>Correct or update inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Restrict or object to certain processing activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites, including Salesforce platforms and partner sites.
                We are not responsible for the privacy practices of these external sites and encourage you to review
                their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Updates to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy periodically to reflect changes in our practices or legal
                requirements. We will notify you of any material changes by posting the updated policy on our website
                with a new effective date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <p>
                  <strong>Email:</strong> privacy@serveb2b.com
                </p>
                <p>
                  <strong>Address:</strong> ServeB2B Privacy Team
                  <br />
                  123 Business District
                  <br />
                  Tech City, TC 12345
                  <br />
                  United States
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

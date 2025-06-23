import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | ServeB2B - Salesforce B2B Commerce Cloud Experts",
  description:
    "ServeB2B terms of service outlining the terms and conditions for using our Salesforce B2B commerce services and website.",
  keywords: ["terms of service", "terms and conditions", "ServeB2B", "Salesforce B2B"],
}

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-sm text-gray-500 mb-8">
              <strong>Last updated:</strong> December 19, 2024
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using ServeB2B's website and services, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by the above, please do not use this
                service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services Description</h2>
              <p>
                ServeB2B provides Salesforce B2B Commerce Cloud consulting, development, implementation, and support
                services. Our services include but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Salesforce B2B Commerce Cloud implementation and customization</li>
                <li>B2B platform development and optimization</li>
                <li>Lightning component development</li>
                <li>ERP system integrations</li>
                <li>Technical consulting and support</li>
                <li>Training and documentation services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on ServeB2B's website for
                personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of
                title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Service Terms</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Project Engagement</h3>
              <p>
                All professional services are provided under separate statements of work (SOW) or service agreements
                that detail specific project requirements, timelines, deliverables, and payment terms.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Client Responsibilities</h3>
              <p>Clients are responsible for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing accurate and complete project requirements</li>
                <li>Timely provision of necessary access, credentials, and resources</li>
                <li>Participating in project reviews and providing feedback</li>
                <li>Ensuring proper backup and data protection measures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p>
                ServeB2B retains ownership of all proprietary methodologies, frameworks, and pre-existing intellectual
                property. Custom developments created specifically for clients under paid engagements are owned by the
                client, subject to the terms of the specific service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Confidentiality</h2>
              <p>
                ServeB2B commits to maintaining the confidentiality of all client information and data accessed during
                service delivery. We implement appropriate technical and organizational measures to protect confidential
                information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p>
                In no event shall ServeB2B or its suppliers be liable for any damages (including, without limitation,
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability
                to use the materials on ServeB2B's website or services, even if ServeB2B or its authorized
                representative has been notified orally or in writing of the possibility of such damage. Because some
                jurisdictions do not allow limitations on implied warranties, or limitations of liability for
                consequential or incidental damages, these limitations may not apply to you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Accuracy of Materials</h2>
              <p>
                The materials appearing on ServeB2B's website could include technical, typographical, or photographic
                errors. ServeB2B does not warrant that any of the materials on its website are accurate, complete, or
                current. ServeB2B may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Payment Terms</h2>
              <p>
                Payment terms for professional services are specified in individual service agreements. Standard terms
                include:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment due within 30 days of invoice date</li>
                <li>Late payments may incur additional charges</li>
                <li>Disputed amounts must be raised within 10 days of invoice receipt</li>
                <li>Services may be suspended for overdue accounts</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Termination</h2>
              <p>
                Either party may terminate service agreements with appropriate notice as specified in the individual
                agreements. ServeB2B reserves the right to terminate access to its website and services immediately for
                violations of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the United
                States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
              <p>
                ServeB2B may revise these terms of service at any time without notice. By using this website and our
                services, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <div className="bg-blue-50 p-4 rounded-lg mt-4">
                <p>
                  <strong>Email:</strong> legal@serveb2b.com
                </p>
                <p>
                  <strong>Address:</strong> ServeB2B Legal Department
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

import Link from "next/link"

export default function SolutionsPage() {
  return (
    <div className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Solutions</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Example Solution Card - Replace with actual data */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Solution 1</h2>
            <p className="text-gray-400">
              Description of Solution 1. This could be a brief overview of the solution and its benefits.
            </p>
            <Link
              href="/solution1"
              className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Solution 2</h2>
            <p className="text-gray-400">
              Description of Solution 2. This could be a brief overview of the solution and its benefits.
            </p>
            <Link
              href="/solution2"
              className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Solution 3</h2>
            <p className="text-gray-400">
              Description of Solution 3. This could be a brief overview of the solution and its benefits.
            </p>
            <Link
              href="/solution3"
              className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Solution 4</h2>
            <p className="text-gray-400">
              Description of Solution 4. This could be a brief overview of the solution and its benefits.
            </p>
            <Link
              href="/solution4"
              className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Learn More
            </Link>
          </div>
        </div>

        <footer className="mt-12 py-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">B2B Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/services/b2b-commerce-cloud" className="hover:text-white transition-colors">
                    B2B Commerce Cloud
                  </Link>
                </li>
                <li>
                  <Link href="/services/b2b-platform-development" className="hover:text-white transition-colors">
                    B2B Platform Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/salesforce-b2b-core" className="hover:text-white transition-colors">
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
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Information</h4>
              <p className="text-gray-400">
                123 Main Street
                <br />
                Anytown, USA 12345
              </p>
              <p className="text-gray-400">
                Email:{" "}
                <a href="mailto:info@example.com" className="hover:text-white transition-colors">
                  info@example.com
                </a>
                <br />
                Phone: (123) 456-7890
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-white transition-colors">
                  Facebook
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  Twitter
                </Link>
                <Link href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-8">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}

import Link from "next/link"

export default function ArticlesPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-12">
      <header className="container mx-auto px-4 mb-12">
        <h1 className="text-4xl font-bold mb-4">Articles</h1>
        <p className="text-gray-400">Explore our latest articles and insights.</p>
      </header>

      <main className="container mx-auto px-4">
        {/* Article List (Placeholder) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Article Title 1</h2>
            <p className="text-gray-400">Short description of the article.</p>
            <Link href="/articles/article-1" className="text-blue-500 hover:text-blue-400 transition-colors block mt-2">
              Read More
            </Link>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Article Title 2</h2>
            <p className="text-gray-400">Short description of the article.</p>
            <Link href="/articles/article-2" className="text-blue-500 hover:text-blue-400 transition-colors block mt-2">
              Read More
            </Link>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Article Title 3</h2>
            <p className="text-gray-400">Short description of the article.</p>
            <Link href="/articles/article-3" className="text-blue-500 hover:text-blue-400 transition-colors block mt-2">
              Read More
            </Link>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 mt-12 py-8 border-t border-gray-700">
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
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">
              Email:{" "}
              <a href="mailto:info@example.com" className="hover:text-white transition-colors">
                info@example.com
              </a>
            </p>
            <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-400">123 Main Street, Anytown USA</p>
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
        <div className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} B2B Company. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

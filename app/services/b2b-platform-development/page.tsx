import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  Users,
  Database,
  Layers,
  Shield,
  BarChart3,
  Workflow,
  Globe,
  Smartphone,
  Cloud,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "B2B Platform Development | ServeB2B - Custom B2B Solutions",
  description:
    "Expert B2B platform development services. Custom B2B portals, account management systems, and scalable platform solutions for modern businesses.",
  keywords: [
    "B2B platform development",
    "B2B portal development",
    "B2B account management",
    "custom B2B solutions",
    "B2B platform architecture",
    "enterprise B2B systems",
  ],
}

export default function B2BPlatformDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Link
                href="/"
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
                aria-label="ServeB2B - Salesforce B2B Commerce Cloud Experts"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="text-xl font-bold text-gray-900">ServeB2B</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </Link>
              <Link href="/solutions" className="text-gray-700 hover:text-blue-600 transition-colors">
                Solutions
              </Link>
              <Link href="/articles" className="text-gray-700 hover:text-blue-600 transition-colors">
                Articles
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/#services" className="hover:text-blue-600 transition-colors">
            Services
          </Link>
          <span>/</span>
          <span className="text-gray-900">B2B Platform Development</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-indigo-100 text-indigo-700 hover:bg-indigo-200">B2B Platform Development</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Custom B2B Platform
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
                {" "}
                Development Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Build powerful B2B platforms that streamline operations, enhance customer relationships, and drive
              business growth. From partner portals to complex B2B ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8 py-3">
                Start Your Platform Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/solutions">
                <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-indigo-200 hover:bg-indigo-50">
                  View Platform Examples
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">B2B Platform Development Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end B2B platform development from architecture design to deployment and support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-indigo-100 hover:border-indigo-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                  <Users className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Partner Portals</CardTitle>
                <CardDescription>
                  Custom B2B partner portals with role-based access and collaboration tools
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Multi-tier partner access
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Document management
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Performance dashboards
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-indigo-100 hover:border-indigo-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                  <Database className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Account Management Systems</CardTitle>
                <CardDescription>
                  Comprehensive B2B account management with hierarchy and relationship mapping
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Account hierarchies
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Contact management
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Territory management
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-indigo-100 hover:border-indigo-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                  <Workflow className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Order Management</CardTitle>
                <CardDescription>Advanced B2B order processing with approval workflows and tracking</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Complex approval flows
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Order tracking
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Bulk ordering
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-indigo-100 hover:border-indigo-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                  <BarChart3 className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Analytics & Reporting</CardTitle>
                <CardDescription>
                  Business intelligence dashboards and custom reporting for B2B insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Custom dashboards
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-time analytics
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Automated reports
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-indigo-100 hover:border-indigo-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                  <Globe className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">API Development</CardTitle>
                <CardDescription>RESTful APIs and integrations for seamless B2B ecosystem connectivity</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    RESTful API design
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Third-party integrations
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    API documentation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-indigo-100 hover:border-indigo-300 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors">
                  <Smartphone className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Mobile-First Design</CardTitle>
                <CardDescription>Responsive B2B platforms optimized for mobile and tablet experiences</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Responsive design
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mobile optimization
                  </li>
                  <li className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Touch-friendly interfaces
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Modern B2B Platform Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We use cutting-edge technologies to build scalable, secure, and performant B2B platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-indigo-100 hover:border-indigo-300 transition-colors">
              <CardHeader>
                <Cloud className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Cloud Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>AWS / Azure / GCP</li>
                  <li>Kubernetes</li>
                  <li>Docker containers</li>
                  <li>Auto-scaling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-indigo-100 hover:border-indigo-300 transition-colors">
              <CardHeader>
                <Layers className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Frontend Technologies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Progressive Web Apps</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-indigo-100 hover:border-indigo-300 transition-colors">
              <CardHeader>
                <Database className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Backend & Database</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Node.js / Python</li>
                  <li>PostgreSQL / MongoDB</li>
                  <li>Redis caching</li>
                  <li>Microservices</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center border-indigo-100 hover:border-indigo-300 transition-colors">
              <CardHeader>
                <Shield className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <CardTitle className="text-lg">Security & DevOps</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>OAuth 2.0 / SAML</li>
                  <li>CI/CD pipelines</li>
                  <li>Monitoring & logging</li>
                  <li>Security scanning</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our B2B Platform Development Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful platform delivery from concept to launch
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery & Planning</h3>
              <p className="text-gray-600">Requirements analysis, user research, and technical architecture planning</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Design & Prototyping</h3>
              <p className="text-gray-600">UX/UI design, wireframing, and interactive prototypes for validation</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Development & Testing</h3>
              <p className="text-gray-600">Agile development with continuous testing and quality assurance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch & Support</h3>
              <p className="text-gray-600">Deployment, user training, and ongoing maintenance and support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Your B2B Platform?</h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto mb-8">
            Let's create a custom B2B platform that transforms your business operations and drives growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-3" asChild>
              <Link href="/#contact">
                Start Your Platform Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-3"
              asChild
            >
              <Link href="/solutions">View Platform Examples</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

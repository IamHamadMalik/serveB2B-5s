import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Users, Award, Clock, CheckCircle, Zap, Target } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About ServeB2B | Salesforce B2B Commerce Cloud Experts & Consultants",
  description:
    "Learn about ServeB2B, your trusted partner for Salesforce B2B Commerce Cloud solutions. Meet our certified team of B2B commerce experts and consultants.",
  keywords: ["about ServeB2B", "Salesforce B2B experts", "B2B commerce consultants", "Salesforce certified team"],
}

export default function AboutPage() {
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

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-8">
            <Link href="/" className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
          </div>

          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">About ServeB2B</Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Trusted Partner for
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                {" "}
                Salesforce B2B Success
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Since our founding, ServeB2B has been dedicated to helping businesses unlock the full potential of
              Salesforce B2B Commerce Cloud through expert consulting, development, and implementation services.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  ServeB2B was founded with a simple yet powerful vision: to bridge the gap between complex B2B business
                  requirements and Salesforce's powerful commerce platform capabilities.
                </p>
                <p>
                  Our founders, experienced Salesforce architects and B2B commerce specialists, recognized that while
                  Salesforce Commerce Cloud is incredibly powerful, B2B implementations require specialized knowledge
                  and expertise that goes beyond traditional e-commerce.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for businesses of all sizes, from emerging B2B companies to
                  Fortune 500 enterprises, helping them transform their digital commerce experiences and achieve
                  measurable business growth.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl p-8 h-64 flex items-center justify-center">
                <Target className="h-24 w-24 text-blue-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're driven by core values that guide every client interaction and project delivery
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Client-Centric Excellence</CardTitle>
                <CardDescription>
                  We put our clients' success at the center of everything we do, ensuring every solution is tailored to
                  their unique business needs and goals.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Technical Expertise</CardTitle>
                <CardDescription>
                  Our team maintains the highest levels of Salesforce certifications and stays current with the latest
                  B2B commerce trends and technologies.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Innovation Focus</CardTitle>
                <CardDescription>
                  We constantly explore new ways to leverage Salesforce capabilities to solve complex B2B challenges and
                  drive business growth.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the certified Salesforce professionals who bring your B2B commerce vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">SJ</span>
                </div>
                <CardTitle className="text-xl">Sarah Johnson</CardTitle>
                <CardDescription>Lead Salesforce Architect</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Salesforce Certified Technical Architect with 8+ years of B2B Commerce Cloud experience. Specializes
                  in complex enterprise implementations.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Technical Architect
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    B2B Commerce
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Integration
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">MC</span>
                </div>
                <CardTitle className="text-xl">Mike Chen</CardTitle>
                <CardDescription>Senior B2B Developer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Platform Developer I & II certified with expertise in Lightning Web Components and custom B2B commerce
                  solutions.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Platform Developer
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Lightning
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    JavaScript
                  </Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">DK</span>
                </div>
                <CardTitle className="text-xl">David Kim</CardTitle>
                <CardDescription>B2B Solutions Consultant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Sales Cloud and Service Cloud certified consultant focusing on B2B customer experience optimization
                  and process automation.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="text-xs">
                    Sales Cloud
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Service Cloud
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Process Builder
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications & Achievements</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence is reflected in our team's certifications and project success rates
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Salesforce Certifications</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">B2B Projects Completed</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Years B2B Experience</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose ServeB2B?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Here's what sets us apart in the Salesforce B2B Commerce Cloud ecosystem
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">B2B-Focused Expertise</h3>
                  <p className="text-gray-600">
                    Unlike general Salesforce consultants, we specialize exclusively in B2B commerce, understanding the
                    unique challenges and requirements of business-to-business transactions.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">End-to-End Solutions</h3>
                  <p className="text-gray-600">
                    From initial strategy and planning through implementation and ongoing support, we provide
                    comprehensive services that cover your entire B2B commerce journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Methodologies</h3>
                  <p className="text-gray-600">
                    Our implementation methodologies are battle-tested across dozens of B2B projects, ensuring
                    predictable timelines and successful outcomes.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Agile Approach</h3>
                  <p className="text-gray-600">
                    We use agile methodologies to deliver value quickly, allowing for iterative feedback and ensuring
                    the final solution meets your evolving business needs.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Partnership</h3>
                  <p className="text-gray-600">
                    We don't just implement and leave. We build long-term partnerships, providing ongoing support,
                    optimization, and strategic guidance as your business grows.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Knowledge</h3>
                  <p className="text-gray-600">
                    Our team brings deep knowledge of various B2B industries, from manufacturing and distribution to
                    technology and professional services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your B2B Commerce?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Let's discuss how our expertise can help you achieve your B2B commerce goals with Salesforce Commerce Cloud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3">
                Start Your Project Today
              </Button>
            </Link>
            <Link href="/solutions">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-3"
              >
                View Our Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, TrendingUp, Clock, CheckCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "B2B Case Studies | ServeB2B - Successful Salesforce B2B Implementations",
  description:
    "Explore our successful Salesforce B2B Commerce Cloud implementations. Real case studies showing measurable results and business transformation.",
  keywords: [
    "B2B case studies",
    "Salesforce success stories",
    "B2B Commerce Cloud results",
    "B2B implementation examples",
    "Salesforce B2B ROI",
  ],
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "Manufacturing Giant Increases Online Sales by 300%",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy B2B ordering system causing customer friction and lost sales",
      solution: "Custom B2B Commerce Cloud implementation with multi-tier pricing and account management",
      results: [
        "300% increase in online sales",
        "50% reduction in order processing time",
        "95% customer satisfaction score",
        "40% decrease in support tickets",
      ],
      timeline: "6 months",
      technologies: ["B2B Commerce Cloud", "Lightning Components", "ERP Integration"],
      color: "blue",
    },
    {
      id: 2,
      title: "Distribution Company Streamlines Partner Operations",
      company: "National Distribution Network",
      industry: "Distribution",
      challenge: "Complex partner hierarchy and pricing management across multiple channels",
      solution: "Custom B2B platform with partner portal and automated pricing engine",
      results: [
        "60% faster partner onboarding",
        "80% reduction in pricing errors",
        "45% increase in partner satisfaction",
        "25% growth in partner sales",
      ],
      timeline: "8 months",
      technologies: ["B2B Platform Development", "Salesforce Core", "API Integrations"],
      color: "indigo",
    },
    {
      id: 3,
      title: "Tech Company Automates Complex B2B Sales Process",
      company: "Enterprise Software Solutions",
      industry: "Technology",
      challenge: "Manual approval processes and complex contract pricing slowing sales cycles",
      solution: "Salesforce B2B Core customization with automated workflows and contract management",
      results: [
        "70% faster sales cycle",
        "90% automation of approval processes",
        "35% increase in deal closure rate",
        "50% reduction in administrative overhead",
      ],
      timeline: "4 months",
      technologies: ["Salesforce B2B Core", "Process Automation", "Lightning Platform"],
      color: "purple",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-900">Case Studies</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-green-100 text-green-700 hover:bg-green-200">Success Stories</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              B2B Success Stories &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                {" "}
                Case Studies
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how we've helped businesses transform their B2B operations with Salesforce solutions, delivering
              measurable results and sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card
                key={study.id}
                className={`border-${study.color}-100 hover:border-${study.color}-300 transition-colors`}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <Badge className={`mb-2 bg-${study.color}-100 text-${study.color}-700`}>{study.industry}</Badge>
                      <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                      <CardDescription className="text-lg">{study.company}</CardDescription>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-4 lg:mt-0">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {study.timeline}
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        High Impact
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Challenge</h4>
                      <p className="text-gray-600 mb-6">{study.challenge}</p>

                      <h4 className="font-semibold text-gray-900 mb-3">Solution</h4>
                      <p className="text-gray-600 mb-6">{study.solution}</p>

                      <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <h4 className="font-semibold text-gray-900 mb-4">Results Achieved</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                            <span className="text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="font-semibold text-gray-900 mb-1">Want similar results?</h5>
                            <p className="text-gray-600">Let's discuss how we can help transform your B2B operations</p>
                          </div>
                          <Button className={`bg-${study.color}-600 hover:bg-${study.color}-700`} asChild>
                            <Link href="/#contact">
                              Get Started
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Track Record</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Consistent results across industries and project types
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">200%</div>
              <div className="text-gray-600">Average ROI Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">6 Months</div>
              <div className="text-gray-600">Average Implementation</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join our growing list of successful B2B transformations. Let's discuss your project today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3" asChild>
              <Link href="/#contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-3"
              asChild
            >
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

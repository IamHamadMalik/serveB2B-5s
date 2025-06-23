import type React from "react"
import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"

export const metadata: Metadata = {
  title: "B2B Salesforce Commerce Cloud Experts | ServeB2B - Custom Solutions & Development",
  description:
    "Specializing in Salesforce B2B e-commerce development, we deliver custom solutions designed to optimize your online sales and streamline business processes.",
  keywords: [
    "Salesforce B2B eCommerce customization",
    "B2B Salesforce Commerce Cloud",
    "Salesforce B2B platform development",
    "Custom B2B Salesforce solutions",
    "Salesforce e-commerce customization",
    "B2B e-commerce development",
    "Salesforce integration services",
    "B2B portal development",
    "Salesforce B2B implementation",
    "Cloud e-commerce solutions",
    "CRM e-commerce",
    "Salesforce B2B consultant",
    "Salesforce B2B sales platform customization",
    "Customize Salesforce Commerce Cloud for B2B",
    "B2B e-commerce website development Salesforce",
    "Salesforce B2B lightning experience customization",
    "Integrate Salesforce with B2B e-commerce",
    "Salesforce B2B customer portal development",
  ],
  authors: [{ name: "ServeB2B" }],
  creator: "ServeB2B",
  publisher: "ServeB2B",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.serveb2b.com",
    siteName: "ServeB2B",
    title: "B2B Salesforce Commerce Cloud Experts | ServeB2B",
    description:
      "Specializing in Salesforce B2B e-commerce development, we deliver custom solutions designed to optimize your online sales and streamline business processes.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ServeB2B - Salesforce B2B Commerce Cloud Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Salesforce Commerce Cloud Experts | ServeB2B",
    description:
      "Specializing in Salesforce B2B e-commerce development, we deliver custom solutions designed to optimize your online sales and streamline business processes.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.serveb2b.com",
  },
  generator: "ServeB2B",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-P69V1N0FN3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-P69V1N0FN3');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ServeB2B",
              url: "https://www.serveb2b.com",
              logo: "https://www.serveb2b.com/logo.png",
              description:
                "Specializing in Salesforce B2B e-commerce development, we deliver custom solutions designed to optimize your online sales and streamline business processes.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                email: "hello@serveb2b.com",
              },
              sameAs: ["https://www.serveb2b.com"],
              service: [
                {
                  "@type": "Service",
                  name: "Salesforce B2B Commerce Cloud Development",
                  description: "Custom B2B e-commerce solutions built on Salesforce Commerce Cloud platform",
                },
                {
                  "@type": "Service",
                  name: "Salesforce B2B Platform Customization",
                  description: "Tailored Salesforce B2B platform development and customization services",
                },
                {
                  "@type": "Service",
                  name: "Salesforce Core CRM Development",
                  description: "Custom Salesforce CRM development and Lightning platform solutions",
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

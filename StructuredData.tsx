import React from "react"

interface StructuredDataProps {
  url: string
  name: string
  description: string
  applicationCategory: string
}

export function StructuredData({ url, name, description, applicationCategory }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: name,
    description: description,
    applicationCategory: applicationCategory,
    operatingSystem: "Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}


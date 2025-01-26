import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import { ArticleArea } from "../components/ArticleArea"
import { Features } from "../components/Features"
import { Testimonials } from "../components/Testimonials"
import { DownloadSection } from "../components/DownloadSection"
import { FAQ } from "../components/FAQ"
import { Footer } from "../components/Footer"
import { SEO } from "../components/SEO"
import { StructuredData } from "../components/StructuredData"

export default function Home() {
  return (
    <main className="min-h-screen">
      <SEO
        title="GB WhatsApp APK Download | Safe & Updated Versions"
        description="Download the latest version of GB WhatsApp APK. Get access to enhanced features, customization options, and privacy settings. Safe and verified downloads."
        canonicalUrl="https://your-domain.com"
        ogImage="https://your-domain.com/og-image.jpg"
      />
      <StructuredData
        url="https://your-domain.com"
        name="GB WhatsApp"
        description="Enhanced version of WhatsApp with additional features and customization options."
        applicationCategory="Communication"
      />
      <Header />
      <Hero />
      <ArticleArea />
      <Features />
      <Testimonials />
      <DownloadSection />
      <FAQ />
      <Footer />
    </main>
  )
}


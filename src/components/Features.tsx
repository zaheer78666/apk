import { Smartphone, Shield, Zap, RefreshCw, Users, Star, Download, Clock } from "lucide-react"

const features = [
  { icon: Smartphone, title: "Wide Compatibility", description: "Works on most Android devices" },
  { icon: Shield, title: "Secure Downloads", description: "All APKs are scanned for malware" },
  { icon: Zap, title: "Fast Installation", description: "Quick and easy setup process" },
  { icon: RefreshCw, title: "Regular Updates", description: "Stay up-to-date with the latest versions" },
  { icon: Users, title: "User Reviews", description: "Read what others think before downloading" },
  { icon: Star, title: "Curated Selection", description: "Only the best apps make it to our platform" },
  { icon: Download, title: "Offline Availability", description: "Download now, install later" },
  { icon: Clock, title: "24/7 Support", description: "We're here to help anytime" },
]

export function Features() {
  return (
    <section className="py-16 bg-purple-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-purple-800">Why Choose Our APK Platform?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-purple-700">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


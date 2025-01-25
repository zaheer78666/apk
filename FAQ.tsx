"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Is it safe to download APKs from your platform?",
    answer:
      "Yes, we thoroughly scan all APKs for malware and verify their authenticity before making them available for download.",
  },
  {
    question: "How do I install an APK on my Android device?",
    answer:
      "First, enable 'Install from Unknown Sources' in your device settings. Then, download the APK and tap on it to start the installation process.",
  },
  {
    question: "Are all the apps on your platform free?",
    answer:
      "While many apps are free, some may require in-app purchases or have premium versions. We clearly label the cost status of each app.",
  },
  {
    question: "How often are the APKs updated?",
    answer:
      "We strive to update our APKs as soon as new versions are released by the developers. Most popular apps are updated within 24 hours of a new release.",
  },
  {
    question: "Can I request an APK if it's not available on your platform?",
    answer:
      "We welcome user requests. You can submit an APK request through our contact form, and we'll do our best to make it available.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-purple-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-purple-700">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-purple-50">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


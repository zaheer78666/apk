const testimonials = [
  {
    name: "Alex Johnson",
    role: "Mobile Gamer",
    quote:
      "This platform has revolutionized how I discover new apps. The download process is smooth, and I always feel safe knowing the APKs are verified.",
  },
  {
    name: "Sarah Lee",
    role: "App Developer",
    quote:
      "As a developer, I appreciate the wide reach this platform provides. It's helped my app gain visibility and users I wouldn't have reached otherwise.",
  },
  {
    name: "Mike Brown",
    role: "Tech Enthusiast",
    quote:
      "The variety of apps available is impressive. I've found unique APKs here that I couldn't find on traditional app stores. Highly recommended!",
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white bg-opacity-20 p-6 rounded-lg">
              <p className="mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


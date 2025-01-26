import Image from "next/image"

export function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Download Your Favorite Apps</h1>
          <p className="text-xl mb-8">
            Get access to thousands of APKs for Android devices. Safe, fast, and always up-to-date.
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold py-3 px-8 rounded-full text-lg">
            Download Now
          </button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="App showcase"
            width={400}
            height={400}
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}


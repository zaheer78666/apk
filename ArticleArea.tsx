export function ArticleArea() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Latest from Our Blog</h2>
        <article className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-purple-700">
            The Future of Mobile Gaming: Top APKs to Watch
          </h3>
          <p className="text-gray-700 mb-4">
            Mobile gaming has come a long way since the days of Snake on Nokia phones. Today, we're seeing
            console-quality games on our smartphones, and the trend is only going upward. In this article, we'll explore
            some of the most promising APKs that are pushing the boundaries of what's possible in mobile gaming...
          </p>
          <a href="#" className="text-purple-600 hover:text-purple-800 font-semibold">
            Read More →
          </a>
        </article>
        <div className="mt-8">
          <h3 className="text-2xl font-semibold mb-4 text-purple-700">Popular Categories</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Communication Apps</li>
            <li>Social Media Mods</li>
            <li>Gaming APKs</li>
            <li>Productivity Tools</li>
          </ul>
        </div>
      </div>
    </section>
  )
}


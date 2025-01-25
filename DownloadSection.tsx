const versions = [
  { name: "Latest Version", version: "v2.5.1", size: "15MB" },
  { name: "Stable Version", version: "v2.4.0", size: "14MB" },
  { name: "Legacy Version", version: "v2.3.2", size: "13MB" },
]

export function DownloadSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-purple-800">Download Our App</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {versions.map((version, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold mb-2 text-purple-700">{version.name}</h3>
              <p className="text-gray-600 mb-4">
                {version.version} - {version.size}
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


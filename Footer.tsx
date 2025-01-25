import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-purple-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">APK Blog</h3>
            <p className="text-purple-300">Your trusted source for APK downloads and mobile app news.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-purple-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-purple-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-300">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-300">
                <Facebook />
              </a>
              <a href="#" className="hover:text-purple-300">
                <Twitter />
              </a>
              <a href="#" className="hover:text-purple-300">
                <Instagram />
              </a>
              <a href="#" className="hover:text-purple-300">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-800 text-center text-purple-400">
          <p>&copy; {new Date().getFullYear()} APK Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


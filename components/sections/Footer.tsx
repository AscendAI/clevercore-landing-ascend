import Link from "next/link"
import { ArrowUp } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-secondary/50 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3">
            <img
              src="/cc_Logo.png"
              alt="Clevercore AI"
              className="h-10 w-auto"
            />
            <span className="text-2xl font-bold text-white tracking-tight">Clevercore AI</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-xl mb-6">Contact</h2>
            <div className="space-y-4 text-gray-400">
              <div>
                <p className="font-semibold text-white">CleverCore LLC</p>
                <p>382 NE 191ST #971379</p>
                <p>Miami, Florida 33179 US</p>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <a
                    href="mailto:louis@clevercore.ai"
                    className="hover:text-white transition-colors"
                  >
                    louis@clevercore.ai
                  </a>
                </div>
              </div>
              <div>
                <p>+1 (810) 429-6998</p>
              </div>
              <div>
                <a
                  href="https://www.clevercore.ai"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  www.clevercore.ai
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl mb-6">Social</h2>
            <div className="space-y-4">
              <Link
                href="https://www.facebook.com/profile.php?id=61572275365501"
                target="_blank"
                className="flex items-center gap-2 text-gray-400"
              >
                <span className="hover:text-white transition-colors">
                  Facebook
                </span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/ascend-with-ai"
                target="_blank"
                className="flex items-center gap-2 text-gray-400"
              >
                <span className="hover:text-white transition-colors">
                  LinkedIn
                </span>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-xl mb-6">Quick Links</h2>
            <div className="space-y-2">
              <Link href="/about" className="block hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/services" className="block hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/terms" className="block hover:text-white transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/privacy" className="block hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>



        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2026 Clevercore AI. All rights reserved.
          </p>
          <Link
            href="#top"
            className="text-gray-400 hover:text-white transition-colors text-sm mt-4 md:mt-0"
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer

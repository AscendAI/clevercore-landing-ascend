import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-secondary/50 text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <img
            src="/logo_letter.png"
            alt="Logo"
            className="md:w-700 max-w-screen h-auto md:h-30"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-xl mb-6">Address</h2>
            <div className="space-y-4 text-gray-400">
              {/* <p>
                71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ
              </p> */}
              <div>
                <div className="flex items-center space-x-2">
                  <a
                    href="mailto:sales@ascendai.site"
                    className="hover:text-white transition-colors"
                  >
                    sales@ascendai.site
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <a
                    href="mailto:contact@ascendai.site"
                    className="hover:text-white transition-colors"
                  >
                    contact@ascendai.site
                  </a>
                </div>
              </div>
              <div className="mt-4 space-y-1 flex items-center space-x-2">
                <FaWhatsapp size={25} className="text-green-500" />
                <p>+880 17 0637 3929</p>
              </div>
              <div className="mt-4">
                <p className="text-xs text-gray-500">
                  Trade License: TRAD/DSCC/032086/2024
                </p>
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

        {/* Payment Banner */}
        <div className="mt-8 flex justify-center">
          <img 
            src="/Payment Banner 2 - Copy.png" 
            alt="Payment Methods" 
            className="max-w-full h-auto"
          />
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Ascend AI. All rights reserved.
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

import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - Clevercore AI",
  description: "Privacy policy for Clevercore AI services and website data collection practices.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary/50 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-xl text-gray-300">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              Clevercore AI is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Personal Information</h3>
                <p className="text-gray-300 mb-2">We may collect personal information that you voluntarily provide, including:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Company information and job title</li>
                  <li>Project requirements and specifications</li>
                  <li>Payment and billing information</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Automatically Collected Information</h3>
                <p className="text-gray-300 mb-2">We may automatically collect certain information, including:</p>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>IP address and location data</li>
                  <li>Browser type and version</li>
                  <li>Website usage patterns and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-300 mb-2">We use the collected information for various purposes:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-300">
              <li>Providing and maintaining our services</li>
              <li>Processing transactions and payments</li>
              <li>Communicating with you about our services</li>
              <li>Improving our website and services</li>
              <li>Complying with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-300 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy or as required by law.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p className="text-gray-300 leading-relaxed">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">6. Data Retention</h2>
            <p className="text-gray-300 leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">7. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed">
              You have the right to access, update, or delete your personal information. Contact us to exercise these rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">8. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at contact@ascendai.site or sales@ascendai.site.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
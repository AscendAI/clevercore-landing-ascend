import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms & Conditions - Ascend AI",
  description: "Terms and conditions for using Ascend AI services and website.",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Terms & <span className="text-purple-400">Conditions</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Please read these terms and conditions carefully before using our services
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing and using Ascend AI's services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">2. Service Description</h2>
            <p className="text-gray-300 leading-relaxed">
              Ascend AI provides artificial intelligence solutions, SaaS platforms, and consulting services to businesses and organizations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">3. User Responsibilities</h2>
            <p className="text-gray-300 leading-relaxed">
              Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
            <p className="text-gray-300 leading-relaxed">
              All content, features, and functionality of our services are owned by Ascend AI and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              Payment terms will be specified in individual service agreements. All fees are non-refundable unless otherwise stated in writing.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">6. Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              Ascend AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              We may terminate or suspend your account and access to our services immediately, without prior notice, for conduct that we believe violates these Terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">9. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">10. Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of any changes by posting the new Terms on this page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">11. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these Terms, please contact us at contact@ascendai.site or sales@ascendai.site.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
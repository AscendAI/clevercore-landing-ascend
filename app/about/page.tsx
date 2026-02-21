import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us - Clevercore AI",
  description: "Learn about Clevercore AI, our mission, vision, and the team behind our innovative AI solutions.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-secondary/50 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-400 mb-4">
            About <span className="text-white">Clevercore AI</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Empowering businesses with cutting-edge AI solutions and innovative technology
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Company Overview */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              At Clevercore AI, we are dedicated to transforming businesses through innovative artificial intelligence solutions. Our mission is to make advanced AI technology accessible and practical for organizations of all sizes, helping them achieve unprecedented growth and efficiency.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed">
              We envision a future where AI seamlessly integrates into every aspect of business operations, driving innovation, enhancing decision-making, and creating new opportunities for growth. We strive to be the leading partner in this digital transformation journey.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">AI Development</h3>
              <p className="text-gray-300">
                Custom AI solutions tailored to your business needs, from machine learning models to intelligent automation systems.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">SaaS Solutions</h3>
              <p className="text-gray-300">
                Scalable software-as-a-service platforms that integrate seamlessly with your existing infrastructure.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Consulting</h3>
              <p className="text-gray-300">
                Strategic guidance and technical expertise to help you navigate your digital transformation journey.
              </p>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-6">Company Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Address</h3>
              <p className="text-gray-300 mb-2 font-semibold">CleverCore LLC</p>
              <p className="text-gray-300">382 NE 191ST #971379</p>
              <p className="text-gray-300">Miami, Florida 33179 US</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-300">
                <p>Email: louis@clevercore.ai</p>
                <p>Phone: +1 (810) 429-6998</p>
                <p>
                  <a href="https://www.clevercore.ai" target="_blank" className="hover:text-white transition-colors">
                    www.clevercore.ai
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Are you ready to level up? Let's Talk!</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether it's optimizing your business with AI or breathe life
            into your SaaS vision, we're ready to help you take the first
            step.{" "}
            <span className="font-bold">Book a free consultation call</span>{" "}
            with <span className="font-bold">CLEVERCORE AI</span> and let's
            turn your goals into tangible success.
          </p>
          <Link
            href={`https://calendly.com/ascendai/meeting-with-ascend-ai`}
            target="_blank"
          >
            <Button className="cursor-pointer text-xl bg-gradient-to-r from-primary to-blue-500 text-white hover:bg-gradient-to-r hover:from-primary hover:to-blue-600 rounded-xl">
              Book A Free Call!
            </Button>
          </Link>
        </section>
      </div>
    </div>
  )
}
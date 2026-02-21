import "@/styles/globals.css"
import { Metadata } from "next"
import { Analytics } from "@vercel/analytics/react"

import { siteConfig } from "@/config/site"
import { fontMono, fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/nav"
import Footer from "@/components/sections/Footer"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

import image from "/public/og-image.png"

export const metadata: Metadata = {
  title: {
    default: "Clevercore AI",
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL("https://www.clevercore.ai/"),
  keywords: [
    "clevercore",
    "clevercoreai",
    "Clevercore AI",
    "Clevercore",
    "AI",
    "Saas",
    "AI Saas",
    "LLM",
    "Fine Tuning LLMs",
    "Chat Bot",
    "Chat Bot Development",
    "software",
    "automation",
    "automate",
    "Custom Dashboard",
    "ChatGPT Plugin",
    "Data Generation",
  ],
  icons: {
    icon: [
      {
        url: "/cc_Logo.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: siteConfig.name,
    images: [
      {
        url: image.src,
      },
    ],
  },
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "black" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
            fontMono.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <div id="page-top" className="flex-1">
                {children}
              </div>
              <Toaster />
              <Analytics />
              <Footer />
            </div>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}

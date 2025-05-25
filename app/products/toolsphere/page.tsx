import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

// Tool data based on the GitHub repository
const tools = [
  {
    name: "Text Case Converter",
    description: "Convert text between different cases: lowercase, UPPERCASE, Title Case, and more.",
    category: "Text",
    icon: "Type",
  },
  {
    name: "JSON Formatter",
    description: "Format and validate JSON data with syntax highlighting and error detection.",
    category: "Development",
    icon: "Braces",
  },
  {
    name: "Color Converter",
    description: "Convert colors between different formats: HEX, RGB, HSL, and more.",
    category: "Design",
    icon: "Palette",
  },
  {
    name: "Base64 Encoder/Decoder",
    description: "Encode text to Base64 or decode Base64 to text with support for various character sets.",
    category: "Development",
    icon: "Code",
  },
  {
    name: "URL Encoder/Decoder",
    description: "Encode and decode URLs to ensure they are properly formatted for web use.",
    category: "Web",
    icon: "Link",
  },
  {
    name: "Markdown Preview",
    description: "Write and preview Markdown with real-time rendering and syntax highlighting.",
    category: "Text",
    icon: "FileText",
  },
  {
    name: "Image Compressor",
    description: "Compress images to reduce file size while maintaining quality.",
    category: "Media",
    icon: "Image",
  },
  {
    name: "Password Generator",
    description: "Generate secure, random passwords with customizable options.",
    category: "Security",
    icon: "Key",
  },
  {
    name: "HTML Entity Encoder/Decoder",
    description: "Convert special characters to HTML entities and vice versa.",
    category: "Web",
    icon: "Code2",
  },
  {
    name: "CSV to JSON Converter",
    description: "Convert CSV data to JSON format with customizable options.",
    category: "Data",
    icon: "Table",
  },
  {
    name: "Regex Tester",
    description: "Test regular expressions with real-time matching and explanation.",
    category: "Development",
    icon: "Search",
  },
  {
    name: "Lorem Ipsum Generator",
    description: "Generate placeholder text for design mockups and layouts.",
    category: "Design",
    icon: "Type",
  },
]

// Group tools by category
const groupedTools = tools.reduce(
  (acc, tool) => {
    if (!acc[tool.category]) {
      acc[tool.category] = []
    }
    acc[tool.category].push(tool)
    return acc
  },
  {} as Record<string, typeof tools>,
)

export default function ToolSphereProductPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-neutral-200 to-neutral-100">
              <div className="absolute inset-0 flex items-center justify-center text-lg font-bold text-neutral-800">
                21
              </div>
            </div>
            <span className="text-xl font-medium tracking-tight">21GLabs</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/about"
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900"
            >
              About Us
            </Link>
            <Link
              href="/products"
              className="text-sm font-medium text-neutral-900 transition-colors hover:text-neutral-900"
            >
              Products
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900"
            >
              Get in Touch
            </Link>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-brand-orange-light/30">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
          </div>
          <div className="container relative px-4 py-16 md:py-24 md:px-6">
            <Link href="/products" className="inline-flex items-center text-sm font-medium text-brand-orange mb-6">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Products
            </Link>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-brand-orange-light px-3 py-1 text-sm text-brand-orange">
                  Developer Tools
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">ToolSphere</h1>
                <p className="text-xl text-neutral-600">
                  A comprehensive collection of web-based tools for developers, designers, and content creators.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[300px] w-full max-w-[500px] overflow-hidden rounded-xl bg-gradient-to-br from-brand-orange-light to-brand-orange/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-brand-orange/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-8 text-center">
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-sm">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-8 w-8 text-brand-orange"
                        >
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">ToolSphere</h3>
                      <p className="mt-2 text-white/90">All the tools you need in one place</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">About ToolSphere</h2>
                <p className="text-lg text-neutral-600">
                  ToolSphere is a comprehensive collection of web-based tools designed to streamline workflows for
                  developers, designers, and content creators. Our platform offers a wide range of utilities that help
                  you accomplish everyday tasks more efficiently, all in one convenient location.
                </p>
                <p className="text-lg text-neutral-600">
                  Whether you're formatting code, converting data between formats, generating placeholder content, or
                  optimizing images, ToolSphere provides the tools you need with a clean, intuitive interface and no
                  unnecessary distractions.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Key Features</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>All tools in one convenient platform</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Clean, distraction-free interface</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>No account required for basic tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Client-side processing for data privacy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Regular updates with new tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Responsive design for all devices</span>
                  </li>
                </ul>
              </div>

              {/* Tools Section */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Available Tools</h2>

                {Object.entries(groupedTools).map(([category, categoryTools]) => (
                  <div key={category} className="space-y-4">
                    <h3 className="text-xl font-bold text-brand-orange">{category} Tools</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {categoryTools.map((tool, index) => (
                        <div
                          key={index}
                          className="rounded-lg border p-4 hover:shadow-md transition-all duration-300 hover:shadow-brand-orange/10"
                        >
                          <h4 className="font-bold">{tool.name}</h4>
                          <p className="text-sm text-neutral-600 mt-1">{tool.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Pricing & Plans</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg border bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:shadow-brand-orange/10">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold">Free</h3>
                      <div className="text-sm font-medium text-neutral-500">₹0/month</div>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-orange" />
                        <span>Access to basic tools</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-orange" />
                        <span>Ad-supported experience</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-orange" />
                        <span>Standard processing limits</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-orange" />
                        <span>Community support</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-brand-orange text-white hover:bg-brand-orange/90 hover:shadow-md hover:shadow-brand-orange/20">
                      Get Started Free
                    </Button>
                  </div>
                  <div className="rounded-lg border bg-brand-orange-light/20 p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:shadow-brand-orange/10">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold">Pro</h3>
                      <div className="text-sm font-medium text-neutral-500">₹499/month</div>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-orange" />
                        <span>Access to all tools including premium ones</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-orange" />
                        <span>Ad-free experience</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-orange" />
                        <span>Higher processing limits</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-orange" />
                        <span>Save and sync tool settings</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-orange" />
                        <span>Priority support</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-orange" />
                        <span>API access for automation</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-brand-orange text-white hover:bg-brand-orange/90 hover:shadow-md hover:shadow-brand-orange/20">
                      Upgrade to Pro
                    </Button>
                  </div>
                </div>
                <p className="text-center text-sm text-neutral-500">
                  Enterprise plans available for organizations.{" "}
                  <Link href="/contact" className="text-brand-orange hover:underline">
                    Contact us
                  </Link>{" "}
                  for custom pricing.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-white py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="relative h-6 w-6 overflow-hidden rounded-full bg-gradient-to-br from-neutral-200 to-neutral-100">
              <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-neutral-800">
                21
              </div>
            </div>
            <span className="text-sm font-medium">21GLabs</span>
          </div>
          <p className="text-center text-sm text-neutral-500 md:text-left">
            © 2025 21GLabs. All rights reserved. Incorporated in India.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-neutral-500 hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-neutral-500 hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

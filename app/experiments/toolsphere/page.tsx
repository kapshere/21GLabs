import Link from "next/link"
import {
  ArrowLeft,
  Wrench,
  Hash,
  Calculator,
  Type,
  Palette,
  Dice1,
  Coins,
  FileText,
  Calendar,
  Upload,
  Gamepad2,
  Lock,
  Percent,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ToolSphereExperimentPage() {
  const tools = [
    {
      name: "Base64 Encoder/Decoder",
      description: "Encode and decode Base64 strings",
      icon: Hash,
      href: "/experiments/toolsphere/tools/base64-encoder-decoder",
      category: "Encoding",
    },
    {
      name: "Calculator",
      description: "Basic and scientific calculator",
      icon: Calculator,
      href: "/experiments/toolsphere/tools/calculator",
      category: "Math",
    },
    {
      name: "Character Counter",
      description: "Count characters, words, and lines",
      icon: Type,
      href: "/experiments/toolsphere/tools/character-counter",
      category: "Text",
    },
    {
      name: "Coin Flipper",
      description: "Virtual coin flipping tool",
      icon: Coins,
      href: "/experiments/toolsphere/tools/coin-flipper",
      category: "Random",
    },
    {
      name: "Color Picker",
      description: "Pick and convert colors",
      icon: Palette,
      href: "/experiments/toolsphere/tools/color-converter",
      category: "Design",
    },
    {
      name: "CSV Viewer",
      description: "View and analyze CSV files",
      icon: FileText,
      href: "/experiments/toolsphere/tools/csv-viewer",
      category: "Data",
    },
    {
      name: "Date Calculator",
      description: "Calculate date differences and add/subtract time",
      icon: Calendar,
      href: "/experiments/toolsphere/tools/date-calculator",
      category: "Date",
    },
    {
      name: "Dice Roller",
      description: "Roll virtual dice",
      icon: Dice1,
      href: "/experiments/toolsphere/tools/dice-roller",
      category: "Random",
    },
    {
      name: "Hash Generator",
      description: "Generate secure hash values",
      icon: Lock,
      href: "/experiments/toolsphere/tools/hash-generator",
      category: "Security",
    },
    {
      name: "Image Compressor",
      description: "Compress images while maintaining quality",
      icon: Upload,
      href: "/experiments/toolsphere/tools/image-compressor",
      category: "Image",
    },
    {
      name: "JSON Formatter",
      description: "Format and validate JSON",
      icon: FileText,
      href: "/experiments/toolsphere/tools/json-formatter",
      category: "Data",
    },
    {
      name: "Markdown Editor",
      description: "Edit and preview Markdown",
      icon: FileText,
      href: "/experiments/toolsphere/tools/markdown-editor",
      category: "Text",
    },
    {
      name: "Number Guessing Game",
      description: "Fun number guessing game",
      icon: Gamepad2,
      href: "/experiments/toolsphere/tools/number-guessing-game",
      category: "Games",
    },
    {
      name: "Password Generator",
      description: "Generate secure passwords",
      icon: Lock,
      href: "/experiments/toolsphere/tools/password-generator",
      category: "Security",
    },
    {
      name: "Percentage Calculator",
      description: "Calculate percentages and ratios",
      icon: Percent,
      href: "/experiments/toolsphere/tools/percentage-calculator",
      category: "Math",
    },
    {
      name: "Text Case Converter",
      description: "Convert text between different cases",
      icon: Type,
      href: "/experiments/toolsphere/tools/text-case-converter",
      category: "Text",
    },
    {
      name: "URL Encoder/Decoder",
      description: "Encode and decode URLs",
      icon: Hash,
      href: "/experiments/toolsphere/tools/url-encoder-decoder",
      category: "Encoding",
    },
  ]

  const categories = [...new Set(tools.map((tool) => tool.category))]

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
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
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900"
            >
              Products
            </Link>
            <Link
              href="/experiments"
              className="text-sm font-medium text-neutral-900 transition-colors hover:text-neutral-900"
            >
              Experiments
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
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <Link href="/experiments" className="inline-flex items-center text-sm font-medium text-orange-600 mb-8">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Experiments
            </Link>

            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600 mb-6">
                Developer Tools Experiment
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">ToolSphere</h1>
              <p className="text-lg leading-8 text-gray-600 mb-8">
                A comprehensive collection of web-based tools for developers, designers, and content creators. All tools
                run locally in your browser for privacy and speed.
              </p>
              <div className="flex justify-center mb-8">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-100">
                  <Wrench className="h-12 w-12 text-orange-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-4">Available Tools</h2>
                <p className="text-lg text-gray-600 text-center">
                  Choose from our collection of {tools.length} tools across {categories.length} categories
                </p>
              </div>

              {categories.map((category) => (
                <div key={category} className="mb-12">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">{category} Tools</h3>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {tools
                      .filter((tool) => tool.category === category)
                      .map((tool) => {
                        const Icon = tool.icon
                        return (
                          <div
                            key={tool.name}
                            className="group relative overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-lg"
                          >
                            <div className="flex items-start gap-4">
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                                <Icon className="h-6 w-6 text-orange-600" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-gray-900 mb-2">{tool.name}</h4>
                                <p className="text-gray-600 mb-4 text-sm">{tool.description}</p>
                                <Link href={tool.href}>
                                  <Button variant="outline" size="sm">
                                    Try Tool
                                  </Button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-orange-600 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Privacy First</h2>
              <p className="mt-4 text-lg text-orange-100">
                All tools run locally in your browser. Your data never leaves your device.
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="bg-white text-orange-600 hover:bg-gray-50">
                    Suggest a Tool
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
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
        </div>
      </footer>
    </div>
  )
}

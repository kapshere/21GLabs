import Link from "next/link"
import { ArrowLeft, Check, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ToolSphereProductPage() {
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
            <Link href="/products" className="inline-flex items-center text-sm font-medium text-orange-600 mb-8">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Products
            </Link>

            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-block rounded-lg bg-orange-100 px-3 py-1 text-sm text-orange-600 mb-6">
                Developer Tools Platform
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">ToolSphere</h1>
              <p className="text-lg leading-8 text-gray-600 mb-8">
                A comprehensive collection of web-based tools for developers, designers, and content creators.
                Streamline your workflow with our suite of powerful utilities.
              </p>
              <div className="flex justify-center mb-8">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-orange-100">
                  <Wrench className="h-12 w-12 text-orange-600" />
                </div>
              </div>
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                Coming Soon
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">About ToolSphere</h2>
                  <p className="text-lg text-neutral-600">
                    ToolSphere is designed to be your one-stop destination for essential web development and design
                    tools. We're building a comprehensive platform that will help you work more efficiently and
                    effectively.
                  </p>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Planned Features</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                      <span>Text processing and formatting tools</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                      <span>Code formatting and validation</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                      <span>Data conversion utilities</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                      <span>Design and color tools</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                      <span>Security and encryption tools</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                      <span>And much more!</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl font-bold">Why ToolSphere?</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                      <span>No installation required</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                      <span>Works on any device</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                      <span>Privacy-focused design</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                      <span>Fast and reliable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-orange-600 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Stay Updated</h2>
              <p className="mt-4 text-lg text-orange-100">
                Be the first to know when ToolSphere launches. We're working hard to bring you the best tools.
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="bg-white text-orange-600 hover:bg-gray-50">
                    Get Notified
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

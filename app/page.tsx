import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Briefcase, Eye, Wrench, Globe, BookOpen } from "lucide-react"

export default function HomePage() {
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
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900"
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
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Building the Future of Digital Innovation
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                21GLabs creates cutting-edge products and experiments that push the boundaries of technology. From
                social platforms to blockchain solutions, we're shaping tomorrow's digital landscape.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/products">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                    Explore Products
                  </Button>
                </Link>
                <Link href="/experiments">
                  <Button variant="outline" size="lg">
                    View Experiments
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Products</h2>
              <p className="mt-4 text-lg text-gray-600">
                Production-ready solutions that are changing how people connect and work.
              </p>
            </div>

            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="group relative overflow-hidden rounded-lg border bg-white p-8 shadow-sm transition-all hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Connect</h3>
                      <p className="text-gray-600 mb-4">
                        Revolutionary social media platform prioritizing meaningful connections.
                      </p>
                      <Link href="/products/connect">
                        <Button variant="outline" size="sm">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg border bg-white p-8 shadow-sm transition-all hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                      <Briefcase className="h-6 w-6 text-purple-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Blockshack</h3>
                      <p className="text-gray-600 mb-4">
                        Blockchain-powered gig economy platform with smart contracts.
                      </p>
                      <Link href="/products/blockshack">
                        <Button variant="outline" size="sm">
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg border bg-white p-8 shadow-sm transition-all hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                      <Eye className="h-6 w-6 text-gray-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Stealth Mode</h3>
                      <p className="text-gray-600 mb-4">Revolutionary product in development. Details coming soon.</p>
                      <Button variant="outline" size="sm" disabled>
                        Coming Soon
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Experiments</h2>
              <p className="mt-4 text-lg text-gray-600">
                Innovative projects and tools we're building to explore new possibilities.
              </p>
            </div>

            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 md:grid-cols-3">
                <div className="group relative overflow-hidden rounded-lg border bg-white p-8 shadow-sm transition-all hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <Globe className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Anuvadasetu</h3>
                      <p className="text-gray-600 mb-4">AI-powered translation breaking language barriers.</p>
                      <Link href="/experiments/anuvadasetu">
                        <Button variant="outline" size="sm">
                          Explore
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg border bg-white p-8 shadow-sm transition-all hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
                      <Wrench className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">ToolSphere</h3>
                      <p className="text-gray-600 mb-4">Collection of web-based tools for developers and creators.</p>
                      <Link href="/experiments/toolsphere">
                        <Button variant="outline" size="sm">
                          Try Tools
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-lg border bg-white p-8 shadow-sm transition-all hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                      <BookOpen className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Philosophy Project</h3>
                      <p className="text-gray-600 mb-4">Ancient wisdom for modern times through podcasts and books.</p>
                      <Link href="/experiments/philosophy-project">
                        <Button variant="outline" size="sm">
                          Discover
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
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
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Ready to Innovate?</h2>
              <p className="mt-4 text-lg text-orange-100">Join us in building the future of digital experiences.</p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="bg-white text-orange-600 hover:bg-gray-50">
                    Get in Touch
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

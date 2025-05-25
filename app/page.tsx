import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
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
            <Link href="/about" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
              About Us
            </Link>
            <Link href="/products" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
              Products
            </Link>
            <Link href="/blog" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium text-neutral-700 hover:text-neutral-900">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-brand-blue-light px-3 py-1 text-sm brand-blue">
                  Emerging Technology Solutions
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Innovating for a <span className="text-neutral-500">smarter</span> tomorrow
                </h1>
                <p className="max-w-[600px] text-neutral-600 md:text-xl/relaxed">
                  21GLabs creates cutting-edge technology products for businesses and consumers, designed to transform
                  how we interact with the digital world.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/products">
                    <Button className="bg-brand-blue text-white hover:bg-brand-blue/90">
                      Explore Products
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative h-40 w-40">
                      <div className="absolute inset-0 animate-pulse rounded-full bg-neutral-200"></div>
                      <div className="absolute inset-4 rounded-full bg-white shadow-inner"></div>
                      <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-neutral-400">
                        21G
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-brand-blue-light/30 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-brand-orange-light px-3 py-1 text-sm brand-orange">
                  Our Solutions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Innovative Products</h2>
                <p className="max-w-[900px] text-neutral-600 md:text-xl/relaxed">
                  Discover our range of B2B and B2C technology solutions designed to meet the evolving needs of modern
                  businesses and consumers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 pt-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-lg duration-300">
                <div className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-light">
                    <svg className="h-6 w-6 brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                      />
                      <circle cx="9" cy="7" r="4" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M23 21v-2a4 4 0 0 0-3-3.87"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 3.13a4 4 0 0 1 0 7.75"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">Connect</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Real People. Real Connections. Connect with others through authentic commitments, celebrations, and
                    memories.
                  </p>
                  <Link
                    href="/products/connect"
                    className="mt-4 inline-flex items-center text-sm font-medium brand-blue hover:underline"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-lg duration-300">
                <div className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange-light">
                    <svg className="h-6 w-6 brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">Anuvādasetu</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Translate your English books to native Indian languages and expand your reach.
                  </p>
                  <Link
                    href="/products/anuvadasetu"
                    className="mt-4 inline-flex items-center text-sm font-medium brand-orange hover:underline"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-lg duration-300">
                <div className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green-light">
                    <svg className="h-6 w-6 brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">Blockshack</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    A new age LinkedIn where every individual is a business entrepreneur.
                  </p>
                  <Link
                    href="/products/blockshack"
                    className="mt-4 inline-flex items-center text-sm font-medium brand-green hover:underline"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-brand-green-light/30 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="max-w-[600px] text-neutral-600 md:text-xl/relaxed">
                  Interested in our products or have questions? We'd love to hear from you.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Link href="/contact" className="w-full">
                  <Button className="w-full bg-brand-green text-white hover:bg-brand-green/90">Contact Us</Button>
                </Link>
                <p className="text-xs text-neutral-500">
                  We'll respond to your inquiry within 24 hours during business days.
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

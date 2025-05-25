import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"

export default function ProductsPage() {
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
            <Link href="/products" className="text-sm font-medium text-neutral-900">
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
        <div className="container px-4 py-16 md:px-6">
          <Link href="/" className="inline-flex items-center text-sm font-medium brand-blue mb-6">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>

          <div className="mx-auto max-w-4xl space-y-8">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Products</h1>
              <p className="text-xl text-neutral-600">
                Innovative solutions designed to transform how you work and connect.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-light mb-4">
                  <svg className="h-6 w-6 brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                    />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Connect</h3>
                <p className="text-neutral-600 mb-4">
                  Real People. Real Connections. Connect with others through authentic commitments and celebrations.
                </p>
                <Link
                  href="/products/connect"
                  className="inline-flex items-center text-sm font-medium brand-blue hover:underline"
                >
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange-light mb-4">
                  <svg className="h-6 w-6 brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Anuvādasetu</h3>
                <p className="text-neutral-600 mb-4">
                  Translate your English books to native Indian languages and expand your reach.
                </p>
                <Link
                  href="/products/anuvadasetu"
                  className="inline-flex items-center text-sm font-medium brand-orange hover:underline"
                >
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>

              <div className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green-light mb-4">
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
                <h3 className="text-xl font-bold mb-2">Blockshack</h3>
                <p className="text-neutral-600 mb-4">
                  A new age LinkedIn where every individual is a business entrepreneur.
                </p>
                <Link
                  href="/products/blockshack"
                  className="inline-flex items-center text-sm font-medium brand-green hover:underline"
                >
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
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
        </div>
      </footer>
    </div>
  )
}

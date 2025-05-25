import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
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
            <Link href="/about" className="text-sm font-medium text-neutral-900">
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
        <div className="container px-4 py-16 md:px-6">
          <Link href="/" className="inline-flex items-center text-sm font-medium brand-blue mb-6">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>

          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About 21GLabs</h1>
              <p className="text-xl text-neutral-600">
                We are a technology company focused on creating innovative solutions for the modern world.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-neutral-600">
                  At 21GLabs, we believe in the power of technology to transform lives and businesses. Our mission is to
                  create innovative, user-friendly solutions that solve real-world problems and make technology
                  accessible to everyone.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                <p className="text-neutral-600">
                  We envision a future where technology seamlessly integrates into daily life, enhancing human
                  capabilities and creating new possibilities for connection, creativity, and growth.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                <ul className="space-y-2 text-neutral-600">
                  <li>• Innovation: We constantly push the boundaries of what's possible</li>
                  <li>• Quality: We deliver products that exceed expectations</li>
                  <li>• Accessibility: We make technology available to everyone</li>
                  <li>• Integrity: We build trust through transparency and reliability</li>
                </ul>
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

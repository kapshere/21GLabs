import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
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
              className="text-sm font-medium text-neutral-900 transition-colors hover:text-neutral-900"
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
        <div className="container mx-auto px-4 py-16">
          <Link href="/" className="inline-flex items-center text-sm font-medium text-orange-600 mb-8">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Home
          </Link>

          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">About 21GLabs</h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                21GLabs is a technology company focused on building innovative solutions that make a difference in
                people's lives.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                We believe in the power of technology to solve real-world problems. Our mission is to create tools and
                applications that help people work more efficiently, communicate better, and achieve their goals.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">What We Do</h2>
              <p className="text-gray-600 mb-6">
                We specialize in developing web applications, developer tools, and digital solutions. Our products range
                from simple utilities that solve everyday problems to complex platforms that enable new ways of working
                and collaborating.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Our Approach</h2>
              <p className="text-gray-600 mb-6">
                We focus on creating clean, intuitive, and reliable solutions. Every product we build is designed with
                the user in mind, ensuring that technology serves people rather than the other way around.
              </p>

              <div className="mt-12">
                <Link href="/products">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                    Explore Our Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
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
          </div>
        </div>
      </footer>
    </div>
  )
}

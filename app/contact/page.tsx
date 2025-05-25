import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
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
            <Link href="/contact" className="text-sm font-medium text-neutral-900">
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

          <div className="mx-auto max-w-2xl space-y-8">
            <div className="space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h1>
              <p className="text-xl text-neutral-600">
                We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  placeholder="Tell us more..."
                />
              </div>

              <Button className="w-full bg-brand-blue text-white hover:bg-brand-blue/90">Send Message</Button>
            </div>

            <div className="text-center space-y-2">
              <p className="text-sm text-neutral-500">Or reach out to us directly at:</p>
              <p className="font-medium">hello@21glabs.com</p>
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

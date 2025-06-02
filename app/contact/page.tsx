import Link from "next/link"
import { Mail, Github, Linkedin, Globe } from "lucide-react"

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
              href="/blog"
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-neutral-900 transition-colors hover:text-neutral-900"
            >
              Get in Touch
            </Link>
          </nav>
          <Link href="#" className="md:hidden">
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
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Get in Touch
                </h1>
                <p className="mx-auto max-w-[700px] text-neutral-600 md:text-xl">
                  We'd love to hear from you. Reach out with questions, feedback, or partnership inquiries.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-4xl gap-8 py-12">
              <div className="space-y-8">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold">Contact Information</h2>
                  <p className="text-neutral-600">
                    Feel free to reach out to the creator of 21GLabs through any of the following channels.
                  </p>
                </div>

                <div className="rounded-lg border bg-white p-8 shadow-sm">
                  <div className="flex flex-col items-center space-y-6">
                    <div className="h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-brand-blue-light to-brand-blue/20">
                      <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-brand-blue">
                        KJ
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold">Kapil Jain</h3>
                      <p className="text-neutral-600">Creator & Developer</p>
                    </div>

                    <div className="grid w-full gap-4 md:grid-cols-2">
                      <a
                        href="https://kapiljain.xyz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-md border border-neutral-200 bg-white p-4 transition-colors hover:bg-neutral-50"
                      >
                        <Globe className="h-5 w-5 text-brand-blue" />
                        <div>
                          <h4 className="font-medium">Website</h4>
                          <p className="text-sm text-neutral-600">kapiljain.xyz</p>
                        </div>
                      </a>

                      <a
                        href="mailto:contact@kapiljain.xyz"
                        className="flex items-center gap-3 rounded-md border border-neutral-200 bg-white p-4 transition-colors hover:bg-neutral-50"
                      >
                        <Mail className="h-5 w-5 text-brand-orange" />
                        <div>
                          <h4 className="font-medium">Email</h4>
                          <p className="text-sm text-neutral-600">contact@kapiljain.xyz</p>
                        </div>
                      </a>

                      <a
                        href="https://github.com/kapshere"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-md border border-neutral-200 bg-white p-4 transition-colors hover:bg-neutral-50"
                      >
                        <Github className="h-5 w-5 text-neutral-800" />
                        <div>
                          <h4 className="font-medium">GitHub</h4>
                          <p className="text-sm text-neutral-600">@kapshere</p>
                        </div>
                      </a>

                      <a
                        href="https://linkedin.com/in/kapiljain"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-md border border-neutral-200 bg-white p-4 transition-colors hover:bg-neutral-50"
                      >
                        <Linkedin className="h-5 w-5 text-[#0077b5]" />
                        <div>
                          <h4 className="font-medium">LinkedIn</h4>
                          <p className="text-sm text-neutral-600">Kapil Jain</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">Business Hours</h3>
                  <p className="text-neutral-600">
                    Since 21GLabs is a hobby project, responses may vary.
                    <br />
                    For faster responses, please reach out via email.
                  </p>
                </div>
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

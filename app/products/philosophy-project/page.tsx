import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function PhilosophyProjectPage() {
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
          <div className="absolute inset-0 bg-brand-blue-light/30">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
          </div>
          <div className="container relative px-4 py-16 md:py-24 md:px-6">
            <Link href="/products" className="inline-flex items-center text-sm font-medium text-brand-blue mb-6">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Products
            </Link>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-brand-blue-light px-3 py-1 text-sm text-brand-blue">
                  Knowledge Platform
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">The Philosophy Project</h1>
                <p className="text-xl text-neutral-600">
                  Making ancient Bharatiya philosophies accessible to modern audiences through podcasts, videos, and
                  books.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[300px] w-full max-w-[500px] overflow-hidden rounded-xl bg-gradient-to-br from-brand-blue-light to-brand-blue/20 shadow-lg">
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
                          className="h-8 w-8 text-brand-blue"
                        >
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">The Philosophy Project</h3>
                      <p className="mt-2 text-white/90">Ancient wisdom for modern times</p>
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
                <h2 className="text-3xl font-bold">About The Philosophy Project</h2>
                <p className="text-lg text-neutral-600">
                  The Philosophy Project aims to make the rich philosophical traditions of ancient Bharat accessible to
                  modern audiences. We believe that the timeless wisdom contained in these philosophies can provide
                  valuable insights and guidance for navigating contemporary challenges.
                </p>
                <p className="text-lg text-neutral-600">
                  Our team of scholars, content creators, and technologists work together to translate complex
                  philosophical concepts into engaging, easy-to-understand content across multiple formats including
                  podcasts, videos, and books. This multi-format approach ensures that people of all ages and learning
                  preferences can engage with this valuable knowledge.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Key Features</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                    <span>Multi-format content (audio, video, text)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                    <span>Expert commentary and interpretation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                    <span>Modern applications of ancient wisdom</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                    <span>Content in multiple languages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                    <span>Interactive learning experiences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-blue shrink-0 mt-0.5" />
                    <span>Community discussions and events</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Pricing & Plans</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg border bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold">Free</h3>
                      <div className="text-sm font-medium text-neutral-500">₹0/month</div>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-blue" />
                        <span>Access to selected podcasts</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-blue" />
                        <span>Limited video content</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-blue" />
                        <span>Basic articles and blog posts</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-blue" />
                        <span>Community forum access</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-brand-blue text-white hover:bg-brand-blue/90">Sign Up Free</Button>
                  </div>
                  <div className="rounded-lg border bg-brand-blue-light/20 p-6 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold">Premium</h3>
                      <div className="text-sm font-medium text-neutral-500">₹399/month</div>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-blue" />
                        <span>Full access to all content</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-blue" />
                        <span>Exclusive in-depth series</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-blue" />
                        <span>Early access to new releases</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-blue" />
                        <span>Interactive sessions with scholars</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-blue" />
                        <span>Downloadable resources</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-blue" />
                        <span>Ad-free experience</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-brand-blue text-white hover:bg-brand-blue/90">
                      Upgrade to Premium
                    </Button>
                  </div>
                </div>
                <p className="text-center text-sm text-neutral-500">
                  Educational institutions can access special pricing.{" "}
                  <Link href="/contact" className="text-brand-blue hover:underline">
                    Contact us
                  </Link>{" "}
                  for details.
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


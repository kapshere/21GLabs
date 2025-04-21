import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function AnuvadasetuProductPage() {
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
          <div className="absolute inset-0 bg-brand-orange-light/30">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
          </div>
          <div className="container relative px-4 py-16 md:py-24 md:px-6">
            <Link href="/products" className="inline-flex items-center text-sm font-medium text-brand-orange mb-6">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Products
            </Link>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-brand-orange-light px-3 py-1 text-sm text-brand-orange">
                  Translation Platform
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Anuvādasetu</h1>
                <p className="text-xl text-neutral-600">
                  Breaking language barriers across India. Translate your content into native Indian languages and
                  expand your reach.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[300px] w-full max-w-[500px] overflow-hidden rounded-xl bg-gradient-to-br from-brand-orange-light to-brand-orange/20 shadow-lg">
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
                          className="h-8 w-8 text-brand-orange"
                        >
                          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Anuvādasetu</h3>
                      <p className="mt-2 text-white/90">Building bridges across languages</p>
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
                <h2 className="text-3xl font-bold">About Anuvādasetu</h2>
                <p className="text-lg text-neutral-600">
                  Anuvādasetu (meaning "translation bridge" in Sanskrit) is an advanced AI-powered translation platform
                  specifically designed for Indian languages. Our technology helps authors, publishers, and content
                  creators translate their work into multiple Indian languages while preserving cultural nuances and
                  context.
                </p>
                <p className="text-lg text-neutral-600">
                  With over 19,500 languages and dialects spoken across India, language barriers often limit the reach
                  of valuable content. Anuvādasetu bridges this gap, making knowledge and stories accessible to millions
                  of Indians in their native languages.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Key Features</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Support for 22 official Indian languages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Context-aware AI translation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Cultural nuance preservation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Human review option for critical content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Format preservation (books, articles, websites)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                    <span>Publishing assistance services</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Pricing & Plans</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg border bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold">Basic</h3>
                      <div className="text-sm font-medium text-neutral-500">₹999/month</div>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-orange" />
                        <span>Up to 50,000 words per month</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-orange" />
                        <span>Support for 5 languages</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-orange" />
                        <span>AI translation only</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-orange" />
                        <span>Basic formatting support</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-brand-orange text-white hover:bg-brand-orange/90">Get Started</Button>
                  </div>
                  <div className="rounded-lg border bg-brand-orange-light/20 p-6 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold">Professional</h3>
                      <div className="text-sm font-medium text-neutral-500">₹4,999/month</div>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-orange" />
                        <span>Unlimited words</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-orange" />
                        <span>All 22 official languages</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-orange" />
                        <span>AI + Human review</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-orange" />
                        <span>Advanced formatting preservation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-orange" />
                        <span>Publishing assistance</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-orange" />
                        <span>Dedicated account manager</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-brand-orange text-white hover:bg-brand-orange/90">
                      Upgrade to Professional
                    </Button>
                  </div>
                </div>
                <p className="text-center text-sm text-neutral-500">
                  Custom enterprise solutions available for large publishers.{" "}
                  <Link href="/contact" className="text-brand-orange hover:underline">
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

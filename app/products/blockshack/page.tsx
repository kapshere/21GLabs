import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function BlockshackProductPage() {
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
          <div className="absolute inset-0 bg-brand-green-light/30">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
          </div>
          <div className="container relative px-4 py-16 md:py-24 md:px-6">
            <Link href="/products" className="inline-flex items-center text-sm font-medium text-brand-green mb-6">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Products
            </Link>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-brand-green-light px-3 py-1 text-sm text-brand-green">
                  Gig Economy Platform
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Blockshack</h1>
                <p className="text-xl text-neutral-600">
                  A new age LinkedIn where every individual is a business entrepreneur and runs their own shop or shack.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[300px] w-full max-w-[500px] overflow-hidden rounded-xl bg-gradient-to-br from-brand-green-light to-brand-green/20 shadow-lg">
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
                          className="h-8 w-8 text-brand-green"
                        >
                          <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Blockshack</h3>
                      <p className="mt-2 text-white/90">Empowering the gig economy</p>
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
                <h2 className="text-3xl font-bold">About Blockshack</h2>
                <p className="text-lg text-neutral-600">
                  Blockshack is revolutionizing the gig economy by creating a platform where every individual can become
                  an entrepreneur. Unlike traditional job platforms or social networks, Blockshack empowers users to
                  create their own digital "shack" where they can showcase their skills, services, and products.
                </p>
                <p className="text-lg text-neutral-600">
                  Our platform combines the networking capabilities of LinkedIn, the service marketplace of Fiverr, and
                  the project management tools of Upwork into a unified ecosystem designed for the modern gig worker and
                  entrepreneur.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Key Features</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                    <span>Personalized digital storefronts ("shacks")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                    <span>Blockchain-verified skill credentials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                    <span>Secure payment processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                    <span>Project management tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                    <span>Client-freelancer matching algorithm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-brand-green shrink-0 mt-0.5" />
                    <span>Reputation and review system</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Pricing & Plans</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg border bg-white p-6 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold">Freelancer</h3>
                      <div className="text-sm font-medium text-neutral-500">₹499/month</div>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-green" />
                        <span>Basic digital shack</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-green" />
                        <span>Up to 10 services/products</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-green" />
                        <span>5% transaction fee</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-green" />
                        <span>Basic analytics</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-brand-green text-white hover:bg-brand-green/90">Sign Up</Button>
                  </div>
                  <div className="rounded-lg border bg-brand-green-light/20 p-6 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                      <h3 className="text-xl font-bold">Business</h3>
                      <div className="text-sm font-medium text-neutral-500">₹1,999/month</div>
                    </div>
                    <ul className="mb-6 space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-green" />
                        <span>Premium digital shack with customization</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-green" />
                        <span>Unlimited services/products</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-green" />
                        <span>3% transaction fee</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-green" />
                        <span>Advanced analytics and reporting</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-green" />
                        <span>Priority placement in search results</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-brand-green" />
                        <span>Team collaboration tools</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-brand-green text-white hover:bg-brand-green/90">
                      Upgrade to Business
                    </Button>
                  </div>
                </div>
                <p className="text-center text-sm text-neutral-500">
                  Enterprise solutions available for large organizations.{" "}
                  <Link href="/contact" className="text-brand-green hover:underline">
                    Contact us
                  </Link>{" "}
                  for custom pricing.
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

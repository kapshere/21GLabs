import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-neutral-200 to-neutral-100 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300">
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
        <section className="w-full py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-brand-blue-light px-3 py-1 text-sm text-brand-blue">
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
                    <Button className="inline-flex h-10 items-center justify-center rounded-md bg-brand-blue px-8 text-sm font-medium text-white shadow transition-colors hover:bg-brand-blue/90 hover:shadow-lg hover:shadow-brand-blue/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50">
                      Explore Products
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-neutral-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-neutral-100 hover:text-neutral-900 hover:shadow-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 shadow-lg hover:shadow-xl hover:shadow-brand-blue/20 transition-all duration-300">
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
                <div className="inline-block rounded-lg bg-brand-orange-light px-3 py-1 text-sm text-brand-orange">
                  Our Solutions
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Innovative Products</h2>
                <p className="max-w-[900px] text-neutral-600 md:text-xl/relaxed">
                  Discover our range of B2B and B2C technology solutions designed to meet the evolving needs of modern
                  businesses and consumers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 pt-12 md:grid-cols-2 lg:grid-cols-5">
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-lg hover:shadow-brand-blue/20 duration-300">
                <div className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-light">
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
                      className="h-6 w-6 text-brand-blue"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">Connect</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Real People. Real Connections. Connect with others through authentic commitments, celebrations, and
                    memories. No fake profiles, just real interaction.
                  </p>
                  <Link
                    href="https://connect.21glabs.in"
                    className="mt-4 inline-flex items-center text-sm font-medium text-brand-blue hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-lg hover:shadow-brand-orange/20 duration-300">
                <div className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange-light">
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
                      className="h-6 w-6 text-brand-orange"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">Anuvādasetu</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Translate your English books to native Indian languages and expand your reach. Break language
                    barriers and connect with a wider audience.
                  </p>
                  <Link
                    href="https://anuvadasetu.21glabs.in"
                    className="mt-4 inline-flex items-center text-sm font-medium text-brand-orange hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-lg hover:shadow-brand-green/20 duration-300">
                <div className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-green-light">
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
                      className="h-6 w-6 text-brand-green"
                    >
                      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">Blockshack</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    A new age LinkedIn where every individual is a business entrepreneur and runs their own shop or
                    shack. Replacing LinkedIn, Fiverr, and Upwork for gig workers.
                  </p>
                  <Link
                    href="https://blockshack.21glabs.in"
                    className="mt-4 inline-flex items-center text-sm font-medium text-brand-green hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-lg hover:shadow-brand-blue/20 duration-300">
                <div className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-light">
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
                      className="h-6 w-6 text-brand-blue"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">The Philosophy Project</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    Publishing ancient Bharatiya philosophies in modern formats. Access timeless wisdom through
                    podcasts, videos, and books designed for all generations.
                  </p>
                  <Link
                    href="https://philosophy.21glabs.in"
                    className="mt-4 inline-flex items-center text-sm font-medium text-brand-blue hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-lg hover:shadow-brand-orange/20 duration-300">
                <div className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange-light">
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
                      className="h-6 w-6 text-brand-orange"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-bold">ToolSphere</h3>
                  <p className="mt-2 text-sm text-neutral-600">
                    A comprehensive collection of web-based tools for developers, designers, and content creators. All
                    the utilities you need in one convenient location.
                  </p>
                  <Link
                    href="https://toolsphere.21glabs.in"
                    className="mt-4 inline-flex items-center text-sm font-medium text-brand-orange hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-brand-green-light px-3 py-1 text-sm text-brand-green">
                  Why Choose Us
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Approach</h2>
                <p className="max-w-[900px] text-neutral-600 md:text-xl/relaxed">
                  At 21GLabs, we combine innovation with practicality to create solutions that make a real difference.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 pt-12 md:grid-cols-2">
              <div className="flex flex-col items-start space-y-4 p-6 rounded-lg hover:shadow-lg hover:shadow-brand-blue/10 transition-all duration-300">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-light">
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
                    className="h-6 w-6 text-brand-blue"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Secure by Design</h3>
                <p className="text-neutral-600">
                  Security is built into every product we create, ensuring your data and systems are protected at all
                  times.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4 p-6 rounded-lg hover:shadow-lg hover:shadow-brand-orange/10 transition-all duration-300">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange-light">
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
                    className="h-6 w-6 text-brand-orange"
                  >
                    <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                    <path d="M12 8v-2" />
                    <path d="M12 18v-2" />
                    <path d="M16 12h2" />
                    <path d="M6 12h2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Intuitive Experience</h3>
                <p className="text-neutral-600">
                  We design with the user in mind, creating interfaces that are easy to use and understand.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4 p-6 rounded-lg hover:shadow-lg hover:shadow-brand-green/10 transition-all duration-300">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-green-light">
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
                    className="h-6 w-6 text-brand-green"
                  >
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Customer Satisfaction</h3>
                <p className="text-neutral-600">
                  Our products are designed to exceed expectations, with a focus on solving real-world problems.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4 p-6 rounded-lg hover:shadow-lg hover:shadow-brand-blue/10 transition-all duration-300">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-light">
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
                    className="h-6 w-6 text-brand-blue"
                  >
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M12 18v-6" />
                    <path d="M8 18v-1" />
                    <path d="M16 18v-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Data-Driven Insights</h3>
                <p className="text-neutral-600">
                  Our solutions provide valuable insights that help you make informed decisions and drive growth.
                </p>
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
                  <Button className="w-full bg-brand-green text-white hover:bg-brand-green/90 hover:shadow-lg hover:shadow-brand-green/20 transition-all duration-300">
                    Contact Us
                  </Button>
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
            <div className="relative h-6 w-6 overflow-hidden rounded-full bg-gradient-to-br from-neutral-200 to-neutral-100 hover:shadow-sm hover:shadow-brand-blue/20 transition-all duration-300">
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

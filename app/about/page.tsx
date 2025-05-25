import Link from "next/link"

import { Button } from "@/components/ui/button"

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
              href="/experiments"
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-neutral-900"
            >
              Experiments
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  About 21GLabs
                </h1>
                <p className="mx-auto max-w-[700px] text-neutral-600 md:text-xl">
                  Pioneering the future of technology in India and beyond.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-brand-blue-light px-3 py-1 text-sm text-brand-blue">
                  Our Story
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">From Vision to Reality</h2>
                <p className="text-neutral-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Founded with a vision to transform how businesses and consumers interact with technology, 21GLabs has
                  grown from a small team of innovators to a leading technology company in India.
                </p>
                <p className="text-neutral-600">
                  Our journey began with a simple idea: to create technology that makes a difference. Today, we're proud
                  to offer a diverse range of products that solve real-world problems and enhance everyday experiences.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[350px] w-[350px] overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-50 shadow-lg">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="space-y-2 text-center">
                      <div className="text-6xl font-bold text-neutral-300">21G</div>
                      <div className="text-sm text-neutral-500">EST. 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto max-w-5xl space-y-12">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-brand-orange-light px-3 py-1 text-sm text-brand-orange">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Driving Innovation Forward</h2>
                <p className="text-neutral-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At 21GLabs, our mission is to develop technology solutions that empower businesses and individuals to
                  achieve more. From authentic social connections with Connect, to breaking language barriers with
                  Anuvādasetu, revolutionizing the gig economy with Blockshack, and preserving ancient wisdom with The
                  Philosophy Project, we create products that are not just innovative, but also accessible,
                  user-friendly, and designed with purpose.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-4">
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
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Research & Development</h3>
                  <p className="text-neutral-600">
                    We invest heavily in R&D to stay at the forefront of technological advancements and bring
                    cutting-edge solutions to market.
                  </p>
                </div>
                <div className="space-y-4">
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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Our Team</h3>
                  <p className="text-neutral-600">
                    Our diverse team of experts brings together knowledge from various fields to create holistic
                    solutions that address complex challenges.
                  </p>
                </div>
                <div className="space-y-4">
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Our Values</h3>
                  <p className="text-neutral-600">
                    Integrity, innovation, and customer satisfaction are at the core of everything we do at 21GLabs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-brand-blue-light/30 py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Our Journey</h2>
                <p className="mx-auto max-w-[700px] text-neutral-600 md:text-xl">
                  We're always looking for talented individuals to join our team and help us shape the future of
                  technology.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Button className="w-full bg-brand-blue text-white hover:bg-brand-blue/90">
                  View Career Opportunities
                </Button>
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

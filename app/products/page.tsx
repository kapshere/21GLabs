import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Our Products
                </h1>
                <p className="mx-auto max-w-[700px] text-neutral-600 md:text-xl">
                  Innovative solutions for businesses and consumers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Connect",
                  description:
                    "Real People. Real Connections. Connect with others through authentic commitments, celebrations, and memories. No fake profiles, just real interaction. You're not real if you can't commit.",
                  type: "B2C",
                  image: "/placeholder.svg",
                  color: "bg-brand-blue-light text-brand-blue",
                  link: "/products/connect",
                },
                {
                  title: "Anuvādasetu",
                  description:
                    "Translate your English books to native Indian languages and expand your reach. Break language barriers and connect with a wider audience across India's diverse linguistic landscape.",
                  type: "B2B/B2C",
                  image: "/placeholder.svg",
                  color: "bg-brand-orange-light text-brand-orange",
                  link: "/products/anuvadasetu",
                },
                {
                  title: "Blockshack",
                  description:
                    "A new age LinkedIn where every individual is a business entrepreneur and runs their own shop or shack for earning a living. Replacing LinkedIn, Fiverr, and Upwork for gig workers.",
                  type: "B2B/B2C",
                  image: "/placeholder.svg",
                  color: "bg-brand-green-light text-brand-green",
                  link: "/products/blockshack",
                },
                {
                  title: "The Philosophy Project",
                  description:
                    "Publishing ancient Bharatiya philosophies in modern formats. Access timeless wisdom through podcasts, videos, and books designed for all generations to easily understand and appreciate.",
                  type: "B2C",
                  image: "/placeholder.svg",
                  color: "bg-brand-blue-light text-brand-blue",
                  link: "/products/philosophy-project",
                },
                {
                  title: "Connect Enterprise",
                  description:
                    "Bring authentic connection to your organization. Our enterprise solution helps teams build genuine relationships and improve collaboration through meaningful interactions.",
                  type: "B2B",
                  image: "/placeholder.svg",
                  color: "bg-brand-blue-light text-brand-blue",
                  link: "/products/connect",
                },
                {
                  title: "Anuvādasetu Pro",
                  description:
                    "Professional translation services for publishers and content creators. Expand your market reach across India with AI-powered translation optimized for regional nuances.",
                  type: "B2B",
                  image: "/placeholder.svg",
                  color: "bg-brand-orange-light text-brand-orange",
                  link: "/products/anuvadasetu",
                },
                {
                  title: "Blockshack Business",
                  description:
                    "Enterprise talent acquisition platform that connects businesses with verified freelancers and gig workers. Find the right talent for your projects with our advanced matching algorithm.",
                  type: "B2B",
                  image: "/placeholder.svg",
                  color: "bg-brand-green-light text-brand-green",
                  link: "/products/blockshack",
                },
                {
                  title: "The Philosophy Project Premium",
                  description:
                    "Advanced access to exclusive content, early releases, and interactive sessions with scholars. Dive deeper into ancient wisdom with our premium subscription offering.",
                  type: "B2B/B2C",
                  image: "/placeholder.svg",
                  color: "bg-brand-blue-light text-brand-blue",
                  link: "/products/philosophy-project",
                },
              ].map((product, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md"
                >
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      width={600}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className={`inline-block rounded-full px-3 py-1 text-xs ${product.color}`}>{product.type}</div>
                    <h3 className="mt-4 text-xl font-bold">{product.title}</h3>
                    <p className="mt-2 text-sm text-neutral-600">{product.description}</p>
                    <Link
                      href={product.link}
                      className={`mt-4 inline-flex items-center text-sm font-medium ${product.color.split(" ")[1]} hover:underline`}
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full bg-brand-blue-light/30 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Custom Solutions</h2>
                <p className="mx-auto max-w-[700px] text-neutral-600 md:text-xl">
                  Need something tailored to your specific requirements? We offer custom development services.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <Button className="w-full bg-brand-blue text-white hover:bg-brand-blue/90">
                  Request a Consultation
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


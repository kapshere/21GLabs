import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ExperimentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header id="top" className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
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
              href="/experiments"
              className="text-sm font-medium text-neutral-900 transition-colors hover:text-neutral-900"
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
                  Our Experiments
                </h1>
                <p className="mx-auto max-w-[700px] text-neutral-600 md:text-xl">
                  Exploring new ideas and concepts in technology and philosophy.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2">
              {[
                {
                  title: "The Philosophy Project",
                  description:
                    "Publishing ancient Bharatiya philosophies in modern formats. Access timeless wisdom through podcasts, videos, and books designed for all generations to easily understand and appreciate.",
                  image: "/images/philosophy.jpg",
                  color: "bg-brand-blue-light text-brand-blue",
                  link: "/products/philosophy-project#top",
                  shadowColor: "shadow-brand-blue/20",
                },
                {
                  title: "ToolSphere",
                  description:
                    "A comprehensive collection of web-based tools for developers, designers, and content creators. All the utilities you need in one convenient location.",
                  image: "/images/toolsphere.jpg",
                  color: "bg-brand-orange-light text-brand-orange",
                  link: "/products/toolsphere#top",
                  shadowColor: "shadow-brand-orange/20",
                },
              ].map((experiment, i) => (
                <div
                  key={i}
                  className={`group relative overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-lg ${experiment.shadowColor} duration-300`}
                >
                  <div className="aspect-video overflow-hidden">
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      {experiment.image.includes("/images/") ? (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <div className={`p-4 rounded-lg ${experiment.color.split(" ")[0]}`}>
                            <span className={`text-2xl font-bold ${experiment.color.split(" ")[1]}`}>
                              {experiment.title}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <Image
                          src={experiment.image || "/placeholder.svg"}
                          alt={experiment.title}
                          width={600}
                          height={400}
                          className="object-cover transition-transform group-hover:scale-105"
                          unoptimized
                        />
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mt-4 text-xl font-bold">{experiment.title}</h3>
                    <p className="mt-2 text-sm text-neutral-600">{experiment.description}</p>
                    <Link
                      href={experiment.link}
                      className={`mt-4 inline-flex items-center text-sm font-medium ${experiment.color.split(" ")[1]} hover:underline`}
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

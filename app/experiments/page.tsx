import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Wrench, BookOpen } from "lucide-react"

export default function ExperimentsPage() {
  const experiments = [
    {
      name: "Anuvadasetu",
      description: "Breaking language barriers with AI-powered translation and localization services.",
      icon: Globe,
      color: "green",
      href: "/experiments/anuvadasetu",
      status: "Active",
    },
    {
      name: "ToolSphere",
      description: "A comprehensive collection of web-based tools for developers, designers, and content creators.",
      icon: Wrench,
      color: "orange",
      href: "/experiments/toolsphere",
      status: "Active",
    },
    {
      name: "Philosophy Project",
      description: "Making ancient Bharatiya philosophies accessible to modern audiences through podcasts and books.",
      icon: BookOpen,
      color: "indigo",
      href: "/experiments/philosophy-project",
      status: "Active",
    },
  ]

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
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Our Experiments</h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Innovative projects and tools where we explore new possibilities and push the boundaries of technology.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 md:grid-cols-3">
                {experiments.map((experiment) => {
                  const Icon = experiment.icon
                  return (
                    <div
                      key={experiment.name}
                      className="group relative overflow-hidden rounded-lg border bg-white p-8 shadow-sm transition-all hover:shadow-lg"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 mb-4">
                          <Icon className="h-8 w-8 text-gray-600" />
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{experiment.name}</h3>
                          <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-800">
                            {experiment.status}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-6">{experiment.description}</p>
                        <Link href={experiment.href}>
                          <Button variant="outline" size="sm">
                            Explore
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-purple-600 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join Our Experiments</h2>
              <p className="mt-4 text-lg text-purple-100">
                Be part of our journey as we explore new frontiers in technology and innovation.
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="bg-white text-purple-600 hover:bg-gray-50">
                    Get Involved
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
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
            <div className="flex gap-4">
              <Link href="#" className="text-sm text-neutral-500 hover:underline">
                Privacy Policy
              </Link>
              <Link href="#" className="text-sm text-neutral-500 hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

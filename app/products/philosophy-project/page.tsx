import Link from "next/link"
import { ArrowLeft, ExternalLink, Music, Twitter } from "lucide-react"

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
        <section className="relative">
          <div className="absolute inset-0 bg-brand-blue-light/30">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
          </div>
          <div className="container relative px-4 py-16 md:py-24 md:px-6">
            <Link href="/experiments" className="inline-flex items-center text-sm font-medium text-brand-blue mb-6">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Experiments
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
                <div className="relative h-[300px] w-full max-w-[500px] overflow-hidden rounded-xl bg-gradient-to-br from-brand-blue-light to-brand-blue/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-brand-blue/20">
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

              {/* Book Section */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Our Latest Book</h2>
                <div className="rounded-lg border overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 bg-brand-blue-light/20 p-6 flex items-center justify-center">
                      <div className="w-full max-w-[200px] aspect-[2/3] rounded-md shadow-md flex items-center justify-center overflow-hidden bg-gradient-to-br from-brand-blue-light to-brand-blue/20">
                        <div className="text-center p-4">
                          <div className="text-2xl font-bold text-brand-blue mb-2">Siesta</div>
                          <div className="text-lg text-brand-blue">of Seven</div>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-2 p-6">
                      <h3 className="text-xl font-bold mb-2">
                        Siesta of Seven: Dreaming the world in stories of love, meaning, and freedom
                      </h3>
                      <p className="text-neutral-600 mb-4">
                        A profound exploration of love, meaning, and freedom through captivating stories that bridge
                        ancient wisdom with modern challenges.
                      </p>
                      <div className="mb-4">
                        <span className="text-sm text-neutral-500">Available as e-book on Kindle</span>
                      </div>
                      <a
                        href="https://a.co/d/7XYJqxp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-brand-blue hover:underline"
                      >
                        View on Amazon
                        <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Spotify Podcast Section */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Simply Talking Podcast</h2>
                <div className="rounded-lg border p-6 mb-4 bg-brand-blue-light/10 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <Music className="h-5 w-5 text-brand-blue" />
                      <a
                        href="https://open.spotify.com/show/5AKakDCLTuKBPbMzpvI68g"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-blue hover:underline font-medium"
                      >
                        Listen on Spotify
                      </a>
                    </div>

                    {/* Spotify Embed */}
                    <div className="w-full rounded-lg overflow-hidden shadow-md">
                      <iframe
                        src="https://open.spotify.com/embed/show/5AKakDCLTuKBPbMzpvI68g?utm_source=generator&theme=0"
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              {/* Twitter Section */}
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Join the Conversation</h2>
                <div className="flex items-center gap-2 mb-4">
                  <Twitter className="h-5 w-5 text-brand-blue" />
                  <a
                    href="https://x.com/PhilosophyofUg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:underline"
                  >
                    Follow @PhilosophyofUg
                  </a>
                </div>

                {/* Twitter Timeline Embed - Updated to use a more reliable approach */}
                <div className="rounded-lg border overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="p-6 text-center">
                    <p className="text-neutral-600 mb-4">Follow our latest thoughts and discussions on Twitter.</p>
                    <a
                      href="https://x.com/PhilosophyofUg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-brand-blue hover:underline"
                    >
                      View our Twitter profile
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
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

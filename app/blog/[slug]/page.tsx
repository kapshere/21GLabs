import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { getAllBlogPosts, getBlogPostBySlug } from "@/app/lib/blog"

// This function is required for static site generation with dynamic routes
export async function generateStaticParams() {
  const posts = getAllBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">Blog post not found</h1>
        <p className="mt-2 text-neutral-600">
          The requested blog post could not be found. It may have been moved or deleted.
        </p>
        <Link href="/blog" className="mt-4 text-brand-blue hover:underline">
          Back to Blog
        </Link>
      </div>
    )
  }

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
              className="text-sm font-medium text-neutral-900 transition-colors hover:text-neutral-900"
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
        <article className="container max-w-3xl px-4 py-12 md:py-20">
          <Link href="/blog" className="inline-flex items-center text-sm font-medium text-neutral-600 mb-6">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Blog
          </Link>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className={`inline-block rounded-full px-3 py-1 text-xs ${post.frontmatter.color}`}>
                {post.frontmatter.category}
              </div>
              <div className="text-xs text-neutral-500">{post.frontmatter.date}</div>
            </div>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">{post.frontmatter.title}</h1>
            <p className="text-xl text-neutral-600">{post.frontmatter.description}</p>
          </div>

          <div className="prose prose-neutral max-w-none">
            {post.content.split("\n").map((paragraph, index) => {
              if (paragraph.startsWith("# ")) {
                return (
                  <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                    {paragraph.substring(2)}
                  </h1>
                )
              } else if (paragraph.startsWith("## ")) {
                return (
                  <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                    {paragraph.substring(3)}
                  </h2>
                )
              } else if (paragraph.startsWith("### ")) {
                return (
                  <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                    {paragraph.substring(4)}
                  </h3>
                )
              } else if (paragraph.startsWith("- ")) {
                return (
                  <li key={index} className="ml-6 mb-2">
                    {paragraph.substring(2)}
                  </li>
                )
              } else if (paragraph.startsWith("> ")) {
                return (
                  <blockquote key={index} className="border-l-4 border-neutral-200 pl-4 italic my-4">
                    {paragraph.substring(2)}
                  </blockquote>
                )
              } else if (paragraph.trim() !== "") {
                return (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                )
              }
              return null
            })}
          </div>
        </article>
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

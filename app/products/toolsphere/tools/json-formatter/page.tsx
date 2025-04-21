"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function JsonFormatterPage() {
  const [jsonInput, setJsonInput] = useState("")
  const [formattedJson, setFormattedJson] = useState("")
  const [minifiedJson, setMinifiedJson] = useState("")
  const [error, setError] = useState("")

  const formatJson = () => {
    if (!jsonInput.trim()) {
      setError("Please enter JSON to format")
      return
    }

    try {
      // Parse the JSON to validate it
      const parsedJson = JSON.parse(jsonInput)

      // Format with indentation
      const formatted = JSON.stringify(parsedJson, null, 2)
      setFormattedJson(formatted)

      // Minify
      const minified = JSON.stringify(parsedJson)
      setMinifiedJson(minified)

      setError("")
    } catch (err) {
      setError(`Invalid JSON: ${err instanceof Error ? err.message : "Unknown error"}`)
      setFormattedJson("")
      setMinifiedJson("")
    }
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
        <div className="container py-8 px-4 md:px-6">
          <div className="mb-6">
            <Link
              href="/products/toolsphere"
              className="inline-flex items-center text-sm font-medium text-brand-orange mb-6"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to ToolSphere
            </Link>
            <h1 className="text-3xl font-bold mt-4">JSON Formatter</h1>
            <p className="text-neutral-600 mt-2">
              Format and validate JSON data with syntax highlighting and error detection.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <Label htmlFor="json-input">Input JSON</Label>
                <Textarea
                  id="json-input"
                  placeholder='{"example": "Paste your JSON here"}'
                  className="min-h-[300px] font-mono text-sm"
                  value={jsonInput}
                  onChange={(e) => setJsonInput(e.target.value)}
                />
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">{error}</div>
              )}

              <Button className="w-full bg-brand-orange text-white hover:bg-brand-orange/90" onClick={formatJson}>
                Format JSON
              </Button>
            </div>

            <div className="space-y-4">
              <Tabs defaultValue="formatted" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="formatted">Formatted</TabsTrigger>
                  <TabsTrigger value="minified">Minified</TabsTrigger>
                </TabsList>
                <TabsContent value="formatted">
                  <Textarea className="min-h-[300px] font-mono text-sm" value={formattedJson} readOnly />
                </TabsContent>
                <TabsContent value="minified">
                  <Textarea className="min-h-[300px] font-mono text-sm" value={minifiedJson} readOnly />
                </TabsContent>
              </Tabs>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    if (formattedJson) {
                      navigator.clipboard.writeText(formattedJson)
                    }
                  }}
                >
                  Copy Formatted
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    if (minifiedJson) {
                      navigator.clipboard.writeText(minifiedJson)
                    }
                  }}
                >
                  Copy Minified
                </Button>
              </div>
            </div>
          </div>
        </div>
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

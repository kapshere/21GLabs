"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function TextCaseConverterPage() {
  const [text, setText] = useState("")
  const [convertedText, setConvertedText] = useState("")
  const [selectedCase, setSelectedCase] = useState("lowercase")

  const handleConvert = () => {
    if (!text) return

    let result = ""
    switch (selectedCase) {
      case "lowercase":
        result = text.toLowerCase()
        break
      case "uppercase":
        result = text.toUpperCase()
        break
      case "titlecase":
        result = text
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
        break
      case "sentencecase":
        result = text.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase())
        break
      case "camelcase":
        result = text.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase())
        break
      case "pascalcase":
        result = text.toLowerCase().replace(/(^|[^a-zA-Z0-9]+)(.)/g, (_, __, chr) => chr.toUpperCase())
        break
      case "snakecase":
        result = text
          .toLowerCase()
          .replace(/\s+/g, "_")
          .replace(/[^a-zA-Z0-9_]/g, "")
        break
      case "kebabcase":
        result = text
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-zA-Z0-9-]/g, "")
        break
      default:
        result = text
    }

    setConvertedText(result)
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
            <h1 className="text-3xl font-bold mt-4">Text Case Converter</h1>
            <p className="text-neutral-600 mt-2">
              Convert text between different cases: lowercase, UPPERCASE, Title Case, and more.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div>
                <Label htmlFor="input-text">Input Text</Label>
                <Textarea
                  id="input-text"
                  placeholder="Enter text to convert..."
                  className="min-h-[200px]"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>

              <div className="space-y-3">
                <Label>Select Case</Label>
                <RadioGroup value={selectedCase} onValueChange={setSelectedCase} className="grid grid-cols-2 gap-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="lowercase" id="lowercase" />
                    <Label htmlFor="lowercase">lowercase</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="uppercase" id="uppercase" />
                    <Label htmlFor="uppercase">UPPERCASE</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="titlecase" id="titlecase" />
                    <Label htmlFor="titlecase">Title Case</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sentencecase" id="sentencecase" />
                    <Label htmlFor="sentencecase">Sentence case</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="camelcase" id="camelcase" />
                    <Label htmlFor="camelcase">camelCase</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pascalcase" id="pascalcase" />
                    <Label htmlFor="pascalcase">PascalCase</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="snakecase" id="snakecase" />
                    <Label htmlFor="snakecase">snake_case</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="kebabcase" id="kebabcase" />
                    <Label htmlFor="kebabcase">kebab-case</Label>
                  </div>
                </RadioGroup>
              </div>

              <Button className="w-full bg-brand-orange text-white hover:bg-brand-orange/90" onClick={handleConvert}>
                Convert
              </Button>
            </div>

            <div className="space-y-4">
              <div>
                <Label htmlFor="output-text">Result</Label>
                <Textarea id="output-text" className="min-h-[200px]" value={convertedText} readOnly />
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    if (convertedText) {
                      navigator.clipboard.writeText(convertedText)
                    }
                  }}
                >
                  Copy to Clipboard
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => {
                    setText(convertedText)
                    setConvertedText("")
                  }}
                >
                  Use as Input
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

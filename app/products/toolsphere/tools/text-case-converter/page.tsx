"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Copy, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TextCaseConverter() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [selectedCase, setSelectedCase] = useState("")

  const convertCase = (caseType: string) => {
    setSelectedCase(caseType)
    let result = ""

    switch (caseType) {
      case "lowercase":
        result = inputText.toLowerCase()
        break
      case "uppercase":
        result = inputText.toUpperCase()
        break
      case "titlecase":
        result = inputText.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
        break
      case "camelcase":
        result = inputText
          .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => (index === 0 ? word.toLowerCase() : word.toUpperCase()))
          .replace(/\s+/g, "")
        break
      case "snakecase":
        result = inputText.toLowerCase().replace(/\s+/g, "_")
        break
      case "kebabcase":
        result = inputText.toLowerCase().replace(/\s+/g, "-")
        break
      default:
        result = inputText
    }

    setOutputText(result)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText)
  }

  const reset = () => {
    setInputText("")
    setOutputText("")
    setSelectedCase("")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/products/toolsphere" className="inline-flex items-center text-sm font-medium text-orange-600 mb-6">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to ToolSphere
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Text Case Converter</h1>
          <p className="text-gray-600 mb-8">
            Convert text between different cases: lowercase, UPPERCASE, Title Case, camelCase, snake_case, and
            kebab-case.
          </p>

          <div className="bg-white rounded-lg shadow-sm border p-6 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Input Text</label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter your text here..."
                className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <Button
                onClick={() => convertCase("lowercase")}
                variant={selectedCase === "lowercase" ? "default" : "outline"}
                className="w-full"
              >
                lowercase
              </Button>
              <Button
                onClick={() => convertCase("uppercase")}
                variant={selectedCase === "uppercase" ? "default" : "outline"}
                className="w-full"
              >
                UPPERCASE
              </Button>
              <Button
                onClick={() => convertCase("titlecase")}
                variant={selectedCase === "titlecase" ? "default" : "outline"}
                className="w-full"
              >
                Title Case
              </Button>
              <Button
                onClick={() => convertCase("camelcase")}
                variant={selectedCase === "camelcase" ? "default" : "outline"}
                className="w-full"
              >
                camelCase
              </Button>
              <Button
                onClick={() => convertCase("snakecase")}
                variant={selectedCase === "snakecase" ? "default" : "outline"}
                className="w-full"
              >
                snake_case
              </Button>
              <Button
                onClick={() => convertCase("kebabcase")}
                variant={selectedCase === "kebabcase" ? "default" : "outline"}
                className="w-full"
              >
                kebab-case
              </Button>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">Output Text</label>
                <div className="flex gap-2">
                  <Button onClick={copyToClipboard} variant="outline" size="sm" disabled={!outputText}>
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </Button>
                  <Button onClick={reset} variant="outline" size="sm">
                    <RotateCcw className="h-4 w-4 mr-1" />
                    Reset
                  </Button>
                </div>
              </div>
              <textarea
                value={outputText}
                readOnly
                placeholder="Converted text will appear here..."
                className="w-full h-32 p-3 border border-gray-300 rounded-md bg-gray-50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Copy, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function JsonFormatter() {
  const [inputJson, setInputJson] = useState("")
  const [outputJson, setOutputJson] = useState("")
  const [error, setError] = useState("")

  const formatJson = () => {
    try {
      const parsed = JSON.parse(inputJson)
      const formatted = JSON.stringify(parsed, null, 2)
      setOutputJson(formatted)
      setError("")
    } catch (err) {
      setError("Invalid JSON format")
      setOutputJson("")
    }
  }

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(inputJson)
      const minified = JSON.stringify(parsed)
      setOutputJson(minified)
      setError("")
    } catch (err) {
      setError("Invalid JSON format")
      setOutputJson("")
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputJson)
  }

  const reset = () => {
    setInputJson("")
    setOutputJson("")
    setError("")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/products/toolsphere" className="inline-flex items-center text-sm font-medium text-orange-600 mb-6">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to ToolSphere
        </Link>

        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">JSON Formatter</h1>
          <p className="text-gray-600 mb-8">
            Format and validate JSON data with syntax highlighting and error detection.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Input JSON</h2>
                <div className="flex gap-2">
                  <Button onClick={formatJson} size="sm">
                    Format
                  </Button>
                  <Button onClick={minifyJson} variant="outline" size="sm">
                    Minify
                  </Button>
                </div>
              </div>
              <textarea
                value={inputJson}
                onChange={(e) => setInputJson(e.target.value)}
                placeholder='{"name": "example", "value": 123}'
                className="w-full h-96 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500 font-mono text-sm"
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Output JSON</h2>
                <div className="flex gap-2">
                  <Button onClick={copyToClipboard} variant="outline" size="sm" disabled={!outputJson}>
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
                value={outputJson}
                readOnly
                placeholder="Formatted JSON will appear here..."
                className="w-full h-96 p-3 border border-gray-300 rounded-md bg-gray-50 font-mono text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

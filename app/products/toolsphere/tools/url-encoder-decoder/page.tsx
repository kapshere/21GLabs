"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Copy, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function UrlEncoderDecoder() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [mode, setMode] = useState<"encode" | "decode">("encode")

  const processText = () => {
    try {
      if (mode === "encode") {
        const encoded = encodeURIComponent(inputText)
        setOutputText(encoded)
      } else {
        const decoded = decodeURIComponent(inputText)
        setOutputText(decoded)
      }
    } catch (err) {
      setOutputText("Error processing URL")
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText)
  }

  const reset = () => {
    setInputText("")
    setOutputText("")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/products/toolsphere" className="inline-flex items-center text-sm font-medium text-orange-600 mb-6">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to ToolSphere
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">URL Encoder/Decoder</h1>
          <p className="text-gray-600 mb-8">
            Encode and decode URLs to ensure they are properly formatted for web use.
          </p>

          <div className="bg-white rounded-lg shadow-sm border p-6 space-y-6">
            <div className="flex gap-4">
              <Button onClick={() => setMode("encode")} variant={mode === "encode" ? "default" : "outline"}>
                Encode
              </Button>
              <Button onClick={() => setMode("decode")} variant={mode === "decode" ? "default" : "outline"}>
                Decode
              </Button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {mode === "encode" ? "URL to Encode" : "URL to Decode"}
              </label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={mode === "encode" ? "Enter URL to encode..." : "Enter encoded URL to decode..."}
                className="w-full h-32 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={processText} disabled={!inputText}>
                {mode === "encode" ? "Encode URL" : "Decode URL"}
              </Button>
              <Button onClick={reset} variant="outline">
                <RotateCcw className="h-4 w-4 mr-1" />
                Reset
              </Button>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  {mode === "encode" ? "Encoded URL" : "Decoded URL"}
                </label>
                <Button onClick={copyToClipboard} variant="outline" size="sm" disabled={!outputText}>
                  <Copy className="h-4 w-4 mr-1" />
                  Copy
                </Button>
              </div>
              <textarea
                value={outputText}
                readOnly
                placeholder={mode === "encode" ? "Encoded URL will appear here..." : "Decoded URL will appear here..."}
                className="w-full h-32 p-3 border border-gray-300 rounded-md bg-gray-50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

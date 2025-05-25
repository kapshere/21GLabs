"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UrlEncoderDecoderPage() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [activeTab, setActiveTab] = useState("encode")
  const [error, setError] = useState("")

  const handleEncode = () => {
    if (!inputText) {
      setError("Please enter text to encode")
      return
    }
    try {
      const encoded = encodeURIComponent(inputText)
      setOutputText(encoded)
      setError("")
    } catch (err) {
      setError("Error encoding URL. Please check your input.")
    }
  }

  const handleDecode = () => {
    if (!inputText) {
      setError("Please enter URL encoded text to decode")
      return
    }
    try {
      const decoded = decodeURIComponent(inputText)
      setOutputText(decoded)
      setError("")
    } catch (err) {
      setError("Error decoding URL. Make sure it's properly encoded.")
    }
  }

  const handleProcess = () => {
    if (activeTab === "encode") {
      handleEncode()
    } else {
      handleDecode()
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mt-4">URL Encoder/Decoder</h1>
      <p className="text-neutral-600 mt-2 mb-6">
        Encode and decode URLs to ensure they are properly formatted for web use.
      </p>

      <Tabs defaultValue="encode" value={activeTab} onValueChange={setActiveTab} className="w-full mb-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="encode">Encode</TabsTrigger>
          <TabsTrigger value="decode">Decode</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <Label htmlFor="input-text">
              {activeTab === "encode" ? "Text to Encode" : "URL Encoded Text to Decode"}
            </Label>
            <Textarea
              id="input-text"
              placeholder={
                activeTab === "encode" ? "Enter text to URL encode..." : "Enter URL encoded text to decode..."
              }
              className="min-h-[200px]"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>

          {error && <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">{error}</div>}

          <Button className="w-full bg-brand-orange text-white hover:bg-brand-orange/90" onClick={handleProcess}>
            {activeTab === "encode" ? "Encode URL" : "Decode URL"}
          </Button>
        </div>

        <div className="space-y-4">
          <div>
            <Label htmlFor="output-text">Result</Label>
            <Textarea id="output-text" className="min-h-[200px]" value={outputText} readOnly />
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => {
                if (outputText) {
                  navigator.clipboard.writeText(outputText)
                }
              }}
            >
              Copy to Clipboard
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => {
                setInputText(outputText)
                setOutputText("")
                setActiveTab(activeTab === "encode" ? "decode" : "encode")
              }}
            >
              Use as Input
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

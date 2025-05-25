"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Base64EncoderDecoderPage() {
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
      const encoded = btoa(inputText)
      setOutputText(encoded)
      setError("")
    } catch (err) {
      setError("Error encoding text. Make sure it contains valid characters.")
    }
  }

  const handleDecode = () => {
    if (!inputText) {
      setError("Please enter Base64 to decode")
      return
    }
    try {
      const decoded = atob(inputText)
      setOutputText(decoded)
      setError("")
    } catch (err) {
      setError("Error decoding Base64. Make sure it's valid Base64 format.")
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
      <h1 className="text-3xl font-bold mt-4">Base64 Encoder/Decoder</h1>
      <p className="text-neutral-600 mt-2 mb-6">
        Encode text to Base64 or decode Base64 to text with support for various character sets.
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
            <Label htmlFor="input-text">{activeTab === "encode" ? "Text to Encode" : "Base64 to Decode"}</Label>
            <Textarea
              id="input-text"
              placeholder={activeTab === "encode" ? "Enter text to encode..." : "Enter Base64 to decode..."}
              className="min-h-[200px]"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>

          {error && <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">{error}</div>}

          <Button className="w-full bg-brand-orange text-white hover:bg-brand-orange/90" onClick={handleProcess}>
            {activeTab === "encode" ? "Encode to Base64" : "Decode from Base64"}
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

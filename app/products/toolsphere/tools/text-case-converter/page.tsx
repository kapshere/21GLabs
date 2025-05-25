"use client"

import { useState } from "react"
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
    <div>
      <h1 className="text-3xl font-bold mt-4">Text Case Converter</h1>
      <p className="text-neutral-600 mt-2 mb-6">
        Convert text between different cases: lowercase, UPPERCASE, Title Case, and more.
      </p>

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
  )
}

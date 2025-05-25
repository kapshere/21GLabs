"use client"

import { useState } from "react"
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
    <div>
      <h1 className="text-3xl font-bold mt-4">JSON Formatter</h1>
      <p className="text-neutral-600 mt-2 mb-6">
        Format and validate JSON data with syntax highlighting and error detection.
      </p>

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

          {error && <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">{error}</div>}

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
  )
}

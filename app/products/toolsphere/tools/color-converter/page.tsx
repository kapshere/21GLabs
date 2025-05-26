"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ColorConverter() {
  const [hexColor, setHexColor] = useState("#ff6b35")
  const [rgbColor, setRgbColor] = useState("rgb(255, 107, 53)")
  const [hslColor, setHslColor] = useState("hsl(16, 100%, 60%)")

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: Number.parseInt(result[1], 16),
          g: Number.parseInt(result[2], 16),
          b: Number.parseInt(result[3], 16),
        }
      : null
  }

  const rgbToHex = (r: number, g: number, b: number) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  }

  const updateFromHex = (hex: string) => {
    setHexColor(hex)
    const rgb = hexToRgb(hex)
    if (rgb) {
      setRgbColor(`rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`)
      // Simple HSL conversion approximation
      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b)
      setHslColor(`hsl(${Math.round(hsl.h)}, ${Math.round(hsl.s)}%, ${Math.round(hsl.l)}%)`)
    }
  }

  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255
    g /= 255
    b /= 255
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h = 0,
      s = 0,
      l = (max + min) / 2

    if (max === min) {
      h = s = 0
    } else {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0)
          break
        case g:
          h = (b - r) / d + 2
          break
        case b:
          h = (r - g) / d + 4
          break
      }
      h /= 6
    }

    return { h: h * 360, s: s * 100, l: l * 100 }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/products/toolsphere" className="inline-flex items-center text-sm font-medium text-orange-600 mb-6">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to ToolSphere
        </Link>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Color Converter</h1>
          <p className="text-gray-600 mb-8">
            Convert colors between different formats: HEX, RGB, HSL with real-time preview.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-sm border p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Color Picker</label>
                <input
                  type="color"
                  value={hexColor}
                  onChange={(e) => updateFromHex(e.target.value)}
                  className="w-full h-20 border border-gray-300 rounded-md cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">HEX</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={hexColor}
                    onChange={(e) => updateFromHex(e.target.value)}
                    className="flex-1 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                  <Button onClick={() => copyToClipboard(hexColor)} variant="outline" size="sm">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">RGB</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={rgbColor}
                    readOnly
                    className="flex-1 p-3 border border-gray-300 rounded-md bg-gray-50"
                  />
                  <Button onClick={() => copyToClipboard(rgbColor)} variant="outline" size="sm">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">HSL</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={hslColor}
                    readOnly
                    className="flex-1 p-3 border border-gray-300 rounded-md bg-gray-50"
                  />
                  <Button onClick={() => copyToClipboard(hslColor)} variant="outline" size="sm">
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-lg font-semibold mb-4">Color Preview</h2>
              <div
                className="w-full h-64 rounded-lg border border-gray-300"
                style={{ backgroundColor: hexColor }}
              ></div>
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <p className="text-sm text-gray-600">
                  <strong>HEX:</strong> {hexColor}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>RGB:</strong> {rgbColor}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>HSL:</strong> {hslColor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

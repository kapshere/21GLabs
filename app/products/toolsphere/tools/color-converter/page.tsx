"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ColorConverterPage() {
  const [hexColor, setHexColor] = useState("#6b9ac4")
  const [rgbColor, setRgbColor] = useState({ r: 107, g: 154, b: 196 })
  const [hslColor, setHslColor] = useState({ h: 210, s: 42, l: 59 })
  const [activeTab, setActiveTab] = useState("hex")
  const [error, setError] = useState("")

  // Convert hex to RGB
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    if (!result) return null
    return {
      r: Number.parseInt(result[1], 16),
      g: Number.parseInt(result[2], 16),
      b: Number.parseInt(result[3], 16),
    }
  }

  // Convert RGB to hex
  const rgbToHex = (r: number, g: number, b: number) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
  }

  // Convert RGB to HSL
  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255
    g /= 255
    b /= 255
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h = 0
    let s = 0
    const l = (max + min) / 2

    if (max !== min) {
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

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    }
  }

  // Convert HSL to RGB
  const hslToRgb = (h: number, s: number, l: number) => {
    h /= 360
    s /= 100
    l /= 100
    let r, g, b

    if (s === 0) {
      r = g = b = l
    } else {
      const hue2rgb = (p: number, q: number, t: number) => {
        if (t < 0) t += 1
        if (t > 1) t -= 1
        if (t < 1 / 6) return p + (q - p) * 6 * t
        if (t < 1 / 2) return q
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
        return p
      }

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p = 2 * l - q
      r = hue2rgb(p, q, h + 1 / 3)
      g = hue2rgb(p, q, h)
      b = hue2rgb(p, q, h - 1 / 3)
    }

    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255),
    }
  }

  // Update all colors when hex changes
  const updateFromHex = (hex: string) => {
    if (!/^#[0-9A-F]{6}$/i.test(hex)) {
      setError("Invalid HEX color format. Use #RRGGBB")
      return
    }
    setError("")
    setHexColor(hex)
    const rgb = hexToRgb(hex)
    if (rgb) {
      setRgbColor(rgb)
      setHslColor(rgbToHsl(rgb.r, rgb.g, rgb.b))
    }
  }

  // Update all colors when RGB changes
  const updateFromRgb = (r: number, g: number, b: number) => {
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
      setError("RGB values must be between 0 and 255")
      return
    }
    setError("")
    const newRgb = { r, g, b }
    setRgbColor(newRgb)
    setHexColor(rgbToHex(r, g, b))
    setHslColor(rgbToHsl(r, g, b))
  }

  // Update all colors when HSL changes
  const updateFromHsl = (h: number, s: number, l: number) => {
    if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100) {
      setError("HSL values must be: H(0-360), S(0-100), L(0-100)")
      return
    }
    setError("")
    const newHsl = { h, s, l }
    setHslColor(newHsl)
    const rgb = hslToRgb(h, s, l)
    setRgbColor(rgb)
    setHexColor(rgbToHex(rgb.r, rgb.g, rgb.b))
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mt-4">Color Converter</h1>
      <p className="text-neutral-600 mt-2 mb-6">Convert colors between different formats: HEX, RGB, HSL, and more.</p>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <Tabs defaultValue="hex" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="hex">HEX</TabsTrigger>
              <TabsTrigger value="rgb">RGB</TabsTrigger>
              <TabsTrigger value="hsl">HSL</TabsTrigger>
            </TabsList>
            <TabsContent value="hex" className="space-y-4 pt-4">
              <div>
                <Label htmlFor="hex-input">HEX Color</Label>
                <Input
                  id="hex-input"
                  value={hexColor}
                  onChange={(e) => updateFromHex(e.target.value)}
                  placeholder="#RRGGBB"
                />
              </div>
            </TabsContent>
            <TabsContent value="rgb" className="space-y-4 pt-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="rgb-r">R</Label>
                  <Input
                    id="rgb-r"
                    type="number"
                    min="0"
                    max="255"
                    value={rgbColor.r}
                    onChange={(e) => updateFromRgb(Number.parseInt(e.target.value), rgbColor.g, rgbColor.b)}
                  />
                </div>
                <div>
                  <Label htmlFor="rgb-g">G</Label>
                  <Input
                    id="rgb-g"
                    type="number"
                    min="0"
                    max="255"
                    value={rgbColor.g}
                    onChange={(e) => updateFromRgb(rgbColor.r, Number.parseInt(e.target.value), rgbColor.b)}
                  />
                </div>
                <div>
                  <Label htmlFor="rgb-b">B</Label>
                  <Input
                    id="rgb-b"
                    type="number"
                    min="0"
                    max="255"
                    value={rgbColor.b}
                    onChange={(e) => updateFromRgb(rgbColor.r, rgbColor.g, Number.parseInt(e.target.value))}
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="hsl" className="space-y-4 pt-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="hsl-h">H</Label>
                  <Input
                    id="hsl-h"
                    type="number"
                    min="0"
                    max="360"
                    value={hslColor.h}
                    onChange={(e) => updateFromHsl(Number.parseInt(e.target.value), hslColor.s, hslColor.l)}
                  />
                </div>
                <div>
                  <Label htmlFor="hsl-s">S%</Label>
                  <Input
                    id="hsl-s"
                    type="number"
                    min="0"
                    max="100"
                    value={hslColor.s}
                    onChange={(e) => updateFromHsl(hslColor.h, Number.parseInt(e.target.value), hslColor.l)}
                  />
                </div>
                <div>
                  <Label htmlFor="hsl-l">L%</Label>
                  <Input
                    id="hsl-l"
                    type="number"
                    min="0"
                    max="100"
                    value={hslColor.l}
                    onChange={(e) => updateFromHsl(hslColor.h, hslColor.s, Number.parseInt(e.target.value))}
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {error && <div className="p-3 bg-red-50 border border-red-200 rounded-md text-red-600 text-sm">{error}</div>}
        </div>

        <div className="space-y-4">
          <div className="aspect-square rounded-lg overflow-hidden border">
            <div
              className="w-full h-full"
              style={{ backgroundColor: hexColor }}
              aria-label={`Color preview: ${hexColor}`}
            ></div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>HEX</Label>
              <div className="p-2 bg-gray-100 rounded text-center font-mono">{hexColor}</div>
            </div>
            <div className="space-y-2">
              <Label>RGB</Label>
              <div className="p-2 bg-gray-100 rounded text-center font-mono">
                {`${rgbColor.r},${rgbColor.g},${rgbColor.b}`}
              </div>
            </div>
            <div className="space-y-2">
              <Label>HSL</Label>
              <div className="p-2 bg-gray-100 rounded text-center font-mono">
                {`${hslColor.h},${hslColor.s}%,${hslColor.l}%`}
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              let textToCopy = ""
              switch (activeTab) {
                case "hex":
                  textToCopy = hexColor
                  break
                case "rgb":
                  textToCopy = `rgb(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b})`
                  break
                case "hsl":
                  textToCopy = `hsl(${hslColor.h}, ${hslColor.s}%, ${hslColor.l}%)`
                  break
              }
              navigator.clipboard.writeText(textToCopy)
            }}
          >
            Copy Current Format
          </Button>
        </div>
      </div>
    </div>
  )
}

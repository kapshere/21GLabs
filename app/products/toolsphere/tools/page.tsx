"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

// Import all tool components
import Base64Encoder from "./Base64Encoder"
import Calculator from "./Calculator"
import CharacterCounter from "./CharacterCounter"
import CoinFlipper from "./CoinFlipper"
import ColorPicker from "./ColorPicker"
import CsvViewer from "./CsvViewer"
import DateCalculator from "./DateCalculator"
import DiceRoller from "./DiceRoller"
import HashGenerator from "./HashGenerator"
import ImageCompressor from "./ImageCompressor"
import JsonFormatter from "./JsonFormatter"
import MarkdownEditor from "./MarkdownEditor"
import NumberGuessingGame from "./NumberGuessingGame"
import PDFCompressor from "./PDFCompressor"
import PDFMerger from "./PDFMerger"
import PDFSplitter from "./PDFSplitter"
import PDFTextExtractor from "./PDFTextExtractor"
import PDFToImage from "./PDFToImage"
import PasswordGenerator from "./PasswordGenerator"
import PercentageCalculator from "./PercentageCalculator"
import QrGenerator from "./QrGenerator"
import RegexTester from "./RegexTester"
import RockPaperScissors from "./RockPaperScissors"
import TextCaseConverter from "./TextCaseConverter"
import UnitConverter from "./UnitConverter"
import UrlEncoder from "./UrlEncoder"

const tools = [
  { name: "Base64 Encoder/Decoder", component: Base64Encoder, slug: "base64-encoder" },
  { name: "Calculator", component: Calculator, slug: "calculator" },
  { name: "Character Counter", component: CharacterCounter, slug: "character-counter" },
  { name: "Coin Flipper", component: CoinFlipper, slug: "coin-flipper" },
  { name: "Color Picker", component: ColorPicker, slug: "color-picker" },
  { name: "CSV Viewer", component: CsvViewer, slug: "csv-viewer" },
  { name: "Date Calculator", component: DateCalculator, slug: "date-calculator" },
  { name: "Dice Roller", component: DiceRoller, slug: "dice-roller" },
  { name: "Hash Generator", component: HashGenerator, slug: "hash-generator" },
  { name: "Image Compressor", component: ImageCompressor, slug: "image-compressor" },
  { name: "JSON Formatter", component: JsonFormatter, slug: "json-formatter" },
  { name: "Markdown Editor", component: MarkdownEditor, slug: "markdown-editor" },
  { name: "Number Guessing Game", component: NumberGuessingGame, slug: "number-guessing-game" },
  { name: "PDF Compressor", component: PDFCompressor, slug: "pdf-compressor" },
  { name: "PDF Merger", component: PDFMerger, slug: "pdf-merger" },
  { name: "PDF Splitter", component: PDFSplitter, slug: "pdf-splitter" },
  { name: "PDF Text Extractor", component: PDFTextExtractor, slug: "pdf-text-extractor" },
  { name: "PDF to Image", component: PDFToImage, slug: "pdf-to-image" },
  { name: "Password Generator", component: PasswordGenerator, slug: "password-generator" },
  { name: "Percentage Calculator", component: PercentageCalculator, slug: "percentage-calculator" },
  { name: "QR Generator", component: QrGenerator, slug: "qr-generator" },
  { name: "Regex Tester", component: RegexTester, slug: "regex-tester" },
  { name: "Rock Paper Scissors", component: RockPaperScissors, slug: "rock-paper-scissors" },
  { name: "Text Case Converter", component: TextCaseConverter, slug: "text-case-converter" },
  { name: "Unit Converter", component: UnitConverter, slug: "unit-converter" },
  { name: "URL Encoder/Decoder", component: UrlEncoder, slug: "url-encoder" },
]

export default function ToolsIndexPage() {
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
        <div className="container px-4 py-8">
          <Link
            href="/products/toolsphere"
            className="inline-flex items-center text-sm font-medium text-brand-orange mb-6"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to ToolSphere
          </Link>

          <h1 className="text-3xl font-bold mb-8">ToolSphere Tools</h1>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/products/toolsphere/tools/${tool.slug}`}
                className="rounded-lg border p-4 hover:shadow-md transition-all duration-300 hover:shadow-brand-orange/10"
              >
                <h3 className="font-bold">{tool.name}</h3>
              </Link>
            ))}
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
        </div>
      </footer>
    </div>
  )
}

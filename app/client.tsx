"use client"

import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <style jsx global>{`
            :root {
              --brand-blue: 107, 154, 196;
              --brand-orange: 244, 162, 97;
              --brand-green: 132, 181, 159;
            }
          `}</style>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import type React from "react"
import ClientComponent from "./client"
import "./globals.css"

export const metadata = {
  title: "21GLabs - Emerging Technology Solutions",
  description: "Innovative B2B and B2C technology products designed for the future",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientComponent>{children}</ClientComponent>
}

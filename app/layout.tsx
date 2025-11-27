import type React from "react"
import type { Metadata } from "next"
import { Quicksand, Alumni_Sans_Pinstripe, Babylonica, Poiret_One } from 'next/font/google'
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _quicksand = Quicksand({
  weight: "400",
  subsets: ["latin"],
})

export const babylonica = Babylonica({
  weight: "400",
  subsets: ["latin"],
})

export const poiret = Poiret_One({
  weight: "400",
  subsets: ["latin"],
})

export const alumniSansPinstripe = Alumni_Sans_Pinstripe({
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Maria Nadjem - Portfolio",
  description: "",
  generator: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_quicksand.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

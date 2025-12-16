import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/general/navbar"
import Container from "@/components/general/container"
import ReactQueryProvider from "@/components/general/react-query-provider"
import { Toaster } from "sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "TaskFlow",
  description: "Collaborative Task Manager",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReactQueryProvider>
          <Toaster/>
          <Container>{children}</Container>
        </ReactQueryProvider>
      </body>
    </html>
  )
}

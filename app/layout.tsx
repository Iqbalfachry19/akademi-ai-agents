import "./globals.css"
import { Inter } from "next/font/google"
import { AIAgentChat } from "@/components/ai-agent-chat"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Akademi AI Agents",
  description: "Pelajari cara membuat dan menggunakan AI Agents",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <AIAgentChat />
      </body>
    </html>
  )
}



import './globals.css'
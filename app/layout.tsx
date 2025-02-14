import "./globals.css";
import { Inter } from "next/font/google";
import { AIAgentChat } from "@/components/ai-agent-chat";
import type React from "react"; // Added import for React

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Akademi AI Agents",
  description: "Pelajari cara membuat dan menggunakan AI Agents",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="px-4 lg:px-6 h-16 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <Brain className="h-6 w-6 mr-2" />
            <span className="font-bold">Akademi AI Agents</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/kursus"
            >
              Kursus
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Tentang Kami
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Kontak
            </Link>
          </nav>
        </header>
        {children}
        <AIAgentChat />
      </body>
    </html>
  );
}

import "./globals.css";
import Link from "next/link";
import { Brain } from "lucide-react";

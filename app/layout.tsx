import "./globals.css";
import Link from "next/link";
import { Brain } from "lucide-react";
import { Inter } from "next/font/google";
import React from "react";
import { AIAgentChat } from "@/components/ai-agent-chat";

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
      <body className={`${inter.className} flex flex-col min-h-screen`}>
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
              href="#pricing"
            >
              Harga
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#about"
            >
              Tentang Kami
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#contact"
            >
              Kontak
            </Link>
          </nav>
        </header>
        <main className="flex-grow">{children}</main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2025 Akademi AI Agents. Hak Cipta Dilindungi.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Kebijakan Privasi
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Syarat & Ketentuan
            </Link>
          </nav>
        </footer>
        <AIAgentChat />
      </body>
    </html>
  );
}

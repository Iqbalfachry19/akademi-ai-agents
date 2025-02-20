import "./globals.css";
import Link from "next/link";
import { Brain } from "lucide-react";
import { Inter } from "next/font/google";
import React from "react";
import { AIAgentChat } from "@/components/ai-agent-chat";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <AIAgentChat />
      </body>
    </html>
  );
}

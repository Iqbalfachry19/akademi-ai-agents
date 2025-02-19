"use client";

import { Brain, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-white dark:bg-gray-900 border-b">
      <Link
        className="flex items-center text-gray-900 dark:text-white"
        href="/"
      >
        <Brain className="h-6 w-6 mr-2" />
        <span className="font-bold">Akademi AI Agents</span>
      </Link>
      <button
        className="sm:hidden p-2 text-gray-900 dark:text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      <nav
        className={`absolute sm:relative sm:top-0 top-16  left-0 w-full sm:w-auto bg-white dark:bg-gray-900 shadow-md sm:shadow-none sm:flex items-center gap-4 sm:gap-6 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible sm:opacity-100 sm:visible"
        }`}
      >
        <ul className="flex flex-col sm:flex-row w-full sm:w-auto text-center sm:text-left">
          <li>
            <Link
              className="block sm:inline px-4 py-2 text-sm font-medium text-gray-900 dark:text-white hover:underline"
              href="/kursus"
            >
              Kursus
            </Link>
          </li>
          <li>
            <Link
              className="block sm:inline px-4 py-2 text-sm font-medium text-gray-900 dark:text-white hover:underline"
              href="/harga"
            >
              Harga
            </Link>
          </li>
          <li>
            <Link
              className="block sm:inline px-4 py-2 text-sm font-medium text-gray-900 dark:text-white hover:underline"
              href="/tentang"
            >
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link
              className="block sm:inline px-4 py-2 text-sm font-medium text-gray-900 dark:text-white hover:underline"
              href="/kontak"
            >
              Kontak
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

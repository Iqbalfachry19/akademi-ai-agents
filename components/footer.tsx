import Link from "next/link";
import React from "react";
import {
  Brain,
  Code,
  Users,
  Zap,
  Rocket,
  GraduationCap,
  ArrowRight,
  Clock,
  BarChartIcon,
  Check,
  Twitter,
  Github,
  Youtube,
  DiscIcon as Discord,
} from "lucide-react";
function footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-8 py-12 px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Kursus</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-primary"
                >
                  AI Agents
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-primary"
                >
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-primary"
                >
                  Deep Learning
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-500 hover:text-primary"
                >
                  Python
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Perusahaan</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tentang"
                  className="text-sm text-gray-500 hover:text-primary"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak"
                  className="text-sm text-gray-500 hover:text-primary"
                >
                  Kontak
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/karir"
                  className="text-sm text-gray-500 hover:text-primary"
                >
                  Karir
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-gray-500 hover:text-primary"
                >
                  Blog
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/kebijakan-privasi"
                  className="text-sm text-gray-500 hover:text-primary"
                >
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <Link
                  href="/syarat-ketentuan"
                  className="text-sm text-gray-500 hover:text-primary"
                >
                  Syarat & Ketentuan
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Komunitas</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://discord.gg/vmyay3v7"
                  className="text-sm text-gray-500 hover:text-primary"
                >
                  Discord
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <Link href="#">
              <Brain className="h-6 w-6 text-primary" />
            </Link>
            <p className="text-sm text-gray-500">
              © 2025 Akademi AI Agents. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;

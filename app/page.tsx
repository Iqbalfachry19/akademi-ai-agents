import { Button } from "@/components/ui/button";
import {
  Brain,
  Code,
  Users,
  Zap,
  Rocket,
  GraduationCap,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Akademi AI Agents
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Pelajari cara membuat dan menggunakan AI Agents untuk
                  meningkatkan produktivitas dan inovasi Anda.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="/kursus">Mulai Belajar</Link>
                </Button>
                <Button variant="outline">Pelajari Lebih Lanjut</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Fitur Utama
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 bg-gray-50 p-6 rounded-lg shadow-sm">
                <Code className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-center">
                  Kurikulum Komprehensif
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Dari dasar-dasar Python hingga Physical AI, kurikulum kami
                  mencakup spektrum lengkap pengembangan AI.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 bg-gray-50 p-6 rounded-lg shadow-sm">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-center">
                  Pembelajaran Interaktif
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Pengalaman belajar hands-on dengan proyek praktis dan
                  kolaborasi sesama peserta.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 bg-gray-50 p-6 rounded-lg shadow-sm">
                <Zap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-center">
                  Teknologi Terkini
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Pelajari teknologi AI terbaru, termasuk LLM, Generative AI,
                  dan framework seperti Zerepy dan ElizaOS.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 bg-gray-50 p-6 rounded-lg shadow-sm">
                <GraduationCap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-center">
                  Instruktur Ahli
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Belajar dari para ahli industri dan akademisi terkemuka di
                  bidang AI dan Data Science.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 bg-gray-50 p-6 rounded-lg shadow-sm">
                <Rocket className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-center">
                  Pengembangan Karir
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Persiapkan diri Anda untuk karir di bidang AI dengan
                  portofolio proyek dan sertifikasi industri.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 bg-gray-50 p-6 rounded-lg shadow-sm">
                <Brain className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-center">
                  AI Agents Spesialisasi
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Fokus khusus pada pengembangan dan optimasi AI Agents untuk
                  berbagai aplikasi.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Pilihan Harga
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Basic</h3>
                <p className="text-4xl font-bold text-center mb-6">Free</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                    Akses ke 5 kursus dasar
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                    Forum diskusi
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                    Sertifikat kelulusan
                  </li>
                </ul>
                <Button className="mt-auto">Pilih Paket</Button>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg border-2 border-primary">
                <h3 className="text-2xl font-bold text-center mb-4">Pro</h3>
                <p className="text-4xl font-bold text-center mb-6">
                  Rp 2.000.000
                  <span className="text-sm font-normal">/bulan</span>
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                    Akses ke semua kursus
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                    Proyek praktis dengan review
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                    Mentoring 1-on-1
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                    Sertifikat keahlian
                  </li>
                </ul>
                <Button className="mt-auto">Pilih Paket</Button>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">
                  Enterprise
                </h3>
                <p className="text-4xl font-bold text-center mb-6">
                  Rp 20.000.000
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                    Akses kursus lifetime
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                    Solusi kustom untuk perusahaan
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                    Pelatihan tim
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />{" "}
                    Integrasi dengan sistem Anda
                  </li>
                </ul>
                <Button className="mt-auto">Hubungi Kami</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              Bergabung dengan Komunitas Kami
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
              Diskusikan, belajar, dan berkembang bersama dalam komunitas AI
              Agents kami di Discord.
            </p>
            <Button asChild size="lg">
              <Link
                href="https://discord.gg/uRxP7TxT"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gabung Discord
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}

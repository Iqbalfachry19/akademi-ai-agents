import { Button } from "@/components/ui/button"
import { Brain, Code, Users, Zap, Rocket, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Brain className="h-6 w-6 mr-2" />
          <span className="font-bold">Akademi AI Agents</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/kursus">
            Kursus
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Tentang Kami
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Kontak
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Akademi AI Agents
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Pelajari cara membuat dan menggunakan AI Agents untuk meningkatkan produktivitas dan inovasi Anda.
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
                <h3 className="text-xl font-bold text-center">Kurikulum Komprehensif</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Dari dasar-dasar Python hingga Physical AI, kurikulum kami mencakup spektrum lengkap pengembangan AI.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 bg-gray-50 p-6 rounded-lg shadow-sm">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-center">Pembelajaran Interaktif</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Pengalaman belajar hands-on dengan proyek praktis dan kolaborasi sesama peserta.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 bg-gray-50 p-6 rounded-lg shadow-sm">
                <Zap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-center">Teknologi Terkini</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Pelajari teknologi AI terbaru, termasuk LLM, Generative AI, dan framework seperti Zerepy dan ElizaOS.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 bg-gray-50 p-6 rounded-lg shadow-sm">
                <GraduationCap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-center">Instruktur Ahli</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Belajar dari para ahli industri dan akademisi terkemuka di bidang AI dan Data Science.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 bg-gray-50 p-6 rounded-lg shadow-sm">
                <Rocket className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-center">Pengembangan Karir</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Persiapkan diri Anda untuk karir di bidang AI dengan portofolio proyek dan sertifikasi industri.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 bg-gray-50 p-6 rounded-lg shadow-sm">
                <Brain className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold text-center">AI Agents Spesialisasi</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Fokus khusus pada pengembangan dan optimasi AI Agents untuk berbagai aplikasi.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Akademi AI Agents. Hak Cipta Dilindungi.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Kebijakan Privasi
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Syarat & Ketentuan
          </Link>
        </nav>
      </footer>
    </div>
  )
}


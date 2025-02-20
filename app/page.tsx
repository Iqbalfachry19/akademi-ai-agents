import { Button } from "@/components/ui/button";
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
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white via-primary/5 to-transparent dark:from-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="mb-4">
                  ✨ Platform Pembelajaran AI di Indonesia
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none  ">
                  Akademi AI Agents
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
                  Pelajari cara membuat dan menggunakan AI Agents untuk
                  meningkatkan produktivitas dan inovasi Anda bersama instruktur
                  berpengalaman.
                </p>
              </div>
              <div className="space-x-4">
                <Link href={"/kursus"}>
                  <Button size="lg" className="group">
                    Mulai Belajar
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href={"/tentang"}>
                  <Button variant="outline" size="lg">
                    Pelajari Lebih Lanjut
                  </Button>
                </Link>
              </div>
              {/* <div className="mt-8 grid grid-cols-3 gap-4 md:gap-8 text-center">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold">50+</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Instruktur Ahli
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold">10K+</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Siswa Aktif
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold">95%</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Tingkat Kepuasan
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Fitur Unggulan
              </h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl">
                Pelajari AI dengan cara yang lebih efektif dan menyenangkan
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-primary transition-colors">
                <div className="flex flex-col space-y-2">
                  <Code className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold">Kurikulum Komprehensif</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Dari dasar-dasar Python hingga Physical AI, kurikulum kami
                    mencakup spektrum lengkap pengembangan AI.
                  </p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-lg transition-colors" />
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-primary transition-colors">
                <div className="flex flex-col space-y-2">
                  <Users className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold">Pembelajaran Interaktif</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Pengalaman belajar hands-on dengan proyek praktis dan
                    kolaborasi sesama peserta.
                  </p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-lg transition-colors" />
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-primary transition-colors">
                <div className="flex flex-col space-y-2">
                  <Zap className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold">Teknologi Terkini</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Pelajari teknologi AI terbaru, termasuk LLM, Generative AI,
                    dan framework seperti Zerepy dan ElizaOS.
                  </p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-lg transition-colors" />
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-primary transition-colors">
                <div className="flex flex-col space-y-2">
                  <GraduationCap className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold">Instruktur Ahli</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Belajar dari para ahli industri dan akademisi terkemuka di
                    bidang AI dan Data Science.
                  </p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-lg transition-colors" />
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-primary transition-colors">
                <div className="flex flex-col space-y-2">
                  <Rocket className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold">Pengembangan Karir</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Persiapkan diri Anda untuk karir di bidang AI dengan
                    portofolio proyek dan sertifikasi industri.
                  </p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-lg transition-colors" />
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-primary transition-colors">
                <div className="flex flex-col space-y-2">
                  <Brain className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold">AI Agents Spesialisasi</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Fokus khusus pada pengembangan dan optimasi AI Agents untuk
                    berbagai aplikasi.
                  </p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary rounded-lg transition-colors" />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Kursus Populer
              </h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl">
                Mulai perjalanan Anda dalam AI dengan kursus-kursus unggulan
                kami
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Link href="/kursus/dasar-dasar-python" className="group">
                <div className="relative overflow-hidden rounded-lg border bg-background transition-all hover:border-primary hover:shadow-lg">
                  <div className="p-6">
                    <Code className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <Badge className="mb-4">Pemula</Badge>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      Dasar-dasar Python
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      Pelajari fundamental bahasa pemrograman Python untuk AI
                      dan Data Science.
                    </p>
                    <div className="flex items-center justify-between">
                      {/* <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-500">
                          2,500+ siswa
                        </span>
                      </div> */}
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-500">6 minggu</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/kursus/dasar-dasar-ai-agents" className="group">
                <div className="relative overflow-hidden rounded-lg border bg-background transition-all hover:border-primary hover:shadow-lg">
                  <div className="p-6">
                    <Brain className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <Badge className="mb-4">Pemula</Badge>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      Dasar-dasar AI Agents
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      Pelajari konsep dasar AI Agents dan cara kerjanya.
                    </p>
                    <div className="flex items-center justify-between">
                      {/* <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-500">
                          1,800+ siswa
                        </span>
                      </div> */}
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-500">4 minggu</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href="/kursus/machine-learning-fundamental"
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg border bg-background transition-all hover:border-primary hover:shadow-lg">
                  <div className="p-6">
                    <BarChartIcon className="h-10 w-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                    <Badge className="mb-4">Menengah</Badge>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      Machine Learning Fundamental
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      Kuasai konsep dan algoritma dasar Machine Learning.
                    </p>
                    <div className="flex items-center justify-between">
                      {/* <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-500">
                          3,200+ siswa
                        </span>
                      </div> */}
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-500">10 minggu</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="text-center mt-12">
              <Link href="/kursus">
                <Button size="lg" variant="outline" className="group">
                  Lihat Semua Kursus
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

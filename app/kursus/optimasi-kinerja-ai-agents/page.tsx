import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, Code, GraduationCap } from "lucide-react"

export default function OptimasiKinerjaAIAgentsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Optimasi Kinerja AI Agents dengan Zerepy</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        <Card>
          <CardHeader>
            <Clock className="w-8 h-8 mb-2" />
            <CardTitle>Durasi</CardTitle>
            <CardDescription>6 minggu</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <GraduationCap className="w-8 h-8 mb-2" />
            <CardTitle>Tingkat</CardTitle>
            <CardDescription>Lanjutan</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Calendar className="w-8 h-8 mb-2" />
            <CardTitle>Mulai</CardTitle>
            <CardDescription>1 September 2024</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Code className="w-8 h-8 mb-2" />
            <CardTitle>Framework</CardTitle>
            <CardDescription>Zerepy</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Deskripsi Kursus</h2>
          <p className="mb-4">
            Kursus "Optimasi Kinerja AI Agents dengan Zerepy" dirancang untuk pengembang AI yang ingin meningkatkan
            efisiensi dan kinerja AI Agents mereka. Dalam kursus ini, Anda akan mempelajari teknik-teknik lanjutan
            optimasi menggunakan framework Zerepy, sebuah framework inovatif untuk pengembangan AI Agents yang efisien.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Silabus</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Minggu 1: Pengenalan Zerepy dan Konsep Dasar Optimasi AI Agents</li>
            <li>Minggu 2: Arsitektur Zerepy dan Implementasi Dasar</li>
            <li>Minggu 3: Teknik Optimasi Memori dan Komputasi dengan Zerepy</li>
            <li>Minggu 4: Paralelisasi dan Distribusi AI Agents menggunakan Zerepy</li>
            <li>Minggu 5: Optimasi Model dan Hyperparameter Tuning</li>
            <li>Minggu 6: Proyek Akhir - Implementasi AI Agent yang Dioptimalkan</li>
          </ul>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Daftar Kursus</CardTitle>
            <CardDescription>Isi formulir di bawah untuk mendaftar</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Nama</Label>
                  <Input id="name" placeholder="Masukkan nama Anda" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Masukkan email Anda" type="email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="experience">Pengalaman AI</Label>
                  <Input id="experience" placeholder="Jelaskan pengalaman Anda dengan AI" />
                </div>
                <Button className="w-full">Daftar Sekarang</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, Code, GraduationCap } from "lucide-react"

export default function DasarDasarPythonPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Dasar-dasar Python</h1>

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
            <CardDescription>Pemula</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Calendar className="w-8 h-8 mb-2" />
            <CardTitle>Mulai</CardTitle>
            <CardDescription>1 Juli 2024</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Code className="w-8 h-8 mb-2" />
            <CardTitle>Fokus</CardTitle>
            <CardDescription>Python</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Deskripsi Kursus</h2>
          <p className="mb-4">
            Kursus "Dasar-dasar Python" dirancang untuk memperkenalkan Anda pada fundamental bahasa pemrograman Python,
            dengan fokus pada aplikasi dalam AI dan Data Science. Anda akan mempelajari sintaks dasar, struktur data,
            dan konsep pemrograman yang diperlukan untuk memulai perjalanan Anda dalam AI dan Data Science.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Silabus</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Minggu 1: Pengenalan Python dan Lingkungan Pengembangan</li>
            <li>Minggu 2: Tipe Data, Variabel, dan Operasi Dasar</li>
            <li>Minggu 3: Struktur Kontrol (if, for, while) dan Fungsi</li>
            <li>Minggu 4: List, Tuple, Dictionary, dan Set</li>
            <li>Minggu 5: Pemrograman Berorientasi Objek dalam Python</li>
            <li>Minggu 6: Pengenalan Modul Python untuk Data Science (NumPy, Pandas)</li>
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
                  <Label htmlFor="background">Latar Belakang</Label>
                  <Input id="background" placeholder="Jelaskan latar belakang Anda" />
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


import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, GraduationCap, Box } from "lucide-react"

export default function MenggunakanElizaOSFrameworkPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Menggunakan ElizaOS Framework</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        <Card>
          <CardHeader>
            <Clock className="w-8 h-8 mb-2" />
            <CardTitle>Durasi</CardTitle>
            <CardDescription>8 minggu</CardDescription>
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
            <CardDescription>1 Oktober 2024</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Box className="w-8 h-8 mb-2" />
            <CardTitle>Framework</CardTitle>
            <CardDescription>ElizaOS</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Deskripsi Kursus</h2>
          <p className="mb-4">
            Kursus "Menggunakan ElizaOS Framework" dirancang untuk pengembang AI yang ingin menguasai ElizaOS, sebuah
            framework canggih untuk pengembangan AI Agents. Anda akan mempelajari cara memanfaatkan fitur-fitur unik
            ElizaOS untuk membuat AI Agents yang lebih cerdas dan efisien.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Silabus</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Minggu 1-2: Pengenalan ElizaOS dan Arsitektur Dasar</li>
            <li>Minggu 3-4: Pengembangan AI Agents dengan ElizaOS API</li>
            <li>Minggu 5-6: Integrasi Modul Kecerdasan Buatan Lanjutan</li>
            <li>Minggu 7: Optimasi dan Debugging AI Agents di ElizaOS</li>
            <li>Minggu 8: Proyek Akhir - Membangun AI Agent Kompleks dengan ElizaOS</li>
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


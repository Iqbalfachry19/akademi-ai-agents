import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, BotIcon as Robot, GraduationCap } from "lucide-react"

export default function PhysicalAIPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Physical AI</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        <Card>
          <CardHeader>
            <Clock className="w-8 h-8 mb-2" />
            <CardTitle>Durasi</CardTitle>
            <CardDescription>10 minggu</CardDescription>
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
            <CardDescription>1 Maret 2025</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Robot className="w-8 h-8 mb-2" />
            <CardTitle>Fokus</CardTitle>
            <CardDescription>Physical AI</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Deskripsi Kursus</h2>
          <p className="mb-4">
            Kursus "Physical AI" dirancang untuk mengeksplorasi penerapan AI dalam sistem fisik dan robotika. Anda akan
            mempelajari bagaimana mengintegrasikan algoritma AI dengan sensor dan aktuator, serta bagaimana merancang
            dan mengimplementasikan sistem AI yang dapat berinteraksi dengan dunia fisik.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Silabus</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Minggu 1-2: Pengenalan Physical AI dan Dasar-dasar Robotika</li>
            <li>Minggu 3-4: Sensor dan Aktuator untuk Sistem AI Fisik</li>
            <li>Minggu 5-6: Computer Vision untuk Robotika</li>
            <li>Minggu 7-8: Reinforcement Learning dalam Kontrol Robot</li>
            <li>Minggu 9: AI untuk Navigasi dan Pemetaan Robot</li>
            <li>Minggu 10: Proyek Akhir - Implementasi Sistem Physical AI</li>
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
                  <Label htmlFor="experience">Pengalaman AI dan Robotika</Label>
                  <Input id="experience" placeholder="Jelaskan pengalaman AI dan robotika Anda" />
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


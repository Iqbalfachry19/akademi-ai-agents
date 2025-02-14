import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, Sparkles, GraduationCap } from "lucide-react"

export default function GenerativeAIPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Generative AI</h1>

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
            <CardDescription>15 Januari 2025</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Sparkles className="w-8 h-8 mb-2" />
            <CardTitle>Fokus</CardTitle>
            <CardDescription>Generative AI</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Deskripsi Kursus</h2>
          <p className="mb-4">
            Kursus "Generative AI" dirancang untuk mengeksplorasi teknik dan aplikasi terkini dalam bidang Generative
            AI. Anda akan mempelajari berbagai model generatif dan cara menerapkannya untuk menghasilkan konten kreatif
            seperti teks, gambar, dan musik.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Silabus</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Minggu 1-2: Pengenalan Generative AI dan Variational Autoencoders (VAEs)</li>
            <li>Minggu 3-4: Generative Adversarial Networks (GANs) Lanjutan</li>
            <li>Minggu 5-6: Transformer-based Text Generation</li>
            <li>Minggu 7-8: Diffusion Models untuk Image Generation</li>
            <li>Minggu 9: Multimodal Generative AI</li>
            <li>Minggu 10: Proyek Akhir - Implementasi Sistem Generative AI</li>
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
                  <Label htmlFor="experience">Pengalaman Deep Learning</Label>
                  <Input id="experience" placeholder="Jelaskan pengalaman Deep Learning Anda" />
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


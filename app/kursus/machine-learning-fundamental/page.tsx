import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, BarChartIcon as ChartBar, GraduationCap } from "lucide-react"

export default function MachineLearningFundamentalPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Machine Learning Fundamental</h1>

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
            <CardDescription>Menengah</CardDescription>
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
            <ChartBar className="w-8 h-8 mb-2" />
            <CardTitle>Fokus</CardTitle>
            <CardDescription>Machine Learning</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Deskripsi Kursus</h2>
          <p className="mb-4">
            Kursus "Machine Learning Fundamental" dirancang untuk memberikan pemahaman mendalam tentang konsep dan
            algoritma dasar Machine Learning. Anda akan mempelajari berbagai teknik ML dan cara menerapkannya pada
            berbagai kasus penggunaan.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Silabus</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Minggu 1-2: Pengenalan Machine Learning dan Python untuk ML</li>
            <li>Minggu 3-4: Supervised Learning (Regresi dan Klasifikasi)</li>
            <li>Minggu 5-6: Unsupervised Learning (Clustering dan Dimensionality Reduction)</li>
            <li>Minggu 7-8: Evaluasi Model dan Optimisasi Hyperparameter</li>
            <li>Minggu 9: Ensemble Methods dan Feature Engineering</li>
            <li>Minggu 10: Proyek Akhir - Implementasi ML End-to-End</li>
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
                  <Label htmlFor="experience">Pengalaman Programming</Label>
                  <Input id="experience" placeholder="Jelaskan pengalaman programming Anda" />
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


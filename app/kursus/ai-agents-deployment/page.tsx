import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, Clock, GraduationCap, Server } from "lucide-react"

export default function AIAgentsDeploymentPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">AI Agents Deployment</h1>

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
            <CardDescription>15 November 2024</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Server className="w-8 h-8 mb-2" />
            <CardTitle>Fokus</CardTitle>
            <CardDescription>Deployment</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Deskripsi Kursus</h2>
          <p className="mb-4">
            Kursus "AI Agents Deployment" dirancang untuk membekali Anda dengan keterampilan yang diperlukan untuk
            men-deploy AI Agents ke berbagai platform dan lingkungan. Anda akan mempelajari best practices, teknik
            skalabilitas, dan manajemen AI Agents di lingkungan produksi.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Silabus</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Minggu 1: Pengenalan Deployment AI Agents dan Persiapan Lingkungan</li>
            <li>Minggu 2: Containerization AI Agents dengan Docker</li>
            <li>Minggu 3: Deployment ke Cloud Platforms (AWS, Google Cloud, Azure)</li>
            <li>Minggu 4: Skalabilitas dan Load Balancing untuk AI Agents</li>
            <li>Minggu 5: Monitoring, Logging, dan Maintenance AI Agents</li>
            <li>Minggu 6: Proyek Akhir - Full Deployment Workflow untuk AI Agent</li>
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
                  <Label htmlFor="experience">Pengalaman Deployment</Label>
                  <Input id="experience" placeholder="Jelaskan pengalaman deployment Anda" />
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


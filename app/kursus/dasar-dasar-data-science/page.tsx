import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Clock, Database, GraduationCap } from "lucide-react";
import { CourseRegistrationForm } from "../../../components/course-registration-form";
import Link from "next/link";

export default function DasarDasarDataSciencePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Dasar-dasar Data Science
      </h1>

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
            <CardDescription>Pemula</CardDescription>
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
            <Database className="w-8 h-8 mb-2" />
            <CardTitle>Fokus</CardTitle>
            <CardDescription>Data Science</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Deskripsi Kursus</h2>
          <p className="mb-4">
            Kursus "Dasar-dasar Data Science" dirancang untuk memperkenalkan
            Anda pada konsep fundamental dan alat-alat dalam Data Science. Anda
            akan mempelajari cara mengumpulkan, menganalisis, dan
            menginterpretasikan data untuk menghasilkan wawasan yang berharga.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Silabus</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Minggu 1-2: Pengenalan Data Science dan Statistik Dasar</li>
            <li>Minggu 3-4: Pengolahan dan Visualisasi Data dengan Python</li>
            <li>Minggu 5-6: Analisis Eksploratori Data (EDA)</li>
            <li>Minggu 7: Pengenalan Machine Learning untuk Data Science</li>
            <li>Minggu 8: Proyek Akhir - Analisis Data End-to-End</li>
          </ul>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Daftar Kursus</CardTitle>
            <CardDescription>
              Isi formulir di bawah untuk mendaftar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CourseRegistrationForm
              courseName="Dasar-dasar Data Science"
              experienceLabel="Latar Belakang"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

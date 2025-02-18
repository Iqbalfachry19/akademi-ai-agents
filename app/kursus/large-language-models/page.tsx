import { CourseRegistrationForm } from "@/components/course-registration-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, Bot, GraduationCap } from "lucide-react";

export default function LargeLanguageModelsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Large Language Models (LLM)
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
            <CardDescription>Lanjutan</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Calendar className="w-8 h-8 mb-2" />
            <CardTitle>Mulai</CardTitle>
            <CardDescription>1 Desember 2024</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Bot className="w-8 h-8 mb-2" />
            <CardTitle>Fokus</CardTitle>
            <CardDescription>LLM</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Deskripsi Kursus</h2>
          <p className="mb-4">
            Kursus "Large Language Models (LLM)" dirancang untuk memberikan
            pemahaman mendalam tentang arsitektur, pelatihan, dan penerapan LLM.
            Anda akan mempelajari cara kerja model-model seperti GPT dan BERT,
            serta bagaimana menggunakannya dalam berbagai aplikasi.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Silabus</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Minggu 1-2: Pengenalan LLM dan Arsitektur Transformer</li>
            <li>Minggu 3-4: Teknik Pre-training dan Fine-tuning LLM</li>
            <li>Minggu 5: Prompt Engineering dan Few-shot Learning</li>
            <li>Minggu 6: Etika dan Bias dalam LLM</li>
            <li>Minggu 7: Aplikasi LLM dalam NLP Tasks</li>
            <li>Minggu 8: Proyek Akhir - Implementasi dan Fine-tuning LLM</li>
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
              courseName="Large Language Models (LLM)"
              experienceLabel="Pengalaman NLP"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

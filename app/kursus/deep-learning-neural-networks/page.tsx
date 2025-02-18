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
import { Calendar, Clock, Network, GraduationCap } from "lucide-react";

export default function DeepLearningNeuralNetworksPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Deep Learning dan Neural Networks
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
        <Card>
          <CardHeader>
            <Clock className="w-8 h-8 mb-2" />
            <CardTitle>Durasi</CardTitle>
            <CardDescription>12 minggu</CardDescription>
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
            <CardDescription>1 November 2024</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <Network className="w-8 h-8 mb-2" />
            <CardTitle>Fokus</CardTitle>
            <CardDescription>Deep Learning</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Deskripsi Kursus</h2>
          <p className="mb-4">
            Kursus "Deep Learning dan Neural Networks" dirancang untuk
            memberikan pemahaman mendalam tentang arsitektur dan aplikasi Deep
            Learning. Anda akan mempelajari berbagai jenis neural networks dan
            cara menerapkannya pada berbagai tugas kompleks.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Silabus</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Minggu 1-2: Dasar-dasar Neural Networks dan Backpropagation</li>
            <li>
              Minggu 3-4: Convolutional Neural Networks (CNNs) untuk Computer
              Vision
            </li>
            <li>
              Minggu 5-6: Recurrent Neural Networks (RNNs) dan Long Short-Term
              Memory (LSTM)
            </li>
            <li>Minggu 7-8: Generative Adversarial Networks (GANs)</li>
            <li>Minggu 9-10: Transfer Learning dan Fine-tuning</li>
            <li>
              Minggu 11-12: Proyek Akhir - Implementasi Deep Learning untuk
              Masalah Kompleks
            </li>
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
              courseName="Deep Learning dan Neural Networks"
              experienceLabel="Pengalaman Machine Learning"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

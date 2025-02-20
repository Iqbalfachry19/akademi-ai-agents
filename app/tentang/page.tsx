import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Target, Award } from "lucide-react";

export default function TentangPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Tentang Akademi AI Agents
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Kami adalah platform pendidikan yang berdedikasi untuk membantu
          individu dan organisasi menguasai teknologi AI Agents untuk masa depan
          yang lebih baik.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        <Card className="p-6">
          <div className="flex flex-col items-center text-center">
            <Brain className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Visi Kami</h3>
            <p className="text-gray-600">
              Menjadi pemimpin global dalam pendidikan AI Agents dan
              memberdayakan individu untuk menciptakan solusi AI yang inovatif.
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex flex-col items-center text-center">
            <Target className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Misi Kami</h3>
            <p className="text-gray-600">
              Menyediakan pendidikan berkualitas tinggi dalam AI Agents yang
              dapat diakses oleh semua orang, di mana saja.
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex flex-col items-center text-center">
            <Award className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Nilai-Nilai Kami</h3>
            <p className="text-gray-600">
              Inovasi, Keunggulan, Aksesibilitas, dan Pembelajaran Berkelanjutan
              adalah nilai-nilai utama yang kami junjung tinggi.
            </p>
          </div>
        </Card>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Tim Kami
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="p-6">
            <CardContent className="flex flex-col items-center text-center pt-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
                <img
                  src="/placeholder.svg?height=96&width=96"
                  alt="CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Dr. Sarah Johnson</h3>
              <p className="text-gray-600 mb-2">CEO & Co-founder</p>
              <p className="text-sm text-gray-500">
                Ahli AI dengan pengalaman 15+ tahun dalam pengembangan AI Agents
                dan machine learning.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="flex flex-col items-center text-center pt-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
                <img
                  src="/placeholder.svg?height=96&width=96"
                  alt="CTO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
              <p className="text-gray-600 mb-2">CTO</p>
              <p className="text-sm text-gray-500">
                Spesialis dalam arsitektur AI dan pengembangan framework untuk
                AI Agents.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="flex flex-col items-center text-center pt-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 overflow-hidden">
                <img
                  src="/placeholder.svg?height=96&width=96"
                  alt="Head of Education"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Dr. Amanda Silva</h3>
              <p className="text-gray-600 mb-2">Head of Education</p>
              <p className="text-sm text-gray-500">
                Pakar pendidikan dengan fokus pada pengembangan kurikulum AI
                yang efektif.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Pencapaian Kami
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <Card className="p-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">10,000+</p>
              <p className="text-gray-600">Siswa Aktif</p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">50+</p>
              <p className="text-gray-600">Instruktur Ahli</p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">95%</p>
              <p className="text-gray-600">Tingkat Kepuasan</p>
            </div>
          </Card>
          <Card className="p-6">
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">100+</p>
              <p className="text-gray-600">Perusahaan Partner</p>
            </div>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Bergabung dengan Kami
        </h2>
        <Card className="p-8 text-center">
          <Users className="h-12 w-12 mx-auto text-primary mb-4" />
          <h3 className="text-xl font-bold mb-4">
            Jadilah Bagian dari Revolusi AI
          </h3>
          <p className="text-gray-600 mb-4 max-w-2xl mx-auto">
            Kami selalu mencari talenta-talenta terbaik untuk bergabung dengan
            tim kami. Jika Anda memiliki passion dalam AI dan pendidikan, kami
            ingin mendengar dari Anda.
          </p>
          <p className="text-primary">
            Kirim CV Anda ke:{" "}
            <a
              href="mailto:careers@akademi-ai-agents.com"
              className="underline"
            >
              careers@akademi-ai-agents.com
            </a>
          </p>
        </Card>
      </section>
    </div>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export default function KontakPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Hubungi Kami</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Kami siap membantu Anda. Silakan hubungi kami melalui form di bawah
          ini atau gunakan informasi kontak yang tersedia.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Kirim Pesan</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Nama Lengkap
                  </label>
                  <Input id="name" placeholder="Masukkan nama lengkap Anda" />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Masukkan email Anda"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-1"
                  >
                    Subjek
                  </label>
                  <Input id="subject" placeholder="Subjek pesan Anda" />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tulis pesan Anda di sini"
                    rows={5}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Kirim Pesan
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Informasi Kontak</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-4">
                <Mail className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:info@akademi-ai-agents.com"
                    className="text-gray-600 hover:text-primary"
                  >
                    info@akademi-ai-agents.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Telepon</p>
                  <a
                    href="tel:+6281234567890"
                    className="text-gray-600 hover:text-primary"
                  >
                    +62 812 3456 7890
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-5 w-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Alamat</p>
                  <p className="text-gray-600">
                    Gedung Tech Hub, Lantai 12
                    <br />
                    Jl. Teknologi No. 123
                    <br />
                    Jakarta Selatan, 12345
                    <br />
                    Indonesia
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Jam Operasional</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Senin - Jumat</span>
                  <span>09:00 - 17:00 WIB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sabtu</span>
                  <span>09:00 - 15:00 WIB</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Minggu</span>
                  <span>Tutup</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Live Chat</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <MessageSquare className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-gray-600">
                    Tim support kami siap membantu Anda melalui live chat selama
                    jam operasional.
                  </p>
                  <Button className="mt-4">Mulai Chat</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
